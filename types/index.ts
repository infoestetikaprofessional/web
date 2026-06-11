export interface Feature {
  icon: string
  title: string
  description: string
}

export interface PricingFeature {
  text: string
  comingSoon?: boolean
}

export interface PricingTier {
  name: string
  subtitle: string
  price: string
  period: string
  crossedPrices?: string[]
  savings?: string
  features: PricingFeature[]
  highlighted?: boolean
  badge?: string
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Step {
  number: number
  title: string
  description: string
}

export interface ComparisonCategory {
  name: string
  features: ComparisonRow[]
}

export interface ComparisonRow {
  feature: string
  solo: string | boolean
  studio: string | boolean
  clinic: string | boolean
}
