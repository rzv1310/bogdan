# Eliminarea „săriturilor” de pagină (CLS) din articolul nou

## Cauza (verificată pe site-ul public, telefon cu internet lent)
Am reprodus problema pe /te-cheama-politia-prin-telefon. Pagina apare întâi cu un font de rezervă. După aproximativ 3,6 secunde se încarcă fontul site-ului (Inter), care e puțin mai lat. Titlul și paragraful de deschidere se rearanjează pe mai multe rânduri și împing clipul în jos cu aproximativ 25px. Clipul e mare, așa că saltul lui contează mult în scorul PageSpeed.

## Ce schimb
1. **Font de rezervă „potrivit”**: îi dau fontului de rezervă exact dimensiunile fontului Inter. Așa, când se încarcă Inter, textul rămâne pe aceleași rânduri și nu mai împinge nimic. Fonturile continuă să se încarce în fundal, ca acum, deci viteza nu scade. Câștigul e valabil pe tot site-ul, nu doar în articol.
2. **Spațiu fix pentru clip**: locul clipului rămâne rezervat de la început, cu aceeași lățime și înălțime pe telefon, ca să nu se mai miște la încărcare.

## Verificare
- Refac măsurătoarea pe telefon cu internet lent și încetinire de procesor, pe articol și pe pagina principală. Ținta este sub 0,1 (pragul „bun” din PageSpeed).
- Scorul nou se vede în PageSpeed după publicare.

## Detalii tehnice
- `src/index.css`: `@font-face { font-family: "Inter Fallback"; src: local("Arial"); size-adjust: 107%; ascent-override: 90%; descent-override: 22.4%; line-gap-override: 0% }`, apoi stiva de fonturi devine `'Inter', 'Inter Fallback', ...` (și în stilul inline din `index.html` / `tailwind.config` dacă e setat acolo).
- `TeCheamaPolitiaPrinTelefon.tsx`: elementul `video` primește `width={720} height={1280}` + un container cu `aspect-[9/16]` și lățime fixă.
