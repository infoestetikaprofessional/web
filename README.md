# Estetika Professional — Website

Marketing and landing site for Estetika Professional, built as a statically
generated [Nuxt 3](https://nuxt.com) application with [Tailwind CSS](https://tailwindcss.com).
The site is multilingual (English, Romanian, French) and pre-rendered at build time.

## Requirements

- Node.js 18.18+ (or 20+)
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Generate the static site (output in `.output/public`):

```bash
npm run generate
```

Or build for a Node server target:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
assets/        Global styles (Tailwind entry)
components/    UI, layout and landing-page components
composables/   Reusable composition functions
layouts/       Page layouts (default, legal)
locales/       i18n translation files (en, ro, fr)
pages/         File-based routes
public/        Static assets (icons, images, manifest, robots.txt)
scripts/       Build utilities (favicon generation)
types/         Shared TypeScript types
```

## Configuration

- Site settings, i18n locales, routes and pre-render paths: `nuxt.config.ts`
- Design tokens (colors, fonts, sizes): `tailwind.config.ts`
