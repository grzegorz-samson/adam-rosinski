# Edit-script / prompt dla asystenta AI

Użyj dostarczonego startera Astro jako bazy. Twoim zadaniem jest rozwinąć projekt w elegancką, nowoczesną stronę osobistą badacza i reżysera dźwięku.

## Priorytety
- Zachowaj modularną architekturę komponentów.
- Nie zamieniaj strony w generyczny landing marketingowy.
- Utrzymaj estetykę: laboratorium audio + studio nagrań + interfejs badawczy.
- Zostaw lekką interaktywność, ale bez ciężkiego WebGL w MVP.
- Dbaj o dostępność, semantykę i responsywność.
- Rozdzielaj content od layoutu.

## Co możesz bezpiecznie rozwijać
- Hero i motion design
- Auditory Field
- układ kart publikacji
- zdjęcia / placeholders / SVG
- dodatkowe podstrony
- styl typografii i spacing

## Czego nie rób
- Nie kasuj content collections
- Nie wstawiaj nadmiaru JS
- Nie używaj cyberpunkowego, agresywnego neonu
- Nie kopiuj akademickich opisów 1:1 z UWM / Scholar / SciProfiles

## Kolejność pracy
1. Odpal lokalny starter.
2. Sprawdź dane w `src/data/site.ts`.
3. Zweryfikuj publikacje i linki.
4. Uzupełnij podstrony `/publications`, `/projects`, `/about`, `/contact`.
5. Dopiero na końcu doszlifuj animacje i assety.
