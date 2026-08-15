# Eliminare em dash-uri din tot site-ul

## Ce se schimbă

1. Înlocuiesc toate em dash-urile (`—`) și en dash-urile (`–`) cu cratimă normală (`-`) în tot conținutul site-ului:
   - toate paginile RO și EN (~34 fișiere din `src/pages/**`)
   - textele din `src/lib/translations.ts`
   - schema JSON-LD (titluri, descrieri, FAQ) generate din aceste pagini
   - `public/llms.txt`
   - componentele PDF/DOCX (checklist malpraxis, checklist cripto)
   - textele din scripturile de build (`scripts/prerender.mjs`, `scripts/validate-seo.mjs`)
2. Spațiile duble rămase după înlocuire se normalizează (ex. `text — text` devine `text - text`, nu `text  -  text`).

## Regulă pentru viitor

Adaug o verificare automată în procesul de build (`scripts/validate-seo.mjs`, care rulează deja la fiecare build):
- scanează `src/`, `public/` și HTML-ul prerenderizat
- dacă găsește `—` sau `–`, build-ul afișează eroare cu fișierul și linia exactă

Plus o normalizare automată la prerender: orice em/en dash care ajunge în HTML-ul final sau în JSON-LD e convertit automat în `-`, ca să nu apară niciodată public chiar dacă cineva scrie unul din greșeală.

Salvez și în memoria proiectului regula: „Fără em dash / en dash în conținut, doar `-`”, ca să nu reapară în textele viitoare.

## Detalii tehnice

- Înlocuire pe fișiere text în `src/`, `public/llms.txt` (nu ating `node_modules`, `dist`, fișiere binare).
- În `scripts/prerender.mjs`: pas de sanitizare pe stringul HTML final, aplicat înainte de scrierea fișierului.
- În `scripts/validate-seo.mjs`: regulă nouă `no-em-dash` raportată ca eroare (blocantă), la fel ca regulile existente.
