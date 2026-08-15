# Corecție rating Google duplicat pe paginile de subservicii

## Problema
Pe paginile de subservicii (ex. `/servicii/audiere-politie-parchet`) ratingul Google apare cu stele duplicate:

`★★★★★ 5,0 ★★★★★ din 27 de recenzii Google`

Cauza este în `src/components/services/SubServicePage.tsx`, unde există un bloc `<span>★★★★★</span>` înaintea textului, iar textul conține la rândul său stele.

## Ce se va face
1. Se elimină span-ul cu stele aflat înaintea numărului din `SubServicePage.tsx`.
2. Se păstrează ordinea cerută: `5,0 ★★★★★ din 27 de recenzii Google` (RO) / `5.0 ★★★★★ from 27 Google reviews` (EN).
3. Se colorează în galben (`text-yellow-400`) stelele rămase, folosind un wrapper pe secțiunea de stele.
4. Se verifică vizual pe pagina `/servicii/audiere-politie-parchet` că nu mai există duplicare și că stelele sunt galbene.

## Fișiere afectate
- `src/components/services/SubServicePage.tsx`

## Verificare
- Build fără erori.
- Screenshot pe preview la `/servicii/audiere-politie-parchet` care arată textul corect.
