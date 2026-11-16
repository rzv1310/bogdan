# Butonul "Solicită analiza procesului-verbal" verde

In articolul despre protest, butonul din chenarul "Consideri că ai fost amendat pe nedrept?" devine verde, identic cu butonul WhatsApp din celelalte articole (fundal verde #1DA851, text alb, iconița WhatsApp albă).

Nu se schimbă: textul butonului, mesajul WhatsApp precompletat, linkul nofollow, restul paginii.

## Detalii tehnice
- `src/pages/blog/ProtestBucurestiAmendaDosarPenal.tsx`: înlocuiesc `<Button variant="outline">` + `MessageCircle` cu `WhatsAppDocsCta` (variant green), extins cu props opționale `href` și `rel` ca să păstreze `WA_ANALIZA` și `nofollow`. Valorile implicite ale componentei rămân neschimbate pentru celelalte pagini.
