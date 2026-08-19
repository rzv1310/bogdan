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
        cta: "Vezi pagina de urmărire penală",
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
        cta: "Vezi pagina privind măsurile preventive",
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
        cta: "Vezi pagina de asistență la audiere",
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
        cta: "Vezi pagina privind percheziția domiciliară",
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
        cta: "Vezi pagina privind percheziția informatică",
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
        cta: "Vezi pagina de apărare în dosare DIICOT",
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
        cta: "Vezi pagina de apărare în dosare DNA",
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
          { label: "Evaziune fiscală", to: "/servicii/evaziune-fiscala" },
          { label: "Înșelăciune și fraudă", to: "/servicii/inselaciune-frauda" },
          { label: "Delapidare", to: "/servicii/delapidare" },
          { label: "Fals și uz de fals", to: "/servicii/fals-si-uz-de-fals" },
          { label: "Bancrută frauduloasă", to: "/servicii/bancruta-frauduloasa" },
          { label: "Fraudă informatică", to: "/servicii/frauda-informatica" },
          { label: "Fonduri europene", to: "/servicii/fonduri-europene" },
        ],
        to: "/servicii/criminalitate-economica",
        cta: "Vezi pagina de criminalitate economică",
      },
      {
        title: "Corupție și infracțiuni de serviciu",
        description: "Apărare în dosare de dare și luare de mită, trafic de influență, abuz în serviciu și alte fapte legate de funcția publică.",
        subServices: [
          { label: "Dare și luare de mită", to: "/servicii/dare-luare-de-mita" },
          { label: "Trafic de influență", to: "/servicii/trafic-de-influenta" },
          { label: "Abuz în serviciu", to: "/servicii/abuz-in-serviciu" },
          { label: "Neglijență în serviciu", to: "/servicii/neglijenta-in-serviciu" },
          { label: "Conflict de interese", to: "/servicii/conflict-de-interese" },
        ],
        to: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
        cta: "Vezi pagina privind corupția și funcția publică",
      },
      {
        title: "Spălare de bani, sechestru și confiscare",
        description: "Consultanță și reprezentare în dosare de spălare de bani, măsuri asigurătorii, sechestru și confiscare extinsă.",
        subServices: [
          { label: "Sechestru asigurător", to: "/servicii/sechestru-asigurator" },
          { label: "Confiscare", to: "/servicii/confiscare" },
        ],
        to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
        cta: "Vezi pagina privind spălarea de bani",
      },
      {
        title: "Crypto și active digitale",
        description: "Investigații și apărare în cauze privind criptomonede, blockchain, NFT și smart contracts.",
        subServices: [
          { label: "NFT" },
          { label: "Blockchain" },
        ],
        to: "/servicii/investigatii-privind-activele-cripto",
        cta: "Vezi pagina de investigații crypto",
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
          { label: "Deținere pentru consum propriu", to: "/servicii/detinere-droguri-consum-propriu" },
          { label: "Trafic internațional de droguri", to: "/servicii/trafic-international-de-droguri" },
          { label: "Grup infracțional organizat", to: "/servicii/grup-infractional-organizat" },
        ],
        to: "/servicii/cauze-penale-privind-droguri",
        cta: "Vezi pagina privind drogurile și DIICOT",
      },

      {
        title: "Infracțiuni rutiere",
        description: "Apărare în cauze de alcool sau droguri la volan, părăsirea locului accidentului, refuz probe și accidente cu victime.",
        subServices: [
          { label: "Alcool la volan", to: "/servicii/alcool-la-volan" },
          { label: "Droguri la volan", to: "/servicii/droguri-la-volan" },
          { label: "Părăsirea locului accidentului", to: "/servicii/parasirea-locului-accidentului" },
          { label: "Refuz prelevare probe biologice", to: "/servicii/refuz-prelevare-probe-biologice" },
          { label: "Conducere fără permis", to: "/servicii/conducere-fara-permis" },
          { label: "Accident rutier cu victime", to: "/servicii/accident-rutier-cu-victime" },
        ],

        to: "/servicii/infractiuni-rutiere-cu-victime",
        cta: "Vezi pagina privind infracțiunile rutiere",
      },
      {
        title: "Infracțiuni contra persoanei",
        description: "Apărare în cauze de loviri, vătămare corporală, violență domestică, amenințare, șantaj, hărțuire și lipsire de libertate.",
        subServices: [
          { label: "Loviri / Vătămare corporală", to: "/servicii/loviri-vatamare-corporala" },
          { label: "Violență domestică", to: "/servicii/violenta-domestica" },
          { label: "Lipsire de libertate / Amenințare", to: "/servicii/lipsire-de-libertate-amenintare" },
          { label: "Șantaj / Hărțuire", to: "/servicii/santaj-hartuire" },
          { label: "Viol / Agresiune sexuală", to: "/servicii/viol-agresiune-sexuala" },
          { label: "Omor / Ucidere din culpă", to: "/servicii/omor-ucidere-din-culpa" },
        ],
        to: "/servicii/infractiuni-contra-persoanei",
        cta: "Vezi pagina privind infracțiunile contra persoanei",
      },
      {
        title: "Malpraxis medical",
        description: "Reprezentare în cauze de neglijență profesională și malpraxis medical, inclusiv răspundere penală a personalului medical.",
        subServices: [
          { label: "Despăgubiri malpraxis medical", to: "/servicii/despagubiri-malpraxis-medical" },
          { label: "Răspundere penală medic", to: "/servicii/raspundere-penala-medic" },
          { label: "Comisia de malpraxis", to: "/servicii/comisia-de-malpraxis" },
          { label: "Vătămare corporală din culpă medicală", to: "/servicii/vatamare-corporala-din-culpa-medicala" },
          { label: "Ucidere din culpă medicală", to: "/servicii/ucidere-din-culpa-medicala" },
          { label: "Plângere Colegiul Medicilor", to: "/servicii/plangere-colegiul-medicilor" },
          { label: "Malpraxis stomatologic", to: "/servicii/malpraxis-stomatologic" },
        ],
        to: "/servicii/neglijenta-profesionala-si-malpraxis",
        cta: "Vezi pagina privind malpraxisul",
      },
      {
        title: "Accidente de muncă și răspundere penală SSM",
        description: "Consultanță și reprezentare în cauze de accidente de muncă, răspundere penală SSM și incidente mortale.",
        subServices: [
          { label: "Răspundere penală angajator" },
          { label: "Răspundere penală responsabil SSM" },
        ],
        to: "/servicii/raspundere-penala-incidente-locul-de-munca",
        cta: "Vezi pagina privind accidentele de muncă",
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
          { label: "Despăgubiri accident rutier", to: "/servicii/despagubiri-accident-rutier" },
          { label: "Despăgubiri vătămare corporală", to: "/servicii/despagubiri-vatamare-corporala" },
        ],
        to: "/servicii/reprezentarea-victimelor-in-procese-penale",
        cta: "Vezi pagina pentru victime",
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
        cta: "See the criminal investigation page",
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
        cta: "See the preventive measures page",
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
        cta: "See the questioning assistance page",
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
        cta: "See the home search page",
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
        cta: "See the computer search page",
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
        cta: "See the DIICOT defense page",
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
        cta: "See the DNA defense page",
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
          { label: "Tax evasion", to: "/en/services/tax-evasion" },
          { label: "Fraud and deception", to: "/en/services/fraud-and-deception" },
          { label: "Embezzlement", to: "/en/services/embezzlement" },
          { label: "Forgery and use of forgery", to: "/en/services/forgery-and-use-of-forgery" },
          { label: "Fraudulent bankruptcy", to: "/en/services/fraudulent-bankruptcy" },
          { label: "Computer fraud", to: "/en/services/computer-fraud" },
          { label: "EU funds", to: "/en/services/eu-funds-fraud" },
        ],
        to: "/en/services/financial-crime",
        cta: "See the financial crime page",
      },
      {
        title: "Corruption and public office offenses",
        description: "Defense in bribery, influence peddling, abuse of office and other acts related to the exercise of public office.",
        subServices: [
          { label: "Bribery", to: "/en/services/bribery-giving-and-taking" },
          { label: "Influence peddling", to: "/en/services/influence-peddling" },
          { label: "Abuse of office", to: "/en/services/abuse-of-office" },
          { label: "Negligence in office", to: "/en/services/negligence-in-office" },
          { label: "Conflict of interest", to: "/en/services/conflict-of-interest" },
        ],
        to: "/en/services/corruption-and-public-office-offenses",
        cta: "See the corruption and public office page",
      },
      {
        title: "Money laundering, seizure and confiscation",
        description: "Advice and representation in money laundering cases, precautionary measures, seizure and extended confiscation.",
        subServices: [
          { label: "Asset seizure", to: "/en/services/asset-freezing-order" },
          { label: "Confiscation", to: "/en/services/confiscation" },
        ],
        to: "/en/services/money-laundering-and-asset-concealment",
        cta: "See the money laundering page",
      },
      {
        title: "Crypto and digital assets",
        description: "Investigations and defense in cases involving cryptocurrencies, blockchain, NFTs and smart contracts.",
        subServices: [
          { label: "NFT" },
          { label: "Blockchain" },
        ],
        to: "/en/services/crypto-asset-investigations",
        cta: "See the crypto asset investigation page",
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
          { label: "Possession for personal use", to: "/en/services/drug-possession-personal-use" },
          { label: "International drug trafficking", to: "/en/services/international-drug-trafficking" },
          { label: "Organized criminal group", to: "/en/services/organized-crime-group" },
        ],
        to: "/en/services/drug-offenses",
        cta: "See the drug offense page",
      },

      {
        title: "Road traffic offenses",
        description: "Defense in drunk driving, drug driving, hit-and-run, refusal of tests and accidents with victims.",
        subServices: [
          { label: "Drunk driving", to: "/en/services/drunk-driving" },
          { label: "Drug driving", to: "/en/services/drug-driving" },
          { label: "Leaving the accident scene", to: "/en/services/leaving-the-accident-scene" },
          { label: "Refusal to provide biological samples", to: "/en/services/refusal-to-provide-biological-samples" },
          { label: "Driving without a licence", to: "/en/services/driving-without-a-licence" },
          { label: "Road accident with victims", to: "/en/services/road-accident-with-victims" },
        ],

        to: "/en/services/road-traffic-offenses",
        cta: "See the road traffic offense page",
      },
      {
        title: "Violent Crime Defense Lawyer",
        description: "Defense in cases of assault, bodily harm, domestic violence, threats, blackmail, harassment and unlawful deprivation of liberty.",
        subServices: [
          { label: "Assault / Bodily harm", to: "/en/services/assault-and-bodily-injury" },
          { label: "Domestic violence", to: "/en/services/domestic-violence" },
          { label: "Unlawful deprivation of liberty / Threats", to: "/en/services/unlawful-detention-and-threats" },
          { label: "Blackmail / Harassment", to: "/en/services/blackmail-and-harassment" },
          { label: "Rape / Sexual assault", to: "/en/services/rape-and-sexual-assault" },
          { label: "Murder / Manslaughter", to: "/en/services/homicide-and-manslaughter" },
        ],
        to: "/en/services/offenses-against-persons",
        cta: "See the Violent Crime Defense page",
      },
      {
        title: "Professional negligence and malpractice",
        description: "Representation in professional negligence and medical malpractice cases, including criminal liability of medical staff.",
        subServices: [
          { label: "Medical malpractice compensation", to: "/en/services/medical-malpractice-compensation" },
          { label: "Criminal liability of doctors", to: "/en/services/doctor-criminal-liability" },
          { label: "Malpractice committee", to: "/en/services/malpractice-committee" },
          { label: "Bodily injury from medical negligence", to: "/en/services/medical-negligence-bodily-injury" },
          { label: "Manslaughter from medical negligence", to: "/en/services/medical-negligence-manslaughter" },
          { label: "Complaint to the Medical College", to: "/en/services/complaint-college-of-physicians" },
          { label: "Dental malpractice", to: "/en/services/dental-malpractice" },
        ],
        to: "/en/services/professional-negligence-and-malpractice",
        cta: "See the malpractice page",
      },
      {
        title: "Workplace accidents and criminal liability",
        description: "Advice and representation in workplace accidents, OSH criminal liability and fatal incident cases.",
        subServices: [
          { label: "Employer criminal liability" },
          { label: "OSH officer criminal liability" },
        ],
        to: "/en/services/workplace-criminal-liability",
        cta: "See the workplace liability page",
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
          { label: "Car Accident Lawyer", to: "/en/services/road-accident-compensation" },
          { label: "Bodily injury compensation", to: "/en/services/bodily-injury-compensation" },
        ],
        to: "/en/services/victim-representation-in-criminal-cases",
        cta: "See the victim representation page",
      },
    ],
  },
];
