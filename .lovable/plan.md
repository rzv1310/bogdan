# Verificare schema duplicată + consistență trailing slash

## Ce am verificat deja

Pe homepage (`/`) și pe `/en/`, atât în View Source cât și în DOM după hydration:

- Există **un singur** `<script type="application/ld+json" data-managed="true">` cu un `@graph`.
- În acel graph: `LegalService`, `Person`, `WebSite`, `FAQPage` - fiecare **o singură dată**.
- `WebSite` este definit doar în `src/pages/Index.tsx` (RO) și `src/pages/en/Homepage.tsx` (EN), câte unul pe pagină.
- `useSEO` șterge tag-urile `data-managed` existente înainte de a reinjecta, deci hydration-ul nu poate dubla nimic.
- Prerender-ul scrie un singur tag per pagină.

Concluzie: duplicarea nu apare în cod, nici în prerender, nici la hydration. Cel mai probabil validator.schema.org afișează entitatea de două ori pentru că o numără și ca nod din `@graph` și ca nod referențiat prin `@id` (publisher / founder), sau raportul a fost generat pe un snapshot vechi.

## Ce voi face

### 1. Confirmare cu dovezi pe URL-ul exact
Rulez o verificare automată pe toate paginile prerendate (`dist/**/index.html`) care numără tipurile top-level din fiecare `@graph` și raportează orice tip apărut de două ori pe aceeași pagină. Astfel avem confirmare pentru toate cele ~139 pagini, nu doar homepage.

### 2. Gardă permanentă în `scripts/validate-seo.mjs`
Adaug o regulă nouă: eroare dacă o pagină conține de două ori același `@type` top-level (`WebSite`, `FAQPage`, `LegalService`, `Person`, `BreadcrumbList`), sau mai mult de un script `ld+json` `data-managed`. Dacă în viitor apare o dublare reală, build-ul o semnalează imediat.

### 3. Curățare defensivă a `@id`-urilor referențiate
Peste tot se folosește exclusiv acest `@id`: `https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html`. Nu introduc `@id`-uri noi (fără `#website`, `#faq` etc.) - orice referință de entitate din scheme, RO și EN, trimite doar la acest id.

### 4. Fix trailing slash (301 `/servicii` -> `/servicii/`)
Sitemap-ul și canonical-urile sunt fără slash, dar hostingul redirecționează către varianta cu slash - inconsistent. Dezactivez normalizarea cu slash la nivel de hosting (`netlify.toml`: `[build.processing.html] pretty_urls = false`) și verific după deploy că `/servicii` răspunde 200 direct, fără redirect, iar `/servicii/` face 301 către varianta fără slash.

## Detalii tehnice

- Fișiere atinse: `scripts/validate-seo.mjs`, `netlify.toml`, eventual `src/pages/Index.tsx` și `src/pages/en/Homepage.tsx` (doar `@id` adăugat, fără schimbări de conținut).
- Nu se modifică texte, layout sau alte scheme.
- Verificarea finală: curl pe URL-urile live pentru status code + numărătoare de tipuri JSON-LD.
