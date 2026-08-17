# WhatsApp document buttons — default green variant

## Obiectiv

Toate butoanele WhatsApp pentru trimiterea de acte/documente din paginile de servicii/subservicii (existente și viitoare) să folosească implicit varianta verde WhatsApp: border `#25D366` și hover `bg-[#25D366]/10`.

## Ce se schimbă

1. În `src/components/services/WhatsAppDocsCta.tsx` se schimbă valoarea default a prop-ului `variant` din `"default"` în `"green"`.
2. Se elimină prop-urile explicite `variant="green"` de la toate instanțele unde devin redundante:
   - `src/components/services/SubServicePage.tsx` (2 instanțe)
   - `src/pages/services/masuri-preventive.tsx` (linia 280)
   - `src/pages/en/services/preventive-measures.tsx` (linia 280)
3. Butonul rămas din `masuri-preventive.tsx` / `preventive-measures.tsx` de la linia 419 (fără `variant` explicit) va moșteni automat varianta verde.

## Rezultat așteptat

- Toate butoanele WhatsApp pentru documente au border verde WhatsApp și hover verde la 10% opacitate.
- Nu mai este nevoie să se specifice `variant="green"` în viitoarele pagini.
- Build + validare SEO rămân verzi.
