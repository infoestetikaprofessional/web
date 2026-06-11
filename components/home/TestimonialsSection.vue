<script setup lang="ts">
// Renders nothing until real testimonials are added to `testimonials.items`
// in the locale files. Item shape:
// { "quote": "...", "name": "Marie L.", "role": "PMU Artist", "city": "Paris", "photo": "marie" }
// `photo` maps to /images/testimonials/<photo>.jpg (omit for no photo).
const { tm, rt } = useI18n()
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

const delayClasses = ['', 'animate-delay-100', 'animate-delay-100', 'animate-delay-200']
</script>

<template>
  <section v-if="items.length" id="testimonials" class="bg-white py-20 md:py-24">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 class="text-section font-bold text-gray-800">
          {{ $t('testimonials.title') }}
        </h2>
        <p class="mt-4 text-gray-500">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <div
        ref="target"
        class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
      >
        <figure
          v-for="(item, index) in items"
          :key="item.name"
          class="flex flex-col rounded-2xl bg-white p-7 md:p-8 shadow-card ring-1 ring-border/40"
          :class="isInView ? `animate-fade-up ${delayClasses[index] ?? ''}` : 'opacity-0'"
        >
          <svg
            class="w-8 h-8 text-primary/25 mb-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote class="flex-1 font-serif italic text-gray-700 leading-relaxed">
            {{ item.quote }}
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-4">
            <img
              v-if="item.photo"
              :src="`/images/testimonials/${item.photo}.jpg`"
              :alt="item.name"
              class="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10 shrink-0"
              loading="lazy"
              width="56"
              height="56"
            />
            <div class="min-w-0">
              <div class="font-semibold text-gray-800 leading-tight">{{ item.name }}</div>
              <div class="text-sm text-gray-500 leading-tight mt-0.5">
                {{ item.role }}<template v-if="item.city">, {{ item.city }}</template>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
