# Bifă nouă cu link spre cazurile reprezentative

Pe prima pagină (română), în lista „De ce sa lucrezi cu mine:”, adaug un al treilea rând cu bifă: „Vezi cazurile mele reprezentative”. Textul e link spre pagina „Despre mine” și duce direct la secțiunea „Cazuri reprezentative”. Are aceeași bifă și același aspect ca rândurile de deasupra, cu textul subliniat ca să se vadă că e link.

Versiunea în engleză rămâne neschimbată, pentru că pagina în engleză nu are această secțiune.

## Tehnic
- `src/pages/Index.tsx` ~linia 952: după `t.reasons.map`, un `<li>` cu `CheckCircle` + `<Link to="/despre-mine#relevant-record-ro">`.
