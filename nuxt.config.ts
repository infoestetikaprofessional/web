export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/sitemap'],

  site: {
    url: 'https://estetikaprofessional.com',
  },

  ssr: true,

  runtimeConfig: {
    public: {
      // Publishable values, safe to expose in the browser — access is enforced
      // by Row Level Security. Overridable via NUXT_PUBLIC_SUPABASE_* env vars.
      supabaseUrl: 'https://ulyyfajdakyzkuokcdmv.supabase.co',
      supabaseAnonKey: 'sb_publishable_I0TxgnSvg0fOXzoV1t-IqQ_LVsy9Z7i',
    },
  },

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#e8dbd7' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        },
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  i18n: {
    restructureDir: false,
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    compilation: {
      strictMessage: false,
    },
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ro', language: 'ro-RO', name: 'Romana', file: 'ro.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
    ],
    langDir: 'locales/',
    lazy: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
    customRoutes: 'config',
    pages: {
      'privacy-policy': {
        en: '/privacy-policy',
        ro: '/politica-confidentialitate',
        fr: '/politique-confidentialite',
      },
      'terms-of-service': {
        en: '/terms-of-service',
        ro: '/termeni-serviciu',
        fr: '/conditions-utilisation',
      },
      'cookie-policy': {
        en: '/cookie-policy',
        ro: '/politica-cookie',
        fr: '/politique-cookies',
      },
      'thank-you': {
        en: '/thank-you',
        ro: '/multumim',
        fr: '/merci',
      },
    },
  },

  nitro: {
    prerender: {
      routes: [
        '/',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
        '/thank-you',
        '/ro',
        '/ro/politica-confidentialitate',
        '/ro/termeni-serviciu',
        '/ro/politica-cookie',
        '/ro/multumim',
        '/fr',
        '/fr/politique-confidentialite',
        '/fr/conditions-utilisation',
        '/fr/politique-cookies',
        '/fr/merci',
      ],
    },
  },

})
