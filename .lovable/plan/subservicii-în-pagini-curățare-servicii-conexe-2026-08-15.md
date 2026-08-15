# Subservicii în pagini + curățare „Servicii conexe”

## 1. Bullets cu subservicii sub recenzii

În fiecare din cele 12 pagini principale de servicii (RO + EN, deci 24 de fișiere), imediat sub rândul cu recenziile Google apare o listă de bullets cu subserviciile aferente, exact aceleași care apar în caseta corespunzătoare din pagina Servicii.

- Fiecare bullet are o săgeată la dreapta.
- Bullet-urile care au pagină proprie (Audiere poliție/parchet, Percheziție domiciliară, Percheziție informatică, Avocat DIICOT, Avocat DNA) sunt linkuri.
- Bullet-urile fără pagină rămân text simplu, cu aceeași săgeată, ca în pagina Servicii.

Sursa de conținut rămâne unică: `src/lib/serviceGroups.ts` (nu se dublează texte).

## 2. „Servicii conexe” - doar 4 linkuri principale

În fiecare pagină principală, secțiunea „Servicii conexe” afișează exact 4 linkuri către alte pagini principale de servicii. Se elimină linkurile către subservicii (Audiere, Percheziții, DIICOT, DNA) și către Calculator despăgubiri din această secțiune.

Set propus (RO; EN derivat automat):

| Pagină | Cele 4 servicii conexe |
| --- | --- |
| Urmărire penală | Măsuri preventive, Criminalitate economică, Droguri, Corupție |
| Măsuri preventive | Urmărire penală, Droguri, Spălare de bani, Criminalitate economică |
| Criminalitate economică | Spălare de bani, Corupție, Crypto, Urmărire penală |
| Corupție și funcție publică | Criminalitate economică, Spălare de bani, Urmărire penală, Crypto |
| Spălare de bani | Criminalitate economică, Crypto, Corupție, Măsuri preventive |
| Crypto | Spălare de bani, Criminalitate economică, Corupție, Urmărire penală |
| Droguri | Măsuri preventive, Urmărire penală, Infracțiuni contra persoanei, Criminalitate economică |
| Infracțiuni rutiere | Victime, Infracțiuni contra persoanei, Măsuri preventive, Malpraxis |
| Infracțiuni contra persoanei | Infracțiuni rutiere, Victime, Măsuri preventive, Malpraxis |
| Malpraxis | Accidente de muncă, Infracțiuni contra persoanei, Victime, Infracțiuni rutiere |
| Accidente de muncă / SSM | Malpraxis, Infracțiuni contra persoanei, Victime, Infracțiuni rutiere |
| Victime și despăgubiri | Infracțiuni rutiere, Infracțiuni contra persoanei, Malpraxis, Accidente de muncă |

Paginile de subservicii (Audiere, Percheziții, DIICOT, DNA) își păstrează secțiunea actuală de servicii conexe, nemodificată.

## Detalii tehnice

- Componentă nouă `src/components/services/ServiceSubServices.tsx`: primește path-ul paginii + limba, caută cardul cu `to === path` în `roServiceGroups`/`enServiceGroups` și randează lista (`ul`, bullets cu `ArrowRight`, link doar când există `to`). Randează `null` dacă nu găsește card.
- Se inserează componenta după paragraful cu recenzii în cele 24 de pagini principale.
- `src/lib/relatedServices.ts`: se rescrie maparea pentru cele 12 chei principale la exact 4 path-uri principale fiecare; se păstrează neschimbate cheile subserviciilor. `RelatedServices.tsx` rămâne cu grid pe 3 coloane (4 carduri se așează pe 2 rânduri) - dacă preferi 4 pe un rând pe desktop, schimb la `sm:grid-cols-2 lg:grid-cols-4`.
- Fără em dash-uri; se rulează build-ul cu prerender + validare SEO la final.
