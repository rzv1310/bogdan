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
      h2: "Când nu există infracțiune",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Lipsa pagubei sau a vătămării efective face ca fapta să nu întrunească elementele infracțiunii, oricât de gravă ar părea omisiunea din perspectivă disciplinară.",
        "De asemenea, nu se poate reține neglijența atunci când obligația nu îți revenea, când îndeplinirea ei era imposibilă din cauza lipsei de resurse ori de personal, sau când urmarea s-a produs din cauza conduitei altei persoane. În aceste situații, discuția rămâne una de răspundere disciplinară sau administrativă.",
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
      q: "Se poate reține neglijența fără prejudiciu?",
      a: "Nu. Legea cere producerea unei pagube ori a unei vătămări a drepturilor sau intereselor legitime ale unei persoane.",
    },
    {
      q: "Ce se întâmplă dacă nu am avut personal suficient?",
      a: "Lipsa resurselor este un element de apărare important, mai ales dacă ai solicitat în scris suplimentarea lor.",
    },
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
            "Verific relația de rudenie sau afacere invocată, raporturile comerciale din ultimii ani și excepțiile prevăzute de lege.",
          ],
        },
      ],
      ctaAfterSubsections: "Vreau o evaluare a situației mele",
    },
    {
      h2: "Ce analizez imediat în dosar",
      bullets: [
        "Actul concret îndeplinit în exercitarea atribuțiilor de serviciu.",
        "Existența unui folos patrimonial pentru tine, pentru rude sau pentru persoane cu care ai avut raporturi de afaceri.",
        "Gradul de rudenie și perioada raporturilor comerciale invocate.",
        "Dacă situația se încadrează în excepțiile prevăzute expres de lege.",
        "Relația dintre procedura administrativă de integritate și dosarul penal.",
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
      h2: "Când fapta nu constituie infracțiune",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Nu orice suprapunere de interese înseamnă infracțiune. Trebuie dovedite un act îndeplinit efectiv în exercitarea atribuțiilor de serviciu, un folos patrimonial concret și apartenența beneficiarului la cercul de persoane prevăzut de lege.",
        "Rămân în afara textului penal situațiile de abținere de la vot sau de la semnare, actele pregătitoare care nu produc efecte, foloasele nepatrimoniale, precum și emiterea sau adoptarea actelor normative, exceptată expres de lege.",
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
        "Analizez gradul de rudenie și durata raporturilor comerciale invocate.",
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
      q: "Ce persoane intră în cercul prevăzut de lege?",
      a: "Soțul, rudele și afinii până la gradul II inclusiv, potrivit textului de incriminare.",
    },
    {
      q: "Abținerea de la vot mă protejează?",
      a: "Da, în principiu. Dacă nu ai îndeplinit actul din care rezultă folosul, elementul material al infracțiunii lipsește.",
    },
    {
      q: "Se aplică textul și la actele normative?",
      a: "Nu. Legea exceptează expres emiterea, aprobarea sau adoptarea actelor normative.",
    },
    {
      q: "Contractul semnat poate fi anulat?",
      a: "Da. Actele încheiate cu încălcarea regulilor privind conflictul de interese pot fi lovite de nulitate.",
    },
    {
      q: "Pot contesta raportul de evaluare?",
      a: "Da, în contencios administrativ, în termenul prevăzut de lege de la comunicare. Termenul este scurt, așa că trebuie acționat rapid.",
    },
  ],
  resources: [
    { text: "Codul penal - art. 301 privind folosirea funcției pentru favorizarea unor persoane.", href: CP, linkLabel: "Legislație" },
    { text: "Legea 78/2000 privind faptele de corupție și faptele asimilate acestora.", href: L78, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR,
};
