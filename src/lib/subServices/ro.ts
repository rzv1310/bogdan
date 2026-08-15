import type { SubServicePageData } from "@/components/services/SubServicePage";

const CPP = "https://legislatie.just.ro/Public/DetaliiDocument/185907";
const CP = "https://legislatie.just.ro/Public/DetaliiDocument/223635";
const PARENT = { to: "/servicii/urmarire-penala", label: "urmărire penală" };
const BIO_INTRO = "Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență în drept penal.";
const LEGAL500 = "Sunt recunoscut de Legal 500 ca „Next Generation Partner\" (White-Collar Crime) 2021-2024.";
const CONTACT =
  "Spune-mi în câteva propoziții ce s-a întâmplat și îți răspund concret care sunt pașii următori. Prima discuție de evaluare este gratuită.";

export const audierePolitieParchetRo: SubServicePageData = {
  lang: "ro",
  path: "/servicii/audiere-politie-parchet",
  altPath: "/en/services/police-prosecutor-questioning",
  roPath: "/servicii/audiere-politie-parchet",
  title: "Avocat Audiere Poliție București | Bogdan Lamatic",
  h1: "Avocat Audiere Poliție București - Prezent la Declarația Ta | Bogdan Lamatic",
  description:
    "Avocat audiere Poliție și Parchet București - asistență la declarație, ca suspect sau inculpat. 18+ ani experiență. Sună acum!",
  keywords:
    "avocat audiere poliție bucurești, avocat audiere parchet, avocat declarație suspect, avocat audiere inculpat",
  breadcrumbLabel: "Audiere Poliție/Parchet",
  serviceName: "Avocat audiere Poliție și Parchet București - Bogdan Lamatic",
  urgency: [
    "Ai primit o citație sau un telefon pentru audiere?",
    "Ce declari și cum declari în acel moment contează mai mult decât pare.",
    "Nu te duce singur - sună-mă înainte de audiere, ca să pregătim împreună declarația.",
  ],
  bio: [
    `${BIO_INTRO} Asist persoane citate la audiere - ca suspect, inculpat sau martor - la Poliție, Parchet, DNA sau DIICOT.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine",
      bullets: [
        "Pregătesc declarația împreună cu tine, înainte de audiere, pe baza actelor și informațiilor disponibile.",
        "Sunt prezent efectiv la audiere, cu drept de a mă consulta cu tine înainte și în timpul acesteia (art. 109 CPP).",
        "Te consiliez privind dreptul la tăcere, pe care îl poți exercita oricând, fără nicio consecință defavorabilă (art. 78, art. 83 CPP).",
        "Verific consemnarea declarației înainte de semnare, pentru ca procesul-verbal să reflecte exact ce ai spus (art. 110 CPP).",
        "Formulez obiecții sau cereri dacă audierea nu respectă drepturile procesuale.",
      ],
      cta: "Vreau avocat!",
    },
    {
      h2: "De ce contează avocatul chiar de la prima audiere",
      bullets: [
        "Organul judiciar are obligația să-ți comunice, înainte de audiere, calitatea în care ești audiat și drepturile tale (art. 108 CPP) - dar puțini oameni știu exact ce înseamnă asta în practică.",
        "O declarație dată fără pregătire poate fi folosită împotriva ta pe tot parcursul dosarului.",
        "Diferența dintre a fi audiat ca martor și ca suspect este esențială - iar trecerea de la unul la altul se poate întâmpla chiar în timpul audierii.",
      ],
    },
    {
      h2: "Situații în care intervin frecvent",
      paragraphs: [
        "Audierea este deseori doar primul pas al unui dosar care continuă cu percheziții, ridicări de dispozitive sau propuneri de măsuri preventive.",
      ],
      bullets: [
        "Citație la Poliție sau Parchet, în calitate de suspect sau martor.",
        "Audiere după o percheziție domiciliară sau o percheziție informatică.",
        "Audiere în dosare instrumentate de DIICOT sau DNA.",
        "Audiere urmată de propunerea unei măsuri preventive.",
      ],
    },
  ],
  faq: [
    {
      q: "Sunt obligat să mă prezint la audiere?",
      a: "Da, în principiu prezentarea este obligatorie. Sunați-mă înainte de data fixată, ca să pregătim declarația.",
    },
    {
      q: "Pot refuza să dau declarații?",
      a: "Da, suspectul și inculpatul au dreptul la tăcere, fără nicio consecință defavorabilă (art. 78, 83 CPP).",
    },
    {
      q: "Care e diferența între audierea ca martor și ca suspect?",
      a: "Ca martor ai obligația de a spune adevărul; ca suspect sau inculpat ai dreptul la tăcere și la avocat. Calitatea în care ești audiat trebuie să-ți fie comunicată clar, la început.",
    },
    {
      q: "Cât costă asistența la o audiere?",
      a: "Depinde de urgență și complexitate. Ofer o primă discuție gratuită pentru evaluare. Sunați la +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "Codul de procedură penală - audierea persoanelor, drepturile suspectului și inculpatului (art. 78, 83, 108-111 CPP).",
      href: CPP,
      linkLabel: "Portal Legislativ",
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
  h1: "Avocat Percheziție Domiciliară București - Alături de Tine în Timpul Percheziției | Bogdan Lamatic",
  description:
    "Avocat percheziție domiciliară București - verific legalitatea mandatului și te asist chiar în timpul percheziției. Sună acum!",
  keywords: "avocat percheziție domiciliară, avocat percheziție bucurești",
  breadcrumbLabel: "Percheziție domiciliară",
  serviceName: "Avocat percheziție domiciliară București - Bogdan Lamatic",
  urgency: [
    "Urmează o percheziție sau a avut loc deja?",
    "Cere să vezi mandatul de percheziție și sună-mă imediat.",
    "Pot fi prezent sau te pot îndruma telefonic, pas cu pas, chiar în timp ce percheziția se desfășoară.",
  ],
  bio: [
    `${BIO_INTRO} Intervin rapid în cazul unei percheziții domiciliare - la tine acasă sau la sediul firmei - pentru a verifica legalitatea mandatului și a proceda corect pe tot parcursul ei.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine",
      bullets: [
        "Verific legalitatea mandatului, emis de judecătorul de drepturi și libertăți, și condițiile în care a fost dispusă percheziția (art. 157-158 CPP).",
        "Sunt prezent sau te ghidez telefonic pe tot parcursul percheziției, pentru a-ți proteja drepturile.",
        "Verific respectarea orelor legale - percheziția domiciliară nu poate începe înainte de ora 6:00 sau după ora 20:00, cu excepții limitate de lege (art. 159 CPP).",
        "Analizez procesul-verbal de percheziție și obiectele ridicate, pentru a identifica eventuale nereguli.",
        "Formulez, dacă e cazul, contestații sau cereri privind modul de efectuare a percheziției.",
      ],
      cta: "Vreau avocat!",
    },
    {
      h2: "Ce trebuie să știi în timpul unei percheziții",
      bullets: [
        "Ai dreptul să fii de față sau să fie de față un reprezentant ori un membru de familie major.",
        "Poți solicita prezența avocatului tău încă din acest moment - organele judiciare trebuie să te lase să iei legătura.",
        "O copie a procesului-verbal de percheziție trebuie lăsată persoanei percheziționate.",
      ],
    },
    {
      h2: "Ce se întâmplă după percheziție",
      paragraphs: [
        "După percheziție urmează, de regulă, o audiere și, în dosarele mai grave, o propunere de măsură preventivă. Dacă ți-au fost ridicate telefonul sau laptopul, procedura continuă cu o percheziție informatică asupra datelor.",
      ],
    },
  ],
  faq: [
    { q: "Pot cere să văd mandatul de percheziție?", a: "Da, aveți acest drept - verificați cine l-a emis și pentru ce." },
    {
      q: "La ce oră poate începe o percheziție domiciliară?",
      a: "Doar între 6:00 și 20:00, cu excepția infracțiunii flagrante sau a unui local deschis publicului la acea oră (art. 159 CPP).",
    },
    {
      q: "Pot suna avocatul chiar în timpul percheziției?",
      a: "Da, sunați-mă imediat - vă pot ghida telefonic sau mă pot deplasa, în funcție de situație.",
    },
    {
      q: "Ce se întâmplă dacă percheziția nu a respectat legea?",
      a: "Pot formula contestații și cereri privind legalitatea probelor obținute astfel.",
    },
  ],
  resources: [
    {
      text: "Codul de procedură penală - percheziția domiciliară (art. 157-159 CPP).",
      href: CPP,
      linkLabel: "Portal Legislativ",
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
  h1: "Avocat Percheziție Informatică București - Telefon, Laptop, Date Ridicate | Bogdan Lamatic",
  description:
    "Avocat percheziție informatică București - telefon, laptop sau date ridicate într-un dosar penal. 18+ ani experiență. Sună acum!",
  keywords: "avocat percheziție informatică, ridicare telefon, ridicare laptop, ridicare date informatice",
  breadcrumbLabel: "Percheziție informatică",
  serviceName: "Avocat percheziție informatică București - Bogdan Lamatic",
  urgency: [
    "Ți-au fost ridicate telefonul, laptopul sau alte dispozitive?",
    "Sună-mă cât mai repede.",
    "Momentul ridicării și modul în care se face copierea datelor pot fi decisive pentru dosarul tău.",
  ],
  bio: [
    `${BIO_INTRO} Intervin atunci când telefonul, laptopul sau alte dispozitive de stocare a datelor îți sunt ridicate sau percheziționate în cadrul unui dosar penal.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce fac pentru tine",
      bullets: [
        "Verific legalitatea percheziției informatice, dispusă de judecătorul de drepturi și libertăți la cererea procurorului (art. 168 CPP).",
        "Sunt prezent sau te asist cu privire la ridicarea telefonului, laptopului sau a altor suporturi de stocare a datelor.",
        "Verific dacă percheziția s-a făcut de un specialist, în prezența ta, ca suspect sau inculpat, conform legii (art. 168 alin. 11-12 CPP).",
        "Analizez procesul-verbal de percheziție informatică - ce date au fost copiate, extrase sau reținute.",
        "Formulez cereri privind restituirea dispozitivelor sau limitarea datelor extrase, atunci când legea o permite.",
      ],
      cta: "Vreau avocat!",
    },
    {
      h2: "Ce trebuie să știi despre percheziția informatică",
      bullets: [
        "Legea permite, în anumite condiții, realizarea de copii ale datelor, în loc de ridicarea fizică a dispozitivului - dacă ridicarea ar afecta grav activitatea persoanei (art. 168 alin. 10 CPP).",
        "Percheziția propriu-zisă a datelor trebuie efectuată de un specialist, nu doar de organul de anchetă.",
        "Ai dreptul să fii prezent la percheziția sistemului informatic sau a suportului de stocare.",
      ],
    },
    {
      h2: "Dosarele în care apare cel mai des",
      paragraphs: [
        "Percheziția informatică apare frecvent în dosare de criminalitate economică, fraude online, dosare DIICOT sau DNA, unde datele din telefon și laptop devin principala probă.",
      ],
    },
  ],
  faq: [
    {
      q: "Îmi pot lua telefonul sau laptopul înapoi?",
      a: "Depinde de stadiul dosarului; formulez cereri de restituire atunci când dispozitivul nu mai este necesar ca probă.",
    },
    {
      q: "Ce date pot fi copiate de pe telefon sau laptop?",
      a: "Doar cele relevante pentru cauză, iar percheziția trebuie efectuată de un specialist, în condiții stabilite de lege.",
    },
    {
      q: "Pot cere să fiu prezent la extragerea datelor?",
      a: "Da, aveți acest drept, atunci când percheziția se efectuează asupra dispozitivului dumneavoastră.",
    },
    {
      q: "Ce fac dacă mi s-a ridicat telefonul fără mandat?",
      a: "Sunați-mă imediat - verific dacă ridicarea a respectat condițiile legale.",
    },
  ],
  resources: [
    {
      text: "Codul de procedură penală - percheziția informatică și accesul într-un sistem informatic (art. 168 CPP).",
      href: CPP,
      linkLabel: "Portal Legislativ",
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
  h1: "Avocat DIICOT București - Apărare în Dosare de Criminalitate Organizată | Bogdan Lamatic",
  description:
    "Avocat DIICOT București - apărare în dosare de criminalitate organizată, terorism, trafic de persoane. 18+ ani experiență. Sună acum!",
  keywords: "avocat diicot bucurești, avocat dosar diicot, avocat anchetă diicot",
  breadcrumbLabel: "Avocat DIICOT",
  serviceName: "Avocat DIICOT București - Bogdan Lamatic",
  urgency: [
    "Un dosar DIICOT nu e un dosar penal obișnuit.",
    "Procurorii DIICOT lucrează pe cauze complexe, deseori cu mai mulți inculpați, interceptări și percheziții simultane, iar măsurile preventive propuse sunt frecvent cele mai severe.",
    "De aceea, intervenția unui avocat cu experiență specifică în fața acestei structuri contează enorm.",
  ],
  bio: [
    `${BIO_INTRO} Reprezint persoane aflate în anchetă la DIICOT (Direcția de Investigare a Infracțiunilor de Criminalitate Organizată și Terorism), indiferent de infracțiunea concretă care face obiectul dosarului.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce este DIICOT și ce anchetează",
      paragraphs: [
        "DIICOT este o structură specializată din cadrul Parchetului de pe lângă Înalta Curte de Casație și Justiție, înființată prin OUG nr. 78/2016, competentă în special pentru:",
      ],
      bullets: [
        "criminalitate organizată (fapte comise în cadrul unui grup infracțional organizat, art. 367 CP);",
        "terorism și finanțarea actelor de terorism;",
        "trafic de persoane (art. 210-211 CP);",
        "trafic de droguri de mare risc și risc, criminalitate informatică, trafic de arme;",
        "spălare de bani, atunci când este conexă unei infracțiuni de competența DIICOT.",
      ],
      cta: "Vreau avocat!",
    },
    {
      h2: "Ce fac pentru tine într-un dosar DIICOT",
      bullets: [
        "Analizez actele dosarului la care am acces și verific legalitatea probelor (interceptări, percheziții, supravegheri tehnice).",
        "Te apăr la audieri și, dacă e cazul, în fața judecătorului de drepturi și libertăți, unde DIICOT propune frecvent măsuri preventive severe.",
        "Contest măsurile preventive și formulez cereri de înlocuire, atunci când există temei legal.",
        "Coordonez apărarea în dosare cu mai mulți inculpați, unde strategia trebuie adaptată constant.",
      ],
      cta: "Vreau avocat!",
    },
  ],
  faq: [
    {
      q: "De ce sunt dosarele DIICOT diferite de cele obișnuite?",
      a: "Pentru că vizează, de regulă, grupuri infracționale organizate, implică mai mulți inculpați și volume mari de probe (interceptări, percheziții), iar procurorii sunt specializați pe astfel de cauze.",
    },
    {
      q: "Ce infracțiuni intră în competența DIICOT?",
      a: "Criminalitatea organizată, terorismul, traficul de persoane, traficul de droguri, criminalitatea informatică și spălarea de bani conexă acestora, conform OUG 78/2016.",
    },
    {
      q: "Se poate contesta competența DIICOT într-un dosar?",
      a: "Da, dacă fapta nu se încadrează în competența materială a direcției, aceasta poate fi contestată prin căile procesuale specifice.",
    },
    {
      q: "Cât costă apărarea într-un dosar DIICOT?",
      a: "Depinde de complexitatea cauzei. Ofer o primă discuție gratuită pentru evaluare. Sunați la +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "OUG nr. 78/2016 privind organizarea și funcționarea DIICOT, inclusiv competența materială a direcției.",
      href: CPP,
      linkLabel: "Portal Legislativ",
    },
    { text: "Codul penal - grupul infracțional organizat (art. 367 CP).", href: CP, linkLabel: "Portal Legislativ" },
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
  h1: "Avocat DNA București - Apărare în Dosare de Corupție | Bogdan Lamatic",
  description:
    "Avocat DNA București - apărare în dosare de corupție instrumentate de Direcția Națională Anticorupție. 18+ ani experiență. Sună acum!",
  keywords: "avocat dna, avocat dosar dna bucurești",
  breadcrumbLabel: "Avocat DNA",
  serviceName: "Avocat DNA București - Bogdan Lamatic",
  urgency: [
    "Un dosar DNA are aproape întotdeauna miză profesională și reputațională, pe lângă cea penală.",
    "Funcționari publici, aleși locali, oameni de afaceri sau angajați cu funcții de decizie ajung frecvent în astfel de dosare.",
    "Reacția din prima etapă, inclusiv la audiere sau la o eventuală percheziție, influențează direct evoluția cauzei.",
  ],
  bio: [
    `${BIO_INTRO} Apăr clienți în dosare instrumentate de Direcția Națională Anticorupție (DNA).`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "Ce este DNA și când este competentă",
      paragraphs: [
        "DNA este parchetul specializat în combaterea corupției la nivel mediu și înalt, înființat prin OUG nr. 43/2002. Este competentă, printre altele, atunci când:",
      ],
      bullets: [
        "valoarea sumei sau a bunului care formează obiectul infracțiunii de corupție (mită, trafic de influență) depășește echivalentul a 10.000 euro;",
        "paguba materială cauzată printr-o faptă asimilată corupției depășește echivalentul a 200.000 euro;",
        "fapta este comisă de anumite categorii de persoane (parlamentari, membri ai Guvernului, judecători, procurori, primari, alți funcționari cu funcții de conducere sau control), indiferent de valoarea prejudiciului.",
      ],
      cta: "Vreau avocat!",
    },
    {
      h2: "Ce fac pentru tine într-un dosar DNA",
      bullets: [
        "Analizez actele dosarului și verific dacă sunt îndeplinite condițiile de competență ale DNA pentru cauza ta.",
        "Te asist la audieri, inclusiv la eventuale percheziții sau ridicări de înscrisuri de la sediul instituției sau al firmei.",
        "Formulez apărări privind încadrarea juridică - multe fapte de „abuz în serviciu\" sau „conflict de interese\" ridică discuții tehnice privind competența și elementele infracțiunii.",
        "Contest măsurile preventive, atunci când sunt propuse, și cererile de sechestru asigurător asupra bunurilor.",
      ],
      cta: "Vreau avocat!",
    },
  ],
  faq: [
    {
      q: "Ce praguri valorice atrag competența DNA?",
      a: "10.000 euro pentru obiectul infracțiunilor de corupție (mită, trafic de influență) și 200.000 euro pentru prejudiciul cauzat prin fapte asimilate, conform OUG 43/2002.",
    },
    {
      q: "DNA este competentă doar pentru funcționari publici?",
      a: "Nu, poate fi competentă și indiferent de calitatea persoanei, atunci când sunt depășite pragurile valorice de mai sus.",
    },
    {
      q: "Ce se întâmplă dacă sunt acuzat de abuz în serviciu?",
      a: "Verific dacă fapta este de competența DNA (pragul de 200.000 euro prejudiciu sau 1.000.000 euro, după caz) și construiesc apărarea în funcție de elementele concrete ale dosarului.",
    },
    {
      q: "Cât costă apărarea într-un dosar DNA?",
      a: "Depinde de complexitatea cauzei. Ofer o primă discuție gratuită pentru evaluare. Sunați la +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "OUG nr. 43/2002 privind Direcția Națională Anticorupție, inclusiv competența materială și pragurile valorice.",
      href: CPP,
      linkLabel: "Portal Legislativ",
    },
    {
      text: "Legea nr. 78/2000 pentru prevenirea, descoperirea și sancționarea faptelor de corupție.",
      href: CPP,
      linkLabel: "Portal Legislativ",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};
