Gotowe — przygotowałem pełny starter z katalogiem `src/`, komponentami `.astro`, przykładowym `index.astro`, podstronami, lokalnym contentem i placeholderem SVG do sekcji studyjnej:

[ZIP ze starterem](sandbox:/mnt/data/adam-rosinski-astro-starter-pack.zip)
[Folder startera](sandbox:/mnt/data/adam-rosinski-astro-starter-pack)
[Sam starter-project](sandbox:/mnt/data/adam-rosinski-astro-starter-pack/starter-project)

W środku masz:

* modularny landing page w Astro,
* `src/content.config.ts` i lokalne content collections,
* `src/pages/index.astro` + szkielety `/publications`, `/projects`, `/about`, `/contact`,
* komponent „Auditory Field” z lekką interakcją,
* dane profilowe i linki źródłowe,
* README i edit-script dla asystenta AI.

Starter oparłem na zweryfikowanym kierunku merytorycznym: profil UWM i publikacje Adama Rosińskiego wyraźnie wskazują na obszary takie jak auditory scene analysis, percepcja słuchowa, techniki mikrofonowe stereo/surround oraz wielokanałowa rejestracja, więc taki układ sekcji i język wizualny są spójne z realnym dorobkiem. ([ws.uwm.edu.pl][1])

Technicznie starter jest zgodny z aktualnym kierunkiem Astro: content collections są oficjalnie rekomendowanym sposobem zarządzania lokalnym contentem, a Tailwind 4 w Astro jest dziś prowadzony przez oficjalny setup i preferowany plugin Vite zamiast starej integracji `@astrojs/tailwind`. ([docs.astro.build][2])

Uzupełniłem też w danych adres `adam.rosinski@uwm.edu.pl`, bo pojawia się jako e-mail autora korespondencyjnego w publikacji Cambridge o sferycznym mikrofonie. ([Cambridge University Press & Assessment][3])

Najlepszy workflow nadal jest ten sam: **daj asystentowi ten ZIP i równolegle linki źródłowe**. ZIP stabilizuje strukturę i estetykę, a linki pozwalają mu potem doszlifować treść bez zgadywania. Jeśli chcesz, następnym krokiem przygotuję wersję **bardziej widowiskową wizualnie**: z mocniejszym motion designem, lepszym hero i bardziej dopracowanym „sound field”.

[1]: https://ws.uwm.edu.pl/pracownicy-ogloszenia-i-aktualnosci/dr-adam-rosinski?utm_source=chatgpt.com "DR ADAM ROSIŃSKI - Olsztyn - Wydział Sztuki - UWM"
[2]: https://docs.astro.build/pl/guides/content-collections/?utm_source=chatgpt.com "Content collections - Astro Docs"
[3]: https://www.cambridge.org/core/services/aop-cambridge-core/content/view/FC3E21558389BC87BAF12F66DB3AF0B1/S1355771825101039a.pdf/spherical_microphone_prototype_for_multichannel_recording_technological_design_artistic_applications_and_compositional_implications.pdf?utm_source=chatgpt.com "A spherical microphone prototype for multichannel recording"
