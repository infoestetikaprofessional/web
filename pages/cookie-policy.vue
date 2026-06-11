<script setup lang="ts">
definePageMeta({ layout: 'legal' })
const { t } = useI18n()
const route = useRoute()
useHead({
  title: t('meta.cookie.title'),
  meta: [{ name: 'description', content: t('meta.cookie.description') }],
})
useSeoMeta({
  ogTitle: () => t('meta.cookie.title'),
  ogDescription: () => t('meta.cookie.description'),
  ogType: 'website',
  ogImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
  ogUrl: () => `https://estetikaprofessional.com${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('meta.cookie.title'),
  twitterDescription: () => t('meta.cookie.description'),
  twitterImage: 'https://estetikaprofessional.com/images/01-dashboard.png',
})
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-sm text-gray-400 mb-2">{{ $t('legal.cookie.lastUpdated') }}</p>
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-gray-800">
        {{ $t('legal.cookie.title') }}
      </h1>
      <p class="mt-4 text-gray-500">
        {{ $t('legal.cookie.intro') }}
      </p>
    </div>

    <div class="bg-white rounded-large p-6 md:p-8 shadow-card space-y-8">
      <nav class="pb-6 border-b border-border/50">
        <h2 class="text-sm font-semibold text-gray-800 mb-3 font-sans">{{ $t('legal.tableOfContents') }}</h2>
        <ol class="space-y-3 sm:space-y-1.5 text-sm text-primary">
          <li><a href="#what-are-cookies" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.whatAreCookies') }}</a></li>
          <li><a href="#cookies-we-use" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.cookiesWeUse') }}</a></li>
          <li><a href="#strictly-necessary" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.strictlyNecessary') }}</a></li>
          <li><a href="#analytics-cookies" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.analyticsCookies') }}</a></li>
          <li><a href="#third-party" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.thirdParty') }}</a></li>
          <li><a href="#managing-cookies" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.managingCookies') }}</a></li>
          <li><a href="#cookie-changes" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.cookieChanges') }}</a></li>
          <li><a href="#cookie-contact" class="inline-block py-1 hover:underline">{{ $t('legal.cookie.toc.cookieContact') }}</a></li>
        </ol>
      </nav>

      <section id="what-are-cookies">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.whatAreCookies.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.cookie.sections.whatAreCookies.body') }}</p>
      </section>

      <section id="cookies-we-use">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.cookiesWeUse.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed mb-4">
          {{ $t('legal.cookie.sections.cookiesWeUse.intro') }}
        </p>
        <div class="hidden md:block overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-border">
                <th class="text-left py-2 pr-4 font-semibold text-gray-700">{{ $t('legal.cookie.cookieTable.cookie') }}</th>
                <th class="text-left py-2 pr-4 font-semibold text-gray-700">{{ $t('legal.cookie.cookieTable.type') }}</th>
                <th class="text-left py-2 pr-4 font-semibold text-gray-700">{{ $t('legal.cookie.cookieTable.duration') }}</th>
                <th class="text-left py-2 font-semibold text-gray-700">{{ $t('legal.cookie.cookieTable.purpose') }}</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              <tr class="border-b border-border/50">
                <td class="py-2 pr-4 font-mono text-xs">sb-*-auth-token</td>
                <td class="py-2 pr-4">{{ $t('legal.cookie.cookieTable.strictlyNecessary') }}</td>
                <td class="py-2 pr-4">{{ $t('legal.cookie.cookieTable.session') }}</td>
                <td class="py-2">{{ $t('legal.cookie.cookieTable.supabaseAuthPurpose') }}</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 font-mono text-xs">__stripe_mid</td>
                <td class="py-2 pr-4">{{ $t('legal.cookie.cookieTable.functionality') }}</td>
                <td class="py-2 pr-4">{{ $t('legal.cookie.cookieTable.oneYear') }}</td>
                <td class="py-2">{{ $t('legal.cookie.cookieTable.stripeAuthPurpose') }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="md:hidden space-y-3">
          <div class="rounded-lg bg-beige/40 p-4">
            <p class="font-mono text-xs text-gray-800 font-semibold mb-2">sb-*-auth-token</p>
            <dl class="space-y-1 text-sm">
              <div class="flex justify-between">
                <dt class="text-gray-400">{{ $t('legal.cookie.cookieTable.type') }}</dt>
                <dd class="text-gray-600">{{ $t('legal.cookie.cookieTable.strictlyNecessary') }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-400">{{ $t('legal.cookie.cookieTable.duration') }}</dt>
                <dd class="text-gray-600">{{ $t('legal.cookie.cookieTable.session') }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-400">{{ $t('legal.cookie.cookieTable.purpose') }}</dt>
                <dd class="text-gray-600 text-right max-w-[60%]">{{ $t('legal.cookie.cookieTable.supabaseAuthPurpose') }}</dd>
              </div>
            </dl>
          </div>

          <div class="rounded-lg bg-beige/40 p-4">
            <p class="font-mono text-xs text-gray-800 font-semibold mb-2">__stripe_mid</p>
            <dl class="space-y-1 text-sm">
              <div class="flex justify-between">
                <dt class="text-gray-400">{{ $t('legal.cookie.cookieTable.type') }}</dt>
                <dd class="text-gray-600">{{ $t('legal.cookie.cookieTable.functionality') }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-400">{{ $t('legal.cookie.cookieTable.duration') }}</dt>
                <dd class="text-gray-600">{{ $t('legal.cookie.cookieTable.oneYear') }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-gray-400">{{ $t('legal.cookie.cookieTable.purpose') }}</dt>
                <dd class="text-gray-600 text-right max-w-[60%]">{{ $t('legal.cookie.cookieTable.stripeAuthPurpose') }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="strictly-necessary">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.strictlyNecessary.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.cookie.sections.strictlyNecessary.body') }}</p>
      </section>

      <section id="analytics-cookies">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.analyticsCookies.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.cookie.sections.analyticsCookies.body')" />
      </section>

      <section id="third-party">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.thirdParty.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.cookie.sections.thirdParty.body')" />
      </section>

      <section id="managing-cookies">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.managingCookies.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.cookie.sections.managingCookies.body')" />
      </section>

      <section id="cookie-changes">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.cookieChanges.heading') }}</h2>
        <p class="text-sm text-gray-600 leading-relaxed">{{ $t('legal.cookie.sections.cookieChanges.body') }}</p>
      </section>

      <section id="cookie-contact">
        <h2 class="text-xl font-serif font-semibold text-gray-800 mb-3">{{ $t('legal.cookie.sections.cookieContact.heading') }}</h2>
        <div class="text-sm text-gray-600 leading-relaxed" v-html="$t('legal.cookie.sections.cookieContact.body')" />
      </section>
    </div>
  </div>
</template>
