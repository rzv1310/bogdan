# Completare „Servicii conexe” pentru subserviciile de criminalitate economică

## Situația verificată acum

Cele 9 subservicii mai vechi (urmărire penală + măsuri preventive) sunt corect configurate: fac parte din grupurile din `src/lib/relatedServices.ts`, deci ce nu apare contextual se generează automat în „Servicii conexe”.

Cele 7 subservicii noi de criminalitate economică (evaziune fiscală, înșelăciune/fraudă, delapidare, fals și uz de fals, bancrută frauduloasă, fraudă informatică, fonduri europene) au fiecare, în RO și EN:
- un link contextual către pagina-pilon Criminalitate economică;
- un link contextual către un singur subserviciu-frate.

Dar clusterul lor nu este înregistrat în `subServiceGroups`, deci `getRelatedServices` returnează listă goală și secțiunea „Servicii conexe” nu apare deloc. Practic lipsesc linkurile către celelalte 5 subservicii-frate.

## Ce se schimbă

Înregistrez clusterul Criminalitate economică în grupurile de subservicii, cu cele 7 pagini. Efect automat, fără text nou:

- fiecare din cele 7 pagini afișează la final „Servicii conexe” cu subserviciile-frate care nu apar deja contextual (5 din 6, pentru că unul e deja în text);
- pagina-pilon nu se repetă, fiind deja link contextual (mecanismul de excludere există deja);
- identic pe RO și EN, prin maparea de rute existentă.

Nu modific conținutul paginilor și nu adaug linkuri contextuale noi: regula rămâne „contextual are prioritate, restul intră în Servicii conexe”.

## Detalii tehnice

- `src/lib/relatedServices.ts`: adaug cheia `/servicii/criminalitate-economica` în `subServiceGroups` cu cele 7 path-uri; adaug etichetele RO/EN lipsă în `extraLabelsRo` / `extraLabelsEn` pentru cele 7 pagini, ca linkurile să se poată randa.
- `SubServicePage.tsx` colectează deja path-urile interne din secțiuni și FAQ și le pasează ca `exclude`; nu e nevoie de modificări.
- La final rulez build cu prerender și `scripts/validate-seo.mjs`.
