# „Representative Cases” și „Publications” pe pagina About Me (engleză)

Pe pagina în engleză /en/about adaug, după secțiunea „Affiliation”, cele două secțiuni din pagina în română, traduse în engleză:

1. **Representative Cases** - caseta bej (#faf0e6) cu titlul inclus, cu toate cele 28 de cazuri din pagina în română, traduse fidel. Cazurile 1, 3, 5 etc. (fiecare al doilea) au fundal alb, ca în română. Sub casetă, butonul verde de WhatsApp cu textul „Message me on WhatsApp”.
2. **Publications** - aceleași 9 publicații, cu aceleași linkuri, toate nofollow. Articolele Wolf Theiss primesc titlurile lor originale în engleză (ex. „Newest EU sanctions against Russia target military capabilities, propaganda tools and more”). Articolele în română de pe Juridice.ro și Bizlawyer primesc titlul tradus și mențiunea „(in Romanian)”.

Restul paginii în engleză rămâne la fel. Verific în previzualizare că secțiunile apar.

## Tehnic
- `src/pages/About.tsx`, ramura `lang === "en"`, după secțiunea `memberships`: secțiuni `relevant-record` (cu `scroll-mt-24`) și `publications`, cu aceleași clase ca varianta RO, plus `WhatsAppDocsCta label="Message me on WhatsApp" lang="en"`.
