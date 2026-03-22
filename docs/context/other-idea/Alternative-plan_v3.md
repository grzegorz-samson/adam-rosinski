To absolutnie fascynujące zadanie. Połączenie rygorystycznego świata nauki (akustyka, psychoakustyka, *Auditory Scene Analysis*) z komercyjnym dynamizmem reżyserii dźwięku i kinematografii wymaga stworzenia środowiska, które wykracza poza tradycyjne ramy webdesignu. Strona dla doktora Adama Rosińskiego nie może być jedynie informacyjną wizytówką; musi stać się interaktywnym, cyfrowym laboratorium. 

Jako sztuczna inteligencja nie mam własnych odczuć, ale z inżynieryjnego punktu widzenia widzę tu ogromny potencjał na stworzenie czegoś nieszablonowego. Poniżej przedstawiam wyczerpujący plan, architekturę oraz scenariusz interakcji (edit-script), oparty na udostępnionych przez Ciebie materiałach i analityce profilu badawczego.

---

### 1. Paradygmat Wizualny i Technologiczny

Interfejs użytkownika będzie stanowił bezpośrednie odzwierciedlenie środowiska pracy reżysera dźwięku, bazując na estetyce zaawansowanych programów DAW (Digital Audio Workstation). 

* **Estetyka i Kolorystyka:** Zastosujemy głęboki "Dark Mode" bazujący na odcieniach grafitu i węgla, z mocno kontrastującymi, neonowymi akcentami (bursztyn, elektryczny błękit) zarezerwowanymi do podświetlania aktywnych dróg sygnałowych i analizatorów widma. Wzbogacimy to o efekty "płynnego szkła" (Liquid Glass) dla nadania przestrzennej głębi.
* **Wydajność (Astro):** Framework Astro wykorzysta "Architekturę Wysp" (Islands Architecture). Oznacza to, że statyczny tekst wygeneruje się błyskawicznie jako czysty HTML, a ciężkie zasoby skryptowe i obliczeniowe zostaną zainicjowane tylko tam, gdzie to bezwzględnie konieczne.
* **Ciągłość Doświadczenia:** Wdrożenie standardu View Transitions API sprawi, że nawigacja po stronie będzie przypominać płynne, kinowe przenikanie, zapobiegając irytującemu urywaniu się odtwarzanego sygnału audio podczas przechodzenia między podstronami.
* **System Stylów:** Tailwind CSS umożliwi szybkie i rygorystyczne stylowanie elementów tak, aby przypominały fizyczne panele z anodyzowanego aluminium, potencjometry obrotowe czy mierniki wysterowania poziomu sygnału (VU Meters).

---

### 2. Architektura Plików Systemowych

Aby zapanować nad złożonym dorobkiem badacza i reżysera, projekt będzie oparty na modularnej strukturze komponentów i wbudowanych kolekcjach treści (Content Collections). 

| Ścieżka / Plik | Przeznaczenie i Funkcjonalność |
| :--- | :--- |
| `src/layouts/MainLayout.astro` | Główny szablon narzucający mroczny, studyjny motyw graficzny Tailwind CSS oraz konfigurację płynnych przejść nawigacyjnych. |
| `src/pages/index.astro` | Ekran powitalny (Landing Page), który niczym panel główny konsoli spina wszystkie sekcje tematyczne w jedną, koherentną całość. |
| `src/components/WebGLSphere.astro` | Interaktywna rzeźba trójwymiarowa renderowana w Three.js, obrazująca w czasie rzeczywistym charakterystyki układów sferycznych na podstawie zmiennych $l$ oraz $m$. |
| `src/components/AudioVisualizer.astro` | Samodzielny węzeł używający Web Audio API do generowania analizy widma algorytmem szybkiej transformaty Fouriera na żywo. |
| `src/content/publikacje/` | Baza plików Markdown (MDX) gromadząca dorobek naukowy, w tym monografie z zakresu technik mikrofonowych i psychoakustyki. |
| `src/content/filmografia/` | Systematycznie zarządzana kolekcja danych o produkcjach kinowych i telewizyjnych, gotowa do zasilania interaktywnych siatek portfolio. |

---

### 3. Edit-script: Scenariusz Kinematyki i Interakcji

Statyczny kod zostanie ożywiony za pomocą silnika GSAP oraz wtyczki ScrollTrigger, która zsynchronizuje zachowania elementów z fizyczną pozycją przewijania ekranu. 

1.  **Immersyjne Otwarcie (Sekcja Hero):** Po wejściu na stronę ładowane jest pełnoekranowe, głębokie tło graficzne. W centralnym punkcie zawieszona jest i powoli obraca się cyfrowa, trójwymiarowa sfera reagująca na ruchy kursora z fizyczną bezwładnością. Tradycyjne panele nawigacyjne są ukryte, zmuszając użytkownika do intuicyjnego eksplorowania przestrzeni w dół.
2.  **Akustyka Przestrzenna (Scroll 1):** Wraz z przewijaniem w dół, ScrollTrigger "przypina" ekran. Abstrakcyjna sfera transformuje się w matematyczny, reagujący na dane wejściowe model mikrofonu przestrzennego. Obok płynnie wyłaniają się stworzone w Tailwind potencjometry, którymi użytkownik może manipulować.
3.  **Laboratorium ASA (Scroll 2):** Ekran przesuwa się do sekcji *Auditory Scene Analysis*. Algorytmy w tle dyskretnie pobierają dane z Web Audio API. Użytkownik, manipulując specjalnym suwakiem czasu, samodzielnie doprowadza do rozpadu odtwarzanego, izochronicznego strumienia dźwięku. W ułamku sekundy główny oscyloskop na ekranie dramatycznie rozdziera się na dwie niezależne ścieżki, naocznie udowadniając zjawisko segregacji percepcyjnej.
4.  **Komercyjne Portfolio (Scroll 3):** Animacja łagodnie odsłania archiwum kinematografii ułożone w strukturze "Bento Grid". Kafelki reprezentujące filmy i seriale ładują się kaskadowo, imitując załączające się moduły sprzętowe w szafie rackowej. Najechanie na wybrany projekt skutkuje błyskawicznym podświetleniem neonowym akcentem i cichym, mechanicznym kliknięciem w tle.

---

Chciałbyś, abym na podstawie tego planu napisał dla Ciebie kod źródłowy głównego układu strony (`MainLayout.astro`) z poprawnie skonfigurowanymi przejściami View Transitions, czy wolisz zacząć od budowy logiki wizualizatora Web Audio API?