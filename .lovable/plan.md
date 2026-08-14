# Validare hreflang + JSON-LD, sitemap.xml și robots.txt

## Ce am verificat în proiect

- Multe pagini injectează JSON-LD prin `<script>` inline protejat de `typeof window !== "undefined"` (~23 pagini: toate serviciile RO/EN, contact EN, termeni, gdpr, cookies, `/en`). Aceste scheme NU ajung în HTML-ul prerendat, deci Google fără JS nu le vede. Doar schemele trecute prin `useSEO({ schemas })` sunt scrise în `<head>` de `scripts/prerender.mjs`.
- `alternates` (hreflang) lipsesc pe: `/despre-mine`, `/en/about`, `/blog`, `/contact`, `/calculator-despagubiri` și pe serviciile RO `criminalitate-economica`, `infractiuni-de-coruptie...`, `investigatii-privind-activele-cripto`, `cauze-penale-privind-droguri`, `neglijenta-profesionala-si-malpraxis`, `infractiuni-rutiere-cu-victime`, `reprezentarea-victimelor-in-procese-penale`.
- `x-default` este inconsistent: paginile EN (`/en/gdpr`, `/en/cookie-policy`, `/en/contact`) îl trimit spre varianta EN, iar cele RO spre RO. Pentru o pereche RO/EN, x-default trebuie identic pe ambele pagini.
- Lipsesc `canonical` explicit pe unele pagini (se generează din rută la prerender — corect, dar îl fixăm explicit unde există pereche de limbă).
- Nu există `public/sitemap.xml`, deși `public/robots.txt` deja îl declară la `https://avocatpenalbucuresti.ro/sitemap.xml`.
- Există o rută React `/sitemap.xml` (`src/pages/Sitemap.tsx`) cu `canonical` setat pe `/sitemap.xml` — intră în conflict cu fișierul XML real și trimite un semnal canonical greșit.

## Ce voi face

### 1. hreflang corect pe toate paginile importante
- Adaug `alternates` + `canonical` la fiecare pagină din perechile RO/EN care nu le are (listate mai sus).
- Standardizez: fiecare pagină declară `ro`, `en` și `x-default` → varianta RO (limba principală a site-ului), identic pe ambele pagini ale perechii. Corectez paginile EN care au acum x-default spre EN.
- Pentru paginile fără pereche (`/calculator-despagubiri`, `/blog` dacă rămâne doar RO) las doar self-canonical, fără hreflang incomplet.
- Verific ca `/en/about` (care refolosește componenta `About`) să emită titlu/descriere EN și hreflang spre `/despre-mine`.

### 2. JSON-LD vizibil pentru crawleri
- Mut toate schemele inline (`BreadcrumbList`, `FAQPage`, `Service`, `WebSite`, `LegalService` etc.) din `<script dangerouslySetInnerHTML>` în `useSEO({ schemas: [...] })`, ca să fie serializate la build în `<head>`.
- Elimin `typeof window !== "undefined"` de pe blocurile de schemă și scot `window.location` din valorile `url`/`@id`, înlocuit cu URL-uri absolute pe `https://avocatpenalbucuresti.ro` (altfel la prerender ar rezulta valori goale).
- Păstrez arhitectura de entități existentă (ID-uri unificate Person / LegalService / WebPage) și `areaServed` din `src/lib/areaServed.ts`.
- Validez că fiecare pagină prerendată are JSON-LD parsabil și fără câmpuri goale, rulând un script de verificare pe `dist/` după build (JSON.parse pe fiecare `ld+json`, plus verificare canonical/hreflang reciproc).

### 3. sitemap.xml
- Creez `scripts/generate-sitemap.ts` cu `BASE_URL = "https://avocatpenalbucuresti.ro"`, cu o singură listă de rute partajată cu `scripts/prerender.mjs`, ca sitemap-ul și paginile prerendate să nu se desincronizeze.
- Include exact rutele indexabile RO + EN (aceleași 33 din prerender), fără `*`, `/sitemap.xml` și NotFound. Fără `<lastmod>` (nu avem timestamp real per pagină).
- Îl leg în `package.json` prin `predev` și `prebuild`, deci scrie `public/sitemap.xml` înainte de dev și build.

### 4. robots.txt și ruta /sitemap.xml
- Păstrez blocurile existente din `public/robots.txt` (Googlebot, Bingbot, social, AI crawlers) și confirm directiva `Sitemap:` corectă.
- Rezolv conflictul rutei `/sitemap.xml`: pagina HTML rămâne accesibilă la `/harta-site` (redenumire rută) cu canonical propriu, iar `/sitemap.xml` servește doar XML-ul real. Îi corectez și `canonical`-ul greșit.

## Detalii tehnice

- Nu schimb mecanismul de prerender; doar alimentez `useSEO` corect ca schemele să intre în `collectHead`.
- Verificare finală: build complet, apoi grep/parse pe `dist/**/index.html` pentru `<title>`, `canonical`, `hreflang` reciproc și JSON-LD valid, plus `curl` local pe `/sitemap.xml` și `/robots.txt`.
