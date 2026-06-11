<script setup lang="ts">
import type { ComparisonCategory } from '~/types'

const { t } = useI18n()

const unlimited = computed(() => t('comparison.unlimited'))

const categories = computed<ComparisonCategory[]>(() => [
  {
    name: t('comparison.categories.clientManagement.name'),
    features: [
      { feature: t('comparison.categories.clientManagement.features.maxClients'), solo: '50', studio: unlimited.value, clinic: unlimited.value },
      { feature: t('comparison.categories.clientManagement.features.customFields'), solo: false, studio: true, clinic: true },
    ],
  },
  {
    name: t('comparison.categories.consentForms.name'),
    features: [
      { feature: t('comparison.categories.consentForms.features.systemTemplates'), solo: true, studio: true, clinic: true },
      { feature: t('comparison.categories.consentForms.features.customBuilder'), solo: false, studio: true, clinic: true },
      { feature: t('comparison.categories.consentForms.features.pdfGeneration'), solo: false, studio: true, clinic: true },
    ],
  },
  {
    name: t('comparison.categories.medicalHistory.name'),
    features: [
      { feature: t('comparison.categories.medicalHistory.features.fullTracking'), solo: false, studio: true, clinic: true },
      { feature: t('comparison.categories.medicalHistory.features.auditTrail'), solo: false, studio: true, clinic: true },
    ],
  },
  {
    name: t('comparison.categories.appointments.name'),
    features: [
      { feature: t('comparison.categories.appointments.features.basicScheduling'), solo: true, studio: true, clinic: true },
      { feature: t('comparison.categories.appointments.features.calendarView'), solo: false, studio: t('comparison.soon'), clinic: t('comparison.soon') },
    ],
  },
  {
    name: t('comparison.categories.portfolio.name'),
    features: [
      { feature: t('comparison.categories.portfolio.features.maxPhotos'), solo: '50', studio: '500', clinic: unlimited.value },
      { feature: t('comparison.categories.portfolio.features.beforeAfterSets'), solo: false, studio: true, clinic: true },
    ],
  },
  {
    name: t('comparison.categories.technical.name'),
    features: [
      { feature: t('comparison.categories.technical.features.offlineMode'), solo: false, studio: true, clinic: true },
      { feature: t('comparison.categories.technical.features.realtimeSync'), solo: true, studio: true, clinic: true },
    ],
  },
  {
    name: t('comparison.categories.support.name'),
    features: [
      { feature: t('comparison.categories.support.features.responseTime'), solo: '48h', studio: '24h', clinic: '12h' },
      { feature: t('comparison.categories.support.features.priority'), solo: false, studio: true, clinic: true },
      { feature: t('comparison.categories.support.features.onboardingCall'), solo: false, studio: false, clinic: true },
    ],
  },
])

const openCategories = ref<Record<string, boolean>>({})

function toggleCategory(name: string) {
  openCategories.value[name] = !openCategories.value[name]
}
</script>

<template>
  <section class="bg-white py-20 md:py-24">
    <div class="container-main max-w-5xl">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-section font-bold text-gray-800">
          {{ $t('comparison.title') }}
        </h2>
      </div>

      <div class="hidden md:block">
        <table class="w-full">
          <thead>
            <tr class="border-b-2 border-border">
              <th class="text-left py-4 pr-4 text-sm font-medium text-gray-500 w-2/5">
                {{ $t('comparison.featureColumn') }}
              </th>
              <th class="text-center py-4 px-4 text-sm font-semibold text-gray-800">
                {{ $t('pricing.tiers.solo.name') }}
              </th>
              <th class="text-center py-4 px-4 text-sm font-semibold text-primary">
                {{ $t('pricing.tiers.studio.name') }}
              </th>
              <th class="text-center py-4 px-4 text-sm font-semibold text-gray-800">
                {{ $t('pricing.tiers.clinic.name') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="category in categories" :key="category.name">
              <tr>
                <td
                  colspan="4"
                  class="pt-6 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
                >
                  {{ category.name }}
                </td>
              </tr>
              <tr
                v-for="(row, rIdx) in category.features"
                :key="row.feature"
                class="border-b border-border/50"
                :class="rIdx % 2 === 0 ? 'bg-gray-50/50' : ''"
              >
                <td class="py-3 pr-4 text-sm text-gray-600">
                  {{ row.feature }}
                </td>
                <td class="py-3 px-4 text-center">
                  <svg
                    v-if="row.solo === true"
                    class="w-5 h-5 text-success mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-else-if="row.solo === false" class="text-gray-300">&mdash;</span>
                  <span v-else class="text-sm text-gray-600">{{ row.solo }}</span>
                </td>
                <td class="py-3 px-4 text-center bg-primary/[0.02]">
                  <svg
                    v-if="row.studio === true"
                    class="w-5 h-5 text-success mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-else-if="row.studio === false" class="text-gray-300">&mdash;</span>
                  <span v-else class="text-sm text-gray-600">{{ row.studio }}</span>
                </td>
                <td class="py-3 px-4 text-center">
                  <svg
                    v-if="row.clinic === true"
                    class="w-5 h-5 text-success mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-else-if="row.clinic === false" class="text-gray-300">&mdash;</span>
                  <span v-else class="text-sm text-gray-600">{{ row.clinic }}</span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="md:hidden space-y-2">
        <div
          v-for="category in categories"
          :key="category.name"
          class="rounded-xl bg-beige/40 overflow-hidden"
        >
          <button
            class="w-full flex items-center justify-between px-5 py-4 text-left"
            @click="toggleCategory(category.name)"
          >
            <span class="text-sm font-semibold text-gray-800">
              {{ category.name }}
            </span>
            <svg
              class="w-4 h-4 text-gray-400 transition-transform duration-300"
              :class="openCategories[category.name] ? 'rotate-180' : ''"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out overflow-hidden"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[600px] opacity-100"
            leave-active-class="transition-all duration-200 ease-in overflow-hidden"
            leave-from-class="max-h-[600px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="openCategories[category.name]" class="px-5 pb-4">
              <div
                v-for="row in category.features"
                :key="row.feature"
                class="py-3 border-b border-border/30 last:border-b-0"
              >
                <p class="text-sm font-medium text-gray-700 mb-2">
                  {{ row.feature }}
                </p>
                <div class="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <span class="block text-[10px] text-gray-400 mb-1">{{ $t('pricing.tiers.solo.name') }}</span>
                    <svg
                      v-if="row.solo === true"
                      class="w-4 h-4 text-success mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span v-else-if="row.solo === false" class="text-xs text-gray-300">&mdash;</span>
                    <span v-else class="text-xs text-gray-600">{{ row.solo }}</span>
                  </div>
                  <div>
                    <span class="block text-[10px] text-gray-400 mb-1">{{ $t('pricing.tiers.studio.name') }}</span>
                    <svg
                      v-if="row.studio === true"
                      class="w-4 h-4 text-success mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span v-else-if="row.studio === false" class="text-xs text-gray-300">&mdash;</span>
                    <span v-else class="text-xs text-gray-600">{{ row.studio }}</span>
                  </div>
                  <div>
                    <span class="block text-[10px] text-gray-400 mb-1">{{ $t('pricing.tiers.clinic.name') }}</span>
                    <svg
                      v-if="row.clinic === true"
                      class="w-4 h-4 text-success mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span v-else-if="row.clinic === false" class="text-xs text-gray-300">&mdash;</span>
                    <span v-else class="text-xs text-gray-600">{{ row.clinic }}</span>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
