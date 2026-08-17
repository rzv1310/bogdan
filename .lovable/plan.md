# 5 subservicii noi în clusterul „Infracțiuni de corupție”

Pagini noi (RO) + versiunile EN corespondente, construite exact pe modelul subserviciilor de criminalitate economică (același layout `SubServicePage`, aceleași reguli de linkuire, breadcrumbs pe 4 nivele, 2 secțiuni bej, butoane CTA standard, „Sună oricum” ca buton galben, WhatsApp verde).

## Paginile

| RO | EN | Keyword principal |
|---|---|---|
| /servicii/dare-luare-de-mita | /en/services/bribery-giving-and-taking | avocat dare de mită |
| /servicii/trafic-de-influenta | /en/services/influence-peddling | avocat trafic de influență |
| /servicii/abuz-in-serviciu | /en/services/abuse-of-office | avocat abuz în serviciu |
| /servicii/neglijenta-in-serviciu | /en/services/negligence-in-office | avocat neglijență în serviciu |
| /servicii/conflict-de-interese | /en/services/conflict-of-interest | avocat conflict de interese |

Pagina-pilon: „Infracțiuni de corupție și fapte legate de exercitarea funcției publice” (EN: corruption-and-public-office-offenses).

## Structura fiecărei pagini (aceeași ordine ca la subserviciile de criminalitate economică)

1. Breadcrumbs: Acasă > Servicii > Infracțiuni de corupție > [Subserviciu] (link clickable pe toate nivelele + BreadcrumbList JSON-LD pe 4 poziții)
2. H1 cu keyword principal + „în București”
3. Bloc urgență (2 rânduri)
4. CTA hero „☎ Sună-mă acum - 031 632 01 83” + USP „Mă ocup personal de dosar”
5. Recenzii Google (5,0 / 28 recenzii) + LawyerBioBlock (persoana I, Legal 500)
6. „În ce situație te afli acum?” cu 3-4 subcapitole H3 + CTA
7. „Ce analizez imediat în dosarul de …” (bullets)
8. „Ce documente trebuie să-mi trimiți” - secțiune bej, cu „Nu ai toate actele? Sună oricum” (buton galben) + buton verde „Trimite-mi actele pe WhatsApp”
9. Capitole juridice specifice fiecărei infracțiuni (ce este fapta, cine poate fi subiect, limite de pedeapsă, diferențe față de infracțiuni vecine)
10. A doua secțiune bej: capitolul cel mai important pentru client (ex. „Ce riști concret”, respectiv „Când nu există infracțiune”)
11. „Întrebări frecvente despre …” - H2, întrebările H3 (4-6 întrebări)
12. Resurse legislative (linkuri către Codul penal / Legea 78/2000)
13. Secțiunea de contact + „Ofer o primă discuție fără niciun cost, pentru evaluarea situației.”
14. „Servicii conexe” - doar linkurile care nu au fost deja făcute contextual în corp

Conținut juridic acoperit: art. 289-292 Cod penal (luare/dare de mită, trafic și cumpărare de influență), art. 297 (abuz în serviciu), art. 298 (neglijență în serviciu), art. 301 (conflict de interese), art. 308 (extinderea la persoane private), Legea 78/2000, competența DNA, măsuri asigurătorii, interdicția exercitării unor funcții.

## Linkuire internă

- Fiecare subserviciu: un link contextual către pagina-pilon de corupție + minim un link contextual către un subserviciu frate (ex. dare/luare de mită ↔ trafic de influență, abuz în serviciu ↔ neglijență în serviciu ↔ conflict de interese).
- Link contextual acolo unde e relevant către /servicii/avocat-dna, /servicii/spalare-de-bani-si-ascundere-de-bunuri, /servicii/masuri-preventive, /servicii/criminalitate-economica.
- Anchor text divers, 2-5 cuvinte, fără repetare.
- „Servicii conexe” completează automat ce lipsește (prin `relatedServices.ts`).

## Detalii tehnice

- Conținut nou în `src/lib/subServices/ro.ts` și `en.ts`, cu un `PARENT_COR` / `PARENT_COR_EN` nou.
- 10 fișiere de pagină subțiri în `src/pages/services/` și `src/pages/en/services/`, fiecare randând `SubServicePage`.
- Rute noi în `src/routes.tsx` (lazy).
- Înregistrări: `subServiceGroups` + `extraLabelsRo/En` în `src/lib/relatedServices.ts`, `src/lib/routeMap.ts`, `scripts/routes.mjs`, `scripts/langPairs.mjs`, `public/sitemap.xml` (regenerat cu hreflang), `src/pages/Sitemap.tsx`, `src/pages/en/sitemap.tsx`, `public/llms.txt`.
- Pe pagina-pilon de corupție, cele 5 subservicii apar prin `ServiceSubServices` (sub bio-block), la fel ca pe criminalitate economică.
- Fără em dash în conținut; validarea SEO de la build trebuie să treacă.

## Ce nu se schimbă

Meniul din header și footer rămân cu cele 12 servicii principale; subserviciile se accesează din pagina-pilon, din casetele cu servicii din pagina Servicii (bullets), din harta site și din linkuri contextuale.
