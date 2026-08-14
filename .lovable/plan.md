# Plan: Apropia badge-urile Legal 500 de marginea stângă a fotografiei

## Obiectiv
Așeza cele 5 badge-uri Legal 500 la aproximativ 10 px de marginea stângă a fotografiei avocatului, pe toate dispozitivele, fără a schimba restul layout-ului.

## Starea curentă
- În `src/pages/Index.tsx` și `src/pages/en/Homepage.tsx`, componenta `Legal500BadgeStrip` este poziționată cu `left-0 md:left-1`.
- Aceasta înseamnă 0 px pe mobil și 4 px pe desktop.

## Modificări propuse
1. **src/pages/Index.tsx** – schimbă clasa containerului badge-urilor de la `left-0 md:left-1` la `left-2.5 md:left-2.5` (10 px pe ambele viewport-uri).
2. **src/pages/en/Homepage.tsx** – aplică aceeași modificare pentru versiunea în engleză.

## Verificare
- Rulează build-ul pentru a confirma că nu apar erori.
- Face screenshot-uri pe desktop și mobil pentru a valida poziționarea la ~10 px de marginea stângă.
