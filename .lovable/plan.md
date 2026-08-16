# Anchor text divers în linkurile contextuale

## Completare la regula existentă pentru „Servicii conexe”

Se adaugă un punct nou la regula deja aprobată: linkurile contextuale nu se mai pun pe forma scurtă a numelui paginii, ci pe expresii mai lungi și variate, care includ numele serviciului plus cuvinte din contextul frazei. Fiecare pagină primește un anchor diferit, ca să nu se repete același text pe tot site-ul.

Reguli pentru anchor text:
- 2 - 5 cuvinte, expresie naturală din frază (ex. „regulile urmăririi penale”, „etapele urmăririi penale”, „faza de urmărire penală”).
- Fără repetarea aceluiași anchor pe două pagini care trimit către aceeași destinație.
- Anchorul trebuie să conțină cuvântul-cheie al paginii-țintă, dar nu doar el.
- Fără text generic („aici”, „click aici”, „această pagină”).
- Fără em dash; se aplică identic pe RO și EN.

## Anchor-uri concrete propuse (linkurile către paginile-părinte)

Către `/servicii/urmarire-penala`:

| Pagină | Anchor nou |
| --- | --- |
| Audiere Poliție/Parchet | faza de urmărire penală |
| Percheziție domiciliară | cadrul urmăririi penale |
| Percheziție informatică | etapele urmăririi penale |
| Avocat DIICOT | aceleași etape ale urmăririi penale |
| Avocat DNA | regulile generale ale urmăririi penale |

Către `/servicii/masuri-preventive`:

| Pagină | Anchor nou |
| --- | --- |
| Reținere 24 ore | măsurile preventive prevăzute de Codul de procedură penală |
| Arest preventiv | cea mai severă dintre măsurile preventive |
| Control judiciar | măsurile preventive neprivative de libertate |
| Arest la domiciliu | măsurile preventive privative de libertate |

EN primește echivalentele („the criminal investigation stage”, „the rules of the criminal investigation”, „preventive measures under the Criminal Procedure Code” etc.), unul distinct per pagină.

Linkurile contextuale existente între subservicii (ex. „controlului judiciar”, „arestului la domiciliu”, „persoana este reținută”) rămân, dar unde sunt formulări scurte identice pe mai multe pagini le extind la fel (ex. „aplicarea controlului judiciar”, „măsura arestului la domiciliu”).

## Detalii tehnice

- Se modifică doar segmentele de text din `src/lib/subServices/ro.ts` și `src/lib/subServices/en.ts`: se mută cuvintele adiacente în interiorul segmentului cu `to`, fără a schimba sensul frazelor.
- Logica din `SubServicePage.tsx`, `RelatedServices.tsx` și `relatedServices.ts` rămâne neschimbată; excluderea din „Servicii conexe” se bazează pe path, nu pe anchor, deci comportamentul actual (secțiune eliminată la cele 4 pagini de măsuri preventive) se păstrează.
- La final: build cu prerender + validare SEO.

## Fix necesar înainte (build rupt)

`src/lib/subServices/en.ts`, secțiunea „What I analyse in a judicial control case”: cheia `paragraphs` apare de două ori în același obiect (liniile 689 și 696), ceea ce oprește build-ul. Se unesc cele două valori într-un singur array `paragraphs` (segmentul cu link + fraza „The fact that an obligation was imposed...”). În plan mode nu pot edita fișiere de cod, deci fixul intră odată cu aprobarea.
