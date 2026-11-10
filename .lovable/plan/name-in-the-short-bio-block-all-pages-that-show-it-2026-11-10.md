## Name in the short bio block (all pages that show it)

- Change "Avocat Bogdan Lamatic" to "Avocat Bogdan Lamatic - Drept Penal Bucuresti" on every service and sub-service page, plus Contact, the calculator, "Toate serviciile" and the Resurse articles.
- Make the name a heading (H2) without changing its current size or weight.
- Make the name a normal followed link to https://maps.app.goo.gl/AgVtSv4ev4ms3zvs5 that opens in a new tab and is underlined on hover.
- The two lines below it stay the same.
- English pages: the text stays "Lawyer Bogdan Lamatic", but it also becomes an H2 with the same link.

### Technical details
- One file only: `src/components/services/LawyerBioBlock.tsx`. Replace the name `<span>` with `<h2 className="block text-base font-semibold text-foreground m-0">` containing an `<a href=... target="_blank" rel="noopener" className="hover:underline">`.
