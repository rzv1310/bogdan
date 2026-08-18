# Sincronizare completă a listelor de pagini (harta site RO/EN + llms.txt)

Perechile RO/EN sunt complete (67 de perechi, hreflang corect). Ce lipsește sunt paginile deja existente care nu apar în listele interne de navigare/indexare.

## Ce lipsește azi

**Pagina „Harta site" (RO) - 8 pagini existente neincluse**
- /calculator-despagubiri
- /servicii/detinere-droguri-consum-propriu
- /servicii/grup-infractional-organizat
- /servicii/trafic-international-de-droguri
- /servicii/retinere-24-ore
- /servicii/arest-preventiv
- /servicii/control-judiciar
- /servicii/arest-la-domiciliu

**Pagina „Sitemap" (EN) - 14 pagini existente neincluse**
- drug-possession-personal-use, organized-crime-group, international-drug-trafficking
- tax-evasion, fraud-and-deception, embezzlement, forgery-and-use-of-forgery, fraudulent-bankruptcy, computer-fraud, eu-funds-fraud
- police-custody-24-hours, pre-trial-detention, judicial-control, house-arrest

**llms.txt - 38 de pagini neincluse**, în principal:
- 3 pagini pilon RO (urmarire-penala, masuri-preventive, infractiuni-contra-persoanei)
- toate cele 4 subservicii RO de măsuri preventive (reținere, arest preventiv, control judiciar, arest la domiciliu) plus echivalentele EN
- toate subserviciile EN de criminalitate economică (7)
- toate subserviciile EN de infracțiuni contra persoanei (6) și cele rutiere (6)
- paginile EN pilon lipsă (criminal-investigation, preventive-measures, offenses-against-persons), despăgubiri (2), plus /harta-site, /en/sitemap, /en/compensation-calculator

## Ce se face

1. Adaug intrările lipsă în `src/pages/Sitemap.tsx`, în grupurile tematice existente (măsuri preventive, droguri, plus link-ul către calculator în pagini utile), cu titluri în stilul celor deja folosite.
2. Adaug intrările lipsă în `src/pages/en/sitemap.tsx`, oglindind structura RO.
3. Completez `public/llms.txt` cu toate paginile lipsă, în secțiunile `## Pages` / `## Services`, fiecare cu o descriere scurtă de o linie, respectând formatul existent (RO și EN grupate ca acum).
4. Rulez build-ul plus validarea SEO ca să confirm 0 erori și că toate rutele din `scripts/routes.mjs` apar în cele trei liste.

## Detalii tehnice

- Sursa de adevăr rămâne `scripts/routes.mjs`; verificarea finală compară programatic ROUTES cu `Sitemap.tsx`, `en/sitemap.tsx` și `llms.txt`.
- Fără schimbări de rute, de conținut al paginilor sau de hreflang - doar liste de linkuri interne și fișierul llms.txt.
- Fără em dash în textele adăugate.
