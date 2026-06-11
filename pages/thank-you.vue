<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

useHead({
  title: t('meta.thankYou.title'),
  meta: [{ name: 'description', content: t('meta.thankYou.description') }],
})

useSeoMeta({
  ogTitle: () => t('meta.thankYou.title'),
  ogDescription: () => t('meta.thankYou.description'),
  ogType: 'website',
  ogImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
  ogUrl: () => `https://estetikaprofessional.com${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.thankYou.title'),
  twitterDescription: () => t('meta.thankYou.description'),
  twitterImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
})

const localePath = useLocalePath()
</script>

<template>
  <div class="min-h-[70vh] flex items-center py-16 md:py-24">
    <div class="container-main max-w-2xl text-center">
      <div class="bg-white rounded-large p-8 md:p-12 shadow-card">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
          <svg
            class="w-8 h-8 text-success"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 class="text-3xl md:text-4xl font-serif font-bold text-gray-800">
          {{ $t('thankYou.download.title') }}
        </h1>

        <p class="mt-4 text-gray-500 text-lg">
          {{ $t('thankYou.download.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <a
            :href="APP_STORE_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-button transition-all duration-200 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path :d="appleIcon" />
            </svg>
            {{ $t('thankYou.download.ios') }}
          </a>
          <NuxtLink
            :to="`${localePath('/')}#waitlist`"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-button transition-all duration-200 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path :d="googlePlayIcon" />
            </svg>
            {{ $t('waitlist.androidCta') }}
          </NuxtLink>
        </div>

        <div class="mt-10 pt-8 border-t border-border/50">
          <p class="text-sm text-gray-400 mb-4">
            {{ $t('thankYou.support') }}
            <a
              href="mailto:support@estetikaprofessional.com"
              class="text-primary hover:underline"
            >
              support@estetikaprofessional.com
            </a>
          </p>
          <BaseButton href="/" variant="outline">
            {{ $t('thankYou.backToHomepage') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
