# Reducere JavaScript nefolosit (bundle splitting)

## Ce este `/assets/index-...js`

Este pachetul JavaScript unic al aplicatiei, generat de build. Acum are **3,26 MB** (necomprimat) si contine codul **tuturor** paginilor plus bibliotecile grele, chiar daca vizitatorul deschide doar homepage-ul:

- `@react-pdf/renderer` - PDF-uri (folosit doar in pagina cripto si in checklist malpraxis)
- `recharts` + `html-to-image` - graficele din 4 pagini de servicii
- `docx` - generare document Word (doar checklist malpraxis)
- `styled-components` - doar 2 componente din pagina cripto
- `embla-carousel`, `framer-motion`, `date-fns` etc.

Deci homepage-ul descarca acum si codul PDF/grafice/Word pe care nu il foloseste niciodata.

## Impact vizual

Zero modificari vizuale. Paginile ramin identice: acelasi HTML, acelasi CSS, acelasi conten prerandat (SSG). Singura diferenta e *cind* se descarca codul: la nevoie, nu la prima incarcare.

## Impact la viteza

Mare pentru homepage si paginile de intrare din Google:

- bundle initial estimat de la ~3,26 MB la **~400-600 KB** (necomprimat), adica aproximativ **-80% JS descarcat** pe prima vizita
- efect direct pe LCP / TBT / "Reduce unused JavaScript" in PageSpeed
- HTML-ul e deja prerandat, deci textul si imaginile apar la fel de repede sau mai repede; interactivitatea (butoane, meniu) devine disponibila mai rapid
- paginile cu grafice/PDF vor descarca acele biblioteci doar cind ajungi pe ele (sau la click pe descarcare), cu o intirziere de sub o secunda

## Ce facem

1. **Code splitting pe rute** in `src/routes.tsx`: homepage RO/EN si Layout ramin in bundle-ul principal, restul paginilor (servicii RO+EN, blog, contact, about, calculator, GDPR, termeni, harta site, politica cookies) devin `React.lazy` cu un `Suspense` neutru, fara spinner vizibil care sa schimbe aspectul.
2. **Lazy pentru componentele grele**, incarcate doar la nevoie:
   - graficele (`recharts` + `html-to-image`) - lazy la nivel de componenta in cele 4 pagini de servicii
   - `@react-pdf/renderer` si `docx` - import dinamic la click pe butonul de descarcare, nu la randarea paginii
   - `styled-components` (`EthereumCard`, `PhoneLoader`) - lazy in pagina cripto
3. **`manualChunks`** in `vite.config.ts`: separam `react`/`react-router`, `framer-motion`, `recharts`, `react-pdf`, `docx` in chunk-uri proprii, ca sa nu reintre in bundle-ul initial.
4. **Verificare**: rulam build-ul complet (inclusiv prerender + validare SEO), comparam dimensiunile chunk-urilor inainte/dupa si verificam vizual homepage + o pagina cu grafic + descarcarea PDF/Word in preview.

## Detalii tehnice

- Prerenderul (`scripts/prerender.mjs` + `src/entry-server.tsx`) ruleaza pe server, unde `React.lazy` nu se rezolva sincron; pentru SSR pastram importurile statice in `entry-server` sau folosim `Suspense` cu fallback gol, astfel HTML-ul prerandat rimine complet si SEO-ul neafectat.
- Ne asiguram ca `ssr.noExternal` existent (`styled-components`, `@react-pdf/renderer`, `recharts`, `framer-motion`) rimine valid dupa splitting.
- Fara modificari de conten, texte, JSON-LD sau stiluri.
