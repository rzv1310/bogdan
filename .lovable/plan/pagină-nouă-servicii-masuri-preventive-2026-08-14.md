# Pagină nouă: /servicii/masuri-preventive

Pagină RO nouă despre măsurile preventive, în același design ca celelalte pagini de servicii (model: `/servicii/urmarire-penala`).

## Conținut
Tot textul furnizat, în structura obișnuită: H1, intro, CTA „Sună acum” / „Vreau avocat!” (tel:+40316320183), ratingul Google, secțiunile despre cele 5 măsuri preventive, metoda de lucru, riscuri, pași practici, „De ce să mă alegi”, FAQ (9 întrebări), contact (telefon + email), resurse oficiale (linkuri externe `rel="noopener"`). Notele de implementare nu se publică.

## SEO
- Title, meta description, keywords (`avocat măsuri preventive, avocat măsuri preventive București`), author, canonical `https://avocatpenalbucuresti.ro/servicii/masuri-preventive`, robots/googlebot, OG + Twitter (imagine `/lovable-uploads/49019fba-...png`), locale `ro_RO`.
- JSON-LD: `BreadcrumbList`, `LegalService` (nume, descriere, url absolut, areaServed din `src/lib/areaServed.ts`, telefon, provider) și `FAQPage` cu cele 9 întrebări — ca să treacă validatorul automat de la build.

## Integrare
- Rută în `src/routes.tsx`.
- `scripts/routes.mjs` (prerender + sitemap), lângă `urmarire-penala`.
- `src/lib/services.ts` — „Măsuri preventive” lângă „Urmărire penală” (footer / arii de practică).
- Caseta în grila de servicii din homepage: `src/lib/translations.ts` (RO) + `serviceRoutes` în `src/pages/Index.tsx`, poziționată lângă urmărire penală.
- `src/pages/Sitemap.tsx` (harta site).
- `scripts/validate-seo.mjs`: adaug ruta în setul RO-only (nu are versiune EN).

## Linkuri interne (anti-canibalizare)
- În intro-ul paginii noi: link spre `/servicii/urmarire-penala`.
- În pagina „urmărire penală”: link „citește mai multe despre măsurile preventive” în secțiunea despre măsuri preventive.

## Verificare
`bun run build` — prerender + validare SEO cu 0 erori, plus verificarea HTML-ului generat pentru noua rută.
