# Breadcrumbs la final, „Resurse” și ajustări meniu

## Stare actuală (verificat)

Punctele 2-5 sunt deja aplicate în cod: butonul galben de pe Contact are `text-black`, „Blog” a devenit „Resurse”/„Resources” în meniuri, footer, 404, harta site, ServicesQuickLinks, H1 și title tag, item-ele din dropdown-ul „Servicii” se rup pe 2 rânduri, iar eticheta „Infracțiuni rutiere cu victime” a devenit „Infracțiuni rutiere”.

Rămâne de finalizat punctul 1.

## 1. Breadcrumbs la finalul paginii

- Calculator despăgubiri (RO `/calculator-despagubiri` + EN `/en/compensation-calculator`): breadcrumbs rămân la finalul conținutului numai pe mobil; pe desktop și tablete rămân sus, ca acum (comportament deja implementat, se păstrează).
- Contact (RO `/contact` + EN `/en/contact`): breadcrumbs trec la finalul paginii pe toate dispozitivele - se elimină clasele `order-last md:order-first` de pe nodul `<Breadcrumb>`, care acum îl readuc sus pe desktop.
- JSON-LD BreadcrumbList rămâne neschimbat (fără impact SEO).

## Detalii tehnice

- `src/pages/Contact.tsx` (linia ~412) și `src/pages/en/contact.tsx` (linia ~409): clasa devine `mt-8` simplu, fără `order-last md:order-first md:mt-0 md:mb-4`.
- Paginile de calculator nu se modifică (breadcrumbs jos doar pe mobil, prin `order-last md:order-first`).
- Verificare: `npx tsgo --noEmit` + build cu `scripts/validate-seo.mjs` (0 erori).
