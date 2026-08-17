# Restructurare capitole pe cele 7 subservicii de criminalitate economică (RO + EN)

## Ce se schimbă

Fiecare dintre cele 7 pagini primește exact ordinea de capitole din brief, cu H2/H3 identice ca formulare și poziție:

1. `/servicii/evaziune-fiscala` - 13 secțiuni, de la „În ce situație te afli acum?" până la FAQ cu 8 întrebări
2. `/servicii/inselaciune-frauda` - 11 secțiuni, FAQ cu 7 întrebări
3. `/servicii/delapidare` - 13 secțiuni, FAQ cu 7 întrebări
4. `/servicii/fals-si-uz-de-fals` - 11 secțiuni, FAQ cu 6 întrebări
5. `/servicii/bancruta-frauduloasa` - 14 secțiuni, FAQ cu 7 întrebări
6. `/servicii/frauda-informatica` - 12 secțiuni, FAQ cu 7 întrebări
7. `/servicii/fonduri-europene` - 14 secțiuni, FAQ cu 8 întrebări

Secțiunea „În ce situație te afli acum?" devine prima secțiune de pe fiecare pagină, cu situațiile ca H3-uri (același model de selector de situație folosit deja pe Arest preventiv și Arest la domiciliu).

Conținutul existent util (ce fac pentru tine, textul de lege, prejudiciu, sechestru, apărare) se remapează pe noile capitole; unde brief-ul cere capitole noi, scriu text nou juridic corect, cu trimiteri la Legea 241/2005, art. 244, 295 și 308, 320-323, 241, 249 Cod penal și art. 18¹-18⁵ din Legea 78/2000.

Secțiunile „Ce trebuie să-mi trimiți" păstrează butonul verde WhatsApp.

## Secțiuni cu fundal bej (#faf0e6)

- Înșelăciune: „Când nerespectarea unui contract devine înșelăciune"
- Bancrută frauduloasă: „Insolvența unei societăți înseamnă automat răspundere penală?"
- Fraudă informatică: „Care este diferența dintre frauda informatică și înșelăciune"
- Fonduri europene: „Când o neregulă privind fondurile europene poate deveni dosar penal" și „Recuperarea fondurilor și răspunderea penală sunt același lucru?"

## Linkuri interne

Pe fiecare pagină rămân exact:
- un link contextual către pagina-pilon Criminalitate economică;
- un link contextual către un singur subserviciu-frate relevant (evaziune -> înșelăciune, înșelăciune -> fraudă informatică, delapidare -> fals și uz de fals, fals -> fonduri europene, bancrută -> delapidare, fraudă informatică -> înșelăciune, fonduri europene -> fals și uz de fals);
- unde este relevant pentru utilizator, un link suplimentar către alt serviciu: fraudă informatică -> investigații privind activele cripto (în capitolul despre criptomonede) și percheziție informatică, fonduri europene -> avocat DNA.

Anchor text divers, 2-5 cuvinte, fără repetare. Linkurile deja contextuale nu se mai repetă în „Servicii conexe", care se generează automat.

## Versiunile EN

Aceleași capitole, în aceeași ordine, traduse pe `/en/services/tax-evasion`, `fraud-and-deception`, `embezzlement`, `forgery-and-use-of-forgery`, `fraudulent-bankruptcy`, `computer-fraud`, `eu-funds-fraud`, cu aceleași secțiuni bej și aceeași schemă de linkuri interne (echivalentele EN).

## Detalii tehnice

- Modific doar `src/lib/subServices/ro.ts` și `src/lib/subServices/en.ts`; rutele, SEO-ul, breadcrumbs, sitemap și JSON-LD rămân neschimbate și se regenerează din date.
- Folosesc câmpurile existente din `SubServicePage`: `subsections` pentru H3-uri, `cardClassName` pentru fundalul bej, `paragraphs` cu segmente pentru linkurile contextuale, `ctaWhatsApp` pentru butonul de documente.
- FAQ-ul rămâne prin `faq` (H2 secțiune + H3 pe întrebări), în ordinea exactă din brief.
- Fără em dash. La final rulez build cu prerender și `scripts/validate-seo.mjs`.
