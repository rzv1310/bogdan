# Schimbare titlu hero H1 + instanțe conexe

## Obiectiv
Înlocuiește peste tot textul RO „Avocat Drept Penal Bucuresti Bogdan Lamatic" (și varianta pe două rânduri cu `\n`) cu noul format: **„Avocat Bogdan Lamatic - Drept Penal Bucuresti"** (numele primul, separator „ - ", un singur rând).

## Instanțe de modificat (3 fișiere)

1. **`src/lib/translations.ts` linia 29** — hero title afișat în H1:
   - Din: `heroTitle: "Avocat Drept Penal Bucuresti\nBogdan Lamatic",`
   - În: `heroTitle: "Avocat Bogdan Lamatic - Drept Penal Bucuresti",`
   - Notă: H1 folosește `whitespace-pre-line`; fără `\n` va rula pe un singur rând (conform cerinței).

2. **`src/pages/Index.tsx` linia 617** — câmp `name` din schema JSON-LD WebSite:
   - Din: `"name": "Avocat Drept Penal Bucuresti Bogdan Lamatic",`
   - În: `"name": "Avocat Bogdan Lamatic - Drept Penal Bucuresti",`

3. **`src/components/layout/Footer.tsx` linia 71** — text RO din titlul footer-ului:
   - Din: `"Avocat Drept Penal Bucuresti Bogdan Lamatic"`
   - În: `"Avocat Bogdan Lamatic - Drept Penal Bucuresti"`

## Verificat deja (fără modificări)
- `public/llms.txt` linia 1 — deja `# Avocat Bogdan Lamatic - Drept Penal Bucuresti` (coincide cu ținta, nicio schimbare).
- Meta title (`Index.tsx` linia 351) — „Avocat Penal București - Bogdan Lamatic | ..." (alt șir, nu se atinge).
- Varianta EN (heroTitle, footer, schema) — nefigurând în cerința RO, rămâne neschimbată.

## Verificare
- Build local fără erori.
- Vizual homepage RO: H1 afișează noul titlu pe un rând.
- Verifică sursă footer + JSON-LD WebSite pentru noul text.
