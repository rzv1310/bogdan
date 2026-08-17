# Plan: Actualizare testimonial Lidia Caescu în pagina de deținere droguri pentru consum propriu

## Scop
Înlocuiesc testimonialul afișat în cardul Google review de pe pagina `/servicii/detinere-droguri-consum-propriu` (și varianta EN) cu textul, badge-ul și data reale indicate de utilizator.

## Modificări propuse

### 1. Extindere `GoogleReviewCard.tsx`
Adaug două prop-uri opționale:
- `reviewMeta` – rândul din sub-numele autorului (ex: `Local Guide · 24 de recenzii`). Păstrează default-ul existent (`3 recenzii` / `3 reviews`) pentru celelalte utilizări.
- `timestamp` – textul după stele (ex: `acum 4 luni`). Păstrează default-ul existent (`acum 2 luni` / `2 months ago`).

### 2. Extindere interfață `SubServicePageData`
Adaug câmpuri opționale:
- `reviewText?: string`
- `reviewMeta?: string`
- `reviewTimestamp?: string`

### 3. Update `SubServicePage.tsx`
Transmite noile câmpuri către `GoogleReviewCard`: `reviewText`, `reviewMeta`, `reviewTimestamp` (pe lângă `author` și `lang` existente).

### 4. Update date pagină deținere droguri – RO
În `src/lib/subServices/ro.ts`, pentru `detinereDroguriConsumPropriuRo`:
- `reviewText`: textul real indicat:
  > Cautam un avocat in Bucuresti si din fericire l-am intalnit pe dl avocat Bogdan Lamatic. Din primul moment mi-a castigat intrederea prin profesionismul sau, calmul si empatia cu care m-a ascultat. Un OM in sensul adevarat al cuvantului. Il recomand din toata inima celor care au nevoie de un specialist in drept penal si un sprijin real intr-un moment dificil.
- `reviewMeta`: `Local Guide · 24 de recenzii`
- `reviewTimestamp`: `acum 4 luni`

### 5. Update date pagină deținere droguri – EN
În `src/lib/subServices/en.ts`, pentru pagina corespondentă EN:
- `reviewText`: traducere în engleză a textului de mai sus.
- `reviewMeta`: `Local Guide · 24 reviews`
- `reviewTimestamp`: `4 months ago`

### 6. Verificări
- Build TypeScript fără erori.
- Validare em-dash: conținutul folosește doar cratimă obișnuită (conform regulei proiectului).
- Verificare vizuală în preview pe `/servicii/detinere-droguri-consum-propriu` și pe versiunea EN.
