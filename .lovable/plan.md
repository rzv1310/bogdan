# Titlu nou pe pagina Infracțiuni rutiere (RO)

Pe /servicii/infractiuni-rutiere-cu-victime, titlul vechi „Avocat accidente rutiere București | Avocat infracțiuni rutiere - Bogdan Lamatic” devine „Avocat infracțiuni rutiere București - Bogdan Lamatic” în:
- **title tag**, iar titlurile pentru distribuire pe rețele sociale preiau automat același text;
- **H1** de pe pagină.

Am căutat în tot site-ul, inclusiv în fișierele de la publicare și în llms.txt: titlul vechi apare doar în aceste două locuri. După schimbare verific în previzualizare title tag-ul și H1 și caut din nou titlul vechi. Descrierea, linkurile, meniul și pagina în engleză rămân la fel.

## Tehnic
- `src/pages/services/infractiuni-rutiere-cu-victime.tsx`: `useSEO.title` (linia 20) și H1 (linia 153).
