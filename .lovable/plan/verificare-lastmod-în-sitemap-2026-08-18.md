# Verificare lastmod în sitemap

## Concluzie

Logica actuală este deja corectă și nu necesită modificări de cod.

- `<lastmod>` vine din `scripts/lastmod.json`, generat din istoricul git al fiecărei pagini (fișierul componentei + intervalul de linii al obiectului de date al paginii).
- Sitemap-ul doar citește acest fișier la build; nu există nicio dată de build, deploy sau `new Date()` în generator.
- Regenerarea sitemap-ului azi nu schimbă datele paginilor: cele modificate pe 18 august rămân 2026-08-18.
- Distribuția actuală: 14 aug (2), 15 aug (2), 16 aug (7), 17 aug (87), 18 aug (40). Nicio pagină nu are data de azi.
- Rutele fără dată rezolvabilă rămân fără `<lastmod>`, fără fallback.

## Decizie confirmată

Păstrăm logica strict per pagină (fișierul paginii + obiectul ei de date). Modificările în fișiere partajate (`translations.ts`, `serviceGroups.ts`, componente comune) nu vor bumpa `lastmod` pe toate paginile - comportament intenționat, ca să evităm date identice în masă.

## Acțiuni

Niciuna. Nu se modifică fișiere.

Regulă pentru viitor: `scripts/generate-lastmod.mjs` se rulează manual doar după modificări reale de conținut pe pagini, niciodată ca parte a build-ului sau doar pentru că s-a regenerat sitemap-ul.
