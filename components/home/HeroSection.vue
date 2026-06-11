<script setup lang="ts">
const mounted = ref(false)

onMounted(() => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
  if (prefersReducedMotion) {
    mounted.value = true
    return
  }
  requestAnimationFrame(() => {
    mounted.value = true
  })
})
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-beige pt-12 pb-16 md:pt-20 md:pb-28">
    <div class="container-main">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
        <div class="lg:col-span-3 max-w-xl">
          <h1
            class="text-hero font-serif font-bold text-gray-800"
            :class="mounted ? 'animate-fade-up' : 'opacity-0'"
          >
            {{ $t('hero.title') }}
            <span class="text-primary">{{ $t('hero.titleHighlight') }}</span>
          </h1>

          <p
            class="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl"
            :class="mounted ? 'animate-fade-up animate-delay-200' : 'opacity-0'"
          >
            {{ $t('hero.subtitle') }}
          </p>

          <div
            class="mt-8 flex flex-col sm:flex-row gap-3"
            :class="mounted ? 'animate-fade-up animate-delay-300' : 'opacity-0'"
          >
            <a
              :href="APP_STORE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white text-base font-semibold rounded-2xl hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-200"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path :d="appleIcon" />
              </svg>
              {{ $t('hero.download.ios') }}
            </a>
          </div>

          <WaitlistForm
            class="mt-8"
            :class="mounted ? 'animate-fade-up animate-delay-300' : 'opacity-0'"
          />

          <div
            class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
            :class="mounted ? 'animate-fade-up animate-delay-400' : 'opacity-0'"
          >
            <span class="flex items-center gap-1.5 text-sm text-gray-400">
              <svg class="w-4 h-4 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {{ $t('hero.badges.gdpr') }}
            </span>
            <span class="flex items-center gap-1.5 text-sm text-gray-400">
              <svg class="w-4 h-4 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {{ $t('hero.badges.offline') }}
            </span>
            <span class="flex items-center gap-1.5 text-sm text-gray-400">
              <svg class="w-4 h-4 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {{ $t('hero.badges.platforms') }}
            </span>
          </div>
        </div>

        <div
          class="hidden lg:flex lg:col-span-2 justify-center lg:justify-end"
          :class="mounted ? 'animate-fade-in animate-delay-300' : 'opacity-0'"
        >
          <!-- Phone frame -->
          <div class="relative w-[280px]">
            <!-- Device bezel -->
            <div class="relative rounded-[3rem] bg-gray-900 p-[10px] shadow-2xl">
              <!-- Notch -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-gray-900 rounded-b-2xl z-10" />
              <!-- Screen -->
              <div class="relative rounded-[2.4rem] overflow-hidden bg-beige pt-[18px]" style="aspect-ratio: 9 / 19.5">
                <img
                  src="/images/06-today.png"
                  alt="Estetika Professional app dashboard showing today's schedule, revenue, and appointments"
                  class="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <!-- Reflection highlight -->
            <div class="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
