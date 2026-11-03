# Clipul din articol: imaginea de început și redarea

## Cauza (verificată)
Clipul și imaginea de început sunt găzduite pe serverul de fișiere Lovable. Acesta răspunde doar pe adresele Lovable. În previzualizare răspunde „negăsit” (de aici dreptunghiul negru), iar site-ul tău de pe Netlify (avocatpenalbucuresti.ro) nu le-ar găsi deloc.

## Ce schimb
- Pun clipul micșorat (2,4 MB) și imaginea de început direct în fișierele site-ului, la /media/te-suna-politia.mp4 și /media/te-suna-politia-poster.jpg, ca să meargă peste tot: în previzualizare, pe Lovable și pe Netlify.
- Articolul le folosește de acolo; imaginea de început apare imediat, iar clipul pornește la apăsare.
- Datele ascunse pentru Google indică noile adrese.
- Șterg copiile de pe serverul Lovable, care nu mai sunt folosite.

## Verificare
- Deschid articolul în previzualizare, confirm că se vede imaginea de început și că, la apăsare, clipul rulează.

## Detalii tehnice
- `public/media/` + `src/pages/blog/TeCheamaPolitiaPrinTelefon.tsx` (src/poster ca șiruri statice), `lovable-assets delete` pentru cele două pointere.
