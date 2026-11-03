# Prioritate medie pentru Resurse în sitemap

Acum pagina Resurse, Calculator despăgubiri și articolul „Te cheamă poliția prin telefon?” primesc toate prioritatea implicită 0.6. Le setez explicit pe prioritate medie: **0.5**.

## Ce se schimbă
- `/blog` și `/en/blog` (Resurse - Articole juridice): 0.5
- `/calculator-despagubiri` și `/en/compensation-calculator`: 0.5
- `/te-cheama-politia-prin-telefon` (și varianta EN dacă există): 0.5
- Orice articol nou adăugat în Resurse primește automat 0.5.

Restul paginilor rămân neschimbate.

## Tehnic
- În `scripts/routes.mjs` adaug o listă `BLOG_ROUTES` (hub + articole) și o regulă în `priorityFor` care returnează "0.5" pentru ele, înainte de valoarea implicită.
- La fiecare articol nou, ruta se adaugă în `BLOG_ROUTES` (notez regula în AGENTS.md).
- Regenerez `public/sitemap.xml` și verific valorile.
