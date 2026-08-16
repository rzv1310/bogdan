# Fix: site-ul intră în buclă de redirecționare

## Ce se întâmplă

Regula de redirect adăugată pentru „fără slash la final” se aplică și paginilor care sunt deja în forma corectă, deci fiecare pagină se redirecționează către ea însăși, la infinit. Browserul afișează eroare de tip „prea multe redirecționări” și site-ul pare că nu se mai încarcă.

Verificat live acum:

```text
https://avocatpenalbucuresti.ro/                        -> 301 -> https://avocatpenalbucuresti.ro/
https://avocatpenalbucuresti.ro/servicii/retinere-24-ore -> 301 -> aceeași adresă
```

Dev server-ul local răspunde normal (200), deci problema e doar în configurația de hosting.

## Reparația

- Elimin din `netlify.toml` regula `from = "/*/" -> to = "/:splat"` (status 301, force). Aceasta este cauza buclei.
- Nu e nevoie de înlocuitor: hostingul servește deja forma fără slash final pentru paginile prerandate, iar canonical-urile absolute fără slash (implementate anterior în `useSEO.ts`) rămân neschimbate.
- Verific după modificare că `/`, `/servicii`, `/servicii/retinere-24-ore` și o pagină EN răspund 200, fără redirect.

## Detalii tehnice

Netlify evaluează regula cu splat gol pentru `/`, iar cu `force = true` regula are prioritate chiar și când există fișier static, deci rezultatul este redirect către aceeași adresă. Restul regulilor (fallback SPA pentru `/servicii/*`, `/en/*` etc.) rămân neatinse.
