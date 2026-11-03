# Articol nou în Resurse: „Te cheamă poliția prin telefon?”

## Ce se adaugă
- Pagină nouă la adresa **/te-cheama-politia-prin-telefon**, cu textul din fișierul trimis, neschimbat.
- Titlu SEO: „Te cheamă poliția prin telefon? Ce întrebi și ce drepturi ai”.
- Meta description: textul primit, exact.
- Titlul mare de pe pagină (H1): „Te sună poliția? Pune întrebarea asta înainte să spui „Da, vin”.” (din articol); cele 3 subtitluri devin H2.

## Clipul video (58 sec, vertical)
- Așezat imediat după paragraful de deschidere, înainte de „Ce întrebi când te cheamă poliția prin telefon?”, unde rezumă exact ideea articolului.
- Afișat vertical, centrat, cu lățime limitată (cât un telefon), cu colțuri rotunjite și butoane de redare; nu pornește singur, se încarcă doar când e pe ecran.
- Micșorat pentru web (de la 42 MB la aprox. 8-10 MB), fără pierdere vizibilă de calitate, cu o imagine de previzualizare din clip.
- Date ascunse de tip Video pentru Google (titlu, descriere, durată).

## Același stil și aceleași elemente ca pagina Calculator despăgubiri
- Același fundal, aceleași lățimi, fonturi și spațieri.
- Caseta de tip „Metoda mea de lucru” (bordură aurie) folosită pentru întrebările de pus la telefon.
- La final, în aceeași ordine: blocul de prezentare Bogdan (poză, experiență, Legal 500), stelele „5,0 din 31 de recenzii Google”, butonul „Sună-mă acum”, butonul verde WhatsApp, linkurile „Pagini utile”, apoi traseul de navigare: Acasă > Resurse > Te cheamă poliția prin telefon (pe telefon jos, pe calculator sus, ca la calculator).
- Numărul de telefon din text afișat ca +40 745 506 443, cu link de apel.
- Sursa legislativă rămâne link extern către legislatie.just.ro.

## Pagina Resurse (/blog)
- Card nou pentru articol, lângă cel al calculatorului, în același stil, cu titlu scurt, descriere și link „Citește articolul”.

## Pentru Google și AI
- Date ascunse de tip Articol (autor Bogdan Lamatic, dată publicare 3 nov 2026) + traseu de navigare.
- Pagina intră automat în harta site-ului, în fluxul RSS și în llms.txt.

## Detalii tehnice
- `src/pages/blog/TeCheamaPolitiaPrinTelefon.tsx` (structura copiată din `CalculatorDespagubiri.tsx`: `LawyerBioBlock`, `GoogleReviewStars`, `ServicesQuickLinks`, `Breadcrumb`, `useSEO` cu BlogPosting + BreadcrumbList).
- Rută în `src/routes.tsx`; card în `src/pages/Blog.tsx`; intrări în sitemap/prerender/feed/`public/llms.txt`; fără pereche EN.
- Verificare automată „fără em dash” respectată.
