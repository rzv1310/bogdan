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

Nicio modificare a schemei JSON-LD - nu ating review-urile, `aggregateRating`, coordonatele, `hasOfferCatalog` sau alte proprietăți. Structura rămâne un singur `<script type="application/ld+json">` cu `@graph` și cele 4 noduri top-level (`#legalservice`, `/despre-mine#person`, `#website`, `#faq`), cu relațiile (`founder`, `employee`, `worksFor`, `publisher`, `itemReviewed`, `isPartOf`, `provider`) păstrate ca referințe simple `{"@id":"..."}`.

Adaug doar o gardă la build în `scripts/validate-seo.mjs`, care pentru fiecare pagină prerandată verifică:

1. exact un script JSON-LD `data-managed`;
2. payload-ul e `@context` + `@graph`;
3. fiecare entitate are o singură definiție top-level în `@graph`; aparițiile aceluiași `@id` ca referință în `publisher`, `worksFor`, `itemReviewed`, `provider` etc. sunt permise și nu sunt considerate duplicate;
4. homepage RO conține toate cele 4 noduri cerute;
5. vechiul ID S3 = 0 apariții;
6. `priceRange` apare o singură dată și are valoarea `$$`;
7. homepage EN: verificare separată a `FAQPage`; dacă FAQ-ul EN e specific paginii `/en/`, ID-ul acceptat e `https://avocatpenalbucuresti.ro/en/#faq`, dar `LegalService` și `Person` păstrează aceleași ID-uri globale.

Build-ul eșuează dacă vreo condiție cade, deci regresiile viitoare sunt prinse automat.

După build raportez: numărul de scripturi JSON-LD din `dist/index.html` și `dist/en/index.html`, lista nodurilor top-level din `@graph`, ID-ul `FAQPage` pentru RO și EN, și confirmarea că nu există duplicate top-level pentru același `@id`.

## Detalii tehnice

- Fișier modificat: `scripts/validate-seo.mjs` (doar verificare, fără output HTML).
- Verificare finală: `npm run build`, apoi raportez numărul de scripturi și lista de noduri din `dist/index.html` și `dist/en/index.html`.
