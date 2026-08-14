# Adăugare secțiune FAQ în llms.txt

## Obiectiv
Adaugă în fișierul `public/llms.txt` o secțiune FAQ cu întrebările și răspunsurile deja prezente la finalul homepage-ului, atât în română, cât și în engleză.

## Sursa conținutului
- **RO:** array-ul `faqData` din `src/pages/Index.tsx` (24 de întrebări/răspunsuri).
- **EN:** schema `FAQPage` din `src/pages/en/Homepage.tsx` (24 de întrebări/răspunsuri).

## Modificări propuse
1. În `public/llms.txt`, după secțiunea `## Optional`, adaugă o nouă secțiune:
   ```text
   ## FAQ

   ### Întrebări frecvente (RO)

   **Q: ...**
   A: ...

   ### Frequently Asked Questions (EN)

   **Q: ...**
   A: ...
   ```
2. Păstrează toate cele 24 de perechi Q&A pentru ambele limbi.
3. Normalizează numerele de telefon și linkurile în format text simplu, fără markup HTML.

## Verificare
- Rulează build-ul pentru a confirma că `public/llms.txt` este copiat în `dist/`.
- Verifică accesarea la `/llms.txt`.
