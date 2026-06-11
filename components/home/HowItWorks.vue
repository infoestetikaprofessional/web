<script setup lang="ts">
import type { Step } from '~/types'

const { t } = useI18n()

const { target, isInView } = useInView()

const steps = computed<Step[]>(() => [
  {
    number: 1,
    title: t('howItWorks.steps.createAccount.title'),
    description: t('howItWorks.steps.createAccount.description'),
  },
  {
    number: 2,
    title: t('howItWorks.steps.setupPractice.title'),
    description: t('howItWorks.steps.setupPractice.description'),
  },
  {
    number: 3,
    title: t('howItWorks.steps.focusClients.title'),
    description: t('howItWorks.steps.focusClients.description'),
  },
])
</script>

<template>
  <section class="bg-beige py-20 md:py-24">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 class="text-section font-bold text-gray-800">
          {{ $t('howItWorks.title') }}
        </h2>
      </div>

      <div
        ref="target"
        class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
      >
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="relative text-center"
          :class="isInView ? 'animate-fade-up' : 'opacity-0'"
          :style="isInView ? `animation-delay: ${index * 150}ms` : ''"
        >
          <div
            v-if="index < steps.length - 1"
            class="hidden md:block absolute top-6 left-[60%] w-[80%] border-t border-dashed border-border"
          />

          <div
            class="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-sans text-lg font-bold mb-5"
          >
            {{ step.number }}
          </div>
          <h3 class="text-lg font-semibold text-gray-800 font-sans">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
