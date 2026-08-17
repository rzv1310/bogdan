Plan: Ajustări pagina Trafic internațional de droguri (RO + EN)

1. Buton "Sună oricum" în callout
   - Transformă textul "Nu ai toate documentele? Sună oricum." / "Don't have all the documents? Call anyway." într-un callout cu textul înainte de punctuație și buton warning cu link pe "Sună oricum." / "Call anyway.".
   - Folosește câmpurile existente `calloutAfterBullets` + `calloutAfterBulletsCta` în `src/lib/subServices/ro.ts` și `src/lib/subServices/en.ts`.

2. Metadata testimonial Robert Boloaja
   - Schimbă `reviewMeta` din "recenzie Google" / "Google review" în "3 recenzii" / "3 reviews" pentru paginile de trafic internațional de droguri.

3. Linkuri contextuale în secțiuni
   - Adaugă linkuri inline relevante în corpul paginilor RO/EN pentru a reduce numărul de elemente din blocul "Servicii conexe" / "Related services".
   - Prioritate: mai întâi subserviciile-frați (deținere droguri pentru consum propriu, grup infracțional organizat) și pagina-pilon cauze penale privind drogurile; apoi alte pagini (percheziție, audiere Poliție/Parchet, reținere/arest, spălare de bani) doar dacă există context bun.
   - Linkurile vor fi adăugate ca segmente `{ text: "...", to: "/..." }` în paragrafe, astfel încât `collectContextualPaths` să le excludă automat din serviciile conexe.

4. Verificare
   - Build local pentru a confirma că nu apar erori de sintaxă/TypeScript.
   - Screenshot preview RO/EN pentru a valida butonul, testimonial și linkurile noi.
