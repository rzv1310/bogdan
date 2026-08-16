export interface ServiceCard {
  title: string;
  description: string;
  subServices: { label: string; to?: string }[];
  to: string;
  cta: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  cards: ServiceCard[];
}

export const roServiceGroups: ServiceGroup[] = [
  {
    id: "urgent",
    title: "Ai nevoie urgentă de avocat?",
    cards: [
      {
        title: "Audieri și urmărire penală",
        description: "Asistență juridică imediată în faza de urmărire penală, de la audieri și percheziții până la contestarea măsurilor.",
        subServices: [
          { label: "Audiere poliție sau parchet", to: "/servicii/audiere-politie-parchet" },
          { label: "Percheziție domiciliară", to: "/servicii/perchezitie-domiciliara" },
          { label: "Percheziție informatică", to: "/servicii/perchezitie-informatica" },
          { label: "Avocat DIICOT", to: "/servicii/avocat-diicot" },
          { label: "Avocat DNA", to: "/servicii/avocat-dna" },
        ],
        to: "/servicii/urmarire-penala",
        cta: "Vezi toate serviciile de urmărire penală",
      },
      {
        title: "Reținere, arest și măsuri preventive",
        description: "Intervenție rapidă la reținere, control judiciar, arest la domiciliu și arestare preventivă.",
        subServices: [
          { label: "Reținere 24 ore", to: "/servicii/retinere-24-ore" },
          { label: "Arest preventiv", to: "/servicii/arest-preventiv" },
          { label: "Control judiciar", to: "/servicii/control-judiciar" },
          { label: "Arest la domiciliu", to: "/servicii/arest-la-domiciliu" },
        ],
        to: "/servicii/masuri-preventive",
        cta: "Vezi toate serviciile privind măsurile preventive",
      },
      {
        title: "Audiere la Poliție sau Parchet",
        description: "Asistență la declarație, ca suspect, inculpat sau martor, pregătită împreună înainte de audiere.",
        subServices: [
          { label: "Citație la audiere" },
          { label: "Declarație suspect" },
          { label: "Dreptul la tăcere" },
        ],
        to: "/servicii/audiere-politie-parchet",
        cta: "Vezi serviciul de asistență la audiere",
      },
      {
        title: "Percheziție domiciliară",
        description: "Verific legalitatea mandatului și te asist sau te ghidez telefonic chiar în timpul percheziției.",
        subServices: [
          { label: "Mandat de percheziție" },
          { label: "Proces-verbal" },
          { label: "Obiecte ridicate" },
        ],
        to: "/servicii/perchezitie-domiciliara",
        cta: "Vezi serviciul privind percheziția domiciliară",
      },
      {
        title: "Percheziție informatică",
        description: "Telefon, laptop sau date ridicate într-un dosar penal: verific legalitatea și cer restituirea.",
        subServices: [
          { label: "Ridicare telefon" },
          { label: "Ridicare laptop" },
          { label: "Date informatice" },
        ],
        to: "/servicii/perchezitie-informatica",
        cta: "Vezi serviciul privind percheziția informatică",
      },
      {
        title: "Avocat DIICOT",
        description: "Apărare în anchete DIICOT: criminalitate organizată, terorism, trafic de persoane, droguri.",
        subServices: [
          { label: "Dosar DIICOT" },
          { label: "Grup infracțional organizat" },
          { label: "Interceptări" },
        ],
        to: "/servicii/avocat-diicot",
        cta: "Vezi serviciul de apărare în dosare DIICOT",
      },
      {
        title: "Avocat DNA",
        description: "Apărare în dosare de corupție instrumentate de Direcția Națională Anticorupție.",
        subServices: [
          { label: "Dosar DNA" },
          { label: "Abuz în serviciu" },
          { label: "Sechestru asigurător" },
        ],
        to: "/servicii/avocat-dna",
        cta: "Vezi serviciul de apărare în dosare DNA",
      },
    ],
  },
  {
    id: "economic",
    title: "Criminalitate economică și dosare complexe",
    cards: [
      {
        title: "Criminalitate economică",
        description: "Asistență în cauze privind evaziunea fiscală, frauda, delapidarea, falsul și alte infracțiuni economice.",
        subServices: [
          { label: "Evaziune fiscală" },
          { label: "Fraudă și înșelăciune" },
          { label: "Delapidare" },
          { label: "Fals și uz de fals" },
          { label: "Fonduri europene" },
        ],
        to: "/servicii/criminalitate-economica",
        cta: "Vezi toate serviciile de criminalitate economică",
      },
      {
        title: "Corupție și infracțiuni de serviciu",
        description: "Apărare în dosare de dare și luare de mită, trafic de influență, abuz în serviciu și alte fapte legate de funcția publică.",
        subServices: [
          { label: "Dare și luare de mită" },
          { label: "Trafic de influență" },
          { label: "Abuz în serviciu" },
        ],
        to: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
        cta: "Vezi toate serviciile privind corupția și funcția publică",
      },
      {
        title: "Spălare de bani, sechestru și confiscare",
        description: "Consultanță și reprezentare în dosare de spălare de bani, măsuri asigurătorii, sechestru și confiscare extinsă.",
        subServices: [
          { label: "Spălare de bani" },
          { label: "Sechestru asigurător" },
          { label: "Confiscare" },
        ],
        to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
        cta: "Vezi toate serviciile privind spălarea de bani",
      },
      {
        title: "Crypto și active digitale",
        description: "Investigații și apărare în cauze privind criptomonede, blockchain, NFT și smart contracts.",
        subServices: [
          { label: "Investigații crypto" },
          { label: "Fraudă crypto" },
          { label: "Blockchain" },
        ],
        to: "/servicii/investigatii-privind-activele-cripto",
        cta: "Vezi serviciul de investigații crypto",
      },
    ],
  },
  {
    id: "other",
    title: "Alte cauze penale",
    cards: [
      {
        title: "Droguri și DIICOT",
        description: "Asistență în dosare privind traficul, deținerea și alte infracțiuni investigate de DIICOT.",
        subServices: [
          { label: "Trafic de droguri" },
          { label: "Deținere pentru consum propriu" },
          { label: "Asistență DIICOT" },
          { label: "Grup infracțional organizat" },
        ],
        to: "/servicii/cauze-penale-privind-droguri",
        cta: "Vezi toate serviciile privind drogurile și DIICOT",
      },
      {
        title: "Infracțiuni rutiere",
        description: "Apărare în cauze de alcool sau droguri la volan, părăsirea locului accidentului, refuz probe și accidente cu victime.",
        subServices: [
          { label: "Alcool la volan" },
          { label: "Droguri la volan" },
          { label: "Părăsirea locului accidentului" },
          { label: "Refuz probe" },
          { label: "Accident cu victime" },
        ],
        to: "/servicii/infractiuni-rutiere-cu-victime",
        cta: "Vezi toate serviciile privind infracțiunile rutiere",
      },
      {
        title: "Infracțiuni contra persoanei",
        description: "Apărare în cauze de loviri, vătămare corporală, violență domestică, amenințare, șantaj, hărțuire și lipsire de libertate.",
        subServices: [
          { label: "Loviri și alte violențe" },
          { label: "Vătămare corporală" },
          { label: "Violență domestică" },
          { label: "Amenințare și șantaj" },
        ],
        to: "/servicii/infractiuni-contra-persoanei",
        cta: "Vezi toate serviciile privind infracțiunile contra persoanei",
      },
      {
        title: "Malpraxis și neglijență profesională",
        description: "Reprezentare în cauze de neglijență profesională și malpraxis medical, inclusiv răspundere penală a personalului medical.",
        subServices: [
          { label: "Malpraxis medical" },
          { label: "Neglijență profesională" },
          { label: "Neglijență în serviciu" },
          { label: "Răspundere penală medic" },
        ],
        to: "/servicii/neglijenta-profesionala-si-malpraxis",
        cta: "Vezi toate serviciile privind malpraxisul",
      },
      {
        title: "Accidente de muncă și răspundere penală SSM",
        description: "Consultanță și reprezentare în cauze de accidente de muncă, răspundere penală SSM și incidente mortale.",
        subServices: [
          { label: "Accident de muncă" },
          { label: "Răspundere penală angajator" },
          { label: "Răspundere penală SSM" },
          { label: "Accident mortal de muncă" },
        ],
        to: "/servicii/raspundere-penala-incidente-locul-de-munca",
        cta: "Vezi toate serviciile privind accidentele de muncă",
      },
    ],
  },
  {
    id: "victims",
    title: "Reprezentarea persoanelor vătămate",
    cards: [
      {
        title: "Victime și despăgubiri",
        description: "Reprezentarea victimelor în procesele penale pentru recuperarea prejudiciului și constituirea ca parte civilă.",
        subServices: [
          { label: "Accident rutier" },
          { label: "Vătămare corporală" },
          { label: "Prejudicii" },
          { label: "Parte civilă" },
        ],
        to: "/servicii/reprezentarea-victimelor-in-procese-penale",
        cta: "Vezi toate serviciile pentru victime",
      },
    ],
  },
];

