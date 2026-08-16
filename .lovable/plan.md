Revenire la textul anterior al butonului din secțiunea "Percheziția are loc chiar acum?"

Problemă
- În ultima modificare, textul butonului CTA din secțiunea "Percheziția are loc chiar acum?" a fost schimbat din "Sună-mă acum" în "Și sună-mă imediat - 031 632 01 83".
- Utilizatorul dorește revenirea la textul anterior.

Modificări

1. Actualizare date pagină
   - În `src/lib/subServices/ro.ts`, în obiectul `perchezitieDomiciliaraRo`, la `sections[0].cta`, se schimbă valoarea înapoi la `"Sună-mă acum"`.

2. Verificare
   - Se rulează build-ul pentru a confirma absența erorilor.
   - Se verifică în preview că butonul din secțiunea "Percheziția are loc chiar acum?" afișează din nou "Sună-mă acum".