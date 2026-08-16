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
      paragraphs: [
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
    "- Citește cu atenție documentele înainte de semnare.",
    "- Nu încerca să împiedici fizic efectuarea percheziției.",
    "- Contactează imediat un avocat!",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane fizice și reprezentanți ai companiilor atunci când are loc o percheziție la domiciliu sau la sediul unei firme.`,
  ],
  sections: [
    {
      h2: "Percheziția are loc chiar acum?",
      paragraphs: [
        "Dacă este solicitat avocatul, începerea percheziției se amână până la sosirea acestuia, însă nu mai mult de 2 ore, cu excepțiile prevăzute de lege pentru situații urgente sau atunci când avocatul nu poate fi contactat.",
      ],
      callout: "Ai dreptul să contactezi un avocat !",
      calloutClassName: "font-semibold bg-white",
      cardClassName: "bg-[#faf0e6]",
      cta: "Sună-mă acum",
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
      paragraphs: [
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
      paragraphs: [
        "Într-o anchetă DNA, primele acte la care participă persoana cercetată pot include audierea, percheziția, ridicarea de înscrisuri sau bunuri și, în anumite situații, măsuri preventive ori asigurătorii.",
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
        "Ofer consultanță juridică imediată, în raport cu informațiile disponibile.",
        "Te asist la audieri și pregătesc împreună cu tine poziția procesuală.",
        "Analizez situația procesuală și documentele la care apărarea are acces.",
        "Verific legalitatea măsurii și modul în care sunt consemnate declarațiile.",
        "Pregătesc apărarea pentru eventuala propunere de arestare preventivă, control judiciar sau arest la domiciliu.",
        "Comunic cu familia, în limitele mandatului și ale confidențialității.",
      ],
      paragraphs: [
        "Un aspect important este anticiparea pasului următor. Dacă există riscul unei propuneri de arestare preventivă, apărarea trebuie pregătită înainte de termenul respectiv, nu după pronunțarea soluției.",
      ],
      cta: "A fost dispusă reținerea - Sună-mă acum",
    },
    {
      h2: "Ce îmi spui când mă contactezi pentru o reținere",
      paragraphs: [
        "Dacă persoana reținută este un membru al familiei sau o persoană apropiată, mă poți contacta și tu. Spune-mi:",
      ],
      bullets: [
        "numele persoanei;",
        "unde se află;",
        "la ce secție de Poliție, Parchet sau structură a fost dusă;",
        "când a avut loc reținerea;",
        "ce informații ai primit până acum;",
        "dacă știi când urmează audierea sau prezentarea în fața judecătorului.",
      ],
      callout: "Nu este necesar să ai toate documentele pentru a mă contacta.",
    },
    {
      h2: "Ce drepturi ai dacă ești reținut 24 de ore?",
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
            [
              { text: "ordonanța prin care a fost dispusă reținerea;", bold: false },
              { text: "motivele concrete invocate;", bold: false },
              { text: "condițiile legale pentru luarea măsurii;", bold: false },
              { text: "ora la care reținerea a început;", bold: false },
              { text: "timpul rămas până la expirarea măsurii;", bold: false },
              { text: "actele și informațiile disponibile în acel moment.", bold: false },
            ],
            "Pentru că reținerea poate dura maximum 24 de ore, utilitatea practică a plângerii depinde și de cât timp mai este disponibil până la expirarea măsurii.",
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
            [
              { text: "ziua și ora începerii reținerii;", bold: false },
              { text: "ziua și ora încetării reținerii;", bold: false },
              { text: "motivele pentru care măsura a fost dispusă.", bold: false },
            ],
            "Persoana reținută trebuie să primească un exemplar al ordonanței.",
          ],
        },
      ],
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Trimite ordonanța pe WhatsApp",
    },
    {
      h2: "Ce urmează după reținere",
      paragraphs: [
        "După expirarea celor 24 de ore, persoana nu poate fi ținută în continuare în baza aceleiași măsuri de reținere.",
        "În funcție de dosar, poate intra în discuție o altă măsură preventivă. De aceea, strategia de apărare este preferabil să fie analizată înainte de luarea următoarei decizii.",
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
      q: "Cât poate dura reținerea?",
      a: "Reținerea poate fi dispusă pentru cel mult 24 de ore. După expirarea acestui interval, persoana nu poate fi ținută în continuare în baza aceleiași măsuri. Dacă se urmărește o altă măsură preventivă, trebuie respectată procedura prevăzută pentru acea măsură.",
    },
    {
      q: "Cine poate dispune reținerea?",
      a: "Reținerea poate fi dispusă, în cursul urmăririi penale, de organul de cercetare penală sau de procuror, în condițiile prevăzute de Codul de procedură penală.",
    },
    {
      q: "Am dreptul la avocat în timpul reținerii?",
      a: "Da. Suspectul sau inculpatul are dreptul la asistența unui avocat și se poate consulta cu acesta înainte și în cursul audierii, în condițiile legii.",
    },
    {
      q: "Poate familia să contacteze avocatul pentru persoana reținută?",
      a: "Da. Foarte des prima persoană care caută avocatul este un membru al familiei. Este util să știu cine a fost reținut, unde se află, când s-a întâmplat și ce structură instrumentează dosarul.",
    },
    {
      q: "Ce se întâmplă dacă nu reacționez în primele ore?",
      a: "Actele efectuate în acest interval, inclusiv declarațiile, pot avea relevanță în etapele ulterioare, iar apărarea privind următoarea măsură preventivă se pregătește mai bine înainte de termen decât după pronunțarea soluției.",
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
      paragraphs: [
        "Obiectivul apărării poate fi, în funcție de situația concretă: respingerea propunerii, aplicarea controlului judiciar, aplicarea arestului la domiciliu sau o altă soluție permisă de lege.",
      ],
      cta: "Urmează propunerea de arestare - Sună-mă acum",
    },
    {
      h2: "Cât poate dura arestarea preventivă",
      paragraphs: [
        "În cursul urmăririi penale, măsura poate fi dispusă inițial pentru cel mult 30 de zile, iar prelungirile sunt supuse condițiilor și limitelor prevăzute de lege. Durata totală în această fază nu poate depăși 180 de zile.",
        "Regimul aplicabil în camera preliminară și în cursul judecății este distinct și presupune verificări periodice ale măsurii.",
      ],
    },
    {
      h2: "Ești deja arestat preventiv",
      paragraphs: [
        "Faptul că arestarea preventivă a fost dispusă nu înseamnă că analiza apărării s-a încheiat. În funcție de etapa dosarului pot deveni relevante:",
      ],
      bullets: [
        "contestația;",
        "apărarea împotriva prelungirii măsurii;",
        "verificarea periodică a măsurii;",
        "revocarea;",
        "înlocuirea cu o măsură preventivă mai puțin severă.",
      ],
      callout:
        "Codul de procedură penală permite revocarea măsurii atunci când au încetat temeiurile care au determinat-o sau au apărut împrejurări noi și reglementează înlocuirea cu o măsură mai ușoară atunci când condițiile legale sunt îndeplinite.",
      cta: "Măsura a fost deja dispusă - Verifică opțiunile",
    },
    {
      h2: "Termenele pentru contestație",
      paragraphs: [
        "În materia măsurilor preventive există termene procedurale foarte scurte. Pentru contestațiile reglementate de art. 204-206 CPP, termenul este de 48 de ore de la pronunțare sau, după caz, de la comunicare.",
        "Dacă ai primit deja încheierea, spune-mi data și ora pronunțării sau comunicării cât mai exact.",
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
      q: "Cât poate dura arestarea preventivă?",
      a: "În cursul urmăririi penale poate fi dispusă inițial pentru maximum 30 de zile și poate fi prelungită în condițiile legii, fără ca durata totală în această etapă să depășească 180 de zile. Regimul aplicabil în celelalte etape ale procesului penal este distinct.",
    },
    {
      q: "Cine poate dispune arestarea preventivă?",
      a: "Arestarea preventivă este în competența judecătorului sau a instanței, în funcție de etapa procesuală. Procurorul poate formula propunerea, însă nu poate dispune el însuși măsura.",
    },
    {
      q: "Cum se contestă arestarea preventivă?",
      a: "Prin contestație împotriva încheierii prin care a fost luată, prelungită sau menținută măsura, în condițiile art. 204-206 CPP, în termenul de 48 de ore prevăzut de lege.",
    },
    {
      q: "Poate fi înlocuită arestarea preventivă cu o măsură mai ușoară?",
      a: "Da, dacă sunt îndeplinite condițiile prevăzute de art. 242 CPP. Trebuie analizate concret temeiurile măsurii, evoluția cauzei și conduita procesuală. Nicio soluție nu poate fi garantată.",
    },
    {
      q: "Ce pot face dacă urmează prelungirea măsurii?",
      a: "Apărarea poate fi pregătită înainte de termen, prin analiza temeiurilor invocate, a probelor administrate între timp și a eventualelor împrejurări noi relevante.",
    },
  ],
  resources: [
    { text: "Art. 202 CPP - condițiile generale ale măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 223 și urm. CPP - arestarea preventivă.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 204-206 CPP - căile de atac privind măsurile preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 241-242 CPP - încetarea de drept, revocarea și înlocuirea măsurilor.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
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
      h2: "Ce obligații pot fi impuse prin control judiciar",
      paragraphs: [
        "Conținutul controlului judiciar este reglementat de art. 215 CPP. Obligațiile pot privi, în funcție de situație:",
      ],
      bullets: [
        "prezentarea în fața organului judiciar;",
        "prezentarea la organul de poliție desemnat cu supravegherea;",
        "comunicarea schimbării locuinței;",
        "deplasarea în anumite limite teritoriale;",
        "contactul cu anumite persoane;",
        "exercitarea anumitor activități, atunci când o asemenea obligație este stabilită în condițiile legii;",
        "alte obligații permise de lege.",
      ],
      callout: "Obligațiile exacte trebuie verificate în actul prin care măsura a fost dispusă.",
    },
    {
      h2: "Ce analizez în cazul controlului judiciar",
      paragraphs: [
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
      h2: "Controlul judiciar pe cauțiune",
      paragraphs: [
        "Controlul judiciar pe cauțiune este reglementat distinct de Codul de procedură penală și presupune, pe lângă obligațiile specifice controlului judiciar, constituirea unei cauțiuni în condițiile stabilite de lege.",
        "Într-o asemenea situație analizez, după caz: condițiile măsurii, oportunitatea acesteia în raport cu alte măsuri, obligațiile impuse, cauțiunea, situația materială relevantă și posibilitatea folosirii unei măsuri neprivative de libertate în locul uneia mai severe, atunci când cadrul legal și situația concretă permit această argumentație.",
      ],
    },
    {
      h2: "Contestarea măsurii și termenele",
      paragraphs: [
        "Împotriva ordonanței procurorului prin care se dispune controlul judiciar există o cale specifică de atac, reglementată de art. 213 CPP. Pentru încheierile privind măsurile preventive se aplică art. 204-206 CPP, cu termenul de 48 de ore.",
        "Trimite-mi ordonanța sau încheierea, obligațiile stabilite, data la care măsura a fost luată sau prelungită și problema concretă pe care una dintre obligații ți-o creează.",
      ],
      links: [
        { label: "Arest la domiciliu - contestație, permisiuni și înlocuire", to: "/servicii/arest-la-domiciliu" },
        { label: "Arest preventiv - propunere, contestație și înlocuire", to: "/servicii/arest-preventiv" },
        { label: "Reținere 24 ore - ce trebuie făcut imediat", to: "/servicii/retinere-24-ore" },
      ],
    },
  ],
  faq: [
    {
      q: "Ce obligații pot fi impuse prin control judiciar?",
      a: "Obligațiile prevăzute de art. 215 CPP, care pot include prezentarea la organul judiciar sau la poliție, comunicarea schimbării locuinței, restricții teritoriale, restricții privind contactul cu anumite persoane și, în condițiile legii, restricții privind anumite activități.",
    },
    {
      q: "Controlul judiciar înseamnă privare de libertate?",
      a: "Nu. Persoana rămâne în libertate, dar trebuie să respecte obligațiile stabilite de organul judiciar competent.",
    },
    {
      q: "Cum contest controlul judiciar dispus de procuror?",
      a: "Prin calea de atac specifică reglementată de art. 213 CPP. Termenele sunt scurte, așa că este util să îmi spui exact când ți-a fost comunicată ordonanța.",
    },
    {
      q: "Pot fi modificate obligațiile pe parcursul dosarului?",
      a: "Da, atunci când există temei legal. Se poate solicita modificarea obligațiilor, revocarea sau înlocuirea măsurii, în funcție de evoluția cauzei și de împrejurările noi apărute.",
    },
    {
      q: "Ce este controlul judiciar pe cauțiune?",
      a: "Este o măsură preventivă distinctă, care presupune, pe lângă obligațiile controlului judiciar, constituirea unei cauțiuni în condițiile stabilite de lege.",
    },
  ],
  resources: [
    { text: "Art. 211-215¹ CPP - controlul judiciar.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 216-217 CPP - controlul judiciar pe cauțiune.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 213 CPP - calea de atac împotriva controlului judiciar dispus de procuror.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 242 CPP - revocarea și înlocuirea măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
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
    "Avocat arest la domiciliu București - contestație, cereri de părăsire a imobilului, revocare și înlocuirea măsurii. 18+ ani experiență.",
  keywords:
    "avocat arest la domiciliu, arest la domiciliu bucuresti, contestatie arest la domiciliu, inlocuire arest la domiciliu",
  breadcrumbLabel: "Arest la domiciliu",
  serviceName: "Avocat arest la domiciliu București - Bogdan Lamatic",
  urgency: [
    "Ești în arest la domiciliu sau această măsură urmează să fie discutată?",
    "Arestul la domiciliu este o măsură preventivă privativă de libertate, executată în imobilul stabilit de organul judiciar.",
    "În funcție de situație, pot fi analizate contestarea măsurii, înlocuirea cu una mai puțin severă sau cererile privind părăsirea imobilului în cazurile permise de lege.",
  ],
  bio: [
    `${BIO_INTRO} Asist clienți atât înainte de luarea măsurii, cât și după dispunerea acesteia.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Cât poate dura arestul la domiciliu",
      paragraphs: [
        "În cursul urmăririi penale poate fi dispus pentru cel mult 30 de zile, cu posibilitatea prelungirii în condițiile prevăzute de lege, iar durata maximă în această fază este de 180 de zile.",
        "Persoana trebuie să rămână în imobilul în care execută măsura și să respecte obligațiile stabilite, cu excepțiile permise de lege sau aprobate de organul judiciar competent.",
      ],
    },
    {
      h2: "Ce fac pentru tine în cazul arestului la domiciliu",
      bullets: [
        "pregătesc apărarea împotriva luării măsurii, atunci când mă contactezi înainte de termen;",
        "analizez calea de atac disponibilă;",
        "solicit înlocuirea cu o măsură mai puțin severă atunci când există temei;",
        "analizez posibilitatea revocării;",
        "formulez cereri privind părăsirea imobilului atunci când există un motiv justificat și condițiile legale sunt îndeplinite.",
      ],
      paragraphs: [
        "Pot deveni relevante inclusiv situații privind activitatea profesională, tratamentul medical sau alte împrejurări personale temeinic justificate. Fiecare cerere trebuie analizată individual.",
      ],
      cta: "Sunt în arest la domiciliu - Vreau să verific opțiunile",
    },
    {
      h2: "Ce verific dacă măsura este deja dispusă",
      bullets: [
        "dacă există o cale de atac disponibilă;",
        "dacă măsura mai este necesară;",
        "dacă poate fi înlocuită cu una mai puțin severă;",
        "dacă au apărut împrejurări noi;",
        "dacă este necesară o cerere pentru părăsirea temporară a imobilului într-o situație permisă de lege.",
      ],
      callout: "Trimite-mi încheierea și explică-mi problema concretă pe care măsura ți-o creează.",
      links: [
        { label: "Control judiciar - obligații, contestare și revocare", to: "/servicii/control-judiciar" },
        { label: "Arest preventiv - propunere, contestație și înlocuire", to: "/servicii/arest-preventiv" },
        { label: "Reținere 24 ore - ce trebuie făcut imediat", to: "/servicii/retinere-24-ore" },
      ],
    },
  ],
  faq: [
    {
      q: "Cât poate dura arestul la domiciliu?",
      a: "În cursul urmăririi penale poate fi luat pentru cel mult 30 de zile, cu posibilitatea prelungirii în condițiile legii, iar durata maximă în această etapă este de 180 de zile.",
    },
    {
      q: "Cine poate dispune arestul la domiciliu?",
      a: "Măsura este în competența judecătorului sau a instanței, în funcție de etapa procesuală și de procedura aplicabilă.",
    },
    {
      q: "Pot ieși din imobil pentru muncă sau tratament medical?",
      a: "În situațiile și condițiile prevăzute de lege poate fi solicitată permisiunea de a părăsi imobilul pentru o perioadă determinată și într-un scop justificat. Nu există o aprobare automată, iar cererea trebuie argumentată.",
    },
    {
      q: "Se poate înlocui arestul la domiciliu cu controlul judiciar?",
      a: "Da, atunci când sunt îndeplinite condițiile prevăzute de art. 242 CPP privind înlocuirea măsurii cu una mai ușoară.",
    },
    {
      q: "Cum contest arestul la domiciliu?",
      a: "Prin contestație împotriva încheierii, în condițiile art. 204-206 CPP. Termenul este de 48 de ore de la pronunțare sau, după caz, de la comunicare.",
    },
  ],
  resources: [
    { text: "Art. 218-222 CPP - arestul la domiciliu.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 204-206 CPP - căile de atac privind măsurile preventive.", href: CPP, linkLabel: "Legislație" },
    { text: "Art. 242 CPP - revocarea și înlocuirea măsurilor preventive.", href: CPP, linkLabel: "Legislație" },
  ],
  contactText: CONTACT,
  parent: PARENT_MP,
};
