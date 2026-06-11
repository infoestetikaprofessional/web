import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: '#e8dbd7',
          dark: '#d4c7c1',
        },
        primary: {
          DEFAULT: '#343454',
          hover: '#2a2a44',
        },
        secondary: {
          DEFAULT: '#5a5c8d',
          hover: '#4a4c7d',
        },
        success: '#10B981',
        border: '#E5E7EB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        button: '16px',
        large: '24px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(212, 199, 193, 0.3)',
        'card-hover': '0 8px 32px rgba(212, 199, 193, 0.45)',
      },
      maxWidth: {
        container: '80rem',
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.2' }],
        'section': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.2' }],
        'card-title': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
} satisfies Config
