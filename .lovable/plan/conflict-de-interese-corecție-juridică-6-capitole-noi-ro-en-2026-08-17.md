# Conflict de interese - corecție juridică + 6 capitole noi (RO + EN)

## 1. Corecția juridică (raporturi comerciale)

Textul actual al art. 301 Cod penal se referă doar la folos patrimonial pentru sine, soț, rudă sau afin până la gradul II. Formularea „raporturi comerciale / de afaceri din ultimii ani” provine din versiunea veche a legii și se elimină din zona penală, rămânând menționată exclusiv ca posibilă problemă administrativă de integritate, clar separată.

Locuri de corectat (RO și EN):
- Subsecțiunea „Ai semnat un contract cu o firmă apropiată” - se rescrie: verific gradul de rudenie sau afinitate, dacă a existat un folos patrimonial real și dacă situația intră în excepțiile legale; separat, verific dacă poate exista o problemă administrativă de integritate.
- „Ce analizez imediat în dosar” - bulletul despre „persoane cu care ai avut raporturi de afaceri” și cel despre „perioada raporturilor comerciale” se rescriu pe sfera actuală (soț, rude și afini până la gradul II) plus un bullet distinct despre eventuala problemă ANI, fără suprapunere cu penalul.
- „Cum construiesc apărarea” - bulletul „durata raporturilor comerciale invocate” se înlocuiește cu verificarea gradului de rudenie/afinitate și a calității de beneficiar al folosului.

## 2. Capitole noi (în această ordine, după „Ce documente trebuie să-mi trimiți”)

1. H2: Cum contești un raport ANI privind conflictul de interese?
   H3: De când curge termenul de 15 zile · Unde se contestă raportul · Ce documente trebuie analizate · Ce se întâmplă dacă nu îl contești.
   Imediat după: CTA WhatsApp cu textul „Ai primit raportul ANI? Trimite-l acum pentru verificarea termenului.”
2. H2: Conflict de interese sau incompatibilitate - care este diferența? (proceduri de integritate apropiate, dar situații juridice distincte; consecințe diferite)
3. H2: Cine trebuie să obțină folosul pentru a exista infracțiunea?
   H3: Folos pentru tine · Folos pentru soț sau soție · Rude și afini până la gradul II · Ce înseamnă „folos patrimonial”
4. H2: Dacă m-am abținut de la vot sau nu am semnat actul, mai există răspundere penală?
   H3: Participarea efectivă la act · Semnătura · Votul și abținerea · Actele pregătitoare · Cine a luat efectiv decizia
5. H2: Ce se întâmplă dacă raportul ANI rămâne definitiv?
   H3: Consecințe asupra funcției · Consecințe disciplinare · Efecte asupra actelor și contractelor · Relația cu un eventual dosar penal
6. H2: Când art. 301 Cod penal nu se aplică
   H3: Emiterea, aprobarea sau adoptarea actelor normative · Exercitarea unui drept recunoscut de lege · Îndeplinirea unei obligații impuse de lege

## 3. Curățare pentru a evita dublurile

- Actuala secțiune „Când fapta nu constituie infracțiune” se transformă în noul capitol „Când art. 301 Cod penal nu se aplică” (păstrează fundalul bej), pentru a nu avea două capitole cu același subiect.
- Se elimină din FAQ întrebările acoperite acum de capitole: „Ce persoane intră în cercul prevăzut de lege?”, „Abținerea de la vot mă protejează?”, „Se aplică textul și la actele normative?”, „Pot contesta raportul de evaluare?”. Rămân întrebările despre raport vs dosar penal și anularea contractului.

## Detalii tehnice

- Editări în `src/lib/subServices/ro.ts` (`conflictDeIntereseRo`) și `src/lib/subServices/en.ts` (`conflictOfInterestEn`); nu se modifică rute, titletag, h1 sau componente.
- Se păstrează exact două secțiuni bej `bg-[#faf0e6]`: „Ce documente trebuie să-mi trimiți” și „Când art. 301 Cod penal nu se aplică”.
- CTA-ul WhatsApp folosește mecanismul existent (`ctaWhatsApp` / `ctaWhatsAppLabel`) din `SubServicePage`.
- Se păstrează regula de linkuri interne: un link către pagina-pilon corupție și linkuri contextuale către `abuz-in-serviciu` / `dare-luare-de-mita`, fără link nou duplicat.
- Fără em dash în conținut.
