# 43 de recenzii peste tot

Înlocuiesc „32" cu „43" în toate locurile unde apare numărul de recenzii, în română și engleză:

- Textul de sub stele de pe prima pagină: „din 43 de recenzii Google" / „from 43 Google reviews".
- Steluțele de pe paginile de servicii, subservicii și articole: același text.
- Schema pentru Google (prima pagină RO și EN): reviewCount 43.

Alte numere „32" din site (de ex. art. 32 din OG 2/2001 în articolul despre protest) rămân neschimbate.

## Detalii tehnice
Fișiere: src/lib/translations.ts (googleReviews RO+EN), src/components/services/GoogleReviewStars.tsx, src/pages/Index.tsx și src/pages/en/Homepage.tsx (reviewCount). Verificare în previzualizare după schimbare.
