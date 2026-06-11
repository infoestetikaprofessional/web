<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const socials = [
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: instagramIcon },
  { name: 'Facebook', href: SOCIAL_LINKS.facebook, icon: facebookIcon },
  { name: 'TikTok', href: SOCIAL_LINKS.tiktok, icon: tiktokIcon },
  { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: linkedinIcon },
]
</script>

<template>
  <footer class="border-t border-border/50 bg-white">
    <div class="container-main py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <NuxtLink to="/" class="inline-flex flex-col leading-none">
            <span class="font-serif text-lg font-bold text-primary uppercase tracking-[0.2em]">
              ESTETIKA
            </span>
            <span class="font-sans text-[10px] font-light text-gray-500 tracking-[0.15em] uppercase">
              PROFESSIONAL
            </span>
          </NuxtLink>
          <p class="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
            {{ $t('footer.tagline') }}
          </p>
          <div class="mt-5 flex items-center gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              :title="social.name"
              class="text-gray-400 hover:text-primary transition-colors duration-200"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
            {{ $t('footer.legal') }}
          </h4>
          <ul class="space-y-1">
            <li>
              <NuxtLink
                :to="localePath('/privacy-policy')"
                class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {{ $t('footer.privacyPolicy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/terms-of-service')"
                class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {{ $t('footer.termsOfService') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/cookie-policy')"
                class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
              >
                {{ $t('footer.cookiePolicy') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
            {{ $t('footer.contact') }}
          </h4>
          <a
            href="mailto:support@estetikaprofessional.com"
            class="py-2 text-sm text-gray-500 hover:text-primary transition-colors duration-200"
          >
            support@estetikaprofessional.com
          </a>
          <p class="text-sm text-gray-400 mt-2">
            {{ $t('footer.builtIn') }}
          </p>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-border/50 text-center">
        <p class="text-xs text-gray-400">
          {{ $t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
