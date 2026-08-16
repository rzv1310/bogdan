Înlocuire FAQ-uri pagină /servicii/retinere-24-ore

## Ce se schimbă
Se înlocuiesc cele 5 FAQ-uri existente din pagina „Avocat pentru reținere 24 de ore” cu cele 8 noi furnizate, păstrând titlul existent „Întrebări frecvente despre reținerea de 24 de ore”.

## Modificări concrete
1. Actualizare `src/lib/subServices/ro.ts`:
   - Găsește constanta `retinere24OreRo`.
   - Înlocuiește proprietatea `faq` cu cele 8 întrebări și răspunsuri exact așa cum au fost transmise.
   - Păstrează structura `ServiceFaqItem` (q + a) și tipul `string` pentru răspunsuri.

2. Verificare:
   - Rulează build-ul pentru a confirma că nu există erori de tip sau de sintaxă.
   - Validează SEO (heading hierarchy) pentru pagina afectată.

## Ce NU se schimbă
- URL-ul paginii, titlul secțiunii FAQ, structura componentelor `ServiceFaq.tsx` sau `SubServicePage.tsx`.
- Conținutul celorlalte secțiuni ale paginii (hero, drepturi, contestare, calcul 24 ore, resurse etc.).
