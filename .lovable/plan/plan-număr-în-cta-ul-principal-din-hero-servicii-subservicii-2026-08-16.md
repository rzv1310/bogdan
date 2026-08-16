# Plan: Număr în CTA-ul principal din hero (servicii / subservicii)

## Obiectiv
Pe toate dispozitivele și în toate paginile de servicii și subservicii (existente și viitoare), CTA-ul principal din hero să afișeze numărul de telefon, nu doar textul „Sună-mă acum”.

## Ce se schimbă

### 1. Componenta `ServiceHeroCta.tsx`
- Textul implicit devine:
  - RO: `☎ Sună-mă acum - 031 632 01 83`
  - EN: `☎ Call now - 031 632 01 83`
- Se elimină iconița `Phone` separată pentru a evita dublarea simbolului telefon.
- Se păstrează stilurile și clasele existente (`variant="premium"`, `size="lg"`, `CTA_CLASS`).
- `aria-label` va reflecta noul text vizibil.

### 2. `SubServicePage.tsx`
- Nu necesită modificări structurale; folosește deja `ServiceHeroCta` pentru CTA-ul din hero, deci va prelua automat noul text.
- Se verifică că `heroCallLabel` local nu mai este pasat în mod redundant (poate fi păstrat doar ca fallback, dar vizibil va veni din componentă).

### 3. Pagini de servicii (pillar)
- Toate paginile RO/EN din `src/pages/services/` și `src/pages/en/services/` folosesc `ServiceHeroCta`, deci vor prelua noul text fără editări individuale.

## Verificare
- `bun run build` fără erori.
- Validare vizuală în preview pe `/servicii/masuri-preventive` și pe o pagină de subserviciu (ex. `/servicii/avocat-dna`) pentru a confirma că textul CTA-ului principal include numărul și nu iese din buton pe mobil.

## Fișiere afectate
- `src/components/services/ServiceHeroCta.tsx`
- (eventual) `src/components/services/SubServicePage.tsx` - doar dacă e necesară curățarea prop-ului `heroCallLabel`
