# Pagină nouă: /servicii/infractiuni-contra-persoanei

Pagină de serviciu "umbrelă" (categorie largă), cu design identic celorlalte pagini de servicii (RO), inclusiv FAQ și JSON-LD.

## Ce se creează

`src/pages/services/infractiuni-contra-persoanei.tsx`, după modelul `masuri-preventive.tsx`:

- Breadcrumb (Acasă / Servicii / Infracțiuni contra persoanei)
- H1: "Avocat Infracțiuni Contra Persoanei București – Apăr Libertatea și Reputația Ta"
- Intro (experiență 18+ ani, Legal 500), buton "Sună acum" + rândul „5,0 ★ din 27 de recenzii Google"
- Secțiuni, integral din textul furnizat:
  - Ce înseamnă infracțiuni contra persoanei (cele 9 capitole, art. 188–227) + nota de redirecționare către victime
  - Tipuri de cauze pe care le apăr (8 puncte)
  - Cum te ajut | Metodă de lucru (A–D)
  - De ce ai nevoie de avocat din prima fază
  - Pași practici, în funcție de situația ta
  - De ce să mă alegi
  - Întrebări frecvente (7 întrebări, în carduri ca pe celelalte pagini)
  - Contact | Evaluare inițială gratuită (Sună acum + Trimite email)
  - Resurse oficiale (linkuri Portal Legislativ)
- Butoane CTA alternate „Sună acum" / „Vreau avocat!" în aceleași locuri ca în text

## SEO

- `useSEO`: canonical `/servicii/infractiuni-contra-persoanei`, title și description din brief, `keywords: "avocat infracțiuni contra persoanei, avocat infracțiuni contra persoanei bucuresti"`, locale `ro_RO`, robots cu max-image-preview:large
- JSON-LD: `BreadcrumbList`, `LegalService` (URL-uri absolute, telefon, `areaServed` din `src/lib/areaServed.ts`), `FAQPage` cu cele 7 întrebări — formatul cerut de `scripts/validate-seo.mjs`

## Integrare în site

- `src/routes.tsx` — rută nouă
- `scripts/routes.mjs` — adăugată în lista prerender/sitemap
- `src/lib/services.ts` — intrare în meniul/footer RO
- `src/pages/Sitemap.tsx` — intrare în harta site
- `src/lib/translations.ts` + `src/pages/Index.tsx` — card în grila de servicii de pe homepage (doar RO)
- Linkuri interne reciproce: din pagina nouă către „Reprezentarea victimelor în procese penale" și „Infracțiuni rutiere cu victime"; din `infractiuni-rutiere-cu-victime.tsx` un link către pagina nouă

## Verificare

Build complet, cu validarea SEO automată (0 erori) pe noua rută.
