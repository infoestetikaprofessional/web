<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const { t } = useI18n()
const route = useRoute()
useHead({
  title: t('meta.privacy.title'),
  meta: [{ name: 'description', content: t('meta.privacy.description') }],
})
useSeoMeta({
  ogTitle: () => t('meta.privacy.title'),
  ogDescription: () => t('meta.privacy.description'),
  ogType: 'website',
  ogImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
  ogUrl: () => `https://estetikaprofessional.com${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.privacy.title'),
  twitterDescription: () => t('meta.privacy.description'),
  twitterImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
})
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-sm text-gray-400 mb-2">{{ $t('legal.privacy.lastUpdated') }}</p>
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-gray-800">
        {{ $t('legal.privacy.title') }}
      </h1>
      <p class="mt-4 text-gray-500">
        {{ $t('legal.privacy.intro') }}
      </p>
    </div>

    <div class="bg-white rounded-large p-6 md:p-8 shadow-card space-y-8">
      <nav class="pb-6 border-b border-border/50">
        <h2 class="text-sm font-semibold text-gray-800 mb-3 font-sans">{{ $t('legal.tableOfContents') }}</h2>
        <ol class="space-y-3 sm:space-y-1.5 text-sm text-primary">
          <li><a href="#controller" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.controller') }}</a></li>
          <li><a href="#data-collected" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.dataCollected') }}</a></li>
          <li><a href="#legal-basis" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.legalBasis') }}</a></li>
          <li><a href="#special-categories" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.specialCategories') }}</a></li>
          <li><a href="#how-we-use" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.howWeUse') }}</a></li>
          <li><a href="#data-processors" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.dataProcessors') }}</a></li>
          <li><a href="#data-retention" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.dataRetention') }}</a></li>
          <li><a href="#your-rights" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.yourRights') }}</a></li>
          <li><a href="#international" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.international') }}</a></li>
          <li><a href="#security" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.security') }}</a></li>
          <li><a href="#children" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.children') }}</a></li>
          <li><a href="#changes" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.changes') }}</a></li>
          <li><a href="#contact" class="inline-block py-1 hover:underline">{{ $t('legal.privacy.toc.contact') }}</a></li>
        </ol>
      </nav>

      <section id="controller">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.controller.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.controller.body')" />
      </section>

      <section id="data-collected">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.dataCollected.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.dataCollected.body')" />
      </section>

      <section id="legal-basis">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.legalBasis.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.legalBasis.body')" />
      </section>

      <section id="special-categories">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.specialCategories.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.specialCategories.body')" />
      </section>

      <section id="how-we-use">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.howWeUse.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.howWeUse.body')" />
      </section>

      <section id="data-processors">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.dataProcessors.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.dataProcessors.body')" />
      </section>

      <section id="data-retention">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.dataRetention.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.dataRetention.body')" />
      </section>

      <section id="your-rights">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.yourRights.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.yourRights.body')" />
      </section>

      <section id="international">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.international.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.privacy.sections.international.body') }}</p>
      </section>

      <section id="security">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.security.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.security.body')" />
      </section>

      <section id="children">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.children.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.privacy.sections.children.body') }}</p>
      </section>

      <section id="changes">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.changes.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.privacy.sections.changes.body') }}</p>
      </section>

      <section id="contact">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.privacy.sections.contact.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.privacy.sections.contact.body')" />
      </section>
    </div>
  </div>
</template>
