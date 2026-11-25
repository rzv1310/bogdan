# Text nou în secțiunea "Situația ta nu poate aștepta" (prima pagină RO)

Secțiunea va arăta așa, de sus în jos:
- H2: "Avocat Penal București Urgent"
- H3: "Speța ta nu poate aștepta !"
- Paragraf: "În drept penal, fiecare oră contează."
- Paragraf: "Sună-mă Azi pentru o evaluare gratuită și confidențială și vezi cum îți pot apăra libertatea și reputația."

Butoanele și fundalul bej rămân la fel. Pagina în engleză nu se schimbă.

## Detalii tehnice
- `src/lib/translations.ts` (RO): `ctaTitle` devine noul H2. Adaug `ctaSubtitle` (H3) și împart `ctaText` în `ctaText` și `ctaText2`.
- `src/pages/Index.tsx`, în jurul liniei 963: adaug H3 și al doilea paragraf. Dacă EN folosește aceleași chei, pun valori goale sau le afișez condiționat, ca EN să rămână neschimbată.
