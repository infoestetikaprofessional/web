<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const isYearly = ref(false)
</script>

<template>
  <section id="pricing" class="bg-beige py-20 md:py-24">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-section font-bold text-gray-800">
          {{ $t('pricing.title') }}
        </h2>
        <p class="mt-4 text-gray-500 leading-relaxed">
          {{ $t('pricing.subtitle') }}
        </p>
      </div>

      <!-- Billing toggle -->
      <div class="flex items-center justify-center gap-3 mb-10">
        <span
          class="text-sm font-medium transition-colors"
          :class="!isYearly ? 'text-primary' : 'text-gray-400'"
        >
          {{ $t('pricing.toggle.monthly') }}
        </span>
        <button
          class="relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          :class="isYearly ? 'bg-primary' : 'bg-gray-300'"
          @click="isYearly = !isYearly"
          :aria-label="$t('pricing.toggle.label')"
        >
          <span
            class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
            :class="isYearly ? 'translate-x-6' : 'translate-x-0'"
          />
        </button>
        <span
          class="text-sm font-medium transition-colors"
          :class="isYearly ? 'text-primary' : 'text-gray-400'"
        >
          {{ $t('pricing.toggle.yearly') }}
        </span>
      </div>

      <!-- Single plan card -->
      <div class="max-w-md mx-auto">
        <div class="relative flex flex-col rounded-xl bg-white p-8 md:p-10 shadow-card ring-2 ring-primary">
          <div class="absolute -top-3 left-1/2 -translate-x-1/2">
            <span class="inline-flex items-center px-4 py-1 text-xs font-semibold rounded-full bg-primary text-white whitespace-nowrap">
              {{ $t('pricing.plan.badge') }}
            </span>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 font-sans text-center">
            {{ $t('pricing.plan.name') }}
          </h3>
          <p class="text-sm text-gray-400 mt-1 text-center">
            {{ $t('pricing.plan.subtitle') }}
          </p>

          <div class="flex justify-center mt-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-success/10 text-success">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              {{ $t('pricing.plan.freeTrial') }}
            </span>
          </div>

          <!-- Pricing display -->
          <div class="mt-6 text-center">
            <template v-if="!isYearly">
              <div class="flex items-baseline justify-center gap-2">
                <span class="text-lg text-gray-400 line-through">€9,99</span>
                <span class="text-4xl font-serif font-bold text-primary">€6,99</span>
                <span class="text-sm text-gray-500">{{ $t('pricing.plan.monthlyPeriod') }}</span>
              </div>
              <p class="text-xs text-success font-medium mt-1">
                {{ $t('pricing.plan.introOffer') }}
              </p>
            </template>
            <template v-else>
              <div class="flex items-baseline justify-center gap-2">
                <span class="text-lg text-gray-400 line-through">€119,88</span>
                <span class="text-4xl font-serif font-bold text-primary">€59,99</span>
                <span class="text-sm text-gray-500">{{ $t('pricing.plan.yearlyPeriod') }}</span>
              </div>
              <p class="text-xs text-success font-medium mt-1">
                {{ $t('pricing.plan.yearlySavings') }}
              </p>
            </template>
          </div>

          <ul class="flex-1 space-y-3 mt-8 mb-8">
            <li
              v-for="(feature, i) in [
                $t('pricing.plan.features.clients'),
                $t('pricing.plan.features.scheduling'),
                $t('pricing.plan.features.consentBuilder'),
                $t('pricing.plan.features.medicalHistory'),
                $t('pricing.plan.features.treatmentNotes'),
                $t('pricing.plan.features.portfolio'),
                $t('pricing.plan.features.offline'),
                $t('pricing.plan.features.support'),
              ]"
              :key="i"
              class="flex items-start gap-2.5 text-sm text-gray-600"
            >
              <svg
                class="w-4 h-4 text-success shrink-0 mt-0.5"
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
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="flex flex-col sm:flex-row gap-3">
            <a
              :href="APP_STORE_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path :d="appleIcon" />
              </svg>
              {{ $t('pricing.plan.downloadIos') }}
            </a>
            <NuxtLink
              :to="`${localePath('/')}#waitlist`"
              class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-white text-sm font-semibold rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path :d="googlePlayIcon" />
              </svg>
              {{ $t('waitlist.androidCta') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
