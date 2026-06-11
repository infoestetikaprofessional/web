<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-1 py-16 md:py-24">
      <div class="container-main max-w-4xl">
        <slot />
      </div>
    </main>
    <SiteFooter />
  </div>
</template>
