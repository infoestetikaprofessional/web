<script setup lang="ts">
const head = useLocaleHead({
  addSeoAttributes: true,
  addDirAttribute: true,
})
useHead({
  htmlAttrs: computed(() => head.value.htmlAttrs || {}),
  link: computed(() => head.value.link || []),
  meta: computed(() => head.value.meta || []),
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <WhatsAppBubble />
  <CookieConsent />
</template>
