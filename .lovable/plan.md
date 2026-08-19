# Schimbare etichetă în meniuri și footer: "Malpraxis medical"

## Cauza

Meniul din header și footer nu folosesc titlul din `serviceGroups.ts` (cel schimbat anterior), ci:
- `src/lib/translations.ts` -> `navServices["neglijenta-profesionala-si-malpraxis"]`, care este încă "Neglijență profesională și malpraxis" (RO) și "Professional negligence and malpractice" (EN).
- `src/lib/services.ts` -> `label` fallback "Neglijență profesională și malpraxis" (RO) și "Professional negligence and malpractice" (EN).

## Modificări

1. `src/lib/translations.ts`
   - RO `navServices`: "Malpraxis medical"
   - EN `navServices`: "Medical malpractice"
2. `src/lib/services.ts`
   - `services`: label -> "Malpraxis medical"
   - `servicesEn`: label -> "Medical malpractice"

Restul (H1, title tag, breadcrumbs, conținutul paginii) rămâne neschimbat.
