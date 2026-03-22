Oto propozycja szablonu architektury plików dla frameworka Astro oraz edit-script (scenariusz animacji i interakcji), który posłuży do ustrukturyzowania i wdrożenia portfolio.

**Szablon struktury projektu (Astro + Tailwind)**
Architektura serwisu powinna opierać się na niezależnych komponentach oraz wbudowanych w Astro kolekcjach treści (Content Collections), co ułatwi zarządzanie rozbudowanym dorobkiem:

*   `src/layouts/MainLayout.astro`: Główny układ strony zawierający globalne style Tailwind CSS oparte na mrocznym, studyjnym motywie graficznym oraz bazową konfigurację przejść płynnych (View Transitions API), aby dźwięk nie urywał się podczas nawigacji.
*   `src/pages/index.astro`: Główny widok (Landing Page) spinający wszystkie sekcje tematyczne w jedną całość.
*   `src/components/WebGLSphere.astro`: Interaktywny komponent renderujący wizualizację mikrofonu sferycznego przy użyciu biblioteki Three.js.[1]
*   `src/components/AudioVisualizer.astro`: Zhermetyzowany komponent odtwarzacza dźwięku, który wykorzystuje Web Audio API do generowania analizy widma (oscyloskopu) w czasie rzeczywistym.[2]
*   `src/content/publikacje/`: Katalog z plikami Markdown (MDX) przechowujący ustrukturyzowany dorobek naukowy. To tutaj wprowadzane będą dane o wydawnictwach, takich jak monografia "Microphone Techniques in Stereo and Surround Recording".[3]
*   `src/content/filmografia/`: Kolekcja przechowująca dane o dorobku w branży kinematograficznej. System z łatwością wygeneruje kafelki dla takich produkcji jak "Za duży na bajki 3", "The Office PL", "Ojciec Mateusz" czy "Pierwsza miłość".[4, 5]

**Edit-script (Scenariusz zdarzeń i interakcji)**
Ten skrypt definiuje sekwencję zdarzeń na ekranie w odpowiedzi na akcje użytkownika. Zakłada wykorzystanie silnika animacji GSAP oraz wtyczki ScrollTrigger do zarządzania ruchem [6]:

1.  **Inicjalizacja (Sekcja Hero):** Po wejściu na stronę ładowane jest pełnoekranowe, głębokie tło. Na środku ekranu powoli obraca się abstrakcyjny, trójwymiarowy model sfery, który płynnie reaguje na ruchy kursora, symulując fizyczną bezwładność i masę.[1] Brak standardowego paska odtwarzania – interfejs ukryty jest w detalach.
2.  **Scroll 1 (Sekcja nowych technologii):** Gdy użytkownik przewija w dół, ScrollTrigger płynnie przypina widok. Abstrakcyjna sfera z sekcji powitalnej transformuje się w matematyczny wykres harmonik sferycznych obrazujący działanie prototypu mikrofonu. Obok pojawiają się interaktywne potencjometry zrealizowane w Tailwind CSS.
3.  **Scroll 2 (Laboratorium Auditory Scene Analysis):** Ekran przesuwa się do sekcji badawczej. Kod JavaScript w tle dyskretnie inicjuje Web Audio API, pobierając dane do wizualizatora fali dźwiękowej.[7] Użytkownik widzi wbudowany interfejs pozwalający odtworzyć izochroniczne tony i za pomocą suwaka samodzielnie "rozbić" strumień audio, doświadczając zjawiska segregacji na żywo.
4.  **Scroll 3 (Katalog Filmografii):** Animacja GSAP ujawnia siatkę w stylu Bento Grid. Kafelki z plakatami filmów i seriali ładują się kaskadowo, przypominając włączające się moduły w racku studyjnym. Najechanie kursorem na dany element (np. film dokumentalny) podświetla go jaskrawym, "neonowym" akcentem i ujawnia szczegóły dotyczące roli w produkcji.