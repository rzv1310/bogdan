# JSON-LD homepage: @graph cu 4 noduri separate

## Starea reală, verificată acum

Am parsat HTML-ul din build-ul local și din producție (`https://avocatpenalbucuresti.ro/`). În ambele cazuri:

- Există exact **un** `<script type="application/ld+json">`.
- Are structura `{"@context": "https://schema.org", "@graph": [...]}`.
- Graful conține exact 4 noduri top-level, fiecare o singură dată:

```text
LegalService  https://avocatpenalbucuresti.ro/#legalservice
Person        https://avocatpenalbucuresti.ro/despre-mine#person
WebSite       https://avocatpenalbucuresti.ro/#website
FAQPage       https://avocatpenalbucuresti.ro/#faq
```

- Relațiile (`founder`, `employee`, `worksFor`, `publisher`, `itemReviewed`, `isPartOf`) sunt doar referințe `{"@id": "..."}`, fără obiecte duplicate.

Deci structura cerută există deja. „FAQPage — All (1)" cu celelalte entități expandate dedesubt este modul de afișare al Schema.org Validator: el alege un nod ca rădăcină de arbore și rezolvă referințele `@id` inline, afișând entitatea completă acolo unde e referită. Nu înseamnă că `WebSite`, `LegalService` sau `Person` sunt copii ai `FAQPage` în date.

## Ce propun

Nicio modificare a schemei - nu ating proprietăți, review-uri, rating, coordonate sau `hasOfferCatalog`.

Adaug doar o gardă la build în `scripts/validate-seo.mjs`, care pentru fiecare pagină prerandată verifică:

1. exact un script JSON-LD `data-managed`;
2. payload-ul e `@context` + `@graph`;
3. fiecare `@id` apare o singură dată ca nod top-level în `@graph`;
4. pe homepage RO există toate cele 4 `@id`-uri cerute.

Build-ul eșuează dacă vreo condiție cade, deci regresiile viitoare sunt prinse automat.

## Detalii tehnice

- Fișier modificat: `scripts/validate-seo.mjs` (doar verificare, fără output HTML).
- Verificare finală: `npm run build`, apoi raportez numărul de scripturi și lista de noduri din `dist/index.html` și `dist/en/index.html`.
