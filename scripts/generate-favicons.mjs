import sharp from 'sharp'
import pngToIco from 'png-to-ico'
import { writeFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const SOURCE = join(import.meta.dirname, '..', 'public', 'app-icon.svg')
const OUT = join(import.meta.dirname, '..', 'public')
const BG_COLOR = '#e8dbd7' // brand beige

async function generate() {
  console.log('Generating favicon set from', SOURCE)

  // 1. Generate PNGs at all required sizes
  const sizes = [
    { name: 'icon-16.png', size: 16 },
    { name: 'icon-32.png', size: 32 },
    { name: 'icon-48.png', size: 48 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
  ]

  for (const { name, size } of sizes) {
    await sharp(SOURCE)
      .resize(size, size, { fit: 'contain', background: 'transparent' })
      .png()
      .toFile(join(OUT, name))
    console.log(`  Created ${name} (${size}x${size})`)
  }

  // 2. Apple touch icon — 140px icon centered on 180px canvas with beige background
  await sharp(SOURCE)
    .resize(140, 140, { fit: 'contain', background: 'transparent' })
    .extend({
      top: 20, bottom: 20, left: 20, right: 20,
      background: BG_COLOR,
    })
    .png()
    .toFile(join(OUT, 'apple-touch-icon.png'))
  console.log('  Created apple-touch-icon.png (180x180)')

  // 3. Maskable icon — 409px safe zone centered on 512px canvas
  const maskPad = Math.round((512 - 409) / 2) // 52 (gives 52+409+51=512, but extend needs symmetric)
  await sharp(SOURCE)
    .resize(409, 409, { fit: 'contain', background: 'transparent' })
    .extend({
      top: 52, bottom: 51, left: 52, right: 51,
      background: BG_COLOR,
    })
    .png()
    .toFile(join(OUT, 'icon-mask.png'))
  console.log('  Created icon-mask.png (512x512, maskable)')

  // 4. Create multi-resolution favicon.ico from 16+32+48 PNGs
  const icoBuffer = await pngToIco([
    join(OUT, 'icon-16.png'),
    join(OUT, 'icon-32.png'),
    join(OUT, 'icon-48.png'),
  ])
  writeFileSync(join(OUT, 'favicon.ico'), icoBuffer)
  console.log('  Created favicon.ico (16+32+48)')

  // 5. Clean up temp PNGs
  for (const name of ['icon-16.png', 'icon-32.png', 'icon-48.png']) {
    unlinkSync(join(OUT, name))
  }
  console.log('  Cleaned up temp files')

  console.log('Done! All favicon files generated in public/')
}

generate().catch((err) => {
  console.error('Failed to generate favicons:', err)
  process.exit(1)
})
