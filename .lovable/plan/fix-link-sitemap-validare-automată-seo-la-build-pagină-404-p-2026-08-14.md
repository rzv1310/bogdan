# Fix link sitemap + validare automată SEO la build + pagină 404 prerendată

## 1. Linkul „Sitemap” din footer

`src/components/layout/Footer.tsx` (linia 103) trimite prin React Router către `/sitemap.xml`.
Ruta React a fost redenumită în `/harta-site`, iar `/sitemap.xml` este acum fișierul XML real din `public/`.
Un `<Link>` client-side către un fișier static nu are rută → 404.

Corectare:
- Linkul „Sitemap” din footer → `<Link to="/harta-site">` (harta site pentru vizitatori).
- Adaug lângă el un link `<a href="/sitemap.xml">` (XML pentru motoare), ca ambele să fie accesibile.

## 2. Test automat de validare la build

Fișier nou `scripts/validate-seo.mjs`, rulat automat după prerender (adăugat în scriptul `build`, după `node scripts/prerender.mjs`). Citește HTML-ul din `dist/` pentru fiecare rută din `scripts/routes.mjs` și verifică:

- `<title>` și `<meta name="description">` există și nu sunt goale;
- `<link rel="canonical">` este absolut și self-referential (`SITE_ORIGIN + rută`);
- hreflang: fiecare `alternate` țintește o rută existentă, iar pagina țintă trimite reciproc înapoi; `x-default` este întotdeauna varianta RO; paginile RO-only (`/calculator-despagubiri`, `/harta-site`) sunt exceptate explicit;
- JSON-LD: fiecare bloc parsează valid și are `@type` (sau `@graph` cu `@type` pe fiecare nod); fără tipuri duplicate pe aceeași pagină (ex. două `WebSite`);
- Open Graph / Twitter (punctul 4).

Comportament: raport în consolă pe rute; la orice eroare `process.exit(1)`, deci build-ul cade. Avertismentele (ex. lipsa hreflang pe rutele RO-only) nu opresc build-ul.

## 3. Pagină 404 prerendată

- `src/pages/NotFound.tsx` rescris în stilul site-ului (tokenuri semantice, nu `bg-gray-100`/`text-blue-500`), bilingv în funcție de limba detectată din URL, cu `useSEO` care setează `noindex, follow` și titlu/descriere proprii.
- Conținut: mesaj scurt + linkuri către rutele importante: Acasă, Despre mine, Contact, Blog, Calculator despăgubiri, cele 9 pagini de servicii RO, plus blocul EN (Home, About, Contact, Blog și serviciile EN).
- `scripts/prerender.mjs` primește o rută specială care randează componenta 404 și scrie `dist/404.html` (nu intră în sitemap și nu apare în `ROUTES` indexabile).
- Codul HTTP 404: hostingul (Netlify, conform `netlify.toml`) servește `404.html` cu status 404 pentru căile inexistente. Regula existentă de rewrite `/*` → `/index.html` cu status 200 ar bloca asta, așa că o restrâng: rewrite-ul rămâne doar ca fallback pentru rutele SPA, iar `404.html` este servit pentru restul. Precizare onestă: pe hostingul Lovable fallback-ul SPA e automat și pagina va apărea, dar statusul rămâne 200 — codul 404 real depinde de Netlify.

## 4. Open Graph și Twitter Card

Starea actuală: `scripts/prerender.mjs` scrie per pagină `og:title`, `og:description`, `og:type`, `og:url`, `og:locale`, `twitter:title`, `twitter:description`; `og:image`, `twitter:image`, `twitter:card`, `twitter:site` rămân globale din `index.html`.

Completări:
- adaug per pagină `og:site_name` și `twitter:card` (`summary_large_image`), astfel încât fiecare pagină prerendată să fie completă și fără duplicate;
- `og:url` rămâne identic cu canonical-ul paginii (self-referential), iar `og:description` / `twitter:description` identice cu meta description din `useSEO`;
- `og:image` / `twitter:image` rămân imaginea globală (absolută), pentru că nu există imagini dedicate pe pagină; validatorul verifică doar prezența unei singure valori absolute.
- Validatorul din pasul 2 verifică pe fiecare rută: prezența și unicitatea `og:title`, `og:description`, `og:type`, `og:url`, `og:locale`, `og:site_name`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`; egalitatea `og:url` = canonical; egalitatea descrierilor cu `meta description`.

## Detalii tehnice

- Fișiere modificate: `src/components/layout/Footer.tsx`, `src/pages/NotFound.tsx`, `src/entry-server.tsx` (suport rută 404), `scripts/prerender.mjs`, `package.json` (script `build`), `netlify.toml`.
- Fișier nou: `scripts/validate-seo.mjs`.
- Verificare finală: `bun run build` complet (sitemap → client → SSR → prerender → validare) trebuie să treacă fără erori, plus `dist/404.html` prezent și cu `noindex`.
