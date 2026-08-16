Actualizare text buton în secțiunea "Percheziția are loc chiar acum?"

Problemă
- Textul butonului CTA din secțiunea "Percheziția are loc chiar acum?" trebuie actualizat la o variantă intermediară.

Modificări

1. Actualizare date pagină
   - În `src/lib/subServices/ro.ts`, în obiectul `perchezitieDomiciliaraRo`, la `sections[0].cta`, se setează valoarea `"Sună-mă imediat - 031 632 01 83"`.

2. Verificare
   - Se rulează build-ul pentru a confirma absența erorilor.
   - Se verifică în preview că butonul din secțiunea "Percheziția are loc chiar acum?" afișează "Sună-mă imediat - 031 632 01 83".