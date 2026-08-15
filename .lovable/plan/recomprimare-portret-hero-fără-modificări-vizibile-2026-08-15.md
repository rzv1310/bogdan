# Recomprimare portret hero fără modificări vizibile

Fișierul `/lovable-uploads/avocat_drept_penal_Bucuresti_Bogdan_Lamatic.webp` are în prezent ~1,15 MB (mai mare decât PNG-ul sursă de ~878 KB), ceea ce indică o compresie ineficientă sau un export greșit. Voi regenera fișierul WebP pornind de la PNG-ul sursă, cu un factor de calitate care păstrează detaliile vizuale intacte.

## Ce se va schimba

1. **Regenerare WebP**
   - Pornesc de la `avocat_drept_penal_Bucuresti_Bogdan_Lamatic.png` (sursă necomprimată).
   - Generez un nou `.webp` cu `cwebp` la calitate ~80–85 (parametrul `-q`).
   - Păstrez dimensiunile originale (928×1120) și modul lossy, fără resize.

2. **Păstrarea fallback-ului PNG**
   - Fișierul `.png` rămâne neschimbat în același folder.
   - Nu se schimbă numele fișierului `.webp`, deci referințele din cod rămân valide.

3. **Verificare vizuală și tehnică**
   - Compar dimensiunea fișierului nou cu cea veche (target: reducere semnificativă, posibil sub 400 KB).
   - Deschid pagina `/` în preview pentru a confirma că portretul se afișează identic.
   - Rulez build-ul pentru a verifica că nu apar erori.

## Ce NU se schimbă

- Numele fișierului WebP.
- Referințele din `src/pages/Index.tsx` și `src/pages/en/Homepage.tsx`.
- Dimensiunile afișate ale imaginii în site.
- Orice alt asset sau conținut al paginilor.

## Notă

Dacă rezultatul la calitate 85 nu este suficient de mic, pot testa și calitate 75, dar voi valida vizual înainte de a aplica o valoare mai agresivă.
