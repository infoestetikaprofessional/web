<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const { locale } = useI18n()
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border/50 backdrop-blur-md bg-beige/90"
  >
    <div class="container-main flex items-center justify-between h-16 md:h-20">
      <NuxtLink to="/" class="flex items-center group">
        <img
          src="/logo-main-wide.svg"
          alt="Estetika Professional"
          class="h-8 md:h-10 w-auto"
        />
      </NuxtLink>

      <div class="flex items-center gap-2 md:gap-4 min-w-0">
        <div class="flex items-center gap-1 text-sm font-medium text-gray-500 shrink-0">
          <NuxtLink
            :to="switchLocalePath('en')"
            :class="locale === 'en' ? 'text-primary font-semibold' : 'hover:text-primary transition-colors'"
          >
            EN
          </NuxtLink>
          <span class="text-gray-300">|</span>
          <NuxtLink
            :to="switchLocalePath('ro')"
            :class="locale === 'ro' ? 'text-primary font-semibold' : 'hover:text-primary transition-colors'"
          >
            RO
          </NuxtLink>
          <span class="text-gray-300">|</span>
          <NuxtLink
            :to="switchLocalePath('fr')"
            :class="locale === 'fr' ? 'text-primary font-semibold' : 'hover:text-primary transition-colors'"
          >
            FR
          </NuxtLink>
        </div>

        <NuxtLink
          :to="`${localePath('/')}#waitlist`"
          class="inline-flex items-center px-4 py-2.5 md:px-8 md:py-3 bg-primary text-white text-xs md:text-sm font-medium rounded-2xl hover:bg-primary-hover transition-all duration-200 whitespace-nowrap"
        >
          {{ $t('header.cta') }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
