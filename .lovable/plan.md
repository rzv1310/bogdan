# Plan: Casete cu un singur link în Homepage și pagina Servicii

## Obiectiv
Transformă cardurile din secțiunea "Cum te pot ajuta" (homepage RO + EN) și din paginile `/servicii` și `/en/services` astfel încât întreaga casetă să fie un singur link, eliminând cele două linkuri separate existente (titlu + CTA).

## Modificări propuse

### 1. Extindere componentă `GlowCard`
- Fișier: `src/components/ui/spotlight-card.tsx`
- Adaugă prop opțional `to?: string`.
- Când `to` este prezent, componenta randează un `<Link to={to}>` în loc de `<div>`, păstrând toate clasele, stilurile și animația cu punctul luminos.
- Asigură focus vizibil și comportament accesibil (cardul devine focusable, iar textul rămâne lizibil).

### 2. Homepage (`src/pages/Index.tsx` și `src/pages/en/Homepage.tsx`)
- Elimină `<Link>`-urile din interiorul cardurilor (titlu și footer "Detalii"/"Details").
- Transmite `to={s.to}` către `<GlowCard>`.
- Păstrează textul indicator (ex. "Detalii →") ca element vizual simplu, fără link propriu.
- Adaugă un stil de hover pe card pentru a evidenția că este clickable.

### 3. Pagina Servicii (`src/pages/servicii/index.tsx` și `src/pages/en/services/index.tsx`)
- Elimină `<Link>`-urile din titlu și din CTA-ul de jos al cardului.
- Transmite `to={card.to}` către `<GlowCard>`.
- Păstrează textul `card.cta` ca indicator vizual (ex. subliniat sau cu săgeată), fără link propriu.

### 4. Verificare
- Rulează build-ul pentru a confirma absența erorilor.
- Verifică HTML-ul generat: un singur `<a>` per card, fără linkuri imbricate.

## Note
- Layout-ul, dimensiunile, animația de contur și culorile rămân neschimbate.
- Modificarea se aplică atât în română, cât și în engleză.
