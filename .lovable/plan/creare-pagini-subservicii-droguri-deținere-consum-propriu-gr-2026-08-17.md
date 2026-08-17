Creare pagini subservicii droguri: deținere consum propriu, grup infracțional organizat, trafic internațional de droguri

Obiectiv

Creez trei pagini de subservicii în clusterul "Cauze penale privind droguri" (RO + EN), cu pagina de deținere pentru consum propriu ca prioritate principală, și integrez tot clusterul în rutare, sitemap, linkuri interne și hub-ul de servicii.

Pagini create

RO:
- `/servicii/detinere-droguri-consum-propriu/` - pagina principală cerută, cu structura SubServicePage
- `/servicii/grup-infractional-organizat/` - sibling contextual pentru deținere
- `/servicii/trafic-international-de-droguri/` - sibling contextual pentru deținere

EN:
- `/en/services/drug-possession-personal-use/`
- `/en/services/organized-crime-group/` (sau `criminal-organisation` - ajustez la naming pattern existent)
- `/en/services/international-drug-trafficking/`

SEO per pagină nouă

- Title tag, meta description, keywords, H1, canonical absolut fără trailing slash
- Breadcrumb 4 nivele: Acasă > Servicii > Cauze penale privind droguri > [Subserviciu]
- JSON-LD BreadcrumbList + LegalService + FAQPage
- hreflang alternates RO/EN/x-default
- Canonical: `https://avocatpenalbucuresti.ro/servicii/detinere-droguri-consum-propriu/`

Structura paginii de deținere pentru consum propriu

Hero standard subserviciu:
- H1: `Avocat deținere droguri pentru consum propriu în București`
- 3-4 propoziții de urgență, câte una pe rând
- CTA principal galben, full-width pe mobil: `☎ Sună-mă acum - 031 632 01 83`
- `LawyerBioBlock` + `GoogleReviewStars` imediat sub CTA
- Breadcrumbs deasupra H1 (desktop) / sub bio (mobil, cu marginile de 20px)

Corp pagină (reutilizând Card/SubServicePage):
- `În ce situație te afli acum?` - subsecțiuni cu cele 4 scenarii din cerere
- Link contextual pe anchor `traficul de droguri` către `/servicii/cauze-penale-privind-droguri/`
- `Ce analizez imediat într-un dosar de deținere...` - bullets + paragraf despre decizia ÎCCJ 2025 + CTA
- `Ce trebuie să-mi trimiți pentru prima evaluare` - secțiune bej (#faf0e6) cu bullets, callout "Nu ai toate actele?" cu buton galben `Sună oricum` și CTA WhatsApp verde
- Recenzie Google `Lidia Caescu` (componenta `GoogleReviewCard`) - dark style, 3 puncte, ♥️ roșu, "acum 2 luni", Google logo la final
- `Ce înseamnă deținerea de droguri pentru consum propriu?` - explicare art. 4 Legea 143/2000
- `Care este diferența dintre deținerea pentru consum propriu și traficul de droguri?` - subsecțiuni: cantitate, ambalare, telefon, fluxuri de bani
- Link contextual la final către `/servicii/cauze-penale-privind-droguri/` cu anchor `Vezi pagina principală despre cauze penale privind drogurile`
- `Pot fi acuzat de trafic dacă drogurile erau pentru mine?`
- `Ce se întâmplă cu telefonul ridicat în dosar?`
- `Ce se întâmplă după deschiderea dosarului?`
- `Dacă mai multe persoane sunt cercetate în același dosar` - link contextual pe `grup infracțional organizat` către noua pagină
- `Cum construiesc apărarea...` - bullets + CTA
- `Întrebări frecvente despre deținerea de droguri pentru consum propriu` - H2 + întrebări H3
- Secțiune finală de contact cu CTA telefon + WhatsApp

Resurse oficiale (doar linkuri externe, fără tokenuri):
- Legea nr. 143/2000
- Decizia ÎCCJ nr. 25/2025
- OUG nr. 78/2016 privind DIICOT

Paginile siblings (grup infracțional organizat + trafic internațional de droguri)

Folosesc aceeași structură SubServicePage, cu:
- Hero standard subserviciu, CTA galben, bio, recenzie
- 2 secțiuni bej (#faf0e6) fiecare
- Linkuri contextuale către părinte și între siblings
- FAQ final
- Resurse oficiale relevante

Integrare în site

- Adaug exporturile noi în `src/lib/subServices/ro.ts` și `src/lib/subServices/en.ts` (cu constante PARENT noi pentru clusterul droguri)
- Creez fișierele de pagină în `src/pages/services/` și `src/pages/en/services/`
- Înregistrez rutele în `src/routes.tsx`
- Adaug rutele în `scripts/routes.mjs` și perechile RO/EN în `scripts/langPairs.mjs`
- Actualizez `src/lib/serviceGroups.ts`: cardul "Droguri și DIICOT" primește `to` pentru cele 3 subservicii noi
- Actualizez `src/lib/relatedServices.ts`: adaug `subServiceGroups` pentru `/servicii/cauze-penale-privind-droguri` cu cei 3 copii; adaug etichete pentru noile rute în `extraLabelsRo`/`extraLabelsEn`
- Actualizez `public/llms.txt` cu noile pagini și linkuri

Verificare finală

- Build TypeScript fără erori
- Validare SEO: canonical absolut, breadcrumbs clickabile, schema JSON-LD, hreflang în sitemap
- Verificare că niciun link nu duce spre 404
- Verificare em-dash: conținutul folosește doar cratimă obișnuită
