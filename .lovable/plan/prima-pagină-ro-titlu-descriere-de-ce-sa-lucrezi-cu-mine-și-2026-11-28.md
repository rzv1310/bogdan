# Prima pagină RO: titlu, descriere, „De ce sa lucrezi cu mine" și întrebări frecvente

Doar pagina în română. Versiunea în engleză rămâne neschimbată.

## 1. Title tag
„Avocat Penal Bucuresti Bogdan Lamatic - Experiență 18+ Ani - Cabinet avocat specializat în Drept Penal - Sector 1 - Asistență și reprezentare în spețe penale în fața instanțelor de toate gradele" (textul exact, cu un singur spațiu între cuvinte).

## 2. Metadescriere
„Avocat Penal Bucuresti Bogdan Lamatic - Apărare în dosare penale complexe de corupție, accidente rutiere, alcool, droguri, măsuri preventive, victime"

## 3. Secțiunea „De ce sa lucrezi cu mine"
- Titlu (H2): „De ce sa lucrezi cu un avocat specializat în drept penal:"
- Bifa 1: „Am experiență de peste 18 ani dovedită în achitări și reduceri de pedeapsă în dosare penale complexe."
- Bifa 2: „Ofer apărare rapidă și eficientă, de la audieri până la instanță."
- Bifa 3: „Vezi cazurile mele reprezentative", cu același link spre secțiunea „Cazuri reprezentative".

## 4. Întrebări frecvente
- 3: „3. Aveți experiență în cauze penale legate de droguri?"
- 9: „9. Cum pot găsi un avocat penalist bun în România sau in București?"
- 11: „11. Ce alte drepturi am în cazul reținerii de către poliție, în afara de apărare penală din oficiu ?"
- Nouă, la final, nr. 25: „De ce e importantă colaborarea cu un avocat în București, mai ales cu un avocat specializat exclusiv în materie penală?", cu răspunsul tău în două paragrafe, cuvânt cu cuvânt.
- Răspunsurile la 3, 9 și 11 rămân neschimbate.

## Detalii tehnice
- `src/pages/Index.tsx`: useSEO title/description; array FAQ (3, 9, 11, plus 25); FAQPage JSON-LD sincronizat (aceleași întrebări, fără numerotare, plus Question nou).
- `src/lib/translations.ts` RO: `reasonsTitle` și `reasons[0..1]`.
- Verific și HTML-ul prerandat al paginii "/" (scripts/prerender.mjs) să preia titlul și descrierea noi; regula fără liniuță lungă e respectată.
- Verificare în previzualizare: titlu, descriere, H2, bife, cele 4 întrebări.
