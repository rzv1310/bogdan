# Regulă de linkuire internă pentru subservicii

## Regula (se salvează în memoria de proiect)

Un subserviciu linkuiește **în mod prioritar** către:
- pagina-părinte (serviciul pilon din care face parte);
- subserviciile-frate din același grup;
- pagini non-serviciu (contact, despre mine, calculator, resurse).

Linkurile către **alte servicii-pilon** sunt permise doar când există o relație contextuală clară și utilă pentru utilizator (menționate în corpul textului sau în FAQ, cu anchor text natural). Nu se adaugă astfel de linkuri doar pentru volum sau în secțiunea "Servicii conexe".

Se combină cu regulile existente de anchor text (2-5 cuvinte, diversificat, anchor semantic/parțial permis) și cu regula: dacă un link există deja contextual, nu se repetă în "Servicii conexe".

## Ce rămâne / ce se ajustează

Linkurile contextuale existente respectă regula și rămân:
- Avocat DIICOT: trafic de droguri, spălare de bani (relație contextuală directă cu specializarea DIICOT).
- Avocat DNA: măsuri preventive ori asigurătorii (context procedural relevant).

Singura ajustare: la Reținere 24 ore, linkul "Avocat audiere Poliție sau Parchet" din lista de subservicii se păstrează doar dacă apare contextual; în secțiunea "Servicii conexe" prioritatea rămâne părintele plus frații din grupul măsurilor preventive.

## Detalii tehnice

- `src/lib/relatedServices.ts` generează deja părinte + frați pentru subservicii; fără modificări structurale.
- Ajustările de conținut se fac în `src/lib/subServices/ro.ts` și `en.ts`.
- Regula se scrie în memorie (`mem://seo/anchor-text-rules`) ca extensie a regulilor de linkuire internă, pentru a fi aplicată și paginilor viitoare.
