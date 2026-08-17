# 6 subservicii noi în clusterul „Infracțiuni rutiere”

Pagină-părinte: `/servicii/infractiuni-rutiere-cu-victime`

## Pagini noi (RO + EN)

| RO | EN | Keyword principal | Secundar |
|---|---|---|---|
| /servicii/alcool-la-volan | /en/services/drunk-driving | avocat alcool la volan București | dosar penal alcool volan |
| /servicii/droguri-la-volan | /en/services/drug-driving | avocat droguri la volan București | conducere sub influența drogurilor |
| /servicii/parasirea-locului-accidentului | /en/services/leaving-the-accident-scene | avocat părăsirea locului accidentului | dosar părăsire loc accident |
| /servicii/refuz-prelevare-probe-biologice | /en/services/refusal-to-provide-biological-samples | avocat refuz prelevare probe | refuz probe biologice |
| /servicii/conducere-fara-permis | /en/services/driving-without-a-licence | avocat conducere fără permis | dosar conducere fără permis |
| /servicii/accident-rutier-cu-victime | /en/services/road-accident-with-victims | avocat accident rutier cu victime | șofer cercetat penal accident |

## Structura fiecărei pagini

Șablonul standard `SubServicePage`, identic cu subserviciile deja publicate:

- H1 cu keyword-ul principal, paragraf de urgență, CTA „☎ Sună-mă acum - 031 632 01 83”, bloc bio + stele Google
- Breadcrumbs pe 4 nivele: Acasă > Servicii > Infracțiuni rutiere > pagina curentă (și în JSON-LD)
- Exact două secțiuni bej: „În ce situație te afli acum?” (selector de situații) și „Ce trebuie să-mi trimiți”
- Lista de documente cu butonul verde WhatsApp și butonul galben „Sună oricum.” (link telefon)
- Capitole juridice specifice (vezi mai jos), FAQ (H2 „Întrebări frecvente”, întrebări H3), resurse oficiale
- Linkuri interne contextuale în text: prioritar către subserviciile-frați din cluster, apoi către pagina-părinte; „Servicii conexe” elimină automat linkurile deja prezente în text

## Conținut juridic pe pagină

- Alcool la volan: art. 336 alin. (1) Cod penal, pragul de 0,80 g/l alcool pur în sânge, etilotest vs. recoltare biologică, lanțul de custodie, contestarea buletinului toxicologic, reținerea permisului, renunțare la urmărire / amânarea aplicării pedepsei
- Droguri la volan: art. 336 alin. (2), testarea drug-test vs. confirmare toxicologică, substanțe psihoactive și medicamente, „stare de influență”, expertiza toxicologică
- Părăsirea locului accidentului: art. 338, definiția accidentului, excepțiile legale (transport răniți cu reîntoarcere imediată etc.), lipsa intenției, cumul cu alte fapte rutiere
- Refuz prelevare probe biologice: art. 337, legalitatea solicitării, informarea corectă, imposibilitatea medicală, faptă distinctă de alcoolemie
- Conducere fără permis: art. 335, permis suspendat/anulat, categorie necorespunzătoare, permise străine în România, eroarea asupra situației de fapt
- Accident rutier cu victime: 100% din perspectiva șoferului acuzat - art. 196 (vătămare corporală din culpă) și art. 192 (ucidere din culpă), stabilirea culpei și a legăturii de cauzalitate, expertiza tehnică auto, culpa concurentă a victimei, agravanta de la art. 336/338, împăcarea și limitarea pretențiilor civile, rolul asigurătorului RCA. Fără secțiuni de reprezentare a victimei.

## Detalii tehnice

- Conținut în `src/lib/subServices/ro.ts` și `en.ts` (`PARENT_IR` / `PARENT_IR_EN` cu breadcrumbLabel „Infracțiuni rutiere” / „Road traffic offences”)
- Componente-pagini în `src/pages/services/` și `src/pages/en/services/` (wrapper de 5 linii peste `SubServicePage`)
- Rute noi în `src/routes.tsx` (lazyRoute + `<Route>`), perechi hreflang în `scripts/langPairs.mjs`, căi în `scripts/routes.mjs` (sitemap + prerender)
- `src/lib/serviceGroups.ts`: caseta „Infracțiuni rutiere” din /servicii și /en/services primește cele 6 bullet-uri (RO/EN), ceea ce alimentează automat și linkurile de sub bio-block din pagina-pilon
- `src/lib/relatedServices.ts`: grup de subservicii pentru `/servicii/infractiuni-rutiere-cu-victime` + etichete RO/EN
- `public/llms.txt`, `src/pages/Sitemap.tsx`, `src/pages/en/sitemap.tsx`: intrări noi
- Verificare: build + `scripts/validate-seo.mjs`, apoi deschiderea paginilor în preview
