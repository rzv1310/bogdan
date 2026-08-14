# Plan: Curățare footer — eliminare link Sitemap XML

## Obiectiv
Păstra în footer doar linkul util pentru vizitatori („Harta site”), eliminând linkul tehnic „Sitemap XML” care este accesibil direct la `/sitemap.xml` și declarat în `robots.txt`.

## Modificări
1. **Footer** (`src/components/layout/Footer.tsx`)
   - Elimin rândul cu `<a href="/sitemap.xml">Sitemap XML</a>`.
   - Păstrez rândul cu `<Link to="/harta-site">Harta site</Link>` / `Site map`.

2. **Verificare**
   - Rulez build-ul pentru a mă asigura că nu apar erori.
   - Confirm că footer-ul afișează corect linkul rămas.

## Note
- `public/sitemap.xml` rămâne neschimbat și accesibil pentru crawlere.
- Pagina `/harta-site` rămâne funcțională.
