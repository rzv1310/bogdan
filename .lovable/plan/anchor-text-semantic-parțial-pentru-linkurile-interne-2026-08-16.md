# Anchor text semantic (parțial) pentru linkurile interne

## Extinderea regulii

La regula existentă de linkuri contextuale se adaugă: anchor text-ul nu trebuie să conțină obligatoriu numele paginii-țintă. Este suficient ca fraza să se refere clar la subiectul paginii-țintă.

Exemplu (Arest preventiv): fraza „revocarea sau înlocuirea cu **o măsură mai ușoară**” poate primi link către pagina-părinte `/servicii/masuri-preventive`, pentru că se referă la o măsură preventivă.

Reguli păstrate:
- prioritate au linkurile contextuale din text/FAQ; „Servicii conexe” doar pentru destinațiile fără link contextual;
- un link deja pus contextual nu se repetă în „Servicii conexe”;
- anchor text divers, 2-5 cuvinte, fără a repeta același anchor pentru aceeași destinație;
- maximum un link per destinație per pagină.

Anchoruri semantice acceptate (exemple de vocabular):
- către `masuri-preventive`: „o măsură mai ușoară”, „o măsură neprivativă de libertate”, „o altă măsură preventivă”, „măsura dispusă în dosar”;
- către `retinere-24-ore`: „persoana este privată de libertate 24 de ore”, „primele 24 de ore”;
- către `arest-preventiv`: „propunerea de privare de libertate”, „cea mai severă măsură”;
- către `control-judiciar` / `arest-la-domiciliu`: „o măsură cu obligații de supraveghere”, „executarea măsurii la domiciliu”;
- către `urmarire-penala`: „faza de anchetă”, „procedura din faza de anchetă”.

## Aplicare pe paginile existente

Arest preventiv (RO/EN)
- „o măsură mai ușoară” (secțiunea despre art. 242 CPP / revocare-înlocuire) primește link către pagina-părinte, folosind anchor semantic; se elimină linkul actual mai literal către părinte, ca să nu existe două linkuri spre aceeași destinație.

Reținere 24 de ore (RO/EN)
- „o altă măsură preventivă” devine link către pagina-părinte, în locul anchorului literal existent.

Control judiciar (RO/EN)
- „o măsură neprivativă de libertate” din secțiunea de analiză devine link către pagina-părinte.

Arest la domiciliu (RO/EN)
- „înlocuirea cu o măsură mai ușoară” (FAQ art. 242) devine link către pagina-părinte.

Subserviciile de urmărire penală (audiere, percheziție domiciliară, percheziție informatică, DIICOT, DNA)
- unde apare „propunere de măsură preventivă” sau formulări echivalente, aceasta devine anchor semantic către `/servicii/masuri-preventive`;
- formulările de tip „faza de anchetă” rămân/devin anchor către `/servicii/urmarire-penala` acolo unde nu există deja un link spre această destinație.

După aceste ajustări, „Servicii conexe” continuă să se genereze automat și dispare când toate destinațiile au deja link contextual.

## Detalii tehnice

- Se modifică doar datele de conținut: `src/lib/subServices/ro.ts` și `src/lib/subServices/en.ts`, convertind stringurile vizate în segmente `{ text, to }` (structura deja suportată de `SubServicePage.tsx`).
- Logica de excludere din `src/components/services/SubServicePage.tsx` + `src/lib/relatedServices.ts` rămâne neschimbată; ea detectează automat noile linkuri contextuale.
- Se actualizează memoria `mem://seo/anchor-text-rules` cu regula anchorului semantic/parțial, ca să se aplice și paginilor viitoare.
- Verificare: build + `scripts/validate-seo.mjs`.
