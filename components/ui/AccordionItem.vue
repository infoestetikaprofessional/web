<script setup lang="ts">
interface Props {
  title: string
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
})

const isOpen = ref(props.open)
const panelId = useId()

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="border-b border-border/70">
    <button
      class="w-full flex items-center justify-between py-5 text-left group"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="toggle"
    >
      <span class="text-base font-medium text-gray-800 pr-4 group-hover:text-primary transition-colors">
        {{ title }}
      </span>
      <svg
        class="w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300"
        :class="isOpen ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <Transition
      enter-active-class="transition-all duration-300 ease-out overflow-hidden"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-200 ease-in overflow-hidden"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <!-- v-show (not v-if) so answers are server-rendered and present in the page source -->
      <div v-show="isOpen" :id="panelId" class="pb-5">
        <p class="text-sm text-gray-500 leading-relaxed">
          <slot />
        </p>
      </div>
    </Transition>
  </div>
</template>
