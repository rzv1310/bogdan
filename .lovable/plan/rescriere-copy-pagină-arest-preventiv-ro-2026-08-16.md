# Rescriere copy pagină Arest preventiv (RO)

Hero-ul și zona above the fold rămân neschimbate. Toate modificările sunt în conținutul de sub hero, în `arestPreventivRo` (`src/lib/subServices/ro.ts`), plus două mici extensii de componentă.

## Ordinea finală a secțiunilor

1. Selector cu 2 situații (nou, imediat după hero)
2. Ce analizez la o propunere de arestare preventivă (existent)
3. Ce trebuie să-mi spui când mă suni (nou)
4. În ce condiții poate fi dispusă arestarea preventivă? (nou, fundal bej)
5. Ce se întâmplă la termenul pentru propunerea de arestare preventivă? (nou, fundal bej)
6. Cum contești arestarea preventivă și ce se poate obține? (înlocuiește „Termenele pentru contestație”, fundal bej)
7. Cât poate dura arestarea preventivă și prelungirea (existent, mutat aici)
8. Revocare și înlocuire - două lucruri diferite (nou, din secțiunea „Ești deja arestat preventiv”)
9. Control judiciar sau arest la domiciliu ca alternative (nou; aici mută linkurile contextuale)
10. FAQ
11. Contact

## Conținut nou

**1. Selector 2 situații** - două blocuri scurte:
- „Urmează propunerea de arestare?” → apărarea trebuie pregătită înainte de termen.
- „Arestarea a fost deja dispusă?” → verificăm contestația, prelungirea, revocarea sau înlocuirea.
- Sub ele, în evidență: „O persoană apropiată este reținută și urmează propunerea de arestare? Mă poți contacta tu chiar dacă nu ai toate actele dosarului.”
- CTA comun: „Sună-mă acum - 031 632 01 83”.

**3. Ce trebuie să-mi spui când mă suni** - „Spune-mi 4 lucruri:” persoana este reținută sau deja arestată · când este termenul · ce Parchet/instanță are dosarul · ai încheierea, citația sau alte acte. Apoi bold: „Nu ai toate actele? Sună oricum.” + buton WhatsApp „Trimite-mi actele pe WhatsApp”.

**4. Condițiile art. 223 CPP** - 5 cazuri, 1-2 fraze fiecare: sustragerea de la urmărire/judecată, influențarea probelor sau martorilor, presiuni asupra persoanei vătămate, riscul săvârșirii unei noi infracțiuni, pericolul pentru ordinea publică. Plus mențiunea condițiilor generale (art. 202) și a proporționalității.

**5. Ce se întâmplă la termen** - pași: procurorul formulează propunerea; dosarul ajunge la judecătorul de drepturi și libertăți; inculpatul este asistat de avocat; se discută argumentele procurorului și ale apărării; judecătorul poate respinge propunerea sau poate dispune măsura ori o alternativă permisă de lege. Notă: dacă inculpatul este reținut, sesizarea judecătorului trebuie făcută cu cel puțin 6 ore înainte de expirarea reținerii.

**6. Contestația** - termenul de 48 de ore, de când curge (pronunțare sau comunicare), cine soluționează, ce poate decide instanța, faptul că admiterea poate duce la respingerea propunerii sau la înlocuirea cu o măsură mai ușoară și, după caz, la punerea în libertate. Fără garantarea rezultatului.

**8. Revocare vs. înlocuire** - formulări simple, separate:
- Revocare: încetarea măsurii când au încetat temeiurile sau au apărut împrejurări noi relevante.
- Înlocuire: măsura preventivă rămâne, dar se solicită una mai puțin severă (art. 242 CPP).

**9. Alternative** - când se poate obține control judiciar sau arest la domiciliu (art. 242 CPP: măsură mai ușoară suficientă pentru scopul procesual), cu linkuri contextuale către „Control judiciar” și „Arest la domiciliu”; linkul „Reținere 24 ore” rămâne în aceeași listă.

## FAQ

Se elimină întrebarea duplicată despre durată (rămâne H2-ul dedicat) și FAQ-ul devine:
1. Poate fi respinsă propunerea de arestare preventivă?
2. Poate fi dispus control judiciar în locul arestării preventive?
3. Poate fi dispus arest la domiciliu în locul arestării preventive?
4. Cât durează soluționarea contestației?
5. Poate familia angaja avocatul pentru persoana arestată?
6. Ce se întâmplă dacă procurorul cere prelungirea arestării?
7. Când poate fi revocat arestul preventiv?
8. Care este diferența dintre revocare și înlocuire?

Se păstrează și întrebările utile existente care nu se dublează (cine poate dispune măsura).

## CTA final

În cardul „Contact | Evaluare inițială gratuită” de pe această pagină, butonul „Trimite email” se înlocuiește cu „WhatsApp - trimite actele”, lângă „☎ Sună acum”.

## Detalii tehnice

- `src/lib/subServices/ro.ts`: rescriere completă a `sections` și `faq` pentru `arestPreventivRo`; secțiunile 4, 5, 6 primesc `cardClassName: "bg-[#faf0e6]"`.
- `src/components/services/SubServicePage.tsx`: adaug un flag opțional în `SubServicePageData` (ex. `contactWhatsApp?: boolean`) care înlocuiește butonul de email cu `WhatsAppDocsCta` în cardul de contact. Activat doar pe această pagină, restul paginilor rămân neschimbate.
- Pagina EN (`pre-trial-detention`) nu se modifică în acest pas.
- Fără em dash în conținut. Verificare: `bun run build` + validarea SEO trebuie să treacă, apoi control vizual în preview.
