# Link nou în „Pagini utile” pe pagina Despre mine

Doar pe pagina „Despre mine” (RO și EN), în caseta „Pagini utile” / „Useful pages”, pe același loc din listă:
- **RO:** „Resurse - articole de drept penal” devine „Avocat accidente rutiere București”, cu link spre /servicii/infractiuni-rutiere-cu-victime.
- **EN:** „Resources - criminal law articles” devine „Road traffic offenses with/without victims”, cu link spre /en/services/road-traffic-offenses.

Aceeași casetă apare și pe Contact, Resurse, calculator și în articole. Acolo rămâne neschimbată, cu linkul spre Resurse.

## Tehnic
- `ServicesQuickLinks.tsx`: prop opțional `replace?: Record<string, {to,label}>`, aplicat pe listă înainte de filtrare.
- `About.tsx` linia 543: trimite înlocuirea pentru `/blog` (RO) și `/en/blog` (EN).
