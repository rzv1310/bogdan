# Breadcrumbs mai jos pe mobil

## Ce se schimbă (doar pe mobil, desktop rămâne identic)

1. **Pagini de servicii și subservicii (RO + EN, existente și viitoare)**
   Pe mobil ordinea devine:
   H1 -> paragraf de urgență -> CTA „Sună-mă acum” -> recenzii -> LawyerBioBlock -> **20px spațiu** -> breadcrumbs -> **20px spațiu** -> restul paginii.
   Pe tablete și desktop breadcrumbs rămân deasupra H1, exact ca acum.

2. **Restul paginilor** (Acasă, Despre, Contact, Blog, Servicii hub, Harta site, Calculator, GDPR, Cookies, Termeni - RO + EN)
   Pe mobil breadcrumbs coboară sub zona vizibilă inițial (sub blocul hero / primul bloc de conținut), în loc să apară imediat sub header. Desktop neschimbat.

## Detalii tehnice

- Blocul hero al fiecărei pagini devine un container `flex flex-col`, iar `<Breadcrumb>` primește `order-last md:order-first` plus `my-5 md:my-0 md:mb-4` (20px sus/jos pe mobil). Astfel breadcrumb-ul rămâne un singur nod în DOM (fără duplicare, fără impact pe SEO sau pe JSON-LD `BreadcrumbList`), doar poziția vizuală se schimbă.
- `src/components/services/SubServicePage.tsx`: o singură modificare acoperă toate paginile de subservicii, actuale și viitoare.
- Cele 24 de pagini din `src/pages/services/*` și `src/pages/en/services/*`: aceeași ajustare pe wrapper-ul hero și pe `<Breadcrumb>`; se elimină `mt-3 md:mt-0` acolo unde nu mai e nevoie.
- Celelalte pagini: breadcrumb-ul se mută (prin `order` pe mobil sau prin repoziționare în JSX unde structura permite) după primul bloc de conținut, păstrând `mb-4` pe desktop.
- Verificare: `npx tsgo --noEmit`, build cu `scripts/validate-seo.mjs` (0 erori) și screenshot mobil (390px) pentru o pagină de serviciu, o subpagină și 2 pagini generale.
