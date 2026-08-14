# Reducerea duratei de încărcare a imaginilor din hero

Optimizarea imaginilor din secțiunea hero (RO + EN) pentru încărcare mai rapidă și eliminarea layout shift-ului.

## Problema identificată

- Portretul avocatului este deja preloaded în `index.html` și are `fetchPriority="high"` — OK.
- Cele 5 badge-uri Legal 500 sunt încărcate lazy (`loading="lazy"`) deși sunt above the fold, deci browserul le amână.
- Badge-urile sunt PNG ~140–150 KB fiecare (~750 KB total), deși ar putea fi mult mai mici în WebP.
- Nu au atribute `width`/`height`, deci pot provoca CLS.

## Ce se va schimba

1. **Conversie badge-uri în WebP**
   - Generez versiuni `.webp` pentru cele 5 fișiere PNG din `public/lovable-uploads/`.
   - Păstrez și fișierele PNG originale ca fallback.

2. **Componenta `Legal500BadgeStrip`**
   - Înlocuiesc `src` direct cu elementul `<picture>`: `<source srcSet="...webp" type="image/webp" />` + `<img src="...png" />`.
   - Elimin `loading="lazy"` — badge-urile sunt în hero și trebuie încărcate eager.
   - Adaug `width="56" height="56"` (mobile 40×40, dar atributul nativ se referă la densitatea intrinsecă; voi pune 56×56 pentru calitate pe ecran Retina) și `decoding="async"`.

3. **Preload badge-uri critice**
   - Adaug în `index.html` câte un `<link rel="preload" as="image" type="image/webp" href="/lovable-uploads/..." fetchpriority="high">` pentru primele 2 badge-uri vizibile imediat.
   - Badge-urile 3–5 rămân fără preload pentru a nu congestiona banda, dar vor fi eager.

4. **Aplicare în ambele homepage-uri**
   - `src/pages/Index.tsx`
   - `src/pages/en/Homepage.tsx`

## Ce NU se schimbă

- Layout-ul vizual al badge-urilor (poziționare, dimensiuni, spațieri).
- Portretul avocatului (deja optimizat WebP).
- Textele, butoanele și restul conținutului hero.

## Verificare finală

- Build fără erori.
- Screenshot mobil + desktop pe `/` și `/en` — badge-urile apar la fel.
- Inspector Network: badge-urile au tipul `webp`, nu `png`, și nu mai sunt marcate lazy.
