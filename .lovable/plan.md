# Linkul „Vezi cazurile mele reprezentative” să ducă la secțiune

**Cauza:** la fiecare schimbare de pagină, site-ul urcă automat sus pe pagină, chiar și când linkul indică o anumită secțiune. De aceea ajungi la începutul paginii „Despre mine”.

**Soluția:** când linkul indică o secțiune, site-ul derulează la ea în loc să urce sus. Pagina „Despre mine” se încarcă puțin mai târziu, așa că o caută câteva clipe până apare, iar meniul fix de sus nu va acoperi titlul „Cazuri reprezentative”. Restul linkurilor din site urcă sus, ca până acum.

Verific în previzualizare: click pe link de pe prima pagină → titlul „Cazuri reprezentative” vizibil sus.

## Tehnic
- `src/components/layout/Layout.tsx`: efectul depinde de `pathname` + `hash`; dacă există hash, caută `document.getElementById(hash)` repetat (~2s, la 100ms), apoi `scrollIntoView`; altfel scroll top ca acum.
- `About.tsx`: `scroll-mt-24` pe H2 `relevant-record-ro` pentru headerul fix.
