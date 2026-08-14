# Adăugare secțiune „Zone deservite” în llms.txt

## Obiectiv
Adaugă în `public/llms.txt` o secțiune clară cu zonele geografice deservite de cabinet, pentru a ajuta motoarele de căutare și LLM-urile să înțeleagă aria de acoperire.

## Sursa conținutului
- Schema `areaServed` din `src/pages/Index.tsx` și `src/pages/en/Homepage.tsx`: București (oraș) și România (țară).
- Schema `areaServed` din `src/pages/Contact.tsx`: România.
- Adresa fizică a cabinetului: Strada Colonel Stefan Stoika 22, București 012244.

## Modificări propuse
1. În `public/llms.txt`, după secțiunea `## FAQ`, adaugă o nouă secțiune:
   ```text
   ## Zone deservite

   Cabinetul avocat Bogdan Lamatic este situat în București și oferă consultanță și reprezentare juridică în drept penal în:

   - București (sediu principal)
   - România
   - Cauze cu element internațional, la nevoie

   ## Served areas

   Attorney Bogdan Lamatic's office is based in Bucharest and provides criminal law advice and representation in:

   - Bucharest (main office)
   - Romania
   - Cross-border matters, when required
   ```
2. Păstrează formatul markdown simplu, fără markup HTML.

## Verificare
- Rulează build-ul pentru a confirma că `public/llms.txt` este copiat în `dist/`.
- Verifică accesarea la `/llms.txt`.
