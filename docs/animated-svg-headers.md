# Animowane SVG w nagłówkach `publications` i `bio`

## 1. Analiza zastanego rozwiązania

Projekt wykorzystywał trzy sposoby prezentowania grafiki ruchomej:

1. **Strona główna (`AlternativeHero.astro`)** — animacja fal rysowana na elemencie `canvas` przez `requestAnimationFrame`.
2. **`work-areas` (`InventiveWorkAreas.astro`)** — SVG osadzone bezpośrednio w HTML i animowane przez CSS oraz `animateMotion`.
3. **`bio` (`AlternativeAbout.astro`)** — statyczny plik `bio-portrait-field.svg` wstawiony jako `<img>`.

Dla nagłówków `publications` i `bio` wybrano model stosowany w `work-areas`, czyli **inline SVG + CSS**. Jest on właściwszy od `canvas` w tym miejscu, ponieważ:

- zachowuje ostrość przy dowolnym skalowaniu i na ekranach Retina;
- pozwala animować konkretne elementy: książki, ścieżki, punkty i pierścienie;
- nie wymaga pętli JavaScript ani dodatkowych zależności;
- umożliwia bezpośrednią obsługę `prefers-reduced-motion`;
- dobrze współpracuje z responsywnym układem Astro.

## 2. Nagłówek `publications`

### Nowy komponent

Dodano:

- `src/components/PublicationsHeroGraphic.astro`

Grafika przedstawia abstrakcyjne pole publikacji:

- cztery półprzezroczyste woluminy / karty książek;
- falę sygnałową przechodzącą przez cały układ;
- pulsujące węzły na ścieżce;
- niewielkie widmo słupkowe;
- delikatną siatkę i poświatę tła.

### Typy ruchu

- wolne unoszenie książek: `9s`;
- przesuwanie fragmentów sygnału po ścieżce: `13s` i `17s`;
- sekwencyjne pulsowanie węzłów: `6s`;
- subtelna praca słupków widma: `3.8s`;
- oddychanie poświaty: `8s`.

Animacje mają przesunięte ujemne opóźnienia, dlatego po otwarciu strony grafika od razu wygląda jak działający układ, a nie jak animacja startująca jednocześnie od zera.

### Integracja z nagłówkiem

Zmodyfikowano:

- `src/pages/publications.astro`

Nagłówek ma teraz strukturę:

```text
publications-hub-nav
├── publications-hub-hero
│   ├── publications-hub-copy
│   └── publications-hub-graphic
└── publications-hub-toggle
```

Na dużych ekranach tekst i grafika są rozmieszczone w dwóch kolumnach. Poniżej `920px` grafika przechodzi pod tekst, a na telefonach jest lekko poszerzona, aby zachować czytelność detali bez zwiększania wysokości nagłówka.

Przełącznik `Publications / Editorial` zachowuje dotychczasowe działanie i pozostaje pod częścią hero.

## 3. Animacja grafiki w `bio`

### Problem techniczny

Dotychczasowy motyw był osadzony jako:

```astro
<img src="/images/bio-motifs/bio-portrait-field.svg" ... />
```

W takim wariancie CSS komponentu nadrzędnego może zmieniać pozycję, krycie lub skalę całego obrazu, ale **nie ma dostępu do wewnętrznych elementów SVG**, takich jak osobne pierścienie, punkty i ścieżki.

### Rozwiązanie

Dodano:

- `src/components/BioPortraitField.astro`

oraz zastąpiono zewnętrzny `<img>` komponentem inline w:

- `src/components/AlternativeAbout.astro`

Nowy komponent zachowuje kompozycję oryginalnego `bio-portrait-field.svg`, ale nadaje osobne klasy jego elementom.

### Typy ruchu

- bardzo wolny obrót przerywanych pierścieni: `46s`;
- delikatne skalowanie / „oddychanie” pierścieni: `9s`;
- przemieszczanie sygnału wzdłuż trzech krzywych: `15–22s`;
- sekwencyjne rozświetlanie punktów: `7s`;
- puls centralnego punktu i poświaty: `5.4–10s`.

Grafika nadal znajduje się między warstwą zdjęcia a wyciętą sylwetką, dzięki czemu wygląda jak pole wizualne otaczające postać, a nie nakładka zasłaniająca twarz.

## 4. Dostępność i wydajność

Obie grafiki są dekoracyjne i mają `aria-hidden="true"`. Informacja nie jest przekazywana wyłącznie przez animację.

Dla użytkowników z ustawieniem ograniczenia ruchu zastosowano:

```css
@media (prefers-reduced-motion: reduce) {
  /* wyłączenie wszystkich animacji */
}
```

Ścieżki sygnału są wtedy pokazywane statycznie. Nie ma pętli `requestAnimationFrame`, obserwatorów ani listenerów związanych z nowymi grafikami.

## 5. Pliki zmienione i dodane

### Dodane

- `src/components/PublicationsHeroGraphic.astro`
- `src/components/BioPortraitField.astro`
- `docs/animated-svg-headers.md`

### Zmienione

- `src/pages/publications.astro`
- `src/components/AlternativeAbout.astro`

Oryginalny plik `public/images/bio-motifs/bio-portrait-field.svg` pozostawiono w repozytorium jako źródło / statyczny wariant motywu, choć nie jest już używany w nagłówku `bio`.

## 6. Regulacja intensywności animacji

Najważniejsze miejsca do szybkiej korekty:

- tempo książek: `publications-hero-book-float`;
- tempo fali: `publications-hero-signal-travel`;
- intensywność punktów: `publications-hero-node-pulse`;
- tempo pierścieni bio: `bio-portrait-field-rotate`;
- intensywność centralnego punktu: `bio-portrait-field-core-pulse`;
- ogólna widoczność grafiki bio: `.alt-profile-orbit { opacity: ... }`.

Zwiększenie czasu animacji daje spokojniejszy ruch. Zmniejszenie wartości `opacity`, `drop-shadow` i amplitudy `translateY` / `scale` ogranicza intensywność bez zmiany kompozycji.

## 7. Weryfikacja

Uruchomiono:

```bash
npm ci
npm run build
```

Build Astro zakończył się poprawnie: wygenerowano wszystkie 8 tras statycznych, w tym `/publications/` i `/bio/`.
