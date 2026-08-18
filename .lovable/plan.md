# Schimbare favicon pentru sitemap.xml

## Problema
Pagina `https://avocatpenalbucuresti.ro/sitemap.xml` (afișată în browser ca XML) folosește faviconul default Lovable de la `/favicon.ico`, nu faviconul personalizat al site-ului de pe homepage.

## Cauză
- `index.html` referențiază faviconul personalizat: `/lovable-uploads/c40b182c-b51b-42af-b1d1-50bf623b2110.png`
- Fișierul `public/favicon.ico` există încă și este faviconul default Lovable.
- Browserele încarcă automat `/favicon.ico` pentru pagini fără `<head>` (cum e `sitemap.xml`), deci sitemapul arată iconița veche.

## Soluție
1. Generez un favicon.ico multi-rezoluție (16×16, 32×32, 48×48, 64×64) pornind de la PNG-ul personalizat existent (`public/lovable-uploads/c40b182c-b51b-42af-b1d1-50bf623b2110.png`).
2. Înlocuiesc `public/favicon.ico` cu varianta personalizată.
3. Actualizez `index.html` să folosească `/favicon.ico` ca favicon principal, pentru consistență pe întreg site-ul.
4. Nu șterg `public/favicon.ico` pentru că e necesar pentru paginile XML (sitemap) și pentru requesturile automate ale browserelor.

## Rezultat așteptat
- `https://avocatpenalbucuresti.ro/sitemap.xml` va afișa în tab aceeași iconiță ca homepage-ul.
- Toate paginile HTML vor continua să aibă faviconul personalizat.

## Fișiere afectate
- `public/favicon.ico` (regenerat)
- `index.html` (actualizat `<link rel="icon">`)
