# Starter project — Astro + Tailwind

Ten katalog zawiera gotowy szkielet `src/` dla strony Adama Rosińskiego.

## Szybki start
W świeżym projekcie Astro:

```bash
npm create astro@latest
npx astro add tailwind
```

Następnie skopiuj:
- `src/`
- `public/`

z tego startera do nowego projektu.

## Co uzupełnić po starcie
- `src/data/site.ts` — e-mail, zdjęcia, ewentualne social links
- `src/content/publications/` — publikacje
- `src/content/research-areas/` — opisy obszarów
- `public/images/` — finalne grafiki i zdjęcia

## Struktura
- `src/layouts/BaseLayout.astro` — główny layout
- `src/components/` — sekcje landing page
- `src/pages/` — index i podstrony
- `src/content/` — lokalny content
- `src/data/` — metadata strony

## Styl
Starter używa:
- ciemnego tła,
- subtelnej siatki / glow / orb,
- kart i cienkich obramowań,
- lekkiej sekcji interaktywnej „Auditory Field”.
