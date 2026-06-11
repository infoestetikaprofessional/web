<script setup lang="ts">
interface Props {
  variant?: 'highlight' | 'discount' | 'limited' | 'default'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const variantClasses: Record<string, string> = {
  highlight: 'bg-primary text-white',
  discount: 'bg-success/10 text-success',
  limited: 'bg-amber-50 text-amber-700',
  default: 'bg-gray-100 text-gray-600',
}
</script>

<template>
  <span
    class="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full"
    :class="variantClasses[variant]"
  >
    <slot />
  </span>
</template>
