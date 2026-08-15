# Versiuni EN pentru paginile care lipsesc

## Pagini noi

| RO | EN nou |
| --- | --- |
| /servicii/urmarire-penala | /en/services/criminal-investigation |
| /servicii/masuri-preventive | /en/services/preventive-measures |
| /servicii/infractiuni-contra-persoanei | /en/services/offenses-against-persons |
| /harta-site | /en/sitemap |
| /calculator-despagubiri | /en/compensation-calculator |

Fiecare pagină EN este o traducere fidelă a celei RO, cu design, structură, secțiuni, grafice, CTA-uri și FAQ identice. Nu se modifică paginile RO.

## Conținut și SEO pe fiecare pagină EN

- H1 `text-2xl font-semibold`, aceleași secțiuni și componente ca varianta RO (inclusiv `RelatedServices` / `ServicesQuickLinks` unde există)
- Title și meta description în engleză, keywords proprii:
  - criminal-investigation: `criminal investigation lawyer bucharest, criminal case lawyer romania`
  - preventive-measures: `preventive measures lawyer bucharest, pre-trial detention lawyer romania`
  - offenses-against-persons: `offenses against persons lawyer bucharest, assault lawyer romania`
  - sitemap: `sitemap criminal lawyer bucharest`
  - compensation-calculator: `compensation calculator romania, damages calculator criminal case`
- JSON-LD tradus, cu aceeași arhitectură de entități: `BreadcrumbList` (Home > Services > pagina), `LegalService` cu `areaServed` din `src/lib/areaServed.ts` și `FAQPage` unde pagina RO are FAQ
- Canonical + hreflang reciproc RO/EN (self + x-default pe RO), prin `useSEO`
- Fără em dash (regula de build)

## Integrare

- Rute noi în `src/routes.tsx` și în `scripts/routes.mjs` (intră în prerender + sitemap.xml, aceleași priorități ca echivalentele RO)
- `src/lib/routeMap.ts`: 5 mapări noi RO <-> EN, ceea ce elimină și avertismentele „no hreflang” pentru paginile respective
- `src/lib/serviceGroups.ts`: se adaugă în `enServiceGroups` grupul „Do you need a lawyer urgently?” cu cardurile criminal-investigation și preventive-measures, plus cardul offenses-against-persons în „Other criminal cases”, ca structura EN a paginii /en/services să oglindească RO
- `src/lib/relatedServices.ts`: intrări EN pentru noile pagini și adăugarea lor ca servicii conexe în paginile EN existente relevante
- Linkuri în `src/components/layout/Header.tsx` (dropdown EN), `src/components/layout/Footer.tsx` și în ambele pagini de hartă site (RO listează versiunile EN, EN listează echivalentele)
- Calculatorul EN reutilizează aceeași logică de calcul; se traduce doar interfața și textele

## Detalii tehnice

- Fișiere noi: `src/pages/en/services/criminal-investigation.tsx`, `src/pages/en/services/preventive-measures.tsx`, `src/pages/en/services/offenses-against-persons.tsx`, `src/pages/en/sitemap.tsx`, `src/pages/en/compensation-calculator.tsx`
- Componente și tokeni existenți, fără culori hardcodate
- La final rulăm build-ul și verificăm `validate-seo` cu 0 erori și fără avertismente noi
