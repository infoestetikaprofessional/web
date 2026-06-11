export function useJsonLd() {
  const { t, locale } = useI18n()

  const organization = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Estetika Professional',
    url: 'https://estetikaprofessional.com',
    logo: 'https://estetikaprofessional.com/logo-main-wide.svg',
    description: t('meta.home.description'),
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@estetikaprofessional.com',
      contactType: 'customer service',
      availableLanguage: ['English', 'Romanian', 'French'],
    },
  }))

  const softwareApplication = computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Estetika Professional',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'iOS, Android',
    description: t('meta.home.description'),
    url: 'https://estetikaprofessional.com',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '6.99',
      highPrice: '9.99',
      offerCount: '2',
    },
    inLanguage: locale.value,
  }))

  const faqPage = computed(() => {
    const faqItems = [
      { q: t('faq.items.launch.question'), a: t('faq.items.launch.answer') },
      { q: t('faq.items.pricing.question'), a: t('faq.items.pricing.answer') },
      { q: t('faq.items.trial.question'), a: t('faq.items.trial.answer') },
      { q: t('faq.items.security.question'), a: t('faq.items.security.answer') },
      { q: t('faq.items.switchPlans.question'), a: t('faq.items.switchPlans.answer') },
      { q: t('faq.items.contact.question'), a: t('faq.items.contact.answer') },
    ]

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }
  })

  return { organization, softwareApplication, faqPage }
}
