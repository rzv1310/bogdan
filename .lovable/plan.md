# Plan: Text recenzii negru + USP "Mă ocup personal de dosar" sub CTA-ul din hero

## Obiectiv
Pe toate paginile de servicii și subservicii (existente și viitoare):
1. Textul cu recenziile Google de sub CTA-ul din hero devine negru (nu gri).
2. Între CTA și recenzii se adaugă textul negru: **"Mă ocup personal de dosar** (EN: **"I personally handle your case"**).

## Ce se schimbă

### 1. Centralizare în `ServiceHeroCta.tsx`
Componenta va renderiza acum întregul bloc hero de conversie:
- butonul CTA (nemodificat);
- un rând cu textul negru semi-bold: RO `Mă ocup personal de dosar` / EN `I personally handle your case`;
- rândul cu recenziile, tot negru: RO `5,0 ★★★★★ din 28 de recenzii Google` / EN `5.0 ★★★★★ from 27 Google reviews`.

Se păstrează stelele galbene (`text-yellow-400`) și se folosește `text-foreground` pentru restul textului.

### 2. Curățarea markup-ului duplicat
Se elimină paragraful cu recenziile din:
- `src/components/services/SubServicePage.tsx`;
- toate paginile pillar RO/EN din `src/pages/services/` și `src/pages/en/services/`, unde acest markup există în prezent imediat după `<ServiceHeroCta ... />`.

### 3. Standardizare text EN
Pentru recenzii se uniformizează EN la `from 27 Google reviews` (înlocuind varianta `out of 27 Google reviews` din paginile pillar).

## Verificare
- `bun run build` fără erori.
- Screenshot mobil pe `/servicii/masuri-preventive` și pe o pagină de subserviciu (ex. `/servicii/avocat-dna`) pentru a confirma ordinea: CTA → "Mă ocup personal de dosar" → recenzii, toate vizibile corect.

## Fișiere afectate
- `src/components/services/ServiceHeroCta.tsx`
- `src/components/services/SubServicePage.tsx`
- ~25 pagini pillar RO/EN din `src/pages/services/` și `src/pages/en/services/`
