# Sitemap: verificare și corecții de prioritate

## Ce am verificat

- 138 URL-uri în `public/sitemap.xml`, exact cele 138 de rute din `scripts/routes.mjs`.
- Toate rutele aplicației (`src/routes.tsx`) apar în sitemap; singura excepție e `/*` (pagina 404), corect exclusă.
- Nu există duplicate și nici URL în sitemap fără pagină reală.
- Toate cele 138 de intrări au alternate hreflang (ro, en, x-default); cele 69 de perechi RO/EN sunt complete.

Concluzie: sitemap-ul este corect și complet. Nu lipsește nicio pagină.

## Ce nu e ideal

Prioritățile nu reflectă ierarhia reală. 34 de pagini care sunt de fapt subservicii primesc 0.9, la fel ca paginile-pilon, pentru că lipsesc din setul `SUB_SERVICE_ROUTES`:

- Criminalitate economică: evaziune fiscala, inselaciune-frauda, delapidare, fals-si-uz-de-fals, bancruta-frauduloasa, frauda-informatica, fonduri-europene (+ EN)
- Corupție: dare-luare-de-mita, trafic-de-influenta, abuz-in-serviciu, neglijenta-in-serviciu, conflict-de-interese (+ EN)
- Rutiere: alcool-la-volan, droguri-la-volan, parasirea-locului-accidentului, refuz-prelevare-probe-biologice, conducere-fara-permis, accident-rutier-cu-victime (+ EN)
- Spălare de bani: sechestru-asigurator, confiscare (+ EN)
- Victime: despagubiri-accident-rutier, despagubiri-vatamare-corporala (+ EN)

De asemenea, `/servicii` (hub-ul principal) și `/en/services` au 0.6, mai puțin decât paginile pe care le listează.

## Ce propun să schimb

1. Adaug cele 34 de rute în `SUB_SERVICE_ROUTES` din `scripts/routes.mjs`, ca să primească 0.8 (subserviciu) în loc de 0.9 (pilon).
2. Ridic `/servicii` și `/en/services` la 0.8 în `priorityFor`.
3. Regenerez `public/sitemap.xml` și rulez build + validarea SEO pentru confirmare (0 erori, 138 intrări, hreflang complet).

Fără modificări de rute, conținut sau hreflang - doar valorile de prioritate din sitemap.
