## Heading under the second lawyer photo (homepage, RO)

- Change the heading text from "Avocat Bogdan Lamatic · Drept Penal" to "Avocat Bogdan Lamatic - Drept Penal Bucuresti".
- Make the whole heading a normal followed link (no nofollow) to https://www.google.com/maps?cid=17818591254142574295. It opens in a new tab and keeps the current look, underlined on hover.
- The English homepage stays as it is.

### Technical details
- `src/lib/translations.ts`: update `ro.homeBio.name`.
- `src/pages/Index.tsx` line ~1014: wrap `{t.homeBio.name}` in `<a href=... target="_blank" rel="noopener">`.
