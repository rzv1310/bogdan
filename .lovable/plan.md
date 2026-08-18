# Link contextual către homepage din pagina /servicii

## Concluzie SEO

Da, e corect. Fiecare pagină principală de servicii are deja **exact un** link către homepage prin breadcrumbs (`Acasă` → `/`), dublat de schema `BreadcrumbList`. Nu adaug linkuri suplimentare acolo - homepage-ul este oricum cea mai linkată pagină din site (logo + meniu), deci linkuri extra din body n-ar aduce beneficiu, doar diluare.

Singura completare utilă: un link contextual în textul de intro din `/servicii`, cu anchor descriptiv (breadcrumbs folosesc anchor generic "Acasă", care nu transmite relevanță semantică).

## Modificare

În `src/pages/servicii/index.tsx`, paragraful de intro devine:

> Ofer asistență și reprezentare în dosare penale complexe, ca **avocat penal în București**, de la audieri, reținere și arest preventiv până la cauze DIICOT, criminalitate economică, corupție, infracțiuni rutiere și reprezentarea victimelor.

unde textul îngroșat este un `<Link to="/">` cu stil de link intern (underline subtil, hover accent), consistent cu restul linkurilor contextuale din site.

## Detalii tehnice

- Un singur link nou, în corpul paginii `/servicii` (RO). Breadcrumbs rămân neatinse.
- Fără modificări în paginile de servicii principale, fără modificări de schema JSON-LD.
- Fără em dash în conținut.
