# Breadcrumbs la final, „Resurse” și ajustări meniu

## 1. Breadcrumbs la finalul paginii

- **Calculator despăgubiri** (RO `/calculator-despagubiri` + EN `/en/compensation-calculator`): blocul de breadcrumbs se mută la sfârșitul conținutului, numai pe mobil (desktop și tablete rămân ca acum).
- **Contact** (RO `/contact` + EN `/en/contact`): la fel, breadcrumbs la finalul paginii.
- JSON-LD `BreadcrumbList` rămâne neschimbat (nu afectează SEO).

## 2. Contact - butonul galben

Butonul CTA galben („Sună-mă acum”) primește text negru în loc de alb, în ambele versiuni (RO + EN).

## 3. „Blog” devine „Resurse”

Se schimbă doar textul vizibil, URL-urile rămân `/blog` și `/en/blog`:
- meniu header (desktop + mobil), footer, pagina 404, harta site, ServicesQuickLinks
- titlul H1 și title tag al paginii Blog, plus breadcrumbs care trimit spre Blog (inclusiv din calculator)
- versiunea EN: „Resources” (echivalentul englez), pentru consecvență cu restul site-ului

## 4. Meniu dropdown din header

Serviciile cu titlu lung se vor „rupe” pe 2 rânduri în loc să fie tăiate/pe un singur rând - se permite wrap pe elementele din dropdown-ul „Servicii”.

## 5. „Infracțiuni rutiere cu victime” -> „Infracțiuni rutiere”

În toate meniurile (header desktop, meniu mobil, dropdown) și în footer. URL-ul `/servicii/infractiuni-rutiere-cu-victime` și H1-ul paginii rămân neschimbate.

## Detalii tehnice

- `src/pages/CalculatorDespagubiri.tsx`, `src/pages/en/compensation-calculator.tsx`, `src/pages/Contact.tsx`, `src/pages/en/contact.tsx`: se mută nodul `<Breadcrumb>` la finalul secțiunii principale (se elimină clasele de tip `order-last md:order-first` folosite pentru mobil, nemai fiind necesare).
- Contact: clasa butonului galben devine `text-black` (linia ~234 RO, echivalent EN).
- `src/lib/translations.ts`: `nav.blog` -> „Resurse” / „Resources”; `navServices["infractiuni-rutiere-cu-victime"]` -> „Infracțiuni rutiere” / „Road traffic offenses”.
- `src/lib/services.ts`: label-ul serviciului rutier -> „Infracțiuni rutiere”.
- `src/components/layout/Header.tsx`: pe item-ele din `NavigationMenuContent` se adaugă `whitespace-normal` + `leading-snug` ca titlurile lungi să treacă pe 2 rânduri.
- Text „Blog” actualizat în `src/pages/Blog.tsx`, `src/pages/en/blog.tsx`, `src/pages/Sitemap.tsx`, `src/pages/en/sitemap.tsx`, `src/pages/NotFound.tsx`, `src/components/ServicesQuickLinks.tsx`, plus breadcrumb-ul din paginile de calculator.
- Verificare: `npx tsgo --noEmit` + build cu `scripts/validate-seo.mjs` (0 erori).
