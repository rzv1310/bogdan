# Rescriere pagină „Grup infracțional organizat” (RO + EN)

Rescriu complet conținutul paginii `/servicii/grup-infractional-organizat/` după briefingul primit, păstrând designul și componentele existente. Versiunea EN se aliniază 1:1 cu structura RO.

## SEO
- Title: `Avocat grup infracțional organizat București | DIICOT`
- Meta description: textul din brief (analiză rol, probe, acuzații DIICOT)
- Canonical/hreflang rămân neschimbate (deja absolute și corecte)

## Structura noii pagini
1. `În ce situație te afli acum?` - secțiune bej, 4 sub-situații (dosar cu mai multe persoane, aderare/sprijinire, legături și conversații, dosar de droguri cu link contextual către pagina-pilon), CTA telefon la final.
2. `Ce analizez imediat într-o acuzație de grup infracțional organizat` - lista completă de verificări + CTA telefon.
3. `Ce trebuie să-mi trimiți` - a doua secțiune bej, lista de acte, fraza „Nu ai toate documentele? Sună oricum.” cu buton galben pe „Sună oricum.”, plus butonul verde WhatsApp.
4. Card recenzie Google după această secțiune: Florian Claudiu Lazar, „Local Guide · 2 recenzii”, „acum 5 luni”, textul din brief, link pe „Recenzie Google” către https://maps.app.goo.gl/GQWEZ7T1arUcytpc8
5. `Ce este un grup infracțional organizat?` - definiția art. 367 + cele 4 modalități.
6. `Ce trebuie să dovedească acuzarea?` - H3-uri: trei persoane, grup structurat, durată, acțiune coordonată, scop infracțional.
7. `Trei persoane care comit împreună o faptă înseamnă automat grup infracțional organizat?`
8. `Este necesar ca grupul să urmărească obținerea de bani?` (referință la decizia CCR).
9. `Ce înseamnă aderarea la un grup infracțional organizat?`
10. `Ce înseamnă sprijinirea unui grup?`
11. `Ce pedepse sunt prevăzute pentru constituirea unui grup infracțional organizat?`
12. `Ce se întâmplă dacă în dosar sunt și alte infracțiuni?` - linkuri contextuale către trafic internațional de droguri și pagina-pilon droguri.
13. `Ce probe sunt folosite într-un dosar privind un grup infracțional?`
14. `Ce se întâmplă dacă apari într-un grup de WhatsApp sau Telegram?`
15. `Denunțul și cooperarea în cazul art. 367 Cod penal` + CTA telefon.
16. `De ce este important rolul individual într-un dosar cu mulți inculpați?`
17. `Competența DIICOT în dosarele privind criminalitatea organizată`
18. `Cum construiesc apărarea într-un dosar de grup infracțional organizat` + CTA telefon.
19. Secțiune finală `Ești cercetat într-un dosar cu mai multe persoane?` cu lista de expresii + CTA telefon și WhatsApp.

Un link contextual către „deținere de droguri pentru consum propriu” se adaugă doar acolo unde este relevant (secțiunea despre alte infracțiuni din dosar). Fără alte cross-linkuri către pagini-pilon.

## FAQ
Înlocuiesc întrebările actuale cu cele 8 din brief, sub titlul `Întrebări frecvente despre grupul infracțional organizat`.

## Resurse oficiale
Cele 4 linkuri din brief (Cod penal art. 367, OUG 78/2016, Legea 39/2003, Decizia CCR 35/2021).

## Detalii tehnice
- Editez `src/lib/subServices/ro.ts` (`grupInfractionalOrganizatRo`) și `src/lib/subServices/en.ts` (`organizedCrimeGroupEn`); nu ating componentele.
- CTA telefon: `cta: "☎ Sună-mă acum - 031 632 01 83"` cu `ctaIcon: false`; WhatsApp prin `ctaWhatsApp` (buton verde existent).
- Butonul „Sună oricum” folosește tratamentul galben existent (`calloutCta`/callout, ca în celelalte subservicii).
- Recenzia se configurează prin `reviewAfterSection`, `reviewAuthor`, `reviewText`, `reviewMeta`, `reviewTimestamp`, `reviewLink`.
- Exact două secțiuni bej (`cardClassName: "bg-[#faf0e6]"`).
- Fără em dash-uri; „Servicii conexe” va exclude automat linkurile deja prezente în text.
