# Pagină nouă: /servicii/ (+ /en/services/)

## Scop

O pagină-navigator care grupează cele 12 servicii RO (9 EN) pe intenția utilizatorului, cu carduri descriptive și linkuri către paginile hub existente.

## Structura paginii RO

1. Hero scurt
   - H1: „Servicii de avocat penal în București” (`text-2xl font-semibold`, ca restul paginilor)
   - Intro 2-3 rânduri (textul furnizat)
   - CTA „Discută cu avocatul” (buton telefon + link /contact), în stilul `CallCta` din paginile de servicii

2. H2 „Ai nevoie urgentă de avocat?”
   - Audieri și urmărire penală -> /servicii/urmarire-penala
   - Reținere, arest și măsuri preventive -> /servicii/masuri-preventive

3. H2 „Criminalitate economică și dosare complexe” (accent vizual premium ușor diferit)
   - Criminalitate economică -> /servicii/criminalitate-economica
   - Corupție și infracțiuni de serviciu -> /servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice
   - Spălare de bani, sechestru și confiscare -> /servicii/spalare-de-bani-si-ascundere-de-bunuri
   - Crypto și active digitale -> /servicii/investigatii-privind-activele-cripto

4. H2 „Alte cauze penale”
   - Droguri și DIICOT -> /servicii/cauze-penale-privind-droguri
   - Infracțiuni rutiere -> /servicii/infractiuni-rutiere-cu-victime
   - Infracțiuni contra persoanei -> /servicii/infractiuni-contra-persoanei
   - Malpraxis și neglijență profesională -> /servicii/neglijenta-profesionala-si-malpraxis
   - Accidente de muncă și răspundere penală SSM -> /servicii/raspundere-penala-incidente-locul-de-munca

5. H2 „Reprezentarea persoanelor vătămate” (secțiune separată vizual)
   - Victime și despăgubiri -> /servicii/reprezentarea-victimelor-in-procese-penale
   - Link secundar: Calculator despăgubiri -> /calculator-despagubiri

6. H2 „Nu știi în ce categorie se încadrează situația ta?” + 2-3 rânduri + buton „Sună avocatul”

## Sub-serviciile din carduri

Fiecare card are: titlu (link către hub), o frază descriptivă, listă de 3-5 sub-servicii și un link final „Vezi toate serviciile de ...”.

Conform cerinței: sub-serviciile rămân **text simplu, fără linkuri**, pentru că paginile dedicate nu există încă. Le transformăm în linkuri după ce creăm money pages-urile pentru sub-servicii. Singurele linkuri din card: titlul și „Vezi toate serviciile”.

## Versiunea EN: /en/services/

Aceeași structură, adaptată la paginile EN existente (9 servicii). Grupare:
- Economic crime and complex cases: financial-crime, corruption-and-public-office-offenses, money-laundering-and-asset-concealment, crypto-asset-investigations
- Other criminal cases: drug-offenses, road-traffic-offenses, professional-negligence-and-malpractice, workplace-criminal-liability
- Representation of victims: victim-representation-in-criminal-cases

Fără secțiunea „urgent” (nu există pagini EN pentru urmărire penală / măsuri preventive); CTA-urile și blocul final rămân.

## SEO

- RO: title „Servicii avocat penal București - av. Bogdan Lamatic”, meta description dedicată, keywords: `servicii avocat penal`
- EN: title și description în engleză, keywords: `criminal defense lawyer bucharest, criminal law services romania`
- Canonical + hreflang încrucișat RO/EN (self + x-default), prin `useSEO`
- JSON-LD: `BreadcrumbList` (Acasă > Servicii), `CollectionPage`/`ItemList` cu toate serviciile listate, plus `LegalService` + `areaServed` din `src/lib/areaServed.ts`, cu aceleași @id-uri ca restul site-ului
- Fără em dash (regula existentă `no-em-dash` din validarea de build)

## Integrare în site

- Rute noi în `src/routes.tsx`: `/servicii` și `/en/services`
- Adăugate în `scripts/routes.mjs` (deci intră în prerender + sitemap.xml, prioritate 0.9)
- Mapare în `src/lib/routeMap.ts` pentru hreflang RO <-> EN
- Link „Servicii” din meniul Header (părintele dropdown-ului) și din Footer devine link real către /servicii, respectiv /en/services
- Adăugat în pagina `/harta-site`
- Fiecare pagină de serviciu primește breadcrumb-ul Acasă > Servicii > [serviciu] (link înapoi către hub) pentru legătură reciprocă

## Detalii tehnice

- Fișiere noi: `src/pages/servicii/index.tsx` și `src/pages/en/services/index.tsx`
- Datele cardurilor (titlu, descriere, sub-servicii, link) într-un fișier nou `src/lib/serviceGroups.ts`, folosit de ambele pagini, ca să rămână un singur loc de editat când adăugăm linkurile pe sub-servicii
- Componente shadcn existente (`Card`, `Button`, `Breadcrumb`), tokeni semantici de culoare, fără clase hardcodate
- Build-ul rulează `validate-seo` - verificăm 0 erori la final
