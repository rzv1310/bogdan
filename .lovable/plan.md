# Casete beige pe pagina Resurse

Toate casetele cu articole de pe /blog primesc fundalul beige #faf0e6 (același ca la secțiunile beige din servicii), în loc de gradientul actual.

- Textul (titlu, descriere) devine închis la culoare, ca să se citească pe beige.
- Butonul "Citește articolul" / "Deschide" devine închis la culoare (stil contur), ca să rămână vizibil.
- Chenar subțire beige mai închis, ca la celelalte casete beige.
- Restul paginii rămâne neschimbat.

## Detalii tehnice
În `src/pages/Blog.tsx`, pe fiecare `Card`: înlocuiesc clasele de gradient + `text-hero-foreground` cu `bg-[#faf0e6]` și un chenar beige; `CardDescription` cu `text-muted-foreground`; butoanele cu `variant="outline"`.
