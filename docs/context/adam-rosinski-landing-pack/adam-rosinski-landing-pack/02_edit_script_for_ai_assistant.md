# Edit-script dla asystenta AI

## Rola
Jesteś doświadczonym frontend developerem i designer-engineerem. Tworzysz landing page / stronę-wizytówkę badacza dźwięku w Astro + Tailwind.

## Cel
Zaprojektuj i zaimplementuj nowoczesną, dynamiczną, ale elegancką stronę osobistą dla badacza i reżysera dźwięku Adama Rosińskiego. Strona ma komunikować przecięcie:
- badań nad percepcją słuchową,
- reżyserii dźwięku,
- technologii nagraniowych,
- audio wielokanałowego i przestrzennego,
- nowych technologii w muzyce i edukacji.

## Ton projektu
Nie rób klasycznej akademickiej strony z samymi blokami tekstu.
Estetyka ma przypominać połączenie:
- laboratorium audio,
- studia nagrań,
- interfejsu badawczego,
- przestrzeni immersyjnej.

Ma być:
- ciemno,
- elegancko,
- precyzyjnie,
- bez kiczowatego cyberpunku,
- z lekkim ruchem i poczuciem „sound field”.

## Stack
- Astro
- Tailwind
- content collections dla danych lokalnych
- minimalna ilość JS; interaktywność tylko tam, gdzie daje realną wartość
- bez ciężkiego WebGL w MVP
- preferowane SVG, CSS transforms, subtle motion

## Ważne techniczne założenia
1. Przygotuj stronę tak, aby była szybka i możliwa do hostowania statycznie.
2. Dane badacza i publikacji trzymaj lokalnie w prostych plikach content collections lub JSON.
3. Zadbaj o semantykę HTML, dostępność i responsywność.
4. Użyj modularnych komponentów.
5. Zachowaj rozdział contentu od layoutu.
6. Zrób projekt gotowy do późniejszego rozszerzenia o podstronę publikacji i projektów.

## Architektura strony głównej
Zbuduj stronę z następujących sekcji:
1. Hero
2. Research Spectrum
3. Auditory Field / Visual motif section
4. Selected Publications
5. Studio / Practice / Technology
6. Biography / Manifest
7. Teaching / Collaboration / Contact

## Hero — wymagania
- pełnoekranowy pierwszy widok
- duży tytuł: Adam Rosiński
- krótki descriptor: reżyser dźwięku / badacz / nowe technologie
- jednozdaniowy claim dotyczący dźwięku, percepcji, przestrzeni i technologii
- subtelne animowane tło oparte o cienkie linie, punkty, fale, siatki lub warstwy SVG
- CTA do sekcji: badania, publikacje, kontakt

## Research Spectrum — wymagania
- pokaż 4–6 obszarów badawczych jako karty lub moduły
- każdy moduł ma tytuł, 1–2 zdania opisu i tagi
- obszary mają wizualnie tworzyć spektrum, nie zwykły grid marketingowy

## Auditory Field — wymagania
- zrób centralny blok wizualny interpretujący tematykę strony
- może to być interaktywny SVG z przełącznikiem trybów:
  - perception
  - recording
  - space
  - education
- przy zmianie trybu zmienia się opis i układ wizualny
- ma to być subtelne i lekkie, nie gadżeciarskie

## Publications — wymagania
- minimum 4 wyróżnione publikacje
- każda jako card z:
  - rokiem
  - tytułem
  - krótkim opisem sensu publikacji
  - tagami
  - linkiem zewnętrznym
- sekcja ma być czytelna, ale nie sucha

## Studio / Practice / Technology — wymagania
- pokaż związek między praktyką studyjną a badaniami
- zaakcentuj studio nagrań, projektowanie rozwiązań technologicznych, wielokanałowość, dydaktykę i praktykę produkcyjną
- można użyć layoutu split-section: obraz + tekst + 3 highlighty

## Biography / Manifest — wymagania
- zamiast klasycznego „bio” użyj bardziej autorskiego opisu
- tekst ma spinać naukę, sztukę i technologię
- zachowaj akademicką wiarygodność, ale bez urzędowego tonu

## Contact — wymagania
- prosty, spokojniejszy finał strony
- afiliacja
- e-mail
- linki do UWM / Scholar / SciProfiles
- krótki tekst zapraszający do współpracy

## Design system
Paleta:
- tło: bardzo ciemny grafit / almost black
- tekst: off-white / jasna szarość
- akcent 1: cyan / ice blue
- akcent 2: amber / warm gold
- akcent 3: muted green optional

Typografia:
- nagłówki: nowoczesny grotesk
- body: prosty czytelny sans
- micro labels / metadata: mono

Mood:
- precyzja
- przestrzeń
- głębia
- światło punktowe
- siatki, linie, warstwy, sygnał, pole

## Komponenty do utworzenia
- `BaseLayout.astro`
- `SiteHeader.astro`
- `HeroSection.astro`
- `ResearchSpectrum.astro`
- `AuditoryField.astro`
- `PublicationCard.astro`
- `PublicationsSection.astro`
- `StudioPracticeSection.astro`
- `ManifestSection.astro`
- `ContactSection.astro`
- `SectionHeading.astro`
- `PillTag.astro`

## Struktura danych
Przygotuj content collections lub lokalne pliki danych dla:
- profilu badacza
- publikacji
- obszarów badawczych
- linków zewnętrznych

## Jakość wykonania
- brak lorem ipsum
- brak generic startup copy
- brak stockowego tonu „innovative solutions”
- tekst ma być zakorzeniony w dźwięku, percepcji, przestrzeni i technologii
- motion powinien wspierać metaforę dźwięku, nie ją przykrywać

## Output
Wygeneruj:
1. strukturę plików
2. podstawowy layout strony
3. stronę główną `src/pages/index.astro`
4. przykładowe dane lokalne
5. styl bazowy i klasy Tailwindowe
6. lekką interaktywność dla sekcji Auditory Field
7. krótkie README z instrukcją uruchomienia
