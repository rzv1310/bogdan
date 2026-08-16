# Plan: Refinare card recenzie Google

## Scop
Transformarea componentei `GoogleReviewCard` pentru a arăta cât mai apropiat de o recenzie reală din Google Business Profile, aplicând modificările în toate locurile unde este folosită.

## Modificări propuse în `src/components/services/GoogleReviewCard.tsx`

1. **Meniu trei puncte verticale în dreapta sus**
   - Adaugă iconiță `MoreVertical` din `lucide-react` în colțul dreapta-sus al cardului.

2. **Sub numele autorului**
   - Adaugă rândul `"3 recenzii"` (RO) / `"3 reviews"` (EN), cu stil discret (text-xs, culoare muted).

3. **Iconiță de apreciere în stânga jos**
   - Adaugă iconiță `Heart` (sau emoji ♥️) în partea stânga-jos a cardului, ca în interfața Google.

4. **Timestamp după stele**
   - După șirul de 5 stele, adaugă textul `"acum 2 luni"` (RO) / `"2 months ago"` (EN), cu stil muted.

5. **Mutare badge Google la final**
   - Simbolul Google și textul `"Recenzie Google"` / `"Google review"` se mută în dreapta jos, la finalul cardului, aliniat cu iconița Heart.

6. **Păstrare temă dark**
   - Se păstrează fundalul închis, border slate și textele deschise, conform designului actual.

## Fișiere afectate
- `src/components/services/GoogleReviewCard.tsx` (modificare)
- Toate paginile care importă `GoogleReviewCard` (efect indirect, fără alte modificări)

## Verificări după implementare
- Build TypeScript fără erori.
- Validare SEO fără erori.
- Verificare vizuală în preview pe pagina `/servicii/masuri-preventive` și pe versiunea EN.
