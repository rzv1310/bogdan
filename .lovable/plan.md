# Plan: 5 pagini noi de subservicii (RO)

## Ce se creează

| URL | Keyword principal |
| --- | --- |
| `/servicii/audiere-politie-parchet` | avocat audiere poliție București |
| `/servicii/perchezitie-domiciliara` | avocat percheziție domiciliară |
| `/servicii/perchezitie-informatica` | avocat percheziție informatică |
| `/servicii/avocat-diicot` | avocat DIICOT București |
| `/servicii/avocat-dna` | avocat DNA |

Conținutul vine din cele 5 fișiere pe care le-ai încărcat (titluri, descrieri, keywords, texte, liste, FAQ), adaptat la formatul actual al site-ului.

## Structura fiecărei pagini

Identică cu paginile existente de servicii (ex. `/servicii/masuri-preventive`):

1. H1 `text-2xl font-semibold`
2. Paragraf de urgență cu text negru, fiecare propoziție pe rând nou
3. Buton CTA „Sună acum" cu animația de chenar
4. „5,0 din 27 de recenzii Google"
5. Bio scurtă + mențiunea Legal 500
6. Breadcrumbs
7. Secțiunile de conținut din fișierele încărcate (Ce fac pentru tine, etapele procedurii etc.)
8. FAQ (acordeon)
9. `RelatedServices` cu linkuri interne relevante (audiere <-> percheziții <-> DIICOT/DNA, plus urmărire penală și măsuri preventive)
10. CTA final

Fără em dash: doar cratimă „-".

## SEO

Pentru fiecare pagină: title, meta description, keywords (principal + secundare din tabel), canonical propriu, `og:*` / `twitter:*`, robots directives, și JSON-LD: `BreadcrumbList`, `LegalService` (cu `areaServed` din `src/lib/areaServed.ts`) și `FAQPage`.

Se creează și versiunile EN (`/en/services/police-prosecutor-questioning`, `/en/services/home-search`, `/en/services/digital-device-search`, `/en/services/diicot-lawyer`, `/en/services/dna-lawyer`), traduse din conținutul RO, cu perechile adăugate în `scripts/langPairs.mjs` ca să aibă `hreflang` ro / en / x-default în head și în sitemap.

## Integrare în site

- rute noi în `src/routes.tsx` (code-split, ca restul)
- adăugate în `scripts/routes.mjs` (prerender + sitemap.xml, prioritate 0.9)
- adăugate în `src/lib/services.ts` și `src/lib/serviceGroups.ts` ca să apară în meniu și în pagina `/servicii`
- adăugate în pagina `Harta Site`
- adăugate în `public/llms.txt`
- linkuri interne din `/servicii/urmarire-penala` și `/servicii/masuri-preventive` spre noile pagini

## Verificare

Rulez build-ul, `scripts/validate-seo.mjs` (hreflang, JSON-LD, em dash) și confirm în preview că cele 5 pagini se încarcă corect și apar în `sitemap.xml`.