export const enServiceGroups: ServiceGroup[] = [
  {
    id: "urgent",
    title: "Do you urgently need a lawyer?",
    cards: [
      {
        title: "Questioning and criminal investigation",
        description: "Immediate legal assistance during the criminal investigation phase, from questioning and searches to challenging measures.",
        subServices: [
          { label: "Police or prosecutor questioning", to: "/en/services/police-prosecutor-questioning" },
          { label: "Home search", to: "/en/services/home-search" },
          { label: "Computer search", to: "/en/services/computer-search" },
          { label: "DIICOT lawyer", to: "/en/services/diicot-lawyer" },
          { label: "DNA lawyer", to: "/en/services/dna-lawyer" },
        ],
        to: "/en/services/criminal-investigation",
        cta: "See all criminal investigation services",
      },
      {
        title: "Detention, arrest and preventive measures",
        description: "Rapid intervention in detention, judicial control, house arrest and pre-trial detention.",
        subServices: [
          { label: "24-hour detention", to: "/en/services/police-custody-24-hours" },
          { label: "Pre-trial detention", to: "/en/services/pre-trial-detention" },
          { label: "Judicial control", to: "/en/services/judicial-control" },
          { label: "House arrest", to: "/en/services/house-arrest" },
        ],
        to: "/en/services/preventive-measures",
        cta: "See all preventive measures services",
      },
      {
        title: "Police or prosecutor questioning",
        description: "Assistance with your statement, as suspect, defendant or witness, prepared together before the hearing.",
        subServices: [
          { label: "Summons" },
          { label: "Suspect statement" },
          { label: "Right to silence" },
        ],
        to: "/en/services/police-prosecutor-questioning",
        cta: "See the questioning assistance service",
      },
      {
        title: "Home search",
        description: "I check the legality of the warrant and assist you, in person or by phone, during the search.",
        subServices: [
          { label: "Search warrant" },
          { label: "Search record" },
          { label: "Seized items" },
        ],
        to: "/en/services/home-search",
        cta: "See the home search service",
      },
      {
        title: "Computer search",
        description: "Phone, laptop or data seized in a criminal case: I check legality and request their return.",
        subServices: [
          { label: "Phone seizure" },
          { label: "Laptop seizure" },
          { label: "Digital data" },
        ],
        to: "/en/services/computer-search",
        cta: "See the computer search service",
      },
      {
        title: "DIICOT lawyer",
        description: "Defense in DIICOT investigations: organised crime, terrorism, human trafficking, drugs.",
        subServices: [
          { label: "DIICOT case" },
          { label: "Organised criminal group" },
          { label: "Wiretaps" },
        ],
        to: "/en/services/diicot-lawyer",
        cta: "See the DIICOT defense service",
      },
      {
        title: "DNA lawyer",
        description: "Defense in corruption cases handled by the National Anticorruption Directorate.",
        subServices: [
          { label: "DNA case" },
          { label: "Abuse of office" },
          { label: "Asset seizure" },
        ],
        to: "/en/services/dna-lawyer",
        cta: "See the DNA defense service",
      },
    ],
  },
  {
    id: "economic",
    title: "Economic crime and complex cases",
    cards: [
      {
        title: "Financial crime",
        description: "Defense in cases involving tax evasion, fraud, embezzlement, forgery and other economic offenses.",
        subServices: [
          { label: "Tax evasion" },
          { label: "Fraud and deception" },
          { label: "Embezzlement" },
          { label: "Forgery and use of forgery" },
          { label: "EU funds" },
        ],
        to: "/en/services/financial-crime",
        cta: "See all financial crime services",
      },
      {
        title: "Corruption and public office offenses",
        description: "Defense in bribery, influence peddling, abuse of office and other acts related to the exercise of public office.",
        subServices: [
          { label: "Bribery" },
          { label: "Influence peddling" },
          { label: "Abuse of office" },
        ],
        to: "/en/services/corruption-and-public-office-offenses",
        cta: "See all corruption and public office services",
      },
      {
        title: "Money laundering, seizure and confiscation",
        description: "Advice and representation in money laundering cases, precautionary measures, seizure and extended confiscation.",
        subServices: [
          { label: "Money laundering" },
          { label: "Asset seizure" },
          { label: "Confiscation" },
        ],
        to: "/en/services/money-laundering-and-asset-concealment",
        cta: "See all money laundering services",
      },
      {
        title: "Crypto and digital assets",
        description: "Investigations and defense in cases involving cryptocurrencies, blockchain, NFTs and smart contracts.",
        subServices: [
          { label: "Crypto investigations" },
          { label: "Crypto fraud" },
          { label: "Blockchain" },
        ],
        to: "/en/services/crypto-asset-investigations",
        cta: "See crypto asset investigation services",
      },
    ],
  },
  {
    id: "other",
    title: "Other criminal cases",
    cards: [
      {
        title: "Drug offenses and DIICOT",
        description: "Assistance in cases involving drug trafficking, possession and other offenses investigated by DIICOT.",
        subServices: [
          { label: "Drug trafficking" },
          { label: "Possession for personal use" },
          { label: "DIICOT assistance" },
          { label: "Organized criminal group" },
        ],
        to: "/en/services/drug-offenses",
        cta: "See all drug offense services",
      },
      {
        title: "Road traffic offenses",
        description: "Defense in drunk driving, drug driving, hit-and-run, refusal of tests and accidents with victims.",
        subServices: [
          { label: "Drunk driving" },
          { label: "Drug driving" },
          { label: "Hit-and-run" },
          { label: "Refusal of tests" },
          { label: "Accident with victims" },
        ],
        to: "/en/services/road-traffic-offenses",
        cta: "See all road traffic offense services",
      },
      {
        title: "Offenses against persons",
        description: "Defense in cases of assault, bodily harm, domestic violence, threats, blackmail, harassment and unlawful deprivation of liberty.",
        subServices: [
          { label: "Assault and other violence" },
          { label: "Bodily harm" },
          { label: "Domestic violence" },
          { label: "Threats and blackmail" },
        ],
        to: "/en/services/offenses-against-persons",
        cta: "See all services on offenses against persons",
      },
      {
        title: "Professional negligence and malpractice",
        description: "Representation in professional negligence and medical malpractice cases, including criminal liability of medical staff.",
        subServices: [
          { label: "Medical malpractice" },
          { label: "Professional negligence" },
          { label: "Negligence in service" },
          { label: "Criminal liability of doctors" },
        ],
        to: "/en/services/professional-negligence-and-malpractice",
        cta: "See all malpractice services",
      },
      {
        title: "Workplace accidents and criminal liability",
        description: "Advice and representation in workplace accidents, OSH criminal liability and fatal incident cases.",
        subServices: [
          { label: "Workplace accident" },
          { label: "Employer criminal liability" },
          { label: "OSH criminal liability" },
          { label: "Fatal workplace accident" },
        ],
        to: "/en/services/workplace-criminal-liability",
        cta: "See all workplace liability services",
      },
    ],
  },
  {
    id: "victims",
    title: "Representation of injured parties",
    cards: [
      {
        title: "Victims and compensation",
        description: "Representation of victims in criminal proceedings to recover damages and establish civil party status.",
        subServices: [
          { label: "Road accident" },
          { label: "Bodily injury" },
          { label: "Damages" },
          { label: "Civil party" },
        ],
        to: "/en/services/victim-representation-in-criminal-cases",
        cta: "See all victim representation services",
      },
    ],
  },
];
