# AI Deployment Guide (Przewodnik Wdrożeniowy dla Asystentów AI)

Ten dokument został stworzony specjalnie dla przyszłych asystentów AI oraz programistów w celu zapewnienia powtarzalnego, stabilnego i wolnego od błędów procesu wdrożenia (deploymentu) strony internetowej Adama Rosińskiego na GitHub Pages.

---

## 📌 Podstawowe Informacje (Quick Reference)

* **Adres strony (Target URL):** `https://grzegorz-samson.github.io/adam-rosinski/`
* **Główny profil Git:** `grzegorz-samson`
* **Metoda wdrażania:** Lokalna kompilacja plików statycznych (Astro) -> Wypchnięcie zawartości folderu `dist/` na gałąź `gh-pages`.
* **Skrypt wdrożeniowy:** [scripts/deploy.ps1](file:///c:/VisualStudioProjects/adam-rosinski/scripts/deploy.ps1)

---

## 🛠️ Mechanizm Wdrożenia (How It Works)

Nie używamy automatycznej kompilacji kodu źródłowego na serwerach GitHub (to podejście generowało błędy). Wdrożenie odbywa się w pełni kontrolowany sposób lokalny:

1. **Staging Folder:** Skrypt wdrożeniowy automatycznie zarządza ukrytym, ignorowanym przez git folderem buforowym `.pages-publish-deploy/` w głównym katalogu projektu.
2. **Kompilacja (Build):** Budujemy projekt lokalnie za pomocą komendy `npm run build`. Bardzo ważne jest przekazanie zmiennych środowiskowych GitHub Actions, aby Astro poprawnie rozwiązało ścieżkę bazową `/adam-rosinski/`:
   ```powershell
   $env:GITHUB_ACTIONS = "true"
   $env:GITHUB_REPOSITORY_OWNER = "grzegorz-samson"
   $env:GITHUB_REPOSITORY = "grzegorz-samson/adam-rosinski"
   ```
3. **Czyszczenie i Kopiowanie:** Zawartość folderu buforowego `.pages-publish-deploy/` jest czyszczona (z zachowaniem folderu `.git`), po czym kopiowane są tam pliki z `dist/`.
4. **Wymóg `.nojekyll`:** W głównym folderze wdrożenia tworzony jest pusty plik `.nojekyll`, aby GitHub Pages nie ignorowało folderów zaczynających się od podkreślnika (np. `_astro/` zawierającego pliki CSS/JS).
5. **Git Push:** Skrypt wykonuje commit i wypycha zmiany na gałąź `gh-pages`.

---

## 🔑 Konfiguracja Uprawnień i Kont (Crucial Credentials Step)

W środowisku lokalnym mogą być skonfigurowane dwa konta GitHub CLI (`gh`): `grzegorz-samson` oraz `adammuzyk`. Wdrożenie musi odbywać się przy użyciu uprawnień właściciela repozytorium (`grzegorz-samson`).

### Instrukcja dla Asystenta AI:
Przed uruchomieniem wdrożenia **zawsze** sprawdź aktywne konto i w razie potrzeby przełącz je:

1. **Sprawdzenie statusu:**
   ```powershell
   gh auth status
   ```
2. **Przełączenie na właściwe konto (jeśli aktywne jest inne):**
   ```powershell
   gh auth switch --user grzegorz-samson
   ```

---

## 🚨 Rozwiązywanie Problemów (Troubleshooting Transient GitHub Issues)

Czasami systemowy mechanizm GitHub Pages (workflow o nazwie `pages-build-deployment` uruchamiany automatycznie na serwerach GitHub po pushu na gałąź `gh-pages`) może zgłosić błąd i wysłać maila o nieudanym wdrożeniu (*Failed deploy job*).

### Częste błędy i ich przyczyny:
1. **Komunikat:** `gh: Sorry. Your account was suspended (HTTP 403)` lub `RPC failed; HTTP 403` w logach GitHub Actions.
2. **Komunikat:** `An action could not be found at the URI 'https://codeload.github.com/...'` lub `Failed to download archive`.

**Co to oznacza?**  
Są to **błędy przejściowe (transient network issues)** serwerów GitHub (często związane z przeciążeniem serwera `codeload.github.com` lub błędnym routingu IP maszyn Actions). Konto **nie jest zawieszone** – to błąd po stronie infrastruktury GitHub.

### Rozwiązanie (Instrukcja dla AI):
Nie zmieniaj kodu ani skryptów wdrożeniowych. Wystarczy zmusić serwery GitHub do ponownej próby wdrożenia za pomocą GitHub CLI:

1. **Pobierz ID ostatniego uruchomienia:**
   ```powershell
   gh run list
   ```
2. **Uruchom ponownie zablokowane wdrożenie (rerun):**
   ```powershell
   gh run rerun <run-id>
   ```
   *(Możesz też poprosić użytkownika o ręczne kliknięcie przycisku "Re-run failed jobs" w zakładce Actions w przeglądarce).*
3. **Monitoruj postęp:**
   ```powershell
   gh run view <run-id>
   ```
   Zazwyczaj druga lub trzecia próba kończy się pełnym sukcesem (`✓ deploy in XXs`).

---

## 🚀 Jak uruchomić deploy (Szybka komenda)

Aby wdrożyć nową wersję, wykonaj w terminalu PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1
```

---

## Formularz Kontaktowy Cloudflare Worker + Turnstile

JeĹ›li formularz kontaktowy ma dziaĹ‚aÄ‡ po deployu, przed lokalnym buildem trzeba ustawiÄ‡ te zmienne:

```powershell
$env:PUBLIC_CONTACT_FORM_ENDPOINT = "https://<worker-subdomain>.workers.dev/contact"
$env:PUBLIC_TURNSTILE_SITE_KEY = "<turnstile-site-key>"
```

Sama strona pozostaje na GitHub Pages, ale endpoint formularza jest zewnÄ™trzny i nie moĹĽe byÄ‡ pusty w momencie wykonywania `npm run build`.
