export interface ServiceCard {
  title: string;
  description: string;
  subServices: string[];
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
        subServices: ["Audiere poliție", "Audiere parchet", "Percheziție", "Avocat DIICOT"],
        to: "/servicii/urmarire-penala",
        cta: "Vezi toate serviciile de urmărire penală",
      },
      {
        title: "Reținere, arest și măsuri preventive",
        description: "Intervenție rapidă la reținere, control judiciar, arest la domiciliu și arestare preventivă.",
        subServices: ["Reținere 24 ore", "Arest preventiv", "Control judiciar", "Arest la domiciliu"],
        to: "/servicii/masuri-preventive",
        cta: "Vezi toate serviciile privind măsurile preventive",
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
        subServices: ["Evaziune fiscală", "Fraudă și înșelăciune", "Delapidare", "Fals și uz de fals"],
        to: "/servicii/criminalitate-economica",
        cta: "Vezi toate serviciile de criminalitate economică",
      },
      {
        title: "Corupție și infracțiuni de serviciu",
        description: "Apărare în dosare de dare și luare de mită, trafic de influență, abuz în serviciu și alte fapte legate de funcția publică.",
        subServices: ["Dare și luare de mită", "Trafic de influență", "Abuz în serviciu"],
        to: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
        cta: "Vezi toate serviciile privind corupția și funcția publică",
      },
      {
        title: "Spălare de bani, sechestru și confiscare",
        description: "Consultanță și reprezentare în dosare de spălare de bani, măsuri asigurătorii, sechestru și confiscare extinsă.",
        subServices: ["Spălare de bani", "Sechestru asigurător", "Confiscare"],
        to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
        cta: "Vezi toate serviciile privind spălarea de bani",
      },
      {
        title: "Crypto și active digitale",
        description: "Investigații și apărare în cauze privind criptomonede, blockchain, NFT și smart contracts.",
        subServices: ["Investigații crypto", "Fraudă crypto", "Blockchain"],
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
        subServices: ["Trafic de droguri", "Deținere pentru consum propriu", "Asistență DIICOT", "Grup infracțional organizat"],
        to: "/servicii/cauze-penale-privind-droguri",
        cta: "Vezi toate serviciile privind drogurile și DIICOT",
      },
      {
        title: "Infracțiuni rutiere",
        description: "Apărare în cauze de alcool sau droguri la volan, părăsirea locului accidentului, refuz probe și accidente cu victime.",
        subServices: ["Alcool la volan", "Droguri la volan", "Părăsirea locului accidentului", "Refuz probe", "Accident cu victime"],
        to: "/servicii/infractiuni-rutiere-cu-victime",
        cta: "Vezi toate serviciile privind infracțiunile rutiere",
      },
      {
        title: "Infracțiuni contra persoanei",
        description: "Apărare în cauze de loviri, vătămare corporală, violență domestică, amenințare, șantaj, hărțuire și lipsire de libertate.",
        subServices: ["Loviri și alte violențe", "Vătămare corporală", "Violență domestică", "Amenințare și șantaj"],
        to: "/servicii/infractiuni-contra-persoanei",
        cta: "Vezi toate serviciile privind infracțiunile contra persoanei",
      },
      {
        title: "Malpraxis și neglijență profesională",
        description: "Reprezentare în cauze de neglijență profesională și malpraxis medical, inclusiv răspundere penală a personalului medical.",
        subServices: ["Malpraxis medical", "Neglijență profesională", "Neglijență în serviciu", "Răspundere penală medic"],
        to: "/servicii/neglijenta-profesionala-si-malpraxis",
        cta: "Vezi toate serviciile privind malpraxisul",
      },
      {
        title: "Accidente de muncă și răspundere penală SSM",
        description: "Consultanță și reprezentare în cauze de accidente de muncă, răspundere penală SSM și incidente mortale.",
        subServices: ["Accident de muncă", "Răspundere penală angajator", "Răspundere penală SSM", "Accident mortal de muncă"],
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
        subServices: ["Accident rutier", "Vătămare corporală", "Prejudicii", "Parte civilă"],
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
        subServices: ["Police questioning", "Prosecutor's office questioning", "Search", "DIICOT lawyer"],
        to: "/en/services/criminal-investigation",
        cta: "See all criminal investigation services",
      },
      {
        title: "Detention, arrest and preventive measures",
        description: "Rapid intervention in detention, judicial control, house arrest and pre-trial detention.",
        subServices: ["24-hour detention", "Pre-trial detention", "Judicial control", "House arrest"],
        to: "/en/services/preventive-measures",
        cta: "See all preventive measures services",
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
        subServices: ["Tax evasion", "Fraud and deception", "Embezzlement", "Forgery and use of forgery"],
        to: "/en/services/financial-crime",
        cta: "See all financial crime services",
      },
      {
        title: "Corruption and public office offenses",
        description: "Defense in bribery, influence peddling, abuse of office and other acts related to the exercise of public office.",
        subServices: ["Bribery", "Influence peddling", "Abuse of office"],
        to: "/en/services/corruption-and-public-office-offenses",
        cta: "See all corruption and public office services",
      },
      {
        title: "Money laundering, seizure and confiscation",
        description: "Advice and representation in money laundering cases, precautionary measures, seizure and extended confiscation.",
        subServices: ["Money laundering", "Asset seizure", "Confiscation"],
        to: "/en/services/money-laundering-and-asset-concealment",
        cta: "See all money laundering services",
      },
      {
        title: "Crypto and digital assets",
        description: "Investigations and defense in cases involving cryptocurrencies, blockchain, NFTs and smart contracts.",
        subServices: ["Crypto investigations", "Crypto fraud", "Blockchain"],
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
        subServices: ["Drug trafficking", "Possession for personal use", "DIICOT assistance", "Organized criminal group"],
        to: "/en/services/drug-offenses",
        cta: "See all drug offense services",
      },
      {
        title: "Road traffic offenses",
        description: "Defense in drunk driving, drug driving, hit-and-run, refusal of tests and accidents with victims.",
        subServices: ["Drunk driving", "Drug driving", "Hit-and-run", "Refusal of tests", "Accident with victims"],
        to: "/en/services/road-traffic-offenses",
        cta: "See all road traffic offense services",
      },
      {
        title: "Professional negligence and malpractice",
        description: "Representation in professional negligence and medical malpractice cases, including criminal liability of medical staff.",
        subServices: ["Medical malpractice", "Professional negligence", "Negligence in service", "Criminal liability of doctors"],
        to: "/en/services/professional-negligence-and-malpractice",
        cta: "See all malpractice services",
      },
      {
        title: "Workplace accidents and criminal liability",
        description: "Advice and representation in workplace accidents, OSH criminal liability and fatal incident cases.",
        subServices: ["Workplace accident", "Employer criminal liability", "OSH criminal liability", "Fatal workplace accident"],
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
        subServices: ["Road accident", "Bodily injury", "Damages", "Civil party"],
        to: "/en/services/victim-representation-in-criminal-cases",
        cta: "See all victim representation services",
      },
    ],
  },
];
