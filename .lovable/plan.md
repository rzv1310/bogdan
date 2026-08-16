# Recenzii Google reale în schema JSON-LD

În schema de pe homepage (RO) există deja 5 recenzii, dar cu nume prescurtate inventate („Ștefan G.”, „Costică C.” etc.) și texte parafrazate, care nu corespund recenziilor reale din Google Business Profile. Pe homepage EN există o singură recenzie în schema.

## Ce se schimbă

1. Se creează o listă centralizată de recenzii reale (autor, rating, text integral, răspunsul proprietarului) folosită de ambele homepage-uri.
2. Se înlocuiesc recenziile din schema homepage RO și EN cu cele reale, cu numele complete din GBP:
   - Lidia Caescu, Robert Boloaja, Ioana Varga, Florian Claudiu Lazar, Elena Petraru, Alexandru Alex, Smarandita Tomsa, Laura Spataru Negura, Dobre Andrei, Mirela Viziru, Seby Andrei, Maria, catalin lupu.
   - Se includ doar recenziile care au text (cele fără text - rating-only - rămân doar în `aggregateRating`).
3. Fiecare recenzie primește și răspunsul proprietarului, marcat ca `comment` (`@type: Answer`) cu autorul `Avocat Bogdan Lamatic`, plus `itemReviewed` legat de entitatea LegalService existentă și `publisher` = Google.
4. `aggregateRating` rămâne 5,0 / 28.


Se păstrează diacriticele și ortografia din recenziile originale, cu excepția înlocuirii oricărui em dash cu cratimă (regula de conținut a proiectului).

## Detalii tehnice

- Fișier nou: `src/lib/reviews.ts` - array tipat cu `author`, `reviewBody`, `ownerReply`, `datePublished` (omis dacă nu e cunoscut).
- `src/pages/Index.tsx` (blocul `review` de la liniile 492-528) și `src/pages/en/Homepage.tsx` (linia ~318) mapează lista în JSON-LD.
- `src/components/services/GoogleReviewCard.tsx` - actualizare `REVIEW_TEXT`.
- După implementare: build + `scripts/validate-seo.mjs`, plus verificare că JSON-LD e valid (parsare în validarea SEO).

## Notă

Google nu mai afișează în rezultate stele bazate pe recenzii auto-declarate („self-serving reviews”) pentru entități locale; markup-ul rămâne util pentru claritate semantică și pentru LLM-uri, dar nu garantează rich snippets.
