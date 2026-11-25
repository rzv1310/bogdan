# Text de prezentare sub blocul "Avocat Penal Bucuresti - Bogdan Lamatic"

Pe prima pagină (RO), sub cele trei rânduri de sub a doua poză, adaug paragraful cerut, ca text normal (nu titlu), în aceeași culoare discretă ca rândurile de deasupra.

Text (cu cratimă "-" în loc de linia lungă, conform regulii site-ului):
"Avocat Bogdan Lamatic - Drept Penal București este cabinetul meu de avocatură din Sectorul 1 al Capitalei, dedicat exclusiv dreptului penal. Cu peste 18 ani de experiență în avocatură, ofer consultanță în materie penală și asistență la audieri și percheziții. Asigur reprezentare în cauze penale în fața instanțelor de toate gradele, de la judecătorii și tribunale până la curțile de apel și Înalta Curte de Casație și Justiție. Apăr persoane cercetate sau trimise în judecată în dosare de criminalitate economică, corupție, infracțiuni rutiere și trafic de droguri. De asemenea, asist și reprezint persoanele vătămate."

Versiunea în engleză rămâne neschimbată. Titlul H2 și linkul lui rămân la fel.

## Tehnic
- `translations.ts`: câmp nou `homeBio.intro` (RO cu textul; EN gol).
- `Index.tsx` ~linia 1018: `<p className="text-sm text-hero-foreground/80 mt-3">` afișat doar dacă `intro` există.
