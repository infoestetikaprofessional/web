<script setup lang="ts">
const localePath = useLocalePath()

const STORAGE_KEY = 'estetika-cookie-consent'
const visible = ref(false)

onMounted(() => {
  try {
    visible.value = !localStorage.getItem(STORAGE_KEY)
  } catch {
    visible.value = false
  }
})

function choose(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // localStorage unavailable (private mode) — just dismiss for this visit
  }
  visible.value = false
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="visible"
      role="dialog"
      aria-live="polite"
      :aria-label="$t('cookieConsent.policy')"
      class="fixed inset-x-0 bottom-0 z-[60] p-4"
    >
      <div
        class="mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl border border-border/50 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4"
      >
        <p class="flex-1 text-sm text-gray-600 leading-relaxed">
          {{ $t('cookieConsent.message') }}
          <NuxtLink
            :to="localePath('/cookie-policy')"
            class="text-primary hover:underline whitespace-nowrap"
          >
            {{ $t('cookieConsent.policy') }}
          </NuxtLink>
        </p>
        <div class="flex gap-3 shrink-0">
          <button
            class="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium rounded-2xl border border-border text-gray-600 hover:bg-beige/50 transition-colors duration-200"
            @click="choose('declined')"
          >
            {{ $t('cookieConsent.decline') }}
          </button>
          <button
            class="flex-1 md:flex-none px-5 py-2.5 text-sm font-semibold rounded-2xl bg-primary text-white hover:bg-primary-hover transition-colors duration-200"
            @click="choose('accepted')"
          >
            {{ $t('cookieConsent.accept') }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
