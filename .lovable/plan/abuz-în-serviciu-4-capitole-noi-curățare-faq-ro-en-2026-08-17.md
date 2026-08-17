# Abuz în serviciu: 4 capitole noi + curățare FAQ (RO + EN)

Se extinde pagina „Abuz în serviciu” cu 4 capitole noi (5 H2-uri cerute, dintre care unul e o secțiune scurtă fără H3) și se elimină întrebările din FAQ care devin redundante. Se păstrează designul, ordinea existentă a secțiunilor și regula celor două secțiuni bej.

## Capitole noi (inserate după „Ce documente trebuie să-mi trimiți”)

1. H2: Ce lege trebuie să fi fost încălcată pentru a exista abuz în serviciu?
   - H3: Este suficientă încălcarea unei proceduri interne?
   - H3: Fișa postului poate fi suficientă singură?
   - H3: Ce se întâmplă dacă norma era neclară sau interpretabilă
   Conținut axat pe art. 297: trebuie identificat actul prevăzut de lege/ordonanță/act cu putere de lege neîndeplinit sau dispoziția încălcată.

2. H2: Cum se stabilește prejudiciul într-un dosar de abuz în serviciu?
   - H3: Prejudiciul trebuie să fie efectiv
   - H3: Cum se calculează paguba
   - H3: Rolul expertizei
   - H3: Cum poate fi contestat prejudiciul

3. H2: Abuz în serviciu sau neglijență în serviciu?
   Fără H3-uri: intenție vs culpă, de ce forma de vinovăție schimbă încadrarea, art. 297 vs art. 298. Include linkul contextual către /servicii/neglijenta-in-serviciu (link mutat aici din „Cum construiesc apărarea”, ca să nu se dubleze).

4. H2: Cine răspunde când actul a fost avizat și semnat de mai multe persoane?
   - H3: Aviz juridic favorabil
   - H3: Aviz economic sau tehnic
   - H3: Delegarea atribuțiilor
   - H3: Decizia colegială
   - H3: Răspunderea fiecărei persoane din circuit

5. H2: Când abuzul în serviciu intră sub Legea 78/2000
   Secțiune scurtă: forma cu folos necuvenit, majorarea limitelor de pedeapsă, competența DNA, cu link contextual către pagina DNA.

Secțiunile existente rămân neschimbate, la fel și cele două carduri bej („Ce documente trebuie să-mi trimiți” și „Când o eroare administrativă nu este infracțiune”) - capitolele noi nu primesc fundal bej.

## FAQ: se elimină întrebările acoperite acum de un H2

Se șterg:
- „Orice act nelegal înseamnă abuz în serviciu?” (acoperit de capitolul despre norma încălcată)
- „Contează dacă am semnat pe baza unui aviz juridic favorabil?” (acoperit de capitolul despre avize și semnături)
- „Ce înseamnă forma agravată prevăzută de Legea 78/2000?” (acoperit de capitolul Legea 78/2000)

Rămân: administratorul de firmă privată, restituirea prejudiciului, cine investighează dosarele.

## Detalii tehnice

- Modificări doar în `src/lib/subServices/ro.ts` (`abuzInServiciuRo`) și `src/lib/subServices/en.ts` (`abuseOfOfficeEn`), paritate 1:1 RO/EN.
- Fără em dash-uri; linkurile interne folosesc segmente `{ text, to }`, cu anchor text divers (2-5 cuvinte).
- Se actualizează `faq` din ambele fișiere; schema FAQPage se regenerează automat din date.
- Build + validare SEO la final.
