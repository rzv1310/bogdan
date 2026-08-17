# 7 pagini noi de subservicii pentru Criminalitate economică (RO + EN)

## Paginile RO

| URL | Keyword principal | Keywords secundare |
| --- | --- | --- |
| `/servicii/evaziune-fiscala` | avocat evaziune fiscală București | dosar evaziune fiscală, apărare evaziune fiscală |
| `/servicii/inselaciune-frauda` | avocat înșelăciune București | avocat fraudă, fraudă financiară |
| `/servicii/delapidare` | avocat delapidare | dosar delapidare |
| `/servicii/fals-si-uz-de-fals` | avocat fals și uz de fals | fals înscrisuri |
| `/servicii/bancruta-frauduloasa` | avocat bancrută frauduloasă | bancrută frauduloasă dosar penal |
| `/servicii/frauda-informatica` | avocat fraudă informatică | operațiuni financiare frauduloase |
| `/servicii/fonduri-europene` | avocat fraudă fonduri europene | deturnare fonduri UE |

URL-urile se scriu fără slash final, conform convenției actuale a site-ului (canonical, sitemap, redirect-uri).

## Paginile EN corespondente

`/en/services/tax-evasion`, `/en/services/fraud-and-deception`, `/en/services/embezzlement`, `/en/services/forgery-and-use-of-forgery`, `/en/services/fraudulent-bankruptcy`, `/en/services/computer-fraud`, `/en/services/eu-funds-fraud`.

## Structura fiecărei pagini

Identică cu subserviciile existente (ex. Control judiciar, Arest la domiciliu), prin componenta `SubServicePage`:

1. Breadcrumbs pe 4 nivele: Acasă > Servicii > Criminalitate economică > [Subserviciu]
2. H1, paragraf de urgență, CTA hero „☎ Sună-mă acum - 031 632 01 83", USP „Mă ocup personal de dosar", „5,0 din 28 de recenzii Google"
3. `LawyerBioBlock`
4. Secțiuni de conținut specifice fiecărei infracțiuni: ce fac pentru tine, ce analizez în dosar, textul de lege aplicabil (evaziune - Legea 241/2005; înșelăciune - art. 244 CP; delapidare - art. 295 CP; fals și uz de fals - art. 320-323 CP; bancrută frauduloasă - art. 241 CP; fraudă informatică - art. 249 CP; fonduri europene - art. 181-183 Legea 78/2000), riscuri, ce trebuie să-mi trimiți (cu buton WhatsApp verde), pași practici
5. FAQ: H2 secțiune + H3 pe fiecare întrebare, 6-8 întrebări per pagină
6. Contact + „Servicii conexe" generate automat (părinte + frați), fără dublarea linkurilor deja contextuale
7. Fără em dash, doar cratimă

## SEO

Pentru fiecare pagină: title, meta description, keywords din tabel, canonical absolut, `og:*` / `twitter:*`, hreflang ro/en/x-default, plus JSON-LD `BreadcrumbList`, `LegalService` (cu `areaServed`) și `FAQPage`.

Anchor text divers (2-5 cuvinte, semantic/parțial), cu linkuri prioritar spre pagina-pilon Criminalitate economică și spre subserviciile-frate.

## Integrare în site

- rute noi code-split în `src/routes.tsx`, fișiere de pagină în `src/pages/services/` și `src/pages/en/services/`
- date de conținut în `src/lib/subServices/ro.ts` și `en.ts`
- perechile RO/EN în `scripts/langPairs.mjs`
- rute în `scripts/routes.mjs`, marcate ca subservicii (prioritate sitemap 0.8) - intră automat în `sitemap.xml` și în prerender
- adăugate în `src/lib/serviceGroups.ts` (caseta „Criminalitate economică") și în pagina `Harta site`
- adăugate în `public/llms.txt`

## Modificare pe pagina Criminalitate economică

În caseta „Criminalitate economică" din `serviceGroups.ts` se adaugă „Fraudă informatică" și „Bancrută frauduloasă"; toate cele 7 etichete primesc link, așa că lista afișată sub bio-block pe `/servicii/criminalitate-economica` (și EN) devine 7 linkuri active către noile pagini.

## Verificare

Rulez build-ul și `scripts/validate-seo.mjs` (hreflang, JSON-LD, ierarhie heading-uri, em dash) și confirm în preview că cele 14 pagini se încarcă și apar în `sitemap.xml`.
