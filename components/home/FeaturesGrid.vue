<script setup lang="ts">
const { t } = useI18n()

const { target, isInView } = useInView()
const { target: phonesTarget, isInView: phonesInView } = useInView()

const appScreens = computed(() => [
  {
    src: '/images/06-today.png',
    alt: 'Dashboard with today\'s schedule, daily revenue and upcoming appointments',
    label: t('features.screens.dashboard'),
  },
  {
    src: '/images/07-calendar.png',
    alt: 'Appointment calendar with weekly day strip, times, clients and service badges',
    label: t('features.screens.scheduling'),
  },
  {
    src: '/images/08-clients.png',
    alt: 'Client list with avatars, contact details, visit counts and specialty badges',
    label: t('features.screens.clients'),
  },
  {
    src: '/images/04-client-detail.png',
    alt: 'Client profile with contact details, medical history and treatment records',
    label: t('features.screens.clientProfile'),
  },
  {
    src: '/images/05-consent.png',
    alt: 'Session screen with signed consent form, procedure sheet, skin type and medical info',
    label: t('features.screens.consent'),
  },
])

const features = computed(() => [
  {
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    title: t('features.items.clientManagement.title'),
    description: t('features.items.clientManagement.description'),
  },
  {
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: t('features.items.smartScheduling.title'),
    description: t('features.items.smartScheduling.description'),
  },
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: t('features.items.consentForms.title'),
    description: t('features.items.consentForms.description'),
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: t('features.items.medicalHistory.title'),
    description: t('features.items.medicalHistory.description'),
  },
  {
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: t('features.items.portfolio.title'),
    description: t('features.items.portfolio.description'),
  },
  {
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    title: t('features.items.offlineMode.title'),
    description: t('features.items.offlineMode.description'),
  },
])

const delayClasses = [
  '',
  'animate-delay-100',
  'animate-delay-200',
  'animate-delay-300',
  'animate-delay-400',
  'animate-delay-500',
]
</script>

<template>
  <section id="features" class="bg-white py-20 md:py-24">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 class="text-section font-bold text-gray-800">
          {{ $t('features.title') }}
        </h2>
        <p class="mt-4 text-gray-500">
          {{ $t('features.subtitle') }}
        </p>
      </div>

      <div
        ref="target"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="rounded-xl bg-white p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          :class="[
            isInView
              ? `animate-fade-up ${delayClasses[index]}`
              : 'opacity-0',
          ]"
        >
          <div
            class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
          >
            <svg
              class="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                :d="feature.icon"
              />
            </svg>
          </div>
          <h3 class="text-base font-semibold text-gray-800 font-sans">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-500 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- App screenshots showcase -->
      <div
        ref="phonesTarget"
        class="mt-16 md:mt-20"
      >
        <p
          class="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8"
          :class="phonesInView ? 'animate-fade-up' : 'opacity-0'"
        >
          {{ $t('features.seeInAction') }}
        </p>
        <div class="flex justify-center gap-4 sm:gap-6 md:gap-10 overflow-x-auto px-4 sm:px-0 -mx-4 sm:mx-0 pb-4 sm:pb-0 snap-x snap-mandatory sm:snap-none">
          <div
            v-for="(screen, index) in appScreens"
            :key="screen.label"
            class="flex flex-col items-center shrink-0 snap-center"
            :class="phonesInView ? 'animate-fade-up' : 'opacity-0'"
            :style="phonesInView ? `animation-delay: ${index * 150}ms` : ''"
          >
            <!-- Phone frame -->
            <div class="relative w-[105px] sm:w-[160px] md:w-[200px]">
              <div class="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] bg-gray-900 p-[5px] sm:p-[6px] md:p-[8px] shadow-xl">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] sm:w-[70px] md:w-[90px] h-[14px] sm:h-[16px] md:h-[22px] bg-gray-900 rounded-b-xl md:rounded-b-2xl z-10" />
                <div class="rounded-[1.2rem] sm:rounded-[1.6rem] md:rounded-[2rem] overflow-hidden bg-beige pt-[9px] sm:pt-[10px] md:pt-[14px]" style="aspect-ratio: 9 / 19.5">
                  <img
                    :src="screen.src"
                    :alt="screen.alt"
                    class="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <span class="mt-3 text-xs font-medium text-gray-500">{{ screen.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
