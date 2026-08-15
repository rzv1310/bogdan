# Breadcrumbs deasupra H1, curățare hero subservicii

## Ce se schimbă

1. **Breadcrumbs deasupra H1 pe tot site-ul**
   În pagina `/servicii` breadcrumbs apar deja înaintea titlului. Aceeași ordine se aplică peste tot:
   breadcrumbs → H1 → paragraf de urgență → buton „Sună-mă acum!” → recenzii → bio → restul.
   Pagini afectate: cele 24 de pagini de servicii principale (RO + EN), unde breadcrumbs sunt acum sub hero, plus paginile de subservicii (10, prin componenta comună) și paginile unde ordinea diferă (Blog RO/EN, Sitemap/Harta site, Calculator, GDPR, Cookies, Termeni, Contact, Despre) - acolo unde breadcrumb-ul este deja primul, rămâne neschimbat.

2. **Eliminare frază din paginile de subservicii**
   Se șterge complet rândul „Această pagină face parte din serviciile de ...” / „This page is part of my ... services.” din componenta comună de subservicii, deci dispare din toate paginile actuale și viitoare. Linkul către pagina-părinte rămâne disponibil prin breadcrumbs și prin secțiunea Servicii conexe.

3. **Padding mai generos sub hero**
   Spațiul dintre blocul hero (bio / bullets subservicii) și prima secțiune de conținut crește (de la `mt-8` la `mt-12` pe mobil, ceva mai mult pe desktop), consecvent pe paginile de servicii și subservicii.

## Detalii tehnice

- `src/components/services/SubServicePage.tsx`: se mută blocul `<Breadcrumb>` înaintea `<h1>`, se șterge blocul cu paragraful „Această pagină face parte…” (câmpul `parent` rămâne folosit pentru schema și Servicii conexe), se ajustează marginea primului `<Card>` din `data.sections`.
- Cele 24 de pagini din `src/pages/services/*` și `src/pages/en/services/*` (fără `index.tsx`): mutarea JSX-ului `<Breadcrumb>...</Breadcrumb>` deasupra `<h1>`, cu `className="mb-6"` ca în `/servicii`.
- `src/components/services/ServiceSubServices.tsx` / prima secțiune de conținut: creștere spațiu vertical.
- Restul paginilor: verificare punctuală a ordinii și corectare doar unde breadcrumb-ul apare după H1.
- Verificare finală: build + `scripts/validate-seo.mjs` (JSON-LD BreadcrumbList rămâne neschimbat).
