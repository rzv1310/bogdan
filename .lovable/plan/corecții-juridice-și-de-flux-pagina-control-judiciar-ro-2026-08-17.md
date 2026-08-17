# Corecții juridice și de flux - pagina Control judiciar (RO)

## 1. Obligațiile din art. 215 - două categorii

Secțiunea „Ce obligații pot fi impuse prin control judiciar” se rescrie pe două niveluri:

- Intro: „Pe durata controlului judiciar trebuie să respecți trei obligații de bază:”
- Cele 3 obligații obligatorii (alin. 1): prezentarea la organul judiciar ori de câte ori ești chemat; informarea imediată la schimbarea locuinței; prezentarea la organul de poliție desemnat cu supravegherea, conform programului stabilit.
- Paragraf după bullets: „În plus, organul judiciar poate impune și alte obligații, precum restricții privind deplasările, contactul cu anumite persoane sau exercitarea anumitor activități.”
- Se păstrează callout-ul: obligațiile exacte se verifică în actul prin care s-a dispus măsura.

## 2. „Ce vrei să rezolvi?” - scenariu urgent nou

Se adaugă ca prim link: „Am încălcat o obligație / am fost chemat pentru explicații” cu ancoră către secțiunea despre încălcarea obligațiilor (`#incalcare`).

## 3. Ordinea secțiunilor

```text
Hero
Ce vrei să rezolvi?
Ce obligații pot fi impuse
Ce analizez în cazul tău
Ce trebuie să-mi trimiți
Pot pleca din țară sau din localitate?
Cum pot fi modificate sau eliminate obligațiile? („ridicarea”)
Revocarea controlului judiciar
Ce se întâmplă dacă încalci obligațiile?
Cât durează și cum se prelungește?
Contestarea măsurii și termenele
Controlul judiciar pe cauțiune
FAQ (6 întrebări)
Contact
Resurse
```

Cauțiunea coboară imediat înainte de FAQ, fiind o intenție secundară.

## 4. Modificare vs. revocare - două secțiuni distincte

**„Cum pot fi modificate sau eliminate obligațiile?”** - păstrează măsura, schimbă sau elimină obligații. Include formularea populară: „În funcție de situație, poate fi solicitată modificarea sau încetarea unor obligații ori revocarea - numită frecvent «ridicarea controlului judiciar».” Ancora `#modificare-revocare` rămâne pe această secțiune (linkurile existente nu se rup).

**„Revocarea controlului judiciar”** - secțiune proprie, focus exclusiv pe revocare = încetarea măsurii (art. 242 CPP: temeiurile au încetat sau apar împrejurări noi relevante pentru legalitatea măsurii). Se elimină de aici orice sugestie de „înlocuire cu o măsură mai ușoară”, pentru că controlul judiciar este deja o măsură mai puțin severă. Se enumeră tipurile de împrejurări noi utile în cerere.

## 5. Contestarea - distincție explicită, nu doar referințe de articole

Cele două subtitluri H3 se păstrează, dar textul devine explicit:

- **Dispusă de procuror**: plângere în 48 de ore de la comunicarea ordonanței, art. 213 CPP, soluționată de judecătorul de drepturi și libertăți, care poate menține, revoca măsura sau modifica obligațiile.
- **Dispusă de judecător sau instanță**: se explică pe scurt că mecanismul depinde de etapa procesuală (cameră preliminară, judecată), cu contestație în 48 de ore și verificare periodică a temeiurilor, art. 204-206 CPP - articolele rămân doar ca reper, nu ca explicație.

## 6. Încălcarea obligațiilor - „cu rea-credință” foarte vizibil

Prima frază, semibold: „O abatere nu înseamnă automat arestare. Riscul unei măsuri mai severe apare, în condițiile legii, în cazul încălcării cu rea-credință a obligațiilor controlului judiciar.” Urmează contextul (neprezentare medicală vs. sustragere deliberată) și linkul contextual către arest la domiciliu.

CTA specific situației, după secțiune:
- Text: „Ai încălcat o obligație? Sună înainte de următoarea audiere.”
- Buton: „☎ Sună acum - 031 632 01 83”

## 7. Durata - rescrisă pe faze procesuale

- Urmărire penală: perioadă determinată, prelungiri succesive de cel mult 60 de zile prin ordonanța procurorului, cu limita totală proprie acestei faze.
- Cameră preliminară și judecată: nu există „prelungire” în același sens; judecătorul verifică periodic dacă subzistă temeiurile.
- Judecata în primă instanță: limită totală distinctă, de până la 5 ani de la trimiterea în judecată.
- Fără nicio formulare generică de tip „controlul judiciar poate dura X”.

## 8. FAQ redus la 6 întrebări

Se păstrează: plecarea din țară; neprezentarea la Poliție; încălcarea accidentală; cât poate dura; ridicarea înainte de finalizarea dosarului; transformarea în arest la domiciliu / arest preventiv. Se elimină „Pot merge la serviciu” și „Pot vorbi cu martorii”. Răspunsuri de 2-4 fraze.

## 9. Recenzia Google

Se scoate cardul de recenzie din pagină.

## Detalii tehnice

- Toate modificările de conținut sunt în `src/lib/subServices/ro.ts` (`controlJudiciarRo`).
- Se elimină `reviewAfterSection`.
- Secțiunea de încălcare primește `id: "incalcare"` pentru ancoră, plus `calloutAfterParagraphs`/CTA propriu; dacă template-ul nu are deja slotul necesar pentru text de callout + buton la finalul unei secțiuni cu paragrafe, se folosește `callout` + `cta` existente în `SubServicePage.tsx`, fără schimbări structurale de layout.
- Fără em dash în conținut; validarea SEO la build (H2/H3, canonical) rămâne verde.
- Pagina EN (`/en/services/judicial-control`) rămâne neschimbată în acest pas.
