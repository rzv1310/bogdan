# Verificare pagini orfane (fără meniuri și footer)

## Rezultat

Nu există pagini orfane. Am analizat toate cele 138 pagini prerenderate, eliminând `<header>`, `<nav>`, `<footer>` și `<head>`, deci au fost contorizate doar linkurile din conținut: breadcrumbs, huburi, carduri, „Servicii conexe", butoane CTA, text contextual și FAQ.

- 0 rute cu zero linkuri interne de intrare.
- 1 rută cu un singur link de intrare: `/en/sitemap`, linkată doar din `/harta-site`.
- Control de sanitate: pe o pagină de serviciu, 78 linkuri totale scad la 24 după eliminarea navigației, deci filtrarea a funcționat corect.

## Acțiune propusă (opțională)

Singura îmbunătățire disponibilă: adăugarea unui link către `/en/sitemap` din pagina EN corespondentă (`/en/...` sitemap link în conținutul paginii EN de hartă a site-ului), pentru simetrie RO/EN. Nu e o problemă SEO reală - `/en/sitemap` este oricum în sitemap.xml și accesibilă.

Dacă nu vrei nici această ajustare, nu se modifică nimic în proiect.
