# Linkurile spre legi din articolul despre protest: Lege5 + nofollow

## Ce se schimbă
În articolul „Protest București: amendă sau dosar penal?”, toate linkurile spre site-ul Ministerului Justiției (care cade des) trec pe Lege5.ro. Toate linkurile externe din articol devin nofollow.

| Lege | Link nou |
|---|---|
| Constituția (art. 39) | https://lege5.ro/Gratuit/gy3donjs/constitutia-din-1991 |
| OG nr. 2/2001 (art. 16, 31-32, 34) | https://lege5.ro/Gratuit/gm2dmmbu/ordonanta-nr-2-2001-privind-regimul-juridic-al-contraventiilor |
| Legea nr. 61/1991 (art. 2) | https://lege5.ro/Gratuit/gm3dcnzsgyyq/art-2-lege-61-1991?dp=gmytaobvgaztsni |
| Legea nr. 218/2002 (art. 36, 38) | https://lege5.ro/Gratuit/gm3deojzgy4a/legea-nr-218-2002-privind-organizarea-si-functionarea-politiei-romane |
| Codul de procedură penală (art. 202, 209, 223, 224-226) | https://lege5.ro/Gratuit/geztkobvha/codul-de-procedura-penala-din-2010 |

- Textul linkurilor rămâne la fel (de ex. „art. 16 alin. (1) din OG nr. 2/2001”).
- Toate se deschid în tab nou, cu rel="nofollow noopener noreferrer". Asta include și cele două linkuri WhatsApp.
- Linkurile spre pagina de servicii de pe site-ul tău („reținerea”) rămân normale (sunt interne).
- În datele pentru Google, sursele citate se actualizează cu aceleași adrese Lege5.

## Ce nu se schimbă
Articolul despre cearta pe locul de parcare are și el un link spre site-ul Ministerului Justiției. Nu îl schimb acum. Îl pot trece și pe acela pe Lege5 dacă vrei.

## Detalii tehnice
- Fișier: `src/pages/blog/ProtestBucurestiAmendaDosarPenal.tsx`: constantele URL, componenta `Ext` (rel nofollow) și cele 2 linkuri WhatsApp.
- Verificare: deschid pagina în preview și confirm că fiecare link extern are adresa Lege5 și rel nofollow.
