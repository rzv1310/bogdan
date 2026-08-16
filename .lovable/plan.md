# Regulă nouă: subserviciile linkuiesc doar către pagina-părinte

## Regula (se adaugă în memoria de proiect)

O pagină de subserviciu poate avea linkuri interne doar către:
- pagina-părinte (serviciul pilon din care face parte);
- subserviciile-frați din același grup;
- pagini non-serviciu (contact, despre mine, calculator, resurse).

Niciun subserviciu nu va avea link (contextual sau în "Servicii conexe") către un alt serviciu din cele 12 pagini pilon, în afară de pagina-părinte. Regula se aplică și paginilor viitoare.

## Ce se corectează acum (încălcări găsite)

RO (`src/lib/subServices/ro.ts`):
- Avocat DIICOT: linkuri către "Trafic de droguri" și "Spălare de bani" (alte servicii pilon) - se elimină; rămân linkul către urmărire penală (părinte) și cel către percheziție informatică (frate).
- Avocat DNA: link contextual "măsuri preventive ori asigurătorii" către `/servicii/masuri-preventive` - se elimină linkul (textul rămâne), părintele fiind urmărirea penală.
- Reținere 24 ore: link către "Avocat audiere Poliție sau Parchet" (subserviciu din alt grup) - se elimină.

EN (`src/lib/subServices/en.ts`): aceleași corecții pe echivalentele engleze (DIICOT lawyer, DNA lawyer, Police custody 24 hours).

## Detalii tehnice

- `src/lib/relatedServices.ts` deja generează corect lista pentru subservicii (părinte + frați), deci nu necesită modificări.
- Corecțiile se fac doar în datele de conținut RO/EN.
- Se adaugă o verificare în `scripts/validate-seo.mjs`: pentru fiecare subserviciu, orice link intern către `/servicii/*` (sau `/en/services/*`) trebuie să fie părintele sau un frate din același grup; altfel build-ul semnalează eroare.
- Regula se salvează în memoria de proiect, lângă regulile existente de anchor text.
