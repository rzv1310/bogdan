# Secțiunea „Cazuri reprezentative” pe fundal bej

Pe pagina „Despre mine” (română):
- Toată secțiunea „Cazuri reprezentative”, cu titlul inclus, primește fundal bej (#faf0e6), colțuri rotunjite și spațiu interior, ca o casetă.
- Cazurile 1, 3, 5, 7 și 9 au fundal alb, cu colțuri ușor rotunjite și puțin spațiu în jurul textului. Cazurile 2, 4, 6 și 8 rămân pe bej. Așa alternează alb / bej.
- Textul și punctele listei rămân la fel. Linkul „Vezi cazurile mele reprezentative” de pe prima pagină duce în continuare la titlu.

## Tehnic
- `src/pages/About.tsx` ~linia 375: `section` primește `rounded-lg p-6` + `style={{backgroundColor:"#faf0e6"}}`.
- `ul`: clase `[&>li:nth-child(odd)]:bg-background [&>li:nth-child(odd)]:rounded-md [&>li]:px-3 [&>li]:py-2`; `list-inside` ca punctele să stea în casetă.
