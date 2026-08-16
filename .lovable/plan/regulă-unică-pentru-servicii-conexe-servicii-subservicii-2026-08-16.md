# Regulă unică pentru „Servicii conexe” (servicii + subservicii)

## 1. Cele 12 pagini principale de servicii

Rămân exact cum sunt: 4 linkuri către alte pagini principale de servicii în secțiunea „Servicii conexe”. Nicio schimbare de conținut aici.

## 2. Paginile de subservicii

Secțiunea „Servicii conexe” se calculează automat, nu manual:

- Setul complet = pagina-părinte + toate celelalte subservicii ale aceleiași pagini-părinte.
- Grupurile actuale:
  - Urmărire penală: Audiere Poliție/Parchet, Percheziție domiciliară, Percheziție informatică, Avocat DIICOT, Avocat DNA.
  - Măsuri preventive: Reținere 24 ore, Arest preventiv, Control judiciar, Arest la domiciliu.
- Din acest set se scad automat toate linkurile care apar deja oriunde în corpul paginii (paragrafe cu linkuri, blocuri de linkuri din secțiuni, callout-uri) sau în FAQ, inclusiv linkul către pagina-părinte.
- Dacă după scădere nu rămâne niciun link, secțiunea „Servicii conexe” dispare complet din pagină.
- Regula se aplică identic pe RO și EN și automat pentru orice subserviciu viitor.

## 3. Linkuri contextuale în plus (prioritate față de „Servicii conexe”)

Unde există context natural, adaug linkul în text în loc să îl las în „Servicii conexe”:

- Reținere 24 ore, Arest preventiv, Control judiciar, Arest la domiciliu: link contextual către pagina-părinte Măsuri preventive, în fraza care menționează deja măsurile preventive. Aceste 4 pagini au deja linkuri contextuale către restul subserviciilor din grup, deci după adăugarea linkului către părinte secțiunea „Servicii conexe” se elimină complet la ele.
- Audiere, Percheziție domiciliară, Percheziție informatică, Avocat DIICOT, Avocat DNA: link contextual către Urmărire penală (pagina-părinte) în paragraful care descrie faza de urmărire penală. Restul subserviciilor din grup rămân în „Servicii conexe” doar dacă nu apar deja în text (ex. Avocat DIICOT are deja link către Percheziție informatică, deci acela nu se mai repetă).

## Efect concret după implementare

| Pagină | „Servicii conexe” |
| --- | --- |
| Reținere 24 ore | eliminată |
| Arest preventiv | eliminată |
| Control judiciar | eliminată |
| Arest la domiciliu | eliminată |
| Audiere Poliție/Parchet | Percheziție domiciliară, Percheziție informatică, Avocat DIICOT, Avocat DNA |
| Percheziție domiciliară | Audiere, Percheziție informatică, Avocat DIICOT, Avocat DNA |
| Percheziție informatică | Audiere, Percheziție domiciliară, Avocat DIICOT, Avocat DNA |
| Avocat DIICOT | Audiere, Percheziție domiciliară, Avocat DNA |
| Avocat DNA | Audiere, Percheziție domiciliară, Percheziție informatică, Avocat DIICOT |

## Detalii tehnice

- `src/lib/relatedServices.ts`: se elimină listele manuale pentru cele 9 subservicii și se adaugă un grup părinte -> subservicii; funcția returnează părinte + frați, minus excluderi primite ca argument. Cheile celor 12 pagini principale rămân neschimbate.
- `src/components/services/SubServicePage.tsx`: colectează toate path-urile interne folosite în `sections` (links, segmente de paragraf, subsecțiuni) și în `faq`, apoi le pasează ca `exclude` la `RelatedServices`.
- `src/components/RelatedServices.tsx`: acceptă `exclude?: string[]` și randează `null` când lista rămasă e goală (comportament deja existent pentru listă goală).
- `src/lib/subServices/ro.ts` și `en.ts`: se adaugă segmentele de link contextual către pagina-părinte în cele 9 subservicii (RO + EN).
- Fără em dash-uri; la final rulez build cu prerender și validarea SEO.
