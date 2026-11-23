# Control automat NAP în schema JSON-LD

## Ce face
La fiecare publicare, site-ul verifică automat schema de pe toate paginile (RO și EN). Dacă numele, adresa sau telefonul diferă de valorile oficiale, publicarea se oprește și apare un mesaj cu pagina și câmpul greșit.

Valorile oficiale:
- Nume firmă: Avocat Bogdan Lamatic - Drept Penal Bucuresti
- Nume persoană: Bogdan Lamatic
- Adresă: Strada Colonel Stefan Stoika 22, București, 012244, RO
- Telefon: +40745506443

## Reguli verificate
1. Fiecare câmp de telefon din schemă este exact +40745506443.
2. Fiecare adresă are aceeași stradă, cod poștal și țară. Localitatea poate fi "București" sau "Bucuresti".
3. Firma principală (pe prima pagină, Contact și Despre mine) poartă numele oficial al firmei. Pe paginile de servicii, numele este al serviciului, așa că nu se verifică acolo. Se verifică doar furnizorul, care trebuie să fie Bogdan Lamatic.
4. Persoana se numește Bogdan Lamatic.

## Corectură necesară
Pe paginile Contact (RO și EN), schema folosește acum numele "Cabinet Avocat Bogdan Lamatic". Îl schimb în numele oficial ca să treacă verificarea. Titlul vizibil al paginii rămâne neschimbat.

## Detalii tehnice
- Verificarea se adaugă în `scripts/validate-seo.mjs`, care deja citește toate paginile prerandate din `dist/`. Aceasta parcurge recursiv fiecare bloc `application/ld+json` și `@graph`.
- Valorile oficiale stau într-un singur loc (`scripts/nap.mjs`), ca să fie ușor de schimbat.
- Testul se face rulând scriptul pe build-ul curent, apoi introducând temporar un telefon greșit, ca să confirm că verificarea îl prinde.
- Regula se notează în `AGENTS.md`.
