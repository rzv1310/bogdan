# 2 subservicii noi: Sechestru asigurător și Confiscare

## Pagini noi (RO + EN)

| URL | Keyword principal | Keywords secundare |
| --- | --- | --- |
| `/servicii/sechestru-asigurator` | avocat sechestru asigurător | contestare sechestru penal, ridicare sechestru |
| `/servicii/confiscare` | avocat confiscare extinsă | confiscare bunuri dosar penal |

EN: `/en/services/asset-freezing-order`, `/en/services/confiscation`.

Pagina-părinte: `/servicii/spalare-de-bani-si-ascundere-de-bunuri` (EN: `/en/services/money-laundering-and-asset-concealment`).

## Structura fiecărei pagini

Identică cu subserviciile existente, prin `SubServicePage`:

1. Breadcrumbs pe 4 nivele: Acasă > Servicii > Spălare de bani, sechestru și confiscare > [Subserviciu], cu „Servicii" clickable
2. H1, paragraf de urgență, CTA hero „☎ Sună-mă acum - 031 632 01 83", USP „Mă ocup personal de dosar", „5,0 din 28 de recenzii Google"
3. `LawyerBioBlock`
4. Exact două secțiuni bej: „În ce situație te afli acum?" (selector de situații) și „Ce trebuie să-mi trimiți" (listă documente + buton verde WhatsApp + buton galben cu link „Sună oricum.")
5. Capitole de conținut specifice:
   - Sechestru asigurător: baza legală (art. 249-254 CPP), ce bunuri pot fi indisponibilizate, cine dispune măsura, contestarea în 3 zile (art. 250 CPP), ridicarea/restrângerea sechestrului, sechestru vs. poprire, efecte asupra conturilor și imobilelor, greșeli frecvente
   - Confiscare: confiscarea specială (art. 112 CP), confiscarea extinsă (art. 112^1 CP), diferența dintre ele, ce înseamnă „bunuri dobândite în 5 ani", sarcina probei și proba originii licite, confiscarea de la terți, confiscare vs. despăgubiri civile, ce se poate obține în apel
6. Pași practici + CTA telefon după secțiunile majore
7. FAQ: H2 „Întrebări frecvente" + H3 pe fiecare întrebare, 6-8 întrebări
8. Resurse oficiale (CPP, Cod penal)
9. Contact + „Servicii conexe" generate automat (părinte + frați), fără dublarea linkurilor deja contextuale
10. Fără em dash, doar cratimă

## SEO

Per pagină: title, meta description, keywords din tabel, canonical absolut, `og:*`/`twitter:*`, hreflang ro/en/x-default, JSON-LD `BreadcrumbList`, `LegalService` (cu `areaServed`) și `FAQPage`.

Linkuri interne contextuale: prioritar către pagina-părinte și către subserviciul-frate, apoi către pagini relevante (criminalitate economică, evaziune fiscală) doar unde există context.

## Modificări în paginile existente

- În caseta „Spălare de bani, sechestru și confiscare" din pagina Servicii: se șterge bullet-ul „Spălare de bani"; rămân „Sechestru asigurător" și „Confiscare", ambele cu link către noile pagini.
- Aceeași modificare se reflectă automat sub bio-block pe `/servicii/spalare-de-bani-si-ascundere-de-bunuri` (și EN), pentru că lista se generează din același `serviceGroups.ts`.

## Integrare tehnică

- date de conținut în `src/lib/subServices/ro.ts` și `en.ts`
- rute code-split în `src/routes.tsx`, fișiere în `src/pages/services/` și `src/pages/en/services/`
- perechi RO/EN în `scripts/langPairs.mjs`
- rute în `scripts/routes.mjs`, marcate ca subservicii (prioritate sitemap 0.8) - intră automat în `sitemap.xml` și prerender
- etichete cu link în `src/lib/serviceGroups.ts`, plus pagina `Harta site` și `public/llms.txt`

## Verificare

`npx tsgo --noEmit`, build + `scripts/validate-seo.mjs` (hreflang, JSON-LD, ierarhie heading-uri, em dash) și verificare în preview că cele 4 pagini se încarcă și apar în `sitemap.xml`.
