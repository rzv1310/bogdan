# Actualizare formulă "primă discuție" în paginile de subservicii

## Obiectiv
În toate paginile unde apare textul exact:

> "Ofer o primă discuție pentru evaluarea situației."

se înlocuiește cu:

> "Ofer o primă discuție fără niciun cost, pentru evaluarea situației."

## Stare actuală
Expresia a fost identificată în 4 locuri, toate în `src/lib/subServices/ro.ts`:

- rândul 10 – bio/contact introductiv
- rândul 98 – răspuns FAQ "Cât costă?" (audiere poliție/parchet)
- rândul 466 – răspuns FAQ "Cât costă?" (percheziție domiciliară/informatică/DNA/DIICOT)
- rândul 583 – răspuns FAQ "Cât costă?" (alte subservicii)

Alte fișiere conțin deja variante precum "Ofer o primă discuție gratuită...", deci nu intră în modificare.

## Ce se face
1. Se înlocuiește textul exact în cele 4 apariții din `src/lib/subServices/ro.ts`.
2. Se rulează validarea SEO (`scripts/validate-seo.mjs`) pentru a confirma că nu apar regresii.
3. Se verifică build-ul local.

## Ce NU se schimbă
- Layout, stiluri sau alte componente.
- Variante deja gratuite ale aceleiași idei.
- Versiunea EN a site-ului.
