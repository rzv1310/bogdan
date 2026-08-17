# Neglijență în serviciu: 5 capitole noi (RO + EN)

Pagina actuală are aceste capitole: situație, ce analizez, documente (bej), ce este neglijența, diferența față de abuz, „Când nu există infracțiune” (bej), ce riști, cum construiesc apărarea, FAQ.

## Ce se schimbă

Se adaugă patru capitole noi și se rescrie unul existent, în această ordine, imediat după „Ce documente trebuie să-mi trimiți”:

1. **H2: Ce normă trebuie încălcată pentru a exista neglijență în serviciu?**
   Explică limita: art. 298 cere lege, OG, OUG sau alt act cu putere de lege; standardul CCR privind „îndeplinirea defectuoasă” se aplică și neglijenței.
   - H3: Este suficientă încălcarea fișei postului?
   - H3: Este suficientă încălcarea unei proceduri interne?
   - H3: Ce act normativ trebuie indicat în acuzație?

2. **H2: Când o greșeală profesională devine neglijență în serviciu?**
   Înlocuiește headingul actual „Când nu există infracțiune” și preia conținutul existent, extins cu:
   - H3: Greșeală profesională vs infracțiune
   - H3: Abatere disciplinară vs răspundere penală
   - H3: De ce simplul rezultat nefavorabil nu este suficient

3. **H2: Cum se dovedește legătura dintre greșeală și prejudiciu?**
   Infracțiune de rezultat: pagubă/vătămare plus legătură cauzală.
   - H3: Ce se întâmplă dacă rezultatul s-ar fi produs oricum
   - H3: Intervenția altor persoane
   - H3: Cauze externe
   - H3: Expertiza tehnică

4. **H2: Lipsa personalului, timpului sau resurselor poate exclude răspunderea?**
   Cu H3-uri: lipsă personal; buget insuficient; volum excesiv de muncă; solicitări de suplimentare ignorate; imposibilitate obiectivă de executare.

5. **H2: Cine poate fi acuzat de neglijență în serviciu?**
   Subiectul activ (funcționar public în sens penal) și extinderea prin art. 308 la angajați din privat, directori, administratori, persoane care exercită o însărcinare în cadrul unei persoane juridice.

Capitolele existente „Ce este neglijența în serviciu”, „Diferența față de abuzul în serviciu”, „Ce riști” și „Cum construiesc apărarea” rămân, după capitolele noi.

## Curățare FAQ

Se elimină întrebările care se dublează cu noile capitole:
- „Se poate reține neglijența fără prejudiciu?”
- „Ce se întâmplă dacă nu am avut personal suficient?”

Restul întrebărilor rămân neschimbate.

## Reguli păstrate

- Exact două secțiuni bej (`#faf0e6`): „Ce documente trebuie să-mi trimiți” și capitolul rescris „Când o greșeală profesională devine neglijență în serviciu?”.
- Fără em dash-uri, doar cratimă.
- Un link contextual către pagina-pilon (Infracțiuni de corupție) și un link către subserviciul conex Abuz în serviciu, plasate în capitolele noi relevante; fără linkuri duplicate.
- Butoanele CTA, calloutul „Sună oricum” și blocul WhatsApp rămân ca acum.
- Aceeași structură se aplică identic în versiunea EN (`/en/services/negligence-in-office`), cu linkuri către rutele EN.

## Detalii tehnice

- `src/lib/subServices/ro.ts` - export `neglijentaInServiciuRo`: inserare capitole, rescriere heading + subsections pentru capitolul bej, tăiere FAQ.
- `src/lib/subServices/en.ts` - export `negligenceInOfficeEn`: paritate completă.
- Nicio modificare de componente, rute sau sitemap; conținutul este date.
