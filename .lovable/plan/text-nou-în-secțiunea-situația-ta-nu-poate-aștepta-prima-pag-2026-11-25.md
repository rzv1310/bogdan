# Text nou în secțiunea "Situația ta nu poate aștepta" (prima pagină RO + EN)

## Română
- H2: "Avocat Penal București Urgent"
- H3: "Speța ta nu poate aștepta !"
- Paragraf: "În drept penal, fiecare oră contează."
- Paragraf: "Sună-mă Azi pentru o evaluare gratuită și confidențială și vezi cum îți pot apăra libertatea și reputația."

## Engleză
- H2: "Urgent Criminal Lawyer Bucharest"
- H3: "Your case can't wait!"
- Paragraf: "In criminal law, every hour counts."
- Paragraf: "Call me today for a free, confidential assessment and see how I can protect your freedom and reputation."

Butoanele și fundalul secțiunii rămân la fel.

## Detalii tehnice
- `src/lib/translations.ts` (RO + EN): actualizez `ctaTitle` și `ctaText` și adaug `ctaSubtitle` (H3) și `ctaText2`.
- `src/pages/Index.tsx` (~963) și `src/pages/en/Homepage.tsx` (~758): adaug H3 și al doilea paragraf.
