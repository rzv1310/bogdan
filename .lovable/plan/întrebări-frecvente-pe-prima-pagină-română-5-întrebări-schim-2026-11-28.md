# Întrebări frecvente pe prima pagină (română): 5 întrebări schimbate

Schimb întrebările 2, 6, 9, 15 și 16 cu textele tale, cuvânt cu cuvânt. Celelalte întrebări și pagina în engleză rămân la fel.

- **2.** Întrebarea rămâne. Răspunsul nou e în două paragrafe, iar „Cabinet Avocat Bogdan Lamatic · Telefon +40 745 506 443" stă pe rând separat.
- **6.** Întrebarea nouă: „Vă ocupați personal de dosarul meu, de la audieri până în instanță?", cu răspunsul tău.
- **9.** Întrebarea devine „...în România sau în București?" („în" cu diacritice). În răspuns, „Despre mine" devine link spre pagina Despre mine, iar adresa scrisă de mână dispare. „Sunați-mă pentru o consultație gratuită la +40 745 506 443" stă pe rând separat.
- **15.** și **16.** Primesc răspunsurile noi.

Întrebările din schema pentru Google primesc aceleași texte noi, fără numerotare, ca până acum.

## Technical details
- `src/pages/Index.tsx`: the faqs array (lines ~187-245) and the matching FAQPage JSON-LD entries (~659-775). Schema answer text stays plain (no link markup).
- FAQ 9 link: check how the answers render (plain string + `\n`). If links aren't supported, render "Despre mine" as an internal `<Link to="/despre-mine">` just for this item.
- Check the prerendered FAQ schema with Playwright after the edit.
