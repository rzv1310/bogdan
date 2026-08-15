# Plan: hreflang complet în sitemap.xml

## Problema
`scripts/generate-sitemap.mjs` are propriul tabel `PAIRS` cu perechile RO/EN, iar acesta a rămas în urmă. 8 rute apar în sitemap fără alternate hreflang: `/servicii`, `/harta-site`, `/calculator-despagubiri`, `/servicii/urmarire-penala`, `/servicii/masuri-preventive`, `/servicii/infractiuni-contra-persoanei` plus corespondentele EN.

## Soluția
Elimin tabelul duplicat și folosesc o singură sursă de adevăr pentru perechile de limbă, ca să nu mai rămână niciodată în urmă când se adaugă pagini noi.

1. Mut maparea RO -> EN într-un fișier partajat citit atât de `src/lib/routeMap.ts` (client) cât și de `scripts/generate-sitemap.mjs` (build), sau import direct din `routeMap` în script - varianta care nu strică build-ul Node.
2. `generate-sitemap.mjs` generează alternatele `hreflang="ro"`, `hreflang="en"` și `x-default` pentru toate rutele care au pereche.
3. Regenerez `public/sitemap.xml`.

## Verificare
- Rulez generarea sitemap-ului și confirm că toate cele 44 de rute care au pereche RO/EN conțin cele 3 linkuri `xhtml:link`.
- Rulez validarea SEO existentă (`scripts/validate-seo.mjs`) și build-ul; 0 erori.

## Notă tehnică
Nu se schimbă nimic vizual în site și nu se adaugă/elimină rute. `<lastmod>` rămâne absent (nu există timestamp per pagină de încredere).
