# Articol nou: Dosarul taxelor de la Universitatea din București

## Ce construiesc
Pagină nouă în Resurse, în același stil ca articolul despre protest (RO only).

- URL: /delapidare-universitatea-bucuresti-arestare
- H1: "Dosarul taxelor de la Universitatea din București: de ce o acuzație de delapidare nu înseamnă automat arestare"
- Title tag: "Dosar de delapidare la Universitatea din București | Avocat Bogdan Lamatic"
- Meta description: "Dosarul taxelor de la Universitatea din București: ce trebuie dovedit la delapidare, de ce prejudiciul nu impune arestarea și ce presupune controlul judiciar."
- Textul integral din fișier, secțiunile îngroșate devin H2, lista de la art. 215 rămâne listă.
- Cratimele lungi devin cratimă simplă "-".

## Linkuri
- Linkurile spre legi (Codul penal art. 295, Codul de procedură penală art. 202, 215, 223, 225, 227, 4) duc spre Lege5.ro, ca în celelalte articole.
- Linkul spre precizările Universității rămâne.
- Toate linkurile externe sunt nofollow și se deschid în tab nou.

## CTA final
Chenar bej (#faf0e6), ca la articolul despre protest:
- "Ești cercetat pentru delapidare sau ai fost chemat la audieri?"
- "Discută cu avocatul Bogdan Lamatic despre acuzație, documentele relevante și opțiunile de apărare înainte de audiere."
- Buton "Solicită o consultație" care deschide apelul la +40 745 506 443.

Sub articol: blocul de prezentare Bogdan, recenziile Google (32), linkuri spre servicii și breadcrumb.

## Unde apare
Card pe /blog, Harta site (Resurse), sitemap, feed RSS, llms.txt.

## Tehnic
- `src/pages/blog/DelapidareUniversitateaBucuresti.tsx` după modelul `ProtestBucurestiAmendaDosarPenal.tsx`; schema BreadcrumbList + BlogPosting (2026-11-16).
- Înregistrare în `routes.tsx`, `scripts/routes.mjs` (ROUTES + BLOG_ROUTES), `validate-seo.mjs` RO_ONLY, `scripts/lastmod.json`, `Sitemap.tsx`, `Blog.tsx`, `public/llms.txt`.
- Verificare în Playwright: title, H1, linkuri nofollow, CTA, card pe /blog.
