import type { SubServicePageData } from "@/components/services/SubServicePage";

const CPP = "https://legislatie.just.ro/Public/DetaliiDocument/185907";
const CP = "https://legislatie.just.ro/Public/DetaliiDocument/223635";
const PARENT = {
  to: "/servicii/urmarire-penala",
  label: "urmărire penală",
  breadcrumbLabel: "Urmărire penală",
};
const BIO_INTRO = "Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență în drept penal.";
const LEGAL500 =
  "Sunt listat în prezent de Legal 500 în categoria Next Generation Partners - White-Collar Crime.";
const CONTACT =
  "Spune-mi în câteva propoziții ce s-a întâmplat și îți răspund concret care sunt pașii următori. Ofer o primă discuție fără niciun cost, pentru evaluarea situației.";

export const audierePolitieParchetRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/audiere-politie-parchet",
  altPath: "/en/services/police-prosecutor-questioning",
  roPath: "/servicii/audiere-politie-parchet",
  title: "Avocat Audiere Poliție București | Bogdan Lamatic",
  h1: "Avocat pentru audiere la Poliție sau Parchet în București",
  description:
    "Avocat pentru audiere la Poliție sau Parchet în București. Asistență pentru suspect sau inculpat și pregătirea audierii. 18+ ani experiență.",
  keywords:
    "avocat audiere poliție bucurești, avocat audiere parchet, avocat declarație suspect, avocat audiere inculpat",
  breadcrumbLabel: "Audiere Poliție/Parchet",
  serviceName: "Avocat audiere Poliție și Parchet București - Bogdan Lamatic",
  urgency: [
    "Ai primit o citație sau ai fost sunat să te prezinți la Poliție ori Parchet?",
    "Înainte să dai o declarație, este important să știi în ce calitate ești audiat, ce acuzație sau faptă este investigată și ce drepturi ai.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane chemate la audieri în fața Poliției, Parchetului, DNA sau DIICOT, în funcție de situația concretă și de calitatea procesuală.`,
    "Dacă ai fost chemat la audiere, mă poți contacta înainte să te prezinți pentru a analiza situația și pentru a pregăti audierea.",
  ],
  sections: [
    {
      h2: "Ce fac pentru tine înainte și în timpul audierii",
      bullets: [
        "Clarific situația procesuală și informațiile disponibile înainte de prezentarea la organul judiciar.",
        "Pregătesc audierea împreună cu tine, astfel încât să înțelegi procedura, întrebările care pot apărea și drepturile pe care le ai.",
        "Te asist la audiere și îți protejez drepturile pe parcursul procedurii, în funcție de calitatea în care ești chemat.",
        "Te consiliez cu privire la dreptul la tăcere, atunci când ești suspect sau inculpat.",
        "Mă consult cu tine înainte și în cursul audierii, în condițiile prevăzute de lege.",
        "Verific modul în care este consemnată declarația și solicit rectificarea sau completarea acesteia atunci când ceea ce este scris nu reflectă corect cele declarate.",
        "Formulez observații, cereri sau obiecții atunci când situația procesuală o impune.",
      ],
      paragraphs: [
        "Codul de procedură penală prevede că suspectului sau inculpatului trebuie să îi fie comunicată calitatea procesuală, fapta și încadrarea juridică, iar acesta se poate consulta cu avocatul înainte și în timpul audierii și își poate exercita dreptul la tăcere.",
      ],
      cta: "Am primit o citație - vreau să discut",
    },
    {
      h2: "Situații în care mă poți contacta",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Mă poți contacta dacă:"],
      bullets: [
        "ai primit o citație pentru a te prezenta la Poliție sau Parchet;",
        "ai fost sunat și ți s-a cerut să vii „pentru o declarație”;",
        "ești chemat în calitate de suspect sau inculpat;",
        "nu știi în ce calitate vei fi audiat;",
        "ești chemat într-un dosar instrumentat de DNA sau DIICOT;",
        "ai dat deja o declarație și urmează o nouă audiere;",
        "situația ta procesuală s-a modificat pe parcursul dosarului.",
      ],
    },
    {
      h2: "De ce contează ce se întâmplă la prima audiere",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "Audierea este un act din " },
          { text: "faza de urmărire penală", to: "/servicii/urmarire-penala" },
          { text: ", iar declarația dată acum rămâne la dosar pe tot parcursul procesului." },
        ],
        [
          { text: "Prima declarație", bold: true },
          { text: " poate deveni o piesă importantă a dosarului. De aceea, înainte să răspunzi la întrebări, trebuie să înțelegi ce faptă este investigată, ce probe sunt cunoscute la acel moment și care este poziția ta procesuală." },
        ],
        [
          { text: "Pentru suspect și inculpat, legea recunoaște " },
          { text: "dreptul de a nu da declarații", bold: true },
          { text: " și dreptul de a se consulta cu avocatul înainte și în cursul audierii. Declarația este consemnată în scris, iar completările sau rectificările pot fi menționate înainte de semnare." },
        ],
        "Situația este diferită atunci când o persoană este audiată ca martor. Tocmai de aceea, nu tratez toate audierile după același șablon: mai întâi stabilim calitatea procesuală și abia apoi discutăm strategia potrivită situației concrete.",
      ],
    },
  ],
  faq: [
    {
      q: "Sunt obligat să mă prezint dacă am primit o citație?",
      a: "În principiu, o citație oficială nu trebuie ignorată. Obligațiile și consecințele diferă însă în funcție de calitatea în care ai fost chemat. Dacă ai primit o citație și nu înțelegi ce presupune, contactează-mă înainte de data audierii.",
    },
    {
      q: "Pot refuza să dau declarații?",
      a: "Dacă ești suspect sau inculpat, ai dreptul de a nu da nicio declarație și dreptul de a păstra tăcerea inclusiv cu privire la anumite întrebări. Pentru martori, regulile sunt diferite, astfel încât trebuie analizată separat calitatea în care ai fost citat.",
    },
    {
      q: "Pot vorbi cu avocatul înainte să răspund la întrebări?",
      a: "Dacă ești suspect sau inculpat, Codul de procedură penală prevede dreptul de a te consulta cu avocatul atât înainte, cât și în cursul audierii.",
    },
    {
      q: "Dacă declarația scrisă nu corespunde cu ceea ce am spus?",
      a: "Înainte de semnare, declarația trebuie verificată. Dacă sunt necesare completări, rectificări sau precizări, acestea pot fi consemnate în document.",
    },
    {
      q: "Cât costă asistența unui avocat la audiere?",
      a: "Onorariul depinde de situația concretă, urgență, instituția în fața căreia are loc audierea și complexitatea dosarului. Ofer o primă discuție fără niciun cost, pentru evaluarea situației. Sunați la +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "Codul de procedură penală - art. 83 și art. 108-110: drepturile suspectului și inculpatului, modul de audiere și consemnarea declarației.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const perchezitieDomiciliaraRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/perchezitie-domiciliara",
  altPath: "/en/services/home-search",
  roPath: "/servicii/perchezitie-domiciliara",
  title: "Avocat Percheziție Domiciliară București | Bogdan Lamatic",
  h1: "Avocat pentru percheziție domiciliară în București",
  description:
    "Avocat percheziție domiciliară București. Verific mandatul, te asist în timpul percheziției și protejez drepturile tale. Sună cât mai repede.",
  keywords: "avocat percheziție domiciliară, avocat percheziție bucurești",
  breadcrumbLabel: "Percheziție domiciliară",
  serviceName: "Avocat percheziție domiciliară București - Bogdan Lamatic",
  urgency: [
    "Poliția sau procurorii sunt la ușă cu un mandat de percheziție?",
    "- Solicită o legitimație persoanelor care se prezintă la ușa ta.",
    "- Citește cu atenție documentele înainte de semnare.",
    "- Nu încerca să împiedici fizic efectuarea percheziției.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane fizice și reprezentanți ai companiilor atunci când are loc o percheziție la domiciliu sau la sediul unei firme.`,
  ],
  sections: [
    {
      h2: "Percheziția are loc chiar acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Dacă este solicitat avocatul, începerea percheziției se amână până la sosirea acestuia, însă nu mai mult de 2 ore, cu excepțiile prevăzute de lege pentru situații urgente sau atunci când avocatul nu poate fi contactat.",
      ],
      callout: "Ai dreptul să contactezi un avocat !",
      calloutClassName: "font-semibold bg-white",
      cta: "Sună-mă imediat - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce fac pentru tine în cazul unei percheziții",
      bullets: [
        "Analizez mandatul de percheziție și verific ce loc, persoană și scop sunt indicate în acesta.",
        "Particip la percheziție, atunci când situația și timpul permit acest lucru.",
        "Te consiliez în timpul procedurii cu privire la drepturile și obligațiile tale.",
        "Urmăresc modul în care sunt identificate și ridicate obiectele sau înscrisurile.",
        "Verific procesul-verbal de percheziție și modul în care sunt descrise bunurile, documentele și operațiunile efectuate.",
        "Solicit consemnarea observațiilor sau obiecțiilor relevante, dacă apar nereguli.",
        "Analizez ulterior legalitatea actelor și a probelor obținute, pentru a stabili dacă există motive pentru formularea unor cereri sau excepții procesuale.",
      ],
      paragraphs: [
        "Codul prevede inclusiv că organul judiciar trebuie, în principiu, să se limiteze la ridicarea obiectelor și înscrisurilor care au legătură cu fapta cercetată, existând excepții pentru bunurile cu circulație sau deținere interzisă ori pentru cele susceptibile să aibă legătură cu alte infracțiuni urmărite din oficiu.",
      ],
    },
    {
      h2: "Situații în care mă poți contacta",
      bullets: [
        "percheziția este în desfășurare chiar acum;",
        "ai fost informat că urmează o percheziție;",
        "percheziția are loc la sediul firmei;",
        "sunt ridicate documente, bani, telefoane sau calculatoare;",
        "percheziția are legătură cu un dosar DNA sau DIICOT;",
        "nu înțelegi ce anume permite mandatul;",
        "percheziția s-a terminat și vrei să verifici procesul-verbal și bunurile ridicate.",
      ],
      paragraphs: [
        "Dacă au fost ridicate telefoane sau calculatoare și urmează examinarea datelor, vezi și pagina dedicată percheziției informatice.",
      ],
    },
    {
      h2: "Ce trebuie să știi în timpul unei percheziții domiciliare",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "Percheziția domiciliară se dispune în " },
          { text: "cadrul urmăririi penale", to: "/servicii/urmarire-penala" },
          { text: ", iar ceea ce se ridică acum poate influența întregul dosar." },
        ],
      ],
      bullets: [
        "Ai dreptul să primești o copie a mandatului. Înainte de începerea percheziției, organul judiciar se legitimează și, în condițiile obișnuite prevăzute de lege, înmânează o copie a mandatului persoanei la care se efectuează percheziția sau persoanei indicate de Cod. Există situații excepționale în care procedura poate începe înainte de aceste formalități.",
        "Poți solicita participarea unui avocat. Este un drept expres prevăzut de art. 159 CPP. Dacă soliciți avocatul, regula este amânarea începerii percheziției până la sosirea acestuia, în limita celor două ore prevăzute de lege și cu excepțiile legale.",
        "Există reguli privind ora începerii. În principiu, percheziția domiciliară nu poate fi începută înainte de 06:00 sau după 20:00. Codul prevede excepții pentru infracțiunea flagrantă și pentru localurile deschise publicului la acea oră.",
        "Verifică atent procesul-verbal. Este documentul prin care sunt consemnate operațiunile efectuate și bunurile sau înscrisurile ridicate. Orice diferență relevantă trebuie identificată înainte ca procedura să fie considerată încheiată.",
        "Ridicarea telefonului și percheziția telefonului nu sunt același lucru. Un telefon sau laptop poate fi ridicat în cadrul unei proceduri, dar percheziția informatică a datelor este reglementată distinct de art. 168 CPP și are propriile condiții de autorizare și efectuare.",
      ],
    },
  ],
  faq: [
    {
      q: "Pot cere să văd mandatul?",
      a: "Da. În procedura obișnuită, înainte de începerea percheziției se înmânează o copie a mandatului persoanei prevăzute de lege.",
    },
    {
      q: "Pot suna avocatul atunci când poliția este deja la ușă?",
      a: "Da. Codul prevede dreptul de a solicita participarea unui avocat la percheziție.",
    },
    {
      q: "Trebuie poliția să aștepte avocatul?",
      a: "Dacă soliciți prezența unui avocat, regula prevăzută de art. 159 este amânarea începerii până la sosirea acestuia, dar nu mai mult de două ore. Există însă excepții pentru situații urgente sau atunci când avocatul nu poate fi contactat.",
    },
    {
      q: "La ce oră poate începe percheziția?",
      a: "În principiu, între 06:00 și 20:00, cu excepțiile prevăzute de art. 159 CPP.",
    },
    {
      q: "Ce fac dacă percheziția s-a terminat deja?",
      a: "Păstrează mandatul, procesul-verbal și orice document primit și contactează-mă. Pot analiza modul în care s-a desfășurat procedura, obiectele ridicate și eventualele probleme de legalitate.",
    },
  ],
  resources: [
    {
      text: "Codul de procedură penală - art. 157-159 privind percheziția domiciliară.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Codul de procedură penală - art. 102 privind probele obținute nelegal.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const perchezitieInformaticaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/perchezitie-informatica",
  altPath: "/en/services/computer-search",
  roPath: "/servicii/perchezitie-informatica",
  title: "Avocat Percheziție Informatică București | Bogdan Lamatic",
  h1: "Avocat pentru percheziție informatică în București",
  description:
    "Avocat percheziție informatică București pentru telefon, laptop și date ridicate într-un dosar penal. Verific mandatul și procedura. Sună acum.",
  keywords: "avocat percheziție informatică, ridicare telefon, ridicare laptop, ridicare date informatice",
  breadcrumbLabel: "Percheziție informatică",
  serviceName: "Avocat percheziție informatică București - Bogdan Lamatic",
  urgency: [
    "Ți-au ridicat telefonul sau laptopul?",
    "- Faptul că ți-au ridicat un dispozitiv nu este același lucru cu percheziționarea datelor din el.",
    "- Cele două proceduri au reguli distincte.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane vizate de percheziții informatice și analizez legalitatea modului în care dispozitivele și datele sunt ridicate, copiate și examinate.`,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine",
      bullets: [
        "Analizez mandatul de percheziție informatică, inclusiv sistemul sau suportul vizat și scopul pentru care a fost autorizată procedura.",
        "Verific modul în care dispozitivul a fost ridicat și păstrat în raport cu actele dosarului.",
        "Te asist în legătură cu efectuarea percheziției informatice, în funcție de calitatea procesuală și etapa procedurii.",
        "Verific cine a efectuat operațiunile tehnice și cum au fost consemnate acestea.",
        "Analizez procesul-verbal, inclusiv sistemele vizate, activitățile efectuate și datele identificate.",
        "Verific dacă operațiunile efectuate corespund mandatului și condițiilor legale.",
        "Formulez cereri privind restituirea dispozitivelor, atunci când există temei legal și menținerea lor nu mai este necesară.",
        "Invoc eventualele probleme de legalitate ale probei, dacă analiza dosarului indică existența unor astfel de motive.",
      ],
      paragraphs: [
        "Codul prevede că percheziția informatică este efectuată de un specialist, în prezența procurorului sau a organului de cercetare penală, iar atunci când persoana are calitatea de suspect sau inculpat, art. 168 prevede efectuarea percheziției în prezența acesteia, cu aplicarea regulilor indicate de text.",
      ],
      cta: "Mi-au ridicat telefonul - vreau o evaluare",
    },
    {
      h2: "Situații în care mă poți contacta",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "ți-a fost ridicat telefonul în timpul unei percheziții;",
        "poliția sau procurorul ți-a ridicat laptopul ori calculatorul;",
        "ai fost informat că urmează percheziția informatică a dispozitivelor;",
        "au fost copiate date din telefon sau calculator;",
        "este vizat calculatorul sau serverul unei firme;",
        "sunt vizate conversații, documente, fotografii sau alte date personale;",
        "ai nevoie de restituirea dispozitivului;",
        "percheziția informatică face parte dintr-un dosar DIICOT, DNA sau altă anchetă penală.",
      ],
    },
    {
      h2: "Ce trebuie să știi despre telefonul sau laptopul ridicat",
      cardClassName: "bg-[#faf0e6]",
      callout:
        "Faptul că ți-au ridicat un dispozitiv nu este același lucru cu percheziționarea datelor din el.",
      bullets: [
        {
          bold: "Ridicarea dispozitivului nu este același lucru cu percheziția datelor.",
          rest: "În cursul urmăririi penale, cercetarea sistemului sau a suportului în condițiile art. 168 este supusă autorizării judiciare prevăzute de Cod.",
        },
        {
          bold: "Mandatul trebuie să identifice sistemul sau suportul vizat.",
          rest: "Încheierea prin care este autorizată percheziția trebuie să precizeze, între altele, scopul și sistemul informatic sau suportul de stocare care urmează să fie percheziționat.",
        },
        {
          bold: "Pot fi realizate copii ale datelor.",
          rest: "Dacă ridicarea obiectelor ar afecta grav desfășurarea activității persoanei care le deține, procurorul poate dispune, în condițiile legii, efectuarea unor copii care să servească drept mijloc de probă.",
        },
        {
          bold: "Operațiunile trebuie consemnate.",
          rest: "Procesul-verbal trebuie să descrie sistemele sau suporturile vizate, activitățile efectuate și datele informatice descoperite cu ocazia percheziției.",
        },
      ],
      paragraphs: [
        "Această documentare este importantă atunci când analizăm ulterior ce s-a făcut efectiv și dacă operațiunile au rămas în limitele procedurale aplicabile.",
      ],
    },
    {
      h2: "Ce este o percheziție informatică",
      paragraphs: [
        [
          { text: "Percheziția informatică este un procedeu probatoriu folosit în " },
          { text: "etapele urmăririi penale", to: "/servicii/urmarire-penala" },
          { text: "." },
        ],
        "Codul de procedură penală definește percheziția informatică drept procedeul prin care sunt cercetate, descoperite, identificate și strânse probe stocate într-un sistem informatic sau pe un suport de stocare, prin mijloace tehnice și proceduri care trebuie să asigure integritatea informațiilor.",
        "În cursul urmăririi penale, percheziția informatică este dispusă de judecătorul de drepturi și libertăți, la cererea procurorului, atunci când sunt îndeplinite condițiile prevăzute de art. 168 CPP.",
        "Această procedură poate viza, de exemplu:",
      ],
      bullets: [
        "telefoane;",
        "laptopuri și calculatoare;",
        "hard disk-uri;",
        "stick-uri USB;",
        "servere;",
        "alte suporturi care conțin date informatice.",
      ],
    },
  ],
  faq: [
    {
      q: "Îmi pot ridica telefonul sau laptopul?",
      a: "Da, un dispozitiv poate fi ridicat atunci când sunt îndeplinite condițiile legale și poate avea relevanță probatorie. Dacă ulterior nu mai este necesară păstrarea lui ca mijloc de probă și sunt îndeplinite condițiile legale, poate fi analizată posibilitatea restituirii.",
    },
    {
      q: "Dacă mi-au ridicat telefonul, pot verifica automat toate datele din el?",
      a: "Ridicarea telefonului și efectuarea unei percheziții informatice nu sunt același act. Pentru percheziția informatică în cursul urmăririi penale, art. 168 CPP prevede autorizarea judecătorului de drepturi și libertăți, la cererea procurorului. Trebuie verificat concret mandatul și ceea ce s-a făcut în dosar.",
    },
    {
      q: "Pot fi prezent la percheziția informatică?",
      a: "Dacă ai calitatea de suspect sau inculpat, art. 168 alin. (11) prevede efectuarea percheziției informatice în prezența ta, cu aplicarea corespunzătoare a dispozițiilor la care face trimitere textul legal.",
    },
    {
      q: "Percheziția trebuie făcută de un specialist?",
      a: "Da. Codul prevede efectuarea percheziției informatice de către un specialist care poate funcționa în cadrul organelor judiciare sau în afara acestora, în prezența procurorului sau a organului de cercetare penală. Legea permite și efectuarea acesteia de lucrători de poliție specializați, în condițiile art. 168 indice 1 CPP.",
    },
    {
      q: "Ce pot face dacă dispozitivul este esențial pentru activitatea firmei?",
      a: "Art. 168 prevede că, atunci când ridicarea obiectului ar afecta grav desfășurarea activității persoanei care îl deține, procurorul poate dispune efectuarea unor copii, în condițiile prevăzute de lege.",
    },
  ],
  resources: [
    {
      text: "Codul de procedură penală - art. 168 privind percheziția informatică.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Codul de procedură penală - art. 162 privind restituirea obiectelor ridicate.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Codul de procedură penală - art. 102 privind probele obținute nelegal.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const avocatDiicotRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/avocat-diicot",
  altPath: "/en/services/diicot-lawyer",
  roPath: "/servicii/avocat-diicot",
  title: "Avocat DIICOT București | Bogdan Lamatic",
  h1: "Avocat DIICOT în București pentru dosare de criminalitate organizată",
  description:
    "Avocat DIICOT București pentru audieri, percheziții și apărare în dosare de criminalitate organizată. Bogdan Lamatic - 18+ ani experiență penală.",
  keywords: "avocat diicot bucurești, avocat dosar diicot, avocat anchetă diicot",
  breadcrumbLabel: "Avocat DIICOT",
  serviceName: "Avocat DIICOT București - Bogdan Lamatic",
  urgency: [
    "Ai primit o citație de la DIICOT, a avut loc o percheziție sau o persoană apropiată a fost reținută într-un dosar DIICOT?",
    "Este important să înțelegi rapid ce se investighează, care este poziția ta în dosar și ce măsuri pot urma.",
  ],
  bio: [
    `${BIO_INTRO} Am experiență inclusiv în cauze complexe de white-collar crime și investigații penale.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine într-un dosar DIICOT",
      paragraphs: [
        "Un astfel de dosar poate cuprinde volume mari de probe, interceptări, date informatice, percheziții sau mai multe persoane cercetate în aceeași cauză.",
      ],
      bullets: [
        "Analizez actele și probele din dosar, inclusiv interceptări, percheziții, supravegheri tehnice și date informatice.",
        "Te asist la audieri și pregătesc împreună cu tine fiecare etapă importantă a anchetei.",
        "Verific legalitatea actelor de urmărire penală și identific eventualele probleme de procedură.",
        "Formulez apărări, cereri și obiecții în funcție de acuzație și de probele concrete.",
        "Contest măsurile preventive, atunci când există temei legal pentru revocare, înlocuire sau contestare.",
        "Coordonez strategia de apărare în dosarele cu mai mulți inculpați sau acuzații conexe.",
        "Te reprezint în camera preliminară și în instanță, dacă dosarul ajunge în faza de judecată.",
      ],
      cta: "Discută cu avocatul",
    },
    {
      h2: "Situații în care mă poți contacta",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "ai primit citație pentru audiere la DIICOT;",
        "procurorii sau poliția efectuează o percheziție;",
        "ți-au fost ridicate telefonul, laptopul sau alte dispozitive;",
        "ai fost informat că ai calitatea de suspect sau inculpat;",
        "o persoană apropiată a fost reținută;",
        "procurorul solicită o măsură preventivă;",
        "există sechestru asupra unor bunuri sau conturi;",
        "ai aflat că ești vizat într-un dosar în care sunt cercetate mai multe persoane.",
      ],
      paragraphs: [
        "Pentru o percheziție la domiciliu sau la sediul firmei, vezi și pagina dedicată percheziției domiciliare. Dacă sunt vizate telefoane, laptopuri sau alte sisteme informatice, vezi pagina dedicată percheziției informatice.",
      ],
    },
    {
      h2: "Ce este DIICOT și ce tipuri de dosare instrumentează",
      paragraphs: [
        "DIICOT este structura specializată din cadrul Parchetului de pe lângă Înalta Curte de Casație și Justiție care investighează infracțiunile atribuite prin lege competenței sale în zona criminalității organizate și terorismului.",
        "În funcție de faptele investigate și de condițiile prevăzute de lege, dosarele DIICOT pot privi, printre altele:",
      ],
      bullets: [
        "grupuri infracționale organizate;",
        "trafic de droguri;",
        "trafic de persoane;",
        "criminalitate informatică;",
        "terorism;",
        "trafic de arme;",
        "spălarea banilor atunci când există condițiile legale pentru competența DIICOT.",
      ],
    },
    {
      h2: "De ce un dosar DIICOT necesită o strategie construită de la început",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "Un dosar DIICOT parcurge " },
          { text: "aceleași etape ale urmăririi penale", to: "/servicii/urmarire-penala" },
          { text: ", însă cu un volum de probe mult mai mare." },
        ],
        "DIICOT are o competență specializată stabilită prin OUG nr. 78/2016 și prin alte dispoziții legale.",
        "În practică, într-un astfel de dosar pot exista simultan declarații ale mai multor persoane, date informatice, supraveghere tehnică, percheziții și probe financiare. Din acest motiv, o apărare eficientă nu înseamnă doar prezența avocatului la o audiere, ci evaluarea modului în care toate aceste elemente se leagă între ele.",
        "Strategia trebuie adaptată dosarului concret, probelor existente și etapei procedurale.",
      ],
    },
    {
      h2: "Dosarul tău implică?",
      links: [
        { label: "Trafic de droguri", to: "/servicii/cauze-penale-privind-droguri" },
        { label: "Spălare de bani", to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
        { label: "Percheziție informatică", to: "/servicii/perchezitie-informatica" },
        { label: "Grup infracțional" },
      ],
    },
  ],
  faq: [
    {
      q: "Ce înseamnă că am un „dosar DIICOT”?",
      a: "Înseamnă că dosarul este instrumentat de această structură specializată pentru una dintre infracțiunile sau situațiile date prin lege în competența sa. DIICOT nu instrumentează orice dosar penal.",
    },
    {
      q: "DIICOT investighează doar grupuri infracționale organizate?",
      a: "Nu. Competența sa include mai multe categorii de infracțiuni prevăzute de OUG nr. 78/2016 și de legi speciale.",
    },
    {
      q: "Poate fi verificată competența DIICOT?",
      a: "Da. Competența organului de urmărire penală face parte dintre aspectele juridice pe care le analizez în funcție de fapta cercetată, încadrarea juridică și circumstanțele dosarului.",
    },
    {
      q: "Ce fac dacă sunt chemat mâine la DIICOT?",
      a: "Nu aștepta momentul audierii pentru a discuta cu avocatul. Dacă este posibil, analiza situației trebuie făcută înainte să dai o declarație.",
    },
    {
      q: "Cât costă apărarea într-un dosar DIICOT?",
      a: "Onorariul depinde de complexitatea dosarului, stadiul procedurii, urgență și volumul activităților necesare. Ofer o primă discuție fără niciun cost, pentru evaluarea situației. Sunați la +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "OUG nr. 78/2016 privind organizarea și funcționarea DIICOT.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Codul penal - dispozițiile privind grupul infracțional organizat.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Codul de procedură penală - dispozițiile aplicabile urmăririi penale și administrării probelor.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const avocatDnaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/avocat-dna",
  altPath: "/en/services/dna-lawyer",
  roPath: "/servicii/avocat-dna",
  title: "Avocat DNA București | Bogdan Lamatic",
  h1: "Avocat DNA în București pentru dosare de corupție",
  description:
    "Avocat DNA București pentru audieri, percheziții și apărare în dosare de corupție. Bogdan Lamatic - 18+ ani experiență în drept penal.",
  keywords: "avocat dna, avocat dosar dna bucurești",
  breadcrumbLabel: "Avocat DNA",
  serviceName: "Avocat DNA București - Bogdan Lamatic",
  urgency: [
    "Ai primit o citație de la DNA, urmează o audiere sau a avut loc o percheziție?",
    "Într-un dosar de corupție, consecințele pot depăși riscul penal și pot afecta patrimoniul, activitatea profesională și reputația persoanei investigate.",
  ],
  bio: [
    `${BIO_INTRO} Am experiență inclusiv în cauze instrumentate de Direcția Națională Anticorupție.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine într-un dosar DNA",
      paragraphs: [
        "Întrebarea „este sau nu dosarul de competența DNA?” trebuie analizată pe actele și acuzațiile concrete, nu doar după titulatura infracțiunii.",
      ],
      bullets: [
        "Analizez acuzația, încadrarea juridică și situația procesuală.",
        "Verific aspectele privind competența DNA, acolo unde acestea sunt relevante pentru dosar.",
        "Te asist la audiere și pregătesc împreună cu tine etapele procesuale importante.",
        "Te asist în legătură cu percheziții, ridicări de înscrisuri sau dispozitive, atunci când astfel de acte au loc.",
        "Analizez probele și legalitatea administrării lor pe măsură ce acestea devin accesibile apărării.",
        "Construiesc apărarea privind elementele concrete ale acuzației, inclusiv în dosare privind mită, trafic de influență sau alte fapte aflate în competența DNA.",
        "Contest măsurile preventive și măsurile asigurătorii, atunci când există temei legal.",
        "Asigur reprezentarea în camera preliminară și în judecată, dacă dosarul ajunge în instanță.",
      ],
    },
    {
      h2: "Situații în care mă poți contacta",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "ai primit o citație de la DNA;",
        "ai fost informat că ești suspect sau inculpat;",
        "urmează să dai o declarație;",
        "are loc o percheziție la domiciliu, instituție sau sediul firmei;",
        "au fost ridicate documente, telefoane sau calculatoare;",
        "a fost instituit sechestru asupra unor bunuri;",
        "procurorul solicită o măsură preventivă;",
        "ești funcționar public, manager, antreprenor sau persoană cu funcție de decizie vizată într-un dosar de corupție.",
      ],
      cta: "Discută cu avocatul",
    },
    {
      h2: "De ce primele etape ale dosarului sunt importante",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "Dosarele DNA urmează " },
          { text: "regulile generale ale urmăririi penale", to: "/servicii/urmarire-penala" },
          { text: "." },
        ],
        [
          { text: "Într-o anchetă DNA, primele acte la care participă persoana cercetată pot include audierea, percheziția, ridicarea de înscrisuri sau bunuri și, în anumite situații, " },
          { text: "măsuri preventive ori asigurătorii", to: "/servicii/masuri-preventive" },
          { text: "." },
        ],
        "Fiecare dintre aceste acte trebuie analizat separat, dar și în contextul întregii strategii de apărare.",
        "Un răspuns dat la audiere, un document predat sau o poziție exprimată la începutul dosarului poate avea relevanță și în etapele ulterioare. Din acest motiv, recomand ca strategia să fie stabilită înainte de primul act procedural la care participi, atunci când acest lucru este posibil.",
      ],
    },
    {
      h2: "Ce este DNA și când poate avea competență într-un dosar",
      paragraphs: [
        "Direcția Națională Anticorupție este structura specializată de parchet cu competențe stabilite prin OUG nr. 43/2002 și legislația în materia faptelor de corupție.",
        "Competența DNA nu se stabilește doar după denumirea infracțiunii. Pot conta tipul faptei, valoarea implicată, prejudiciul, calitatea persoanei investigate și alte condiții prevăzute de lege.",
        "Printre criteriile prevăzute de art. 13 din OUG nr. 43/2002 se află:",
      ],
      bullets: [
        "o pagubă materială mai mare decât echivalentul în lei a 200.000 euro, în situațiile reglementate de text;",
        "o sumă sau un bun care formează obiectul infracțiunii de corupție cu o valoare mai mare decât echivalentul în lei a 10.000 euro;",
        "anumite categorii de persoane enumerate expres de lege, indiferent de valoarea implicată;",
        "pentru anumite infracțiuni expres prevăzute de art. 13 alin. (3), o pagubă mai mare decât echivalentul în lei a 1.000.000 euro.",
      ],
    },
  ],
  faq: [
    {
      q: "Care sunt pragurile valorice pentru competența DNA?",
      a: "OUG nr. 43/2002 stabilește mai multe criterii, nu un singur prag. Art. 13 prevede, în situațiile reglementate de text, pragul de 10.000 euro pentru valoarea obiectului anumitor infracțiuni de corupție, 200.000 euro pentru anumite prejudicii și 1.000.000 euro pentru anumite infracțiuni expres prevăzute la alin. (3).",
    },
    {
      q: "DNA investighează doar funcționari publici?",
      a: "Nu. Există situații în care competența este atrasă prin natura faptei sau prin pragurile prevăzute de lege, indiferent de calitatea persoanei. În alte situații, calitatea persoanei este ea însăși relevantă pentru competență.",
    },
    {
      q: "Dacă sunt cercetat pentru abuz în serviciu, dosarul aparține automat DNA?",
      a: "Nu. Nu este corect să stabilești competența doar după denumirea infracțiunii. Trebuie analizate condițiile legale aplicabile, inclusiv prejudiciul, calitatea persoanei și circumstanțele concrete ale cauzei.",
    },
    {
      q: "Pot veni cu avocat la audierea DNA?",
      a: "Dacă ai calitatea de suspect sau inculpat, ai dreptul la avocat și la consultarea acestuia înainte și în cursul audierii, în condițiile Codului de procedură penală.",
    },
    {
      q: "Cât costă apărarea într-un dosar DNA?",
      a: "Onorariul depinde de complexitatea și stadiul cauzei, urgență și activitatea efectiv necesară. Ofer o primă discuție fără niciun cost, pentru evaluarea situației. Sunați la +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "OUG nr. 43/2002 privind Direcția Națională Anticorupție - inclusiv art. 13 privind competența.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Legea nr. 78/2000 pentru prevenirea, descoperirea și sancționarea faptelor de corupție.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Codul de procedură penală.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

const PARENT_MP = {
  to: "/servicii/masuri-preventive",
  label: "măsuri preventive",
  breadcrumbLabel: "Măsuri preventive",
};

export const retinere24OreRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/retinere-24-ore",
  altPath: "/en/services/police-custody-24-hours",
  roPath: "/servicii/retinere-24-ore",
  title: "Avocat Reținere 24 Ore București | Bogdan Lamatic",
  h1: "Avocat pentru reținere 24 de ore în București",
  description:
    "Avocat pentru reținere 24 de ore în București. Asistență imediată la audieri și pregătirea apărării pentru măsura care urmează. 18+ ani experiență.",
  keywords:
    "avocat retinere 24 ore, avocat retinere bucuresti, asistenta avocat retinere, avocat urgent retinere",
  breadcrumbLabel: "Reținere 24 ore",
  serviceName: "Avocat reținere 24 ore București - Bogdan Lamatic",
  urgency: [
    "Ai fost reținut sau o persoană apropiată se află la Poliție ori Parchet?",
    "Reținerea este o măsură preventivă privativă de libertate care poate fi dispusă pentru cel mult 24 de ore.",
    "În acest interval pot avea loc audieri și acte procedurale care influențează măsura preventivă care urmează.",
  ],
  bio: [
    `${BIO_INTRO} Intervin în situații de reținere, atât la solicitarea persoanei reținute, cât și a familiei acesteia.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine în cazul reținerii",
      bullets: [
        "Intervin înainte de următoarea audiere.",
        "Verific legalitatea reținerii și actele disponibile.",
        "Stabilesc dacă și ce declarație este oportună procedural.",
        "Pregătesc din timp apărarea dacă urmează o propunere de arestare.",
      ],
      paragraphs: [
        "Un aspect important este anticiparea pasului următor.",
      ],
      cta: "A fost dispusă reținerea? - Sună-mă acum!",
    },
    {
      h2: "Ce îmi spui când mă contactezi pentru o reținere",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Dacă persoana reținută este un membru al familiei sau o persoană apropiată, mă poți contacta și tu.",
        "Spune-mi 3 lucruri:",
      ],
      bullets: [
        "Unde este persoana",
        "Când a fost reținută",
        "Ce urmează / ce informații ai primit",
      ],
      calloutAfterBullets: "Nu ai ordonanța sau toate actele?",
      calloutAfterBulletsCta: "Sună oricum.",
    },
    {
      h2: "Ce drepturi ai dacă ești reținut 24 de ore?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Faptul că ai fost reținut nu înseamnă că trebuie să răspunzi imediat la toate întrebările sau să iei singur decizii privind poziția ta în dosar.",
        "În cazul reținerii, Codul de procedură penală îți recunoaște mai multe drepturi importante.",
        [{ text: "Dacă tu sau o persoană apropiată ați fost reținuți, nu este nevoie să așteptați următoarea audiere pentru a contacta un avocat.", bold: true }],
      ],
      subsections: [
        {
          h3: "Ai dreptul să știi de ce ai fost reținut",
          paragraphs: [
            "Trebuie să ți se comunice, de îndată și într-o limbă pe care o înțelegi, infracțiunea de care ești suspectat și motivele pentru care a fost dispusă reținerea.",
          ],
        },
        {
          h3: "Ai dreptul să nu dai declarații",
          paragraphs: [
            "Înainte de audiere trebuie să fii informat că ai dreptul să nu faci nicio declarație, cu excepția informațiilor privind identitatea ta.",
            "Dacă alegi să dai declarații, ceea ce spui poate fi folosit ca probă împotriva ta.",
            "Decizia de a da sau nu o declarație trebuie analizată în funcție de situația concretă și de informațiile disponibile în acel moment.",
          ],
        },
        {
          h3: "Ai dreptul la avocat",
          paragraphs: [
            "Măsura reținerii poate fi luată numai după audierea suspectului sau inculpatului, în prezența unui avocat ales sau desemnat din oficiu.",
            "Dacă ai un avocat ales, ai dreptul să îl încunoștințezi personal sau să soliciți organului judiciar să îl contacteze. Avocatul are dreptul să comunice direct cu tine în condiții care să asigure confidențialitatea.",
          ],
        },
        {
          h3: "Ai dreptul să primești ordonanța de reținere",
          paragraphs: [
            "Reținerea se dispune prin ordonanță.",
            "Documentul trebuie să indice, printre altele, motivele reținerii, ziua și ora la care începe măsura și ziua și ora la care aceasta se termină, iar persoanei reținute trebuie să i se înmâneze un exemplar.",
          ],
        },
        {
          h3: "Ai dreptul să anunți o persoană apropiată",
          paragraphs: [
            "Imediat după reținere, persoana reținută are dreptul, în condițiile legii, să informeze personal sau să solicite informarea unui membru al familiei ori a unei alte persoane desemnate despre reținere și despre locul în care se află.",
          ],
        },
        {
          h3: "Dacă nu înțelegi limba română, ai dreptul la interpret",
          paragraphs: [
            "Persoanei care nu înțelege, nu se exprimă bine sau nu poate comunica în limba română trebuie să îi fie asigurată, în condițiile legii, posibilitatea de a beneficia gratuit de interpret.",
          ],
        },
      ],
      cta: "Sună acum - 031 632 01 83",
    },
    {
      h2: "Poți contesta reținerea de 24 de ore?",
      paragraphs: [
        "Da. Din punct de vedere juridic, împotriva ordonanței de reținere se formulează o plângere, iar aceasta trebuie făcută înainte de expirarea măsurii.",
        "Procedura depinde de cine a dispus reținerea.",
        [{ text: "Ai primit ordonanța de reținere? Trimite-mi documentul sau spune-mi exact când a început măsura.", bold: true }],
      ],
      subsections: [
        {
          h3: "Dacă reținerea a fost dispusă de organul de cercetare penală",
          paragraphs: [
            "Suspectul sau inculpatul poate formula plângere la procurorul care supraveghează urmărirea penală, înainte de expirarea reținerii.",
            "Procurorul trebuie să se pronunțe de îndată. Dacă constată că au fost încălcate dispozițiile legale privind luarea măsurii, dispune revocarea reținerii și punerea de îndată în libertate.",
          ],
        },
        {
          h3: "Dacă reținerea a fost dispusă de procuror",
          paragraphs: [
            "Plângerea se formulează, înainte de expirarea măsurii, la prim-procurorul parchetului sau, după caz, la procurorul ierarhic superior.",
          ],
        },
        {
          h3: "Ce trebuie verificat rapid",
          paragraphs: [
            "Într-o asemenea situație analizez:",
            "Pentru că reținerea poate dura maximum 24 de ore, utilitatea practică a plângerii depinde și de cât timp mai este disponibil până la expirarea măsurii.",
          ],
          bullets: [
            "ordonanța prin care a fost dispusă reținerea;",
            "motivele concrete invocate;",
            "condițiile legale pentru luarea măsurii;",
            "ora la care reținerea a început;",
            "timpul rămas până la expirarea măsurii;",
            "actele și informațiile disponibile în acel moment.",
          ],
        },
      ],
      cta: "Sună acum - 031 632 01 83",
    },
    {
      h2: "Cum se calculează cele 24 de ore de reținere?",
      paragraphs: [
        "Reținerea poate fi dispusă pentru cel mult 24 de ore, însă calculul nu trebuie făcut pur și simplu de la primul moment în care persoana a intrat în contact cu Poliția.",
        "Ordonanța de reținere trebuie să precizeze ziua și ora la care reținerea începe și ziua și ora la care se termină.",
        "În durata reținerii nu se include timpul strict necesar conducerii suspectului sau inculpatului la sediul organului judiciar.",
        "De asemenea, dacă persoana a fost adusă pentru audiere în baza unui mandat de aducere legal emis, perioada în care s-a aflat sub puterea mandatului de aducere nu se include în cele 24 de ore ale reținerii.",
        [{ text: "Dacă nu știi când expiră cele 24 de ore, trimite-mi ordonanța și verificăm exact situația procedurală.", bold: true }],
      ],
      subsections: [
        {
          h3: "Unde verifici când expiră reținerea?",
          paragraphs: [
            "Primul document care trebuie verificat este ordonanța de reținere.",
            "Aceasta trebuie să cuprindă:",
            "Persoana reținută trebuie să primească un exemplar al ordonanței.",
          ],
          bullets: [
            "ziua și ora începerii reținerii;",
            "ziua și ora încetării reținerii;",
            "motivele pentru care măsura a fost dispusă.",
          ],
        },
      ],
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite ordonanța pe WhatsApp",
    },
    {
      h2: "Ce urmează după reținere",
      paragraphs: [
        "Reținerea poate fi dispusă pentru cel mult 24 de ore, în condițiile prevăzute de Codul de procedură penală.",
        "După expirarea celor 24 de ore, persoana nu poate fi ținută în continuare în baza aceleiași măsuri de reținere.",
        [
          { text: "În funcție de dosar, poate intra în discuție " },
          { text: "o altă măsură preventivă", to: "/servicii/masuri-preventive" },
          { text: ". De aceea, strategia de apărare este preferabil să fie analizată înainte de luarea următoarei decizii." },
        ],
      ],
      links: [
        { label: "Arest preventiv - propunere, contestație și înlocuire", to: "/servicii/arest-preventiv" },
        { label: "Control judiciar - obligații, contestare și revocare", to: "/servicii/control-judiciar" },
        { label: "Arest la domiciliu - contestație, permisiuni și înlocuire", to: "/servicii/arest-la-domiciliu" },
        { label: "Avocat audiere Poliție sau Parchet", to: "/servicii/audiere-politie-parchet" },
      ],
    },
  ],
  faq: [
    {
      q: "Reținerea de 24 de ore poate fi prelungită?",
      a: "Nu poate fi prelungită aceeași măsură de reținere peste limita legală de 24 de ore. După expirarea acesteia, persoana nu poate rămâne privată de libertate în baza ordonanței de reținere expirate. Dacă se urmărește luarea unei alte măsuri preventive, trebuie urmată procedura prevăzută de lege pentru măsura respectivă.",
    },
    {
      q: "Cele 24 de ore încep din momentul în care mă ia Poliția?",
      a: "Nu neapărat. Ordonanța de reținere trebuie să indice ora exactă a începerii și încetării măsurii. Timpul strict necesar conducerii la sediul organului judiciar și, în condițiile legii, perioada petrecută sub puterea unui mandat de aducere nu intră în durata reținerii.",
    },
    {
      q: "Pot refuza să dau declarație dacă sunt reținut?",
      a: "Da. Înainte de audiere trebuie să ți se aducă la cunoștință dreptul de a nu face nicio declarație, cu excepția informațiilor privind identitatea. Dacă dai declarații, acestea pot fi folosite ca mijloace de probă împotriva ta.",
    },
    {
      q: "Pot vorbi cu avocatul înainte să dau declarație?",
      a: "Da. Persoana reținută are dreptul la avocat, iar avocatul are dreptul să comunice direct cu clientul în condiții care să asigure confidențialitatea. Măsura reținerii poate fi luată numai după audierea suspectului sau inculpatului în prezența avocatului ales sau numit din oficiu.",
    },
    {
      q: "Cum contest ordonanța de reținere?",
      a: "Calea prevăzută de art. 209 CPP este plângerea. Dacă reținerea a fost dispusă de organul de cercetare penală, plângerea se adresează procurorului care supraveghează urmărirea penală. Dacă a fost dispusă de procuror, plângerea se adresează prim-procurorului sau procurorului ierarhic superior. Plângerea trebuie făcută înainte de expirarea reținerii.",
    },
    {
      q: "Ce se întâmplă după expirarea celor 24 de ore?",
      a: "Persoana nu poate rămâne privată de libertate în baza aceleiași măsuri de reținere. În funcție de situația dosarului, poate fi pusă în libertate sau poate intra în discuție o altă măsură preventivă, cu respectarea procedurii legale aplicabile acesteia.",
    },
    {
      q: "Poate urma arestarea preventivă după reținerea de 24 de ore?",
      a: "Da, dacă sunt îndeplinite condițiile legale și procurorul formulează o propunere în acest sens. Pentru un inculpat reținut, Codul prevede că sesizarea judecătorului în vederea arestării preventive trebuie făcută cu cel puțin 6 ore înainte de expirarea reținerii.",
    },
    {
      q: "Poate familia să contacteze avocatul dacă persoana este reținută?",
      a: "Da. Un membru al familiei poate contacta avocatul chiar dacă nu are încă toate actele. Pentru prima evaluare sunt utile numele persoanei, locul unde se află, momentul aproximativ al reținerii și informațiile primite până atunci.",
    },
  ],
  resources: [
    { text: "Art. 202 CPP - scopul, condițiile generale și categoriile măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 209 CPP - reținerea.", href: CPP, linkLabel: "Legislație" },
    { text: "Codul de procedură penală.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_MP,
};

export const arestPreventivRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/arest-preventiv",
  altPath: "/en/services/pre-trial-detention",
  roPath: "/servicii/arest-preventiv",
  title: "Avocat Arest Preventiv București | Bogdan Lamatic",
  h1: "Avocat pentru arest preventiv în București",
  description:
    "Avocat arest preventiv București - apărare la propunerea de arestare, contestație, prelungire și înlocuirea măsurii. 18+ ani experiență.",
  keywords:
    "avocat arest preventiv, avocat arestare preventiva bucuresti, contestatie arest preventiv, inlocuire arest preventiv",
  breadcrumbLabel: "Arest preventiv",
  serviceName: "Avocat arest preventiv București - Bogdan Lamatic",
  urgency: [
    "Procurorul solicită arestarea preventivă sau măsura a fost deja dispusă?",
    "Arestarea preventivă este cea mai severă dintre măsurile preventive prevăzute de Codul de procedură penală.",
    "Apărarea trebuie pregătită în raport cu motivele concrete invocate, situația probatorie și posibilitatea aplicării unei măsuri mai puțin severe.",
  ],
  bio: [
    `${BIO_INTRO} Am reprezentat clienți în fața judecătorului de drepturi și libertăți, a judecătorului de cameră preliminară și a instanțelor de judecată în cauze privind privarea de libertate.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație ești acum?",
      subsections: [
        {
          h3: "Urmează propunerea de arestare?",
          paragraphs: [
            "Apărarea trebuie pregătită înainte de termen: motivele invocate de procuror, probele de la dosar și argumentele pentru o măsură mai puțin severă se analizează acum, nu după pronunțare.",
          ],
        },
        {
          h3: "Arestarea a fost deja dispusă?",
          paragraphs: [
            [
              { text: "Verificăm ce cale procedurală mai este deschisă: contestația, apărarea împotriva prelungirii, verificarea periodică a măsurii, revocarea sau înlocuirea cu " },
              { text: "o măsură mai ușoară", to: "/servicii/masuri-preventive" },
              { text: "." },
            ],
          ],
        },
      ],
      calloutAfterSubsections:
        "O persoană apropiată este reținută și urmează propunerea de arestare? Mă poți contacta tu chiar dacă nu ai toate actele dosarului.",
      ctaAfterSubsections: "Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez la o propunere de arestare preventivă",
      bullets: [
        "motivele concrete invocate pentru arestare;",
        "condițiile generale ale măsurilor preventive;",
        "condițiile speciale ale arestării preventive;",
        "probele relevante disponibile;",
        "existența riscurilor procesuale invocate;",
        "circumstanțele personale, familiale și profesionale;",
        "proporționalitatea măsurii;",
        "posibilitatea aplicării unei măsuri mai puțin severe.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Obiectivul apărării poate fi, în funcție de situația concretă: respingerea propunerii, " },
          { text: "aplicarea controlului judiciar", to: "/servicii/control-judiciar" },
          { text: ", " },
          { text: "măsura arestului la domiciliu", to: "/servicii/arest-la-domiciliu" },
          { text: " sau o altă soluție permisă de lege." },
        ],
      ],
    },
    {
      h2: "Ce trebuie să-mi spui când mă suni",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi 4 lucruri:"],
      bullets: [
        "persoana este reținută sau deja arestată?",
        "când este termenul?",
        "ce Parchet sau instanță are dosarul?",
        "ai încheierea, citația sau alte acte?",
      ],
      calloutAfterBullets: "Nu ai toate actele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
    },
    {
      h2: "În ce condiții poate fi dispusă arestarea preventivă?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Pe lângă condițiile generale ale măsurilor preventive prevăzute de art. 202 CPP, art. 223 CPP cere să existe probe din care rezultă suspiciunea rezonabilă că persoana a săvârșit o infracțiune și unul dintre cazurile de mai jos:",
      ],
      bullets: [
        {
          bold: "Sustragerea de la urmărirea penală sau de la judecată.",
          rest: "Se invocă riscul ca inculpatul să fugă, să se ascundă ori să nu se prezinte la chemările organelor judiciare. Apărarea arată legăturile stabile cu locuința, familia și activitatea profesională.",
        },
        {
          bold: "Influențarea probelor sau a martorilor.",
          rest: "Se susține riscul de a ascunde, distruge sau altera mijloace de probă ori de a determina un martor să nu spună adevărul. Contează dacă probele au fost deja administrate sau ridicate.",
        },
        {
          bold: "Presiuni asupra persoanei vătămate.",
          rest: "Se invocă riscul de a exercita presiuni asupra persoanei vătămate sau asupra membrilor familiei acesteia. Trebuie verificat dacă acest risc este susținut de date concrete din dosar.",
        },
        {
          bold: "Riscul săvârșirii unei noi infracțiuni.",
          rest: "Se ia în calcul pregătirea sau săvârșirea unei alte infracțiuni. Antecedentele și conduita procesuală au aici un rol determinant.",
        },
        {
          bold: "Pericolul pentru ordinea publică.",
          rest: "Se aplică în cazurile prevăzute de lege, prin raportare la gravitatea faptei, modul de comitere și circumstanțele personale. Nu este suficientă gravitatea abstractă a infracțiunii.",
        },
      ],
      calloutAfterBullets:
        "Chiar dacă un caz din art. 223 CPP este invocat, măsura trebuie să fie necesară și proporțională. Dacă scopul procesual poate fi atins prin control judiciar sau arest la domiciliu, arestarea preventivă nu se justifică.",
    },
    {
      h2: "Ce se întâmplă la termenul pentru propunerea de arestare preventivă?",
      bullets: [
        "procurorul formulează propunerea de arestare preventivă;",
        "dosarul ajunge la judecătorul de drepturi și libertăți competent;",
        "inculpatul este adus în fața judecătorului și este asistat de avocat;",
        "se discută în contradictoriu argumentele procurorului și ale apărării;",
        "judecătorul poate respinge propunerea sau poate dispune arestarea preventivă ori o măsură alternativă permisă de lege.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Dacă " },
          { text: "persoana este reținută", to: "/servicii/retinere-24-ore" },
          { text: ", sesizarea judecătorului cu propunerea de arestare preventivă trebuie făcută cu cel puțin 6 ore înainte de expirarea duratei reținerii. În practică, asta înseamnă că apărarea se pregătește în câteva ore." },
        ],
      ],
      cta: "Am termen pentru propunerea de arestare - Sună-mă acum",
    },
    {
      h2: "Cum contești arestarea preventivă și ce se poate obține?",
      paragraphs: [
        "Împotriva încheierii prin care s-a dispus, s-a prelungit sau s-a menținut arestarea preventivă se poate formula contestație, în condițiile art. 204-206 CPP.",
      ],
      bullets: [
        { bold: "Termenul este de 48 de ore.", rest: "Este un termen foarte scurt, iar depășirea lui închide această cale de atac." },
        {
          bold: "De când curge.",
          rest: "De la pronunțare, pentru cei prezenți, și de la comunicare, pentru cei care au lipsit la pronunțarea încheierii.",
        },
        {
          bold: "Cine soluționează.",
          rest: "Contestația se judecă de judecătorul de drepturi și libertăți sau de instanța ierarhic superioară, în funcție de etapa procesuală.",
        },
        {
          bold: "Ce poate decide instanța.",
          rest: "Poate respinge contestația și menține măsura sau o poate admite.",
        },
        {
          bold: "Ce poate însemna admiterea.",
          rest: "Poate duce la respingerea propunerii de arestare, la înlocuirea măsurii cu una mai ușoară și, după caz, la punerea în libertate.",
        },
      ],
      calloutAfterBullets:
        "Dacă ai primit deja încheierea, spune-mi cât mai exact data și ora pronunțării sau comunicării. Niciun rezultat nu poate fi garantat, dar termenul trebuie respectat.",
      calloutAfterBulletsCta: "Verifică termenul de 48 de ore",
    },
    {
      h2: "Cât poate dura arestarea preventivă și prelungirea",
      paragraphs: [
        "Arestarea preventivă este cea mai severă dintre măsurile preventive reglementate de Codul de procedură penală.",
        "În cursul urmăririi penale, măsura poate fi dispusă inițial pentru cel mult 30 de zile, iar prelungirile sunt supuse condițiilor și limitelor prevăzute de lege. Durata totală în această fază nu poate depăși 180 de zile.",
        "Regimul aplicabil în camera preliminară și în cursul judecății este distinct și presupune verificări periodice ale măsurii.",
        "Când procurorul cere prelungirea, apărarea se pregătește înainte de termen: se analizează dacă temeiurile inițiale subzistă, ce probe s-au administrat între timp și dacă au apărut împrejurări noi.",
      ],
    },
    {
      h2: "Revocare și înlocuire - două lucruri diferite",
      subsections: [
        {
          h3: "Revocarea",
          paragraphs: [
            "Se cere încetarea măsurii. Se invocă faptul că temeiurile care au determinat arestarea au încetat sau că au apărut împrejurări noi relevante pentru legalitatea ori necesitatea măsurii. Dacă cererea este admisă, persoana este pusă în libertate.",
          ],
        },
        {
          h3: "Înlocuirea",
          paragraphs: [
            "Nu se cere încetarea oricărei măsuri preventive. Se cere ca arestarea preventivă să fie înlocuită cu o măsură mai puțin severă, cum sunt arestul la domiciliu sau controlul judiciar, atunci când aceasta este suficientă pentru scopul procesual.",
          ],
        },
      ],
      calloutAfterSubsections:
        "Art. 242 CPP reglementează distinct revocarea și înlocuirea. Alegerea cererii potrivite depinde de etapa dosarului și de ce se poate demonstra concret.",
    },
    {
      h2: "Când poate fi înlocuit arestul preventiv cu arest la domiciliu sau control judiciar?",
      paragraphs: [
        "Art. 242 CPP permite înlocuirea arestării preventive cu o măsură mai ușoară dacă, după evaluarea împrejurărilor cauzei și a conduitei procesuale a inculpatului, această măsură este suficientă pentru realizarea scopului urmărit.",
        "În practică se argumentează pe conduita din dosar, pe probele deja administrate, pe stabilitatea locuinței și a familiei, pe starea de sănătate și pe orice element care arată că riscurile procesuale pot fi controlate fără detenție.",
      ],
      links: [
        { label: "Control judiciar - obligații, contestare și revocare", to: "/servicii/control-judiciar" },
        { label: "Arest la domiciliu - contestație, permisiuni și înlocuire", to: "/servicii/arest-la-domiciliu" },
        { label: "Reținere 24 ore - ce trebuie făcut imediat", to: "/servicii/retinere-24-ore" },
      ],
    },
  ],
  faq: [
    {
      q: "Poate fi respinsă propunerea de arestare preventivă?",
      a: "Da. Judecătorul de drepturi și libertăți poate respinge propunerea procurorului dacă nu sunt îndeplinite condițiile prevăzute de art. 202 și art. 223 CPP sau dacă măsura nu este proporțională, și poate dispune, după caz, o măsură mai puțin severă. Nicio soluție nu poate fi garantată.",
    },
    {
      q: "Cât durează soluționarea contestației?",
      a: "Contestațiile în materia măsurilor preventive se soluționează cu celeritate, în termenele scurte prevăzute de art. 204-206 CPP. Durata concretă depinde de instanță și de etapa procesuală, dar aceste cauze au regim de urgență.",
    },
    {
      q: "Poate familia angaja avocatul pentru persoana arestată?",
      a: "Da. Un membru al familiei sau o persoană apropiată poate contacta avocatul și poate încheia contractul de asistență juridică. Mandatul se confirmă ulterior de persoana arestată, la primul contact.",
    },
    {
      q: "Ce se întâmplă dacă procurorul cere prelungirea arestării?",
      a: "Cererea se judecă înainte de expirarea duratei măsurii. Apărarea poate arăta că temeiurile inițiale nu mai subzistă, că probele au fost deja administrate sau că o măsură mai ușoară este suficientă.",
    },
    {
      q: "Când poate fi revocat arestul preventiv?",
      a: "Atunci când au încetat temeiurile care au determinat luarea măsurii sau au apărut împrejurări noi din care rezultă că măsura nu mai este legală ori necesară, în condițiile art. 242 CPP.",
    },
    {
      q: "Cine poate dispune arestarea preventivă?",
      a: "Arestarea preventivă este în competența judecătorului sau a instanței, în funcție de etapa procesuală. Procurorul poate formula propunerea, însă nu poate dispune el însuși măsura.",
    },
  ],
  resources: [
    { text: "Art. 202 CPP - condițiile generale ale măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 223 și urm. CPP - arestarea preventivă.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 204-206 CPP - căile de atac privind măsurile preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 241-242 CPP - încetarea de drept, revocarea și înlocuirea măsurilor.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  parent: PARENT_MP,
};

export const controlJudiciarRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/control-judiciar",
  altPath: "/en/services/judicial-control",
  roPath: "/servicii/control-judiciar",
  title: "Avocat Control Judiciar București | Bogdan Lamatic",
  h1: "Avocat pentru control judiciar în București",
  description:
    "Avocat control judiciar București - obligații, plângere, modificarea restricțiilor, revocare și înlocuirea măsurii. Inclusiv control judiciar pe cauțiune.",
  keywords:
    "avocat control judiciar, control judiciar bucuresti, contestatie control judiciar, control judiciar pe cautiune",
  breadcrumbLabel: "Control judiciar",
  serviceName: "Avocat control judiciar București - Bogdan Lamatic",
  urgency: [
    "Ai restricții privind deplasările, contactul cu anumite persoane sau activitatea profesională?",
    "Controlul judiciar nu presupune detenția, dar poate avea un impact real asupra vieții de zi cu zi.",
    "Trebuie analizat dacă obligațiile sunt necesare și proporționale și dacă există motive pentru modificarea, revocarea sau înlocuirea măsurii.",
  ],
  bio: [
    `${BIO_INTRO} Analizez obligațiile impuse prin controlul judiciar și posibilitățile procedurale de modificare a acestora.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce vrei să rezolvi?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Alege situația care te interesează și mergi direct la explicații:",
      ],
      links: [
        { label: "Am încălcat o obligație / am fost chemat pentru explicații", to: "#incalcare" },
        { label: "Vreau să pot pleca din țară sau din localitate", to: "#deplasare" },
        { label: "Vreau modificarea unei obligații", to: "#modificare-revocare" },
        { label: "Vreau revocarea controlului judiciar", to: "#revocare" },
        { label: "Am primit ordonanța și vreau să o contest", to: "#contestare" },
      ],

    },
    {
      h2: "Ce obligații pot fi impuse prin control judiciar",
      paragraphs: [
        "Conținutul controlului judiciar este reglementat de art. 215 CPP, care distinge între obligațiile ce se aplică în toate cazurile și obligațiile suplimentare pe care organul judiciar le poate impune.",
        "Pe durata controlului judiciar trebuie să respecți trei obligații de bază:",
      ],
      bullets: [
        "să te prezinți la organul judiciar ori de câte ori ești chemat;",
        "să informezi imediat dacă îți schimbi locuința;",
        "să te prezinți la organul de poliție desemnat cu supravegherea, conform programului stabilit.",
      ],
      paragraphsAfterBullets: [
        "În plus, organul judiciar poate impune și alte obligații, precum restricții privind deplasările, contactul cu anumite persoane sau exercitarea anumitor activități.",
      ],
      calloutAfterBullets: "Obligațiile exacte trebuie verificate în actul prin care măsura a fost dispusă.",
    },

    {
      h2: "Ce analizez în cazul controlului judiciar",
      paragraphs: [
        "Controlul judiciar nu presupune privarea de libertate, însă impune obligații care trebuie respectate pe toată durata măsurii.",
        "Faptul că o obligație a fost stabilită nu înseamnă că ea trebuie să rămână automat neschimbată indiferent de evoluția dosarului. Analizez dacă:",
      ],
      bullets: [
        "măsura mai este necesară;",
        "obligațiile sunt proporționale;",
        "au apărut împrejurări noi;",
        "anumite restricții pot fi modificate;",
        "există temei pentru revocarea sau înlocuirea măsurii.",
      ],
      cta: "Analizează obligațiile din controlul judiciar",
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Pentru o evaluare rapidă a situației tale, trimite-mi:",
      ],
      bullets: [
        "ordonanța sau încheierea prin care s-a dispus măsura;",
        "lista obligațiilor stabilite;",
        "actul prin care măsura a fost prelungită, dacă există;",
        "problema concretă pe care vrei să o rezolvi.",
      ],
      calloutAfterBullets: "Nu ai toate actele? Trimite documentul pe care îl ai.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "WhatsApp - Trimite ordonanța",
    },
    {
      h2: "Pot pleca din țară sau din localitate dacă sunt sub control judiciar?",
      id: "deplasare",
      paragraphs: [
        "Răspunsul depinde de obligația concretă stabilită în cazul tău. Controlul judiciar nu interzice automat orice deplasare: trebuie citită exact obligația din ordonanța procurorului sau din încheierea judecătorului, pentru a vedea dacă este vorba despre o limită teritorială, despre o interdicție de a părăsi țara ori despre o obligație de informare.",
        "Verific apoi cine a dispus măsura și care este organul judiciar competent să analizeze cererea, pentru că de acest lucru depinde procedura aplicabilă și documentele care trebuie atașate.",
        [
          { text: "Când situația o permite, se poate solicita modificarea obligației ori încuviințarea unei deplasări, cu justificarea motivului (activitate profesională, tratament medical, situație familială). Regulile generale privind " },
          { text: "regimul măsurilor preventive", to: "/servicii/masuri-preventive" },
          { text: " se aplică și aici." },
        ],
      ],
      calloutAfterBullets:
        "Ai nevoie să pleci din țară sau din localitate? Trimite-mi ordonanța și verific obligația exactă.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actul pe WhatsApp",
    },
    {
      h2: "Cum pot fi modificate sau eliminate obligațiile?",
      id: "modificare-revocare",
      paragraphs: [
        "În funcție de situație, poate fi solicitată modificarea sau încetarea unor obligații ori revocarea - numită frecvent „ridicarea controlului judiciar”.",
        "Modificarea privește doar obligațiile: măsura rămâne în vigoare, dar o obligație poate fi schimbată sau eliminată atunci când nu mai este necesară ori nu mai este proporțională cu situația actuală. Cererea se adresează organului judiciar competent, în funcție de etapa procesuală.",
      ],
      bullets: [
        { bold: "Programul de prezentare la Poliție:", rest: "poate fi adaptat atunci când intră în conflict cu programul de muncă sau cu un tratament medical." },
        { bold: "Limita teritorială:", rest: "poate fi extinsă când activitatea profesională sau situația familială o impune." },
        { bold: "Interdicția privind anumite activități:", rest: "poate fi reanalizată dacă nu mai este justificată de stadiul dosarului." },
      ],
      paragraphsAfterBullets: [
        "Fiecare cerere trebuie susținută cu documente: contract de muncă, delegație, adeverințe medicale, dovezi privind situația familială. O cerere motivată doar prin nemulțumire nu are șanse reale.",
      ],
      cta: "Vreau să modific o obligație",
    },
    {
      h2: "Revocarea controlului judiciar",
      id: "revocare",
      paragraphs: [
        "Revocarea înseamnă încetarea controlului judiciar, nu trecerea la o altă măsură. Art. 242 CPP tratează distinct revocarea și înlocuirea măsurilor preventive, iar pe această pagină interesează prima situație: măsura ia sfârșit.",
        "Revocarea se dispune atunci când au încetat temeiurile care au justificat luarea măsurii ori au apărut împrejurări noi din care rezultă nelegalitatea măsurii. Practic, trebuie arătat concret ce s-a schimbat de la momentul luării măsurii:",
      ],
      bullets: [
        "probele administrate între timp au schimbat datele cauzei;",
        "riscul avut în vedere inițial nu mai există (martori audiați, probe ridicate, dosar finalizat în urmărirea penală);",
        "obligațiile au fost respectate constant pe o perioadă îndelungată;",
        "situația personală, profesională sau medicală s-a modificat, cu dovezi;",
        "au apărut împrejurări din care rezultă nelegalitatea măsurii.",
      ],
      paragraphsAfterBullets: [
        "Cererea de revocare se analizează de organul judiciar competent în etapa procesuală în care se află dosarul și se soluționează pe baza situației actuale, nu a celei existente la luarea măsurii.",
      ],
      cta: "Vreau să verific dacă am temei pentru revocare",
    },
    {
      h2: "Ce se întâmplă dacă încalci obligațiile controlului judiciar?",
      id: "incalcare",
      paragraphs: [
        [
          { text: "O abatere nu înseamnă automat arestare. Riscul unei măsuri mai severe apare, în condițiile legii, în cazul încălcării cu rea-credință a obligațiilor controlului judiciar.", bold: true },
        ],
        [
          { text: "Atunci când încălcarea este săvârșită cu rea-credință, controlul judiciar poate fi înlocuit, în condițiile legii, cu " },
          { text: "arest la domiciliu", to: "/servicii/arest-la-domiciliu" },
          { text: " sau cu arestare preventivă. Decizia nu este automată: organul judiciar analizează conduita concretă și explicațiile date." },
        ],
        "Contează foarte mult contextul: o neprezentare cauzată de o problemă medicală sau de o comunicare greșită a datei nu este același lucru cu o sustragere deliberată de la supraveghere. De aceea explicațiile trebuie pregătite cu documente, nu improvizate.",
      ],
      calloutAfterBullets: "Ai încălcat o obligație? Sună înainte de următoarea audiere.",
      cta: "Sună acum - 031 632 01 83",
    },
    {
      h2: "Cât durează controlul judiciar și cum se prelungește?",
      paragraphs: [
        "Regimul duratei este prevăzut de art. 215¹ CPP și diferă în funcție de faza procesuală. Nu există o singură limită valabilă pentru tot procesul.",
      ],
      subsections: [
        {
          h3: "În cursul urmăririi penale",
          paragraphs: [
            "Măsura se dispune pentru o perioadă determinată și poate fi prelungită de procuror, prin ordonanță, pentru perioade succesive de cel mult 60 de zile fiecare, atunci când se constată că este în continuare necesară. Ordonanța de prelungire se comunică inculpatului și poate fi contestată în condițiile legii. Pentru această fază legea prevede o limită totală proprie.",
          ],
        },
        {
          h3: "În procedura de cameră preliminară și în cursul judecății",
          paragraphs: [
            "Aici măsura nu se „prelungește” în același mod: judecătorul de cameră preliminară sau instanța verifică periodic dacă subzistă temeiurile care au justificat luarea măsurii și dispune, după caz, menținerea sau revocarea acesteia.",
          ],
        },
        {
          h3: "În cursul judecății în primă instanță",
          paragraphs: [
            [
              { text: "Pentru această fază legea prevede o limită totală distinctă, de până la 5 ani calculați de la momentul trimiterii în judecată. Fiecare verificare periodică este un moment în care se poate cere modificarea obligațiilor ori revocarea, dacă situația s-a schimbat față de " },
              { text: "momentul luării măsurii preventive", to: "/servicii/masuri-preventive" },
              { text: "." },
            ],
          ],
        },
      ],
      calloutAfterSubsections: "Ai primit un act de prelungire? Termenul de contestare este scurt.",
      ctaAfterSubsections: "Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Contestarea măsurii și termenele",
      id: "contestare",
      paragraphs: [
        "Primul lucru care trebuie stabilit este cine a dispus controlul judiciar, pentru că de acest lucru depinde procedura și termenul aplicabil. Cele două situații nu se confundă.",
      ],
      subsections: [
        {
          h3: "Dacă măsura a fost dispusă de procuror",
          paragraphs: [
            "Împotriva ordonanței procurorului se face plângere, într-un termen scurt de 48 de ore de la comunicarea ordonanței, potrivit art. 213 CPP. Plângerea se depune la judecătorul de drepturi și libertăți de la instanța căreia i-ar reveni competența să judece cauza în primă instanță.",
            "Judecătorul verifică legalitatea și temeinicia măsurii și poate, în condițiile legii, să mențină controlul judiciar, să revoce măsura sau să modifice obligațiile impuse. De aceea plângerea nu este o simplă formalitate: este momentul în care obligațiile pot fi restrânse sau eliminate.",
          ],
        },
        {
          h3: "Dacă măsura a fost dispusă de judecător sau de instanță",
          paragraphs: [
            "Aici mecanismul depinde de etapa procesuală. Încheierea prin care judecătorul de drepturi și libertăți ori judecătorul de cameră preliminară dispune sau menține măsura poate fi atacată cu contestație în 48 de ore de la pronunțare sau de la comunicare, iar contestația se judecă de instanța superioară.",
            [
              { text: "În cursul judecății, măsura este verificată periodic de instanță, iar încheierile pot fi atacate potrivit regulilor din art. 204-206 CPP. Aceleași termene scurte se aplică și atunci când se discută " },
              { text: "propunerea de arestare preventivă", to: "/servicii/arest-preventiv" },
              { text: " sau o măsură mai severă." },
            ],
          ],
        },
      ],
      calloutAfterSubsections:
        "Spune-mi data exactă la care ți-a fost comunicat actul: termenul de 48 de ore curge repede.",
      ctaAfterSubsections: "Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Controlul judiciar pe cauțiune",
      paragraphs: [
        "Controlul judiciar pe cauțiune este reglementat distinct de Codul de procedură penală și presupune, pe lângă obligațiile specifice controlului judiciar, constituirea unei cauțiuni în condițiile stabilite de lege.",
        [
          { text: "Într-o asemenea situație analizez, după caz: condițiile măsurii, oportunitatea acesteia în raport cu alte măsuri, obligațiile impuse, cauțiunea, situația materială relevantă și posibilitatea folosirii unei soluții mai puțin severe atunci când cadrul legal permite această argumentație, inclusiv în cazurile care pornesc de la " },
          { text: "măsura reținerii de 24 de ore", to: "/servicii/retinere-24-ore" },
          { text: "." },
        ],
      ],
    },

  ],
  faq: [
    {
      q: "Pot pleca din țară dacă sunt sub control judiciar?",
      a: "Depinde de obligația concretă din ordonanță sau încheiere. Dacă a fost stabilită interdicția de a părăsi teritoriul ori o limită teritorială, deplasarea presupune o cerere adresată organului judiciar competent, cu justificarea motivului. Trimite-mi actul și verific obligația exactă.",
    },
    {
      q: "Ce se întâmplă dacă nu mă prezint la Poliție?",
      a: "Neprezentarea la organul de poliție desemnat cu supravegherea este o încălcare a obligațiilor. Contează motivul și dovezile: o problemă medicală documentată se analizează diferit de o sustragere deliberată. Sună-mă înainte de a da explicații.",
    },
    {
      q: "Ce fac dacă am încălcat accidental una dintre obligații?",
      a: "O abatere nu duce automat la o măsură mai severă: riscul apare, în condițiile legii, în cazul încălcării cu rea-credință. Strânge dovezile care explică situația și nu da declarații înainte de a discuta cu un avocat.",
    },
    {
      q: "Cât timp poate dura controlul judiciar?",
      a: "Durata diferă în funcție de faza procesuală. În urmărirea penală măsura se dispune pe o perioadă determinată și poate fi prelungită cu perioade de cel mult 60 de zile fiecare. În cursul judecății în primă instanță legea prevede o limită totală distinctă, de până la 5 ani de la trimiterea în judecată.",
    },
    {
      q: "Se poate ridica controlul judiciar înainte de terminarea dosarului?",
      a: "Da. Se poate cere revocarea măsurii, adică încetarea acesteia, atunci când au încetat temeiurile care au justificat-o ori au apărut împrejurări noi, potrivit art. 242 CPP. Alternativ, se poate cere doar modificarea obligațiilor. Ambele cereri trebuie susținute cu documente.",
    },
    {
      q: "Poate controlul judiciar deveni arest la domiciliu sau arest preventiv?",
      a: "Da, în condițiile legii, măsura poate fi înlocuită cu una mai severă atunci când obligațiile sunt încălcate cu rea-credință sau apar temeiuri noi. Înlocuirea nu este automată, iar conduita concretă și explicațiile date cântăresc decisiv.",
    },
  ],

  resources: [
    { text: "Art. 211-215¹ CPP - controlul judiciar și durata măsurii.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 216-217 CPP - controlul judiciar pe cauțiune.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 213 CPP - calea de atac împotriva controlului judiciar dispus de procuror.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 242 CPP - revocarea și înlocuirea măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "WhatsApp - Trimite ordonanța / încheierea",

  parent: PARENT_MP,
};


export const arestLaDomiciliuRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/arest-la-domiciliu",
  altPath: "/en/services/house-arrest",
  roPath: "/servicii/arest-la-domiciliu",
  title: "Avocat Arest la Domiciliu București | Bogdan Lamatic",
  h1: "Avocat pentru arest la domiciliu în București",
  description:
    "Avocat arest la domiciliu București - contestație, cereri de părăsire a imobilului, revocare, înlocuire cu control judiciar. 18+ ani experiență.",
  keywords:
    "avocat arest la domiciliu, arest la domiciliu bucuresti, contestatie arest la domiciliu, inlocuire arest la domiciliu, permisiune parasesire domiciliu",
  breadcrumbLabel: "Arest la domiciliu",
  serviceName: "Avocat arest la domiciliu București - Bogdan Lamatic",
  urgency: [
    "Ești în arest la domiciliu sau această măsură urmează să fie decisă?",
    "Arestul la domiciliu îți limitează libertatea și poate afecta direct munca, familia și activitățile de zi cu zi.",
    "Dacă procurorul solicită asta, dacă ești deja în arest la domiciliu sau dacă vrei înlocuirea măsurii cu control judiciar, trebuie analizate rapid situația dosarului, motivele măsurii și opțiunile procedurale disponibile.",
  ],
  bio: [
    `${BIO_INTRO} Asist clienți atât înainte de luarea măsurii, cât și după dispunerea acesteia.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Te pot ajuta dacă",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "procurorul solicită arest la domiciliu;",
        "procurorul solicită arestarea preventivă și vrei susținerea unei măsuri mai puțin severe;",
        "arestul la domiciliu a fost deja dispus și vrei să îl contești;",
        "ai nevoie să părăsești domiciliul pentru muncă, tratament medical sau o altă situație justificată;",
        "vrei revocarea sau înlocuirea arestului la domiciliu;",
        "urmează prelungirea sau verificarea măsurii;",
        "ai încălcat sau există riscul să fi încălcat una dintre obligații.",
      ],
    },
    {
      h2: "În ce situație te afli acum?",
      subsections: [
        {
          h3: "Procurorul solicită arestarea preventivă",
          paragraphs: [
            "Arestul la domiciliu poate deveni relevant ca alternativă mai puțin severă atunci când condițiile legale sunt îndeplinite și circumstanțele concrete permit susținerea unei asemenea soluții.",
          ],
        },
        {
          h3: "Arestul la domiciliu a fost deja dispus",
          bullets: [
            "motivele pentru care a fost luată măsura;",
            "actele și probele relevante;",
            "proporționalitatea măsurii;",
            "termenul pentru contestație;",
            "posibilitatea revocării;",
            "posibilitatea înlocuirii cu control judiciar sau control judiciar pe cauțiune.",
          ],
          cta: "☎ Sună acum - 031 632 01 83",
          ctaIcon: false,
        },
        {
          h3: "Ai nevoie să ieși din domiciliu",
          paragraphs: [
            "În anumite situații, legea permite solicitarea unei autorizări pentru părăsirea temporară a imobilului, inclusiv pentru muncă, studii, procurarea mijloacelor esențiale de existență sau alte interese legitime temeinic justificate.",
          ],
          ctaWhatsApp: true,
          ctaWhatsAppLabel: "Trimite încheierea pentru analiză",
        },
        {
          h3: "Ai încălcat sau crezi că ai încălcat măsura",
          paragraphs: [
            "Nu presupune că orice abatere are automat aceeași consecință.",
            "Trebuie verificat exact ce s-a întâmplat, ce obligație era stabilită, dacă exista o autorizare și în ce condiții a avut loc situația.",
            "Încălcarea cu rea-credință a măsurii sau a obligațiilor poate conduce, în condițiile legii, la înlocuirea arestului la domiciliu cu arestarea preventivă.",
            "Dacă ai fost chemat pentru explicații, discută cu avocatul înainte de următoarea declarație.",
          ],
          callout: "Ai încălcat o obligație? Sună înainte de următoarea audiere.",
          calloutClassName: "font-semibold bg-white",
          cta: "☎ Sună acum",
          ctaIcon: false,
        },
      ],
    },
    {
      h2: "Ce analizez în cazul arestului la domiciliu",
      paragraphs: [
        "Arestul la domiciliu este o măsură privativă de libertate. Nu trebuie tratat ca o simplă variantă \"mai comodă\" a arestării preventive.",
        "În funcție de situație, analizez:",
      ],
      bullets: [
        "dacă sunt îndeplinite condițiile legale pentru măsură;",
        "motivele concrete invocate de procuror sau instanță;",
        "situația probatorie relevantă;",
        "gravitatea și circumstanțele acuzației;",
        "riscurile procesuale invocate;",
        "conduita procesuală;",
        "situația familială;",
        "activitatea profesională;",
        "starea de sănătate;",
        "proporționalitatea măsurii;",
        "dacă o măsură mai puțin severă poate fi suficientă;",
        "dacă au apărut împrejurări noi care justifică revocarea sau înlocuirea.",
      ],
      paragraphsAfterBullets: [
        "Codul de procedură penală prevede că, la aprecierea arestului la domiciliu, se ține seama inclusiv de gradul de pericol al infracțiunii, scopul măsurii, sănătatea, vârsta, situația familială și alte împrejurări privind persoana inculpatului.",
      ],
      cta: "Analizează situația arestului la domiciliu",
    },
    {
      h2: "Ce trebuie să-mi spui când mă contactezi",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Pentru o primă evaluare rapidă, spune-mi:",
      ],
      bullets: [
        "dacă ești deja în arest la domiciliu sau urmează un termen;",
        "când a fost dispusă măsura;",
        "când este următorul termen;",
        "ce Parchet sau instanță are dosarul;",
        "dacă ai fost anterior reținut sau arestat preventiv;",
        "ce problemă vrei să rezolvi imediat.",
      ],
      paragraphsAfterBullets: [
        [{ text: "Dacă le ai, trimite-mi:", bold: true }],
      ],
      bulletsAfterBullets: [
        "încheierea prin care s-a dispus arestul la domiciliu;",
        "citația;",
        "încheierea de prelungire sau menținere;",
        "documentele referitoare la obligațiile impuse;",
        "cererile sau răspunsurile primite anterior.",
      ],
      calloutAfterBullets: "Nu ai toate actele?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite încheierea pe WhatsApp",
    },
    {
      h2: "Ce este arestul la domiciliu?",
      paragraphs: [
        "Arestul la domiciliu este o măsură preventivă privativă de libertate.",
        "În esență, persoana față de care s-a dispus măsura are obligația de a nu părăsi imobilul în care locuiește fără permisiunea organului judiciar competent, cu excepțiile prevăzute de lege, și trebuie să respecte restricțiile stabilite prin încheiere.",
        [
          { text: "Arestul la domiciliu este diferit de " },
          { text: "controlul judiciar", to: "/servicii/control-judiciar" },
          { text: ", care este o măsură preventivă neprivativă de libertate." },
        ],
        [
          { text: "Este diferit și de " },
          { text: "arestarea preventivă", to: "/servicii/arest-preventiv" },
          { text: ", deoarece măsura se execută în imobilul stabilit, nu într-un centru de reținere și arestare preventivă." },
        ],
      ],
    },
    {
      h2: "În ce condiții poate fi dispus arestul la domiciliu?",
      paragraphs: [
        "Arestul la domiciliu poate fi dispus de judecătorul de drepturi și libertăți, judecătorul de cameră preliminară sau instanța de judecată, în funcție de etapa procesului.",
        "Pentru luarea măsurii trebuie îndeplinite condițiile prevăzute de lege, inclusiv cele la care face trimitere art. 218 CPP, iar măsura trebuie să fie necesară și suficientă pentru realizarea scopului procesual urmărit.",
        "La evaluare contează situația concretă, nu doar denumirea infracțiunii. Pot deveni relevante:",
      ],
      bullets: [
        "gravitatea concretă a acuzației;",
        "situația probatorie;",
        "existența unui risc de sustragere;",
        "riscul de influențare a martorilor sau probelor;",
        "conduita procesuală;",
        "antecedentele;",
        "situația familială și profesională;",
        "starea de sănătate;",
        "posibilitatea ca scopul procesual să fie realizat prin această măsură în locul arestării preventive.",
      ],
      paragraphsAfterBullets: [
        "Legea prevede și situații în care arestul la domiciliu nu poate fi dispus, inclusiv în anumite cauze privind infracțiuni asupra unui membru de familie și în cazul unei condamnări definitive anterioare pentru infracțiunea de evadare.",
      ],
    },
    {
      h2: "Poate fi dispus arestul la domiciliu în locul arestării preventive?",
      paragraphs: [
        "Da, dacă sunt îndeplinite condițiile legale și judecătorul apreciază că măsura mai puțin severă este suficientă în raport cu situația concretă.",
        "Tocmai de aceea, dacă procurorul solicită arestarea preventivă, apărarea nu trebuie să se limiteze la argumentul \"să nu fie arestat\".",
        "Trebuie analizat dacă există argumente concrete pentru:",
      ],
      bullets: [
        "respingerea propunerii;",
        "control judiciar;",
        "control judiciar pe cauțiune;",
        "arest la domiciliu.",
      ],
      paragraphsAfterBullets: [
        "În evaluarea unei măsuri mai puțin severe sunt relevante împrejurările concrete ale cauzei și conduita procesuală a inculpatului. Art. 242 CPP permite înlocuirea unei măsuri preventive cu una mai ușoară atunci când aceasta este suficientă pentru realizarea scopului măsurii preventive.",
      ],
    },
    {
      h2: "Ce obligații ai în arest la domiciliu?",
      paragraphs: [
        "Principala obligație este să nu părăsești imobilul în care locuiești fără permisiunea organului judiciar, în afara situațiilor permise de lege.",
        "În plus, pe durata măsurii trebuie:",
      ],
      bullets: [
        "să te prezinți în fața organelor judiciare ori de câte ori ești chemat;",
        "să nu comunici cu persoanele indicate de lege sau stabilite prin încheiere, cum pot fi persoana vătămată, martorii, experții, alți participanți ori alte persoane stabilite de organul judiciar.",
      ],
      paragraphsAfterBullets: [
        "Obligațiile concrete trebuie verificate întotdeauna în încheierea prin care a fost dispusă măsura.",
        "Nu presupune că regulile aplicabile altei persoane aflate în arest la domiciliu sunt identice cu ale tale.",
      ],
    },
    {
      h2: "Poți ieși din casă dacă ești în arest la domiciliu?",
      paragraphs: [
        "Da, dar numai în situațiile și condițiile prevăzute de lege.",
      ],
      subsections: [
        {
          h3: "Pentru prezentarea la Poliție, Parchet sau instanță",
          paragraphs: [
            "Poți părăsi imobilul pentru a te prezenta în fața organelor judiciare atunci când ești chemat.",
          ],
        },
        {
          h3: "Pentru muncă",
          paragraphs: [
            "La cererea scrisă și motivată a inculpatului, organul judiciar competent poate permite părăsirea imobilului pentru prezentarea la locul de muncă, pentru o perioadă determinată și în condițiile stabilite prin încheiere.",
            "Faptul că ai un loc de muncă nu înseamnă că poți pleca automat din domiciliu.",
            "Este necesară analiza situației și, de regulă, o cerere motivată.",
          ],
        },
        {
          h3: "Pentru școală sau pregătire profesională",
          paragraphs: [
            "Legea permite formularea unei cereri și pentru participarea la cursuri de învățământ sau pregătire profesională, dacă sunt îndeplinite condițiile legale.",
          ],
        },
        {
          h3: "Pentru procurarea mijloacelor esențiale de existență",
          paragraphs: [
            "Poate fi solicitată permisiunea și pentru procurarea mijloacelor esențiale de existență.",
            "Trebuie explicat concret de ce deplasarea este necesară și de ce interesul invocat nu poate fi realizat rezonabil în alt mod.",
          ],
        },
        {
          h3: "Pentru alte motive justificate",
          paragraphs: [
            "Codul permite autorizarea părăsirii imobilului și în alte situații temeinic justificate, atunci când acest lucru este necesar pentru realizarea unor drepturi sau interese legitime.",
          ],
        },
      ],
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Ai nevoie să ieși din domiciliu? Trimite încheierea",
    },
    {
      h2: "Pot merge la medic sau la spital dacă sunt în arest la domiciliu?",
      paragraphs: [
        "Pentru o consultație, investigație sau procedură medicală planificată, situația trebuie analizată din timp și, dacă este necesar, trebuie solicitată permisiunea organului judiciar.",
        "În cazul unei situații urgente și pentru motive întemeiate, legea permite părăsirea imobilului fără autorizare prealabilă pe durata strict necesară, cu obligația informării imediate a autorității desemnate cu supravegherea și a organului judiciar competent.",
        "O urgență reală nu trebuie confundată cu o deplasare care putea fi planificată și autorizată anterior.",
      ],
      callout: "Dacă situația medicală este previzibilă, discută cu avocatul înainte.",
      calloutClassName: "font-semibold bg-white",
    },
    {
      h2: "Cum se obține permisiunea de a părăsi domiciliul?",
      paragraphs: [
        "Cererea trebuie să fie scrisă și motivată.",
        "În funcție de motiv, pot fi utile documente precum:",
      ],
      bullets: [
        "adeverință de la angajator;",
        "contract de muncă;",
        "programul de lucru;",
        "programare medicală;",
        "acte medicale;",
        "dovada cursurilor sau activității educaționale;",
        "documente care justifică situația personală invocată.",
      ],
      paragraphsAfterBullets: [
        "Cererea trebuie să arate clar: motivul deplasării, data, intervalul orar, destinația, necesitatea concretă, eventual traseul relevant și documentele care susțin solicitarea.",
        "Nu există o aprobare automată. Organul judiciar decide în funcție de situația concretă.",
      ],
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite cererea pe WhatsApp",
    },
    {
      h2: "Poți purta brățară electronică în arest la domiciliu?",
      paragraphs: [
        "Da. Organul judiciar poate dispune ca inculpatul aflat în arest la domiciliu să poarte permanent un sistem electronic de supraveghere.",
        "Existența sau inexistența unei asemenea măsuri trebuie verificată în actele și dispozițiile aplicabile cazului concret.",
      ],
    },
    {
      h2: "Cum este verificată respectarea arestului la domiciliu?",
      paragraphs: [
        "Autoritatea desemnată cu supravegherea verifică periodic respectarea măsurii și a obligațiilor impuse.",
        "În acest scop, legea permite organului de poliție să pătrundă în imobilul în care se execută arestul la domiciliu fără consimțământul inculpatului sau al persoanelor care locuiesc împreună cu acesta, pentru verificarea respectării măsurii.",
        "Dacă sunt constatate încălcări, acestea sunt sesizate organului judiciar competent.",
      ],
    },
    {
      h2: "Ce se întâmplă dacă încalci arestul la domiciliu?",
      subsections: [
        {
          h3: "Încălcarea cu rea-credință poate duce la arestare preventivă",
          paragraphs: [
            "Dacă inculpatul încalcă cu rea-credință măsura sau obligațiile stabilite, judecătorul ori instanța poate dispune, în condițiile legii, înlocuirea arestului la domiciliu cu arestarea preventivă. Același risc procedural există și în ipoteza prevăzută de lege privind săvârșirea cu intenție a unei noi infracțiuni.",
            "Nu orice situație trebuie tratată automat ca fiind o încălcare cu rea-credință. Circumstanțele concrete contează.",
          ],
        },
        {
          h3: "Părăsirea neautorizată poate avea și consecințe penale",
          paragraphs: [
            "Codul penal include, în condițiile prevăzute de art. 285, încălcarea de către persoana aflată în arest la domiciliu a obligației de a nu părăsi imobilul ori nerespectarea itinerarului sau condițiilor de deplasare în sfera infracțiunii de evadare.",
            "Dacă ai părăsit deja domiciliul sau ai depășit condițiile unei autorizări, situația trebuie analizată imediat, înainte de declarații sau explicații date fără consultarea avocatului.",
          ],
        },
      ],
      cta: "Ai o problemă privind respectarea măsurii? Sună acum",
    },
    {
      h2: "Cum contești arestul la domiciliu?",
      paragraphs: [
        "Încheierea prin care se dispune asupra unei măsuri preventive poate fi atacată prin contestație în condițiile aplicabile etapei procesuale.",
        "Pentru încheierile privind măsurile preventive:",
      ],
      subsections: [
        {
          h3: "În cursul urmăririi penale",
          paragraphs: [
            "Este relevant art. 204 CPP.",
          ],
        },
        {
          h3: "În camera preliminară",
          paragraphs: [
            "Este relevant art. 205 CPP.",
          ],
        },
        {
          h3: "În cursul judecății",
          paragraphs: [
            "Este relevant art. 206 CPP.",
          ],
        },
      ],
      paragraphsAfterBullets: [
        "În aceste situații, Codul prevede termenul de 48 de ore de la pronunțare sau, după caz, de la comunicare.",
        "De aceea trebuie verificat imediat: ce instanță a pronunțat încheierea, data și ora pronunțării, dacă ai fost prezent, momentul comunicării și etapa în care se află procesul.",
        "Dacă ai primit deja încheierea, trimite-mi documentul și spune-mi când ți-a fost comunicat.",
      ],
      cta: "Verifică termenul pentru contestație",
    },
    {
      h2: "Cât durează arestul la domiciliu?",
      subsections: [
        {
          h3: "În cursul urmăririi penale",
          paragraphs: [
            "Arestul la domiciliu poate fi luat inițial pentru cel mult 30 de zile.",
            "Poate fi prelungit dacă se mențin temeiurile care au determinat măsura sau au apărut temeiuri noi, fiecare prelungire neputând depăși 30 de zile.",
            "În cursul urmăririi penale, durata maximă a arestului la domiciliu este de 180 de zile.",
            "Propunerea procurorului pentru prelungire trebuie înaintată judecătorului, împreună cu dosarul, cu cel puțin 5 zile înainte de expirarea măsurii.",
          ],
        },
        {
          h3: "În camera preliminară și în cursul judecății",
          paragraphs: [
            "Regimul este diferit.",
            "În aceste faze, măsura poate fi dispusă pentru perioade de cel mult 30 de zile, fiind supusă verificării periodice prevăzute de Codul de procedură penală și regulilor privind durata maximă aplicabile în etapa respectivă.",
          ],
        },
      ],
    },
    {
      h2: "Cum te aperi la o propunere de prelungire a arestului la domiciliu?",
      paragraphs: [
        "Prelungirea nu ar trebui tratată ca o formalitate.",
        "Analizez:",
      ],
      bullets: [
        "dacă se mențin efectiv motivele inițiale;",
        "dacă procurorul invocă împrejurări noi;",
        "ce s-a schimbat de la momentul luării măsurii;",
        "conduita persoanei pe durata arestului la domiciliu;",
        "respectarea tuturor obligațiilor;",
        "evoluția probelor;",
        "durata deja executată;",
        "situația familială și profesională;",
        "dacă o măsură mai puțin severă este suficientă.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "În funcție de situație, apărarea poate urmări: " },
          { text: "respingerea propunerii de prelungire", bold: true },
          { text: "; " },
          { text: "revocarea măsurii", bold: true },
          { text: "; " },
          { text: "înlocuirea cu control judiciar", bold: true },
          { text: " (vezi și " },
          { text: "pagina de control judiciar", to: "/servicii/control-judiciar" },
          { text: "); " },
          { text: "înlocuirea cu control judiciar pe cauțiune", bold: true },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Când poate fi revocat arestul la domiciliu?",
      paragraphs: [
        "Revocarea și înlocuirea nu sunt același lucru.",
      ],
      subsections: [
        {
          h3: "Revocarea",
          paragraphs: [
            "Măsura preventivă poate fi revocată atunci când au încetat temeiurile care au determinat-o sau au apărut împrejurări noi din care rezultă nelegalitatea măsurii.",
            "În practică, trebuie arătat concret ce s-a schimbat de la momentul luării măsurii: probe noi, martori audiați, dosar finalizat, situație personală modificată sau alte împrejurări relevante.",
          ],
        },
        {
          h3: "Înlocuirea",
          paragraphs: [
            "Arestul la domiciliu poate fi înlocuit cu o măsură preventivă mai ușoară dacă sunt îndeplinite condițiile pentru acea măsură și, după evaluarea împrejurărilor concrete și a conduitei procesuale, aceasta este considerată suficientă.",
            [
              { text: "În practică, obiectivul poate fi înlocuirea arestului la domiciliu cu " },
              { text: "control judiciar", to: "/servicii/control-judiciar" },
              { text: " sau cu control judiciar pe cauțiune." },
            ],
          ],
        },
      ],
    },
    {
      h2: "Se scade arestul la domiciliu din pedeapsă?",
      paragraphs: [
        "Da.",
        "Durata arestului la domiciliu se deduce din pedeapsa aplicată, o zi de arest la domiciliu fiind echivalată cu o zi din pedeapsă.",
      ],
    },
    {
      h2: "Ai nevoie de ajutor pentru arestul la domiciliu?",
      bullets: [
        "urmează să se decidă o măsură preventivă;",
        "ești deja în arest la domiciliu;",
        "vrei să contești măsura;",
        "ai nevoie să mergi la muncă sau la medic;",
        "vrei modificarea condițiilor;",
        "urmează prelungirea;",
        "vrei revocarea sau înlocuirea cu control judiciar;",
        "ai încălcat sau există riscul să fi încălcat măsura.",
      ],
      paragraphsAfterBullets: [
        "Spune-mi ce s-a întâmplat și verificăm ce opțiuni procedurale există.",
      ],
      cta: "☎ Sună acum",
    },
  ],
  
  faq: [
    {
      q: "Pot merge la serviciu dacă sunt în arest la domiciliu?",
      a: "Nu automat. Poate fi solicitată, prin cerere scrisă și motivată, permisiunea de a părăsi imobilul pentru prezentarea la locul de muncă, pentru o perioadă determinată. Cererea trebuie aprobată de organul judiciar competent.",
    },
    {
      q: "Pot merge la medic?",
      a: "Pentru consultații sau tratamente programate este recomandată solicitarea prealabilă a permisiunii, dacă deplasarea nu este deja permisă. Pentru situații urgente și motive întemeiate există regula specială prevăzută de art. 221 alin. (7) CPP, cu obligația informării imediate a autorităților competente.",
    },
    {
      q: "Pot ieși la cumpărături?",
      a: "Nu există un drept general de a părăsi domiciliul pentru cumpărături. Legea permite solicitarea unei autorizări inclusiv pentru procurarea mijloacelor esențiale de existență, dacă sunt îndeplinite condițiile și organul judiciar aprobă cererea.",
    },
    {
      q: "Pot primi persoane în domiciliu?",
      a: "Trebuie respectate interdicțiile privind comunicarea cu persoanele prevăzute în lege și în încheierea prin care a fost dispusă măsura. Pentru a stabili dacă poți primi o anumită persoană trebuie verificat conținutul exact al obligațiilor tale.",
    },
    {
      q: "Poliția poate intra în locuință pentru verificare?",
      a: "Da. Pentru verificarea respectării arestului la domiciliu și a obligațiilor impuse, Codul permite organului de poliție să pătrundă în imobil fără consimțământul persoanei aflate sub măsură sau al celor care locuiesc împreună cu aceasta.",
    },
    {
      q: "Este obligatorie brățara electronică?",
      a: "Nu în toate cazurile. Organul judiciar poate dispune purtarea permanentă a unui sistem electronic de supraveghere.",
    },
    {
      q: "Ce se întâmplă dacă ies din casă fără permisiune?",
      a: "Situația poate avea consecințe serioase. Încălcarea cu rea-credință poate conduce la înlocuirea arestului la domiciliu cu arestarea preventivă, iar părăsirea neautorizată poate ridica și probleme în raport cu infracțiunea de evadare prevăzută de Codul penal.",
    },
    {
      q: "Poate familia să contacteze avocatul?",
      a: "Da. Dacă o persoană apropiată este în arest la domiciliu sau urmează un termen privind măsura, familia poate contacta avocatul și poate transmite informațiile și documentele disponibile.",
    },
  ],
  resources: [
    { text: "Art. 202 CPP - scopul și condițiile generale ale măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 204-206 CPP - contestația împotriva încheierilor privind măsurile preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 218 CPP - condițiile generale ale arestului la domiciliu.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 219-220 CPP - luarea măsurii.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 221 CPP - conținutul și obligațiile arestului la domiciliu.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 222 CPP - durata și prelungirea arestului la domiciliu.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 241-242 CPP - încetarea de drept, revocarea și înlocuirea măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 285 Cod penal - evadarea.", href: CP, linkLabel: "Legislație" },
  ],
  contactText: "Bogdan Lamatic - avocat drept penal, București. Telefon: 031 632 01 83",
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite încheierea pe WhatsApp",
  parent: PARENT_MP,
};

/* ============================================================
   Subservicii - pagina-pilon Criminalitate economică
   ============================================================ */

const L241 = "https://legislatie.just.ro/Public/DetaliiDocument/239926";

const PARENT_CE = {
  to: "/servicii/criminalitate-economica",
  label: "criminalitate economică",
  breadcrumbLabel: "Criminalitate economică",
};

export const evaziuneFiscalaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/evaziune-fiscala",
  altPath: "/en/services/tax-evasion",
  roPath: "/servicii/evaziune-fiscala",
  title: "Avocat Evaziune Fiscală București | Bogdan Lamatic",
  h1: "Avocat evaziune fiscală în București",
  description:
    "Avocat evaziune fiscală București. Apărare în dosare penale de evaziune fiscală, control ANAF, sechestru și prejudiciu. 18+ ani experiență. Sună acum.",
  keywords:
    "avocat evaziune fiscală bucurești, dosar evaziune fiscală, apărare evaziune fiscală, avocat ANAF",
  breadcrumbLabel: "Evaziune fiscală",
  serviceName: "Avocat evaziune fiscală București - Bogdan Lamatic",
  urgency: [
    "Ai primit o sesizare penală după un control ANAF sau ai fost chemat la Parchet într-un dosar de evaziune fiscală?",
    "Actele contabile, explicațiile date inspectorilor și prima declarație în fața organelor de urmărire penală pot influența direct modul în care este construit dosarul.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane fizice, administratori și societăți în dosare penale de evaziune fiscală, de la sesizarea făcută în urma inspecției fiscale până la soluționarea cauzei.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Alege situația care descrie cel mai bine etapa în care te afli. De aici pornește apărarea."],
      subsections: [
        {
          h3: "Ai fost chemat la Poliție sau Parchet într-un dosar de evaziune fiscală",
          paragraphs: [
            "Înainte să te prezinți, trebuie să știi în ce calitate ești audiat, ce faptă este cercetată și ce documente stau la baza acuzației. Declarația dată acum rămâne la dosar pe tot parcursul procesului.",
          ],
        },
        {
          h3: "A avut loc un control ANAF sau Antifraudă",
          paragraphs: [
            "Raportul de inspecție fiscală și procesul-verbal întocmit de Antifraudă sunt de regulă actele care declanșează sesizarea penală. Modul în care au fost formulate explicațiile date inspectorilor influențează dosarul.",
          ],
        },
        {
          h3: "Au avut loc percheziții sau ridicări de documente",
          paragraphs: [
            "Verific temeiul percheziției, ce a fost ridicat efectiv și cum au fost consemnate actele, pentru că aceste documente devin principalele probe ale acuzării.",
          ],
        },
        {
          h3: "A fost calculat un prejudiciu fiscal",
          paragraphs: [
            "Cuantumul prejudiciului influențează încadrarea juridică, limitele de pedeapsă și măsurile asigurătorii. Modul de calcul poate fi contestat prin obiecțiuni și expertiză.",
          ],
        },
        {
          h3: "S-a pus sechestru pe conturi sau bunuri",
          paragraphs: [
            "Măsurile asigurătorii pot fi contestate, iar întinderea lor poate fi analizată în raport cu prejudiciul reținut în dosar.",
          ],
        },
      ],
      ctaAfterSubsections: "Am un dosar de evaziune fiscală - vreau o evaluare",
    },
    {
      h2: "Ce analizez imediat într-un dosar de evaziune fiscală",
      bullets: [
        "Raportul de inspecție fiscală și sesizarea penală, pentru a identifica ce faptă este reținută concret.",
        "Dacă operațiunile invocate se încadrează în vreuna dintre faptele prevăzute de Legea 241/2005 sau reprezintă o diferență de interpretare fiscală.",
        "Realitatea operațiunilor contestate: documente, livrări, plăți și fluxuri financiare.",
        "Modul de calcul al prejudiciului și oportunitatea unei expertize contabile sau fiscale.",
        "Atribuțiile efective de decizie și documentele semnate, pentru a stabili cine răspunde și pentru ce.",
        "Măsurile asigurătorii instituite și motivele pentru care pot fi contestate.",
      ],
    },
    {
      h2: "Ce trebuie să-mi trimiți pentru prima evaluare",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi ce s-a întâmplat și în ce etapă este dosarul."],
      paragraphsAfterBullets: [[{ text: "Dacă le ai, trimite-mi:", bold: true }]],
      bulletsAfterBullets: [
        "raportul de inspecție fiscală;",
        "sesizarea penală sau ordonanța primită;",
        "citația;",
        "decizia de impunere;",
        "documentele contabile relevante.",
      ],
      calloutAfterBullets: "Nu ai toate actele?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce este evaziunea fiscală și când o problemă fiscală devine penală",
      paragraphs: [
        "Evaziunea fiscală este sustragerea de la plata obligațiilor fiscale prin faptele descrise limitativ în Legea 241/2005. O problemă fiscală devine penală doar atunci când conduita se suprapune pe una dintre aceste fapte și există intenția de sustragere.",
        [
          { text: "Un control care stabilește sume suplimentare de plată nu echivalează automat cu o infracțiune. De aceea, primul pas într-un dosar de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: " este să delimitezi obligația fiscală de acuzația penală." },
        ],
      ],
    },
    {
      h2: "Ce fapte pot constitui evaziune fiscală",
      subsections: [
        {
          h3: "Venituri sau operațiuni care nu apar în evidențele contabile",
          paragraphs: [
            "Omisiunea evidențierii, în tot sau în parte, a operațiunilor comerciale efectuate ori a veniturilor realizate este una dintre faptele reținute cel mai frecvent.",
          ],
        },
        {
          h3: "Cheltuieli și operațiuni considerate fictive",
          paragraphs: [
            "Evidențierea unor cheltuieli care nu au la bază operațiuni reale sau a unor operațiuni fictive presupune să se dovedească faptul că prestația ori livrarea nu a existat în realitate.",
          ],
        },
        {
          h3: "Documente și evidențe contabile contestate de organele de anchetă",
          paragraphs: [
            "Alterarea, distrugerea sau ascunderea documentelor de evidență contabilă, precum și ținerea unor evidențe duble sunt incriminate distinct.",
          ],
        },
        {
          h3: "Ascunderea bunului sau a sursei impozabile",
          paragraphs: [
            "Această formă presupune o conduită de disimulare a bunului ori a sursei impozabile sau taxabile, nu simpla neplată a unei obligații declarate.",
          ],
        },
      ],
      calloutAfterSubsections: "Art. 9 din Legea 241/2005 rămâne nucleul incriminării evaziunii fiscale.",
    },
    {
      h2: "Care este diferența dintre evaziune fiscală, o eroare fiscală și un litigiu fiscal",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Eroarea fiscală apare atunci când o operațiune este înregistrată greșit sau o obligație este calculată eronat, fără intenția de sustragere. Consecințele rămân, în principiu, fiscale.",
        "Litigiul fiscal apare atunci când contribuabilul și organul fiscal interpretează diferit o normă fiscală. Aceste dispute se soluționează în contestație și în contencios administrativ.",
        "Evaziunea fiscală presupune o faptă dintre cele prevăzute de lege, săvârșită cu intenția de a te sustrage de la plata obligațiilor fiscale. Această delimitare este, de multe ori, chiar miezul apărării.",
      ],
    },
    {
      h2: "Cum se stabilește prejudiciul într-un dosar de evaziune fiscală",
      subsections: [
        {
          h3: "Raportul ANAF și calculul prejudiciului",
          paragraphs: [
            "Punctul de plecare este calculul organului fiscal. Verific ce operațiuni au fost luate în considerare, ce perioadă acoperă și dacă au fost incluse accesorii care nu ar trebui să facă parte din prejudiciul penal.",
          ],
        },
        {
          h3: "Expertiza contabilă",
          paragraphs: [
            "În dosarele cu volum mare de documente, expertiza contabilă judiciară poate schimba semnificativ cuantumul reținut. Formulez obiective de expertiză și obiecțiuni la raportul depus.",
          ],
        },
        {
          h3: "Cum poate fi contestat prejudiciul",
          paragraphs: [
            "Prejudiciul poate fi contestat prin documente justificative, prin expertiză și prin cereri de administrare de probe, atât în urmărirea penală, cât și în faza de judecată.",
          ],
        },
      ],
    },
    {
      h2: "Ce efect poate avea achitarea prejudiciului într-un dosar de evaziune fiscală",
      paragraphs: [
        "Legea 241/2005 prevede consecințe specifice în funcție de momentul acoperirii prejudiciului și de cuantumul acestuia, de la cauze de nepedepsire până la reducerea limitelor de pedeapsă.",
        "Efectul concret trebuie analizat pe dosarul tău, raportat la încadrarea juridică reținută și la etapa procesuală. Plata făcută fără o analiză prealabilă poate fi interpretată nefavorabil.",
      ],
    },
    {
      h2: "Sechestrul pe conturi, imobile și alte bunuri în dosarele de evaziune fiscală",
      paragraphs: [
        "Măsurile asigurătorii sunt frecvente în aceste dosare, pentru garantarea recuperării prejudiciului. Ele pot viza conturi bancare, imobile, autovehicule sau părți sociale.",
        "Verific dacă măsura a fost dispusă cu respectarea condițiilor legale, dacă valoarea bunurilor indisponibilizate este proporțională cu prejudiciul reținut și formulez contestație atunci când există motive.",
      ],
    },
    {
      h2: "Ce se întâmplă după începerea unui dosar penal pentru evaziune fiscală",
      subsections: [
        {
          h3: "Urmărirea penală",
          paragraphs: [
            "Se strâng documentele contabile, se dispun percheziții sau ridicări de acte, se audiază administratorii, contabilii și partenerii comerciali.",
          ],
        },
        {
          h3: "Expertiza și administrarea probelor",
          paragraphs: [
            "În majoritatea dosarelor se dispune o expertiză contabilă. Este momentul în care apărarea poate influența decisiv cuantumul prejudiciului și încadrarea juridică.",
          ],
        },
        {
          h3: "Trimiterea în judecată sau clasarea",
          paragraphs: [
            "La final, procurorul poate dispune clasarea, renunțarea la urmărirea penală sau trimiterea în judecată. Fiecare soluție se pregătește prin cereri și memorii depuse la timp.",
          ],
        },
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de evaziune fiscală",
      bullets: [
        "Pornesc de la documente, nu de la concluziile raportului fiscal, și reconstruiesc fluxul real al operațiunilor.",
        "Delimitez obligația fiscală de fapta penală și susțin, atunci când este cazul, caracterul civil sau fiscal al litigiului.",
        "Atac modul de calcul al prejudiciului prin obiecțiuni și expertiză.",
        "Contest măsurile asigurătorii disproporționate.",
        "Te pregătesc pentru audieri și te asist la fiecare termen din dosar.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Atunci când dosarul se suprapune cu acuzații de " },
          { text: "înșelăciune în afaceri", to: "/servicii/inselaciune-frauda" },
          { text: ", apărarea trebuie construită unitar, pentru că probele sunt în mare parte aceleași." },
        ],
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "Orice datorie la ANAF înseamnă evaziune fiscală?",
      a: "Nu. Legea 241/2005 enumeră faptele care constituie infracțiuni. O datorie fiscală neachitată sau o diferență rezultată dintr-o interpretare diferită a legislației fiscale nu se confundă automat cu o infracțiune de evaziune fiscală.",
    },
    {
      q: "Administratorul firmei răspunde automat?",
      a: "Nu. Răspunderea penală este personală și se analizează în raport cu atribuțiile efective, deciziile luate și documentele semnate. Calitatea de administrator, în sine, nu echivalează cu vinovăția.",
    },
    {
      q: "Ce se întâmplă dacă facturile sunt considerate fictive?",
      a: "Organele de anchetă trebuie să dovedească faptul că operațiunea nu a existat în realitate. Apărarea se construiește pe dovezi privind livrarea, prestația, plata și utilizarea bunurilor sau serviciilor.",
    },
    {
      q: "Cine stabilește prejudiciul?",
      a: "Punctul de plecare este calculul organului fiscal, dar prejudiciul penal se stabilește de organele judiciare, de regulă pe baza unei expertize contabile care poate fi contestată.",
    },
    {
      q: "Pot fi blocate conturile firmei?",
      a: "Da, prin măsuri asigurătorii dispuse pentru garantarea recuperării prejudiciului. Acestea pot fi contestate, iar întinderea lor poate fi analizată în raport cu suma reținută în dosar.",
    },
    {
      q: "Plata prejudiciului închide dosarul penal?",
      a: "Nu automat. Legea prevede efecte diferite în funcție de momentul plății și de cuantumul prejudiciului, de la cauze de nepedepsire până la reducerea pedepsei. Analiza trebuie făcută înainte de plată.",
    },
    {
      q: "Poate răspunde penal și societatea?",
      a: "Da. Persoana juridică poate răspunde penal alături de persoana fizică, cu sancțiuni specifice, printre care amenda și măsuri care afectează activitatea societății.",
    },
    {
      q: "Cât poate dura un dosar de evaziune fiscală?",
      a: "Durata depinde de complexitatea operațiunilor, de numărul persoanelor cercetate și de expertizele dispuse. Dosarele cu volum mare de documente pot dura mai mulți ani, iar apărarea trebuie construită de la început.",
    },
  ],
  resources: [
    { text: "Legea 241/2005 - faptele care constituie infracțiuni de evaziune fiscală.", href: L241, linkLabel: "Legislație" },
    { text: "Codul de procedură penală - art. 249 și urm. privind măsurile asigurătorii.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

export const inselaciuneFraudaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/inselaciune-frauda",
  altPath: "/en/services/fraud-and-deception",
  roPath: "/servicii/inselaciune-frauda",
  title: "Avocat Înșelăciune și Fraudă București | Bogdan Lamatic",
  h1: "Avocat pentru înșelăciune și fraudă în București",
  description:
    "Avocat înșelăciune București. Apărare și reprezentare în dosare de înșelăciune, fraudă financiară și contracte neexecutate. Sună acum pentru o evaluare.",
  keywords: "avocat înșelăciune bucurești, avocat fraudă, fraudă financiară, dosar înșelăciune",
  breadcrumbLabel: "Înșelăciune și fraudă",
  serviceName: "Avocat înșelăciune și fraudă București - Bogdan Lamatic",
  urgency: [
    "Ești acuzat de înșelăciune sau ai fost păgubit printr-o fraudă?",
    "Diferența dintre o neexecutare contractuală și o infracțiune de înșelăciune se stabilește pe baza probelor din dosar, iar aceste probe se construiesc de la primele acte de urmărire penală.",
  ],
  bio: [
    `${BIO_INTRO} Asist atât persoane acuzate de înșelăciune sau fraudă, cât și persoane vătămate care vor recuperarea sumelor pierdute.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Identifică situația concretă, pentru că apărarea diferă în funcție de etapă și de tipul acuzației."],
      subsections: [
        {
          h3: "Ai fost acuzat că ai indus o persoană în eroare",
          paragraphs: [
            "Acuzația se sprijină, de regulă, pe declarațiile persoanei vătămate și pe documentele schimbate între părți. Contează ce ai comunicat, când și pe baza căror informații.",
          ],
        },
        {
          h3: "Un contract sau o afacere a ajuns să fie cercetată penal",
          paragraphs: [
            "Reconstruiesc cronologia afacerii, pentru a arăta dacă neexecutarea a apărut din cauze obiective sau dacă acuzarea susține o intenție existentă de la început.",
          ],
        },
        {
          h3: "Ai primit bani sau un avans și a fost formulată plângere penală",
          paragraphs: [
            "Analizez destinația sumelor, dovezile privind executarea parțială și corespondența dintre părți, elemente care pot schimba încadrarea dosarului.",
          ],
        },
        {
          h3: "Ești cercetat într-un dosar cu prejudiciu mare sau mai multe persoane vătămate",
          paragraphs: [
            "În aceste dosare apar de regulă măsuri asigurătorii și acuzații conexe. Apărarea trebuie organizată pe fiecare situație de fapt, nu global.",
          ],
        },
      ],
      ctaAfterSubsections: "Vreau să discut despre dosarul meu",
    },
    {
      h2: "Ce analizez într-un dosar de înșelăciune",
      bullets: [
        "Dacă sunt îndeplinite condițiile infracțiunii, în special inducerea în eroare și paguba.",
        "Momentul la care se susține că a apărut intenția de a induce în eroare.",
        "Documentele afacerii: contracte, facturi, dovezi de plată, corespondență.",
        "Executarea parțială sau demersurile făcute pentru îndeplinirea obligațiilor.",
        "Modul de calcul al prejudiciului și pretențiile civile formulate.",
        "Măsurile asigurătorii dispuse asupra conturilor sau bunurilor.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi pe scurt ce s-a întâmplat, ce sume sunt implicate și în ce etapă este dosarul."],
      paragraphsAfterBullets: [[{ text: "Dacă le ai, trimite-mi:", bold: true }]],
      bulletsAfterBullets: [
        "contractul sau înțelegerea scrisă;",
        "facturile și dovezile de plată;",
        "corespondența cu cealaltă parte;",
        "plângerea penală sau ordonanța primită;",
        "citația.",
      ],
      calloutAfterBullets: "Nu ai toate actele?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce este infracțiunea de înșelăciune",
      paragraphs: [
        "Înșelăciunea presupune inducerea în eroare a unei persoane prin prezentarea ca adevărată a unei fapte mincinoase sau ca mincinoasă a unei fapte adevărate, în scopul obținerii unui folos patrimonial injust, dacă s-a pricinuit o pagubă.",
        [
          { text: "Fapta este mai gravă atunci când este săvârșită prin folosirea de nume sau calități mincinoase ori de alte mijloace frauduloase. Este una dintre acuzațiile cele mai frecvente în dosarele de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce trebuie dovedit pentru existența infracțiunii",
      subsections: [
        {
          h3: "Inducerea în eroare",
          paragraphs: [
            "Trebuie dovedită o acțiune de amăgire, prin afirmații neadevărate, ascunderea unor informații esențiale sau folosirea unor documente ori calități nereale.",
          ],
        },
        {
          h3: "Scopul obținerii unui folos patrimonial injust",
          paragraphs: [
            "Nu este suficient un avantaj economic. Trebuie dovedit că folosul urmărit era injust și că acesta a fost scopul conduitei.",
          ],
        },
        {
          h3: "Existența unei pagube",
          paragraphs: [
            "Paguba trebuie să fie efectivă și dovedită prin documente, nu doar afirmată de persoana vătămată.",
          ],
        },
        {
          h3: "Legătura dintre inducerea în eroare și prejudiciu",
          paragraphs: [
            "Paguba trebuie să fie consecința inducerii în eroare. Dacă prejudiciul are altă cauză, cum ar fi un risc comercial asumat, acuzația își pierde suportul.",
          ],
        },
      ],
      calloutAfterSubsections: "Înșelăciunea este reglementată de art. 244 Cod penal.",
    },
    {
      h2: "Când nerespectarea unui contract devine înșelăciune",
      cardClassName: "bg-[#faf0e6]",
      subsections: [
        {
          h3: "Neexecutarea unui contract nu înseamnă automat infracțiune",
          paragraphs: [
            "Neexecutarea sau executarea cu întârziere a unui contract atrage, în principiu, răspundere civilă. Un litigiu comercial nu se transformă în dosar penal doar pentru că una dintre părți a suferit o pierdere.",
          ],
        },
        {
          h3: "Ce contează în stabilirea intenției existente la momentul încheierii afacerii",
          paragraphs: [
            "Contează dacă activitatea era reală, dacă existau resursele necesare, ce informații au fost prezentate partenerului, cum au fost folosite sumele primite și ce demersuri au fost făcute pentru executare.",
          ],
        },
      ],
    },
    {
      h2: "Cele mai frecvente situații în dosarele de înșelăciune",
      subsections: [
        {
          h3: "Contracte și tranzacții comerciale",
          paragraphs: [
            "Livrări neefectuate, servicii neprestate sau plăți redirecționate către alte destinații decât cele convenite.",
          ],
        },
        {
          h3: "Avansuri și vânzări",
          paragraphs: [
            "Avansuri încasate pentru bunuri care nu au fost livrate sau vânzări ale unor bunuri cu situație juridică diferită de cea prezentată cumpărătorului.",
          ],
        },
        {
          h3: "Investiții și promisiuni de câștig",
          paragraphs: [
            "Scheme de investiții cu randamente promise, în care se analizează dacă activitatea economică invocată a existat în realitate.",
          ],
        },
        {
          h3: "Folosirea unor documente sau informații nereale",
          paragraphs: [
            "Documente, calități sau date financiare prezentate pentru a obține încrederea partenerului. În aceste cazuri poate apărea și o acuzație de fals.",
          ],
        },
      ],
    },
    {
      h2: "Care este diferența dintre înșelăciune și fraudă informatică",
      paragraphs: [
        "La înșelăciune, folosul este obținut prin amăgirea unei persoane. Persoana vătămată acționează ea însăși, dar pe baza unei reprezentări false a realității.",
        [
          { text: "La " },
          { text: "fraudă informatică", to: "/servicii/frauda-informatica" },
          { text: ", rezultatul este obținut prin intervenția asupra datelor sau a funcționării unui sistem informatic, fără ca o persoană să fie amăgită. Delimitarea celor două încadrări a fost analizată explicit în jurisprudența Înaltei Curți." },
        ],
      ],
    },
    {
      h2: "Recuperarea prejudiciului, restituirea banilor și împăcarea părților",
      paragraphs: [
        "Restituirea sumelor nu înlătură automat răspunderea penală, dar poate influența soluția și individualizarea pedepsei. Pentru unele forme ale înșelăciunii, împăcarea părților are efecte prevăzute expres de lege.",
        "Analizez dacă în dosarul tău este posibilă împăcarea, ce moment procesual este util și cum trebuie documentată, astfel încât efectul juridic să fie cel urmărit.",
      ],
    },
    {
      h2: "Sechestrul și recuperarea prejudiciului într-un dosar de înșelăciune",
      paragraphs: [
        "Persoana vătămată se poate constitui parte civilă și poate solicita instituirea de măsuri asigurătorii asupra conturilor sau bunurilor, pentru a proteja șansele de recuperare.",
        "Pe partea de apărare, verific proporționalitatea măsurii, dovada prejudiciului invocat și formulez contestație atunci când sechestrul depășește pretențiile justificate.",
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de înșelăciune",
      bullets: [
        "Reconstruiesc cronologia afacerii pe documente și plăți.",
        "Susțin natura civilă sau comercială a disputei, atunci când probele o permit.",
        "Contest existența intenției la momentul încheierii înțelegerii.",
        "Analizez cuantumul real al prejudiciului și pretențiile civile.",
        "Te pregătesc pentru audieri și te asist la fiecare termen.",
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "O datorie neachitată poate fi înșelăciune?",
      a: "Nu prin ea însăși. O datorie neachitată este, în principiu, o problemă civilă. Devine relevantă penal doar dacă se dovedește inducerea în eroare și scopul obținerii unui folos patrimonial injust.",
    },
    {
      q: "Nerespectarea unui contract este infracțiune?",
      a: "Nu automat. Trebuie dovedit că intenția de a nu executa a existat la momentul încheierii contractului și că partenerul a fost amăgit prin afirmații sau documente nereale.",
    },
    {
      q: "Ce se întâmplă dacă prejudiciul este restituit?",
      a: "Restituirea nu închide automat dosarul, dar poate influența soluția procurorului și individualizarea pedepsei. Pentru unele forme, împăcarea părților are efecte prevăzute expres de lege.",
    },
    {
      q: "Victima își poate retrage plângerea?",
      a: "Efectele depind de încadrarea juridică reținută. În anumite cazuri, împăcarea părților înlătură răspunderea penală, iar în altele dosarul continuă din oficiu.",
    },
    {
      q: "Care este diferența dintre înșelăciune și fraudă informatică?",
      a: "La înșelăciune este amăgită o persoană, care acționează pe baza unei reprezentări false. La fraudă informatică, rezultatul patrimonial se obține prin intervenția asupra datelor sau a funcționării unui sistem informatic.",
    },
    {
      q: "Pot fi puse sub sechestru conturile și bunurile?",
      a: "Da, prin măsuri asigurătorii dispuse pentru garantarea recuperării prejudiciului. Măsura poate fi contestată, mai ales atunci când este disproporționată față de suma pretinsă.",
    },
    {
      q: "Poate răspunde penal și o firmă?",
      a: "Da. Persoana juridică poate răspunde penal atunci când fapta a fost săvârșită în realizarea obiectului de activitate sau în interesul său, alături de răspunderea persoanelor fizice implicate.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 244 privind înșelăciunea.", href: CP, linkLabel: "Legislație" },
    { text: "Codul penal - art. 245 privind înșelăciunea privind asigurările.", href: CP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

export const delapidareRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/delapidare",
  altPath: "/en/services/embezzlement",
  roPath: "/servicii/delapidare",
  title: "Avocat Delapidare București | Bogdan Lamatic",
  h1: "Avocat pentru delapidare în București",
  description:
    "Avocat delapidare București. Apărare în dosare penale de delapidare, lipsuri în gestiune și însușire de bunuri. 18+ ani experiență. Sună acum.",
  keywords: "avocat delapidare, dosar delapidare, apărare delapidare, avocat gestiune frauduloasă",
  breadcrumbLabel: "Delapidare",
  serviceName: "Avocat delapidare București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru delapidare sau ai constatat lipsuri în gestiunea firmei tale?",
    "Într-un astfel de dosar, totul se decide pe documente: cine avea gestiunea, ce sume au fost mișcate și cum au fost justificate.",
  ],
  bio: [
    `${BIO_INTRO} Asist administratori, angajați cu atribuții de gestiune și societăți în dosare de delapidare, atât în apărare, cât și în calitate de persoană vătămată.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi în ce etapă ești, pentru că prioritățile apărării sunt diferite."],
      subsections: [
        {
          h3: "Un audit sau control intern a identificat lipsuri în gestiune",
          paragraphs: [
            "Verific modul în care a fost făcut inventarul, ce documente au fost luate în calcul și dacă lipsurile constatate au o explicație procedurală sau contabilă.",
          ],
        },
        {
          h3: "Angajatorul sau societatea a formulat plângere penală",
          paragraphs: [
            "Analizez plângerea, sumele reclamate și documentele depuse, pentru a stabili ce faptă este reținută concret și pe ce probe se sprijină.",
          ],
        },
        {
          h3: "Ești administrator, director, gestionar sau angajat cercetat pentru delapidare",
          paragraphs: [
            "Calitatea și atribuțiile efective sunt esențiale în această infracțiune. Verific fișa postului, contractul, procurile și limitele reale de decizie.",
          ],
        },
        {
          h3: "A fost stabilit un prejudiciu și s-au luat măsuri asupra bunurilor",
          paragraphs: [
            "Contest modul de calcul al prejudiciului și proporționalitatea măsurilor asigurătorii instituite asupra bunurilor personale.",
          ],
        },
      ],
      ctaAfterSubsections: "Sunt cercetat pentru delapidare - vreau o evaluare",
    },
    {
      h2: "Ce analizez imediat într-un dosar de delapidare",
      bullets: [
        "Dacă ai avut calitatea cerută de lege și atribuții efective de gestionare sau administrare.",
        "Ce bunuri sau sume se aflau efectiv în gestiunea ta și pe baza căror documente.",
        "Modul de întocmire a inventarului și a raportului de control.",
        "Documentele justificative pentru operațiunile contestate.",
        "Calculul prejudiciului și oportunitatea unei expertize contabile.",
        "Măsurile asigurătorii dispuse și motivele de contestație.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi ce sume sunt reclamate și în ce etapă este dosarul."],
      subsections: [
        {
          h3: "Documentele contabile și de gestiune",
          paragraphs: ["Fișe de cont, deconturi, registre de casă, note de recepție, procese-verbale de inventar."],
        },
        {
          h3: "Contractele și atribuțiile persoanei cercetate",
          paragraphs: ["Contractul de muncă sau de mandat, fișa postului, procurile și deciziile interne."],
        },
        {
          h3: "Raportul de audit sau control",
          paragraphs: ["Raportul intern, raportul de audit extern sau nota de constatare care a generat plângerea."],
        },
        {
          h3: "Calculul prejudiciului",
          paragraphs: ["Modul în care a fost calculată suma reclamată, cu anexele și documentele pe care se sprijină."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce este delapidarea",
      paragraphs: [
        "Delapidarea presupune însușirea, folosirea sau traficarea, în interes propriu ori pentru altul, de bani, valori sau alte bunuri pe care autorul le gestionează sau le administrează.",
        [
          { text: "Este una dintre infracțiunile centrale din zona de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: ", pentru că apare frecvent în dosarele generate de controale interne și de audituri financiare." },
        ],
      ],
    },
    {
      h2: "Cine poate fi acuzat de delapidare",
      paragraphs: [
        "Autorul trebuie să aibă calitatea cerută de lege, respectiv atribuții efective de gestionare sau administrare a bunurilor. Nu orice angajat care are acces la bunuri are și gestiunea acestora.",
        "Textul se aplică funcționarilor publici, iar prin norma de extindere a răspunderii se aplică și persoanelor care exercită atribuții similare în cadrul unei persoane juridice, cum sunt administratorii, directorii, casierii sau gestionarii.",
        "Această calitate se verifică pe documente: contract, fișa postului, decizii interne, procuri, semnături pe documentele de gestiune. Reglementarea se regăsește în art. 295, coroborat cu art. 308 Cod penal.",
      ],
    },
    {
      h2: "Ce fapte pot constitui delapidare",
      subsections: [
        {
          h3: "Însușirea banilor sau bunurilor",
          paragraphs: ["Scoaterea definitivă a bunului sau a sumei din patrimoniul societății, prin trecerea în stăpânirea autorului."],
        },
        {
          h3: "Folosirea lor în interes propriu sau pentru altul",
          paragraphs: ["Utilizarea temporară a bunurilor ori sumelor gestionate în alt scop decât cel al societății, chiar dacă ulterior sunt restituite."],
        },
        {
          h3: "Traficarea bunurilor sau valorilor administrate",
          paragraphs: ["Punerea în circulație a bunurilor gestionate pentru obținerea unui profit personal, cu intenția de a le reintroduce ulterior în gestiune."],
        },
      ],
    },
    {
      h2: "Delapidare sau simplă lipsă în gestiune?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "O lipsă în gestiune poate avea cauze care nu au nicio legătură cu o faptă penală: erori de înregistrare, proceduri interne deficitare, pierderi tehnologice, documente justificative depuse cu întârziere sau acces al mai multor persoane la aceeași gestiune.",
        "Pentru existența infracțiunii trebuie dovedită o conduită de însușire, folosire sau traficare, săvârșită cu intenție. Fără această dovadă, discuția rămâne una de răspundere patrimonială, nu penală.",
      ],
    },
    {
      h2: "Care este diferența dintre delapidare, abuz de încredere și gestiune frauduloasă",
      paragraphs: [
        "La delapidare, autorul are calitatea specială cerută de lege și gestionează bunurile persoanei juridice pe care o păgubește.",
        "La abuz de încredere, bunul este deținut în baza unui titlu, fără atribuții de gestiune, iar fapta constă în însușirea sau refuzul de a-l restitui.",
        "La gestiune frauduloasă, fapta constă în pricinuirea de pagube prin administrarea sau conservarea defectuoasă a bunurilor altei persoane, cu rea-credință.",
      ],
    },
    {
      h2: "Cum se stabilește prejudiciul în cazul delapidării",
      subsections: [
        {
          h3: "Inventarul și documentele contabile",
          paragraphs: ["Punctul de plecare este inventarul și confruntarea acestuia cu evidențele contabile și cu documentele justificative."],
        },
        {
          h3: "Expertiza contabilă",
          paragraphs: ["Expertiza judiciară stabilește sumele care nu au acoperire în documente. Formulez obiective de expertiză și obiecțiuni la raport."],
        },
        {
          h3: "Contestarea calculului prejudiciului",
          paragraphs: ["Prejudiciul poate fi redus sau înlăturat prin documente justificative găsite ulterior, prin corectarea perioadei analizate ori prin identificarea altor persoane cu acces la gestiune."],
        },
      ],
    },
    {
      h2: "Ce efect are recuperarea sau achitarea prejudiciului",
      paragraphs: [
        "Acoperirea prejudiciului nu înlătură prin ea însăși răspunderea penală, dar poate influența soluția procurorului, individualizarea pedepsei și modul de executare.",
        "Recuperarea prejudiciului este relevantă și pentru latura civilă a dosarului, atunci când societatea s-a constituit parte civilă.",
      ],
    },
    {
      h2: "Sechestrul asupra bunurilor într-un dosar de delapidare",
      paragraphs: [
        "Organele judiciare pot institui măsuri asigurătorii asupra conturilor și bunurilor persoanei cercetate, pentru garantarea recuperării prejudiciului.",
        "Verific dacă măsura este proporțională cu suma reținută și dacă vizează bunuri care pot fi indisponibilizate potrivit legii, apoi formulez contestație atunci când există motive.",
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de delapidare",
      bullets: [
        "Verific mai întâi calitatea și atribuțiile efective, pentru că fără acestea infracțiunea nu poate fi reținută.",
        "Reconstitui gestiunea pe documente și identific toate persoanele cu acces la bunuri sau la conturi.",
        "Susțin caracterul patrimonial, nu penal, al lipsurilor constatate, atunci când probele o permit.",
        "Atac modul de calcul al prejudiciului prin expertiză și obiecțiuni.",
        "Te pregătesc pentru audieri și te asist la fiecare termen.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Atunci când în dosar apar și documente contestate, apărarea se suprapune cu problematica de " },
          { text: "fals în înscrisuri", to: "/servicii/fals-si-uz-de-fals" },
          { text: ", iar cele două acuzații trebuie tratate împreună." },
        ],
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "Orice lipsă în gestiune înseamnă delapidare?",
      a: "Nu. O lipsă în gestiune poate avea cauze contabile sau procedurale. Pentru infracțiune trebuie dovedită însușirea, folosirea ori traficarea bunurilor gestionate, săvârșită cu intenție.",
    },
    {
      q: "Cine poate fi autorul delapidării?",
      a: "Numai o persoană care are atribuții efective de gestionare sau administrare a bunurilor. Simplul acces la bunuri, fără atribuții de gestiune, nu este suficient.",
    },
    {
      q: "Un administrator de firmă poate fi acuzat de delapidare?",
      a: "Da. Prin norma de extindere a răspunderii, administratorii și directorii societăților pot răspunde pentru delapidare atunci când gestionează sau administrează bunurile societății.",
    },
    {
      q: "Cum se calculează prejudiciul?",
      a: "Prin confruntarea inventarului cu evidențele contabile și documentele justificative, de regulă pe baza unei expertize contabile judiciare care poate fi contestată.",
    },
    {
      q: "Ce se întâmplă dacă prejudiciul este achitat?",
      a: "Plata nu înlătură automat răspunderea penală, dar poate influența soluția și individualizarea pedepsei, iar latura civilă a dosarului se poate stinge.",
    },
    {
      q: "Care este diferența dintre delapidare și gestiune frauduloasă?",
      a: "Delapidarea presupune însușirea, folosirea sau traficarea bunurilor gestionate. Gestiunea frauduloasă presupune pricinuirea de pagube prin administrarea cu rea-credință a bunurilor altei persoane.",
    },
    {
      q: "Poate fi pus sechestru pe bunurile personale?",
      a: "Da, măsurile asigurătorii pot viza bunuri și conturi personale, în limita necesară acoperirii prejudiciului. Măsura poate fi contestată atunci când este disproporționată.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 295 privind delapidarea.", href: CP, linkLabel: "Legislație" },
    { text: "Codul penal - art. 308 privind extinderea răspunderii la alte persoane.", href: CP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

export const falsSiUzDeFalsRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/fals-si-uz-de-fals",
  altPath: "/en/services/forgery-and-use-of-forgery",
  roPath: "/servicii/fals-si-uz-de-fals",
  title: "Avocat Fals și Uz de Fals București | Bogdan Lamatic",
  h1: "Avocat pentru fals și uz de fals în București",
  description:
    "Avocat fals și uz de fals București. Apărare în dosare penale privind falsul în înscrisuri și folosirea documentelor false. Sună acum pentru o evaluare.",
  keywords: "avocat fals și uz de fals, fals în înscrisuri, avocat uz de fals, expertiză grafoscopică",
  breadcrumbLabel: "Fals și uz de fals",
  serviceName: "Avocat fals și uz de fals București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru fals în înscrisuri sau pentru folosirea unui document fals?",
    "În aceste dosare, discuția se poartă pe document și pe expertiză, iar cererile formulate la timp pot schimba concluziile anchetei.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane cercetate pentru fals material, fals intelectual, fals în înscrisuri sub semnătură privată sau uz de fals, inclusiv atunci când acuzația apare alături de alte infracțiuni economice.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Alege situația care corespunde dosarului tău."],
      subsections: [
        {
          h3: "Ești acuzat că ai falsificat un document",
          paragraphs: [
            "Verific documentul contestat, proveniența lui și dacă există probe care te leagă efectiv de operațiunea de falsificare.",
          ],
        },
        {
          h3: "Ești acuzat că ai folosit un document fals",
          paragraphs: [
            "Pentru uz de fals trebuie dovedit că ai cunoscut caracterul fals al documentului la momentul folosirii lui. Acesta este, de regulă, punctul central al apărării.",
          ],
        },
        {
          h3: "Semnătura sau conținutul unui înscris este contestat",
          paragraphs: [
            "Solicit expertiză grafoscopică sau expertiza documentului și propun probele de comparație necesare pentru o concluzie corectă.",
          ],
        },
        {
          h3: "Documentele sunt folosite ca probe într-un alt dosar penal",
          paragraphs: [
            "Atunci când documentul contestat susține o altă acuzație, apărarea trebuie construită unitar, pentru că înlăturarea documentului afectează întreg dosarul.",
          ],
        },
      ],
      ctaAfterSubsections: "Am un dosar de fals - vreau o evaluare",
    },
    {
      h2: "Ce analizez într-un dosar de fals sau uz de fals",
      bullets: [
        "Tipul de înscris și încadrarea juridică reținută.",
        "Dacă documentul contestat produce consecințe juridice, condiție esențială pentru existența infracțiunii.",
        "Proveniența documentului și circuitul lui până la momentul folosirii.",
        "Probele privind cunoașterea caracterului fals, în cazul uzului de fals.",
        "Expertizele dispuse, obiectivele acestora și probele de comparație folosite.",
        "Legătura dintre acuzația de fals și celelalte acuzații din dosar.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi ce document este contestat și în ce dosar a fost folosit."],
      paragraphsAfterBullets: [[{ text: "Dacă le ai, trimite-mi:", bold: true }]],
      bulletsAfterBullets: [
        "documentul contestat, în original sau copie;",
        "ordonanța sau plângerea din care rezultă acuzația;",
        "citația;",
        "raportul de expertiză, dacă a fost deja efectuat;",
        "documentele care arată proveniența înscrisului.",
      ],
      calloutAfterBullets: "Nu ai toate actele?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Care este diferența dintre fals și uz de fals",
      paragraphs: [
        "Falsul presupune operațiunea de alterare, contrafacere sau atestare a unor împrejurări necorespunzătoare adevărului într-un înscris.",
        [
          { text: "Uzul de fals presupune folosirea unui document fals în vederea producerii unei consecințe juridice, de către o persoană care cunoaște caracterul fals al acestuia. Cele două acuzații apar frecvent împreună în dosarele de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce tipuri de fals pot apărea într-un dosar penal",
      subsections: [
        {
          h3: "Fals material în înscrisuri oficiale",
          paragraphs: ["Falsificarea materială a unui înscris oficial, prin contrafacerea scrierii, a subscrierii sau prin alterarea lui în orice mod."],
        },
        {
          h3: "Fals intelectual",
          paragraphs: ["Atestarea unor fapte sau împrejurări necorespunzătoare adevărului ori omisiunea unor date, la întocmirea unui înscris oficial."],
        },
        {
          h3: "Fals în înscrisuri sub semnătură privată",
          paragraphs: ["Falsificarea unui înscris sub semnătură privată, urmată de folosirea lui sau de încredințarea altei persoane spre folosire."],
        },
        {
          h3: "Uz de fals",
          paragraphs: ["Folosirea unui înscris oficial ori sub semnătură privată, cunoscând că este fals, în vederea producerii unei consecințe juridice."],
        },
      ],
      calloutAfterSubsections: "Aceste forme sunt reglementate distinct în zona art. 320-323 Cod penal.",
    },
    {
      h2: "Poți fi acuzat de uz de fals dacă nu ai falsificat documentul?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Da. Uzul de fals este o infracțiune distinctă, iar autorul ei nu trebuie să fie persoana care a falsificat documentul. Este suficientă folosirea înscrisului în vederea producerii unei consecințe juridice.",
        "În practică, apar frecvent dosare în care documentul a fost primit de la un terț, iar discuția se mută pe ceea ce știa efectiv persoana care l-a folosit.",
      ],
    },
    {
      h2: "Trebuie să știi că documentul este fals pentru a răspunde pentru uz de fals?",
      paragraphs: [
        "Da. Uzul de fals se săvârșește cu intenție, deci presupune cunoașterea caracterului fals al înscrisului la momentul folosirii lui.",
        "Dacă documentul a fost folosit cu bună-credință, fără să știi că este fals, lipsește elementul subiectiv al infracțiunii. Aceasta se dovedește prin contextul obținerii documentului, verificările făcute și conduita ulterioară.",
      ],
    },
    {
      h2: "Cum se dovedește că un document este fals",
      subsections: [
        {
          h3: "Expertiza grafoscopică",
          paragraphs: ["Analizează scrisul și semnătura, prin comparație cu probe de scriere. Concluziile pot fi certe sau de probabilitate, iar această diferență contează."],
        },
        {
          h3: "Expertiza documentelor",
          paragraphs: ["Analizează suportul, cerneala, ștampilele, urmele de modificare sau adăugare, precum și elementele de securitate ale documentului."],
        },
        {
          h3: "Înscrisurile originale și probele de comparație",
          paragraphs: ["Fără originalul documentului și fără probe de comparație adecvate, concluziile expertizei rămân fragile și pot fi contestate."],
        },
        {
          h3: "Alte probe privind proveniența documentului",
          paragraphs: ["Corespondența, declarațiile martorilor, datele din registre și evidențe electronice pot arăta cine a întocmit efectiv documentul."],
        },
      ],
    },
    {
      h2: "Ce se întâmplă când aceeași persoană falsifică și folosește documentul",
      paragraphs: [
        "În cazul falsului în înscrisuri sub semnătură privată, folosirea documentului de către autorul falsului este inclusă în conținutul infracțiunii, deci nu se reține separat uz de fals.",
        "În cazul înscrisurilor oficiale, situația este diferită și se poate reține un concurs de infracțiuni. Încadrarea corectă influențează direct limitele de pedeapsă, motiv pentru care o verific de la începutul dosarului.",
      ],
    },
    {
      h2: "Legătura dintre fals și alte infracțiuni",
      subsections: [
        {
          h3: "Fals și înșelăciune",
          paragraphs: ["Documentul fals poate fi mijlocul prin care s-a realizat inducerea în eroare, ceea ce atrage forma agravată a înșelăciunii."],
        },
        {
          h3: "Fals și evaziune fiscală",
          paragraphs: ["Facturile sau documentele contabile contestate pot genera simultan o acuzație de fals și una de evaziune fiscală."],
        },
        {
          h3: "Fals și fraude cu fonduri europene",
          paragraphs: [
            [
              { text: "Documentele depuse pentru obținerea finanțării sunt analizate atât din perspectiva falsului, cât și a regimului special aplicabil " },
              { text: "fondurilor europene", to: "/servicii/fonduri-europene" },
              { text: "." },
            ],
          ],
        },
      ],
      calloutAfterSubsections: "Relația dintre documentele falsificate și alte infracțiuni economice apare inclusiv în jurisprudența Înaltei Curți.",
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de fals sau uz de fals",
      bullets: [
        "Verific dacă înscrisul poate produce consecințe juridice, condiție fără care infracțiunea nu există.",
        "Contest concluziile expertizei atunci când probele de comparație sau originalul lipsesc.",
        "Susțin lipsa cunoașterii caracterului fals, în dosarele de uz de fals.",
        "Verific încadrarea juridică și evit reținerea nejustificată a unui concurs de infracțiuni.",
        "Te pregătesc pentru audieri și te asist la fiecare termen.",
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "Care este diferența dintre fals și uz de fals?",
      a: "Falsul este operațiunea de falsificare a documentului. Uzul de fals este folosirea unui document fals, în vederea producerii unei consecințe juridice, de către o persoană care cunoaște că este fals.",
    },
    {
      q: "Pot fi condamnat dacă nu știam că documentul este fals?",
      a: "Uzul de fals presupune intenție, deci cunoașterea caracterului fals al documentului. Buna-credință, dovedită prin contextul obținerii și folosirii documentului, înlătură răspunderea penală.",
    },
    {
      q: "Este necesară expertiza grafoscopică?",
      a: "Nu este obligatorie în toate dosarele, dar devine esențială atunci când semnătura sau scrisul sunt contestate. Poate fi solicitată atât de organul de urmărire penală, cât și de apărare.",
    },
    {
      q: "Ce se întâmplă dacă semnătura nu îmi aparține?",
      a: "Dacă expertiza stabilește că semnătura nu îți aparține, acuzația de fals material nu poate fi susținută în privința ta. Rămâne însă de analizat dacă ai folosit documentul cunoscând că este fals.",
    },
    {
      q: "Un document electronic poate fi fals?",
      a: "Da. Alterarea datelor informatice cu consecințe juridice este incriminată distinct, ca fals informatic, iar în dosare apar frecvent și documente scanate sau semnate electronic.",
    },
    {
      q: "Pot exista simultan fals și înșelăciune?",
      a: "Da. Atunci când documentul fals a fost mijlocul prin care s-a realizat inducerea în eroare, se poate reține forma agravată a înșelăciunii, alături de infracțiunea de fals.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 320-323 privind falsul în înscrisuri și uzul de fals.", href: CP, linkLabel: "Legislație" },
    { text: "Codul de procedură penală - dispozițiile privind expertiza judiciară.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

export const bancrutaFrauduloasaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/bancruta-frauduloasa",
  altPath: "/en/services/fraudulent-bankruptcy",
  roPath: "/servicii/bancruta-frauduloasa",
  title: "Avocat Bancrută Frauduloasă București | Bogdan Lamatic",
  h1: "Avocat pentru bancrută frauduloasă în București",
  description:
    "Avocat bancrută frauduloasă București. Apărare în dosare penale privind insolvența, transferurile de active și evidențele contabile. Sună acum.",
  keywords:
    "avocat bancrută frauduloasă, bancrută frauduloasă dosar penal, avocat insolvență penal, bancrută simplă",
  breadcrumbLabel: "Bancrută frauduloasă",
  serviceName: "Avocat bancrută frauduloasă București - Bogdan Lamatic",
  urgency: [
    "Firma este în insolvență și a fost formulată o plângere penală pentru bancrută frauduloasă?",
    "Aceste dosare se construiesc pe documentele contabile și pe transferurile de active din perioada anterioară insolvenței, iar explicațiile economice trebuie susținute cu documente.",
  ],
  bio: [
    `${BIO_INTRO} Asist administratori, directori și societăți în dosare penale privind bancruta frauduloasă, inclusiv atunci când dosarul pornește din procedura de insolvență.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi în ce etapă se află procedura și dosarul penal."],
      subsections: [
        {
          h3: "Firma este sau a fost în insolvență și s-a formulat o plângere penală",
          paragraphs: [
            "Verific ce anume se reclamă concret: ascunderea de active, lipsa evidențelor, datorii nereale sau transferuri făcute în frauda creditorilor.",
          ],
        },
        {
          h3: "Ești administrator sau persoană din conducerea societății",
          paragraphs: [
            "Analizez atribuțiile efective, deciziile luate și documentele semnate, pentru că răspunderea penală este personală și nu decurge automat din funcție.",
          ],
        },
        {
          h3: "Sunt contestate transferuri sau înstrăinări de active",
          paragraphs: [
            "Reconstruiesc contextul economic al operațiunilor, prețul, plata efectivă și destinația sumelor, pentru a arăta dacă tranzacțiile au fost reale.",
          ],
        },
        {
          h3: "Sunt reclamate documente contabile lipsă sau datorii nereale",
          paragraphs: [
            "Verific ce documente au fost predate administratorului judiciar, cine le deținea și dacă lipsa lor are o explicație obiectivă.",
          ],
        },
      ],
      ctaAfterSubsections: "Am un dosar de bancrută - vreau o evaluare",
    },
    {
      h2: "Ce analizez într-un dosar de bancrută frauduloasă",
      bullets: [
        "Ce faptă concretă este reținută și pe ce documente se sprijină.",
        "Cronologia operațiunilor raportată la momentul apariției stării de insolvență.",
        "Realitatea economică a transferurilor de active și prețurile practicate.",
        "Situația evidențelor contabile și modul în care au fost predate.",
        "Prejudiciul reclamat de creditori și modul de calcul.",
        "Existența plângerii prealabile și îndeplinirea condițiilor procedurale.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi ce se reclamă și în ce etapă este dosarul."],
      subsections: [
        {
          h3: "Dosarul de insolvență",
          paragraphs: ["Hotărârea de deschidere a procedurii, tabelul creditorilor, cererile formulate în procedură."],
        },
        {
          h3: "Evidențele contabile",
          paragraphs: ["Balanțe, bilanțuri, registre, situația creanțelor și a datoriilor din perioada analizată."],
        },
        {
          h3: "Contractele și transferurile de active",
          paragraphs: ["Contractele de vânzare, cesiune sau compensare, cu dovezile de plată aferente."],
        },
        {
          h3: "Rapoartele administratorului sau lichidatorului judiciar",
          paragraphs: ["Raportul asupra cauzelor insolvenței și orice sesizare formulată în cadrul procedurii."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce este bancruta frauduloasă",
      paragraphs: [
        "Bancruta frauduloasă presupune fapte prin care debitorul, în frauda creditorilor, își diminuează aparent sau real activul, își denaturează evidențele ori prezintă datorii care nu există.",
        [
          { text: "Este o infracțiune specifică zonei de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: ", iar analiza ei nu poate fi separată de conduita debitorului în raport cu creditorii. Reglementarea se află în art. 241 Cod penal." },
        ],
      ],
    },
    {
      h2: "Ce fapte pot constitui bancrută frauduloasă",
      subsections: [
        {
          h3: "Ascunderea unor active ale debitorului",
          paragraphs: ["Sustragerea unor bunuri din patrimoniul societății sau disimularea existenței lor, astfel încât să nu poată fi valorificate de creditori."],
        },
        {
          h3: "Falsificarea, sustragerea sau distrugerea evidențelor",
          paragraphs: ["Denaturarea documentelor contabile ori dispariția acestora, atunci când urmărește împiedicarea verificării situației reale a societății."],
        },
        {
          h3: "Prezentarea unor datorii nereale",
          paragraphs: ["Înregistrarea unor datorii inexistente, care diminuează artificial activul disponibil pentru creditorii reali."],
        },
        {
          h3: "Înstrăinarea activelor în frauda creditorilor",
          paragraphs: ["Transferuri de bunuri la prețuri nejustificate sau către persoane apropiate, în perioada anterioară ori în timpul insolvenței."],
        },
      ],
    },
    {
      h2: "Care este diferența dintre bancrută frauduloasă și bancrută simplă",
      paragraphs: [
        "Bancruta simplă presupune neintroducerea sau introducerea tardivă a cererii de deschidere a procedurii insolvenței, în termenul prevăzut de lege.",
        "Bancruta frauduloasă presupune o conduită activă de fraudare a creditorilor, prin ascunderea activelor, denaturarea evidențelor sau prezentarea unor datorii nereale. Diferența dintre cele două influențează direct limitele de pedeapsă.",
      ],
    },
    {
      h2: "Insolvența unei societăți înseamnă automat răspundere penală?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Nu. Insolvența este o situație economică, iar cauzele ei pot fi complet obiective: pierderea unui client important, blocaje financiare, creșterea costurilor sau litigii care afectează încasările.",
        "Răspunderea penală apare doar atunci când se dovedește o conduită de fraudare a creditorilor. Faptul că societatea nu își poate plăti datoriile nu constituie, prin el însuși, infracțiune.",
      ],
    },
    {
      h2: "Cine poate formula plângere pentru bancrută frauduloasă",
      paragraphs: [
        "Plângerea poate fi formulată, de regulă, de creditorii prejudiciați, iar sesizări pot proveni și din procedura de insolvență, prin administratorul sau lichidatorul judiciar.",
        "Bancruta frauduloasă este una dintre infracțiunile pentru care existența plângerii prealabile are relevanță procedurală. Verific dacă această condiție a fost îndeplinită și în termenul prevăzut de lege.",
      ],
    },
    {
      h2: "Cum se analizează transferurile de bunuri și active înainte sau în timpul insolvenței",
      paragraphs: [
        "Organele judiciare urmăresc perioada anterioară deschiderii procedurii și verifică dacă bunurile au ieșit din patrimoniu la valoarea reală, dacă prețul a fost efectiv încasat și cine a beneficiat de operațiune.",
        "Apărarea se construiește pe justificarea economică a fiecărei tranzacții: evaluări, negocieri, plăți bancare, destinația sumelor și utilitatea operațiunii pentru societate.",
      ],
    },
    {
      h2: "Rolul documentelor contabile și al expertizei într-un dosar de bancrută frauduloasă",
      paragraphs: [
        "Evidențele contabile sunt principala probă în aceste dosare. Lipsa lor este interpretată frecvent în defavoarea conducerii societății, motiv pentru care trebuie dovedit cine le deținea și ce a fost predat efectiv.",
        "Expertiza contabilă judiciară stabilește evoluția activului și pasivului, momentul apariției insolvenței și efectul operațiunilor contestate. Formulez obiective de expertiză și obiecțiuni la raport.",
      ],
    },
    {
      h2: "Bancruta frauduloasă și prejudiciul creditorilor",
      paragraphs: [
        "Prejudiciul se raportează la sumele pe care creditorii nu le mai pot recupera din cauza operațiunilor contestate, nu la totalul datoriilor societății.",
        "Această distincție este esențială, pentru că influențează atât încadrarea juridică, cât și întinderea măsurilor asigurătorii și a pretențiilor civile.",
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de bancrută frauduloasă",
      bullets: [
        "Verific îndeplinirea condițiilor procedurale, inclusiv existența plângerii prealabile.",
        "Susțin cauzele obiective ale insolvenței, pe documente și date financiare.",
        "Justific economic fiecare transfer de active contestat.",
        "Dovedesc predarea documentelor contabile și lămuresc situația evidențelor.",
        "Atac modul de calcul al prejudiciului prin expertiză și obiecțiuni.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Atunci când în același dosar apar acuzații privind sume ridicate din societate, apărarea se corelează cu problematica de " },
          { text: "delapidare din patrimoniul firmei", to: "/servicii/delapidare" },
          { text: "." },
        ],
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "Falimentul firmei înseamnă bancrută frauduloasă?",
      a: "Nu. Insolvența și falimentul sunt situații economice. Infracțiunea există doar dacă se dovedește o conduită de fraudare a creditorilor, prin ascunderea activelor, denaturarea evidențelor sau datorii nereale.",
    },
    {
      q: "Administratorul răspunde automat?",
      a: "Nu. Răspunderea penală este personală și se analizează în raport cu deciziile luate, documentele semnate și atribuțiile efective din perioada relevantă.",
    },
    {
      q: "Vânzarea bunurilor firmei înainte de insolvență este infracțiune?",
      a: "Nu în sine. Devine relevantă penal atunci când se dovedește că operațiunea a fost făcută în frauda creditorilor, la un preț nejustificat sau fără o utilitate economică reală.",
    },
    {
      q: "Cine poate depune plângerea?",
      a: "De regulă creditorii prejudiciați, iar sesizări pot veni și din procedura de insolvență. Existența plângerii prealabile are relevanță procedurală în acest tip de dosar.",
    },
    {
      q: "Care este diferența dintre bancrută simplă și frauduloasă?",
      a: "Bancruta simplă privește neintroducerea sau introducerea tardivă a cererii de insolvență. Bancruta frauduloasă presupune fapte active de fraudare a creditorilor.",
    },
    {
      q: "Ce rol are administratorul judiciar?",
      a: "Administratorul sau lichidatorul judiciar întocmește raportul asupra cauzelor insolvenței și poate sesiza organele judiciare atunci când identifică operațiuni suspecte.",
    },
    {
      q: "Se poate dispune sechestru asupra bunurilor?",
      a: "Da, pot fi instituite măsuri asigurătorii pentru garantarea recuperării prejudiciului creditorilor. Măsura poate fi contestată atunci când este disproporționată sau nejustificată.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 241 privind bancruta frauduloasă.", href: CP, linkLabel: "Legislație" },
    { text: "Codul penal - art. 240 privind bancruta simplă.", href: CP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

export const fraudaInformaticaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/frauda-informatica",
  altPath: "/en/services/computer-fraud",
  roPath: "/servicii/frauda-informatica",
  title: "Avocat Fraudă Informatică București | Bogdan Lamatic",
  h1: "Avocat pentru fraudă informatică în București",
  description:
    "Avocat fraudă informatică București. Apărare în dosare cu probe digitale, dispozitive ridicate, conturi online și tranzacții cripto. Sună acum.",
  keywords:
    "avocat fraudă informatică, operațiuni financiare frauduloase, avocat criminalitate informatică, percheziție informatică",
  breadcrumbLabel: "Fraudă informatică",
  serviceName: "Avocat fraudă informatică București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru fraudă informatică sau ți-au fost ridicate telefonul și laptopul?",
    "În aceste dosare, probele sunt digitale, iar modul în care au fost obținute și interpretate poate fi verificat și contestat.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane cercetate în dosare de fraudă informatică și criminalitate informatică, inclusiv atunci când sunt implicate conturi online, transferuri bancare sau tranzacții cu criptomonede.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi ce s-a întâmplat concret, pentru că probele digitale se degradează sau devin greu de contestat cu trecerea timpului."],
      subsections: [
        {
          h3: "Ești cercetat pentru tranzacții sau operațiuni realizate online",
          paragraphs: [
            "Verific ce operațiuni sunt reținute, cine le-a inițiat efectiv și dacă există probe care te leagă direct de contul sau dispozitivul folosit.",
          ],
        },
        {
          h3: "Sunt investigate conturi, dispozitive sau date informatice",
          paragraphs: [
            "Analizez actele prin care au fost obținute datele și dacă au fost respectate condițiile legale pentru accesul la ele.",
          ],
        },
        {
          h3: "Poliția sau DIICOT a ridicat telefoane, laptopuri ori alte dispozitive",
          paragraphs: [
            "Verific procesele-verbale, modul de sigilare și dacă a fost dispusă autorizarea necesară pentru examinarea conținutului dispozitivelor.",
          ],
        },
        {
          h3: "Dosarul implică transferuri bancare, conturi online sau criptomonede",
          paragraphs: [
            "Reconstruiesc fluxul financiar pe extrase și pe date din platforme, pentru a delimita operațiunile tale de cele ale altor persoane.",
          ],
        },
      ],
      ctaAfterSubsections: "Am un dosar de fraudă informatică - vreau o evaluare",
    },
    {
      h2: "Ce analizez imediat într-un dosar de fraudă informatică",
      bullets: [
        "Încadrarea juridică reținută și dacă fapta descrisă corespunde textului de lege.",
        "Legalitatea obținerii probelor digitale și a autorizațiilor emise.",
        "Modul de identificare a persoanei care a folosit efectiv contul sau dispozitivul.",
        "Rapoartele tehnice și concluziile privind datele informatice.",
        "Fluxul financiar și destinația sumelor.",
        "Măsurile dispuse asupra conturilor, dispozitivelor și activelor digitale.",
      ],
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi ce ți s-a comunicat și ce a fost ridicat efectiv."],
      subsections: [
        {
          h3: "Procese-verbale de percheziție și ridicare",
          paragraphs: ["Actele întocmite la percheziție, lista dispozitivelor ridicate și mențiunile privind sigilarea."],
        },
        {
          h3: "Extrase și tranzacții bancare",
          paragraphs: ["Extrasele de cont pentru perioada relevantă și documentele privind transferurile contestate."],
        },
        {
          h3: "Mesaje, emailuri și conturi relevante",
          paragraphs: ["Corespondența care lămurește contextul operațiunilor și accesul altor persoane la conturi."],
        },
        {
          h3: "Documentele privind dispozitivele ridicate",
          paragraphs: ["Dovezile de proprietate, facturile și informațiile despre persoanele care foloseau dispozitivele."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce este frauda informatică",
      paragraphs: [
        "Frauda informatică presupune cauzarea unui prejudiciu patrimonial prin introducerea, modificarea sau ștergerea de date informatice, prin restricționarea accesului la aceste date ori prin împiedicarea funcționării unui sistem informatic, în scopul obținerii unui beneficiu material.",
        [
          { text: "Fapta este reglementată de art. 249 Cod penal și se analizează, în dosarele de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: ", împreună cu celelalte infracțiuni informatice care apar în aceeași cauză." },
        ],
      ],
    },
    {
      h2: "Ce fapte pot constitui fraudă informatică",
      subsections: [
        {
          h3: "Introducerea sau transmiterea de date informatice",
          paragraphs: ["Inserarea unor date care modifică rezultatul unei operațiuni, cum sunt datele de plată sau informațiile dintr-o aplicație."],
        },
        {
          h3: "Modificarea sau ștergerea datelor",
          paragraphs: ["Alterarea înregistrărilor existente într-un sistem informatic, pentru a produce un rezultat patrimonial diferit de cel real."],
        },
        {
          h3: "Restricționarea accesului la date",
          paragraphs: ["Blocarea accesului titularului la propriile date, atunci când urmărește obținerea unui beneficiu material."],
        },
        {
          h3: "Împiedicarea funcționării unui sistem informatic",
          paragraphs: ["Intervenția care afectează funcționarea normală a sistemului, cu consecințe patrimoniale pentru titular."],
        },
      ],
    },
    {
      h2: "Care este diferența dintre frauda informatică și înșelăciune",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "La " },
          { text: "înșelăciune", to: "/servicii/inselaciune-frauda" },
          { text: ", este amăgită o persoană, care acționează ea însăși pe baza unei reprezentări false a realității." },
        ],
        "La fraudă informatică, rezultatul patrimonial este obținut prin intervenția asupra datelor sau a funcționării unui sistem informatic, fără ca o persoană să fie amăgită.",
        "Delimitarea dintre art. 249 și art. 244 a fost analizată explicit în jurisprudența Înaltei Curți și influențează direct încadrarea juridică din dosarul tău.",
      ],
    },
    {
      h2: "Frauda informatică și alte infracțiuni informatice",
      subsections: [
        {
          h3: "Acces ilegal la un sistem informatic",
          paragraphs: ["Accesarea fără drept a unui sistem informatic, incriminată distinct, chiar dacă nu s-a produs un prejudiciu."],
        },
        {
          h3: "Fals informatic",
          paragraphs: ["Alterarea datelor informatice pentru a produce consecințe juridice, incriminată separat de frauda informatică."],
        },
        {
          h3: "Operațiuni financiare efectuate în mod fraudulos",
          paragraphs: ["Efectuarea de operațiuni de retragere de numerar, transfer sau plată prin folosirea unui instrument de plată electronică ori a datelor de identificare ale acestuia."],
        },
      ],
    },
    {
      h2: "Cum sunt analizate probele digitale într-un dosar de fraudă informatică",
      subsections: [
        {
          h3: "Telefoane și calculatoare",
          paragraphs: ["Conținutul dispozitivelor este examinat pe baza unei autorizații, iar modul de ridicare și sigilare poate fi verificat și contestat."],
        },
        {
          h3: "Adrese IP, conturi și log-uri",
          paragraphs: ["O adresă IP indică o conexiune, nu neapărat o persoană. Aceeași observație se aplică unui cont folosit de mai multe persoane."],
        },
        {
          h3: "Tranzacții bancare",
          paragraphs: ["Extrasele și rapoartele bancare arată fluxul sumelor, dar nu identifică singure persoana care a inițiat operațiunea."],
        },
        {
          h3: "Date din platforme și servicii online",
          paragraphs: ["Datele furnizate de platforme trebuie obținute în condițiile legii și interpretate în raport cu contextul tehnic concret."],
        },
      ],
    },
    {
      h2: "Percheziția informatică și ridicarea dispozitivelor",
      paragraphs: [
        [
          { text: "Examinarea conținutului unui dispozitiv se face pe baza unei autorizații emise de judecător. Regulile aplicabile sunt cele analizate pe pagina dedicată " },
          { text: "percheziției informatice", to: "/servicii/perchezitie-informatica" },
          { text: "." },
        ],
        "Verific temeiul măsurii, obiectul autorizației și modul de consemnare a operațiunilor, iar atunci când există motive solicit restituirea dispozitivelor care nu mai sunt necesare anchetei.",
      ],
    },
    {
      h2: "Frauda informatică și tranzacțiile cu criptomonede",
      paragraphs: [
        [
          { text: "În dosarele care implică active digitale, analiza se extinde la portofele, platforme de schimb și trasee de tranzacții. Aceste aspecte sunt tratate detaliat în cadrul serviciului de " },
          { text: "investigații privind activele cripto", to: "/servicii/investigatii-privind-activele-cripto" },
          { text: "." },
        ],
        "Tranzacțiile efectuate pe rețele publice pot fi urmărite, dar legătura dintre un portofel și o persoană trebuie dovedită separat, cu probe suplimentare.",
      ],
    },
    {
      h2: "Sechestrul, confiscarea și recuperarea prejudiciului",
      paragraphs: [
        "În aceste dosare pot fi indisponibilizate conturi bancare, sume, dispozitive și active digitale, pentru garantarea recuperării prejudiciului.",
        "Verific proporționalitatea măsurilor, formulez contestație atunci când există motive și analizez efectul recuperării prejudiciului asupra soluției din dosar.",
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de fraudă informatică",
      bullets: [
        "Contest încadrarea juridică atunci când fapta descrisă nu corespunde textului de lege.",
        "Verific legalitatea obținerii probelor digitale și a autorizațiilor emise.",
        "Susțin lipsa identificării certe a persoanei care a folosit contul sau dispozitivul.",
        "Solicit expertiză tehnică atunci când rapoartele existente sunt incomplete.",
        "Te pregătesc pentru audieri și te asist la fiecare termen.",
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "Care este diferența dintre fraudă informatică și înșelăciune?",
      a: "La înșelăciune este amăgită o persoană, care acționează pe baza unei reprezentări false. La fraudă informatică, prejudiciul se produce prin intervenția asupra datelor sau a funcționării unui sistem informatic.",
    },
    {
      q: "Este suficientă folosirea internetului pentru a exista fraudă informatică?",
      a: "Nu. Folosirea internetului nu transformă orice faptă în fraudă informatică. Trebuie dovedită o intervenție asupra datelor sau asupra funcționării unui sistem informatic.",
    },
    {
      q: "Poliția îmi poate ridica telefonul sau laptopul?",
      a: "Da, dispozitivele pot fi ridicate în condițiile legii, de regulă în cadrul unei percheziții. Examinarea conținutului lor presupune însă o autorizație distinctă.",
    },
    {
      q: "Ce este percheziția informatică?",
      a: "Este procedura prin care se examinează conținutul unui sistem informatic sau al unui suport de stocare, pe baza unei autorizații emise de judecător.",
    },
    {
      q: "Cum se stabilește cine a folosit un cont sau dispozitiv?",
      a: "Prin coroborarea datelor tehnice cu alte probe. O adresă IP sau un cont nu identifică, prin ele însele, persoana care a efectuat operațiunea.",
    },
    {
      q: "Tranzacțiile cu criptomonede pot fi urmărite?",
      a: "Da, tranzacțiile efectuate pe rețele publice pot fi analizate. Legătura dintre un portofel și o persoană trebuie însă dovedită cu probe suplimentare.",
    },
    {
      q: "Ce se întâmplă cu dispozitivele ridicate?",
      a: "Sunt păstrate cât timp sunt necesare anchetei. Se poate solicita restituirea lor, iar cererea se analizează în raport cu stadiul dosarului și cu utilitatea probatorie.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 249 privind frauda informatică.", href: CP, linkLabel: "Legislație" },
    { text: "Codul de procedură penală - art. 168 privind percheziția informatică.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

export const fonduriEuropeneRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/fonduri-europene",
  altPath: "/en/services/eu-funds-fraud",
  roPath: "/servicii/fonduri-europene",
  title: "Avocat Fraudă Fonduri Europene București | Bogdan Lamatic",
  h1: "Avocat pentru fraudă cu fonduri europene în București",
  description:
    "Avocat fraudă fonduri europene București. Apărare în dosare DLAF și DNA privind proiecte finanțate din fonduri UE, nereguli și prejudiciu. Sună acum.",
  keywords:
    "avocat fraudă fonduri europene, deturnare fonduri UE, dosar DLAF, avocat fonduri europene bucurești",
  breadcrumbLabel: "Fonduri europene",
  serviceName: "Avocat fraudă fonduri europene București - Bogdan Lamatic",
  urgency: [
    "Ai un proiect finanțat din fonduri europene verificat de DLAF sau ai fost chemat la Parchet?",
    "În aceste dosare, distincția dintre o neregulă administrativă și o faptă penală se stabilește pe documentele proiectului, iar explicațiile trebuie susținute de la început cu acte.",
  ],
  bio: [
    `${BIO_INTRO} Asist beneficiari, administratori și societăți în dosare privind fondurile europene, de la controalele autorităților de management și verificările DLAF până la faza de judecată.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi ce etapă a fost atinsă în proiectul tău."],
      subsections: [
        {
          h3: "Ai primit o solicitare sau un control privind un proiect finanțat din fonduri UE",
          paragraphs: [
            "Răspunsurile date autorității de management devin parte din dosar. Le pregătesc împreună cu tine, pe baza documentelor proiectului.",
          ],
        },
        {
          h3: "DLAF verifică proiectul",
          paragraphs: [
            "Verificarea DLAF poate fi urmată de o sesizare penală. Analizez obiectul controlului și pregătesc punctul de vedere pe fiecare aspect reclamat.",
          ],
        },
        {
          h3: "Ai fost chemat la DNA, Parchet sau alt organ de urmărire penală",
          paragraphs: [
            [
              { text: "Înainte de audiere trebuie să știi ce faptă este cercetată și pe ce documente se sprijină. Pentru dosarele instrumentate de Direcția Națională Anticorupție se aplică regulile analizate pe pagina " },
              { text: "avocat DNA", to: "/servicii/avocat-dna" },
              { text: "." },
            ],
          ],
        },
        {
          h3: "Sunt contestate documentele folosite pentru obținerea finanțării",
          paragraphs: [
            "Verific fiecare document reclamat, proveniența lui și dacă informațiile cuprinse aveau relevanță pentru acordarea finanțării.",
          ],
        },
        {
          h3: "Autoritatea solicită recuperarea fondurilor",
          paragraphs: [
            "Recuperarea sumelor este un demers distinct de răspunderea penală. Cele două proceduri se pot desfășura în paralel și trebuie gestionate coordonat.",
          ],
        },
      ],
      ctaAfterSubsections: "Am un dosar privind fonduri europene - vreau o evaluare",
    },
    {
      h2: "Ce analizez imediat într-un dosar privind fondurile europene",
      bullets: [
        "Ce faptă este reținută concret și ce document stă la baza acuzației.",
        "Condițiile din ghidul finanțării și din contractul de finanțare.",
        "Documentele justificative depuse la cererile de plată sau rambursare.",
        "Procedurile de achiziție derulate în cadrul proiectului.",
        "Constatările autorităților de management și ale DLAF.",
        "Modul de calcul al prejudiciului și măsurile asigurătorii dispuse.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Spune-mi din ce program a fost finanțat proiectul și ce se reclamă concret."],
      subsections: [
        {
          h3: "Cererea și contractul de finanțare",
          paragraphs: ["Cererea de finanțare, contractul și actele adiționale, împreună cu ghidul aplicabil."],
        },
        {
          h3: "Cererile de plată și rambursare",
          paragraphs: ["Cererile depuse, rapoartele de progres și corespondența cu autoritatea de management."],
        },
        {
          h3: "Facturile și documentele justificative",
          paragraphs: ["Facturile, dovezile de plată, procesele-verbale de recepție și documentele privind livrările."],
        },
        {
          h3: "Documentele achizițiilor",
          paragraphs: ["Documentația de atribuire, ofertele primite, rapoartele de evaluare și contractele încheiate."],
        },
        {
          h3: "Rapoartele de control și constatările autorităților",
          paragraphs: ["Notele de constatare a neregulilor, rapoartele DLAF și orice sesizare penală comunicată."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Când o neregulă privind fondurile europene poate deveni dosar penal",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Neregula este o abatere de la regulile de finanțare, care atrage corecții financiare și recuperarea sumelor afectate. Ea poate rezulta din interpretări diferite, erori de raportare sau vicii de procedură.",
        [
          { text: "Fapta penală presupune, în plus, folosirea unor documente ori declarații false, inexacte sau incomplete ori omisiunea unor informații, cu intenția de a obține fondurile. Această delimitare este esențială în dosarele de " },
          { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
          { text: " privind finanțările europene." },
        ],
      ],
    },
    {
      h2: "Ce fapte pot constitui fraudă cu fonduri europene",
      subsections: [
        {
          h3: "Folosirea unor documente sau declarații false, inexacte ori incomplete",
          paragraphs: ["Depunerea unor documente care nu reflectă realitatea, în vederea obținerii finanțării sau a rambursării cheltuielilor."],
        },
        {
          h3: "Omiterea unor informații relevante pentru obținerea fondurilor",
          paragraphs: ["Neprezentarea unor date pe care beneficiarul avea obligația să le comunice, atunci când acestea influențau acordarea finanțării."],
        },
        {
          h3: "Schimbarea destinației fondurilor obținute",
          paragraphs: ["Utilizarea sumelor în alt scop decât cel pentru care au fost acordate, faptă reglementată distinct de lege."],
        },
        {
          h3: "Alte fapte care afectează interesele financiare ale Uniunii Europene",
          paragraphs: ["Conduite care produc un prejudiciu bugetului Uniunii, inclusiv în legătură cu procedurile de achiziție din cadrul proiectului."],
        },
      ],
      calloutAfterSubsections: "Regimul penal specific este prevăzut în principal de art. 18 indice 1 - 18 indice 5 din Legea 78/2000, iar schimbarea nelegală a destinației fondurilor este reglementată distinct.",
    },
    {
      h2: "Care este diferența dintre neregulă administrativă și fraudă penală cu fonduri europene",
      paragraphs: [
        "Neregula se constată de autoritățile de management sau de organismele de control și se soluționează prin corecții financiare și recuperarea sumelor.",
        "Frauda presupune intenția de a obține fonduri necuvenite, dovedită prin documente false, informații omise sau folosirea sumelor în alt scop. Fără această componentă intenționată, discuția rămâne administrativă.",
      ],
    },
    {
      h2: "Cine investighează fraudele cu fonduri europene",
      subsections: [
        {
          h3: "Rolul DLAF",
          paragraphs: ["Departamentul pentru lupta antifraudă efectuează controale administrative privind fondurile europene și poate sesiza organele de urmărire penală."],
        },
        {
          h3: "Urmărirea penală",
          paragraphs: ["Ancheta se desfășoară de procuror, cu administrarea de probe, expertize și audieri, iar apărarea poate formula cereri în tot acest interval."],
        },
        {
          h3: "Competența organului de anchetă în funcție de dosar",
          paragraphs: ["În funcție de faptă, de calitatea persoanelor implicate și de valoarea prejudiciului, competența poate aparține Direcției Naționale Anticorupție sau parchetelor de drept comun."],
        },
      ],
      calloutAfterSubsections: "DLAF are inclusiv canal oficial pentru sesizarea fraudelor care afectează fondurile Uniunii Europene.",
    },
    {
      h2: "Documentele false în dosarele privind fondurile europene",
      paragraphs: [
        [
          { text: "Acuzația privind documentele depuse la finanțator este analizată frecvent împreună cu problematica de " },
          { text: "fals și uz de fals", to: "/servicii/fals-si-uz-de-fals" },
          { text: ", pentru că aceleași înscrisuri susțin ambele acuzații." },
        ],
        "Verific proveniența fiecărui document, cine l-a întocmit și dacă informația contestată era relevantă pentru decizia de finanțare. Un document inexact nu echivalează automat cu un document falsificat.",
      ],
    },
    {
      h2: "Problemele din achizițiile unui proiect finanțat din fonduri europene",
      paragraphs: [
        "Achizițiile sunt zona în care apar cele mai multe constatări: criterii restrictive, oferte pregătite de aceeași persoană, prețuri supraevaluate sau modificări ale contractelor pe parcursul executării.",
        "Nu orice abatere de procedură constituie infracțiune. Analizez dacă abaterea a produs un prejudiciu real și dacă există dovada unei conduite intenționate, nu doar a unei erori de aplicare a procedurii.",
      ],
    },
    {
      h2: "Recuperarea fondurilor și răspunderea penală sunt același lucru?",
      paragraphs: [
        "Nu. Recuperarea fondurilor este o consecință administrativă a neregulii constatate și poate exista chiar și atunci când nu se reține nicio faptă penală.",
        "Obligația de a restitui o parte din finanțare nu dovedește, prin ea însăși, comiterea unei infracțiuni. Cele două proceduri au condiții și standarde de probă diferite.",
      ],
    },
    {
      h2: "Cum se stabilește prejudiciul într-un dosar privind fondurile europene",
      paragraphs: [
        "Prejudiciul se raportează la sumele plătite necuvenit din fonduri europene sau naționale de cofinanțare, nu la valoarea totală a proiectului.",
        "Analizez ce cheltuieli au fost efectiv realizate și justificate, susțin expertiză atunci când calculul este contestabil și formulez obiecțiuni la rapoartele depuse la dosar.",
      ],
    },
    {
      h2: "Sechestrul și recuperarea prejudiciului",
      paragraphs: [
        "În aceste dosare se dispun frecvent măsuri asigurătorii asupra conturilor, imobilelor sau bunurilor achiziționate prin proiect, pentru garantarea recuperării prejudiciului.",
        "Verific proporționalitatea măsurii față de suma reținută și formulez contestație atunci când sechestrul afectează bunuri fără legătură cu proiectul sau depășește prejudiciul invocat.",
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar privind fondurile europene",
      bullets: [
        "Delimitez neregula administrativă de acuzația penală, pe documentele proiectului.",
        "Dovedesc realitatea cheltuielilor și a activităților implementate.",
        "Contest caracterul fals sau relevanța documentelor reclamate.",
        "Atac modul de calcul al prejudiciului prin expertiză și obiecțiuni.",
        "Te pregătesc pentru audieri și te asist la fiecare termen, inclusiv în dosarele instrumentate de DNA.",
      ],
      cta: "Vreau o strategie pentru dosarul meu",
    },
  ],
  faq: [
    {
      q: "Orice neregulă într-un proiect înseamnă fraudă?",
      a: "Nu. Neregula atrage corecții financiare și recuperarea sumelor. Frauda presupune intenția de a obține fonduri necuvenite, prin documente false, informații omise sau folosirea sumelor în alt scop.",
    },
    {
      q: "Dacă trebuie să restitui finanțarea înseamnă că am comis o infracțiune?",
      a: "Nu. Obligația de restituire este o consecință administrativă și poate exista și în lipsa oricărei fapte penale. Cele două proceduri au condiții și standarde de probă diferite.",
    },
    {
      q: "Ce documente false pot genera un dosar penal?",
      a: "Documentele depuse pentru obținerea finanțării sau pentru rambursarea cheltuielilor, atunci când nu reflectă realitatea: facturi, procese-verbale de recepție, declarații sau documente de achiziție.",
    },
    {
      q: "Cine investighează fraudele cu fonduri europene?",
      a: "Controlul administrativ este realizat de DLAF și de autoritățile de management, iar ancheta penală se desfășoară de procuror, în funcție de competență, inclusiv de Direcția Națională Anticorupție.",
    },
    {
      q: "Firma și administratorul pot răspunde simultan?",
      a: "Da. Persoana juridică poate răspunde penal alături de persoanele fizice implicate, iar în paralel poate exista obligația de restituire a fondurilor.",
    },
    {
      q: "Poate fi pus sechestru pe bunuri?",
      a: "Da, inclusiv pe bunurile achiziționate prin proiect sau pe alte bunuri, în limita prejudiciului reținut. Măsura poate fi contestată atunci când este disproporționată.",
    },
    {
      q: "Ce se întâmplă dacă fondurile au fost folosite în alt scop?",
      a: "Schimbarea destinației fondurilor este reglementată distinct și poate atrage răspundere penală, alături de obligația de restituire a sumelor.",
    },
    {
      q: "Pot exista în același dosar și acuzații de fals?",
      a: "Da. Acuzația privind documentele depuse la finanțator este analizată frecvent împreună cu falsul și uzul de fals, pentru că aceleași înscrisuri susțin ambele acuzații.",
    },
  ],
  resources: [
    { text: "Legea 78/2000 - infracțiuni împotriva intereselor financiare ale Uniunii Europene.", href: CP, linkLabel: "Legislație" },
    { text: "Codul de procedură penală - art. 249 și urm. privind măsurile asigurătorii.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_CE,
};

/* ============================================================
   Subservicii - pagina-pilon Infracțiuni de corupție
   ============================================================ */

const L78 = "https://legislatie.just.ro/Public/DetaliiDocument/22361";

const PARENT_COR = {
  to: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
  label: "infracțiuni de corupție",
  breadcrumbLabel: "Infracțiuni de corupție",
};

export const dareLuareDeMitaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/dare-luare-de-mita",
  altPath: "/en/services/bribery-giving-and-taking",
  roPath: "/servicii/dare-luare-de-mita",
  title: "Avocat Dare și Luare de Mită București | Bogdan Lamatic",
  h1: "Avocat dare de mită și luare de mită în București",
  description:
    "Avocat dare de mită și luare de mită în București. Apărare în dosare de corupție, flagrant, audieri și măsuri preventive. 18+ ani experiență.",
  keywords:
    "avocat dare de mita, avocat luare de mita, avocat mita bucuresti, dosar coruptie mita",
  breadcrumbLabel: "Dare și luare de mită",
  serviceName: "Avocat dare și luare de mită București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru dare de mită sau luare de mită, ori ai fost prins într-un flagrant?",
    "În aceste dosare, primele declarații, interceptările și modul în care este descrisă suma sau folosul primit decid direcția întregii anchete.",
  ],
  bio: [
    `${BIO_INTRO} Asist funcționari publici, angajați din mediul privat și persoane acuzate că au oferit sume sau alte foloase, în dosare de mită instrumentate de Parchet sau de DNA.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi în ce etapă ești, pentru că apărarea se construiește diferit în fiecare dintre aceste situații."],
      subsections: [
        {
          h3: "Ai fost prins în flagrant",
          paragraphs: [
            "Verific modul în care a fost organizat flagrantul, dacă erau întrunite condițiile legale și cum au fost consemnate sumele sau bunurile ridicate.",
          ],
        },
        {
          h3: "Ai fost chemat la audiere ca suspect",
          paragraphs: [
            "Analizez ordonanța, stabilesc ce faptă este reținută concret și pregătim împreună declarația, înainte de a te prezenta.",
          ],
        },
        {
          h3: "Ai oferit sau ai promis o sumă și acum ești cercetat",
          paragraphs: [
            "Verific dacă fapta a fost determinată prin constrângere din partea funcționarului și dacă poate opera cauza de nepedepsire prevăzută de lege pentru denunțător.",
          ],
        },
        {
          h3: "S-a propus o măsură preventivă în dosar",
          paragraphs: [
            "Pregătesc apărarea pentru propunerea de arestare sau de control judiciar și contest temeiurile invocate de procuror.",
          ],
        },
      ],
      ctaAfterSubsections: "Sunt cercetat pentru mită - vreau o evaluare",
    },
    {
      h2: "Ce analizez imediat într-un dosar de mită",
      bullets: [
        "Calitatea persoanei cercetate și atribuțiile ei reale de serviciu.",
        "Legătura dintre suma sau folosul reclamat și un act concret de serviciu.",
        "Legalitatea interceptărilor, a înregistrărilor ambientale și a autorizațiilor.",
        "Modul de organizare a flagrantului și consemnarea bunurilor ridicate.",
        "Declarațiile denunțătorului și consecvența lor pe parcursul dosarului.",
        "Măsurile asigurătorii dispuse asupra conturilor și bunurilor.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Trimite-mi ce ai la îndemână, chiar dacă dosarul este la început."],
      subsections: [
        {
          h3: "Actele primite de la organele judiciare",
          paragraphs: ["Citația, ordonanța de punere în mișcare a acțiunii penale, procesul-verbal de flagrant sau de percheziție."],
        },
        {
          h3: "Documentele de serviciu",
          paragraphs: ["Fișa postului, decizii interne, regulamente și orice act care arată ce atribuții aveai în realitate."],
        },
        {
          h3: "Corespondența relevantă",
          paragraphs: ["Mesaje, e-mailuri sau documente care explică natura relației cu persoana care a formulat denunțul."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce trebuie să faci dacă ai fost prins în flagrant pentru dare sau luare de mită",
      paragraphs: [
        "Flagrantul este momentul în care se strâng cele mai multe probe împotriva ta, dar și momentul în care se fac cele mai multe greșeli de procedură. Primele ore după flagrant decid, de multe ori, direcția întregului dosar.",
        "Nu semna și nu explica nimic înainte să discuți cu un avocat. Ai dreptul să nu dai declarații, iar acest drept nu poate fi folosit împotriva ta.",
      ],
      subsections: [
        {
          h3: "Ce verific la procesul-verbal de flagrant",
          paragraphs: ["Procesul-verbal este actul care fixează momentul faptei, iar orice neconcordanță din el poate schimba interpretarea probelor."],
          bullets: [
            { bold: "Ora și locul:", rest: "dacă se potrivesc cu celelalte probe din dosar, inclusiv cu datele din telefon sau din camerele de supraveghere." },
            { bold: "Martorii asistenți:", rest: "dacă au fost prezenți efectiv și dacă au semnat în condițiile prevăzute de lege." },
            { bold: "Descrierea sumei sau a foloaselor:", rest: "seriile bancnotelor, modul de marcare, locul exact unde au fost găsite bunurile." },
            { bold: "Concordanța cu autorizarea:", rest: "dacă activitatea desfășurată se încadrează în ceea ce fusese autorizat de judecător sau de procuror." },
          ],
        },
        {
          h3: "Ce trebuie verificat înainte de prima declarație",
          bullets: [
            { bold: "Calitatea procesuală:", rest: "ești audiat ca martor, ca suspect sau ca inculpat, pentru că drepturile diferă substanțial." },
            { bold: "Dreptul la avocat:", rest: "dacă ți-a fost comunicat efectiv și dacă ai avut posibilitatea să vorbești cu avocatul înainte de audiere." },
            { bold: "Dreptul de a nu declara:", rest: "poți refuza să dai declarații fără nicio consecință legală negativă." },
            { bold: "Riscul declarațiilor date sub presiune:", rest: "o declarație dată în stres, fără acces la actele dosarului, este greu de corectat ulterior." },
          ],
        },
        {
          h3: "Interceptările și înregistrările folosite în flagrant",
          bullets: [
            { bold: "Autorizarea:", rest: "existența mandatului de supraveghere tehnică și acoperirea perioadei în care s-au făcut înregistrările." },
            { bold: "Momentul obținerii:", rest: "dacă înregistrările au fost realizate înainte sau după autorizare." },
            { bold: "Corespondența cu transcrierile:", rest: "dacă redarea scrisă reflectă fidel conținutul audio, inclusiv pauzele și frazele incomplete." },
          ],
        },
        {
          h3: "Rolul denunțătorului și problema provocării",
          paragraphs: [
            "Multe dosare de mită pornesc de la un denunț. Verific dacă denunțătorul are un interes propriu, dacă a colaborat cu organele de urmărire penală și, mai important, dacă fapta exista deja sau a fost determinată prin insistențele lui.",
            "Limita dintre constatarea unei fapte existente și determinarea ei este esențială: probele obținute prin provocare nu pot fi folosite împotriva ta.",
          ],
        },
      ],
      calloutAfterSubsections: "Ai fost prins în flagrant chiar acum? Nu ai actele la tine?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaAfterSubsections: "A avut loc un flagrant? - Sună-mă acum!",
    },
    {
      h2: "Denunțul, constrângerea și nepedepsirea la darea de mită",
      paragraphs: [
        "Art. 290 Cod penal conține două supape importante pentru persoana care a dat mită: situația în care fapta a fost săvârșită sub constrângere și cauza de nepedepsire prin denunț. Ambele au condiții stricte de aplicare.",
      ],
      subsections: [
        {
          h3: "Când denunțul poate înlătura pedeapsa",
          paragraphs: [
            "Mituitorul nu se pedepsește dacă denunță fapta înainte ca organul de urmărire penală să fie sesizat cu privire la aceasta. Denunțul trebuie să fie complet și să privească fapta concretă, nu doar o descriere generală a unor nereguli.",
          ],
        },
        {
          h3: "Ce înseamnă că organul de urmărire penală nu fusese încă sesizat",
          paragraphs: [
            "Condiția se analizează raportat la momentul în care organele judiciare au primit prima informație despre fapta ta, prin plângere, denunț, sesizare din oficiu sau proces-verbal. Dacă dosarul era deja început pentru acea faptă, denunțul nu mai produce efectul de nepedepsire, dar poate conta la individualizarea pedepsei.",
          ],
        },
        {
          h3: "Ce se întâmplă dacă ai fost constrâns să dai mită",
          paragraphs: [
            "Dacă ai dat banii sau foloasele pentru că ai fost constrâns prin orice mijloace de către cel care a luat mita, fapta nu constituie infracțiune. Aici probele contează decisiv: mesaje, martori, refuzuri repetate, cereri respinse abuziv sau amânări nejustificate ale unui act care ți se cuvenea.",
          ],
        },
        {
          h3: "Când se restituie banii și când se confiscă",
          bullets: [
            { bold: "Restituire:", rest: "banii sau bunurile se restituie persoanei care a dat mită sub constrângere, precum și celui care a denunțat fapta înainte de sesizarea organelor." },
            { bold: "Confiscare:", rest: "în celelalte situații, sumele și foloasele primite se confiscă, iar când nu se mai găsesc, se confiscă echivalentul în bani." },
            { bold: "Bunuri marcate în flagrant:", rest: "rămân indisponibilizate până la soluționarea dosarului, chiar dacă provin din surse licite." },
          ],
        },
      ],
    },
    {
      h2: "Când un cadou, o „atenție” sau un avantaj poate fi considerat mită?",
      paragraphs: [
        "Multe persoane cercetate pentru mită nu se recunosc în formularea „am dat” sau „am primit mită”. În practică, discuția se poartă despre un cadou, o atenție, o masă, o reparație, un discount sau un ajutor între cunoștințe.",
        "Art. 289 Cod penal vorbește despre bani sau alte foloase care nu se cuvin, primite în legătură cu îndeplinirea, neîndeplinirea, urgentarea sau întârzierea unui act ce intră în atribuțiile de serviciu ale funcționarului. Legătura cu atribuțiile de serviciu este elementul care transformă un gest social într-o acuzație penală.",
      ],
      bullets: [
        { bold: "Legătura cu atribuțiile de serviciu:", rest: "dacă persoana avea competența de a decide, de a aviza sau de a influența actul respectiv." },
        { bold: "Foloasele care nu se cuvin:", rest: "orice avantaj patrimonial sau nepatrimonial la care persoana nu avea dreptul, indiferent de denumirea dată." },
        { bold: "Momentul:", rest: "un folos oferit înainte de act este privit diferit de un cadou dat mult după finalizarea unei relații de serviciu." },
        { bold: "Valoarea și contextul:", rest: "un gest simbolic, în context privat și fără legătură cu un dosar aflat în lucru, nu are aceeași semnificație ca un folos proporțional cu decizia obținută." },
        { bold: "Caracterul repetitiv:", rest: "atențiile repetate către aceeași persoană care decide sunt aproape întotdeauna interpretate ca mită." },
      ],
      paragraphsAfterBullets: [
        "Sunt situații în care nu există infracțiune: gesturi de curtoazie fără legătură cu un act de serviciu, avantaje acordate în mod legal și transparent, sau plăți efectuate în baza unui contract real, cu documente justificative.",
        [
          { text: "Când folosul a fost oferit unei persoane care pretinde că are influență asupra unui funcționar, încadrarea corectă poate fi cea de " },
          { text: "trafic sau cumpărare de influență", to: "/servicii/trafic-de-influenta" },
          { text: ", cu un alt regim probatoriu." },
        ],
      ],
    },
    {
      h2: "Cum sunt analizate interceptările și înregistrările într-un dosar de mită",
      paragraphs: [
        "În dosarele de corupție, interceptările și înregistrările ambientale sunt adesea proba centrală. Tocmai de aceea sunt și proba cea mai vulnerabilă la contestare, dacă este analizată în detaliu.",
      ],
      bullets: [
        { bold: "Autorizarea:", rest: "verific existența și limitele mandatului de supraveghere tehnică, perioada acoperită, persoanele și mijloacele de comunicare vizate, precum și motivarea măsurii." },
        { bold: "Integritatea înregistrării:", rest: "continuitatea fișierelor, lipsa întreruperilor nejustificate, modul de stocare și de transfer, existența copiilor de referință." },
        { bold: "Contextul conversației:", rest: "o frază izolată poate schimba complet sensul discuției; cer redarea integrală a conversației, nu doar fragmentul selectat." },
        { bold: "Transcrieri incomplete:", rest: "compar redarea scrisă cu suportul audio, pentru a identifica pasajele omise, cuvintele înțelese greșit sau atribuirile eronate de replici." },
        { bold: "Interpretarea expresiilor ambigue:", rest: "termeni generici precum „rezolvăm”, „vedem ce facem” sau „ne înțelegem” nu dovedesc singuri o promisiune de mită." },
      ],
      calloutAfterBullets: "În dosar există interceptări și nu știi exact ce conțin?",
      calloutAfterBulletsCta: "Sună oricum",
    },
    {
      h2: "Sechestrul și confiscarea într-un dosar de mită",
      paragraphs: [
        "În paralel cu ancheta penală, procurorul poate dispune măsuri asigurătorii asupra bunurilor și conturilor, pentru a garanta confiscarea sau recuperarea prejudiciului. Aceste măsuri afectează imediat activitatea zilnică și afacerile familiei.",
      ],
      bullets: [
        { bold: "Măsurile asigurătorii:", rest: "sechestrul, poprirea și indisponibilizarea conturilor pot fi dispuse prin ordonanță, înainte de orice hotărâre de condamnare." },
        { bold: "Ce bunuri pot fi indisponibilizate:", rest: "sume de bani, conturi bancare, imobile, autoturisme și, în anumite situații, bunuri aflate la alte persoane." },
        { bold: "Confiscarea specială:", rest: "banii și foloasele primite ca mită se confiscă, iar dacă nu se mai găsesc, se confiscă echivalentul lor în bani sau bunuri." },
        { bold: "Restituirea:", rest: "bunurile date sub constrângere sau cele legate de un denunț anterior sesizării organelor pot fi restituite." },
        { bold: "Contestarea măsurii:", rest: "sechestrul poate fi contestat, iar limitele lui pot fi reduse când depășesc valoarea presupusului folos sau afectează bunuri fără legătură cu fapta." },
      ],
      paragraphsAfterBullets: [
        "Verific proporționalitatea măsurii, sursa licită a bunurilor și documentele care arată că acestea nu provin din fapta cercetată. O contestație bine documentată poate debloca activitatea economică chiar în timpul urmăririi penale.",
      ],
      cta: "Ți-au fost blocate conturile? - Sună-mă acum!",
    },
    {
      h2: "Ce înseamnă luarea de mită",
      paragraphs: [
        "Luarea de mită presupune pretinderea, primirea ori acceptarea promisiunii de bani sau alte foloase, de către un funcționar public, în legătură cu îndeplinirea, neîndeplinirea sau întârzierea unui act ce ține de atribuțiile sale de serviciu.",
        "Fapta este reglementată de art. 289 Cod penal și se poate reține chiar dacă suma nu a fost primită efectiv, fiind suficientă pretinderea sau acceptarea promisiunii.",
        [
          { text: "Atunci când fapta este cercetată alături de alte acuzații economice, dosarul intră frecvent în sfera de " },
          { text: "apărare în cauze economice", to: "/servicii/criminalitate-economica" },
          { text: ", cu expertize și analiza fluxurilor financiare." },
        ],
      ],
    },
    {
      h2: "Ce înseamnă darea de mită",
      paragraphs: [
        "Darea de mită constă în promisiunea, oferirea sau darea de bani ori alte foloase unui funcționar public, pentru ca acesta să îndeplinească, să nu îndeplinească sau să întârzie un act de serviciu. Fapta este prevăzută de art. 290 Cod penal.",
        "Legea prevede două situații importante: fapta nu constituie infracțiune atunci când persoana a fost constrânsă să dea mita, iar mituitorul nu se pedepsește dacă denunță fapta înainte ca organul de urmărire penală să fi fost sesizat.",
      ],
    },
    {
      h2: "Cine poate fi subiect al infracțiunii",
      paragraphs: [
        "Textul vizează funcționarii publici, dar răspunderea este extinsă prin art. 308 Cod penal și la persoanele care exercită atribuții în cadrul unei persoane juridice private, cum sunt administratorii, directorii sau angajații cu atribuții de decizie.",
        "Legea 78/2000 asimilează anumite categorii profesionale și extinde aplicarea textelor la fapte de corupție săvârșite în legătură cu fonduri publice sau europene.",
      ],
    },
    {
      h2: "Ce riști concret într-un dosar de mită",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "Pedeapsa închisorii, în limitele prevăzute de textul de incriminare pentru fiecare faptă.",
        "Interzicerea exercitării dreptului de a ocupa o funcție publică sau de a exercita profesia.",
        "Confiscarea sumelor sau bunurilor care au făcut obiectul mitei.",
        "Măsuri asigurătorii asupra conturilor și bunurilor personale, pe durata procesului.",
        "Consecințe disciplinare și profesionale în paralel cu procesul penal.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Dacă în dosar se discută deja o propunere de arestare sau de control judiciar, apărarea trebuie pregătită imediat pentru " },
          { text: "termenul privind măsura preventivă", to: "/servicii/masuri-preventive" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Diferența dintre mită și trafic de influență",
      paragraphs: [
        "La mită, folosul este pretins sau oferit chiar funcționarului care are atribuția de serviciu vizată.",
        [
          { text: "La " },
          { text: "cumpărarea sau vânzarea de influență", to: "/servicii/trafic-de-influenta" },
          { text: ", folosul ajunge la o persoană care susține că are influență asupra funcționarului, fără ca funcționarul să primească ceva." },
        ],
        "Delimitarea are consecințe directe asupra încadrării juridice și asupra probelor care trebuie administrate.",
      ],
    },
    {
      h2: "Cum construiesc apărarea",
      bullets: [
        "Verific dacă există o legătură dovedită între folos și un act concret de serviciu.",
        "Contest legalitatea mijloacelor de probă obținute prin interceptare sau prin colaborator.",
        "Analizez rolul denunțătorului și eventuala provocare la comiterea faptei.",
        "Susțin constrângerea sau lipsa intenției, atunci când probele o permit.",
        "Te pregătesc pentru audieri și te asist la fiecare termen, inclusiv în dosarele instrumentate de DNA.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Când ancheta este condusă de procurorii anticorupție, se aplică regulile specifice descrise pe pagina de " },
          { text: "asistență în dosare DNA", to: "/servicii/avocat-dna" },
          { text: "." },
        ],
      ],
      cta: "De ce să mă alegi",
    },
  ],
  faq: [
    {
      q: "Se poate reține mita dacă nu am primit banii?",
      a: "Da. Este suficientă pretinderea sumei sau acceptarea promisiunii, chiar dacă banii nu au fost primiți efectiv.",
    },
    {
      q: "Ce se întâmplă dacă am fost constrâns să dau mită?",
      a: "Legea prevede că fapta nu constituie infracțiune atunci când mituitorul a fost constrâns prin orice mijloace de cel care a primit folosul. Constrângerea trebuie însă dovedită.",
    },
    {
      q: "Denunțul mă scutește de pedeapsă?",
      a: "Mituitorul nu se pedepsește dacă denunță fapta mai înainte ca organul de urmărire penală să fi fost sesizat cu privire la aceasta. Condițiile trebuie verificate atent în fiecare caz.",
    },
    {
      q: "Poate fi acuzat de mită un angajat dintr-o firmă privată?",
      a: "Da. Prin norma de extindere a răspunderii, textele se aplică și persoanelor care exercită atribuții într-o persoană juridică privată, cu limite de pedeapsă reduse.",
    },
    {
      q: "Banii ridicați la flagrant se restituie?",
      a: "Sumele care au făcut obiectul mitei sunt supuse confiscării. Situația bunurilor ridicate se analizează separat, în funcție de proveniența și rolul lor în dosar.",
    },
    {
      q: "Cine investighează dosarele de mită?",
      a: "În funcție de calitatea persoanei și de valoarea folosului, competența aparține parchetelor de drept comun sau Direcției Naționale Anticorupție.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 289 și art. 290 privind luarea și darea de mită.", href: CP, linkLabel: "Legislație" },
    { text: "Legea 78/2000 privind prevenirea, descoperirea și sancționarea faptelor de corupție.", href: L78, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR,
};

export const traficDeInfluentaRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/trafic-de-influenta",
  altPath: "/en/services/influence-peddling",
  roPath: "/servicii/trafic-de-influenta",
  title: "Avocat Trafic de Influență București | Bogdan Lamatic",
  h1: "Avocat trafic de influență în București",
  description:
    "Avocat trafic de influență și cumpărare de influență în București. Apărare în dosare de corupție, interceptări și denunțuri. 18+ ani experiență.",
  keywords:
    "avocat trafic de influenta, avocat cumparare de influenta, dosar trafic de influenta bucuresti",
  breadcrumbLabel: "Trafic de influență",
  serviceName: "Avocat trafic de influență București - Bogdan Lamatic",
  urgency: [
    "Ești acuzat că ai pretins bani susținând că ai influență asupra unui funcționar, sau că ai plătit pentru o astfel de intervenție?",
    "În aceste dosare, totul se joacă pe conținutul discuțiilor înregistrate și pe modul în care este interpretată promisiunea făcută.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane cercetate pentru trafic de influență și cumpărare de influență, în dosare bazate pe denunțuri, interceptări și înregistrări ambientale.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi unde este dosarul acum, ca să știm ce se poate face imediat."],
      subsections: [
        {
          h3: "Există un denunț împotriva ta",
          paragraphs: [
            "Analizez conținutul denunțului, momentul formulării lui și interesul denunțătorului în dosar.",
          ],
        },
        {
          h3: "Ai fost chemat la audiere",
          paragraphs: [
            "Stabilim ce faptă este reținută concret și pregătim declarația, pentru ca discuțiile invocate să fie explicate corect.",
          ],
        },
        {
          h3: "În dosar există interceptări sau înregistrări ambientale",
          paragraphs: [
            "Verific autorizațiile, integritatea înregistrărilor și transcrierile, pentru că interpretarea unei conversații este adesea decisivă.",
          ],
        },
        {
          h3: "Ai plătit pentru o intervenție și acum ești cercetat",
          paragraphs: [
            "Verific dacă poate opera cauza de nepedepsire prin denunț și care sunt riscurile reale în situația ta.",
          ],
        },
      ],
      ctaAfterSubsections: "Vreau o evaluare a dosarului meu",
    },
    {
      h2: "Ce analizez imediat în dosar",
      bullets: [
        "Dacă a existat o promisiune concretă de intervenție pe lângă un funcționar determinat.",
        "Dacă influența pretinsă era reală sau doar afirmată, pentru că infracțiunea există în ambele situații.",
        "Legalitatea și integritatea interceptărilor și a înregistrărilor.",
        "Rolul denunțătorului și eventuala provocare la comiterea faptei.",
        "Sumele reclamate, traseul lor financiar și documentele care le însoțesc.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Trimite-mi actele primite și, dacă există, transcrierile puse la dispoziție în dosar."],
      subsections: [
        {
          h3: "Actele din dosar",
          paragraphs: ["Citația, ordonanța de efectuare în continuare a urmăririi penale, procesul-verbal de percheziție."],
        },
        {
          h3: "Corespondența cu persoana care te acuză",
          paragraphs: ["Mesaje, e-mailuri, contracte sau documente care explică natura reală a relației dintre voi."],
        },
        {
          h3: "Documentele financiare",
          paragraphs: ["Extrase de cont, chitanțe, contracte de consultanță sau orice document care justifică sumele discutate."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Care este diferența dintre trafic de influență și înșelăciune?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Traficul de influență și înșelăciunea pot părea apropiate pentru că, în ambele situații, o persoană poate fi indusă în eroare cu promisiuni false. Diferența juridică este însă esențială: la trafic de influență este vorba despre promisiunea de a interveni pe lângă un funcționar public, în timp ce la înșelăciune nu există nicio legătură cu o astfel de intervenție.",
        [
          { text: "Dacă ești cercetat pentru o faptă care pare să aibă elemente din ambele infracțiuni, este util să vezi și pagina dedicată " },
          { text: "apărării în dosare de înșelăciune și fraudă", to: "/servicii/inselaciune-frauda" },
          { text: "." },
        ],
      ],
      subsections: [
        {
          h3: "Ce se întâmplă dacă persoana nu avea în realitate influență",
          paragraphs: [
            "Influența reală nu este un element obligatoriu al infracțiunii. Este suficient ca persoana să lase să se creadă că are influență asupra unui funcționar public și să pretindă sau să primească foloase în schimbul promisiunii de intervenție. Acesta este primul punct în care traficul de influență se separă clar de înșelăciune, unde este necesară inducerea în eroare cu privire la o situație de fapt.",
          ],
        },
        {
          h3: "Promisiunea unei intervenții vs simpla inducere în eroare",
          paragraphs: [
            "La trafic de influență, obiectul promisiunii este determinarea funcționarului să îndeplinească, să nu îndeplinească sau să întârzie un act de serviciu. La înșelăciune, obiectul inducerii în eroare poate fi orice situație de fapt care determină victima să transmită un patrimoniu. Dacă în discuție nu apare clar o intervenție pe lângă un funcționar, acuzația de trafic de influență poate fi contestată.",
          ],
        },
        {
          h3: "Pot exista ambele acuzații în același dosar?",
          paragraphs: [
            "Da. În practică, procurorii pot reține ambele infracțiuni, mai ales când persoana care a pretins că are influență nu a mai și intervenit, iar banii au fost primiți pe baza unei reprezentări false. Apărarea trebuie să delimiteze cu precizie care sunt elementele concrete ale fiecărei acuzații și ce probe le susțin.",
          ],
        },
      ],
    },
    {
      h2: "Denunțul și cauza de nepedepsire la cumpărarea de influență",
      paragraphs: [
        "Art. 292 Cod penal prevede în mod explicit că persoana care a cumpărat influență nu se pedepsește dacă denunță fapta înainte ca organul de urmărire penală să fi fost sesizat cu privire la aceasta. Acest termen este cel mai important și trebuie verificat cu atenție în fiecare caz.",
        [
          { text: "Mecanismul este asemănător cu cel de la " },
          { text: "darea și luarea de mită", to: "/servicii/dare-luare-de-mita" },
          { text: ", însă la cumpărarea de influență beneficiarul folosului este intermediarul, nu funcționarul însuși." },
        ],
      ],
      subsections: [
        {
          h3: "Când trebuie făcut denunțul",
          paragraphs: [
            "Denunțul trebuie făcut înainte ca organul de urmărire penală să fi fost sesizat cu privire la fapta de cumpărare de influență. Sesizarea se poate face de orice persoană, nu neapărat de denunțător. De aceea, este crucial să stabilim exact când a început urmărirea penală și dacă denunțul tău a fost anterior.",
          ],
        },
        {
          h3: "Când nu mai poate opera cauza de nepedepsire",
          paragraphs: [
            "Cauza de nepedepsire nu mai poate opera după ce organul de urmărire penală a fost sesizat oficial, după ce a început urmărirea penală sau după ce au fost dispuse măsuri procesuale. De asemenea, denunțul trebuie să fie real și complet, nu doar o simplă invocare verbală.",
          ],
        },
        {
          h3: "Ce se întâmplă cu banii dați",
          paragraphs: [
            "Chiar dacă operează cauza de nepedepsire, banii sau foloasele date nu se întorc automat. Legea prevede posibilitatea confiscării sau, în anumite condiții, restituirea. Fiecare situație trebuie analizată separat, în funcție de stadiul dosarului și de bunurile identificate.",
          ],
        },
      ],
    },
    {
      h2: "Flagrantul, denunțătorul și provocarea în dosarele de trafic de influență",
      paragraphs: [
        "Multe dosare de trafic de influență pornesc de la un denunț și continuă cu un flagrant. În această etapă devine esențial să verific cum a fost obținută proba, dacă a existat o provocare și care a fost rolul real al denunțătorului.",
      ],
      subsections: [
        {
          h3: "Contract de consultanță, lobby sau trafic de influență?",
          paragraphs: [
            "Nu orice conversație despre relații sau despre modul în care funcționează o instituție înseamnă trafic de influență. Pentru existența infracțiunii trebuie dovedită o promisiune concretă de intervenție pe lângă un funcționar determinat sau determinabil și legătura acesteia cu un folos pretins ori primit.",
            "Discuțiile generale, activitatea reală de consultanță, lobby-ul desfășurat în limitele legii sau simpla afirmare a unor relații, fără o promisiune de intervenție, nu întrunesc elementele infracțiunii.",
          ],
        },
        {
          h3: "Contractul de consultanță nu exclude automat acuzația",
          paragraphs: [
            "Un contract de consultanță nu este o apărare absolută. Procurorii pot reține că, în spatele contractului, s-a ascuns de fapt o promisiune de influență. De aceea, verific atât forma contractului, cât și corespondența, livrabilele și justificarea sumelor.",
          ],
        },
        {
          h3: "Cum se dovedește activitatea profesională reală",
          paragraphs: [
            "Activitatea reală se probează cu documente: rapoarte, note de analiză, corespondență cu instituțiile, chitanțe, facturi și orice alt document care arată că serviciul promis a fost efectiv prestat. Cu cât există mai multe probe concrete, cu atât este mai greu de reținut infracțiunea.",
          ],
        },
        {
          h3: "Când plata are o explicație contractuală legitimă",
          paragraphs: [
            "Plata este legitimă atunci când există o prestație reală, prețul este corelat cu piața, sumele sunt justificate documentar și nu există o legătură directă între plată și promisiunea de a interveni pe lângă un funcționar. Analizez fiecare transfer bancar și fiecare justificare oferită.",
            [
              { text: "Pentru dosarele instrumentate de DNA, vezi și pagina de " },
              { text: "asistență în anchete anticorupție", to: "/servicii/avocat-dna" },
              { text: "." },
            ],
          ],
        },
      ],
    },
    {
      h2: "Ce se întâmplă cu banii într-un dosar de trafic sau cumpărare de influență",
      paragraphs: [
        "Traficul și cumpărarea de influență au reguli specifice privind confiscarea și, în anumite situații, restituirea. Sumele primite sau date pot fi supuse confiscării speciale, iar asupra bunurilor tale pot fi luate măsuri asigurătorii încă din faza de urmărire penală.",
        "Restituirea banilor dați pentru influență este posibilă doar în condiții strict limitate, de regulă atunci când fapta a fost denunțată înainte de sesizarea organelor de urmărire penală. Chiar și așa, instanța analizează dacă sumele pot fi restituite sau trebuie confiscate.",
      ],
      bullets: [
        "Confiscarea sumelor sau bunurilor care au făcut obiectul infracțiunii.",
        "Măsuri asigurătorii asupra bunurilor, dispuse pe parcursul urmăririi penale.",
        "Restituirea către victimă, în condițiile prevăzute de lege.",
        "Obligații de plată accesorii, în funcție de modul în care au fost folosiți banii.",
      ],
      callout: "Dacă ai deja o ordonanță de sechestru sau confiscare, analizez imediat ce căi de atac sunt disponibile.",
      calloutCta: "Sună-mă acum",
    },
    {
      h2: "Ce este traficul de influență",
      paragraphs: [
        "Traficul de influență constă în pretinderea, primirea ori acceptarea promisiunii de bani sau alte foloase, direct sau indirect, de către o persoană care are influență ori lasă să se creadă că are influență asupra unui funcționar public, promițând că îl va determina să îndeplinească, să nu îndeplinească ori să întârzie un act de serviciu.",
        "Fapta este prevăzută de art. 291 Cod penal. Nu are relevanță dacă influența era reală sau doar afirmată și nici dacă funcționarul a fost efectiv contactat.",
      ],
    },
    {
      h2: "Ce este cumpărarea de influență",
      paragraphs: [
        "Cumpărarea de influență, prevăzută de art. 292 Cod penal, este fapta persoanei care promite, oferă sau dă bani ori alte foloase celui care susține că are influență asupra unui funcționar public.",
        "Și în acest caz legea prevede o cauză de nepedepsire pentru cel care denunță fapta înainte ca organul de urmărire penală să fi fost sesizat.",
      ],
    },
    {
      h2: "Ce riști dacă acuzația se confirmă",
      bullets: [
        "Pedeapsa închisorii, potrivit limitelor prevăzute de textul de incriminare.",
        "Interzicerea unor drepturi, inclusiv a dreptului de a ocupa o funcție publică.",
        "Confiscarea sumelor sau bunurilor primite.",
        "Măsuri asigurătorii asupra bunurilor, luate pe parcursul urmăririi penale.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Când în același dosar se discută și foloase primite direct de funcționar, acuzația se analizează împreună cu " },
          { text: "faptele de mită", to: "/servicii/dare-luare-de-mita" },
          { text: ", iar delimitarea dintre ele devine esențială." },
        ],
      ],
    },
    {
      h2: "Cum construiesc apărarea",
      bullets: [
        "Reconstitui contextul real al discuțiilor, dincolo de fragmentele selectate în rechizitoriu.",
        "Contest transcrierile inexacte și solicit verificarea integrității înregistrărilor.",
        "Demonstrez, acolo unde este cazul, existența unei activități profesionale reale în spatele sumelor primite.",
        "Analizez provocarea și rolul organelor judiciare în producerea probelor.",
        "Te asist la audieri și la fiecare termen, inclusiv în dosarele instrumentate de procurorii anticorupție.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Pentru dosarele aflate în competența Direcției Naționale Anticorupție, particularitățile procedurale sunt detaliate pe pagina dedicată " },
          { text: "anchetelor DNA", to: "/servicii/avocat-dna" },
          { text: "." },
        ],
      ],
      cta: "De ce să mă alegi",
    },
  ],
  faq: [
    {
      q: "Contează dacă influența era reală?",
      a: "Nu. Infracțiunea se reține și atunci când persoana doar lasă să se creadă că are influență asupra funcționarului.",
    },
    {
      q: "Trebuie ca funcționarul să fi fost contactat?",
      a: "Nu. Este suficientă promisiunea de intervenție, chiar dacă funcționarul nu a aflat niciodată despre discuție.",
    },
    {
      q: "Un contract de consultanță mă protejează?",
      a: "Nu automat. Contractul are relevanță doar dacă în spatele lui există o activitate reală, dovedită prin livrabile și corespondență.",
    },
    {
      q: "Ce se întâmplă cu banii dați pentru intervenție?",
      a: "Sumele sunt supuse confiscării. Persoana care denunță fapta în condițiile legii poate obține restituirea, în limitele prevăzute de lege.",
    },
    {
      q: "Pot fi cercetat doar pe baza unui denunț?",
      a: "Denunțul poate declanșa ancheta, dar nu poate fundamenta singur o condamnare. El trebuie coroborat cu alte mijloace de probă.",
    },
    {
      q: "Care este diferența față de luarea de mită?",
      a: "La mită, folosul este pretins de funcționarul care are atribuția vizată. La trafic de influență, folosul ajunge la un intermediar care promite că va interveni.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 291 și art. 292 privind traficul și cumpărarea de influență.", href: CP, linkLabel: "Legislație" },
    { text: "Legea 78/2000 privind faptele de corupție și faptele asimilate acestora.", href: L78, linkLabel: "Legislație" },
    { text: "Reglementare privind confiscarea și restituirea în materie penală.", href: "https://legislatie.just.ro/Public/DetaliiDocument/304554", linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR,
};

export const abuzInServiciuRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/abuz-in-serviciu",
  altPath: "/en/services/abuse-of-office",
  roPath: "/servicii/abuz-in-serviciu",
  title: "Avocat Abuz în Serviciu București | Bogdan Lamatic",
  h1: "Avocat abuz în serviciu în București",
  description:
    "Avocat abuz în serviciu în București. Apărare pentru funcționari publici și administratori, prejudiciu, expertize și măsuri asigurătorii.",
  keywords:
    "avocat abuz in serviciu, dosar abuz in serviciu bucuresti, aparare abuz in serviciu",
  breadcrumbLabel: "Abuz în serviciu",
  serviceName: "Avocat abuz în serviciu București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru abuz în serviciu, după un control, un raport al Curții de Conturi sau o plângere?",
    "În aceste dosare, apărarea începe de la atribuțiile tale exacte și de la textul legal despre care se spune că a fost încălcat.",
  ],
  bio: [
    `${BIO_INTRO} Asist funcționari publici, primari, directori, membri ai comisiilor de achiziții și administratori din mediul privat, în dosare de abuz în serviciu.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi de unde a pornit dosarul, pentru că sursa acuzației arată ce probe trebuie contracarate."],
      subsections: [
        {
          h3: "Un control sau un raport de audit a sesizat organele penale",
          paragraphs: [
            "Verific constatările controlului, temeiul legal invocat și dacă neregulile identificate au caracter administrativ sau penal.",
          ],
        },
        {
          h3: "Ai semnat sau ai aprobat un act care este acum contestat",
          paragraphs: [
            "Analizez circuitul documentului, avizele primite și responsabilitatea reală a fiecărei persoane implicate în decizie.",
          ],
        },
        {
          h3: "S-a calculat un prejudiciu în sarcina ta",
          paragraphs: [
            "Contest modul de calcul al pagubei și solicit expertiză, pentru că valoarea prejudiciului influențează direct încadrarea și limitele de pedeapsă.",
          ],
        },
        {
          h3: "Ai fost citat la audiere",
          paragraphs: [
            "Pregătim declarația pe documente, pentru ca explicațiile tehnice să fie consemnate corect încă de la prima audiere.",
          ],
        },
      ],
      ctaAfterSubsections: "Vreau o analiză a acuzației",
    },
    {
      h2: "Ce analizez imediat într-un dosar de abuz în serviciu",
      bullets: [
        "Care este textul de lege despre care se susține că a fost încălcat.",
        "Ce atribuții de serviciu aveai în mod concret, potrivit fișei postului și actelor interne.",
        "Dacă actul contestat a fost avizat sau semnat și de alte persoane.",
        "Existența unei pagube certe și modul în care a fost calculată.",
        "Legătura dintre conduita ta și paguba sau vătămarea reclamată.",
        "Măsurile asigurătorii dispuse asupra bunurilor tale.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Cu cât văd mai repede documentele, cu atât pot spune mai exact unde este punctul slab al acuzației."],
      subsections: [
        {
          h3: "Actele care descriu atribuțiile tale",
          paragraphs: ["Fișa postului, regulamentul de organizare și funcționare, deciziile de numire și delegările de competență."],
        },
        {
          h3: "Documentul contestat și circuitul lui",
          paragraphs: ["Actul semnat, referatele, avizele juridice și economice, notele interne și corespondența aferentă."],
        },
        {
          h3: "Raportul de control sau de audit",
          paragraphs: ["Raportul Curții de Conturi, raportul de audit intern sau nota de constatare care a stat la baza sesizării."],
        },
        {
          h3: "Actele privind prejudiciul",
          paragraphs: ["Modul de calcul al pagubei, anexele și eventualele expertize deja efectuate."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce lege trebuie să fi fost încălcată pentru a exista abuz în serviciu?",
      paragraphs: [
        "În forma actuală, art. 297 Cod penal cere ca acuzarea să identifice concret actul prevăzut de lege, de o ordonanță sau de un alt act cu putere de lege care nu a fost îndeplinit, ori dispoziția dintr-un asemenea act care a fost încălcată. Fără această indicare precisă, acuzația rămâne fără fundament legal.",
        "De aceea, primul lucru pe care îl cer în dosar este textul exact invocat de procuror: articol, alineat și act normativ. Dacă rechizitoriul sau ordonanța se referă doar la o procedură internă sau la o apreciere de oportunitate, apărarea poate susține că fapta nu este prevăzută de legea penală.",
      ],
      subsections: [
        {
          h3: "Este suficientă încălcarea unei proceduri interne?",
          paragraphs: [
            "Nu. Regulamentele interne, circularele, notele de serviciu sau procedurile operaționale nu sunt legi ori ordonanțe. Încălcarea lor poate atrage răspundere disciplinară sau administrativă, dar nu îndeplinește singură cerința prevăzută de art. 297.",
            "În practică, acuzarea încearcă uneori să lege procedura internă de o normă generală din lege. Verific dacă legătura este reală sau doar construită ulterior, pentru a acoperi lipsa unui text legal aplicabil.",
          ],
        },
        {
          h3: "Fișa postului poate fi suficientă singură?",
          paragraphs: [
            "Fișa postului arată ce atribuții aveai, nu ce dispoziție legală ai încălcat. Ea este utilă pentru a stabili dacă actul intra în competența ta, însă nu poate înlocui norma din lege sau ordonanță pe care se sprijină acuzația.",
            "Dacă atribuția invocată nu apare nici în fișa postului, nici în actele de delegare, susțin că nu exista o obligație legală de a acționa în modul pretins de procuror.",
          ],
        },
        {
          h3: "Ce se întâmplă dacă norma era neclară sau interpretabilă",
          paragraphs: [
            "Când textul legal permite mai multe interpretări rezonabile, alegerea unei variante nu poate fi transformată automat în infracțiune. Norma neclară, practica administrativă contradictorie sau lipsa unor instrucțiuni de aplicare sunt argumente puternice pentru lipsa intenției.",
            "În aceste situații valorific și avizele primite, punctele de vedere ale instituțiilor și soluțiile similare adoptate în alte dosare sau de instanțele de contencios administrativ.",
          ],
        },
      ],
      cta: "Vreau să verificăm temeiul legal invocat",
      ctaIcon: false,
    },
    {
      h2: "Cum se stabilește prejudiciul într-un dosar de abuz în serviciu?",
      paragraphs: [
        "Prejudiciul nu este un detaliu contabil, ci un element al infracțiunii. Fără o pagubă certă sau o vătămare efectivă a drepturilor unei persoane, fapta nu întrunește condițiile art. 297. În plus, valoarea reținută influențează direct încadrarea juridică, competența și limitele de pedeapsă.",
      ],
      subsections: [
        {
          h3: "Prejudiciul trebuie să fie efectiv",
          paragraphs: [
            "Paguba trebuie să fie reală și certă, nu ipotetică sau viitoare. Un beneficiu nerealizat, o estimare de oportunitate sau o diferență teoretică de preț nu echivalează automat cu un prejudiciu în sensul legii penale.",
          ],
        },
        {
          h3: "Cum se calculează paguba",
          paragraphs: [
            "Verific metoda de calcul din nota de constatare sau din raportul de control: ce sume au fost luate în considerare, dacă serviciul ori lucrarea a fost efectiv prestată, dacă valoarea plătită corespunde prețului pieței și dacă s-au scăzut sumele deja recuperate.",
          ],
        },
        {
          h3: "Rolul expertizei",
          paragraphs: [
            "Într-un dosar cu componentă economică, expertiza contabilă sau tehnică este esențială. Solicit efectuarea expertizei, propun obiectivele și formulez obiecțiuni la raport, pentru ca discuția să nu rămână doar pe concluziile organului de control.",
          ],
        },
        {
          h3: "Cum poate fi contestat prejudiciul",
          paragraphs: [
            "Contest atât existența, cât și întinderea pagubei: prin cereri în probațiune, obiecțiuni la expertiză, documente care arată contraprestația reală și, dacă este necesar, prin contestarea măsurilor asigurătorii dispuse pe baza unei valori supraevaluate.",
          ],
        },
      ],
      calloutAfterSubsections: "Ai deja un prejudiciu calculat în sarcina ta?",
      calloutAfterSubsectionsCta: "Sună oricum",
    },
    {
      h2: "Abuz în serviciu sau neglijență în serviciu?",
      paragraphs: [
        "Cele două fapte sunt reglementate separat: abuzul în serviciu la art. 297 Cod penal, iar neglijența în serviciu la art. 298. Diferența nu ține de gravitatea rezultatului, ci de forma de vinovăție.",
        "Abuzul în serviciu presupune intenție, adică faptul că ai știut că actul este contrar unei dispoziții legale și ai acceptat consecințele. Neglijența în serviciu presupune culpă: o neatenție, o omisiune sau o greșeală de apreciere, fără voința de a produce urmarea.",
        "Forma de vinovăție schimbă complet regimul: încadrarea juridică, limitele de pedeapsă, termenul de prescripție și chiar competența de urmărire. De aceea, în multe dosare apărarea nu urmărește achitarea totală, ci demonstrarea faptului că fapta, dacă a existat, a fost comisă din culpă.",
        [
          { text: "Pentru situațiile în care acuzația vizează o omisiune din neatenție, vezi și pagina despre " },
          { text: "răspunderea din culpă a funcționarului", to: "/servicii/neglijenta-in-serviciu" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Cine răspunde când actul a fost avizat și semnat de mai multe persoane?",
      paragraphs: [
        "În administrație, aproape niciun act nu este emis de o singură persoană. Există referate, avize, vize de control financiar preventiv, semnături de conformitate și, uneori, decizii colegiale. Apărarea începe prin reconstituirea completă a circuitului documentului.",
      ],
      subsections: [
        {
          h3: "Aviz juridic favorabil",
          paragraphs: [
            "Dacă ai semnat pe baza unui aviz juridic favorabil, argumentul lipsei intenției devine foarte solid. Avizul arată că legalitatea actului a fost verificată de persoana desemnată tocmai pentru acest lucru, iar tu te-ai bazat pe concluzia ei.",
          ],
        },
        {
          h3: "Aviz economic sau tehnic",
          paragraphs: [
            "Pentru aspectele de preț, cantități, soluții tehnice sau încadrări contabile, răspunderea aparține în primul rând celor care au întocmit și avizat documentația de specialitate. Un decident nu are obligația de a reface calculele făcute de specialiști.",
          ],
        },
        {
          h3: "Delegarea atribuțiilor",
          paragraphs: [
            "Analizez deciziile de delegare, perioada acoperită și limitele exacte ale competenței transferate. Dacă atribuția fusese delegată altei persoane, acuzația îndreptată împotriva ta poate fi lipsită de bază.",
          ],
        },
        {
          h3: "Decizia colegială",
          paragraphs: [
            "În cazul comisiilor, consiliilor sau comitetelor, votul individual, poziția exprimată în procesul-verbal și eventualele obiecții consemnate sunt determinante. O decizie colectivă nu se transformă automat în răspundere penală pentru fiecare membru.",
          ],
        },
        {
          h3: "Răspunderea fiecărei persoane din circuit",
          paragraphs: [
            "Scopul este delimitarea clară: cine a propus, cine a verificat, cine a avizat și cine a semnat final. Prezint organului judiciar o schemă a circuitului, susținută de documente, pentru ca răspunderea să fie stabilită pe atribuții reale, nu pe simpla prezență a unei semnături.",
          ],
        },
      ],
      cta: "Am semnat un act care este acum contestat",
      ctaIcon: false,
    },
    {
      h2: "Când abuzul în serviciu intră sub Legea 78/2000",
      paragraphs: [
        "Legea 78/2000 prevede o formă agravată a abuzului în serviciu, aplicabilă atunci când fapta a fost săvârșită în legătură cu obținerea, pentru sine sau pentru altul, a unui folos necuvenit. În acest caz limitele de pedeapsă se majorează, iar dosarul capătă natura unei cauze de corupție.",
        "Consecințele practice sunt importante: competența poate reveni Direcției Naționale Anticorupție, se dispun frecvent măsuri asigurătorii extinse și apar frecvent interceptări sau denunțuri în probatoriu. Apărarea trebuie să conteste chiar existența folosului necuvenit și legătura lui cu actul de serviciu.",
        [
          { text: "Dacă ancheta este instrumentată de procurorii anticorupție, vezi și pagina de " },
          { text: "asistență în anchete DNA", to: "/servicii/avocat-dna" },
          { text: "." },
        ],
      ],
    },

    {
      h2: "Ce este abuzul în serviciu",
      paragraphs: [
        "Abuzul în serviciu constă în fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, nu îndeplinește un act sau îl îndeplinește în mod defectuos și cauzează astfel o pagubă ori o vătămare a drepturilor sau intereselor legitime ale unei persoane. Fapta este prevăzută de art. 297 Cod penal.",
        "Îndeplinirea defectuoasă trebuie raportată la o dispoziție cuprinsă în lege sau într-o ordonanță, nu la norme interne sau la aprecieri de oportunitate. Această limitare este esențială în apărare.",
      ],
    },
    {
      h2: "Cine poate fi acuzat de abuz în serviciu",
      paragraphs: [
        "Subiectul principal este funcționarul public, noțiune definită larg în Codul penal și care include persoane din administrația centrală și locală, din instituții publice, precum și persoane care exercită un serviciu de interes public pentru care au fost învestite.",
        "Prin art. 308 Cod penal, răspunderea este extinsă și la persoanele care exercită atribuții în cadrul unei persoane juridice private, cu limite de pedeapsă reduse cu o treime.",
        "Când fapta este săvârșită în legătură cu obținerea unui folos necuvenit, se aplică forma agravată prevăzută de Legea 78/2000, iar competența poate reveni Direcției Naționale Anticorupție.",
      ],
    },
    {
      h2: "Când o eroare administrativă nu este infracțiune",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Nu orice decizie greșită, nelegală sau anulată de instanța de contencios administrativ înseamnă abuz în serviciu. Pentru existența infracțiunii sunt necesare încălcarea unei dispoziții din lege sau ordonanță, o pagubă ori o vătămare efectivă și intenția funcționarului.",
        "Interpretarea diferită a unei norme neclare, decizia luată pe baza unui aviz favorabil, lipsa unei pagube certe sau simpla nerespectare a unei proceduri interne rămân, de regulă, în sfera răspunderii administrative sau disciplinare.",
      ],
    },
    {
      h2: "Ce riști dacă acuzația se confirmă",
      bullets: [
        "Pedeapsa închisorii și interzicerea exercitării dreptului de a ocupa o funcție publică.",
        "Obligarea la plata prejudiciului reținut în sarcina ta.",
        "Măsuri asigurătorii asupra bunurilor și conturilor, dispuse încă din urmărirea penală.",
        "Consecințe disciplinare și pierderea funcției, în paralel cu procesul penal.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Când acuzația este însoțită de suspiciunea unui folos necuvenit, dosarul se apropie de zona " },
          { text: "faptelor de mită", to: "/servicii/dare-luare-de-mita" },
          { text: ", cu consecințe directe asupra încadrării juridice." },
        ],
      ],
    },
    {
      h2: "Cum construiesc apărarea",
      bullets: [
        "Identific exact norma din lege sau ordonanță invocată și verific dacă îți era aplicabilă.",
        "Delimitez responsabilitatea ta de cea a celorlalte persoane care au avizat sau semnat actul.",
        "Contest existența și întinderea prejudiciului, prin expertiză și obiecțiuni.",
        "Susțin lipsa intenției, atunci când decizia a fost luată pe baza avizelor primite.",
        "Formulez contestații împotriva măsurilor asigurătorii disproporționate.",
      ],


      cta: "De ce să mă alegi",
    },
  ],
  faq: [
    {
      q: "Un administrator de firmă privată poate fi acuzat de abuz în serviciu?",
      a: "Da, prin norma de extindere a răspunderii, cu limite de pedeapsă reduse cu o treime față de forma de bază.",
    },

    {
      q: "Dacă restitui prejudiciul, dosarul se închide?",
      a: "Nu automat. Acoperirea prejudiciului este relevantă pentru individualizarea pedepsei și pentru latura civilă, dar nu înlătură prin ea însăși răspunderea penală.",
    },
    {
      q: "Cine investighează dosarele de abuz în serviciu?",
      a: "Parchetele de drept comun, iar în cazul formei agravate sau al valorii ridicate a prejudiciului, Direcția Națională Anticorupție.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 297 privind abuzul în serviciu.", href: CP, linkLabel: "Legislație" },
    { text: "Legea 78/2000 - forma agravată a abuzului în serviciu.", href: L78, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR,
};

export const neglijentaInServiciuRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/neglijenta-in-serviciu",
  altPath: "/en/services/negligence-in-office",
  roPath: "/servicii/neglijenta-in-serviciu",
  title: "Avocat Neglijență în Serviciu București | Bogdan Lamatic",
  h1: "Avocat neglijență în serviciu în București",
  description:
    "Avocat neglijență în serviciu în București. Apărare pentru funcționari acuzați de încălcarea din culpă a atribuțiilor. 18+ ani experiență.",
  keywords:
    "avocat neglijenta in serviciu, dosar neglijenta in serviciu, aparare functionar public",
  breadcrumbLabel: "Neglijență în serviciu",
  serviceName: "Avocat neglijență în serviciu București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru neglijență în serviciu după un incident, un control sau o plângere?",
    "În aceste dosare, apărarea se construiește pe volumul real de atribuții, pe resursele avute la dispoziție și pe legătura dintre omisiune și urmarea produsă.",
  ],
  bio: [
    `${BIO_INTRO} Asist funcționari publici și persoane cu atribuții de control, avizare sau supraveghere, cercetate pentru încălcarea din culpă a îndatoririlor de serviciu.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi ce s-a întâmplat concret, pentru că în aceste dosare detaliile faptice decid soluția."],
      subsections: [
        {
          h3: "A avut loc un incident și se caută responsabili",
          paragraphs: [
            "Verific ce obligații aveai efectiv, ce ai putut controla în mod real și dacă urmarea produsă îți este imputabilă.",
          ],
        },
        {
          h3: "Un control a constatat că nu ai îndeplinit o atribuție",
          paragraphs: [
            "Analizez actul de control și stabilesc dacă omisiunea reclamată a produs o pagubă sau o vătămare, condiție esențială a infracțiunii.",
          ],
        },
        {
          h3: "Ai fost citat ca suspect",
          paragraphs: [
            "Pregătim declarația pe documente și pe cronologia faptelor, pentru a evita asumarea unor obligații care nu îți reveneau.",
          ],
        },
      ],
      ctaAfterSubsections: "Vreau o evaluare a situației mele",
    },
    {
      h2: "Ce analizez imediat în dosar",
      bullets: [
        "Care era obligația concretă de serviciu și din ce act normativ rezulta.",
        "Dacă omisiunea a fost din culpă și în ce formă.",
        "Dacă există o pagubă sau o vătămare efectivă a drepturilor unei persoane.",
        "Legătura de cauzalitate dintre omisiune și urmarea produsă.",
        "Resursele, personalul și timpul avute la dispoziție în perioada analizată.",
        "Responsabilitatea celorlalte persoane implicate în circuitul decizional.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Trimite-mi actele care arată ce trebuia să faci și ce ai făcut efectiv."],
      subsections: [
        {
          h3: "Atribuțiile tale de serviciu",
          paragraphs: ["Fișa postului, regulamentul intern, deciziile de delegare și procedurile operaționale aplicabile."],
        },
        {
          h3: "Documentele privind incidentul",
          paragraphs: ["Sesizarea, procesul-verbal de constatare, rapoartele interne și corespondența din perioada relevantă."],
        },
        {
          h3: "Dovezile privind resursele disponibile",
          paragraphs: ["State de funcții, volumul de lucrări repartizate, solicitări de suplimentare a personalului sau a bugetului."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce normă trebuie încălcată pentru a exista neglijență în serviciu?",
      paragraphs: [
        "În forma actuală, art. 298 Cod penal cere ca îndatorirea de serviciu încălcată să rezulte dintr-o lege, o ordonanță a Guvernului, o ordonanță de urgență sau un alt act care avea putere de lege. Nu orice obligație profesională intră în această categorie.",
        "Curtea Constituțională a aplicat și neglijenței în serviciu standardul stabilit pentru abuzul în serviciu: sintagma „îndeplinirea defectuoasă” înseamnă îndeplinirea prin încălcarea unei dispoziții dintr-un act normativ cu putere de lege, nu simpla nerespectare a unor reguli interne sau a unor bune practici.",
      ],
      subsections: [
        {
          h3: "Este suficientă încălcarea fișei postului?",
          paragraphs: [
            "Nu. Fișa postului arată ce atribuții aveai, deci este utilă pentru a stabili dacă obligația îți revenea, dar nu poate înlocui norma din lege sau ordonanță pe care trebuie să se sprijine acuzația.",
            "Dacă singurul document invocat este fișa postului, susțin că fapta nu este prevăzută de legea penală și că discuția rămâne una de răspundere disciplinară.",
          ],
        },
        {
          h3: "Este suficientă încălcarea unei proceduri interne?",
          paragraphs: [
            "Regulamentele interne, procedurile operaționale, circularele sau notele de serviciu nu sunt legi ori ordonanțe. Nerespectarea lor poate atrage sancțiuni administrative, însă nu îndeplinește singură cerința prevăzută de art. 298.",
            "Verific dacă procedura internă este într-adevăr legată de o dispoziție dintr-un act normativ cu putere de lege sau dacă legătura a fost construită ulterior, pentru a acoperi lipsa unui text aplicabil.",
          ],
        },
        {
          h3: "Ce act normativ trebuie indicat în acuzație?",
          paragraphs: [
            "Cer de la început indicarea exactă a actului normativ, a articolului și a alineatului care ar fi fost încălcate. Fără această indicare precisă, apărarea poate cere clasarea sau achitarea, pentru că elementul material al infracțiunii nu este determinat.",
          ],
        },
      ],
      cta: "Vreau să verificăm temeiul legal invocat",
      ctaIcon: false,
    },
    {
      h2: "Când o greșeală profesională devine neglijență în serviciu?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Lipsa pagubei sau a vătămării efective face ca fapta să nu întrunească elementele infracțiunii, oricât de gravă ar părea omisiunea din perspectivă disciplinară.",
        "De asemenea, nu se poate reține neglijența atunci când obligația nu îți revenea, când îndeplinirea ei era imposibilă din cauza lipsei de resurse ori de personal, sau când urmarea s-a produs din cauza conduitei altei persoane.",
      ],
      subsections: [
        {
          h3: "Greșeală profesională vs infracțiune",
          paragraphs: [
            "O eroare de apreciere, o interpretare rezonabilă a unei norme neclare sau o alegere între mai multe variante permise nu se transformă automat în infracțiune. Pentru neglijență este nevoie de încălcarea unei îndatoriri prevăzute de lege și de o urmare păgubitoare dovedită.",
          ],
        },
        {
          h3: "Abatere disciplinară vs răspundere penală",
          paragraphs: [
            "Multe fapte reclamate în astfel de dosare rămân în sfera disciplinară: întârzieri, completări incomplete, nerespectarea unor termene interne. Sancțiunea disciplinară nu presupune și existența infracțiunii, iar cele două forme de răspundere au condiții diferite.",
          ],
        },
        {
          h3: "De ce simplul rezultat nefavorabil nu este suficient",
          paragraphs: [
            "Faptul că a apărut un incident, o pierdere financiară sau o nemulțumire nu dovedește culpa ta. Acuzarea trebuie să arate ce obligație legală ai încălcat și cum anume conduita ta a produs urmarea, nu doar că rezultatul este neplăcut.",
          ],
        },
      ],
      calloutAfterSubsections: "Ți s-a spus că ești responsabil pentru un incident?",
      calloutAfterSubsectionsCta: "Sună oricum",
    },
    {
      h2: "Cum se dovedește legătura dintre greșeală și prejudiciu?",
      paragraphs: [
        "Neglijența în serviciu este o infracțiune de rezultat: nu este suficientă încălcarea îndatoririi, trebuie dovedită și producerea unei pagube ori a unei vătămări a drepturilor sau intereselor legitime ale unei persoane, precum și legătura de cauzalitate dintre cele două.",
      ],
      subsections: [
        {
          h3: "Ce se întâmplă dacă rezultatul s-ar fi produs oricum",
          paragraphs: [
            "Dacă paguba s-ar fi produs și în ipoteza în care ți-ai fi îndeplinit perfect atribuția, legătura de cauzalitate lipsește. Este unul dintre cele mai puternice argumente de apărare în dosarele construite pe omisiuni formale.",
          ],
        },
        {
          h3: "Intervenția altor persoane",
          paragraphs: [
            "Reconstitui circuitul complet al documentului sau al deciziei: cine a propus, cine a verificat, cine a avizat și cine a semnat. Când urmarea a fost determinată de conduita altei persoane, răspunderea nu poate fi mutată pe tine.",
          ],
        },
        {
          h3: "Cauze externe",
          paragraphs: [
            "Defecțiuni tehnice, informații eronate primite din exterior, decizii ale altor instituții sau evenimente imprevizibile pot rupe lanțul cauzal. Documentez aceste împrejurări cu acte, nu doar cu declarații.",
          ],
        },
        {
          h3: "Expertiza tehnică",
          paragraphs: [
            "Când discuția implică valori, calcule sau aspecte tehnice, solicit expertiză, propun obiectivele și formulez obiecțiuni la raport, ca legătura de cauzalitate și întinderea pagubei să nu rămână stabilite doar de organul de control.",
          ],
        },
      ],
    },
    {
      h2: "Lipsa personalului, timpului sau resurselor poate exclude răspunderea?",
      paragraphs: [
        "Da, atunci când imposibilitatea de executare este reală și poate fi dovedită. Nu se poate reține culpa pentru o obligație care, în condițiile concrete de lucru, nu putea fi îndeplinită.",
      ],
      subsections: [
        {
          h3: "Lipsa de personal",
          paragraphs: ["State de funcții, posturi vacante și repartizarea reală a sarcinilor în perioada analizată."],
        },
        {
          h3: "Buget insuficient",
          paragraphs: ["Bugetul aprobat, refuzurile de finanțare și imposibilitatea de a contracta serviciile sau lucrările necesare."],
        },
        {
          h3: "Volum excesiv de muncă",
          paragraphs: ["Numărul de lucrări repartizate, termenele impuse și comparația cu volumul normal pentru funcția ta."],
        },
        {
          h3: "Solicitări de suplimentare ignorate",
          paragraphs: ["Notele, referatele și adresele prin care ai cerut personal, buget sau prelungirea termenelor, împreună cu răspunsurile primite."],
        },
        {
          h3: "Imposibilitate obiectivă de executare",
          paragraphs: ["Situațiile în care îndeplinirea atribuției depindea de un act, o informație sau o aprobare care nu au existat la momentul respectiv."],
        },
      ],
      ctaAfterSubsections: "Vreau să analizăm resursele pe care le-am avut",
    },
    {
      h2: "Cine poate fi acuzat de neglijență în serviciu?",
      paragraphs: [
        "Subiectul infracțiunii este funcționarul public în sensul penal al termenului, noțiune mult mai largă decât cea din dreptul administrativ: include persoanele care exercită atribuții prevăzute de lege, o funcție de demnitate publică, o funcție de conducere într-o instituție publică sau atribuții de control și avizare.",
        "Prin art. 308 Cod penal, răspunderea se extinde și la persoanele care exercită, permanent ori temporar, cu sau fără remunerație, o însărcinare de orice natură în serviciul unei persoane fizice sau al unei persoane juridice de drept privat. Astfel, pot fi cercetați și angajați din mediul privat, directori, administratori sau membri ai organelor de conducere, cu limite de pedeapsă reduse cu o treime.",
        [
          { text: "Pentru contextul general al acuzațiilor legate de exercitarea funcției, vezi pagina despre " },
          { text: "fapte legate de exercitarea funcției publice", to: PARENT_COR.to },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce este neglijența în serviciu",
      paragraphs: [
        "Neglijența în serviciu constă în încălcarea din culpă, de către un funcționar public, a unei îndatoriri de serviciu, prin neîndeplinirea acesteia sau prin îndeplinirea ei defectuoasă, dacă se cauzează o pagubă ori o vătămare a drepturilor sau intereselor legitime ale unei persoane. Fapta este prevăzută de art. 298 Cod penal.",
        "Spre deosebire de alte fapte de serviciu, aici nu se cere intenția, ci culpa. Însă urmarea păgubitoare trebuie să existe și să fie dovedită, nu presupusă.",
      ],
    },
    {
      h2: "Diferența față de abuzul în serviciu",
      paragraphs: [
        [
          { text: "Elementul care separă cele două infracțiuni este forma de vinovăție. La " },
          { text: "încălcarea cu intenție a atribuțiilor", to: "/servicii/abuz-in-serviciu" },
          { text: ", funcționarul acționează cu intenție, în timp ce la neglijență fapta este comisă din culpă." },
        ],
        "Delimitarea are consecințe majore: limitele de pedeapsă sunt mai reduse, iar în multe situații acuzația inițială de abuz poate fi reîncadrată corect ca neglijență, atunci când probele nu susțin intenția.",
      ],
    },
    {
      h2: "Ce riști dacă acuzația se confirmă",
      bullets: [
        "Pedeapsa închisorii sau amenda, potrivit limitelor prevăzute de lege.",
        "Obligarea la plata prejudiciului produs.",
        "Sancțiuni disciplinare aplicate în paralel de angajator.",
        "Consecințe asupra dreptului de a ocupa anumite funcții.",
      ],
    },
    {
      h2: "Cum construiesc apărarea",
      bullets: [
        "Delimitez exact obligațiile care îți reveneau, prin raportare la actele normative și interne.",
        "Demonstrez lipsa legăturii de cauzalitate dintre omisiune și urmarea produsă.",
        "Contest existența sau întinderea prejudiciului, cu expertiză atunci când este necesar.",
        "Susțin imposibilitatea obiectivă de îndeplinire a atribuției, prin probe privind resursele disponibile.",
        "Te asist la audieri și la fiecare termen, în fața procurorului și a instanței.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Alte acuzații apărute frecvent în același dosar, cum sunt cele privind " },
          { text: "situațiile de incompatibilitate", to: "/servicii/conflict-de-interese" },
          { text: ", trebuie analizate separat, pentru că au condiții distincte." },
        ],
      ],
      cta: "De ce să mă alegi",
    },
  ],
  faq: [
    {
      q: "Poate fi schimbată încadrarea din abuz în neglijență?",
      a: "Da. Atunci când probele nu susțin intenția, încadrarea juridică poate fi schimbată în neglijență în serviciu.",
    },
    {
      q: "Este necesară plângerea prealabilă?",
      a: "Nu. Urmărirea penală se desfășoară din oficiu, iar persoana vătămată se poate constitui parte civilă.",
    },
    {
      q: "Sancțiunea disciplinară exclude dosarul penal?",
      a: "Nu. Cele două forme de răspundere sunt distincte și pot funcționa în paralel.",
    },
    {
      q: "Cât durează un astfel de dosar?",
      a: "Depinde de complexitatea probelor și de expertizele necesare. Îți pot da o estimare realistă după ce văd actele.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 298 privind neglijența în serviciu.", href: CP, linkLabel: "Legislație" },
    { text: "Codul penal - art. 308 privind extinderea răspunderii.", href: CP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR,
};

export const conflictDeIntereseRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/conflict-de-interese",
  altPath: "/en/services/conflict-of-interest",
  roPath: "/servicii/conflict-de-interese",
  title: "Avocat Conflict de Interese București | Bogdan Lamatic",
  h1: "Avocat conflict de interese în București",
  description:
    "Avocat conflict de interese în București. Apărare în dosare privind folosirea funcției pentru favorizarea unor persoane. 18+ ani experiență.",
  keywords:
    "avocat conflict de interese, folosirea functiei pentru favorizarea unor persoane, dosar ANI",
  breadcrumbLabel: "Conflict de interese",
  serviceName: "Avocat conflict de interese București - Bogdan Lamatic",
  urgency: [
    "Ai primit un raport de evaluare de la Agenția Națională de Integritate sau ești cercetat penal pentru conflict de interese?",
    "Raportul administrativ și dosarul penal sunt proceduri diferite, iar apărarea trebuie construită pe ambele, în paralel.",
  ],
  bio: [
    `${BIO_INTRO} Asist aleși locali, funcționari publici și persoane cu atribuții de decizie în proceduri de integritate și în dosare penale privind conflictul de interese.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      paragraphs: ["Spune-mi din ce procedură a pornit problema, pentru că termenele sunt diferite."],
      subsections: [
        {
          h3: "Ai primit un raport de evaluare privind integritatea",
          paragraphs: [
            "Analizez raportul, termenul de contestare și șansele de anulare în contencios administrativ, înainte ca acesta să devină definitiv.",
          ],
        },
        {
          h3: "Ai fost sesizat că ești cercetat penal",
          paragraphs: [
            "Verific dacă actul îndeplinit se încadrează în ipoteza textului penal și dacă folosul reclamat are caracter patrimonial.",
          ],
        },
        {
          h3: "Ai semnat un contract cu o firmă apropiată",
          paragraphs: [
            "Verific gradul de rudenie sau de afinitate, dacă din act a rezultat un folos patrimonial real și dacă situația intră în excepțiile prevăzute de lege. Separat de latura penală, verific dacă poate exista o problemă administrativă de integritate.",
          ],
        },
      ],
      ctaAfterSubsections: "Vreau o evaluare a situației mele",
    },
    {
      h2: "Ce analizez imediat în dosar",
      bullets: [
        "Actul concret îndeplinit în exercitarea atribuțiilor de serviciu.",
        "Existența unui folos patrimonial pentru tine, pentru soț sau soție, pentru o rudă ori un afin până la gradul II inclusiv.",
        "Gradul de rudenie sau de afinitate invocat în acuzație.",
        "Dacă situația se încadrează în excepțiile prevăzute expres de lege.",
        "Separat de dosarul penal, dacă există o problemă administrativă de integritate și în ce termen poate fi contestată.",
      ],
    },
    {
      h2: "Ce documente trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Am nevoie de actele care arată cine a decis și în ce condiții."],
      subsections: [
        {
          h3: "Actul contestat",
          paragraphs: ["Contractul, dispoziția, hotărârea sau decizia semnată, împreună cu documentația care a stat la baza ei."],
        },
        {
          h3: "Raportul de evaluare",
          paragraphs: ["Raportul primit, dovada comunicării și eventuala contestație deja formulată."],
        },
        {
          h3: "Documentele privind relația invocată",
          paragraphs: ["Acte de stare civilă, documente societare, contracte anterioare care arată natura reală a raporturilor."],
        },
      ],
      calloutAfterSubsections: "Nu ai toate actele?",
      calloutAfterSubsectionsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Cum contești un raport ANI privind conflictul de interese?",
      paragraphs: [
        "Raportul de evaluare întocmit de Agenția Națională de Integritate se contestă în contencios administrativ, în termen de 15 zile de la primirea acestuia. Termenul este scurt, iar pierderea lui lasă raportul să devină definitiv.",
      ],
      subsections: [
        {
          h3: "De când curge termenul de 15 zile",
          paragraphs: [
            "Termenul curge de la data primirii raportului, nu de la data la care acesta a fost întocmit. De aceea verific întâi dovada comunicării: confirmarea de primire, plicul, adresa la care a fost trimis și cine a semnat de primire.",
          ],
        },
        {
          h3: "Unde se contestă raportul",
          paragraphs: [
            "Contestația se depune la instanța de contencios administrativ competentă, în funcție de funcția deținută și de sediul autorității. Cererea trebuie să cuprindă motivele de nelegalitate și probele pe care le invoci.",
          ],
        },
        {
          h3: "Ce documente trebuie analizate",
          paragraphs: [
            "Raportul integral și anexele, actul din care ar rezulta folosul, documentația care a stat la baza deciziei, fișa postului și actele de stare civilă care arată gradul real de rudenie sau afinitate.",
          ],
        },
        {
          h3: "Ce se întâmplă dacă nu îl contești",
          paragraphs: [
            "Raportul necontestat în termen rămâne definitiv și poate produce consecințe asupra funcției, consecințe disciplinare și proceduri privind actele încheiate. Un raport definitiv nu înseamnă automat condamnare penală, dar îngreunează apărarea.",
          ],
          ctaWhatsApp: true,
          ctaWhatsAppLabel: "Ai primit raportul ANI? Trimite-l acum pentru verificarea termenului",
        },
      ],
    },
    {
      h2: "Conflict de interese sau incompatibilitate - care este diferența?",
      paragraphs: [
        "Cele două situații sunt frecvent confundate, pentru că sunt evaluate prin proceduri de integritate asemănătoare, dar sunt situații juridice distincte.",
        "Conflictul de interese privește un act concret îndeplinit în exercitarea atribuțiilor de serviciu, din care rezultă un folos pentru tine sau pentru persoanele apropiate prevăzute de lege. Incompatibilitatea privește simpla deținere simultană a două funcții sau calități pe care legea nu permite să fie cumulate, independent de vreun act sau de vreun folos.",
        "Diferența are consecințe practice: incompatibilitatea se rezolvă, de regulă, prin încetarea situației de cumul și prin consecințe administrative, în timp ce conflictul de interese poate atrage, în anumite condiții, și răspundere penală în temeiul art. 301 Cod penal.",
      ],
    },
    {
      h2: "Cine trebuie să obțină folosul pentru a exista infracțiunea?",
      paragraphs: [
        "Sfera persoanelor favorizate este limitată expres de textul penal actual. Dacă beneficiarul folosului nu se află în acest cerc, infracțiunea nu este întrunită.",
      ],
      subsections: [
        {
          h3: "Folos pentru tine",
          paragraphs: [
            "Ipoteza cea mai directă: actul îndeplinit îți aduce un avantaj patrimonial personal. Aici se verifică dacă avantajul este real, dacă provine din actul reproșat și dacă tu ai îndeplinit efectiv acel act.",
          ],
        },
        {
          h3: "Folos pentru soț sau soție",
          paragraphs: [
            "Legea include expres soțul. Verific existența și data căsătoriei, precum și dacă folosul a intrat efectiv în patrimoniul soțului sau al soției.",
          ],
        },
        {
          h3: "Rude și afini până la gradul II",
          paragraphs: [
            "Cercul se oprește la rudele și afinii până la gradul II inclusiv. Persoanele aflate în afara acestui grad nu intră în ipoteza textului penal, chiar dacă relația este apropiată în fapt.",
          ],
        },
        {
          h3: "Ce înseamnă folos patrimonial",
          paragraphs: [
            "Folosul trebuie să aibă conținut economic: bani, bunuri, contracte, scutiri, avantaje evaluabile în bani. Foloasele nepatrimoniale, cum ar fi un avantaj de imagine sau o favoare fără valoare economică, nu se încadrează în textul actual.",
          ],
        },
      ],
    },
    {
      h2: "Dacă m-am abținut de la vot sau nu am semnat actul, mai există răspundere penală?",
      paragraphs: [
        "Textul penal cere ca actul să fie îndeplinit efectiv de tine, în exercitarea atribuțiilor de serviciu. De aceea analizez separat fiecare formă de implicare.",
      ],
      subsections: [
        {
          h3: "Participarea efectivă la act",
          paragraphs: [
            "Se verifică ce ai făcut concret: ai întocmit, ai avizat, ai aprobat sau doar ai fost prezent în procedură. Fără un act propriu în exercitarea atribuțiilor, elementul material lipsește.",
          ],
        },
        {
          h3: "Semnătura",
          paragraphs: [
            "Semnătura este cel mai frecvent element folosit în acuzare, dar nu este suficientă în sine: contează care era competența ta, ce verificări îți reveneau și dacă semnătura a produs efectiv folosul.",
          ],
        },
        {
          h3: "Votul",
          paragraphs: [
            "În deciziile colegiale se analizează dacă votul tău a fost necesar pentru adoptarea actului și cum a fost consemnat în procesul-verbal al ședinței.",
          ],
        },
        {
          h3: "Abținerea",
          paragraphs: [
            "Abținerea de la vot sau refuzul de a semna, consemnate în documentele ședinței, sunt argumente puternice de apărare, pentru că arată că nu ai îndeplinit actul din care ar rezulta folosul.",
          ],
        },
        {
          h3: "Actele pregătitoare",
          paragraphs: [
            "Notele interne, referatele sau propunerile care nu produc efecte juridice proprii nu echivalează cu îndeplinirea actului. Ele pot fi relevante pentru context, nu pentru încadrare.",
          ],
        },
        {
          h3: "Cine a luat efectiv decizia",
          paragraphs: [
            "Reconstruiesc traseul deciziei pentru a arăta cine avea competența finală. Când decizia a fost luată de altă persoană sau de un organ colegial, responsabilitatea nu poate fi extinsă automat.",
          ],
        },
      ],
    },
    {
      h2: "Ce se întâmplă dacă raportul ANI rămâne definitiv?",
      paragraphs: [
        "Un raport de evaluare rămas definitiv nu este doar un document constatator: poate declanșa proceduri distincte, care se derulează în paralel cu eventualul dosar penal.",
      ],
      subsections: [
        {
          h3: "Consecințe asupra funcției",
          paragraphs: [
            "În funcție de calitatea deținută, raportul definitiv poate conduce la încetarea mandatului sau a raportului de serviciu și la interdicția de a mai ocupa o funcție similară pe durata prevăzută de lege.",
          ],
        },
        {
          h3: "Consecințe disciplinare",
          paragraphs: [
            "Autoritatea la care activezi poate declanșa cercetarea disciplinară pe baza raportului definitiv, cu sancțiuni proprii, independente de soluția din dosarul penal.",
          ],
        },
        {
          h3: "Efecte asupra actelor și contractelor",
          paragraphs: [
            "Actele administrative și contractele încheiate în stare de conflict de interese pot fi supuse nulității în condițiile legii, cu efecte asupra plăților, garanțiilor și lucrărilor deja executate.",
          ],
        },
        {
          h3: "Relația cu un eventual dosar penal",
          paragraphs: [
            "Raportul definitiv nu înseamnă vinovăție penală, pentru că infracțiunea are condiții mai stricte. El este însă folosit frecvent ca punct de plecare al sesizării, motiv pentru care apărarea administrativă și cea penală trebuie coordonate.",
          ],
        },
      ],
    },
    {
      h2: "Ce este conflictul de interese în plan penal",
      paragraphs: [
        "Textul penal, denumit folosirea funcției pentru favorizarea unor persoane, sancționează fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, a îndeplinit un act prin care s-a obținut un folos patrimonial pentru sine, pentru soțul său, pentru o rudă ori un afin până la gradul II inclusiv. Fapta este prevăzută de art. 301 Cod penal.",
        "Legea prevede și o excepție expresă, pentru situațiile de emitere, aprobare sau adoptare a actelor normative.",
      ],
    },
    {
      h2: "Diferența dintre procedura de integritate și dosarul penal",
      paragraphs: [
        "Raportul de evaluare întocmit în procedura administrativă de integritate poate constata o stare de conflict de interese fără ca fapta să constituie automat infracțiune. Raportul se contestă în contencios administrativ, în termenul prevăzut de lege.",
        "Dosarul penal are condiții proprii, mai stricte, privind actul îndeplinit, folosul patrimonial și cercul de persoane favorizate. Cele două proceduri se desfășoară în paralel, iar apărarea trebuie coordonată între ele.",
      ],
    },
    {
      h2: "Când art. 301 Cod penal nu se aplică",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Nu orice suprapunere de interese înseamnă infracțiune. Trebuie dovedite un act îndeplinit efectiv în exercitarea atribuțiilor de serviciu, un folos patrimonial concret și apartenența beneficiarului la cercul de persoane prevăzut de lege. În plus, legea prevede expres, în art. 301 alin. (2), situații în care fapta nu se pedepsește.",
        "Rămân în afara textului penal și situațiile de abținere de la vot sau de la semnare, actele pregătitoare care nu produc efecte, precum și foloasele nepatrimoniale.",
      ],
      subsections: [
        {
          h3: "Emiterea, aprobarea sau adoptarea actelor normative",
          paragraphs: [
            "Când actul reproșat este un act normativ, textul penal nu se aplică. Verific natura reală a actului, pentru că în practică actele normative sunt uneori tratate greșit ca acte individuale.",
          ],
        },
        {
          h3: "Exercitarea unui drept recunoscut de lege",
          paragraphs: [
            "Nu există infracțiune atunci când folosul rezultă din exercitarea unui drept pe care legea îl recunoaște, cum sunt drepturile salariale, indemnizațiile sau alte drepturi acordate în temeiul legii.",
          ],
        },
        {
          h3: "Îndeplinirea unei obligații impuse de lege",
          paragraphs: [
            "Când ai fost obligat prin lege să îndeplinești actul, iar marja de apreciere lipsea, fapta nu intră sub incidența textului penal. Aici sunt relevante actele prin care s-a executat o hotărâre sau o obligație legală.",
          ],
        },
      ],
    },
    {
      h2: "Ce riști dacă acuzația se confirmă",
      bullets: [
        "Pedeapsa închisorii și interzicerea dreptului de a ocupa o funcție publică.",
        "Anularea actelor administrative sau a contractelor încheiate în conflict de interese.",
        "Încetarea mandatului sau a raportului de serviciu, în procedura de integritate.",
        "Interdicția de a mai ocupa o funcție eligibilă pe durata prevăzută de lege.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "În aceleași dosare apare frecvent și acuzația privind " },
          { text: "exercitarea defectuoasă a atribuțiilor", to: "/servicii/abuz-in-serviciu" },
          { text: ", motiv pentru care apărarea trebuie construită unitar." },
        ],
      ],
    },
    {
      h2: "Cum construiesc apărarea",
      bullets: [
        "Verific dacă actul reproșat intră în sfera atribuțiilor tale de serviciu.",
        "Contest caracterul patrimonial al folosului sau existența lui.",
        "Analizez gradul de rudenie sau de afinitate și dacă tu ori o persoană din cercul prevăzut de lege ai fost beneficiarul folosului.",
        "Susțin aplicarea excepțiilor prevăzute expres de lege.",
        "Coordonez apărarea din dosarul penal cu contestația împotriva raportului de integritate.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Când în dosar apar și acuzații privind foloase primite direct, situația se analizează împreună cu " },
          { text: "acuzațiile de corupție propriu-zisă", to: "/servicii/dare-luare-de-mita" },
          { text: "." },
        ],
      ],
      cta: "De ce să mă alegi",
    },
  ],
  faq: [
    {
      q: "Raportul de integritate înseamnă automat dosar penal?",
      a: "Nu. Constatarea administrativă a unei stări de conflict de interese nu echivalează cu întrunirea elementelor infracțiunii.",
    },
    {
      q: "Contractul semnat poate fi anulat?",
      a: "Da. Actele încheiate cu încălcarea regulilor privind conflictul de interese pot fi lovite de nulitate.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 301 privind folosirea funcției pentru favorizarea unor persoane.", href: CP, linkLabel: "Legislație" },
    { text: "Legea 78/2000 privind faptele de corupție și faptele asimilate acestora.", href: L78, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR,
};

/* ============================================================
   Subservicii - pagina-pilon Cauze penale privind droguri
   ============================================================ */

const L143 = "https://legislatie.just.ro/Public/DetaliiDocumentAfis/23629";
const L58 = "https://legislatie.just.ro/Public/DetaliiDocument/280178";
const ICCJ25 = "https://legislatie.just.ro/Public/DetaliiDocumentAfis/293958";
const ICCJ15 = "https://legislatie.just.ro/Public/DetaliiDocument/189358";
const OUG78 = "https://legislatie.just.ro/Public/DetaliiDocument/305273";

const PARENT_DO = {
  to: "/servicii/cauze-penale-privind-droguri",
  label: "cauze penale privind droguri",
  breadcrumbLabel: "Cauze penale privind droguri",
};

export const detinereDroguriConsumPropriuRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/detinere-droguri-consum-propriu",
  altPath: "/en/services/drug-possession-personal-use",
  roPath: "/servicii/detinere-droguri-consum-propriu",
  title: "Avocat deținere droguri consum propriu București | Bogdan Lamatic",
  h1: "Avocat deținere droguri pentru consum propriu în București",
  description:
    "Ai fost găsit cu droguri pentru consum propriu sau ai fost chemat într-un dosar penal? Analizez rapid încadrarea, probele și riscul de trafic.",
  keywords:
    "avocat detinere droguri consum propriu, avocat droguri bucuresti, avocat dosar droguri, consum propriu vs trafic",
  breadcrumbLabel: "Deținere droguri pentru consum propriu",
  serviceName: "Avocat deținere droguri pentru consum propriu București - Bogdan Lamatic",
  urgency: [
    "Ai fost găsit cu droguri asupra ta, în mașină sau în locuință?",
    "Ai primit citație sau urmează să fii audiat?",
    "Diferența dintre consum propriu și trafic poate schimba radical situația juridică.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane cercetate pentru deținerea de droguri pentru consum propriu, în dosare instrumentate de Poliție, Parchet sau DIICOT.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege situația care corespunde dosarului tău."],
      subsections: [
        {
          h3: "Au fost găsite droguri asupra ta, în mașină sau în locuință",
          paragraphs: [
            "Trebuie stabilit rapid ce substanță a fost ridicată, cantitatea, locul în care a fost găsită și ce alte probe există în dosar.",
            "Într-o acuzație privind deținerea de droguri pentru consum propriu, analiza nu trebuie făcută doar prin raportare la cantitate. Contează contextul complet al cauzei și ceea ce poate fi dovedit prin probe.",
          ],
        },
        {
          h3: "Ai primit citație sau urmează să fii audiat",
          paragraphs: [
            "Înainte de declarație trebuie să știi exact în ce calitate ești chemat, ce faptă este investigată și ce informații există deja în dosar.",
            "Nu încerca să explici situația printr-o declarație improvizată înainte să înțelegi acuzația și probele.",
          ],
        },
        {
          h3: "Procurorul consideră că drogurile nu erau doar pentru consum propriu",
          paragraphs: [
            [
              { text: "Diferența dintre deținerea pentru consum propriu și " },
              { text: "traficul de droguri", to: "/servicii/cauze-penale-privind-droguri" },
              { text: " poate schimba radical situația juridică." },
            ],
            "Dacă sunt invocate cantitatea, modul de ambalare, conversații, transferuri de bani sau alte indicii de distribuire, fiecare element trebuie analizat separat.",
          ],
        },
        {
          h3: "O persoană apropiată este cercetată",
          paragraphs: [
            "Familia mă poate contacta chiar dacă nu are toate documentele dosarului.",
            "Spune-mi unde se află persoana, ce s-a întâmplat și ce acte aveți în acest moment.",
          ],
          cta: "Sună-mă acum - 031 632 01 83",
          ctaIcon: false,
        },
      ],
    },
    {
      h2: "Ce analizez imediat într-un dosar de deținere de droguri pentru consum propriu",
      paragraphs: [
        "Verific în primul rând dacă probele susțin efectiv încadrarea reținută de organele de urmărire penală.",
      ],
      bullets: [
        "substanța identificată și raportul de constatare sau expertiză;",
        "cantitatea ridicată;",
        "locul și împrejurările în care a fost găsită;",
        "modul în care era păstrată sau ambalată;",
        "existența sau lipsa unor probe privind distribuirea;",
        "conversațiile din telefon și contextul lor complet;",
        "eventualele transferuri de bani;",
        "declarațiile celorlalte persoane din dosar;",
        "procesele-verbale de percheziție și ridicare;",
        "legalitatea obținerii probelor;",
        "dacă există probe care susțin scopul exclusiv de consum propriu;",
        "dacă acuzația include și alte infracțiuni.",
      ],
      paragraphsAfterBullets: [
        "Nu există în lege un prag cantitativ fix care să transforme automat deținerea pentru consum propriu în trafic. Încadrarea se stabilește în funcție de ansamblul probelor și de scopul deținerii. Înalta Curte a subliniat în 2025 opțiunea legiuitorului de a nu stabili un asemenea prag.",
      ],
      cta: "Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți pentru prima evaluare",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "citația;",
        "procesul-verbal de percheziție;",
        "procesul-verbal de ridicare a substanțelor;",
        "ordonanțele sau actele primite de la organul de urmărire penală;",
        "raportul privind substanța, dacă ți-a fost comunicat;",
        "orice document privind telefonul sau alte dispozitive ridicate;",
        "informația privind următoarea audiere sau următorul termen.",
      ],
      paragraphsAfterBullets: [
        "Pentru prima discuție este suficient să îmi spui ce s-a întâmplat și ce știi în acest moment.",
      ],
      calloutAfterBullets: "Nu ai toate actele?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Sună oricum",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
    },
    {
      h2: "Ce înseamnă deținerea de droguri pentru consum propriu?",
      paragraphs: [
        "Art. 4 din Legea nr. 143/2000 sancționează cultivarea, producerea, fabricarea, experimentarea, extragerea, prepararea, transformarea, cumpărarea sau deținerea de droguri pentru consum propriu, fără drept.",
        "În forma consolidată actuală a legii, fapta prevăzută de art. 4 este sancționată cu închisoare de la 2 la 5 ani.",
        "Important este scopul pentru care substanța a fost cumpărată sau deținută. Același fapt material - de exemplu deținerea - poate necesita o analiză complet diferită dacă organele de anchetă susțin că drogurile erau destinate circulației sau distribuirii și nu exclusiv consumului propriu.",
      ],
    },
    {
      h2: "Care este diferența dintre deținerea pentru consum propriu și traficul de droguri?",
      paragraphs: [
        "Diferența nu se stabilește numai după numărul de grame. Pentru a vedea dacă probele indică consum propriu sau trafic, trebuie analizate împreună toate circumstanțele.",
      ],
      subsections: [
        {
          h3: "Cantitatea contează, dar nu decide singură încadrarea",
          paragraphs: [
            "O cantitate mai mare poate fi folosită de acuzare ca indiciu, însă legea nu stabilește un număr de grame de la care deținerea devine automat trafic.",
          ],
        },
        {
          h3: "Modul de ambalare poate deveni relevant",
          paragraphs: [
            "Mai multe pachete separate, obiecte despre care acuzarea susține că erau folosite pentru porționare sau alte împrejurări similare pot fi analizate împreună cu celelalte probe. Aceste elemente nu trebuie evaluate izolat.",
          ],
        },
        {
          h3: "Telefonul și conversațiile pot schimba interpretarea dosarului",
          paragraphs: [
            "În multe dosare, acuzarea folosește conversații, contacte, localizări, fotografii sau alte date informatice pentru a susține existența unor operațiuni de distribuire. Mesajele trebuie analizate în context, nu doar prin fragmente selectate.",
          ],
        },
        {
          h3: "Fluxurile de bani pot fi analizate ca probe",
          paragraphs: [
            "Transferurile bancare sau alte plăți pot fi invocate în susținerea acuzației. Trebuie stabilit însă ce reprezintă efectiv fiecare tranzacție și dacă există o legătură probată cu drogurile.",
          ],
        },
      ],
      paragraphsAfterBullets: [
        [
          { text: "La final, vezi și " },
          { text: "pagina principală despre cauze penale privind drogurile", to: "/servicii/cauze-penale-privind-droguri" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Pot fi acuzat de trafic dacă drogurile erau pentru mine?",
      paragraphs: [
        "Da, o asemenea acuzație poate apărea dacă organele de urmărire penală interpretează probele ca indicând distribuirea sau alte operațiuni de circulație a drogurilor. Dar existența acuzației nu înseamnă că încadrarea este automat corectă.",
        "Art. 2 și art. 4 din Legea nr. 143/2000 reglementează situații diferite, iar scopul concret al operațiunii trebuie stabilit prin probe.",
      ],
      bullets: [
        "ce probe indică pretinsa distribuire;",
        "dacă există efectiv cumpărători sau destinatari identificați;",
        "dacă sunt dovedite tranzacții;",
        "contextul conversațiilor;",
        "raportul dintre cantitate și situația concretă;",
        "explicația celorlalte obiecte ridicate;",
        "dacă există argumente pentru o altă încadrare juridică.",
      ],
    },
    {
      h2: "Ce se întâmplă cu telefonul ridicat în dosar?",
      paragraphs: [
        "În dosarele privind drogurile, telefonul poate deveni una dintre principalele surse de probă. Pot fi analizate, în condițiile procedurale aplicabile: conversații, fotografii și fișiere, contacte, date privind conturile, localizări, aplicații de mesagerie și alte informații relevante pentru acuzație.",
        "Verific atât conținutul folosit de acuzare, cât și modul în care datele au fost obținute și interpretate. Nu șterge și nu modifica date despre care știi că pot fi relevante pentru o procedură penală.",
      ],
    },
    {
      h2: "Ce se întâmplă după deschiderea dosarului?",
      paragraphs: [
        "Procedura diferă de la caz la caz. Pot urma: analiza substanțelor ridicate, audierea persoanei cercetate, analiza telefoanelor și a altor probe, administrarea unor probe suplimentare, stabilirea încadrării juridice, o soluție a procurorului sau, dacă se dispune trimiterea în judecată, continuarea cauzei în instanță.",
        "În apărare urmăresc atât acuzația în sine, cât și legalitatea și forța probelor pe care aceasta se bazează. Nicio soluție nu poate fi garantată înainte de analiza dosarului.",
      ],
    },
    {
      h2: "Dacă mai multe persoane sunt cercetate în același dosar",
      paragraphs: [
        [
          { text: "Faptul că mai multe persoane sunt cercetate împreună nu înseamnă automat existența unui " },
          { text: "grup infracțional organizat", to: "/servicii/grup-infractional-organizat" },
          { text: ". O asemenea acuzație are condiții distincte și trebuie probată separat." },
        ],
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar privind posesia sau deținerea de droguri pentru consum propriu",
      paragraphs: [
        "Strategia poate include, în funcție de dosar:",
      ],
      bullets: [
        "delimitarea consumului propriu de acuzația de trafic;",
        "verificarea legalității percheziției și ridicării probelor;",
        "analiza raportului privind substanțele;",
        "verificarea datelor informatice;",
        "contestarea interpretărilor care nu sunt susținute de ansamblul probelor;",
        "administrarea probelor favorabile;",
        "formularea cererilor și apărărilor potrivite etapei procesuale;",
        "reprezentarea în fața organelor de urmărire penală și a instanței.",
      ],
      paragraphsAfterBullets: [
        "Mă ocup personal de strategia dosarului și de momentele esențiale ale mandatului.",
        [
          { text: "Vezi și " },
          { text: "pagina principală despre cauze penale privind drogurile", to: "/servicii/cauze-penale-privind-droguri" },
          { text: " sau situația de " },
          { text: "trafic internațional de droguri", to: "/servicii/trafic-international-de-droguri" },
          { text: "." },
        ],
      ],
      cta: "Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
  ],
  faq: [
    {
      q: "Există o cantitate maximă considerată automat pentru consum propriu?",
      a: "Nu. Legea nu stabilește un prag cantitativ fix care să separe automat consumul propriu de trafic. Cantitatea este analizată împreună cu celelalte probe.",
    },
    {
      q: "Dacă drogurile erau doar pentru mine, tot există dosar penal?",
      a: "Art. 4 din Legea nr. 143/2000 incriminează, între altele, cumpărarea și deținerea fără drept de droguri pentru consum propriu. Chiar și în această situație este posibil un dosar penal, deși încadrarea și pedeapsa sunt diferite de trafic.",
    },
    {
      q: "Cantitatea mică garantează încadrarea la consum propriu?",
      a: "Nu. Nici cantitatea mică și nici cantitatea mare nu stabilesc singure încadrarea. Trebuie analizat ansamblul probelor.",
    },
    {
      q: "Se poate schimba încadrarea din trafic în deținere pentru consum propriu?",
      a: "Încadrarea juridică trebuie să corespundă faptelor și probelor efectiv dovedite. Dacă probele invocate pentru trafic nu susțin această acuzație, trebuie analizată încadrarea corectă în situația concretă.",
    },
    {
      q: "Ce fac dacă am primit citație?",
      a: "Verifică în ce calitate ești chemat și discută cu avocatul înainte de audiere, mai ales dacă există riscul ca declarația să influențeze încadrarea juridică.",
    },
    {
      q: "Familia poate contacta avocatul?",
      a: "Da. Un membru al familiei mă poate contacta și poate transmite documentele disponibile.",
    },
  ],
  faqTitle: "Întrebări frecvente despre deținerea de droguri pentru consum propriu",
  resources: [
    {
      text: "Legea nr. 143/2000 privind prevenirea și combaterea traficului și consumului ilicit de droguri.",
      href: L143,
      linkLabel: "Legislație",
    },
    {
      text: "Decizia nr. 25/2025 a Înaltei Curți privind lipsa unui prag cantitativ legal.",
      href: ICCJ25,
      linkLabel: "Legislație",
    },
    {
      text: "OUG nr. 78/2016 privind organizarea și competența DIICOT.",
      href: OUG78,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite-mi actele pe WhatsApp",
  reviewAfterSection: 2,
  reviewAuthor: "Lidia Caescu",
  reviewText:
    "Cautam un avocat in Bucuresti si din fericire l-am intalnit pe dl avocat Bogdan Lamatic. Din primul moment mi-a castigat intrederea prin profesionismul sau, calmul si empatia cu care m-a ascultat. Un OM in sensul adevarat al cuvantului. Il recomand din toata inima celor care au nevoie de un specialist in drept penal si un sprijin real intr-un moment dificil.",
  reviewMeta: "Local Guide · 24 de recenzii",
  reviewTimestamp: "acum 4 luni",
  reviewLink: "https://maps.app.goo.gl/wQzkQUTgvdG3JwbG6",
  parent: PARENT_DO,
};


export const grupInfractionalOrganizatRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/grup-infractional-organizat",
  altPath: "/en/services/organized-crime-group",
  roPath: "/servicii/grup-infractional-organizat",
  title: "Avocat grup infracțional organizat București | DIICOT",
  h1: "Avocat grup infracțional organizat în București",
  description:
    "Ești cercetat pentru constituire, aderare sau sprijinirea unui grup infracțional organizat? Analiză a rolului, probelor și acuzațiilor DIICOT.",
  keywords:
    "avocat grup infractional organizat, avocat diicot bucuresti, art 367 cod penal, aderare grup infractional",
  breadcrumbLabel: "Grup infracțional organizat",
  serviceName: "Avocat grup infracțional organizat București - Bogdan Lamatic",
  urgency: [
    "Ești cercetat pentru constituirea, aderarea sau sprijinirea unui grup infracțional organizat?",
    "Acuzația prevăzută de art. 367 Cod penal are condiții proprii, distincte de infracțiunea-scop.",
    "Rolul individual și probele care îl privesc trebuie analizate separat de activitatea grupului.",
  ],
  bio: [
    `${BIO_INTRO} Apăr persoane cercetate pentru constituirea, aderarea sau sprijinirea unui grup infracțional organizat, inclusiv în dosare instrumentate de DIICOT.`,
    LEGAL500,
  ],
  reviewAfterSection: 2,
  reviewAuthor: "Florian Claudiu Lazar",
  reviewMeta: "Local Guide · 2 recenzii",
  reviewTimestamp: "acum 5 luni",
  reviewText:
    "Domnul avocat Bogdan Lamatic nu doar că știe legea, dar o și explică pe înțelesul oricui. Și îți dă siguranță pe tot timpul procesului.",
  reviewLink: "https://maps.app.goo.gl/GQWEZ7T1arUcytpc8",
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      subsections: [
        {
          h3: "Ești cercetat într-un dosar cu mai multe persoane",
          paragraphs: [
            "Faptul că mai multe persoane sunt cercetate în aceeași cauză nu înseamnă, singur, că există un grup infracțional organizat.",
            "Trebuie verificat dacă sunt îndeplinite elementele specifice prevăzute de art. 367 Cod penal.",
          ],
        },
        {
          h3: "Procurorul susține că ai aderat sau ai sprijinit un grup",
          paragraphs: [
            "Este esențial să fie identificată concret acțiunea care îți este atribuită.",
            "Nu este suficient ca acuzația să folosească formule generale precum „a sprijinit activitatea grupului”. Trebuie analizate faptele și probele individuale.",
          ],
        },
        {
          h3: "Ai avut legături sau conversații cu persoane cercetate în același dosar",
          paragraphs: [
            "Relațiile personale, conversațiile sau simpla cunoaștere a altor persoane trebuie diferențiate de participarea conștientă la un grup constituit în scop infracțional.",
          ],
        },
        {
          h3: "Dosarul privește trafic de droguri",
          paragraphs: [
            [
              { text: "În cauzele privind drogurile, art. 367 poate apărea alături de infracțiunile prevăzute de Legea nr. 143/2000. Fiecare acuzație trebuie însă probată separat. Vezi și pagina despre " },
              { text: "cauze penale privind drogurile", to: "/servicii/cauze-penale-privind-droguri/" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat într-o acuzație de grup infracțional organizat",
      paragraphs: ["Verific:"],
      bullets: [
        "câte persoane sunt presupuse a face parte din grup;",
        "perioada în care se susține că grupul a funcționat;",
        "modul în care ar fi fost structurat;",
        "dacă există coordonare între persoane;",
        "scopul infracțional atribuit grupului;",
        "rolul concret imputat clientului;",
        "momentul presupusei aderări;",
        "actele despre care se susține că reprezintă sprijinirea grupului;",
        "conversațiile și interceptările;",
        "supravegherea tehnică;",
        "întâlnirile și deplasările;",
        "transferurile de bani;",
        "datele din telefoane și alte dispozitive;",
        "declarațiile coinculpaților, martorilor sau colaboratorilor;",
        "legătura dintre client și infracțiunile care ar fi intrat în scopul grupului;",
        "dacă probele descriu un grup organizat sau doar contacte și activități punctuale.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "citația;",
        "ordonanța prin care ți s-a comunicat calitatea procesuală;",
        "descrierea acuzației;",
        "încheieri sau ordonanțe primite;",
        "procesele-verbale de percheziție;",
        "actele privind telefoanele și dispozitivele ridicate;",
        "documentele privind eventuale măsuri luate în dosar;",
        "data următoarei audieri.",
      ],
      paragraphsAfterBullets: [
        "Dacă ai primit doar o citație și nu cunoști încă dosarul, mă poți contacta înainte de audiere.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce este un grup infracțional organizat?",
      paragraphs: [
        "Art. 367 Cod penal definește grupul infracțional organizat ca un grup structurat, format din trei sau mai multe persoane, constituit pentru o anumită perioadă de timp și pentru a acționa coordonat în scopul comiterii uneia sau mai multor infracțiuni.",
        "Legea incriminează:",
      ],
      bullets: [
        "inițierea unui grup;",
        "constituirea grupului;",
        "aderarea;",
        "sprijinirea, sub orice formă, a unui asemenea grup.",
      ],
    },
    {
      h2: "Ce trebuie să dovedească acuzarea?",
      subsections: [
        {
          h3: "Cel puțin trei persoane",
          paragraphs: ["Definiția legală presupune existența a minimum trei persoane."],
        },
        {
          h3: "Un grup structurat",
          paragraphs: [
            "Trebuie să existe elemente care permit identificarea unei structuri a grupului.",
            "Acuzația nu poate fi redusă pur și simplu la faptul că mai multe persoane se cunosc sau au fost prezente în aceeași cauză.",
          ],
        },
        {
          h3: "O anumită durată",
          paragraphs: [
            "Codul penal vorbește despre un grup constituit pentru o anumită perioadă de timp.",
            "Trebuie analizat dacă probele indică o structură cu continuitate sau doar împrejurări punctuale.",
          ],
        },
        {
          h3: "Acțiune coordonată",
          paragraphs: [
            "Trebuie stabilit în ce ar fi constat coordonarea și ce rol ar fi avut fiecare persoană.",
          ],
        },
        {
          h3: "Scopul comiterii uneia sau mai multor infracțiuni",
          paragraphs: [
            "Este necesar un scop infracțional al grupului.",
            "Faptele care ar fi intrat în scopul grupului trebuie identificate și analizate în raport cu fiecare persoană.",
          ],
        },
      ],
    },
    {
      h2: "Trei persoane care comit împreună o faptă înseamnă automat grup infracțional organizat?",
      paragraphs: [
        "Nu.",
        "Numărul de persoane este numai una dintre condiții.",
        "Art. 367 cere și existența unui grup structurat, constituit pentru o anumită perioadă și destinat unei acțiuni coordonate în scop infracțional.",
        "De aceea trebuie analizate concret:",
      ],
      bullets: [
        "durata relației dintre persoane;",
        "organizarea;",
        "coordonarea;",
        "rolurile efective;",
        "scopul comun;",
        "probele care arată că persoana cercetată a cunoscut și acceptat acest scop.",
      ],
    },
    {
      h2: "Este necesar ca grupul să urmărească obținerea de bani?",
      paragraphs: [
        "Nu este o condiție prevăzută de definiția actuală din art. 367 alin. (6).",
        "Spre deosebire de reglementări mai vechi, definiția actuală se concentrează pe structura formată din minimum trei persoane, durata acesteia, coordonare și scopul comiterii uneia sau mai multor infracțiuni. Curtea Constituțională a explicat această diferență dintre vechea și actuala reglementare.",
      ],
    },
    {
      h2: "Ce înseamnă aderarea la un grup infracțional organizat?",
      paragraphs: [
        "Aderarea presupune mai mult decât simpla cunoaștere a unor membri ai grupului.",
        "Jurisprudența a descris aderarea ca intrarea efectivă în grup, cu acceptarea scopului și a modului său de acțiune și cu contribuția la realizarea acestuia.",
        "Într-un dosar concret verific:",
      ],
      bullets: [
        "când susține acuzarea că a avut loc aderarea;",
        "ce acțiune ar demonstra-o;",
        "dacă persoana cunoștea scopul grupului;",
        "dacă există probe ale unei contribuții efective;",
        "dacă interpretarea conversațiilor este susținută de alte probe.",
      ],
    },
    {
      h2: "Ce înseamnă sprijinirea unui grup?",
      paragraphs: [
        "Acuzația de sprijinire trebuie raportată la acțiuni concrete.",
        "Trebuie identificat:",
      ],
      bullets: [
        "ce ajutor se susține că a fost acordat;",
        "cui;",
        "când;",
        "cu ce scop;",
        "dacă persoana știa natura și scopul grupului;",
        "ce probe demonstrează legătura dintre ajutor și activitatea grupului.",
      ],
      paragraphsAfterBullets: [
        "O relație comercială, personală sau o conversație nu trebuie confundată automat cu sprijinirea penală a unui grup.",
      ],
    },
    {
      h2: "Ce pedepse sunt prevăzute pentru constituirea unui grup infracțional organizat?",
      paragraphs: [
        "Pentru inițierea, constituirea, aderarea sau sprijinirea unui grup infracțional organizat, art. 367 alin. (1) prevede închisoare de la 1 la 5 ani și interzicerea exercitării unor drepturi.",
        "Dacă infracțiunea care intră în scopul grupului este sancționată cu detențiune pe viață sau cu închisoare mai mare de 10 ani, art. 367 alin. (2) prevede închisoare de la 3 la 10 ani și interzicerea exercitării unor drepturi.",
        "Dacă activitatea grupului este urmată de săvârșirea infracțiunilor urmărite, se aplică regulile privind concursul de infracțiuni.",
      ],
    },
    {
      h2: "Ce se întâmplă dacă în dosar sunt și alte infracțiuni?",
      paragraphs: [
        "Art. 367 nu înlocuiește automat infracțiunea care ar fi reprezentat scopul grupului.",
        "De exemplu, într-un dosar privind drogurile pot fi analizate separat:",
      ],
      bullets: [
        "constituirea sau aderarea la grup;",
        "traficul de droguri;",
        "traficul internațional de droguri;",
        "alte fapte atribuite fiecărei persoane.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Am pagini dedicate pentru " },
          { text: "traficul transfrontalier de droguri", to: "/servicii/trafic-international-de-droguri/" },
          { text: ", pentru " },
          { text: "consumul propriu", to: "/servicii/detinere-droguri-consum-propriu/" },
          { text: " și pentru " },
          { text: "dosarele de droguri în general", to: "/servicii/cauze-penale-privind-droguri/" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce probe sunt folosite într-un dosar privind un grup infracțional?",
      paragraphs: [
        "Astfel de dosare pot avea un volum foarte mare de probe.",
        "Pot fi folosite:",
      ],
      bullets: [
        "interceptări;",
        "supraveghere tehnică;",
        "conversații din aplicații;",
        "date din telefoane;",
        "fotografii;",
        "localizări;",
        "deplasări;",
        "transferuri financiare;",
        "acte și contracte;",
        "declarații ale celorlalte persoane;",
        "declarații ale martorilor;",
        "investigatori sau colaboratori;",
        "probe privind infracțiunile care ar fi intrat în scopul grupului.",
      ],
      paragraphsAfterBullets: [
        "Una dintre cele mai importante componente ale apărării este separarea probelor privind grupul în ansamblu de probele care demonstrează concret conduita clientului.",
        "Faptul că o probă îl privește pe un alt inculpat nu înseamnă automat că demonstrează și conduita tuturor celorlalți.",
      ],
    },
    {
      h2: "Ce se întâmplă dacă apari într-un grup de WhatsApp sau Telegram?",
      paragraphs: [
        "Simpla prezență într-un grup de mesagerie nu dovedește singură toate elementele art. 367.",
        "Trebuie analizate:",
      ],
      bullets: [
        "motivul pentru care persoana se afla în conversație;",
        "mesajele concrete;",
        "perioada;",
        "cine comunica efectiv;",
        "acțiunile ulterioare;",
        "cunoașterea presupusului scop infracțional;",
        "legătura dintre conversații și faptele cercetate.",
      ],
      paragraphsAfterBullets: [
        "Contextul complet al conversației poate fi la fel de important ca mesajele individuale selectate de acuzare.",
      ],
    },
    {
      h2: "Denunțul și cooperarea în cazul art. 367 Cod penal",
      paragraphs: [
        "Codul penal conține dispoziții speciale care pot deveni extrem de importante în anumite situații.",
        "Legea prevede o cauză de nepedepsire pentru persoana care denunță autorităților grupul în condițiile și la momentul strict prevăzute de art. 367.",
        "De asemenea, dacă persoana care a săvârșit una dintre faptele prevăzute de art. 367 alin. (1)-(3) înlesnește, în cursul urmăririi penale, aflarea adevărului și tragerea la răspundere penală a unuia sau mai multor membri ai grupului, limitele speciale ale pedepsei se reduc la jumătate.",
        "Aceste dispoziții au condiții și momente procedurale precise. Nu lua o decizie privind declarații sau cooperarea înainte să înțelegi efectele juridice concrete.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "De ce este important rolul individual într-un dosar cu mulți inculpați?",
      paragraphs: [
        "În dosarele complexe există riscul ca persoana să fie descrisă prin activitatea generală a grupului și nu prin propriile acțiuni.",
        "În apărare urmăresc să delimitez:",
      ],
      bullets: [
        "ce a făcut concret clientul;",
        "ce nu a făcut;",
        "ce știa;",
        "ce nu putea cunoaște;",
        "perioada în care a avut legături cu ceilalți;",
        "dacă a participat efectiv la coordonare;",
        "dacă a cunoscut scopul infracțional;",
        "dacă probele individuale susțin concluziile procurorului.",
      ],
    },
    {
      h2: "Competența DIICOT în dosarele privind criminalitatea organizată",
      paragraphs: [
        "OUG nr. 78/2016 stabilește competența DIICOT pentru categoriile de infracțiuni prevăzute de lege și pentru art. 367 atunci când în scopul grupului intră anumite infracțiuni aflate în competența DIICOT.",
        "Infracțiunile prevăzute de Legea nr. 143/2000 privind drogurile sunt incluse în competența DIICOT.",
        "Aceste cauze pot presupune investigații de durată, volume mari de probe și mai multe persoane cu poziții procesuale diferite.",
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de grup infracțional organizat",
      paragraphs: ["Analizez separat:"],
      bullets: [
        "existența presupusului grup;",
        "structura și durata;",
        "scopul infracțional;",
        "coordonarea;",
        "rolul clientului;",
        "momentul presupusei aderări sau sprijiniri;",
        "probele individuale;",
        "relația cu infracțiunea-scop;",
        "legalitatea probelor;",
        "acuzațiile conexe.",
      ],
      paragraphsAfterBullets: [
        "Nu pornesc de la premisa că activitatea atribuită celorlalte persoane poate fi transferată automat asupra clientului.",
        "Mă ocup personal de strategia dosarului și de reprezentarea pentru care preiau mandatul.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ești cercetat într-un dosar cu mai multe persoane?",
      paragraphs: ["Dacă acuzația folosește expresii precum:"],
      bullets: [
        "„grup infracțional organizat”;",
        "„aderare”;",
        "„sprijinire”;",
        "„rol în cadrul grupului”;",
        "„activitate coordonată”;",
      ],
      paragraphsAfterBullets: [
        "trimite-mi actul în care este descrisă acuzația și spune-mi când urmează următoarea audiere.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
  ],
  faq: [
    {
      q: "Sunt suficiente trei persoane pentru a exista un grup infracțional organizat?",
      a: "Nu. Minimum trei persoane este una dintre condiții, dar legea cere și un grup structurat, constituit pentru o anumită perioadă și destinat unei acțiuni coordonate în scop infracțional.",
    },
    {
      q: "Trebuie să existe un lider?",
      a: "Art. 367 nu condiționează existența infracțiunii de existența unei funcții denumite formal „lider”. Structura și coordonarea se analizează după modul concret de funcționare al presupusului grup.",
    },
    {
      q: "Dacă îi cunosc pe ceilalți inculpați înseamnă că fac parte din grup?",
      a: "Nu automat. Trebuie probată conduita care ar reprezenta inițiere, constituire, aderare sau sprijinire și legătura persoanei cu scopul infracțional al grupului.",
    },
    {
      q: "Dacă am participat la o singură faptă pot fi acuzat și de grup infracțional?",
      a: "Acuzația trebuie analizată separat. Participarea la o faptă și apartenența la un grup infracțional organizat au elemente juridice distincte.",
    },
    {
      q: "Ce pedeapsă are constituirea unui grup infracțional organizat?",
      a: "Forma de bază este sancționată cu 1-5 ani. Dacă infracțiunea-scop are pedeapsa detențiunii pe viață sau închisoarea mai mare de 10 ani, limitele pentru art. 367 sunt 3-10 ani.",
    },
    {
      q: "Pot fi sancționat și pentru grup, și pentru infracțiunea comisă de grup?",
      a: "Dacă sunt îndeplinite condițiile legale și faptele prevăzute de art. 367 sunt urmate de săvârșirea unei infracțiuni, Codul penal prevede aplicarea regulilor privind concursul de infracțiuni.",
    },
    {
      q: "Există beneficii legale dacă o persoană cooperează cu ancheta?",
      a: "Art. 367 conține dispoziții speciale privind denunțul și, în cursul urmăririi penale, înlesnirea aflării adevărului și tragerii la răspundere a membrilor grupului. Aplicarea lor depinde de condițiile exacte și de momentul procedural.",
    },
    {
      q: "Familia poate contacta avocatul?",
      a: "Da. Un membru al familiei mă poate contacta și transmite documentele disponibile, chiar și parțiale.",
    },
  ],
  faqTitle: "Întrebări frecvente despre grupul infracțional organizat",
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 367 privind constituirea unui grup infracțional organizat.",
      href: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/109855",
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - OUG nr. 78/2016 privind organizarea și competența DIICOT.",
      href: "https://legislatie.just.ro/Public/DetaliiDocument/305273",
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Legea nr. 39/2003 privind prevenirea și combaterea criminalității organizate.",
      href: "https://legislatie.just.ro/Public/DetaliiDocument/41478",
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Decizia CCR nr. 35/2021 privind art. 367 și definiția grupului infracțional organizat.",
      href: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/240065",
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_DO,

};

export const traficInternationalDeDroguriRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/trafic-international-de-droguri",
  altPath: "/en/services/international-drug-trafficking",
  roPath: "/servicii/trafic-international-de-droguri",
  title: "Avocat trafic internațional de droguri | București",
  h1: "Avocat trafic internațional de droguri în București",
  description:
    "Acuzat de import, export sau introducere de droguri în țară? Apărare în dosare de trafic internațional, controale la frontieră și investigații DIICOT.",
  keywords:
    "avocat trafic international droguri, avocat droguri frontiera, avocat colet droguri, avocat diicot droguri",
  breadcrumbLabel: "Trafic internațional de droguri",
  serviceName: "Avocat trafic internațional de droguri București - Bogdan Lamatic",
  urgency: [
    "Droguri descoperite la frontieră, în aeroport sau în trafic internațional?",
    "Traficul transfrontalier de droguri atrage pedepse severe și proceduri complexe.",
    "Fiecare etapă a transportului și fiecare probă trebuie verificate în detaliu.",
  ],
  bio: [
    `${BIO_INTRO} Apăr persoane cercetate pentru trafic internațional de droguri, în dosare cu interceptări, transporturi și cooperare judiciară internațională.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Drogurile au fost găsite la aeroport, frontieră sau într-un vehicul",
          paragraphs: [
            "Într-un dosar de trafic internațional trebuie stabilit exact cine avea controlul asupra bagajului, coletului sau vehiculului, ce știa fiecare persoană și ce probe leagă persoana cercetată de substanțele descoperite.",
          ],
        },
        {
          h3: "Ai primit sau ai expediat un colet din străinătate",
          paragraphs: [
            "Faptul că substanțele sunt transportate prin curier sau poștă nu elimină caracterul transfrontalier al investigației. Trebuie analizate expeditorul, destinatarul, plata, comunicările, traseul coletului și ceea ce poate fi dovedit privind cunoașterea conținutului.",
          ],
        },
        {
          h3: "Ești acuzat că ai organizat transportul, fără să fi avut drogurile asupra ta",
          paragraphs: [
            "Un dosar nu se limitează la persoana care transportă fizic substanțele. Acuzarea poate analiza rolurile persoanelor care ar fi comandat, finanțat, coordonat, primit sau facilitat operațiunea. Fiecare rol trebuie însă probat individual.",
          ],
        },
        {
          h3: "Dosarul include mai multe persoane sau o acuzație de grup infracțional organizat",
          paragraphs: [
            [
              { text: "Acuzația prevăzută de art. 367 Cod penal este distinctă și trebuie analizată separat de infracțiunea privind drogurile. Vezi și pagina dedicată " },
              { text: "grupului infracțional organizat", to: "/servicii/grup-infractional-organizat/" },
              { text: "." },
            ],
          ],
        },
      ],
    },
    {
      h2: "Ce analizez imediat într-un dosar de trafic internațional de droguri",
      paragraphs: [
        "În astfel de cauze verific:",
      ],
      bullets: [
        "unde și cum au fost descoperite substanțele;",
        "traseul internațional presupus de acuzare;",
        "cine a organizat deplasarea sau expedierea;",
        "cine avea controlul asupra bagajului, coletului ori vehiculului;",
        "ce știa efectiv persoana cercetată despre conținut;",
        "documentele de transport;",
        "rezervările și biletele;",
        "datele din telefoane;",
        "localizările și comunicațiile;",
        "plățile și transferurile de bani;",
        "probele privind expeditorul și destinatarul;",
        "supravegherea tehnică;",
        "eventualele livrări supravegheate;",
        "procesele-verbale de control și percheziție;",
        "raportul privind natura substanței;",
        "lanțul de custodie al probelor;",
        "rolul concret atribuit fiecărei persoane.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "citația;",
        "procesul-verbal de control;",
        "procesul-verbal de percheziție;",
        "documentele privind bagajul sau coletul;",
        "AWB-ul și documentele de curierat;",
        "bilete, rezervări sau acte privind transportul;",
        "ordonanțele și încheierile primite;",
        "actele privind telefonul sau alte dispozitive ridicate;",
        "orice document referitor la următoarea audiere.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce înseamnă traficul internațional de droguri?",
      paragraphs: [
        [
          { text: "Art. 3 din Legea nr. 143/2000 incriminează introducerea sau scoaterea din țară, precum și importul ori exportul de droguri, fără drept. Este o infracțiune distinctă de formele de " },
          { text: "trafic de droguri", to: "/servicii/cauze-penale-privind-droguri/" },
          { text: " reglementate de art. 2." },
        ],
        "În practică, componenta internațională poate apărea prin:",
      ],
      bullets: [
        "transport rutier;",
        "transport aerian;",
        "bagaje;",
        "colete;",
        "servicii de curierat;",
        "transport maritim;",
        "alte modalități prin care substanțele traversează frontiera.",
      ],
    },
    {
      h2: "Ce pedepse prevede legea pentru traficul internațional de droguri?",
      paragraphs: [
        "Forma actuală a art. 3 din Legea nr. 143/2000 prevede:",
      ],
      bullets: [
        "pentru drogurile de risc: închisoare de la 10 la 20 de ani și interzicerea unor drepturi;",
        "pentru drogurile de mare risc: închisoare de la 15 la 25 de ani și interzicerea unor drepturi.",
      ],
      paragraphsAfterBullets: [
        "Pentru infracțiunea prevăzută la art. 3 alin. (2) - trafic internațional de droguri de mare risc - legea prevede expres că nu se poate dispune suspendarea executării pedepsei sub supraveghere. Regula a fost introdusă prin Legea nr. 58/2024.",
        "Din acest motiv, încadrarea substanței și stabilirea exactă a faptelor imputate au o importanță majoră.",
      ],
    },
    {
      h2: "Trafic internațional sau trafic de droguri pe teritoriul României?",
      paragraphs: [
        [
          { text: "Art. 2 și art. 3 reglementează fapte diferite. Art. 3 privește componenta transfrontalieră - introducerea, scoaterea, importul sau exportul. Art. 2 privește operațiunile de circulație a drogurilor precum producerea, oferirea, vânzarea, distribuirea, transportul, procurarea, cumpărarea sau deținerea, în condițiile prevăzute de lege.", bold: true },
        ],
        "În anumite situații, o activitate transfrontalieră poate determina analiza ambelor infracțiuni. Înalta Curte a analizat expres posibilitatea concursului dintre traficul internațional și traficul de droguri în situația transportului transfrontalier continuat apoi pe teritoriul României.",
        "De aceea, trebuie stabilite separat:",
      ],
      bullets: [
        "momentul trecerii frontierei;",
        "conduita de după intrarea în România;",
        "rolul fiecărui participant;",
        "probele aferente fiecărei acuzații.",
      ],
    },
    {
      h2: "Ce se întâmplă dacă drogurile au fost găsite într-un bagaj care îți aparține?",
      paragraphs: [
        "Faptul că substanțele se află într-un bagaj asociat unei persoane este o probă importantă, dar dosarul trebuie analizat în ansamblu. Trebuie verificat:",
      ],
      bullets: [
        "cine a pregătit bagajul;",
        "cine a avut acces la el;",
        "cine îl controla efectiv;",
        "ce știa persoana despre conținut;",
        "ce conversații există;",
        "cine a cumpărat biletele;",
        "cine a finanțat deplasarea;",
        "ce alte probe confirmă sau contrazic acuzația.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Nu există o strategie standard pentru toate situațiile. Dacă cantitatea descoperită este mică și ancheta discută varianta consumului personal, situația se analizează diferit, potrivit celor explicate pe pagina privind " },
          { text: "deținerea de droguri pentru consum propriu", to: "/servicii/detinere-droguri-consum-propriu" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce se întâmplă dacă drogurile au venit printr-un colet?",
      paragraphs: [
        "În astfel de dosare, ancheta poate urmări întregul traseu al coletului:",
      ],
      bullets: [
        "expeditor;",
        "datele introduse în comandă;",
        "numărul de telefon;",
        "adresa de livrare;",
        "plata;",
        "IP-uri și conturi;",
        "destinatarul;",
        "persoana care ridică efectiv coletul;",
        "comunicările dintre persoanele implicate.",
      ],
      paragraphsAfterBullets: [
        "Trebuie stabilit dacă destinatarul cunoștea efectiv conținutul și ce probe există în acest sens.",
        [
          { text: "Dacă ai fost chemat pentru ridicarea unui colet sau după primirea acestuia, discută cu avocatul înainte de declarație. Vezi ce presupune " },
          { text: "asistența la audiere", to: "/servicii/audiere-politie-parchet" },
          { text: " și ce se întâmplă în cazul unei " },
          { text: "percheziții la domiciliu", to: "/servicii/perchezitie-domiciliara" },
          { text: "." },
        ],
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Livrarea supravegheată și intervenția organelor de anchetă",
      paragraphs: [
        "Legea permite, în condițiile procedurale aplicabile, folosirea livrărilor supravegheate în investigarea infracțiunilor privind drogurile. De asemenea, legislația permite utilizarea investigatorilor și colaboratorilor autorizați în condițiile legii.",
        "Într-un asemenea dosar verific:",
      ],
      bullets: [
        "actele de autorizare;",
        "succesiunea operațiunilor;",
        "momentul în care organele judiciare au intervenit;",
        "persoanele urmărite;",
        "modul în care au fost documentate acțiunile;",
        "declarațiile investigatorilor sau colaboratorilor;",
        "dacă probele susțin efectiv rolul atribuit clientului.",
      ],
    },
    {
      h2: "Ce rol au telefonul, localizarea și transferurile de bani?",
      paragraphs: [
        "Dosarele de trafic internațional au frecvent o componentă digitală și financiară importantă. Acuzarea poate încerca să reconstruiască traseul presupusei operațiuni prin:",
      ],
      bullets: [
        "conversații;",
        "apeluri;",
        "localizări;",
        "rezervări;",
        "conturi online;",
        "transferuri de bani;",
        "plăți pentru transport;",
        "date de curierat;",
        "fotografii și fișiere.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "În apărare nu este suficient să fie citite fragmente izolate. Trebuie verificată cronologia completă, legătura reală dintre fiecare probă și fapta imputată, precum și legalitatea modului în care au fost extrase datele în cadrul unei " },
          { text: "percheziții informatice", to: "/servicii/perchezitie-informatica" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce se întâmplă dacă nu ai transportat personal drogurile?",
      paragraphs: [
        "O persoană poate fi cercetată chiar dacă nu a trecut ea însăși frontiera cu substanțele, dacă procurorul susține că a participat la organizarea sau executarea operațiunii. În acest caz trebuie stabilit exact:",
      ],
      bullets: [
        "ce acțiune îi este imputată;",
        "ce probe susțin participarea;",
        "dacă există doar contacte cu alte persoane sau acțiuni concrete;",
        "dacă persoana cunoștea scopul operațiunii;",
        "dacă acuzația distinge corect rolurile participanților.",
      ],
      paragraphsAfterBullets: [
        "Simpla asociere cu alte persoane nu înlocuiește proba contribuției individuale.",
      ],
    },
    {
      h2: "Dacă dosarul include și acuzația de grup infracțional organizat",
      paragraphs: [
        [
          { text: "În dosarele cu mai mulți participanți, procurorul poate analiza și existența unui " },
          { text: "grup infracțional organizat", to: "/servicii/grup-infractional-organizat/" },
          { text: ". Această infracțiune are elemente proprii și nu rezultă automat din simplul fapt că trei sau mai multe persoane sunt cercetate în aceeași cauză." },
        ],
      ],
    },
    {
      h2: "Cum construiesc apărarea într-un dosar de trafic internațional de droguri",
      paragraphs: [
        "Analizez separat:",
      ],
      bullets: [
        "componenta transfrontalieră;",
        "natura și încadrarea substanței;",
        "rolul concret atribuit clientului;",
        "cunoașterea conținutului transportat;",
        "legătura dintre client și ceilalți participanți;",
        "probele digitale și financiare;",
        "legalitatea controalelor, perchezițiilor și supravegherii;",
        "eventualele livrări supravegheate;",
        "încadrarea juridică;",
        "acuzațiile conexe.",
      ],
      paragraphsAfterBullets: [
        "Strategia se construiește după dosar, nu după presupuneri.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
  ],
  reviewAfterSection: 2,
  reviewAuthor: "Robert Boloaja",
  reviewText:
    "Dosar penal complicat, cu acuzații serioase. Domnul avocat Bogdan Lamatic a fost excepțional: extrem de profesionist, strategie foarte bună, calm și pregătit maxim. A identificat rapid punctele slabe ale dosarului și a gestionat totul cu fermitate. Disponibil oricând, explică totul clar și realist, fără promisiuni false. Rezultatul a fost mult peste ce speram.",
  reviewMeta: "Local Guide · 3 recenzii",
  reviewTimestamp: "acum 2 luni",
  reviewLink: "https://maps.app.goo.gl/FrP7GEBkgb1pFW2Y8",
  faqTitle: "Întrebări frecvente despre traficul internațional de droguri",
  faq: [
    {
      q: "Care este diferența dintre trafic internațional și trafic de droguri?",
      a: "Traficul internațional presupune componenta de introducere, scoatere, import sau export reglementată de art. 3. Traficul prevăzut de art. 2 cuprinde alte operațiuni privind circulația drogurilor.",
    },
    {
      q: "Pot fi acuzat dacă drogurile erau într-un colet pe numele meu?",
      a: "Poți fi cercetat, dar trebuie stabilit dacă știai ce conține coletul și ce probe leagă efectiv persoana de operațiune.",
    },
    {
      q: "Ce pedeapsă există pentru importul de droguri?",
      a: "În forma actuală a legii, art. 3 prevede 10-20 ani pentru droguri de risc și 15-25 ani pentru droguri de mare risc.",
    },
    {
      q: "Se poate suspenda pedeapsa pentru trafic internațional de droguri de mare risc?",
      a: "Legea nr. 143/2000 prevede expres că pentru art. 3 alin. (2) nu poate fi dispusă suspendarea executării pedepsei sub supraveghere.",
    },
    {
      q: "Tentativa se pedepsește?",
      a: "Da. Legea nr. 143/2000 prevede sancționarea tentativei pentru infracțiunile indicate, inclusiv art. 3.",
    },
    {
      q: "Mai multe persoane implicate în transport înseamnă automat grup infracțional organizat?",
      a: "Nu automat. Pentru art. 367 Cod penal trebuie dovedite condițiile specifice ale grupului infracțional organizat.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Legea nr. 143/2000 privind prevenirea și combaterea traficului și consumului ilicit de droguri.",
      href: L143,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Legea nr. 58/2024 privind inclusiv imposibilitatea suspendării pentru art. 2 alin. (2) și art. 3 alin. (2).",
      href: L58,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Decizia ÎCCJ nr. 15/2017 privind traficul internațional și traficul de droguri.",
      href: ICCJ15,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - OUG nr. 78/2016 privind competența DIICOT.",
      href: OUG78,
      linkLabel: "Legislație",
    },
  ],
  contactText:
    "Ai un dosar de trafic transfrontalier sau import de droguri? Spune-mi unde au fost găsite substanțele, cum au ajuns în România, ce rol ți se atribuie, dacă există și alte persoane cercetate și când este următoarea audiere. Nu trebuie să ai toate documentele înainte să mă contactezi.",
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_DO,
};

const PARENT_SB = {
  to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
  label: "spălare de bani și ascundere de bunuri",
  breadcrumbLabel: "Spălare de bani, sechestru și confiscare",
};

export const sechestruAsiguratorRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/sechestru-asigurator",
  altPath: "/en/services/asset-freezing-order",
  roPath: "/servicii/sechestru-asigurator",
  title: "Avocat sechestru asigurător București | Bogdan Lamatic",
  h1: "Avocat sechestru asigurător în București",
  description:
    "Ți s-au blocat conturile sau imobilele într-un dosar penal? Contestarea sechestrului asigurător, ridicarea și restrângerea măsurii. 18+ ani experiență.",
  keywords:
    "avocat sechestru asigurator, contestare sechestru penal, ridicare sechestru, sechestru asigurator dosar penal",
  breadcrumbLabel: "Sechestru asigurător",
  serviceName: "Avocat sechestru asigurător București - Bogdan Lamatic",
  urgency: [
    "Ți s-au blocat conturile, mașina sau imobilele printr-o ordonanță de sechestru asigurător?",
    "Contestația împotriva măsurii asigurătorii se face în termen scurt, de 3 zile de la comunicare sau de la punerea în executare.",
    "Verific dacă măsura este justificată, dacă are proporție cu prejudiciul și ce bunuri pot fi scoase de sub sechestru.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane fizice și societăți cărora li s-au instituit măsuri asigurătorii în dosare penale, de la blocarea conturilor până la sechestrul pe imobile și părți sociale.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Ți s-au blocat conturile bancare",
          paragraphs: [
            "Blocarea conturilor este cea mai rapidă formă de indisponibilizare și afectează imediat plățile curente, salariile și obligațiile fiscale.",
            "Verific ce sume sunt vizate efectiv de ordonanță, dacă limita valorică a fost respectată și dacă în cont există sume care nu pot fi indisponibilizate.",
          ],
        },
        {
          h3: "Ai primit o ordonanță de instituire a sechestrului",
          paragraphs: [
            "Ordonanța trebuie să arate concret scopul măsurii, bunurile vizate și valoarea până la care se instituie sechestrul.",
            "O motivare generală, fără legătură cu prejudiciul sau cu bunurile supuse confiscării, poate fi criticată prin contestație.",
          ],
        },
        {
          h3: "Ți s-a notat sechestrul în cartea funciară",
          paragraphs: [
            "Sechestrul pe imobile se înscrie în cartea funciară și blochează vânzarea sau ipotecarea, chiar dacă poți folosi în continuare imobilul.",
            "Verific dacă imobilul este locuință de familie, dacă este coproprietate și dacă valoarea lui depășește vădit limita necesară.",
          ],
        },
        {
          h3: "Sechestrul afectează bunuri ale altei persoane sau ale firmei",
          paragraphs: [
            [
              { text: "Măsura poate atinge bunuri care nu îți aparțin sau părți sociale ale unei societăți. Terțul care se consideră vătămat își poate apăra dreptul, iar în dosarele economice sechestrul apare frecvent alături de acuzații de " },
              { text: "criminalitate economică", to: "/servicii/criminalitate-economica" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat într-un dosar cu sechestru asigurător",
      paragraphs: ["Verific:"],
      bullets: [
        "cine a dispus măsura: procurorul, judecătorul de cameră preliminară sau instanța;",
        "temeiul concret al măsurii: reparația pagubei, confiscarea specială, confiscarea extinsă sau executarea amenzii;",
        "dacă ordonanța este motivată în raport cu situația din dosar;",
        "valoarea prejudiciului reținut și proporția dintre aceasta și bunurile indisponibilizate;",
        "dacă bunurile aparțin suspectului, inculpatului, părții responsabile civilmente sau unui terț;",
        "dacă au fost respectate regulile privind bunurile exceptate de la sechestru;",
        "modul în care s-a făcut identificarea și evaluarea bunurilor;",
        "procesul-verbal de sechestru și modul de comunicare;",
        "dacă termenul de contestație curge de la comunicare sau de la punerea în executare;",
        "dacă se poate cere restrângerea măsurii la o parte din bunuri;",
        "dacă există bunuri care pot fi înlocuite cu o cauțiune sau cu alte garanții;",
        "efectele măsurii asupra activității firmei și asupra plăților esențiale.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "ordonanța sau încheierea prin care s-a dispus sechestrul;",
        "procesul-verbal de aplicare a sechestrului;",
        "notificarea primită de la bancă;",
        "extrasul de carte funciară cu notarea măsurii;",
        "actele de proprietate pentru bunurile vizate;",
        "documentele care arată originea sumelor sau a bunurilor;",
        "actele societății, dacă măsura privește o firmă;",
        "orice comunicare privind calitatea ta procesuală în dosar;",
        "data la care ai primit efectiv documentele, pentru calculul termenului de contestație.",
      ],
      paragraphsAfterBullets: [
        "Dacă ai aflat de sechestru doar din blocarea contului, mă poți contacta înainte să obții toate actele.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce este sechestrul asigurător și pe ce se bazează",
      paragraphs: [
        "Sechestrul asigurător este o măsură asigurătorie prevăzută de art. 249-254 Cod procedură penală. Prin această măsură bunurile sunt indisponibilizate, adică nu mai pot fi vândute, grevate sau înstrăinate.",
        "Măsurile asigurătorii se pot lua pentru:",
      ],
      bullets: [
        "evitarea ascunderii, distrugerii sau înstrăinării bunurilor care pot face obiectul confiscării speciale sau al confiscării extinse;",
        "garantarea executării pedepsei amenzii;",
        "garantarea reparării pagubei produse prin infracțiune;",
        "garantarea cheltuielilor judiciare.",
      ],
      paragraphsAfterBullets: [
        "Sechestrul nu presupune o condamnare și nu echivalează cu o confiscare. Este o măsură provizorie, care poate fi ridicată, restrânsă sau menținută în funcție de soluția din dosar.",
      ],
    },
    {
      h2: "Cine poate dispune sechestrul asigurător",
      paragraphs: [
        "În cursul urmăririi penale, măsura este dispusă de procuror prin ordonanță.",
        "În procedura de cameră preliminară măsura poate fi dispusă de judecătorul de cameră preliminară, iar în cursul judecății de instanță, din oficiu sau la cererea procurorului ori a părții civile.",
        "În unele situații prevăzute de lege, luarea măsurilor asigurătorii este obligatorie, cum se întâmplă în cazul infracțiunilor care au produs un prejudiciu, atunci când legea specială prevede expres acest lucru.",
      ],
    },
    {
      h2: "Ce bunuri pot fi indisponibilizate",
      paragraphs: ["Sechestrul poate viza:"],
      bullets: [
        "sume de bani din conturi bancare;",
        "numerar identificat cu ocazia percheziției;",
        "autovehicule;",
        "imobile, terenuri și construcții;",
        "părți sociale sau acțiuni;",
        "bunuri mobile de valoare;",
        "creanțe și sume datorate de terți.",
      ],
      paragraphsAfterBullets: [
        "Nu pot fi sechestrate bunurile care aparțin unei unități publice, precum și bunurile exceptate de lege de la urmărirea silită, cum sunt cele strict necesare traiului zilnic al debitorului și al familiei sale.",
        "Sechestrul se poate institui și asupra bunurilor altei persoane decât suspectul sau inculpatul, în măsura în care acele bunuri intră în categoriile prevăzute de lege, de exemplu bunuri dobândite de la inculpat sau bunuri supuse confiscării.",
      ],
    },
    {
      h2: "Cum se contestă sechestrul asigurător",
      paragraphs: [
        "Împotriva măsurii asigurătorii luate de procuror sau a modului de aducere la îndeplinire a acesteia, suspectul, inculpatul sau orice altă persoană interesată poate face plângere, în termen de 3 zile de la comunicarea ordonanței sau de la data punerii în executare, la judecătorul de drepturi și libertăți.",
        "Când măsura este dispusă în cursul judecății, contestația se soluționează de instanța ierarhic superioară, tot în termen de 3 zile.",
        "În practică, argumentele care pot fi folosite privesc:",
      ],
      bullets: [
        "lipsa motivării concrete a ordonanței;",
        "inexistența unei legături între bunurile sechestrate și fapta cercetată;",
        "disproporția dintre valoarea bunurilor și prejudiciul reținut;",
        "apartenența bunului către un terț de bună-credință;",
        "caracterul exceptat al bunului;",
        "evaluarea greșită a bunurilor;",
        "afectarea nejustificată a activității unei societăți.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ridicarea sau restrângerea sechestrului",
      paragraphs: [
        "Chiar dacă măsura a fost luată legal, ea nu este definitivă. Dacă temeiurile care au justificat sechestrul se schimbă, se poate cere ridicarea totală sau parțială a măsurii.",
        "Situații întâlnite frecvent:",
      ],
      bullets: [
        "prejudiciul a fost acoperit integral sau parțial;",
        "valoarea bunurilor indisponibilizate depășește vădit valoarea necesară;",
        "s-a dispus clasarea, achitarea sau încetarea procesului penal;",
        "bunul aparține unui terț care își poate dovedi dreptul;",
        "bunul este esențial pentru desfășurarea activității economice și există alte garanții.",
      ],
      paragraphsAfterBullets: [
        "Când procesul se finalizează fără dispoziție de confiscare sau de reparare a pagubei, măsura asigurătorie încetează de drept, iar bunurile trebuie restituite.",
      ],
    },
    {
      h2: "Sechestru asigurător, poprire și confiscare: care este diferența",
      paragraphs: [
        "Sechestrul asigurător indisponibilizează bunuri determinate. Poprirea asigurătorie privește sumele de bani datorate suspectului sau inculpatului de către un terț și se dispune tot ca măsură asigurătorie.",
        [
          { text: "Confiscarea este o măsură de siguranță dispusă prin hotărâre, care transferă definitiv bunul către stat. Sechestrul doar pregătește o eventuală confiscare sau o despăgubire. Detaliile privind confiscarea specială și cea extinsă sunt explicate pe pagina despre " },
          { text: "confiscarea bunurilor în dosarul penal", to: "/servicii/confiscare" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce efecte are sechestrul asupra conturilor, imobilelor și firmei",
      paragraphs: [
        "Blocarea conturilor poate opri plata salariilor, a furnizorilor și a obligațiilor fiscale. Sechestrul pe imobil împiedică vânzarea sau ipotecarea, iar sechestrul pe părțile sociale blochează operațiunile privind capitalul societății.",
        "În aceste situații este important să fie arătate instanței efectele concrete ale măsurii, pentru ca aceasta să poată aprecia proporționalitatea. O măsură care depășește scopul urmărit poate fi restrânsă.",
        [
          { text: "În dosarele în care sechestrul apare alături de acuzații privind proveniența banilor, apărarea trebuie construită împreună cu apărarea pe fondul acuzației de " },
          { text: "spălare de bani", to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Greșeli frecvente după instituirea sechestrului",
      bullets: [
        "se ratează termenul de 3 zile pentru contestație;",
        "se încearcă înstrăinarea bunului sechestrat, ceea ce poate atrage o nouă acuzație penală;",
        "nu se depun documentele care arată originea licită a sumelor;",
        "nu se cere evaluarea corectă a bunurilor;",
        "nu se solicită restrângerea măsurii atunci când valoarea depășește prejudiciul;",
        "terții nu își valorifică dreptul de a-și apăra bunul în procesul penal.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Pașii practici pe care îi urmez",
      bullets: [
        "analizez ordonanța și dosarul, în limita accesului permis;",
        "calculez termenul de contestație și pregătesc plângerea;",
        "adun documentele privind proprietatea și originea bunurilor;",
        "formulez cererea de ridicare sau de restrângere a măsurii, dacă este cazul;",
        "susțin cererea în fața judecătorului de drepturi și libertăți sau a instanței;",
        "urmăresc soluția asupra măsurii pe tot parcursul procesului, până la restituirea bunurilor.",
      ],
    },
  ],
  faq: [
    {
      q: "În cât timp pot contesta sechestrul asigurător?",
      a: "Termenul este de 3 zile de la comunicarea ordonanței sau de la data punerii în executare a măsurii, potrivit art. 250 Cod procedură penală.",
    },
    {
      q: "Sechestrul înseamnă că îmi pierd bunurile?",
      a: "Nu. Sechestrul este o măsură provizorie de indisponibilizare. Pierderea definitivă a bunului poate interveni doar prin confiscare, dispusă prin hotărâre judecătorească.",
    },
    {
      q: "Pot folosi în continuare imobilul sechestrat?",
      a: "De regulă da, dacă bunul nu a fost ridicat. Sechestrul blochează înstrăinarea și grevarea imobilului, notate în cartea funciară, dar nu presupune automat evacuarea.",
    },
    {
      q: "Ce se întâmplă cu salariul virat într-un cont blocat?",
      a: "Legea exceptează de la urmărire anumite sume necesare traiului. Dacă în contul indisponibilizat intră astfel de sume, se poate cere restrângerea măsurii pentru partea exceptată.",
    },
    {
      q: "Se poate institui sechestru pe bunurile soției sau ale unei alte persoane?",
      a: "Da, în situațiile prevăzute de lege, de exemplu pentru bunuri dobândite de la inculpat sau bunuri supuse confiscării. Terțul care se consideră vătămat poate face plângere împotriva măsurii.",
    },
    {
      q: "Dacă achit prejudiciul, se ridică sechestrul?",
      a: "Acoperirea prejudiciului este un argument important pentru ridicarea sau restrângerea măsurii, dar instanța verifică și celelalte scopuri ale sechestrului, cum ar fi confiscarea sau amenda.",
    },
    {
      q: "Ce se întâmplă cu sechestrul dacă se dispune clasarea sau achitarea?",
      a: "Când nu se dispune confiscarea și nici obligarea la plata unor sume, măsura asigurătorie încetează, iar bunurile trebuie restituite.",
    },
    {
      q: "Pot vinde bunul dacă am nevoie urgentă de bani?",
      a: "Nu. Înstrăinarea unui bun sechestrat poate atrage o nouă răspundere penală. Soluția corectă este să ceri ridicarea sau restrângerea măsurii pe cale legală.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul de procedură penală, art. 249-254 privind măsurile asigurătorii.",
      href: CPP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul penal, art. 112 și art. 112 indice 1 privind confiscarea specială și extinsă.",
      href: CP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_SB,
};

export const confiscareRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/confiscare",
  altPath: "/en/services/confiscation",
  roPath: "/servicii/confiscare",
  title: "Avocat confiscare extinsă București | Bogdan Lamatic",
  h1: "Avocat confiscare și confiscare extinsă în București",
  description:
    "Riști confiscarea bunurilor într-un dosar penal? Apărare împotriva confiscării speciale și a confiscării extinse, proba originii licite a bunurilor.",
  keywords:
    "avocat confiscare extinsa, confiscare bunuri dosar penal, confiscare speciala, avocat confiscare bucuresti",
  breadcrumbLabel: "Confiscare",
  serviceName: "Avocat confiscare și confiscare extinsă București - Bogdan Lamatic",
  urgency: [
    "Ți se cere confiscarea unor sume de bani, a mașinii sau a imobilelor în dosarul penal?",
    "Confiscarea specială și confiscarea extinsă au condiții diferite și se combat cu argumente diferite.",
    "Proba originii licite a bunurilor se pregătește din timp, nu în ultima zi de proces.",
  ],
  bio: [
    `${BIO_INTRO} Apăr persoane și societăți în cauze în care se solicită confiscarea specială sau confiscarea extinsă a bunurilor, inclusiv în dosare economice și de corupție.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Procurorul cere confiscarea unor sume de bani",
          paragraphs: [
            "Trebuie stabilit dacă sumele sunt considerate produs al infracțiunii, dacă au fost identificate concret și dacă există dovezi ale provenienței lor licite.",
          ],
        },
        {
          h3: "Se solicită confiscarea extinsă a bunurilor dobândite în ultimii ani",
          paragraphs: [
            "Confiscarea extinsă privește bunuri dobândite în perioada de 5 ani anterioară și, dacă este cazul, ulterioară săvârșirii faptei. Analiza pornește de la veniturile licite și de la documentele care le atestă.",
          ],
        },
        {
          h3: "Bunurile au fost deja indisponibilizate prin sechestru",
          paragraphs: [
            [
              { text: "Sechestrul este doar măsura provizorie prin care se pregătește o eventuală confiscare. Cele două se contestă separat, iar detaliile privind indisponibilizarea sunt pe pagina despre " },
              { text: "sechestrul asigurător în dosarul penal", to: "/servicii/sechestru-asigurator" },
              { text: "." },
            ],
          ],
        },
        {
          h3: "Ești terț și ți se confiscă un bun",
          paragraphs: [
            "Legea permite confiscarea de la terți în anumite situații. Dacă ai cumpărat bunul cu bună-credință și poți dovedi plata, poziția ta trebuie susținută cu documente în procesul penal.",
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat într-un dosar cu risc de confiscare",
      paragraphs: ["Verific:"],
      bullets: [
        "temeiul invocat: confiscare specială sau confiscare extinsă;",
        "categoria concretă în care sunt încadrate bunurile;",
        "dacă infracțiunea permite confiscarea extinsă, potrivit listei din lege;",
        "pedeapsa prevăzută de lege pentru fapta cercetată;",
        "perioada de referință pentru bunurile dobândite;",
        "veniturile licite din perioada analizată;",
        "documentele fiscale, contractele și extrasele de cont;",
        "modul în care a fost calculată diferența dintre venituri și bunuri;",
        "dacă bunul a fost transferat unui terț și în ce condiții;",
        "dacă bunul poate fi înlocuit cu echivalentul în bani;",
        "raportul dintre confiscare și despăgubirile civile cerute;",
        "evaluarea bunurilor și eventualele erori de calcul.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "rechizitoriul sau ordonanța din care rezultă solicitarea de confiscare;",
        "ordonanța de instituire a sechestrului, dacă există;",
        "actele de proprietate pentru bunurile vizate;",
        "contractele de vânzare, donație sau împrumut;",
        "extrasele de cont pentru perioada relevantă;",
        "declarațiile fiscale și adeverințele de venit;",
        "documentele privind veniturile membrilor familiei;",
        "actele privind creditele bancare;",
        "orice document care arată originea banilor folosiți la cumpărarea bunurilor.",
      ],
      paragraphsAfterBullets: [
        "Dacă nu ai încă toate actele, putem stabili împreună ce documente trebuie obținute și de unde.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce este confiscarea specială",
      paragraphs: [
        "Confiscarea specială este o măsură de siguranță prevăzută de art. 112 Cod penal. Prin ea, anumite bunuri trec definitiv în proprietatea statului.",
        "Sunt supuse confiscării speciale:",
      ],
      bullets: [
        "bunurile produse prin săvârșirea faptei prevăzute de legea penală;",
        "bunurile care au fost folosite, în orice mod, sau destinate a fi folosite la săvârșirea faptei, dacă sunt ale făptuitorului sau dacă aparțin altei persoane care a cunoscut scopul folosirii lor;",
        "bunurile folosite, imediat după săvârșirea faptei, pentru a asigura scăparea făptuitorului sau păstrarea folosului ori a produsului obținut;",
        "bunurile date pentru a determina săvârșirea unei fapte prevăzute de legea penală sau pentru a răsplăti pe făptuitor;",
        "bunurile dobândite prin săvârșirea faptei prevăzute de legea penală, dacă nu sunt restituite persoanei vătămate;",
        "bunurile a căror deținere este interzisă de legea penală.",
      ],
      paragraphsAfterBullets: [
        "Dacă bunurile nu se găsesc, se confiscă echivalentul lor în bani sau bunurile dobândite în locul lor.",
      ],
    },
    {
      h2: "Ce este confiscarea extinsă",
      paragraphs: [
        "Confiscarea extinsă este reglementată de art. 112 indice 1 Cod penal și privește alte bunuri decât cele legate direct de fapta pentru care s-a dispus condamnarea.",
        "Pentru a se dispune confiscarea extinsă trebuie îndeplinite mai multe condiții:",
      ],
      bullets: [
        "persoana să fie condamnată pentru una dintre infracțiunile prevăzute expres de lege;",
        "pedeapsa prevăzută de lege pentru acea infracțiune să fie închisoarea de 4 ani sau mai mare;",
        "fapta să fie susceptibilă să îi procure un folos material;",
        "valoarea bunurilor dobândite în perioada de referință să depășească în mod vădit veniturile obținute în mod licit;",
        "instanța să aibă convingerea că bunurile provin din activități infracționale de natura celor pentru care s-a dispus condamnarea.",
      ],
      paragraphsAfterBullets: [
        "Perioada analizată este cea de 5 ani anterioară și, dacă este cazul, ulterioară momentului săvârșirii infracțiunii, până la data emiterii actului de sesizare a instanței.",
      ],
    },
    {
      h2: "Diferența dintre confiscarea specială și confiscarea extinsă",
      paragraphs: [
        "Confiscarea specială privește bunuri legate direct de fapta cercetată: produsul infracțiunii, mijloacele folosite, sumele date sau primite.",
        "Confiscarea extinsă privește un patrimoniu mai larg, dobândit într-o perioadă determinată, și presupune o condamnare pentru o infracțiune din lista prevăzută de lege.",
        "Confiscarea specială se poate dispune și atunci când nu se pronunță o condamnare, de exemplu în caz de clasare, în condițiile prevăzute de lege. Confiscarea extinsă nu poate fi dispusă fără o condamnare.",
      ],
    },
    {
      h2: "Ce înseamnă proba originii licite a bunurilor",
      paragraphs: [
        "În materia confiscării extinse, analiza pornește de la o comparație între bunurile dobândite și veniturile licite din perioada de referință.",
        "Apărarea se construiește cu documente:",
      ],
      bullets: [
        "contracte de muncă, adeverințe și declarații fiscale;",
        "dividende și venituri din activități independente;",
        "contracte de vânzare a unor bunuri anterioare;",
        "credite bancare și contracte de împrumut;",
        "donații și moșteniri;",
        "venituri ale membrilor familiei care au contribuit la achiziție;",
        "sume obținute din străinătate, cu documentele de transfer.",
      ],
      paragraphsAfterBullets: [
        "Este important ca fiecare achiziție să fie explicată în ordine cronologică, cu documentele corespunzătoare, iar calculul acuzării să fie verificat în detaliu.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Confiscarea de la terți și bunurile transferate familiei",
      paragraphs: [
        "Legea permite confiscarea și în cazul bunurilor transferate unui membru de familie sau unei persoane juridice controlate de condamnat, precum și în cazul bunurilor transferate unei terțe persoane care cunoștea scopul transferului.",
        "Terțul de bună-credință, care a plătit un preț real pentru bun și poate dovedi plata, își poate apăra dreptul în procesul penal. De aceea documentele de plată și dovada surselor sunt esențiale.",
      ],
    },
    {
      h2: "Confiscare sau despăgubiri civile",
      paragraphs: [
        "Când prin faptă s-a produs un prejudiciu unei persoane, sumele pot fi folosite mai întâi pentru repararea pagubei, iar confiscarea privește ceea ce rămâne.",
        [
          { text: "În dosarele economice cele două se suprapun frecvent, iar strategia trebuie corelată cu apărarea pe fondul acuzației, de exemplu în cauzele de " },
          { text: "evaziune fiscală", to: "/servicii/evaziune-fiscala" },
          { text: " sau în dosarele de " },
          { text: "spălare de bani și ascundere de bunuri", to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Ce se poate obține în apel",
      paragraphs: [
        "Dispoziția de confiscare poate fi criticată separat de soluția asupra vinovăției.",
        "În apel se pot invoca:",
      ],
      bullets: [
        "lipsa condițiilor legale ale confiscării extinse;",
        "greșita încadrare a bunurilor în categoriile din art. 112 Cod penal;",
        "erori de calcul privind veniturile licite;",
        "ignorarea unor documente depuse la dosar;",
        "confiscarea unor bunuri care aparțin unor terți de bună-credință;",
        "disproporția dintre valoarea confiscată și folosul reținut.",
      ],
    },
    {
      h2: "Pașii practici pe care îi urmez",
      bullets: [
        "identific exact ce bunuri sunt vizate și pe ce temei;",
        "reconstitui situația veniturilor pe perioada de referință;",
        "adun și organizez documentele privind fiecare achiziție;",
        "verific calculele acuzării și evaluarea bunurilor;",
        "formulez cereri și concluzii scrise pe capătul privind confiscarea;",
        "susțin poziția în fața instanței și, dacă este cazul, în apel.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
  ],
  faq: [
    {
      q: "Ce este confiscarea extinsă?",
      a: "Este măsura prin care instanța confiscă bunuri dobândite în perioada de 5 ani anterioară și, dacă este cazul, ulterioară săvârșirii infracțiunii, atunci când valoarea lor depășește vădit veniturile licite, iar persoana este condamnată pentru o infracțiune din lista prevăzută de art. 112 indice 1 Cod penal.",
    },
    {
      q: "Se poate dispune confiscarea fără condamnare?",
      a: "Confiscarea specială poate fi dispusă și în lipsa unei condamnări, în cazurile prevăzute de lege, de exemplu la clasare. Confiscarea extinsă presupune însă o condamnare.",
    },
    {
      q: "Ce documente dovedesc originea licită a bunurilor?",
      a: "Declarațiile fiscale, adeverințele de venit, contractele de muncă, dividendele, contractele de vânzare, creditele bancare, împrumuturile, donațiile și moștenirile, alături de extrasele de cont care confirmă fluxul banilor.",
    },
    {
      q: "Îmi pot fi confiscate bunurile cumpărate de soț sau de copii?",
      a: "Legea permite confiscarea bunurilor transferate membrilor de familie sau unor persoane juridice controlate de condamnat. Persoana interesată poate dovedi însă că bunul a fost dobândit din venituri proprii.",
    },
    {
      q: "Ce se întâmplă dacă bunul a fost deja vândut?",
      a: "Dacă bunul nu se mai găsește, se confiscă echivalentul în bani sau bunurile dobândite în locul lui.",
    },
    {
      q: "Confiscarea se aplică și mașinii folosite la comiterea faptei?",
      a: "Poate fi confiscată dacă este considerată bun folosit la săvârșirea faptei și aparține făptuitorului sau unei persoane care a cunoscut scopul folosirii. Fiecare situație se analizează concret.",
    },
    {
      q: "Care este legătura dintre sechestru și confiscare?",
      a: "Sechestrul indisponibilizează provizoriu bunurile pentru a garanta o eventuală confiscare sau despăgubire. Confiscarea se dispune prin hotărâre și transferă definitiv bunul către stat.",
    },
    {
      q: "Pot contesta doar dispoziția de confiscare din hotărâre?",
      a: "Da. Apelul poate viza exclusiv capătul privind confiscarea, cu argumente proprii, distincte de cele privind vinovăția.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 112 privind confiscarea specială.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, art. 249-254 privind măsurile asigurătorii.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_SB,
};

const PARENT_IR = {
  to: "/servicii/infractiuni-rutiere-cu-victime",
  label: "infracțiuni rutiere",
  breadcrumbLabel: "Infracțiuni rutiere",
};

export const alcoolLaVolanRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/alcool-la-volan",
  altPath: "/en/services/drunk-driving",
  roPath: "/servicii/alcool-la-volan",
  title: "Avocat alcool la volan București | Bogdan Lamatic",
  h1: "Avocat alcool la volan în București",
  description:
    "Dosar penal pentru alcool la volan? Analizez etilotestul, recoltarea probelor biologice și încadrarea juridică pe art. 336 Cod penal. 18+ ani experiență.",
  keywords:
    "avocat alcool la volan bucuresti, dosar penal alcool volan, avocat art 336 cod penal, alcoolemie peste 0,80",
  breadcrumbLabel: "Alcool la volan",
  serviceName: "Avocat alcool la volan București - Bogdan Lamatic",
  urgency: [
    "Ai fost oprit în trafic, ai suflat în etilotest și ți s-a reținut permisul?",
    "În primele ore contează modul în care s-a făcut testarea, ora recoltării probelor de sânge și ce ai declarat la fața locului.",
    "Analizez dacă alcoolemia reținută rezistă la o verificare tehnică serioasă și ce soluții există în dosarul tău.",
  ],
  bio: [
    `${BIO_INTRO} Asist șoferi cercetați pentru conducerea sub influența alcoolului, din momentul reținerii permisului până la soluția finală din dosar.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Ai suflat peste 0,40 mg/l în aerul expirat",
          paragraphs: [
            "Valoarea din etilotest este doar un indiciu. Încadrarea penală se stabilește pe baza alcoolemiei din sânge, exprimată în grame de alcool pur la litru.",
            "Verific dacă ți s-a oferit posibilitatea recoltării probelor biologice și dacă aparatul folosit era verificat metrologic.",
          ],
        },
        {
          h3: "Ți s-au recoltat probe de sânge și aștepți buletinul toxicologic",
          paragraphs: [
            "Până la rezultatul analizei nu se poate discuta despre o încadrare definitivă. Intervalul dintre oprirea în trafic și recoltare este esențial.",
            "Pregătesc din timp argumentele privind curba de eliminare a alcoolului și eventualele erori de recoltare sau de transport al probelor.",
          ],
        },
        {
          h3: "Ai fost implicat și într-un accident",
          paragraphs: [
            [
              { text: "Când alcoolul se combină cu un eveniment rutier, dosarul capătă o altă dimensiune, iar apărarea se construiește împreună cu cea din dosarul de " },
              { text: "accident rutier cu victime", to: "/servicii/accident-rutier-cu-victime" },
              { text: "." },
            ],
          ],
        },
        {
          h3: "Ai fost chemat la audiere",
          paragraphs: [
            [
              { text: "Înainte de a da o declarație este bine să știi exact ce se reține în sarcina ta. Vezi cum pregătesc o " },
              { text: "audiere la Poliție sau Parchet", to: "/servicii/audiere-politie-parchet" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat într-un dosar de alcool la volan",
      paragraphs: ["Verific:"],
      bullets: [
        "ora opririi în trafic și ora exactă a testării cu etilotestul;",
        "buletinul de verificare metrologică al aparatului folosit;",
        "dacă ți s-a adus la cunoștință dreptul de a cere recoltarea probelor biologice;",
        "intervalul dintre oprire și prima recoltare de sânge;",
        "respectarea celor două recoltări succesive și a intervalului dintre ele;",
        "lanțul de custodie al probelor, de la unitatea medicală la laborator;",
        "modul de calcul al alcoolemiei și eventuala interpretare retroactivă;",
        "consumul de alcool ulterior opririi, dacă acesta există și poate fi probat;",
        "declarațiile date la fața locului și modul în care au fost consemnate;",
        "procesul-verbal de reținere a permisului de conducere;",
        "existența unor afecțiuni medicale sau tratamente care influențează rezultatul;",
        "posibilitatea unei expertize medico-legale de recalculare a alcoolemiei.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "procesul-verbal de reținere a permisului și dovada înlocuitoare;",
        "fișa de testare cu etilotestul, dacă ți-a fost înmânată;",
        "buletinul de analiză toxicologică, dacă l-ai primit;",
        "ordonanța de începere a urmăririi penale sau citația;",
        "declarația dată la Poliție, dacă ai o copie;",
        "actele medicale sau rețetele pentru tratamentele urmate;",
        "datele martorilor care au fost cu tine înainte de oprire.",
      ],
      paragraphsAfterBullets: [
        "Dacă nu ai încă niciun act scris, îmi poți spune ora opririi, valoarea afișată de etilotest și ora recoltării probelor.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Când conducerea sub influența alcoolului este infracțiune",
      paragraphs: [
        "Potrivit art. 336 alin. (1) Cod penal, conducerea pe drumurile publice a unui vehicul pentru care legea prevede obligativitatea deținerii permisului de conducere de către o persoană care are o îmbibație alcoolică de peste 0,80 g/l alcool pur în sânge este infracțiune.",
        "Sub acest prag, fapta rămâne, de regulă, în sfera contravențională, potrivit Codului rutier, cu consecințe privind amenda și suspendarea permisului.",
        "Pragul se raportează la alcoolemia din sânge, nu la valoarea afișată de etilotest. De aceea rezultatul analizei de laborator este proba centrală a dosarului.",
      ],
    },
    {
      h2: "Etilotest, aparat etilometru și probe biologice: ce contează juridic",
      paragraphs: [
        "Testarea preliminară din trafic are rol de indiciu. Stabilirea îmbibației alcoolice se face prin analiza probelor biologice recoltate în unități medicale autorizate.",
        "Din acest motiv, orice neregulă privind momentul recoltării, numărul probelor, conservarea sau transportul lor poate influența valoarea probatorie a buletinului toxicologic.",
        "Verific dacă recoltarea s-a făcut în intervalul prevăzut de procedură și dacă rezultatul poate fi raportat corect la momentul conducerii.",
      ],
    },
    {
      h2: "Alcoolemia la momentul conducerii și calculul retroactiv",
      paragraphs: [
        "Între momentul opririi în trafic și cel al recoltării trece, de regulă, un interval în care organismul continuă să absoarbă sau să elimine alcoolul.",
        "În funcție de faza în care se afla organismul, alcoolemia la momentul conducerii poate fi mai mică decât cea rezultată din analiză. Această diferență se stabilește prin expertiză medico-legală.",
        "Solicitarea expertizei se face motivat și cu date concrete despre cantitatea consumată, momentul consumului, alimentație și greutate corporală.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce se întâmplă cu permisul de conducere",
      paragraphs: [
        "În cazul unui dosar penal pentru alcool la volan, permisul se reține, iar dreptul de a conduce este suspendat pe durata procedurii, în condițiile legii.",
        "Restituirea permisului depinde de soluția din dosar. O soluție de clasare sau de achitare deschide calea redobândirii dreptului de a conduce, în timp ce o condamnare atrage interdicții suplimentare.",
      ],
    },
    {
      h2: "Ce soluții pot exista în dosar",
      bullets: [
        "clasarea, atunci când alcoolemia la momentul conducerii se situează sub pragul penal;",
        "achitarea, atunci când probele nu susțin acuzarea;",
        "renunțarea la urmărirea penală, în condițiile prevăzute de lege;",
        "amânarea aplicării pedepsei, cu termen de supraveghere;",
        "suspendarea sub supraveghere a executării pedepsei;",
        "acordul de recunoaștere a vinovăției, când aduce un rezultat mai bun decât judecata obișnuită.",
      ],
      paragraphsAfterBullets: [
        "Soluția concretă depinde de valoarea alcoolemiei, de antecedente, de existența unui accident și de conduita procesuală.",
      ],
    },
    {
      h2: "Greșeli frecvente după oprirea în trafic",
      bullets: [
        "refuzul recoltării probelor biologice, care este o infracțiune distinctă;",
        "consumul de alcool după oprirea în trafic, fără a putea fi probat corect;",
        "declarațiile detaliate date fără avocat, care fixează o versiune greu de corectat;",
        "pierderea documentelor primite de la Poliție;",
        "ignorarea citației pentru audiere;",
        "conducerea în perioada în care dreptul de a conduce este suspendat.",
      ],
      paragraphs: [
        [
          { text: "Refuzul de a te supune prelevării de mostre biologice este o faptă separată, explicată pe pagina privind " },
          { text: "refuzul prelevării probelor", to: "/servicii/refuz-prelevare-probe-biologice" },
          { text: "." },
        ],
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Cum lucrez într-un astfel de dosar",
      bullets: [
        "analizez actele existente și stabilesc calitatea ta procesuală;",
        "cer accesul la dosar și studiez probele administrate;",
        "verific tehnic buletinul toxicologic și procedura de recoltare;",
        "formulez cereri de probatoriu, inclusiv expertiza de recalculare a alcoolemiei;",
        "te asist la audieri și pregătesc declarația împreună cu tine;",
        "susțin apărarea în fața procurorului și, dacă este cazul, în instanță.",
      ],
    },
  ],
  faq: [
    {
      q: "De la ce valoare alcoolul la volan devine infracțiune?",
      a: "Peste 0,80 g/l alcool pur în sânge, potrivit art. 336 alin. (1) Cod penal. Sub acest prag fapta este, de regulă, contravenție potrivit Codului rutier.",
    },
    {
      q: "Etilotestul din trafic este suficient pentru condamnare?",
      a: "Nu. Valoarea din aerul expirat are rol de indiciu, iar îmbibația alcoolică se stabilește prin analiza probelor biologice recoltate în unitate medicală autorizată.",
    },
    {
      q: "Pot contesta buletinul de analiză toxicologică?",
      a: "Da. Se pot invoca neregulile privind recoltarea, conservarea sau transportul probelor și se poate cere expertiză medico-legală pentru stabilirea alcoolemiei la momentul conducerii.",
    },
    {
      q: "Ce înseamnă calculul retroactiv al alcoolemiei?",
      a: "Este o expertiză prin care se estimează valoarea alcoolemiei la ora conducerii, pornind de la rezultatul analizei și de la datele privind consumul, ora acestuia și caracteristicile persoanei.",
    },
    {
      q: "Îmi pierd definitiv permisul?",
      a: "Permisul se reține pe durata procedurii. Pierderea dreptului de a conduce pe termen mai lung depinde de soluția pronunțată în dosarul penal.",
    },
    {
      q: "Pot scăpa cu o pedeapsă neprivativă de libertate?",
      a: "În funcție de alcoolemie, antecedente și circumstanțe, sunt posibile renunțarea la urmărirea penală, amânarea aplicării pedepsei sau suspendarea sub supraveghere.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 336 privind conducerea sub influența alcoolului sau a altor substanțe.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, dispozițiile privind probele și expertizele.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_IR,
};

export const droguriLaVolanRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/droguri-la-volan",
  altPath: "/en/services/drug-driving",
  roPath: "/servicii/droguri-la-volan",
  title: "Avocat droguri la volan București | Bogdan Lamatic",
  h1: "Avocat droguri la volan în București",
  description:
    "Ai fost testat pozitiv cu drug test în trafic? Analizez proba toxicologică, starea de influență și încadrarea pe art. 336 alin. (2) Cod penal.",
  keywords:
    "avocat droguri la volan bucuresti, conducere sub influenta drogurilor, drug test pozitiv, avocat art 336 droguri",
  breadcrumbLabel: "Droguri la volan",
  serviceName: "Avocat droguri la volan București - Bogdan Lamatic",
  urgency: [
    "Ai fost testat cu un drug test în trafic și rezultatul a ieșit pozitiv?",
    "Testul rapid nu stabilește singur vinovăția. Contează confirmarea toxicologică și dovada stării de influență.",
    "Verific procedura de testare, recoltarea probelor și modul în care a fost interpretat rezultatul.",
  ],
  bio: [
    `${BIO_INTRO} Asist șoferi cercetați pentru conducerea sub influența substanțelor psihoactive, inclusiv în situațiile în care rezultatul provine de la un tratament medicamentos.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Drug testul din trafic a ieșit pozitiv",
          paragraphs: [
            "Testul rapid din salivă indică prezența unei substanțe, nu cantitatea și nici starea de influență. Rezultatul trebuie confirmat prin analiza probelor biologice.",
            "Verific tipul aparatului, modul de prelevare a probei de salivă și consemnarea rezultatului.",
          ],
        },
        {
          h3: "Ai fost dus la spital pentru recoltarea probelor de sânge",
          paragraphs: [
            "Analiza de laborator arată substanța și metaboliții acesteia. Prezența metaboliților poate indica un consum anterior, nu neapărat o influență la momentul conducerii.",
            "Această distincție este esențială și se susține cu expertiză toxicologică.",
          ],
        },
        {
          h3: "Ai luat medicamente pe bază de rețetă",
          paragraphs: [
            "Unele medicamente conțin substanțe psihoactive care pot genera un rezultat pozitiv. Contează dacă ai fost avertizat asupra efectului asupra conducerii.",
            "Documentele medicale și rețetele devin probe importante în dosar.",
          ],
        },
        {
          h3: "Ai fost cercetat și pentru deținere de droguri",
          paragraphs: [
            [
              { text: "Dacă asupra ta s-au găsit substanțe, dosarul poate include și o acuzație de " },
              { text: "deținere pentru consum propriu", to: "/servicii/detinere-droguri-consum-propriu" },
              { text: ", cu o apărare distinctă." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat într-un dosar de droguri la volan",
      paragraphs: ["Verific:"],
      bullets: [
        "modul în care s-a efectuat testarea preliminară în trafic;",
        "consemnarea rezultatului testului rapid în actele întocmite;",
        "intervalul dintre oprirea în trafic și recoltarea probelor biologice;",
        "buletinul de analiză toxicologică și substanțele identificate;",
        "diferența dintre substanța activă și metaboliți inactivi;",
        "existența unor semne clinice de influență constatate de medic;",
        "fișa de examinare clinică întocmită la unitatea medicală;",
        "lanțul de custodie al probelor;",
        "tratamentele medicamentoase urmate și prescripțiile aferente;",
        "declarațiile date la fața locului;",
        "eventuala asociere cu alte fapte rutiere;",
        "oportunitatea unei expertize toxicologice.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "procesul-verbal de reținere a permisului;",
        "documentul care atestă rezultatul testului rapid;",
        "fișa de examinare clinică de la unitatea medicală;",
        "buletinul de analiză toxicologică;",
        "rețetele și documentele medicale pentru tratamentele urmate;",
        "citația sau ordonanța primită;",
        "declarația dată, dacă ai o copie.",
      ],
      paragraphsAfterBullets: [
        "Dacă aștepți încă rezultatul de laborator, îmi poți spune ce substanță a fost indicată de testul rapid și când a avut loc recoltarea.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce prevede legea pentru conducerea sub influența drogurilor",
      paragraphs: [
        "Art. 336 alin. (2) Cod penal sancționează conducerea pe drumurile publice a unui vehicul pentru care legea prevede obligativitatea deținerii permisului de către o persoană aflată sub influența unor substanțe psihoactive.",
        "Spre deosebire de alcool, legea nu prevede un prag valoric. Acuzarea trebuie să dovedească starea de influență la momentul conducerii, nu doar prezența substanței în organism.",
      ],
    },
    {
      h2: "Test rapid, confirmare toxicologică și metaboliți",
      paragraphs: [
        "Testul din salivă este o testare preliminară, cu rol de indiciu. Confirmarea se face prin analiza probelor biologice recoltate în unitate medicală autorizată.",
        "Analiza poate identifica substanța activă sau doar metaboliți, adică urme ale unui consum anterior. Prezența metaboliților, în lipsa altor elemente, nu dovedește automat starea de influență la volan.",
        "De aceea, examinarea clinică efectuată de medic și consemnarea semnelor concrete au o importanță deosebită.",
      ],
    },
    {
      h2: "Medicamentele cu substanțe psihoactive",
      paragraphs: [
        "Anumite tratamente pentru durere, anxietate sau tulburări de somn conțin substanțe care pot apărea în analize.",
        "În aceste situații se verifică dacă tratamentul era prescris, dacă a fost respectată doza recomandată și dacă pacientul a fost informat cu privire la efectele asupra capacității de a conduce.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce se întâmplă cu permisul și cu dosarul",
      paragraphs: [
        "Permisul se reține, iar dreptul de a conduce se suspendă pe durata procedurii, în condițiile legii.",
        "Dosarul este instrumentat, de regulă, de organele de urmărire penală competente, iar soluția depinde de rezultatul analizelor și de restul probelor.",
        [
          { text: "Dacă ai fost chemat să dai o declarație, pregătirea " },
          { text: "audierii la Poliție sau Parchet", to: "/servicii/audiere-politie-parchet" },
          { text: " este primul pas util." },
        ],
      ],
    },
    {
      h2: "Greșeli frecvente în dosarele de droguri la volan",
      bullets: [
        "recunoașterea unui consum recent, fără a cunoaște rezultatul analizelor;",
        "refuzul recoltării probelor biologice, care atrage o acuzație separată;",
        "neprezentarea documentelor medicale pentru tratamentele urmate;",
        "acceptarea necritică a concluziei că orice rezultat pozitiv înseamnă vinovăție;",
        "lipsa unei cereri de expertiză toxicologică;",
        "conducerea în perioada suspendării dreptului de a conduce.",
      ],
    },
    {
      h2: "Cum construiesc apărarea",
      bullets: [
        "analizez actele și stabilesc ce anume susține acuzarea;",
        "verific dacă există dovada stării de influență, nu doar a prezenței substanței;",
        "contest rezultatele obținute cu încălcarea procedurii;",
        "solicit expertiză toxicologică atunci când datele o justifică;",
        "valorific documentele medicale și tratamentele prescrise;",
        "te asist la audieri și susțin apărarea în fața instanței.",
      ],
    },
  ],
  faq: [
    {
      q: "Un drug test pozitiv înseamnă automat dosar penal cu condamnare?",
      a: "Nu. Testul rapid este o testare preliminară. Acuzarea trebuie să dovedească, prin analize și examinare clinică, starea de influență la momentul conducerii.",
    },
    {
      q: "Ce înseamnă stare de influență?",
      a: "Este starea în care capacitatea de a conduce este afectată de substanța consumată. Se stabilește prin analiza toxicologică coroborată cu examinarea clinică și cu împrejurările concrete.",
    },
    {
      q: "Dacă am consumat cu câteva zile înainte, mai răspund penal?",
      a: "Prezența unor metaboliți poate indica un consum anterior. Fără dovada influenței la momentul conducerii, această situație poate fi combătută prin expertiză.",
    },
    {
      q: "Medicamentele prescrise mă pot pune într-un dosar penal?",
      a: "Este posibil, dacă medicamentul conține substanțe psihoactive. Rețeta, indicațiile medicului și modul de administrare sunt esențiale pentru apărare.",
    },
    {
      q: "Ce se întâmplă dacă refuz testarea?",
      a: "Refuzul prelevării de mostre biologice este o infracțiune distinctă, prevăzută de art. 337 Cod penal, indiferent de rezultatul pe care l-ar fi avut analiza.",
    },
    {
      q: "Pot obține o soluție fără pedeapsă cu închisoarea?",
      a: "Da, în funcție de probe și de circumstanțe sunt posibile clasarea, renunțarea la urmărirea penală, amânarea aplicării pedepsei sau suspendarea sub supraveghere.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 336 privind conducerea sub influența substanțelor psihoactive.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, dispozițiile privind probele, expertizele și constatările.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_IR,
};

export const parasireaLoculuiAccidentuluiRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/parasirea-locului-accidentului",
  altPath: "/en/services/leaving-the-accident-scene",
  roPath: "/servicii/parasirea-locului-accidentului",
  title: "Avocat părăsirea locului accidentului | Bogdan Lamatic",
  h1: "Avocat pentru părăsirea locului accidentului în București",
  description:
    "Dosar de părăsire a locului accidentului? Analizez dacă fapta intră în art. 338 Cod penal, excepțiile legale și lipsa intenției. 18+ ani experiență.",
  keywords:
    "avocat parasirea locului accidentului, dosar parasire loc accident, art 338 cod penal, avocat penal rutier bucuresti",
  breadcrumbLabel: "Părăsirea locului accidentului",
  serviceName: "Avocat părăsirea locului accidentului București - Bogdan Lamatic",
  urgency: [
    "Ai plecat de la locul unui eveniment rutier și acum ești cercetat penal?",
    "Nu orice plecare de la fața locului înseamnă infracțiune. Contează dacă a existat un accident în sensul legii și dacă ai știut de producerea lui.",
    "Analizez situația concretă și stabilim împreună ce poate fi dovedit în apărare.",
  ],
  bio: [
    `${BIO_INTRO} Asist șoferi cercetați pentru părăsirea locului accidentului, inclusiv în situațiile în care contactul a fost minor sau nu a fost perceput.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Nu ai observat impactul",
          paragraphs: [
            "În parcări sau la manevre lente, atingerile ușoare pot trece neobservate. Fără reprezentarea producerii accidentului, nu se poate reține intenția cerută de lege.",
            "Verific imaginile, avariile și poziția vehiculelor, pentru a arăta că nu ai putut percepe evenimentul.",
          ],
        },
        {
          h3: "Ai plecat pentru a transporta o persoană rănită",
          paragraphs: [
            "Legea prevede situații în care fapta nu constituie infracțiune, printre care transportul răniților la spital urmat de revenirea imediată la locul accidentului.",
            "Documentele medicale și ora prezentării la spital devin probe esențiale.",
          ],
        },
        {
          h3: "Ai revenit ulterior sau te-ai prezentat la Poliție",
          paragraphs: [
            "Prezentarea voluntară la organele de poliție și conduita ulterioară contează în evaluarea situației și în individualizarea unei eventuale pedepse.",
          ],
        },
        {
          h3: "Ai plecat pentru că erai speriat sau consumaseși alcool",
          paragraphs: [
            [
              { text: "În aceste cazuri dosarul poate cuprinde mai multe acuzații, iar apărarea se corelează cu cea din dosarul de " },
              { text: "alcool la volan", to: "/servicii/alcool-la-volan" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat în acest tip de dosar",
      paragraphs: ["Verific:"],
      bullets: [
        "dacă evenimentul îndeplinește condițiile unui accident de circulație în sensul legii;",
        "dacă au rezultat victime sau doar pagube materiale;",
        "dacă ai avut reprezentarea producerii impactului;",
        "existența înregistrărilor video din trafic, din parcare sau de la camera de bord;",
        "avariile celor două vehicule și compatibilitatea lor;",
        "declarațiile martorilor și ale celeilalte părți;",
        "momentul și modul în care ai fost identificat;",
        "dacă te-ai prezentat ulterior la Poliție;",
        "dacă se aplică una dintre situațiile în care fapta nu constituie infracțiune;",
        "eventualele acuzații conexe reținute în același dosar;",
        "posibilitatea acoperirii pagubei și efectul acesteia asupra laturii civile;",
        "oportunitatea unei expertize tehnice auto.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "citația sau ordonanța primită;",
        "procesul-verbal întocmit de Poliție;",
        "fotografii cu avariile mașinii tale;",
        "înregistrările de la camera de bord sau de la camerele din zonă;",
        "actele mașinii și polița RCA;",
        "documentele medicale, dacă ai transportat o persoană rănită;",
        "datele martorilor.",
      ],
      paragraphsAfterBullets: [
        "Dacă nu ai niciun act, îmi poți descrie locul, ora și felul în care s-a produs contactul.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce prevede art. 338 Cod penal",
      paragraphs: [
        "Părăsirea locului accidentului fără încuviințarea organelor de poliție care efectuează cercetarea locului faptei este infracțiune, potrivit art. 338 Cod penal.",
        "Aceeași dispoziție sancționează și modificarea sau ștergerea urmelor accidentului, atunci când se urmărește ascunderea împrejurărilor producerii lui.",
        "Textul are în vedere accidentul din care a rezultat uciderea sau vătămarea integrității corporale ori a sănătății unei persoane.",
      ],
    },
    {
      h2: "Situațiile în care fapta nu constituie infracțiune",
      paragraphs: ["Legea prevede excepții limitate, printre care:"],
      bullets: [
        "accidentul din care au rezultat doar pagube materiale;",
        "conducătorul vehiculului transportă el însuși persoanele rănite la cea mai apropiată unitate sanitară și se întoarce imediat la locul accidentului;",
        "conducătorul, în lipsa altor mijloace de transport, transportă persoana rănită și revine la locul faptei;",
        "situațiile în care conducătorul este el însuși rănit și transportat pentru îngrijiri medicale.",
      ],
      paragraphsAfterBullets: [
        "Aceste situații se interpretează strict și trebuie dovedite cu documente și martori.",
      ],
    },
    {
      h2: "Lipsa intenției și impactul neperceput",
      paragraphs: [
        "Infracțiunea presupune intenție. Dacă șoferul nu a avut reprezentarea producerii accidentului, elementul subiectiv nu este întrunit.",
        "Această apărare se susține cu date obiective: viteza redusă, tipul avariei, zgomotul de fond, poziția vehiculelor, vizibilitatea din interiorul mașinii.",
        "În aceste situații, expertiza tehnică auto poate stabili dacă impactul putea fi perceput de conducătorul auto.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Cumulul cu alte fapte rutiere",
      paragraphs: [
        [
          { text: "Părăsirea locului accidentului apare frecvent alături de alte acuzații: vătămare corporală din culpă, ucidere din culpă sau " },
          { text: "conducerea fără permis", to: "/servicii/conducere-fara-permis" },
          { text: "." },
        ],
        "Apărarea trebuie construită unitar, pentru că argumentele dintr-un capăt de acuzare pot influența direct celelalte acuzații din același dosar.",
      ],
    },
    {
      h2: "Latura civilă și relația cu asigurătorul",
      paragraphs: [
        "Persoana vătămată poate formula pretenții civile în procesul penal. Acoperirea prejudiciului sau încheierea unei înțelegeri poate influența soluția privind latura civilă și individualizarea pedepsei.",
        "Verific și modul în care intervine asigurătorul RCA, precum și limitele acoperirii, pentru ca răspunderea ta patrimonială să fie corect stabilită.",
      ],
    },
    {
      h2: "Greșeli frecvente",
      bullets: [
        "repararea mașinii înainte de a fi fotografiată și expertizată;",
        "declarațiile contradictorii date la momente diferite;",
        "încercarea de a ascunde avariile sau urmele accidentului;",
        "ignorarea citației și lipsa de la audiere;",
        "discuțiile directe cu cealaltă parte, fără consultarea unui avocat;",
        "renunțarea la o expertiză tehnică atunci când percepția impactului este contestabilă.",
      ],
    },
  ],
  faq: [
    {
      q: "Dacă au rezultat doar pagube materiale, este infracțiune?",
      a: "Nu. Textul are în vedere accidentele din care a rezultat vătămarea sau decesul unei persoane. Pentru pagube materiale se aplică regulile din Codul rutier.",
    },
    {
      q: "Am plecat pentru că nu am simțit impactul. Ce fac?",
      a: "Lipsa reprezentării producerii accidentului înlătură intenția. Această apărare se dovedește cu imagini, avarii, martori și, dacă este cazul, cu expertiză tehnică auto.",
    },
    {
      q: "Am dus victima la spital și nu m-am întors. Mai este excepție?",
      a: "Legea cere revenirea imediată la locul accidentului. Dacă nu ai revenit, se analizează motivele concrete, inclusiv starea ta medicală.",
    },
    {
      q: "M-am prezentat singur la Poliție a doua zi. Contează?",
      a: "Da. Prezentarea voluntară nu înlătură automat răspunderea, dar este un element important în evaluarea conduitei și în individualizarea pedepsei.",
    },
    {
      q: "Ce se întâmplă cu permisul de conducere?",
      a: "Permisul poate fi reținut, iar dreptul de a conduce suspendat pe durata procedurii. Situația finală depinde de soluția din dosarul penal.",
    },
    {
      q: "Împăcarea cu partea vătămată rezolvă dosarul?",
      a: "Pentru părăsirea locului accidentului, urmărirea penală nu depinde de plângerea prealabilă. O înțelegere poate rezolva latura civilă și poate influența individualizarea pedepsei.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 338 privind părăsirea locului accidentului.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, dispozițiile privind probele și expertizele.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_IR,
};

export const refuzPrelevareProbeRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/refuz-prelevare-probe-biologice",
  altPath: "/en/services/refusal-to-provide-biological-samples",
  roPath: "/servicii/refuz-prelevare-probe-biologice",
  title: "Avocat refuz prelevare probe biologice | Bogdan Lamatic",
  h1: "Avocat pentru refuzul prelevării de probe biologice",
  description:
    "Ești cercetat pentru refuz probe biologice, art. 337 Cod penal? Verific legalitatea solicitării, informarea corectă și imposibilitatea medicală de recoltare.",
  keywords:
    "avocat refuz prelevare probe, refuz probe biologice, art 337 cod penal, avocat refuz recoltare sange",
  breadcrumbLabel: "Refuz prelevare probe",
  serviceName: "Avocat refuz prelevare probe biologice București - Bogdan Lamatic",
  urgency: [
    "Ai fost oprit în trafic și ești acuzat că ai refuzat recoltarea probelor biologice?",
    "Refuzul este o infracțiune distinctă, chiar dacă alcoolemia ar fi ieșit sub pragul penal.",
    "Verific dacă solicitarea a fost legală, dacă ai fost informat corect și dacă a existat o imposibilitate reală de recoltare.",
  ],
  bio: [
    `${BIO_INTRO} Asist șoferi cercetați pentru refuzul sau sustragerea de la prelevarea de mostre biologice, inclusiv în situațiile în care recoltarea nu a fost posibilă din motive medicale.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Ai spus că nu vrei să mergi la spital",
          paragraphs: [
            "Se verifică dacă ți s-a explicat clar consecința refuzului și dacă solicitarea a fost făcută de un agent competent, în condițiile legii.",
            "Contează și modul în care refuzul a fost consemnat în actele întocmite.",
          ],
        },
        {
          h3: "Nu s-a putut recolta sânge din motive medicale",
          paragraphs: [
            "Dificultatea recoltării, o afecțiune sau o stare medicală specială nu înseamnă refuz. Fișa medicală și declarația personalului medical devin probe esențiale.",
          ],
        },
        {
          h3: "Ai plecat de la spital înainte de recoltare",
          paragraphs: [
            "Se analizează motivul plecării, timpul de așteptare și dacă ai fost informat că părăsirea unității este considerată sustragere de la prelevare.",
          ],
        },
        {
          h3: "Ai fost oprit după un eveniment rutier",
          paragraphs: [
            [
              { text: "Când refuzul apare într-un dosar în care există și victime, acuzațiile se cumulează, iar apărarea se corelează cu cea din dosarul de " },
              { text: "accident rutier cu victime", to: "/servicii/accident-rutier-cu-victime" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat în dosarele de refuz",
      paragraphs: ["Verific:"],
      bullets: [
        "cine a formulat solicitarea de prelevare și în ce condiții;",
        "dacă ai fost informat asupra consecințelor refuzului;",
        "modul în care a fost consemnat refuzul în procesul-verbal;",
        "dacă exista o testare preliminară care justifica solicitarea;",
        "starea ta medicală la momentul solicitării;",
        "fișa de examinare clinică și mențiunile personalului medical;",
        "timpul petrecut în unitatea sanitară și motivele plecării;",
        "dacă ți s-a oferit posibilitatea unei noi recoltări;",
        "existența unei bariere de comunicare sau de limbă;",
        "înregistrările video din trafic sau din unitatea medicală;",
        "declarațiile martorilor și ale agenților;",
        "eventualele acuzații conexe din același dosar.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "procesul-verbal în care este consemnat refuzul;",
        "dovada reținerii permisului de conducere;",
        "fișa de examinare clinică sau documentele de la unitatea medicală;",
        "actele medicale privind afecțiunile de care suferi;",
        "citația sau ordonanța primită;",
        "declarația dată, dacă ai o copie;",
        "datele martorilor prezenți la momentul solicitării.",
      ],
      paragraphsAfterBullets: [
        "Dacă nu ai niciun document, îmi poți spune ce ți s-a cerut, ce ai răspuns și ce s-a întâmplat la unitatea medicală.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce prevede art. 337 Cod penal",
      paragraphs: [
        "Refuzul, împotrivirea ori sustragerea conducătorului unui vehicul de la prelevarea de mostre biologice necesare stabilirii alcoolemiei ori a prezenței unor substanțe psihoactive este infracțiune, potrivit art. 337 Cod penal.",
        "Fapta este distinctă de conducerea sub influența alcoolului sau a drogurilor. Ea se poate reține chiar dacă analiza, în cazul în care ar fi fost efectuată, ar fi indicat o valoare sub pragul penal.",
      ],
    },
    {
      h2: "Ce înseamnă refuz, împotrivire și sustragere",
      paragraphs: [
        "Refuzul presupune o manifestare clară prin care conducătorul auto respinge prelevarea, după ce i s-a solicitat în mod legal.",
        "Împotrivirea presupune o opoziție activă la efectuarea recoltării, iar sustragerea constă în conduita prin care persoana se plasează în afara procedurii, de exemplu prin părăsirea unității medicale.",
        "Simpla ezitare, cererea unor lămuriri sau o imposibilitate obiectivă de recoltare nu au aceeași semnificație juridică.",
      ],
    },
    {
      h2: "Legalitatea solicitării și informarea corectă",
      paragraphs: [
        "Solicitarea trebuie să vină de la un agent competent și să se încadreze în situațiile prevăzute de lege.",
        "Persoana trebuie informată cu privire la scopul prelevării și la consecințele refuzului. Lipsa acestei informări poate fi invocată în apărare.",
        "Verific și dacă procesul-verbal reflectă real ceea ce s-a discutat la fața locului sau la spital.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Imposibilitatea medicală de recoltare",
      paragraphs: [
        "Nu orice recoltare nereușită înseamnă refuz. Există situații medicale în care prelevarea nu poate fi efectuată sau este contraindicată.",
        "Acestea trebuie consemnate de personalul medical. Documentele medicale, istoricul afecțiunilor și declarațiile cadrelor medicale susțin această apărare.",
      ],
    },
    {
      h2: "Relația cu dosarul de alcool sau droguri la volan",
      paragraphs: [
        [
          { text: "Refuzul poate fi cercetat singur sau împreună cu acuzația de " },
          { text: "conducere sub influența alcoolului", to: "/servicii/alcool-la-volan" },
          { text: " ori de " },
          { text: "conducere sub influența drogurilor", to: "/servicii/droguri-la-volan" },
          { text: "." },
        ],
        "Când există și alte acuzații, strategia trebuie construită unitar, pentru că argumentele se influențează reciproc.",
      ],
    },
    {
      h2: "Greșeli frecvente",
      bullets: [
        "semnarea fără citire a procesului-verbal în care se consemnează refuzul;",
        "plecarea din unitatea medicală fără o mențiune scrisă privind motivul;",
        "lipsa documentelor medicale care explică imposibilitatea recoltării;",
        "declarațiile date fără avocat, în care se recunoaște un refuz care nu a existat;",
        "ignorarea citației și a termenelor din dosar;",
        "presupunerea că, în lipsa unei analize, dosarul nu poate avea consecințe.",
      ],
    },
  ],
  faq: [
    {
      q: "Dacă alcoolemia ar fi fost sub 0,80 g/l, mai răspund pentru refuz?",
      a: "Da. Refuzul prelevării este o infracțiune distinctă, prevăzută de art. 337 Cod penal, independentă de valoarea pe care ar fi indicat-o analiza.",
    },
    {
      q: "Pot cere să fiu testat doar cu etilotestul?",
      a: "Testarea preliminară nu înlocuiește prelevarea de mostre biologice atunci când aceasta este solicitată în condițiile legii.",
    },
    {
      q: "Nu mi s-a putut recolta sânge. Este refuz?",
      a: "Nu, dacă imposibilitatea este obiectivă și este consemnată medical. Diferența dintre imposibilitate și refuz se dovedește cu documentele unității sanitare.",
    },
    {
      q: "Am cerut să vorbesc întâi cu un avocat. Se consideră refuz?",
      a: "Solicitarea de a consulta un avocat nu echivalează automat cu un refuz. Contează conduita concretă și modul în care a fost consemnată în acte.",
    },
    {
      q: "Ce se întâmplă cu permisul de conducere?",
      a: "Permisul se reține, iar dreptul de a conduce se suspendă pe durata procedurii. Situația finală depinde de soluția pronunțată în dosar.",
    },
    {
      q: "Ce soluții pot exista în acest dosar?",
      a: "În funcție de probe, sunt posibile clasarea, achitarea, renunțarea la urmărirea penală, amânarea aplicării pedepsei sau suspendarea sub supraveghere.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 337 privind refuzul sau sustragerea de la prelevarea de mostre biologice.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, dispozițiile privind probele și constatările.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_IR,
};

export const conducereFaraPermisRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/conducere-fara-permis",
  altPath: "/en/services/driving-without-a-licence",
  roPath: "/servicii/conducere-fara-permis",
  title: "Avocat conducere fără permis București | Bogdan Lamatic",
  h1: "Avocat pentru conducere fără permis în București",
  description:
    "Dosar penal pentru conducere fără permis, art. 335 Cod penal? Analizez situația permisului, categoria vehiculului și soluțiile posibile în dosar.",
  keywords:
    "avocat conducere fara permis, dosar conducere fara permis, art 335 cod penal, permis suspendat dosar penal",
  breadcrumbLabel: "Conducere fără permis",
  serviceName: "Avocat conducere fără permis București - Bogdan Lamatic",
  urgency: [
    "Ai fost oprit în trafic și ți s-a spus că nu aveai dreptul de a conduce?",
    "Situațiile sunt diferite: permis anulat, permis suspendat, categorie necorespunzătoare sau permis eliberat în altă țară.",
    "Fiecare variantă are consecințe juridice proprii și o apărare diferită.",
  ],
  bio: [
    `${BIO_INTRO} Asist șoferi cercetați pentru conducerea unui vehicul fără permis sau în perioada în care dreptul de a conduce era suspendat.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Nu ai obținut niciodată permis de conducere",
          paragraphs: [
            "Este situația tipică prevăzută de art. 335 alin. (1) Cod penal. Apărarea vizează împrejurările concrete, urgența în care ai condus și individualizarea pedepsei.",
          ],
        },
        {
          h3: "Permisul îți era suspendat sau anulat",
          paragraphs: [
            "Contează dacă măsura îți fusese comunicată efectiv și de când producea efecte. Data comunicării este esențială pentru existența faptei.",
          ],
        },
        {
          h3: "Ai condus un vehicul din altă categorie",
          paragraphs: [
            "Conducerea unui vehicul pentru care nu deții categoria corespunzătoare intră tot în sfera art. 335. Verific încadrarea vehiculului și categoria necesară.",
          ],
        },
        {
          h3: "Ai permis eliberat în altă țară",
          paragraphs: [
            "Se analizează dacă permisul este recunoscut în România, dacă era valabil la data faptei și dacă exista obligația preschimbării.",
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat în dosarele de conducere fără permis",
      paragraphs: ["Verific:"],
      bullets: [
        "situația juridică exactă a permisului la data faptei;",
        "dacă suspendarea sau anularea îți fusese comunicată legal;",
        "data de la care măsura producea efecte;",
        "categoria vehiculului condus și categoria deținută;",
        "dacă drumul pe care ai condus era drum public în sensul legii;",
        "dacă vehiculul necesita permis potrivit legii;",
        "existența unei stări de necesitate sau a unei urgențe medicale;",
        "eroarea asupra situației de fapt, atunci când există elemente care o susțin;",
        "modul în care ai fost identificat ca fiind conducătorul auto;",
        "declarațiile date la fața locului;",
        "eventualele acuzații conexe reținute în același dosar;",
        "antecedentele și conduita, pentru individualizarea pedepsei.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "procesul-verbal întocmit de Poliție;",
        "documentul de suspendare sau anulare a permisului;",
        "dovada comunicării acestei măsuri;",
        "permisul de conducere sau copia acestuia, inclusiv cel eliberat în altă țară;",
        "actele vehiculului condus;",
        "citația sau ordonanța primită;",
        "documentele medicale, dacă ai condus într-o situație de urgență.",
      ],
      paragraphsAfterBullets: [
        "Dacă nu ai actele la îndemână, îmi poți spune data opririi și situația în care se afla permisul tău.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce prevede art. 335 Cod penal",
      paragraphs: [
        "Conducerea pe drumurile publice a unui vehicul pentru care legea prevede obligativitatea deținerii permisului de conducere de către o persoană care nu posedă un asemenea permis este infracțiune, potrivit art. 335 alin. (1) Cod penal.",
        "Textul sancționează și conducerea de către o persoană al cărei permis este necorespunzător categoriei vehiculului, precum și conducerea în perioada în care exercitarea dreptului de a conduce a fost suspendată ori permisul a fost retras sau anulat.",
        "Fapta se pedepsește și atunci când vehiculul este încredințat unei persoane care se află într-una dintre aceste situații.",
      ],
    },
    {
      h2: "Permis suspendat: de când produce efecte măsura",
      paragraphs: [
        "Suspendarea dreptului de a conduce produce efecte de la momentul prevăzut de lege, iar comunicarea măsurii este esențială.",
        "Dacă la data opririi în trafic măsura nu îți fusese comunicată sau nu începuse să producă efecte, elementele infracțiunii pot lipsi.",
        "De aceea verific dovezile de comunicare, data poștală și modul în care a fost consemnată primirea documentului.",
      ],
    },
    {
      h2: "Categoria vehiculului și noțiunea de drum public",
      paragraphs: [
        "Nu toate vehiculele necesită permis, iar unele categorii au reguli speciale. Verific încadrarea concretă a vehiculului condus.",
        "În egală măsură, fapta presupune conducerea pe drum public. Manevrele efectuate într-o incintă privată, care nu este deschisă circulației publice, se analizează diferit.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Starea de necesitate și eroarea",
      paragraphs: [
        "Există situații în care conducerea a fost impusă de o urgență reală, de exemplu transportul unei persoane aflate în pericol.",
        "De asemenea, eroarea asupra situației juridice a permisului poate fi relevantă atunci când se bazează pe elemente obiective, nu pe o simplă presupunere.",
        "Aceste apărări se susțin cu documente, martori și date verificabile.",
      ],
    },
    {
      h2: "Cumulul cu alte fapte rutiere",
      paragraphs: [
        [
          { text: "Conducerea fără permis apare frecvent alături de alte acuzații, cum ar fi " },
          { text: "conducerea sub influența alcoolului", to: "/servicii/alcool-la-volan" },
          { text: " sau " },
          { text: "părăsirea locului accidentului", to: "/servicii/parasirea-locului-accidentului" },
          { text: "." },
        ],
        "Atunci când în dosar există mai multe acuzații, strategia trebuie să fie unitară, iar prioritatea este stabilită în funcție de riscul fiecărui capăt de acuzare.",
      ],
    },
    {
      h2: "Ce soluții pot exista în dosar",
      bullets: [
        "clasarea, atunci când nu sunt întrunite elementele infracțiunii;",
        "achitarea, când probele nu susțin acuzarea;",
        "renunțarea la urmărirea penală, în condițiile legii;",
        "amânarea aplicării pedepsei;",
        "suspendarea sub supraveghere a executării pedepsei;",
        "acordul de recunoaștere a vinovăției, atunci când este mai avantajos.",
      ],
      paragraphsAfterBullets: [
        "Rezultatul depinde de situația concretă, de antecedente și de conduita procesuală pe parcursul dosarului.",
      ],
    },
  ],
  faq: [
    {
      q: "Am condus câțiva metri. Este tot infracțiune?",
      a: "Legea nu prevede o distanță minimă. Contează faptul conducerii pe drum public, însă împrejurările concrete pot fi valorificate la individualizarea pedepsei.",
    },
    {
      q: "Nu am știut că îmi era suspendat permisul. Ce fac?",
      a: "Comunicarea măsurii este esențială. Dacă suspendarea nu îți fusese comunicată legal sau nu producea încă efecte, apărarea poate viza chiar existența faptei.",
    },
    {
      q: "Am permis eliberat în altă țară. Este suficient?",
      a: "Depinde de statul emitent, de valabilitate și de regulile privind recunoașterea sau preschimbarea permisului în România.",
    },
    {
      q: "Conducerea într-o parcare privată intră sub incidența legii?",
      a: "Fapta presupune conducerea pe drum public. Statutul juridic al zonei în care ai condus se verifică în concret și poate fi decisiv.",
    },
    {
      q: "Ce risc dacă am împrumutat mașina unei persoane fără permis?",
      a: "Încredințarea unui vehicul unei persoane care nu are dreptul de a conduce este sancționată de art. 335 Cod penal.",
    },
    {
      q: "Pot evita închisoarea?",
      a: "În multe dosare se pot obține soluții neprivative de libertate, în funcție de circumstanțe, antecedente și conduita din timpul procesului.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 335 privind conducerea unui vehicul fără permis de conducere.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, dispozițiile privind urmărirea penală și probele.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_IR,
};

export const accidentRutierCuVictimeRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/accident-rutier-cu-victime",
  altPath: "/en/services/road-accident-with-victims",
  roPath: "/servicii/accident-rutier-cu-victime",
  title: "Avocat accident rutier cu victime | Bogdan Lamatic",
  h1: "Avocat pentru șoferul cercetat penal după un accident rutier cu victime",
  description:
    "Ești șofer cercetat penal după un accident cu victime? Apărare pe vătămare corporală din culpă și ucidere din culpă, culpă, expertiză și pretenții civile.",
  keywords:
    "avocat accident rutier cu victime, sofer cercetat penal accident, vatamare corporala din culpa, ucidere din culpa avocat",
  breadcrumbLabel: "Accident rutier cu victime",
  serviceName: "Avocat accident rutier cu victime București - Bogdan Lamatic",
  urgency: [
    "Ai fost implicat într-un accident cu victime și ai devenit suspect în dosar?",
    "Primele zile decid cum se stabilește culpa: urmele de la fața locului, martorii și expertiza tehnică.",
    "Îți apăr poziția de șofer cercetat penal, atât pe latura penală, cât și pe pretențiile civile.",
  ],
  bio: [
    `${BIO_INTRO} Reprezint șoferi cercetați penal după accidente rutiere soldate cu vătămarea sau decesul unei persoane, de la primele acte de urmărire penală până la soluția finală.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "În ce situație te afli acum?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Alege scenariul care se apropie cel mai mult de situația ta."],
      subsections: [
        {
          h3: "Accidentul tocmai s-a produs",
          paragraphs: [
            "Cercetarea la fața locului fixează majoritatea probelor: urme de frânare, poziția vehiculelor, avarii, martori.",
            "Este momentul în care se pot pierde definitiv date favorabile, dacă nu sunt solicitate imediat.",
          ],
        },
        {
          h3: "Ai fost chemat la audiere ca suspect",
          paragraphs: [
            [
              { text: "Declarația dată acum rămâne la dosar pe tot parcursul procesului. Pregătim împreună " },
              { text: "audierea la Poliție sau Parchet", to: "/servicii/audiere-politie-parchet" },
              { text: "." },
            ],
          ],
        },
        {
          h3: "Victima a decedat sau are leziuni grave",
          paragraphs: [
            "Încadrarea juridică se poate schimba în funcție de concluziile medico-legale privind numărul de zile de îngrijiri medicale sau cauza decesului.",
            "Aceste concluzii pot fi analizate critic și, dacă este cazul, contestate.",
          ],
        },
        {
          h3: "Se discută despre alcool, droguri sau plecarea de la fața locului",
          paragraphs: [
            [
              { text: "În aceste situații apar acuzații suplimentare, iar apărarea se corelează cu cea din dosarul de " },
              { text: "părăsire a locului accidentului", to: "/servicii/parasirea-locului-accidentului" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Sună-mă acum - 031 632 01 83",
    },
    {
      h2: "Ce analizez imediat în dosarul tău",
      paragraphs: ["Verific:"],
      bullets: [
        "procesul-verbal de cercetare la fața locului și planșa foto;",
        "schița accidentului și măsurătorile efectuate;",
        "urmele de frânare, avariile și punctul de impact;",
        "starea tehnică a vehiculelor implicate;",
        "condițiile de drum, vizibilitatea, semnalizarea și starea carosabilului;",
        "declarațiile martorilor și eventualele contradicții;",
        "înregistrările video din trafic sau de la camera de bord;",
        "raportul de constatare tehnico-științifică;",
        "concluziile medico-legale privind leziunile sau cauza decesului;",
        "comportamentul victimei și eventuala culpă concurentă;",
        "existența unor acuzații conexe în același dosar;",
        "situația poliței RCA și modul de intervenție al asigurătorului.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Ce trebuie să-mi trimiți",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Dacă le ai, trimite-mi:"],
      bullets: [
        "citația sau ordonanța prin care ai aflat calitatea ta procesuală;",
        "procesul-verbal întocmit de Poliție;",
        "fotografiile de la locul accidentului;",
        "înregistrarea de la camera de bord, dacă există;",
        "actele mașinii și polița RCA;",
        "documentele medicale primite, dacă ai fost și tu rănit;",
        "datele martorilor pe care i-ai identificat.",
      ],
      paragraphsAfterBullets: [
        "Dacă nu ai încă actele din dosar, îmi poți descrie locul, ora, direcțiile de deplasare și ce s-a constatat la fața locului.",
      ],
      calloutAfterBullets: "Nu ai toate documentele?",
      calloutAfterBulletsCta: "Sună oricum.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite actele pe WhatsApp",
    },
    {
      h2: "Ce acuzații pot fi reținute împotriva șoferului",
      paragraphs: [
        "Când din accident rezultă leziuni, fapta poate fi încadrată ca vătămare corporală din culpă, prevăzută de art. 196 Cod penal. Când a intervenit decesul unei persoane, încadrarea este uciderea din culpă, prevăzută de art. 192 Cod penal.",
        "Ambele texte prevăd forme agravate atunci când accidentul este urmarea nerespectării dispozițiilor legale sau a măsurilor de prevedere pentru exercițiul unei activități.",
        "În același dosar pot apărea și alte acuzații rutiere, iar apărarea trebuie construită pentru întreg ansamblul acestora.",
      ],
    },
    {
      h2: "Cum se stabilește culpa în accidentul rutier",
      paragraphs: [
        "Culpa se stabilește prin raportare la regulile de circulație și la ceea ce un conducător auto diligent putea prevedea și evita în situația concretă.",
        "Se analizează viteza, distanța de vizibilitate, timpul de reacție, posibilitatea de evitare a impactului și conduita celorlalți participanți la trafic.",
        "Un raport de expertiză tehnică auto bine fundamentat poate schimba complet reprezentarea asupra dinamicii accidentului.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Legătura de cauzalitate și culpa concurentă a victimei",
      paragraphs: [
        "Pentru răspunderea penală nu este suficient să existe o abatere de la regulile de circulație. Trebuie dovedită legătura de cauzalitate între acea abatere și urmarea produsă.",
        "În multe accidente, conduita victimei contribuie la producerea evenimentului: traversarea prin loc nepermis, deplasarea pe carosabil pe timp de noapte fără elemente reflectorizante, pătrunderea neregulamentară în intersecție.",
        "Culpa concurentă nu înlătură automat răspunderea, dar poate modifica încadrarea, individualizarea pedepsei și întinderea despăgubirilor.",
      ],
    },
    {
      h2: "Expertiza tehnică auto și expertiza medico-legală",
      paragraphs: [
        "Expertiza tehnică auto stabilește dinamica accidentului, vitezele de deplasare și posibilitatea de evitare a impactului.",
        "Expertiza medico-legală stabilește leziunile, numărul zilelor de îngrijiri medicale și cauza decesului, elemente care determină încadrarea juridică.",
        "Ambele pot fi completate sau contestate, iar cererea trebuie formulată la momentul procesual potrivit, cu obiective clare.",
      ],
    },
    {
      h2: "Pretențiile civile și rolul asigurătorului RCA",
      paragraphs: [
        "Persoana vătămată sau succesorii se pot constitui parte civilă în procesul penal și pot solicita daune materiale și morale.",
        "Asigurătorul RCA este chemat în proces și răspunde în limitele prevăzute de lege și de poliță. Analizez întinderea acoperirii și partea care ar putea rămâne în sarcina ta.",
        "Verific și cuantumul pretențiilor solicitate, pentru că sumele cerute sunt frecvent disproporționate față de prejudiciul dovedit.",
      ],
      cta: "☎ Sună-mă acum - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Împăcarea, retragerea plângerii și efectele lor",
      paragraphs: [
        "În cazul vătămării corporale din culpă, punerea în mișcare a acțiunii penale se face, în anumite situații prevăzute de lege, la plângerea prealabilă a persoanei vătămate, iar retragerea acesteia poate duce la încetarea procesului penal.",
        "În cazul uciderii din culpă, acțiunea penală se exercită din oficiu, iar o înțelegere cu familia victimei privește doar latura civilă și individualizarea pedepsei.",
        "Analizez în fiecare dosar dacă o astfel de soluție este posibilă și în ce condiții este în interesul tău.",
      ],
    },
    {
      h2: "Măsurile preventive care pot fi luate față de șofer",
      paragraphs: [
        [
          { text: "În dosarele grave se pot dispune măsuri preventive, de la control judiciar până la arest. Detaliile privind aceste măsuri sunt explicate pe pagina despre " },
          { text: "măsurile preventive", to: "/servicii/masuri-preventive" },
          { text: "." },
        ],
        "Intervin de la primele ore pentru a susține alegerea celei mai puțin restrictive măsuri și pentru a evita restricțiile care nu sunt justificate de situația concretă.",
      ],
    },
    {
      h2: "Greșeli frecvente ale șoferului cercetat penal",
      bullets: [
        "declarațiile detaliate date imediat după accident, sub șoc, fără avocat;",
        "repararea vehiculului înainte de expertiză;",
        "asumarea vinovăției în discuțiile cu familia victimei sau cu asigurătorul;",
        "acceptarea necritică a concluziilor primului raport tehnic;",
        "lipsa unei cereri de expertiză atunci când dinamica accidentului este discutabilă;",
        "ignorarea laturii civile până la ultimul termen de judecată.",
      ],
    },
  ],
  faq: [
    {
      q: "Sunt automat vinovat pentru că am lovit un pieton?",
      a: "Nu. Trebuie dovedită o abatere de la regulile de circulație și legătura de cauzalitate dintre aceasta și urmarea produsă. Conduita pietonului se analizează în concret.",
    },
    {
      q: "Ce înseamnă culpă concurentă?",
      a: "Este situația în care și victima a contribuit la producerea accidentului. Ea poate influența încadrarea, pedeapsa și întinderea despăgubirilor.",
    },
    {
      q: "Cine plătește daunele către victimă?",
      a: "În limitele poliței, despăgubirile sunt suportate de asigurătorul RCA. Peste aceste limite sau în situațiile excluse de lege, răspunderea poate reveni conducătorului auto.",
    },
    {
      q: "Pot cere o nouă expertiză tehnică?",
      a: "Da. Se poate solicita expertiză sau suplimentarea obiectivelor, cu argumente concrete privind neclaritățile din raportul existent.",
    },
    {
      q: "Dacă victima își retrage plângerea, se închide dosarul?",
      a: "În cazul vătămării corporale din culpă, retragerea plângerii prealabile poate duce la încetarea procesului, în situațiile prevăzute de lege. La uciderea din culpă, acțiunea penală se exercită din oficiu.",
    },
    {
      q: "Îmi pierd permisul până la finalul procesului?",
      a: "Permisul poate fi reținut, iar dreptul de a conduce suspendat pe durata procedurii. Situația finală depinde de soluția pronunțată în dosar.",
    },
    {
      q: "Pot evita o pedeapsă cu executare?",
      a: "În multe dosare de culpă se obțin soluții neprivative de libertate. Rezultatul depinde de gravitatea urmării, de circumstanțe și de conduita din timpul procesului.",
    },
  ],
  resources: [
    {
      text: "Portal Legislativ - Codul penal, art. 192 privind uciderea din culpă.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul penal, art. 196 privind vătămarea corporală din culpă.",
      href: CP,
      linkLabel: "Legislație",
    },
    {
      text: "Portal Legislativ - Codul de procedură penală, dispozițiile privind expertizele și acțiunea civilă.",
      href: CPP,
      linkLabel: "Legislație",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Trimite actele pe WhatsApp",
  parent: PARENT_IR,
};
