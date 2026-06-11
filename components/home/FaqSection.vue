<script setup lang="ts">
const { t } = useI18n()

const faqs = computed(() => [
  {
    question: t('faq.items.launch.question'),
    answer: t('faq.items.launch.answer'),
  },
  {
    question: t('faq.items.pricing.question'),
    answer: t('faq.items.pricing.answer'),
  },
  {
    question: t('faq.items.trial.question'),
    answer: t('faq.items.trial.answer'),
  },
  {
    question: t('faq.items.security.question'),
    answer: t('faq.items.security.answer'),
  },
  {
    question: t('faq.items.switchPlans.question'),
    answer: t('faq.items.switchPlans.answer'),
  },
  {
    question: t('faq.items.contact.question'),
    answer: t('faq.items.contact.answer'),
  },
])
</script>

<template>
  <section id="faq" class="bg-white py-20 md:py-24">
    <div class="container-main max-w-3xl">
      <div class="text-center mb-12">
        <h2 class="text-section font-bold text-gray-800">
          {{ $t('faq.title') }}
        </h2>
      </div>

      <div>
        <AccordionItem
          v-for="(faq, index) in faqs"
          :key="index"
          :title="faq.question"
          :open="index === 0"
        >
          {{ faq.answer }}
        </AccordionItem>
      </div>
    </div>
  </section>
</template>
