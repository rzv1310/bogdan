# Finalizare cluster Malpraxis: ce mai lipsește

## Ce este gata

- Cele 7 pagini RO și 7 pagini EN de subservicii sunt create, cu conținut, FAQ și linkuri interne.
- Rutele sunt înregistrate în `src/routes.tsx`, `scripts/langPairs.mjs` și `scripts/routes.mjs`.
- Casetele din `/servicii` și `/en/services` plus bio-block-ul paginii-părinte trimit către noile pagini (`serviceGroups.ts`).
- Serviciile conexe (părinte + frați) sunt configurate în `relatedServices.ts`.
- Ambele pagini-părinte (RO și EN) au fost transformate în hub-uri cu rezumate de 2-3 fraze + card cu link.

## Ce lipsește

Cele 14 pagini noi nu apar în listele de indexare vizibile:

1. `src/pages/Sitemap.tsx` - lipsesc cele 7 pagini RO din secțiunea de subservicii (spre deosebire de clusterele anterioare, ex. Loviri, Violență domestică, care sunt listate).
2. `src/pages/en/sitemap.tsx` - lipsesc cele 7 pagini EN.
3. `public/llms.txt` - lipsesc cele 7 intrări RO (cu descriere scurtă, în același format ca celelalte subservicii).

`public/sitemap.xml` se regenerează automat din `scripts/routes.mjs` la build, deci nu necesită editare manuală.

## Pași

- Adaug cele 7 linkuri RO în harta site (`Sitemap.tsx`), grupate lângă pagina-părinte Malpraxis.
- Adaug cele 7 linkuri EN în `en/sitemap.tsx`, în aceeași ordine.
- Adaug cele 7 intrări în `llms.txt`, fiecare cu o descriere de o frază, fără em dash.
- Rulez build + `scripts/validate-seo.mjs` și typecheck pentru a confirma canonical, hreflang și paritatea RO-EN.
