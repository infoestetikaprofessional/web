<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const socials = [
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: instagramIcon },
  { name: 'Facebook', href: SOCIAL_LINKS.facebook, icon: facebookIcon },
  { name: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: tiktokIcon },
  { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: linkedinIcon },
]

// Render the last word of the heading in italic for a soft editorial accent.
const connectParts = computed(() => {
  const s = t('footer.connectTitle').trim()
  const i = s.lastIndexOf(' ')
  return i < 0 ? [s, ''] : [s.slice(0, i), s.slice(i + 1)]
})
</script>

<template>
  <footer>
    <!-- Navy "Let's connect" community band -->
    <div class="bg-[#1f2952] text-[#F5EDE8]">
      <div class="container-main py-14 md:py-20 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5EDE8]/50">
          {{ $t('footer.community') }}
        </p>
        <h2 class="mt-3 font-serif text-3xl md:text-4xl">
          {{ connectParts[0] }} <em class="italic font-normal">{{ connectParts[1] }}</em>
        </h2>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            class="inline-flex items-center gap-2.5 rounded-xl border border-[#F5EDE8]/20 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#F5EDE8] hover:bg-[#F5EDE8]/10 hover:border-[#F5EDE8]/45 transition-colors duration-200"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path :d="social.icon" />
            </svg>
            {{ social.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- Blush footer -->
    <div class="border-t border-border/50 bg-[#F5EDE8]">
      <div class="container-main py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <NuxtLink to="/" class="inline-flex flex-col leading-none">
              <span class="font-serif text-lg font-semibold text-[#1f2952] opacity-100 uppercase tracking-[0.2em]">
                ESTETIKA
              </span>
              <span class="font-sans text-[10px] font-light text-[#1f2952] opacity-[0.38] tracking-[0.15em] uppercase">
                PROFESSIONAL
              </span>
            </NuxtLink>
            <p class="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              {{ $t('footer.tagline') }}
            </p>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              {{ $t('footer.legal') }}
            </h4>
            <ul class="space-y-1">
              <li>
                <NuxtLink
                  :to="localePath('/privacy-policy')"
                  class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                >
                  {{ $t('footer.privacyPolicy') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/terms-of-service')"
                  class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                >
                  {{ $t('footer.termsOfService') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/cookie-policy')"
                  class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                >
                  {{ $t('footer.cookiePolicy') }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
              {{ $t('footer.contact') }}
            </h4>
            <a
              href="mailto:support@estetikaprofessional.com"
              class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
            >
              support@estetikaprofessional.com
            </a>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-x-2 gap-y-1 text-center">
          <p class="text-xs text-gray-400">
            {{ $t('footer.copyright') }}
          </p>
          <span class="hidden sm:inline text-xs text-gray-400" aria-hidden="true">·</span>
          <p class="text-xs text-gray-400">
            {{ $t('footer.builtInEurope') }} 🤍
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
