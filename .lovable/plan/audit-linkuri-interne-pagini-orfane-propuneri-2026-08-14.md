# Audit linkuri interne: pagini orfane + propuneri

## Rezultatul auditului

Am analizat toate cele 38 pagini generate static (`dist/**/*.html`) și am numărat linkurile reale `<a href>`.

**Nu există pagini orfane.** Fiecare rută din `scripts/routes.mjs` primește minim 16 linkuri (meniu + footer + `/harta-site`), deci toate sunt crawlabile.

Problema reală este alta: **linkuri contextuale (din conținut, `<main>`) foarte puține**. Excluzând meniul, footerul, harta site-ului și 404, situația e:

| Pagină | Linkuri din conținut |
|---|---|
| `/servicii/urmarire-penala`, `/masuri-preventive`, `/reprezentarea-victimelor` | 3 |
| `/servicii/infractiuni-contra-persoanei`, `/infractiuni-rutiere-cu-victime` | 2 |
| `/servicii/criminalitate-economica`, `/coruptie...`, `/activele-cripto`, `/droguri`, `/spalare-de-bani`, `/malpraxis`, `/raspundere-penala-locul-de-munca` | 1 (doar homepage) |
| `/despre-mine`, `/contact`, `/blog` | 0–1 |
| toate cele 9 pagini `/en/services/*` | 1 (doar `/en`) |
| `/en/about`, `/en/blog`, `/en/contact` | 0 |

## Ce propun să adăugăm

### 1. Bloc „Servicii conexe” pe fiecare pagină de serviciu (RO + EN)
Un component reutilizabil care afișează 3 servicii relevante, cu ancore descriptive. Mapare propusă:

- criminalitate-economica → spalare-de-bani, coruptie, activele-cripto
- coruptie → criminalitate-economica, spalare-de-bani, urmarire-penala
- spalare-de-bani → criminalitate-economica, activele-cripto, masuri-preventive
- activele-cripto → spalare-de-bani, criminalitate-economica, urmarire-penala
- droguri → masuri-preventive, urmarire-penala, infractiuni-contra-persoanei
- malpraxis → infractiuni-contra-persoanei, raspundere-penala-locul-de-munca, reprezentarea-victimelor
- infractiuni-rutiere → reprezentarea-victimelor, infractiuni-contra-persoanei, masuri-preventive
- raspundere-penala-locul-de-munca → malpraxis, infractiuni-contra-persoanei, reprezentarea-victimelor
- infractiuni-contra-persoanei → infractiuni-rutiere, reprezentarea-victimelor, masuri-preventive
- urmarire-penala → masuri-preventive, droguri, criminalitate-economica
- masuri-preventive → urmarire-penala, droguri, spalare-de-bani
- reprezentarea-victimelor → calculator-despagubiri, infractiuni-rutiere, infractiuni-contra-persoanei

Echivalentele EN folosesc aceeași mapare prin `src/lib/routeMap.ts`.

### 2. Linkuri contextuale în corpul textului
- În intro-ul fiecărei pagini de serviciu: 1–2 ancore către `/servicii/urmarire-penala` și `/servicii/masuri-preventive` (etapele procesuale), unde are sens semantic.
- În paginile relevante pentru victime (rutiere, contra persoanei, malpraxis, locul de muncă): ancoră către `/calculator-despagubiri` — pagina cea mai slab linkată din site.
- În `/despre-mine`: 3–4 ancore către serviciile principale.
- În `/contact`: ancore către `/servicii/urmarire-penala` și `/servicii/masuri-preventive` (urgențe).

### 3. Paginile EN
- Același bloc „Related services” pe toate `/en/services/*`.
- Linkuri din `/en/about` și `/en/contact` către serviciile EN principale.

### 4. Verificare automată
Extind `scripts/validate-seo.mjs` cu o regulă nouă: fiecare rută trebuie să aibă **minim 2 linkuri interne din conținutul altor pagini** (ignorând header, footer, `/harta-site`, `404.html`). Build-ul semnalează pagini sub prag.

## Detalii tehnice

- Component nou `src/components/RelatedServices.tsx`, alimentat de o mapare nouă în `src/lib/services.ts` (sau fișier dedicat `src/lib/relatedServices.ts`), cu suport bilingv prin `routeMap`.
- Ancorele folosesc `<Link to>` din react-router, cu text descriptiv (nu „click aici”), pentru ca prerender-ul să le emită în HTML static.
- Stilizare cu tokenii existenți din design system, aceeași carte de vizită vizuală ca grila de servicii de pe homepage.
- `scripts/validate-seo.mjs` primește un pas nou `checkInternalLinks(dist)` care parsează `<main>` din fiecare HTML.
