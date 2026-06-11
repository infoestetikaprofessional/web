<script setup lang="ts">
interface Props {
  id?: string
  background?: 'beige' | 'white'
  narrow?: boolean
}

withDefaults(defineProps<Props>(), {
  id: undefined,
  background: 'beige',
  narrow: false,
})
</script>

<template>
  <section
    :id="id"
    class="py-16 md:py-24"
    :class="background === 'white' ? 'bg-white' : 'bg-beige'"
  >
    <div class="container-main" :class="narrow ? 'max-w-5xl' : ''">
      <slot />
    </div>
  </section>
</template>
