# Uniformizare above-the-fold pe toate paginile de servicii (RO + EN)

Toate paginile de servicii primesc exact aceeași ordine în zona de sus, după modelul `/servicii/urmarire-penala`.

## Ordinea impusă

1. H1 (rămâne cel actual al fiecărei pagini, `text-2xl font-semibold`)
2. Paragraf de urgență / hook (specific paginii - de ce contează primele ore)
3. Butonul CTA „Sună acum" (varianta `premium` cu chenar dublu, `tel:+40316320183`)
4. Rândul cu recenzii: ★★★★★ 5,0 din 27 de recenzii Google
5. Paragraful de prezentare: „Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență..." adaptat la specialitatea paginii
6. Paragraful Legal 500: „Sunt recunoscut de Legal 500 ca «Next Generation Partner» (White-Collar Crime) 2021-2024..."

Doar acestea rămân în zona above the fold. Imediat dedesubt, în afara zonei de sus, vin breadcrumbs (Acasă / Servicii / pagina curentă), apoi restul conținutului existent, nemodificat.

Pe pagina `urmarire-penala` ordinea celor două paragrafe de sus se inversează (hook-ul „primele ore contează" urcă sub H1, prezentarea coboară sub recenzii), exact ca în exemplu.

## Pagini RO (12)

urmarire-penala, masuri-preventive, infractiuni-contra-persoanei, criminalitate-economica, infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice, investigatii-privind-activele-cripto, cauze-penale-privind-droguri, spalare-de-bani-si-ascundere-de-bunuri, neglijenta-profesionala-si-malpraxis, infractiuni-rutiere-cu-victime, raspundere-penala-incidente-locul-de-munca, reprezentarea-victimelor-in-procese-penale

## Pagini EN (12)

Aceeași ordine, cu textele în engleză („Call now", „5.0 from 27 Google reviews", „I am Bogdan Lamatic, attorney at the Bucharest Bar...", paragraful Legal 500): criminal-investigation, preventive-measures, offenses-against-persons, financial-crime, corruption-and-public-office-offenses, crypto-asset-investigations, drug-offenses, money-laundering-and-asset-concealment, professional-negligence-and-malpractice, road-traffic-offenses, workplace-criminal-liability, victim-representation-in-criminal-cases

## Detalii tehnice

- Unde textele de hook/prezentare/Legal 500 lipsesc în zona de sus (ex. `cauze-penale-privind-droguri`, unde prezentarea e într-un card mai jos), textul existent se mută sus, fără rescriere; nu se duplică în cardul de mai jos.
- Se elimină variantele diferite de CTA din partea de sus (ex. „Apelează acum: +40 (31) 632 01 83", butoane fără chenar) și se folosește un singur bloc `CallCta` unitar per pagină, cu `aria-label` specific paginii.
- Rândul de recenzii devine identic peste tot: `<span className="text-yellow-400">★★★★★</span> 5,0 din 27 de recenzii Google` (EN: `5.0 from 27 Google reviews`).
- Blocurile `Breadcrumb` existente se mută după paragraful Legal 500 (`mt-6`); JSON-LD BreadcrumbList rămâne neschimbat.
- Restul secțiunilor, cardurilor, FAQ-urilor, graficelor, `RelatedServices` și schemelor rămân exact ca acum.
- Fără em dash-uri; doar „-".
- Verificare: build complet cu validarea SEO (0 erori) și inspecția ordinii în HTML-ul prerenderat pentru câteva rute RO și EN.
