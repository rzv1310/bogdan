# lastmod per pagină în sitemap.xml

## Principiul

Fiecare URL primește data ultimei modificări reale de conținut a paginii respective, nu data de azi și nu data build-ului. Sursa autoritară: istoricul de commit-uri al fișierelor care compun efectiv pagina.

Pentru fiecare rută se calculează cea mai recentă dintre:
- data ultimului commit pe componenta de pagină (`src/pages/.../<rută>.tsx`);
- data ultimului commit care a atins chiar blocul de conținut al paginii în `src/lib/subServices/ro.ts` / `en.ts` (se folosește istoricul pe intervalul de linii al obiectului respectiv, nu pe tot fișierul, ca să nu primească toate subserviciile aceeași dată).

Astfel datele vor fi diferite între pagini și vor corespunde momentului în care s-a schimbat conținutul fiecăreia.

## Implementare

1. Script nou `scripts/generate-lastmod.mjs`:
   - mapează fiecare rută din `scripts/routes.mjs` la fișierul-componentă și, unde există, la obiectul de date din `subServices`;
   - citește datele din git (`git log -1 --format=%cI` pentru fișier, `git log -L <start>,<end>:<file>` pentru blocul de date);
   - scrie rezultatul în `scripts/lastmod.json` (rută -> dată ISO, doar partea `YYYY-MM-DD`).
2. `scripts/generate-sitemap.mjs` citește `scripts/lastmod.json` și emite `<lastmod>` înaintea `<changefreq>`. Dacă o rută nu are dată în fișier, `<lastmod>` este omis pentru ea (nu se inventează o valoare).
3. `scripts/lastmod.json` este commitat, deci build-ul de pe Netlify nu depinde de istoricul git (clonele shallow nu ar avea toate commit-urile). Regenerarea se face rulând scriptul când se dorește actualizarea.
4. Regenerez `public/sitemap.xml` și rulez validarea SEO.

## Verificare

- Toate cele 138 de intrări au `<lastmod>` valid ISO (`YYYY-MM-DD`).
- Datele nu sunt identice pe toate paginile și niciuna nu este data de azi, dacă pagina nu a fost modificată azi.
- Build + `scripts/validate-seo.mjs` cu 0 erori.
