# 6 subservicii noi sub "Infracțiuni contra persoanei" (RO + EN)

Creez cele 6 pagini de subservicii cu copy-ul furnizat, în același format ca celelalte subservicii (`SubServicePage`), plus versiunile EN, și restructurez pagina-părinte ca hub.

## Paginile RO (copy integral, exact cum a fost furnizat)

| Pagină | URL |
|---|---|
| Loviri / Vătămare corporală | `/servicii/loviri-vatamare-corporala` |
| Violență domestică | `/servicii/violenta-domestica` |
| Lipsire de libertate / Amenințare | `/servicii/lipsire-de-libertate-amenintare` |
| Șantaj / Hărțuire | `/servicii/santaj-hartuire` |
| Viol / Agresiune sexuală | `/servicii/viol-agresiune-sexuala` |
| Omor / Ucidere din culpă | `/servicii/omor-ucidere-din-culpa` |

Fiecare pagină primește: title tag, meta description, H1 și keywords exact cum au fost date; breadcrumbs pe 4 nivele (Acasă / Servicii / Infracțiuni contra persoanei / subserviciu), bloc bio compact cu headshot, cardul de recenzie Google, CTA-urile telefonice din text, secțiuni beige (exact două per pagină, conform regulii site-ului), butonul "Sună oricum", butonul WhatsApp pentru acte, linkurile către Portalul Legislativ și "Servicii conexe" la finalul paginii.

Notele meta din brief care sunt observații SEO pentru mine (de ex. "nu aș încerca să rankez pagina aceasta pentru...", "astfel nu creezi canibalizare") nu apar în textul public; ele se aplică doar ca reguli de targetare și linkuire.

## Linkuri interne

Respect exact schema din brief pentru fiecare pagină (părinte după introducere, frați menționați o singură dată, urmărire penală / măsuri preventive / infracțiuni rutiere / accidente de muncă acolo unde este indicat). Anchor text divers, 2-5 cuvinte, fără repetare pe aceeași pagină.

## Versiunile EN

Echivalente pentru cele 6 pagini, sub părintele `/en/services/offenses-against-persons`:

`/en/services/assault-and-bodily-injury`, `/en/services/domestic-violence`, `/en/services/unlawful-detention-and-threats`, `/en/services/blackmail-and-harassment`, `/en/services/rape-and-sexual-assault`, `/en/services/homicide-and-manslaughter`

Conținut echivalent, cu terminologie juridică potrivită publicului internațional și linkuri interne către paginile EN corespondente.

## Restructurarea paginii-părinte

- Secțiunea "Tipuri de cauze pe care le apăr" devine 6 carduri scurte (40-60 de cuvinte), fiecare cu link către subserviciul propriu.
- FAQ-urile foarte specifice (de ex. diferența dintre lovire și vătămare corporală) se mută pe subserviciul corespunzător; pe părinte rămân doar întrebările de nivel de categorie.
- Restul paginii-părinte rămâne optimizat pentru "avocat infracțiuni contra persoanei București".
- Aceleași ajustări pe versiunea EN a părintelui.

## Integrare tehnică

- `src/lib/subServices/ro.ts` și `en.ts`: obiectele de date pentru cele 12 pagini
- `src/pages/services/*.tsx` și `src/pages/en/services/*.tsx`: componentele de rută
- `src/routes.tsx`, `scripts/routes.mjs` (marcate ca sub-service pentru prioritate sitemap), `scripts/langPairs.mjs`
- `src/lib/serviceGroups.ts`: bullet-urile existente din caseta "Infracțiuni contra persoanei" (RO și EN) devin linkuri către noile pagini
- `src/lib/relatedServices.ts`: părinte + frați pentru fiecare subserviciu nou
- `src/pages/Sitemap.tsx`, `src/pages/en/sitemap.tsx`, `public/llms.txt`

## Verificare

Build complet cu validarea SEO automată (JSON-LD BreadcrumbList / LegalService / FAQPage, canonical absolut, hreflang) - 0 erori, plus verificare vizuală a unei pagini noi.
