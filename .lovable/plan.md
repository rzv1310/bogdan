# Fix canonical: URL absolut pe toate paginile

## Cauza (verificat)

HTML-ul static generat la build este corect: `scripts/prerender.mjs` transformă valoarea în URL absolut (`https://avocatpenalbucuresti.ro/...`) prin funcția `absolute()`, iar `scripts/validate-seo.mjs` verifică deja acest lucru la fiecare build.

Problema apare după ce pornește JavaScript-ul: în `src/hooks/useSEO.ts` (linia 53) canonical-ul este setat direct din valoarea relativă pe care o trimit paginile (`canonical: "/servicii/retinere-24-ore"`), fără prefixul domeniului. PageSpeed/Lighthouse rulează JS, vede varianta relativă și raportează „Nu este o adresă URL absolută”. Același lucru se întâmplă și cu `og:url`, care folosește aceeași valoare.

Nu e nevoie să modific cele ~60 de pagini: soluția este în hook, deci se repară simultan pe toate paginile existente și viitoare.

## Ce se repară

1. **Canonical absolut peste tot (runtime)**: în `useSEO` valoarea relativă se transformă în URL absolut pe `https://avocatpenalbucuresti.ro` înainte de a fi scrisă în `<link rel="canonical">`.
2. **og:url** primește exact același URL absolut (rămâne identic cu canonical, cerință de validare).
3. **Consecvență fără slash final**: URL-ul canonical se normalizează prin eliminarea slash-ului final (excepție homepage `/`), la fel ca în sitemap.
4. **Redirect 301 slash -> fără slash** în `netlify.toml`, ca versiunea cu `/` la final să nu mai fie o a doua adresă accesibilă.

Deja consecvente, verificate, deci nu se modifică: sitemap-ul (toate cele 62 de `<loc>` sunt absolute, fără slash final), schema BreadcrumbList (folosește `SITE + path`, absolut), linkurile interne (rute relative fără slash final).

## Detalii tehnice

- `src/hooks/useSEO.ts`: se importă `SITE_ORIGIN` din `src/lib/ssr-head.ts` și se construiește `url` cu un helper de tip `absolute(canonical ?? location.pathname)` care: adaugă `SITE_ORIGIN` dacă valoarea nu începe cu `http`, și taie slash-ul final când path-ul nu este `/`. Se folosește pentru canonical și `og:url`.
- `netlify.toml`: regulă de redirect `status = 301` din `/*/` către `/:splat` (fără slash final), plasată înaintea rewrite-urilor SPA existente pentru a nu le afecta.
- Verificare: `npx tsgo --noEmit`, build cu `scripts/validate-seo.mjs` (0 erori) și un test Playwright pe `/servicii/retinere-24-ore` care citește `document.querySelector('link[rel=canonical]').href` după hidratare, ca să confirm valoarea absolută în DOM-ul live.
