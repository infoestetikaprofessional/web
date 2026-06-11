<script setup lang="ts">
// Testimonials read from `testimonials.items` in the locale files.
// Item shape: { quote, name, role, city, photo } where photo maps to
// /images/testimonials/<photo>.jpg (portrait 3:4).
const { t, tm, rt } = useI18n()
const { target, isInView } = useInView()

interface Testimonial {
  quote: string
  name: string
  role: string
  city: string
  photo: string
}

const items = computed<Testimonial[]>(() => {
  const raw = tm('testimonials.items')
  if (!Array.isArray(raw)) return []
  return raw.map((item: any) => ({
    quote: rt(item.quote),
    name: rt(item.name),
    role: rt(item.role),
    city: rt(item.city),
    photo: item.photo ? rt(item.photo) : '',
  }))
})

// Render the last word of the heading in italic for a soft editorial accent.
const titleParts = computed(() => {
  const s = t('testimonials.title').trim()
  const i = s.lastIndexOf(' ')
  return i < 0 ? [s, ''] : [s.slice(0, i), s.slice(i + 1)]
})

const delayClasses = ['', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300']
</script>

<template>
  <section v-if="items.length" id="testimonials" class="bg-beige/40 py-20 md:py-28">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
          {{ $t('testimonials.eyebrow') }}
        </p>
        <h2 class="mt-4 text-section font-serif font-bold text-primary">
          {{ titleParts[0] }} <em class="italic font-normal">{{ titleParts[1] }}</em>
        </h2>
        <div class="mx-auto mt-6 h-px w-12 bg-primary/30" />
      </div>

      <div
        ref="target"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 max-w-6xl mx-auto"
      >
        <figure
          v-for="(item, index) in items"
          :key="item.name"
          :class="isInView ? `animate-fade-up ${delayClasses[index] ?? ''}` : 'opacity-0'"
        >
          <!-- Portrait photo -->
          <div class="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-beige/40 to-beige-dark/40 shadow-card">
            <img
              :src="`/images/testimonials/${item.photo}.jpg`"
              :alt="item.name"
              class="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          <!-- Overlapping quote card -->
          <figcaption class="relative -mt-16 mx-4 md:mx-5 rounded-2xl bg-white p-6 md:p-7 shadow-card">
            <svg
              class="w-7 h-7 text-secondary/30 mb-3"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote class="font-serif italic text-gray-700 leading-relaxed">
              {{ item.quote }}
            </blockquote>
            <div class="mt-5 pt-5 border-t border-border/60">
              <div class="font-sans text-sm font-bold uppercase tracking-wider text-primary">
                {{ item.name }}
              </div>
              <div class="mt-1 text-sm text-gray-500">
                {{ item.role }}<template v-if="item.city"> — {{ item.city }}</template>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
