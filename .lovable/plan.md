# Articol nou în Resurse: Cearta pentru un loc de parcare

## Ce se adaugă
- Pagină nouă la `/cearta-loc-parcare-dosar-penal`, în același stil și cu aceleași elemente ca „Te cheamă poliția prin telefon?".
- Titlu SEO: „Ceartă pentru un loc de parcare - când riști dosar penal" (cratimă în loc de linie lungă).
- Meta description și H1 exact din textul tău; liniile lungi „—" devin cratimă „-".
- Textul integral, fără nota de început („Am identificat titlul...") și fără tabelul SEO; se scot și marcajele „:chatgpt-content-reference".
- Clipul YouTube Shorts (2wDfRSde0PA), vertical, centrat, după paragraful de început; se încarcă doar când vizitatorul ajunge la el, ca pagina să rămână rapidă.
- Numărul 0745 506 443 din text devine link de apel (+40 745 506 443).
- Secțiune „Surse legislative" la final, cu linkul către Portalul Legislativ (se deschide într-o filă nouă).
- Final identic cu celălalt articol: butonul WhatsApp, prezentarea ta cu Legal 500, 31 de recenzii, „Sună-mă acum", linkuri utile, breadcrumbs Acasă > Resurse > articol.
- Link contextual din text către pagina de servicii „Loviri / Vătămare" și „Amenințare" (dacă există), conform regulilor de linkuri interne.

## Unde mai apare
- Card nou pe pagina Resurse (aceeași înălțime ca celelalte).
- Hartă site (casetă Resurse - Prioritate Medie), sitemap cu prioritate 0.5, flux RSS, llms.txt.
- Date ascunse pentru Google: articol + clip video + breadcrumbs.

## Detalii tehnice
- Fișier nou `src/pages/blog/CeartaLocParcareDosarPenal.tsx` copiat după `TeCheamaPolitiaPrinTelefon.tsx`; rută în `routes.tsx`; slug în `BLOG_ROUTES` (`scripts/routes.mjs`), `Sitemap.tsx`, `Blog.tsx`, `lastmod.json`, `public/llms.txt`.
- Embed: iframe `youtube-nocookie.com/embed/2wDfRSde0PA`, container `aspect-[9/16]` cu dimensiuni rezervate (fără salt de layout), `loading="lazy"`.
- VideoObject cu thumbnail `i.ytimg.com/vi/2wDfRSde0PA/hqdefault.jpg`, `embedUrl`; `datePublished` 2026-11-06; `citation` către legislatie.just.ro.
- Doar în română, fără versiune EN.
