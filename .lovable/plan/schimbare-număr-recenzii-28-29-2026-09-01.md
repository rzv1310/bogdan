# Schimbare număr recenzii: 28 → 29

## Ce se schimbă

Î nlocuiesc numărul de recenzii Google afișat în tot site-ul din **28** în **29**. Sunt 6 apariții în 4 fișiere:

| Fișier | Linie | Conținut curent | După modificare |
|---|---|---|---|
| `src/lib/translations.ts` | 50 | `googleReviews: "din 28 de recenzii Google",` | `... din 29 de recenzii Google` |
| `src/lib/translations.ts` | 141 | `googleReviews: "from 28 Google reviews",` | `... from 29 Google reviews` |
| `src/components/services/GoogleReviewStars.tsx` | 11 | `from 28 Google reviews` | `from 29 Google reviews` |
| `src/components/services/GoogleReviewStars.tsx` | 15 | `din 28 de recenzii Google` | `din 29 de recenzii Google` |
| `src/pages/Index.tsx` | 487 | `"reviewCount": 28` | `"reviewCount": 29` |
| `src/pages/en/Homepage.tsx` | 316 | `"reviewCount": 28` | `"reviewCount": 29` |

## Ce NU se schimbă

- Numerele individuale de recenzii ale autorilor de testimoniale (`Local Guide · 3 recenzii`, `24 de recenzii`, `2 recenzii`) din `src/lib/subServices/ro.ts` — acestea sunt nivelurile de Local Guide ale fiecărui autor, nu totalul site-ului.
- Căile SVG și codurile de culoare din `GoogleReviewCard.tsx` care conțin secvența `28` (ex. `#4285F4`, coordonate path) — nu sunt recenzii.
- Anchor textele de tipul „Sună-mă acum" — rămân neschimbate.

## Verificare

După modificări, verific cu `grep -rn '28' src/` filtrat după `recenz|review|reviewCount` ca să confirm că nu rămâne nicio apariție de „28 de recenzii". Verific build-ul prin `build-errors.log`.
