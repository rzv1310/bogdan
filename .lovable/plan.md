# Fix: "Servicii" nu este clickable în breadcrumbs

## Problema
Pe paginile-pilon de servicii, elementul "Servicii" din breadcrumbs este redat ca text simplu (`<span className="text-muted-foreground">Servicii</span>`) în loc de link către `/servicii` (respectiv `/en/services`). Paginile de subservicii sunt deja corecte (au link).

Pagini afectate (RO): cauze-penale-privind-droguri, urmarire-penala, criminalitate-economica, infractiuni-contra-persoanei, infractiuni-rutiere-cu-victime, infractiuni-de-coruptie..., spalare-de-bani..., investigatii-privind-activele-cripto, raspundere-penala-incidente-locul-de-munca.

Pagini afectate (EN): drug-offenses, criminal-investigation, financial-crime, offenses-against-persons, corruption-and-public-office-offenses, money-laundering-and-asset-concealment, crypto-asset-investigations, workplace-criminal-liability, victim-representation-in-criminal-cases.

Deja corecte: masuri-preventive, neglijenta-profesionala-si-malpraxis, reprezentarea-victimelor-in-procese-penale (RO), preventive-measures, professional-negligence-and-malpractice, road-traffic-offenses (EN), plus toate subserviciile.

## Ce se schimbă
1. Înlocuiesc `<span>Servicii</span>` cu `<BreadcrumbLink href="/servicii">Servicii</BreadcrumbLink>` (EN: `/en/services`) în toate paginile listate mai sus.
2. Verific în aceleași pagini schema JSON-LD `BreadcrumbList`: unde lipsește, adaug poziția "Servicii" / "Services" cu URL absolut, astfel încât ordinea să fie Acasă (1) > Servicii (2) > Pagina (3), la fel ca la subservicii.
3. Trec în revistă și restul paginilor cu breadcrumbs (Contact, Resurse, Sitemap, Calculator, GDPR, Termeni, Cookies, servicii hub) pentru a confirma că fiecare nivel intermediar este clickable și doar ultimul este `BreadcrumbPage`.

## Detalii tehnice
Modificări doar de prezentare + JSON-LD, în fișierele din `src/pages/services/*` și `src/pages/en/services/*`. Componenta `SubServicePage.tsx` rămâne neschimbată (deja corectă). La final rulez build/typecheck.
