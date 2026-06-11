<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const { t } = useI18n()
const route = useRoute()
useHead({
  title: t('meta.terms.title'),
  meta: [{ name: 'description', content: t('meta.terms.description') }],
})
useSeoMeta({
  ogTitle: () => t('meta.terms.title'),
  ogDescription: () => t('meta.terms.description'),
  ogType: 'website',
  ogImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
  ogUrl: () => `https://estetikaprofessional.com${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.terms.title'),
  twitterDescription: () => t('meta.terms.description'),
  twitterImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
})
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-sm text-gray-400 mb-2">{{ $t('legal.terms.lastUpdated') }}</p>
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-gray-800">
        {{ $t('legal.terms.title') }}
      </h1>
      <p class="mt-4 text-gray-500">
        {{ $t('legal.terms.intro') }}
      </p>
    </div>

    <div class="bg-white rounded-large p-6 md:p-8 shadow-card space-y-8">
      <nav class="pb-6 border-b border-border/50">
        <h2 class="text-sm font-semibold text-gray-800 mb-3 font-sans">{{ $t('legal.tableOfContents') }}</h2>
        <ol class="space-y-3 sm:space-y-1.5 text-sm text-primary">
          <li><a href="#acceptance" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.acceptance') }}</a></li>
          <li><a href="#service-description" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.serviceDescription') }}</a></li>
          <li><a href="#account" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.account') }}</a></li>
          <li><a href="#subscriptions" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.subscriptions') }}</a></li>
          <li><a href="#founders-club" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.foundersClub') }}</a></li>
          <li><a href="#payments" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.payments') }}</a></li>
          <li><a href="#refunds" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.refunds') }}</a></li>
          <li><a href="#acceptable-use" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.acceptableUse') }}</a></li>
          <li><a href="#data-responsibility" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.dataResponsibility') }}</a></li>
          <li><a href="#intellectual-property" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.intellectualProperty') }}</a></li>
          <li><a href="#liability" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.liability') }}</a></li>
          <li><a href="#termination" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.termination') }}</a></li>
          <li><a href="#governing-law" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.governingLaw') }}</a></li>
          <li><a href="#changes-terms" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.changesTerms') }}</a></li>
          <li><a href="#contact-terms" class="inline-block py-1 hover:underline">{{ $t('legal.terms.toc.contactTerms') }}</a></li>
        </ol>
      </nav>

      <section id="acceptance">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.acceptance.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.terms.sections.acceptance.body') }}</p>
      </section>

      <section id="service-description">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.serviceDescription.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.serviceDescription.body')" />
      </section>

      <section id="account">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.account.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.terms.sections.account.body') }}</p>
      </section>

      <section id="subscriptions">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.subscriptions.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.subscriptions.body')" />
      </section>

      <section id="founders-club">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.foundersClub.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.foundersClub.body')" />
      </section>

      <section id="payments">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.payments.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.terms.sections.payments.body') }}</p>
      </section>

      <section id="refunds">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.refunds.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.refunds.body')" />
      </section>

      <section id="acceptable-use">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.acceptableUse.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.acceptableUse.body')" />
      </section>

      <section id="data-responsibility">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.dataResponsibility.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.dataResponsibility.body')" />
      </section>

      <section id="intellectual-property">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.intellectualProperty.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.terms.sections.intellectualProperty.body') }}</p>
      </section>

      <section id="liability">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.liability.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.liability.body')" />
      </section>

      <section id="termination">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.termination.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.terms.sections.termination.body') }}</p>
      </section>

      <section id="governing-law">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.governingLaw.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.governingLaw.body')" />
      </section>

      <section id="changes-terms">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.changesTerms.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.terms.sections.changesTerms.body') }}</p>
      </section>

      <section id="contact-terms">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.terms.sections.contactTerms.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.terms.sections.contactTerms.body')" />
      </section>
    </div>
  </div>
</template>
