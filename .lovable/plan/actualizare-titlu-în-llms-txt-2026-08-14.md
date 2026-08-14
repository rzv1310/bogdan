# Actualizare titlu în llms.txt

## Obiectiv
Schimbă titlul (linia H1) din fișierul `public/llms.txt` pentru a include aria de practică și locația.

## Ce se va schimba
1. Deschide `public/llms.txt`.
2. Înlocuiește prima linie:
   - Din: `# Avocat Bogdan Lamatic`
   - În: `# Avocat Bogdan Lamatic - Drept Penal Bucuresti`
3. Propagă aceeași modificare în previzualizarea din plan (secțiunea "Conținutul fișierului"), dacă este prezentă.

## Verificare
- Rulează build-ul local.
- Confirmă că `dist/llms.txt` începe cu noul titlu.
- Accesează `http://localhost:8080/llms.txt` pentru validare.
