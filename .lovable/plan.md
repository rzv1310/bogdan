# „Servicii conexe” la finalul paginii pe cele 12 servicii principale

## Ce am verificat

Am verificat toate cele 12 pagini principale RO și cele 12 EN. Situația reală:

- Corecte deja (blocul „Servicii conexe” este ultimul element din pagină): urmărire penală, măsuri preventive, criminalitate economică, corupție, droguri, crypto, infracțiuni rutiere, infracțiuni contra persoanei, malpraxis, accidente de muncă, victime și despăgubiri - plus echivalentele EN ale acestora.
- Greșite (blocul apare sus, imediat sub paragraful introductiv, nu la final):
  1. `/servicii/spalare-de-bani-si-ascundere-de-bunuri`
  2. `/en/services/money-laundering-and-asset-concealment`
  3. `/en/services/financial-crime`

## Ce se schimbă

Pe cele 3 pagini de mai sus, blocul „Servicii conexe” / „Related services” se mută de sub paragraful introductiv la finalul paginii, exact ca pe celelalte 9 servicii: după ultimul capitol de conținut și după butonul final de apel, cu același spațiu vertical.

Nimic altceva nu se modifică: textele, ordinea capitolelor, CTA-urile și listele de linkuri rămân identice.

## Detalii tehnice

- `src/pages/services/spalare-de-bani-si-ascundere-de-bunuri.tsx`: se elimină `<RelatedServices current="/servicii/spalare-de-bani-si-ascundere-de-bunuri" />` de la linia 156 și se inserează ca ultim element înainte de închiderea `main`.
- `src/pages/en/services/money-laundering-and-asset-concealment.tsx`: aceeași mutare (linia 146 -> final).
- `src/pages/en/services/financial-crime.tsx`: aceeași mutare (linia 121 -> după butonul final „Request a quick case review”).
- Verificare: `npx tsgo --noEmit`, build cu prerender și `scripts/validate-seo.mjs` (0 erori), plus o verificare rapidă a poziției blocului pe cele 3 pagini.
