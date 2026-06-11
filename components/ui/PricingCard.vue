<script setup lang="ts">
import type { PricingTier } from '~/types'

defineProps<{
  tier: PricingTier
}>()
</script>

<template>
  <div
    class="relative flex flex-col rounded-xl bg-white p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover"
    :class="tier.highlighted ? 'ring-2 ring-primary md:scale-105' : ''"
  >
    <div v-if="tier.badge" class="absolute -top-3 left-1/2 -translate-x-1/2">
      <span class="inline-flex items-center px-4 py-1 text-xs font-semibold rounded-full bg-primary text-white whitespace-nowrap">
        {{ tier.badge }}
      </span>
    </div>

    <h3 class="text-lg font-semibold text-gray-800 font-sans">
      {{ tier.name }}
    </h3>
    <p class="text-sm text-gray-400 mt-1">
      {{ tier.subtitle }}
    </p>

    <div class="mt-4">
      <span class="text-4xl font-serif font-bold text-primary">{{ tier.price }}</span>
      <span class="text-sm text-gray-500">{{ tier.period }}</span>
    </div>

    <ul class="flex-1 space-y-3 mt-6 mb-8">
      <li
        v-for="feature in tier.features"
        :key="feature.text"
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
        <span>
          {{ feature.text }}
          <span
            v-if="feature.comingSoon"
            class="inline-flex items-center ml-1 px-1.5 py-0.5 text-[10px] font-medium rounded bg-gray-100 text-gray-400"
          >
            coming soon
          </span>
        </span>
      </li>
    </ul>

    <NuxtLink
      to="/#hero"
      class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97]"
      :class="[
        tier.buttonVariant === 'primary'
          ? 'bg-primary text-white'
          : 'bg-secondary text-white',
      ]"
    >
      {{ tier.buttonText }}
    </NuxtLink>
  </div>
</template>
