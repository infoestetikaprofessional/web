<script setup lang="ts">
const props = withDefaults(defineProps<{ source?: string }>(), {
  source: 'hero',
})

const { locale } = useI18n()
const config = useRuntimeConfig()

const email = ref('')
// Honeypot field: invisible to humans, bots that fill it get a fake success.
const website = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')
const showInvalid = ref(false)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function submit() {
  if (status.value === 'loading') return
  showInvalid.value = false

  const value = email.value.trim()
  if (!EMAIL_RE.test(value)) {
    showInvalid.value = true
    return
  }
  if (website.value) {
    status.value = 'success'
    return
  }

  status.value = 'loading'
  try {
    const res = await fetch(
      `${config.public.supabaseUrl}/rest/v1/waitlist_signups`,
      {
        method: 'POST',
        headers: {
          apikey: config.public.supabaseAnonKey,
          Authorization: `Bearer ${config.public.supabaseAnonKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          email: value,
          locale: locale.value,
          source: props.source,
        }),
      }
    )
    if (res.ok) {
      status.value = 'success'
    } else if (res.status === 409) {
      status.value = 'duplicate'
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div id="waitlist" class="scroll-mt-24 max-w-md">
    <template v-if="status === 'success' || status === 'duplicate'">
      <div class="flex items-start gap-3 rounded-2xl bg-success/10 px-5 py-4">
        <svg
          class="w-5 h-5 text-success shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p class="text-sm font-medium text-gray-700">
          {{ status === 'duplicate' ? $t('waitlist.duplicate') : $t('waitlist.success') }}
        </p>
      </div>
    </template>

    <template v-else>
      <p class="text-sm font-semibold text-gray-800">
        {{ $t('waitlist.label') }}
      </p>
      <p class="mt-1 text-sm text-gray-500">
        {{ $t('waitlist.subtitle') }}
      </p>

      <form class="mt-3 flex flex-col sm:flex-row gap-3" novalidate @submit.prevent="submit">
        <label for="waitlist-email" class="sr-only">{{ $t('waitlist.placeholder') }}</label>
        <input
          id="waitlist-email"
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          :placeholder="$t('waitlist.placeholder')"
          class="flex-1 min-w-0 px-5 py-3.5 text-sm text-gray-800 bg-white border rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
          :class="showInvalid ? 'border-red-400' : 'border-border'"
          :aria-invalid="showInvalid"
          aria-describedby="waitlist-note"
        />
        <input
          v-model="website"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
          class="hidden"
        />
        <button
          type="submit"
          :disabled="status === 'loading'"
          class="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white text-sm font-semibold rounded-2xl hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none whitespace-nowrap"
        >
          {{ status === 'loading' ? $t('waitlist.submitting') : $t('waitlist.submit') }}
        </button>
      </form>

      <p v-if="showInvalid" class="mt-2 text-sm text-red-500" role="alert">
        {{ $t('waitlist.invalidEmail') }}
      </p>
      <p v-else-if="status === 'error'" class="mt-2 text-sm text-red-500" role="alert">
        {{ $t('waitlist.error') }}
      </p>

      <p id="waitlist-note" class="mt-2 text-xs text-gray-400">
        {{ $t('waitlist.gdprNote') }}
      </p>
    </template>
  </div>
</template>
