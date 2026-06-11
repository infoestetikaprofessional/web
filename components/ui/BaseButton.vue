<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  block?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  href: undefined,
  block: false,
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-button transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants: Record<string, string> = {
    primary:
      'bg-primary text-white hover:bg-primary-hover focus:ring-primary/50',
    secondary:
      'bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary/50',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50',
  }

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return [
    base,
    variants[props.variant],
    sizes[props.size],
    props.block ? 'w-full' : '',
  ]
    .filter(Boolean)
    .join(' ')
})
</script>

<template>
  <NuxtLink v-if="href" :to="href" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes">
    <slot />
  </button>
</template>
