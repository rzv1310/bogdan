# priceRange pe LegalService

## Ce am verificat acum

- În cod există o singură proprietate `priceRange`, cu valoarea `"$$"`:
  - `src/pages/Index.tsx` (linia 371)
  - `src/pages/en/Homepage.tsx` (linia 196)
- În build-ul local (`dist/index.html`, `dist/en/index.html`): o singură apariție, `"priceRange":"$$"`.
- Pe domeniul de producție `https://avocatpenalbucuresti.ro/`: `"priceRange":"$$"` - corect.
- Pe `https://bogdan.lovable.app/` (varianta Lovable publicată): apare `"priceRange":"$"` - adică un build vechi, dinainte de fixul din `scripts/prerender.mjs` care corupea `$$` în `$`.

Concluzie: nu mai există un `priceRange: "$"` în schema din cod. Valoarea greșită vine dintr-o versiune publicată veche, nu din sursă.

## Ce propun

1. Republicare, ca varianta Lovable să preia build-ul actual (cel cu fixul `$$`).
2. Re-verificare după deploy: `"priceRange"` să apară exact o dată, cu valoarea `"$$"`, pe RO și EN.
3. Zero modificări în schema JSON-LD - nu ating `LegalService`, `WebSite`, `FAQPage`, `aggregateRating`, `review` sau vreun `@id`.

## Dacă validatorul arată în continuare două priceRange

În acest caz cauza e URL-ul testat (build vechi în cache CDN). Pas suplimentar: verific direct răspunsul HTML al URL-ului exact folosit în validator și confirm numărul de apariții, fără să modific schema.
