# Plan: Transformă numele din bio-block în `<h2>` pe homepage

## Obiectiv
În blocul de prezentare de sub portretul din homepage, textul "Avocat Bogdan Lamatic" / "Attorney Bogdan Lamatic" trebuie să fie semantic un titlu `<h2>`, fără a modifica dimensiunea sau greutatea fontului actual.

## Ce se va modifica
- `src/pages/Index.tsx`: elementul care afișează `{t.homeBio.name}` va fi înlocuit din `<p className="text-lg font-semibold">` în `<h2 className="text-lg font-semibold">`.
- `src/pages/en/Homepage.tsx`: la fel pentru versiunea engleză.

## Ce nu se schimbă
- Dimensiunea textului rămâne `text-lg`.
- Greutatea rămâne `font-semibold`.
- Alinierea centrală și culoarea rămân neschimbate (moștenite de la containerul părinte).
- Celelalte două rânduri din bio-block rămân `<p>`.

## Validare
- Build de producție fără erori.
- Verificare vizuală rapidă pe mobile și desktop că textul arată identic.
