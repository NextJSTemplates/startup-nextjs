# Startup NextJS

Template perso basé sur Next.js 15 avec TypeScript et Tailwind.

## Setup

```bash
git clone <repo>
cd startup-nextjs
npm install
npm run dev
```

## Stack

- Next.js 15 (App Router)
- TypeScript 
- TailwindCSS
- React Hook Form + Zod pour les formulaires
- Framer Motion pour les animations

## Structure

```
src/
├── app/           # Pages Next.js 15
├── components/    # Composants UI
├── lib/          # Utils et config
├── hooks/        # Custom hooks
└── styles/       # CSS
```

## Scripts

```bash
npm run dev     # Dev server
npm run build   # Build prod
npm run test    # Tests Jest
npm run lint    # ESLint
```

## Notes

- Error boundaries configurés
- Formulaires avec validation Zod
- SEO basique intégré
- i18n FR/EN/DE
- PWA ready avec service worker

Les configs sont dans les fichiers standards (tsconfig, tailwind.config, etc.).