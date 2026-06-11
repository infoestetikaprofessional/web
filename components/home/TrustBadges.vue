<script setup lang="ts">
const { t } = useI18n()

const badges = computed(() => [
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: t('trustBadges.items.gdpr.title'),
    description: t('trustBadges.items.gdpr.description'),
  },
  {
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: t('trustBadges.items.encrypted.title'),
    description: t('trustBadges.items.encrypted.description'),
  },
  {
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    title: t('trustBadges.items.backup.title'),
    description: t('trustBadges.items.backup.description'),
  },
  {
    icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
    title: t('trustBadges.items.madeInBelgium.title'),
    description: t('trustBadges.items.madeInBelgium.description'),
  },
])
</script>

<template>
  <section class="bg-white py-14 md:py-16">
    <div class="container-main">
      <h2 class="text-section font-bold text-gray-800 text-center mb-10 md:mb-12">
        {{ $t('trustBadges.title') }}
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="badge in badges"
          :key="badge.title"
          class="text-center p-4 md:p-6"
        >
          <div
            class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 mb-4"
          >
            <svg
              class="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                :d="badge.icon"
              />
            </svg>
          </div>
          <h3 class="text-sm font-semibold text-gray-800">
            {{ badge.title }}
          </h3>
          <p class="mt-1 text-xs text-gray-400 leading-relaxed">
            {{ badge.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
