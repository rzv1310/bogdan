# Articol nou: Protest Parcul Izvor - amendă vs. dosar penal

## Ce construim
O pagină nouă în Resurse, la adresa `/protest-bucuresti-amenda-sau-dosar-penal`, cu titlul „Doi participanți imobilizați la protestul din București: care este diferența dintre amendă și dosar penal?”. Același aspect ca articolele „Te cheamă poliția prin telefon?” și „Cearta pe locul de parcare”.

## Conținut
- Textul integral din fișierul trimis (versiunea fără marcajele „chatgpt-content-reference”), cu toate linkurile spre legislatie.just.ro.
- Titlurile de secțiune devin H2; tabelul cu cele 4 măsuri (imobilizare, conducere la sediu, reținere, arestare preventivă) rămâne tabel.
- Liniuțele lungi („art. 224–226”, „Art. 31–32”) devin cratimă simplă, conform regulii site-ului.

## Cele două inserții CTA (doar acestea)
1. **Chenar discret**, după secțiunea „Ai primit amendă? Termenul de contestare este de 15 zile”:
   „Consideri că ai fost amendat pe nedrept?” + text + buton „Solicită analiza procesului-verbal” care deschide WhatsApp cu un mesaj precompletat.
2. **CTA principal la final**, imediat după „Persoana vizată are dreptul să ceară instanței verificarea ei.”:
   „Ai fost amendat sau chemat la audieri după un protest în București?” + text + buton „Discută cu un avocat” (apel la +40 745 506 443) și, dedesubt, linkul „Solicită o consultație pe WhatsApp”.

## Unde mai apare articolul
- Card nou pe pagina /blog (aceeași înălțime cu celelalte).
- Harta site-ului (caseta Resurse), sitemap (prioritate medie), feed RSS, llms.txt.
- Date pentru Google: Article + Breadcrumb, cu link canonic fără slash final.

## Detalii tehnice
- Pagină nouă `src/pages/blog/ProtestBucurestiAmendaDosarPenal.tsx`, rută în `src/routes.tsx`, intrare în `BLOG_ROUTES` (`scripts/routes.mjs`), `Blog.tsx`, `Sitemap.tsx`, `generate-feed.mjs`, `public/llms.txt`; doar în română.
- Linkurile externe către legislație cu target _blank + rel noopener.

## Title tag și H1
- **H1:** „Doi participanți imobilizați la protestul din București: care este diferența dintre amendă și dosar penal?” (titlul din textul tău)
- **Title tag (propus, ~62 caractere):** „Protest București: amendă sau dosar penal? | Avocat Bogdan Lamatic”
- **Meta description (propusă):** „Imobilizat sau amendat la protestul din Parcul Izvor? Diferența dintre amendă, reținere și dosar penal, drepturile tale și termenul de contestare de 15 zile.”
