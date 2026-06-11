<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { organization, softwareApplication, faqPage } = useJsonLd()
useHead({
  title: t('meta.home.title'),
  meta: [{ name: 'description', content: t('meta.home.description') }],
  script: [
    { type: 'application/ld+json', innerHTML: computed(() => JSON.stringify(organization.value)) },
    { type: 'application/ld+json', innerHTML: computed(() => JSON.stringify(softwareApplication.value)) },
    { type: 'application/ld+json', innerHTML: computed(() => JSON.stringify(faqPage.value)) },
  ],
})
useSeoMeta({
  ogTitle: () => t('meta.home.title'),
  ogDescription: () => t('meta.home.description'),
  ogType: 'website',
  ogImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
  ogUrl: () => `https://estetikaprofessional.com${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.home.title'),
  twitterDescription: () => t('meta.home.description'),
  twitterImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
})
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesGrid />
    <TestimonialsSection />
    <HowItWorks />
    <TrustBadges />
    <PricingSection />
    <FaqSection />
    <FinalCta />
  </div>
</template>
