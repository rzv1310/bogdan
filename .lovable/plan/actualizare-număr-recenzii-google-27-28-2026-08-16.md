# Actualizare număr recenzii Google: 27 -> 28

Momentan numărul apare inconsistent: paginile de servicii RO afișează deja 28, dar restul site-ului afișează 27, iar în schema JSON-LD de pe homepage numărul este 10.

## Ce se modifică

1. Textul de social proof (homepage + orice pagină care folosește traducerile):
   - RO: „din 27 de recenzii Google” -> „din 28 de recenzii Google”
   - EN: „from 27 Google reviews” -> „from 28 Google reviews”
2. Blocul CTA din hero-ul paginilor de servicii/subservicii, varianta EN: „from 27 Google reviews” -> „from 28 Google reviews” (varianta RO este deja 28).
3. Schema JSON-LD (`aggregateRating.reviewCount`) pe homepage RO și EN: `10` -> `28`, ca să corespundă cu numărul afișat.

Nu se schimbă ratingul (5,0) și nu se modifică cardul de recenzie Robert Boloaja („3 recenzii” este numărul lui de recenzii, nu al cabinetului).

## Detalii tehnice

- `src/lib/translations.ts` (liniile 50 și 141)
- `src/components/services/ServiceHeroCta.tsx` (linia 38)
- `src/pages/Index.tsx` (linia 490) și `src/pages/en/Homepage.tsx` (linia 315)
- Build + validare SEO după modificări.
