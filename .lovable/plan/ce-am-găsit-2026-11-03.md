## Ce am găsit

Pe pagina Hartă site, cele 3 pagini din Resurse sunt încă în caseta „Pagini Principale - Prioritate Maximă". Schimbarea anterioară a fost făcută doar în fișierul pentru Google (sitemap.xml), nu și pe pagina vizibilă.

## Ce schimb

1. Scot din caseta „Pagini Principale" (Prioritate Maximă): Resurse - Articole Juridice, Calculator Despăgubiri, Te cheamă poliția prin telefon?
2. Adaug în coloana din dreapta, deasupra casetei „English Pages", o casetă nouă „Resurse" cu eticheta „Prioritate Medie", în același stil, cu cele 3 linkuri.
3. Articolele noi din Resurse vor fi adăugate în această casetă.

Restul paginii rămâne neschimbat. Pe site apare după publicare.

## Tehnic

`src/pages/Sitemap.tsx`: mut cele 3 intrări din `mainPages` într-o listă nouă `resourcePages`, randată ca o casetă nouă cu badge `bg-secondary` „Prioritate Medie" la începutul secțiunii din dreapta.
