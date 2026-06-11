<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <section class="bg-beige py-20 md:py-24">
    <div class="container-main max-w-2xl text-center">
      <h2 class="text-section font-bold text-gray-800">
        {{ $t('finalCta.title') }}
      </h2>
      <p class="mt-4 text-gray-500 leading-relaxed">
        {{ $t('finalCta.subtitle') }}
      </p>
      <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          :href="APP_STORE_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white text-base font-semibold rounded-2xl hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-200"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path :d="appleIcon" />
          </svg>
          {{ $t('finalCta.download.ios') }}
        </a>
        <NuxtLink
          :to="`${localePath('/')}#waitlist`"
          class="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-white text-base font-semibold rounded-2xl hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-200"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path :d="googlePlayIcon" />
          </svg>
          {{ $t('waitlist.androidCta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
