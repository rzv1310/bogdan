import type { SubServicePageData } from "@/components/services/SubServicePage";

const CPP = "https://legislatie.just.ro/Public/DetaliiDocument/185907";
const CP = "https://legislatie.just.ro/Public/DetaliiDocument/223635";
const PARENT = {
  to: "/en/services/criminal-investigation",
  label: "criminal investigation",
  breadcrumbLabel: "Criminal investigation",
};
const BIO_INTRO = "I am Bogdan Lamatic, attorney with the Bucharest Bar and more than 18 years of experience in criminal law.";
const LEGAL500 = "I am recognised by Legal 500 as a Next Generation Partner (White-Collar Crime).";
const CONTACT =
  "Tell me in a few sentences what happened and I will tell you concretely what the next steps are. The first assessment discussion is free.";

export const policeProsecutorQuestioningEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/police-prosecutor-questioning",
  altPath: "/servicii/audiere-politie-parchet",
  roPath: "/servicii/audiere-politie-parchet",
  title: "Police Questioning Lawyer Bucharest | Bogdan Lamatic",
  h1: "Police Questioning Lawyer Bucharest - Present at Your Statement | Bogdan Lamatic",
  description:
    "Police and prosecutor questioning lawyer in Bucharest - assistance with your statement, as suspect or defendant. 18+ years of experience. Call now!",
  keywords:
    "police questioning lawyer bucharest, prosecutor questioning lawyer, suspect statement lawyer, defendant questioning lawyer",
  breadcrumbLabel: "Police and prosecutor questioning",
  serviceName: "Police and prosecutor questioning lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Have you received a summons or a phone call for questioning?",
    "What you say and how you say it at that moment matters more than it seems.",
    "Do not go alone - call me before the hearing so we prepare your statement together.",
  ],
  bio: [
    `${BIO_INTRO} I assist people summoned for questioning - as suspect, defendant or witness - at the Police, the Prosecutor's Office, the DNA or the DIICOT.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What I do for you",
      bullets: [
        "I prepare your statement together with you, before the hearing, based on the available documents and information.",
        "I am physically present at the hearing, with the right to consult with you before and during it (Article 109 of the Criminal Procedure Code).",
        "I advise you on the right to remain silent, which you may exercise at any time with no adverse consequences (Articles 78 and 83 of the Criminal Procedure Code).",
        "I check how the statement is recorded before you sign it, so the written record reflects exactly what you said (Article 110 of the Criminal Procedure Code).",
        "I raise objections or file requests if the hearing does not respect your procedural rights.",
      ],
      cta: "I need a lawyer!",
    },
    {
      h2: "Why a lawyer matters from the very first hearing",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "Questioning is an act of " },
          { text: "the criminal investigation phase", to: "/en/services/criminal-investigation" },
          { text: ", and the statement you give now stays in the file." },
        ],
      ],
      bullets: [
        "Before the hearing, the judicial body must tell you in which capacity you are being questioned and what your rights are (Article 108 of the Criminal Procedure Code) - but few people know what that means in practice.",
        "A statement given without preparation can be used against you throughout the whole case.",
        "The difference between being questioned as a witness and as a suspect is essential - and the switch from one to the other can happen during the hearing itself.",
      ],
    },
    {
      h2: "Situations where I intervene most often",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Questioning is often only the first step of a case that continues with searches, seizure of devices or proposals for preventive measures.",
      ],
      bullets: [
        "Summons to the Police or the Prosecutor's Office, as suspect or witness.",
        "Questioning after a home search or a computer search.",
        "Questioning in cases handled by the DIICOT or the DNA.",
        "Questioning followed by a proposal for a preventive measure.",
      ],
    },
  ],
  faq: [
    {
      q: "Am I obliged to attend the hearing?",
      a: "Yes, in principle attendance is mandatory. Call me before the set date so we can prepare your statement.",
    },
    {
      q: "Can I refuse to give a statement?",
      a: "Yes, the suspect and the defendant have the right to remain silent, with no adverse consequences (Articles 78 and 83 of the Criminal Procedure Code).",
    },
    {
      q: "What is the difference between being questioned as a witness and as a suspect?",
      a: "As a witness you are obliged to tell the truth; as a suspect or defendant you have the right to silence and to a lawyer. The capacity in which you are questioned must be clearly communicated to you at the start.",
    },
    {
      q: "How much does assistance at a hearing cost?",
      a: "It depends on urgency and complexity. I offer a first free assessment discussion. Call +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "Criminal Procedure Code - questioning of persons, rights of the suspect and defendant (Articles 78, 83, 108-111).",
      href: CPP,
      linkLabel: "Legislative Portal",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const homeSearchEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/home-search",
  altPath: "/servicii/perchezitie-domiciliara",
  roPath: "/servicii/perchezitie-domiciliara",
  title: "Home Search Lawyer Bucharest | Bogdan Lamatic",
  h1: "Home Search Lawyer Bucharest - Beside You During the Search | Bogdan Lamatic",
  description:
    "Home search lawyer Bucharest - I check the legality of the warrant and assist you during the search itself. Call now!",
  keywords: "home search lawyer, search warrant lawyer bucharest",
  breadcrumbLabel: "Home search",
  serviceName: "Home search lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Is a search about to happen, or has it already taken place?",
    "Ask to see the search warrant and call me immediately.",
    "I can be present or guide you by phone, step by step, while the search is being carried out.",
  ],
  bio: [
    `${BIO_INTRO} I intervene quickly in the case of a home search - at your home or at your company premises - to check the legality of the warrant and to make sure the procedure is followed correctly.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What I do for you",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "I check the legality of the warrant issued by the judge for rights and liberties and the conditions under which the search was ordered (Articles 157-158 of the Criminal Procedure Code).",
        "I am present or guide you by phone throughout the search, to protect your rights.",
        "I verify compliance with the legal hours - a home search cannot start before 6:00 or after 20:00, with limited exceptions provided by law (Article 159 of the Criminal Procedure Code).",
        "I analyse the search record and the items seized, in order to identify any irregularities.",
        "Where appropriate, I file challenges or requests regarding the way the search was carried out.",
      ],
      cta: "I need a lawyer!",
    },
    {
      h2: "What you should know during a search",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "You have the right to be present, or to have a representative or an adult family member present.",
        "You can ask for your lawyer from this very moment - the judicial bodies must let you make contact.",
        "A copy of the search record must be left with the searched person.",
      ],
    },
    {
      h2: "What happens after the search",
      paragraphs: [
        [
          { text: "A home search is ordered " },
          { text: "within the criminal investigation stage", to: "/en/services/criminal-investigation" },
          { text: "." },
        ],
        "A search is usually followed by questioning and, in more serious cases, by a proposal for a preventive measure. If your phone or laptop was seized, the procedure continues with a computer search of the data.",
      ],
    },
  ],
  faq: [
    { q: "Can I ask to see the search warrant?", a: "Yes, you have this right - check who issued it and for what purpose." },
    {
      q: "At what time can a home search start?",
      a: "Only between 6:00 and 20:00, except in cases of flagrant offense or premises open to the public at that hour (Article 159 of the Criminal Procedure Code).",
    },
    {
      q: "Can I call a lawyer during the search itself?",
      a: "Yes, call me immediately - I can guide you by phone or travel to the location, depending on the situation.",
    },
    {
      q: "What happens if the search did not comply with the law?",
      a: "I can file challenges and requests regarding the legality of the evidence obtained in this way.",
    },
  ],
  resources: [
    {
      text: "Criminal Procedure Code - home search (Articles 157-159).",
      href: CPP,
      linkLabel: "Legislative Portal",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const computerSearchEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/computer-search",
  altPath: "/servicii/perchezitie-informatica",
  roPath: "/servicii/perchezitie-informatica",
  title: "Computer Search Lawyer Bucharest | Bogdan Lamatic",
  h1: "Computer Search Lawyer Bucharest - Phone, Laptop, Seized Data | Bogdan Lamatic",
  description:
    "Computer search lawyer Bucharest - phone, laptop or data seized in a criminal case. 18+ years of experience. Call now!",
  keywords: "computer search lawyer, phone seizure lawyer, laptop seizure, digital data seizure",
  breadcrumbLabel: "Computer search",
  serviceName: "Computer search lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Have your phone, laptop or other devices been seized?",
    "Call me as soon as possible.",
    "The moment of the seizure and the way the data is copied can be decisive for your case.",
  ],
  bio: [
    `${BIO_INTRO} I intervene when your phone, laptop or other data storage devices are seized or searched in a criminal case.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What I do for you",
      bullets: [
        "I check the legality of the computer search ordered by the judge for rights and liberties at the prosecutor's request (Article 168 of the Criminal Procedure Code).",
        "I am present or assist you regarding the seizure of the phone, laptop or other data storage media.",
        "I check whether the search was carried out by a specialist, in your presence as suspect or defendant, as required by law (Article 168 paragraphs 11-12 of the Criminal Procedure Code).",
        "I analyse the computer search record - which data was copied, extracted or retained.",
        "I file requests for the return of the devices or for limiting the extracted data, where the law allows it.",
      ],
      cta: "I need a lawyer!",
    },
    {
      h2: "What you should know about a computer search",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "A computer search is an evidence-gathering procedure used in " },
          { text: "the stages of the criminal investigation", to: "/en/services/criminal-investigation" },
          { text: "." },
        ],
      ],
      bullets: [
        "Under certain conditions the law allows copies of the data to be made instead of physically seizing the device, if the seizure would seriously affect the person's activity (Article 168 paragraph 10 of the Criminal Procedure Code).",
        "The search of the data itself must be carried out by a specialist, not only by the investigating body.",
        "You have the right to be present at the search of the computer system or storage medium.",
      ],
    },
    {
      h2: "Cases where it appears most often",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Computer searches are frequent in economic crime cases, online fraud, and DIICOT or DNA files, where the data from a phone or laptop becomes the main evidence.",
      ],
    },
  ],
  faq: [
    {
      q: "Can I get my phone or laptop back?",
      a: "It depends on the stage of the case; I file requests for the return of the device when it is no longer needed as evidence.",
    },
    {
      q: "What data can be copied from a phone or laptop?",
      a: "Only data relevant to the case, and the search must be carried out by a specialist, under the conditions established by law.",
    },
    {
      q: "Can I ask to be present when the data is extracted?",
      a: "Yes, you have this right when the search is carried out on your device.",
    },
    {
      q: "What should I do if my phone was seized without a warrant?",
      a: "Call me immediately - I will check whether the seizure complied with the legal conditions.",
    },
  ],
  resources: [
    {
      text: "Criminal Procedure Code - computer search and access to a computer system (Article 168).",
      href: CPP,
      linkLabel: "Legislative Portal",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const diicotLawyerEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/diicot-lawyer",
  altPath: "/servicii/avocat-diicot",
  roPath: "/servicii/avocat-diicot",
  title: "DIICOT Lawyer Bucharest | Bogdan Lamatic",
  h1: "DIICOT Lawyer Bucharest - Defense in Organised Crime Cases | Bogdan Lamatic",
  description:
    "DIICOT lawyer Bucharest - defense in organised crime, terrorism and human trafficking cases. 18+ years of experience. Call now!",
  keywords: "diicot lawyer bucharest, diicot case lawyer, diicot investigation lawyer",
  breadcrumbLabel: "DIICOT lawyer",
  serviceName: "DIICOT lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "A DIICOT case is not an ordinary criminal case.",
    "DIICOT prosecutors work on complex cases, often with several defendants, wiretaps and simultaneous searches, and the preventive measures proposed are frequently the most severe ones.",
    "That is why the intervention of a lawyer with specific experience before this structure matters enormously.",
  ],
  bio: [
    `${BIO_INTRO} I represent people investigated by the DIICOT (Directorate for Investigating Organised Crime and Terrorism), regardless of the specific offense that is the subject of the case.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What the DIICOT is and what it investigates",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "A DIICOT file follows " },
          { text: "the same stages of the criminal investigation", to: "/en/services/criminal-investigation" },
          { text: ", with a much larger volume of evidence." },
        ],
        "The DIICOT is a specialised structure within the Prosecutor's Office attached to the High Court of Cassation and Justice, set up by Government Emergency Ordinance no. 78/2016, with competence in particular for:",
      ],
      bullets: [
        "organised crime (acts committed within an organised criminal group, Article 367 of the Criminal Code);",
        "terrorism and the financing of terrorist acts;",
        "human trafficking (Articles 210-211 of the Criminal Code);",
        "trafficking in high-risk and risk drugs, cybercrime, arms trafficking;",
        "money laundering, when connected to an offense within the DIICOT's competence.",
      ],
      cta: "I need a lawyer!",
    },
    {
      h2: "What I do for you in a DIICOT case",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "I analyse the case documents I have access to and check the legality of the evidence (wiretaps, searches, technical surveillance).",
        "I defend you at hearings and, where necessary, before the judge for rights and liberties, where the DIICOT frequently proposes severe preventive measures.",
        "I challenge preventive measures and file requests for their replacement, when there is a legal basis.",
        "I coordinate the defense in cases with several defendants, where the strategy must be constantly adapted.",
      ],
      cta: "I need a lawyer!",
    },
  ],
  faq: [
    {
      q: "Why are DIICOT cases different from ordinary ones?",
      a: "Because they usually target organised criminal groups, involve several defendants and large volumes of evidence (wiretaps, searches), and the prosecutors are specialised in such cases.",
    },
    {
      q: "Which offenses fall within the DIICOT's competence?",
      a: "Organised crime, terrorism, human trafficking, drug trafficking, cybercrime and related money laundering, under Government Emergency Ordinance 78/2016.",
    },
    {
      q: "Can the DIICOT's competence be challenged in a case?",
      a: "Yes, if the offense does not fall within the material competence of the directorate, this can be challenged through the specific procedural remedies.",
    },
    {
      q: "How much does defense in a DIICOT case cost?",
      a: "It depends on the complexity of the case. I offer a first free assessment discussion. Call +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "Government Emergency Ordinance no. 78/2016 on the organisation of the DIICOT, including its material competence.",
      href: CPP,
      linkLabel: "Legislative Portal",
    },
    { text: "Criminal Code - organised criminal group (Article 367).", href: CP, linkLabel: "Legislative Portal" },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

export const dnaLawyerEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/dna-lawyer",
  altPath: "/servicii/avocat-dna",
  roPath: "/servicii/avocat-dna",
  title: "DNA Lawyer Bucharest | Bogdan Lamatic",
  h1: "DNA Lawyer Bucharest - Defense in Corruption Cases | Bogdan Lamatic",
  description:
    "DNA lawyer Bucharest - defense in corruption cases handled by the National Anticorruption Directorate. 18+ years of experience. Call now!",
  keywords: "dna lawyer, dna case lawyer bucharest",
  breadcrumbLabel: "DNA lawyer",
  serviceName: "DNA lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "A DNA case almost always carries professional and reputational stakes, besides the criminal ones.",
    "Public officials, local elected representatives, business people or employees with decision-making roles frequently end up in such cases.",
    "The reaction in the first stage, including at questioning or during a possible search, directly influences how the case develops.",
  ],
  bio: [
    `${BIO_INTRO} I defend clients in cases handled by the National Anticorruption Directorate (DNA).`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What the DNA is and when it has competence",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "DNA files follow " },
          { text: "the general rules of the criminal investigation", to: "/en/services/criminal-investigation" },
          { text: "." },
        ],
        "The DNA is the prosecutor's office specialised in fighting medium and high-level corruption, set up by Government Emergency Ordinance no. 43/2002. It has competence, among others, when:",
      ],
      bullets: [
        "the value of the sum or asset forming the object of the corruption offense (bribery, influence peddling) exceeds the equivalent of 10,000 euro;",
        "the material damage caused by an act assimilated to corruption exceeds the equivalent of 200,000 euro;",
        "the act is committed by certain categories of persons (members of Parliament, members of the Government, judges, prosecutors, mayors, other officials with management or control duties), regardless of the value of the damage.",
      ],
      cta: "I need a lawyer!",
    },
    {
      h2: "What I do for you in a DNA case",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "I analyse the case documents and check whether the DNA's competence conditions are met in your case.",
        "I assist you at hearings, including at possible searches or seizures of documents from the institution's or company's premises.",
        "I build defenses regarding the legal classification - many alleged acts of abuse of office or conflict of interest raise technical issues about competence and the elements of the offense.",
        "I challenge preventive measures when they are proposed, as well as requests for precautionary seizure of assets.",
      ],
      cta: "I need a lawyer!",
    },
  ],
  faq: [
    {
      q: "Which value thresholds trigger the DNA's competence?",
      a: "10,000 euro for the object of corruption offenses (bribery, influence peddling) and 200,000 euro for the damage caused by assimilated acts, under Government Emergency Ordinance 43/2002.",
    },
    {
      q: "Does the DNA only have competence over public officials?",
      a: "No, it can also have competence regardless of the person's capacity, when the value thresholds above are exceeded.",
    },
    {
      q: "What happens if I am accused of abuse of office?",
      a: "I check whether the act falls within the DNA's competence (the threshold of 200,000 euro of damage, or 1,000,000 euro as the case may be) and build the defense around the concrete elements of the file.",
    },
    {
      q: "How much does defense in a DNA case cost?",
      a: "It depends on the complexity of the case. I offer a first free assessment discussion. Call +40 (31) 632 01 83.",
    },
  ],
  resources: [
    {
      text: "Government Emergency Ordinance no. 43/2002 on the National Anticorruption Directorate, including material competence and value thresholds.",
      href: CPP,
      linkLabel: "Legislative Portal",
    },
    {
      text: "Law no. 78/2000 on preventing, discovering and sanctioning acts of corruption.",
      href: CPP,
      linkLabel: "Legislative Portal",
    },
  ],
  contactText: CONTACT,
  parent: PARENT,
};

const PARENT_MP_EN = {
  to: "/en/services/preventive-measures",
  label: "preventive measures",
  breadcrumbLabel: "Preventive measures",
};

export const policeCustody24HoursEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/police-custody-24-hours",
  altPath: "/servicii/retinere-24-ore",
  roPath: "/servicii/retinere-24-ore",
  title: "Police Custody Lawyer Bucharest - 24 Hours | Bogdan Lamatic",
  h1: "Police Custody Lawyer Bucharest - 24 Hours Detention | Bogdan Lamatic",
  description:
    "Police custody lawyer in Bucharest - immediate assistance during the 24-hour detention, at questioning and for the measure that follows. 18+ years of experience.",
  keywords: "police custody lawyer bucharest, 24 hours detention lawyer, urgent criminal lawyer bucharest",
  breadcrumbLabel: "Police custody 24 hours",
  serviceName: "Police custody lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Have you been detained, or is someone close to you at the police station or prosecutor's office?",
    "Police custody is a preventive measure involving deprivation of liberty and may be ordered for no more than 24 hours.",
    "Questioning and other procedural acts that influence the next preventive measure can take place within this interval.",
  ],
  bio: [
    `${BIO_INTRO} I intervene in custody situations, at the request of the detained person or of the family.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What I do for you during police custody",
      bullets: [
        "I provide immediate legal advice based on the available information.",
        "I assist you at questioning and prepare your procedural position with you.",
        "I analyse the procedural situation and the documents the defence has access to.",
        "I check the lawfulness of the measure and how the statements are recorded.",
        "I prepare the defence for a possible request for pre-trial detention, judicial control or house arrest.",
        "I communicate with the family, within the limits of the mandate and of confidentiality.",
      ],
      paragraphs: [
        "Anticipating the next step matters. If there is a risk of a pre-trial detention request, the defence should be prepared before that hearing, not after the decision is delivered.",
      ],
      cta: "Custody was ordered - Call now",
    },
    {
      h2: "What to tell me when you call about a detention",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["If the detained person is a family member or someone close to you, you can contact me as well. Tell me:"],
      bullets: [
        "the name of the person;",
        "where the person is;",
        "which police station, prosecutor's office or structure the person was taken to;",
        "when the detention took place;",
        "what information you have received so far;",
        "whether you know when the questioning or the hearing before the judge takes place.",
      ],
      callout: "You do not need to have all the documents in order to contact me.",
    },
    {
      h2: "What happens after the 24 hours",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Police custody can be ordered for no more than 24 hours, under the conditions set by the Criminal Procedure Code.",
        "Once the 24 hours expire, the person cannot be held further on the basis of the same custody measure.",
        [
          { text: "Depending on the case, " },
          { text: "another preventive measure", to: "/en/services/preventive-measures" },
          { text: " may come into discussion, which is why the defence strategy should be analysed before the next decision." },
        ],
      ],
      links: [
        { label: "Pre-trial detention - request, appeal and replacement", to: "/en/services/pre-trial-detention" },
        { label: "Judicial control - obligations, appeal and revocation", to: "/en/services/judicial-control" },
        { label: "House arrest - appeal, permissions and replacement", to: "/en/services/house-arrest" },
        { label: "Police and prosecutor questioning lawyer", to: "/en/services/police-prosecutor-questioning" },
      ],
    },
  ],
  faq: [
    {
      q: "How long can police custody last?",
      a: "It can be ordered for no more than 24 hours. After that interval the person cannot be held further on the basis of the same measure; a different preventive measure requires its own procedure.",
    },
    {
      q: "Who can order police custody?",
      a: "During the criminal investigation it can be ordered by the criminal investigation body or by the prosecutor, under the conditions of the Criminal Procedure Code.",
    },
    {
      q: "Do I have the right to a lawyer during custody?",
      a: "Yes. A suspect or defendant has the right to a lawyer and may consult with the lawyer before and during questioning, under the conditions of the law.",
    },
    {
      q: "Can the family contact the lawyer?",
      a: "Yes. Very often the first person to look for a lawyer is a family member. It helps to know who was detained, where the person is, when it happened and which authority handles the case.",
    },
    {
      q: "What happens if I do not react in the first hours?",
      a: "Acts carried out in this interval, including statements, can remain relevant later, and the defence regarding the next preventive measure is better prepared before the hearing.",
    },
  ],
  resources: [
    { text: "Art. 202 of the Criminal Procedure Code - purpose and general conditions of preventive measures.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 209 of the Criminal Procedure Code - police custody.", href: CPP, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_MP_EN,
};

export const preTrialDetentionEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/pre-trial-detention",
  altPath: "/servicii/arest-preventiv",
  roPath: "/servicii/arest-preventiv",
  title: "Pre-Trial Detention Lawyer Bucharest | Bogdan Lamatic",
  h1: "Pre-Trial Detention Lawyer Bucharest | Bogdan Lamatic",
  description:
    "Pre-trial detention lawyer in Bucharest - defence against the prosecutor's request, appeals, extensions and replacement of the measure. 18+ years of experience.",
  keywords: "pre-trial detention lawyer bucharest, arrest appeal lawyer romania, criminal detention lawyer",
  breadcrumbLabel: "Pre-trial detention",
  serviceName: "Pre-trial detention lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Is the prosecutor requesting pre-trial detention, or has the measure already been ordered?",
    "Pre-trial detention is the most severe preventive measure provided by the Criminal Procedure Code.",
    "The defence must be built around the concrete reasons invoked, the evidence in the file and the possibility of a less severe measure.",
  ],
  bio: [
    `${BIO_INTRO} I have represented clients before the judge of rights and liberties, the preliminary chamber judge and the courts in cases involving deprivation of liberty.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What I analyse when detention is requested",
      bullets: [
        "the concrete reasons invoked for the arrest;",
        "the general conditions of preventive measures;",
        "the special conditions of pre-trial detention;",
        "the relevant available evidence;",
        "whether the procedural risks invoked actually exist;",
        "personal, family and professional circumstances;",
        "the proportionality of the measure;",
        "the possibility of applying a less severe measure.",
      ],
      paragraphs: [
        "Depending on the case, the aim of the defence can be the rejection of the request, judicial control, house arrest or another solution permitted by law.",
      ],
      cta: "Detention is being requested - Call now",
    },
    {
      h2: "How long pre-trial detention can last",
      paragraphs: [
        "Pre-trial detention is the most severe of the preventive measures regulated by the Criminal Procedure Code.",
        "During the criminal investigation the measure can be ordered initially for no more than 30 days, and extensions are subject to the conditions and limits set by law. The total duration in this phase cannot exceed 180 days.",
        "The regime applicable in the preliminary chamber and during trial is distinct and involves periodic verification of the measure.",
      ],
    },
    {
      h2: "If the measure has already been ordered",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "The fact that detention was ordered does not mean the analysis of the defence is over. Depending on the stage of the case, the appeal, the extension, the periodic verification, the revocation or the replacement with " },
          { text: "a lighter measure", to: "/en/services/preventive-measures" },
          { text: " can become relevant:" },
        ],
      ],
      bullets: [
        "the appeal against the decision;",
        "the defence against the extension of the measure;",
        "the periodic verification of the measure;",
        "revocation;",
        "replacement with a less severe preventive measure.",
      ],
      callout:
        "The Criminal Procedure Code allows revocation when the grounds that determined the measure have ceased or new circumstances have appeared, and also regulates replacement with a lighter measure when the legal conditions are met.",
      cta: "The measure was ordered - Check your options",
    },
    {
      h2: "Appeal deadlines",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Deadlines are very short in this area. For appeals under art. 204-206 of the Criminal Procedure Code the deadline is 48 hours from delivery or, as the case may be, from communication.",
        "If you already have the court decision, tell me the exact date and hour when it was delivered or communicated.",
      ],
      links: [
        { label: "Judicial control - obligations, appeal and revocation", to: "/en/services/judicial-control" },
        { label: "House arrest - appeal, permissions and replacement", to: "/en/services/house-arrest" },
        { label: "Police custody 24 hours - what to do immediately", to: "/en/services/police-custody-24-hours" },
      ],
    },
  ],
  faq: [
    {
      q: "How long can pre-trial detention last?",
      a: "During the criminal investigation it can be ordered initially for up to 30 days and extended under the conditions of the law, without the total duration in this phase exceeding 180 days. The regime in the other stages of the proceedings is distinct.",
    },
    {
      q: "Who can order pre-trial detention?",
      a: "It falls within the competence of the judge or the court, depending on the procedural stage. The prosecutor may file the request but cannot order the measure.",
    },
    {
      q: "How is pre-trial detention challenged?",
      a: "Through an appeal against the decision by which the measure was taken, extended or maintained, under art. 204-206 of the Criminal Procedure Code, within the 48-hour deadline.",
    },
    {
      q: "Can detention be replaced with a lighter measure?",
      a: "Yes, if the conditions of art. 242 of the Criminal Procedure Code are met. The grounds of the measure, the evolution of the case and the procedural conduct must be analysed concretely. No outcome can be guaranteed.",
    },
    {
      q: "What can be done before an extension hearing?",
      a: "The defence can be prepared in advance by analysing the invoked grounds, the evidence gathered in the meantime and any relevant new circumstances.",
    },
  ],
  resources: [
    { text: "Art. 202 of the Criminal Procedure Code - general conditions of preventive measures.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 223 and following of the Criminal Procedure Code - pre-trial detention.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 204-206 of the Criminal Procedure Code - appeals regarding preventive measures.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 241-242 of the Criminal Procedure Code - cessation, revocation and replacement.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_MP_EN,
};

export const judicialControlEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/judicial-control",
  altPath: "/servicii/control-judiciar",
  roPath: "/servicii/control-judiciar",
  title: "Judicial Control Lawyer Bucharest | Bogdan Lamatic",
  h1: "Judicial Control Lawyer Bucharest | Bogdan Lamatic",
  description:
    "Judicial control lawyer in Bucharest - obligations, appeals, changing restrictions, revocation and replacement, including judicial control on bail.",
  keywords: "judicial control lawyer bucharest, judicial control on bail romania, bail lawyer romania",
  breadcrumbLabel: "Judicial control",
  serviceName: "Judicial control lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Do you have restrictions on travel, on contact with certain people or on your professional activity?",
    "Judicial control does not involve detention, but it can have a real impact on daily life.",
    "It must be assessed whether the obligations are necessary and proportionate and whether there are grounds to change, revoke or replace the measure.",
  ],
  bio: [
    `${BIO_INTRO} I analyse the obligations imposed through judicial control and the procedural options for changing them.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What obligations judicial control can involve",
      paragraphs: ["The content of judicial control is regulated by art. 215 of the Criminal Procedure Code. Depending on the case, obligations may concern:"],
      bullets: [
        "appearing before the judicial body;",
        "reporting to the police unit in charge of supervision;",
        "notifying any change of residence;",
        "travelling only within certain territorial limits;",
        "contact with certain persons;",
        "carrying out certain activities, where such an obligation is imposed under the law;",
        "other obligations permitted by law.",
      ],
      callout: "The exact obligations must be checked in the document by which the measure was ordered.",
    },
    {
      h2: "What I analyse in a judicial control case",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Judicial control does not involve deprivation of liberty, but it imposes obligations that must be observed throughout the measure.",
        "The fact that an obligation was imposed does not mean it must remain unchanged regardless of how the case evolves. I analyse whether:",
      ],
      bullets: [
        "the measure is still necessary;",
        "the obligations are proportionate;",
        "new circumstances have appeared;",
        "certain restrictions can be modified;",
        "there are grounds for revoking or replacing the measure.",
      ],
      cta: "Review my judicial control obligations",
    },
    {
      h2: "Judicial control on bail",
      paragraphs: [
        "Judicial control on bail is regulated separately by the Criminal Procedure Code and requires, in addition to the obligations of judicial control, the payment of bail under the conditions set by law.",
        [
          { text: "In such a situation I analyse, as the case may be, the conditions of the measure, its suitability compared with other measures, the obligations imposed, the bail, the relevant financial situation and the possibility of using " },
          { text: "a non-custodial measure", to: "/en/services/preventive-measures" },
          { text: " instead of a more severe one, where the legal framework and the facts support that argument." },
        ],
      ],
    },
    {
      h2: "Challenging the measure and the deadlines",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "There is a specific remedy against the prosecutor's order imposing judicial control, regulated by art. 213 of the Criminal Procedure Code. For court decisions on preventive measures, art. 204-206 apply, with the 48-hour deadline.",
        "Send me the order or the court decision, the obligations imposed, the date the measure was taken or extended and the concrete problem one of the obligations creates for you.",
      ],
      links: [
        { label: "House arrest - appeal, permissions and replacement", to: "/en/services/house-arrest" },
        { label: "Pre-trial detention - request, appeal and replacement", to: "/en/services/pre-trial-detention" },
        { label: "Police custody 24 hours - what to do immediately", to: "/en/services/police-custody-24-hours" },
      ],
    },
  ],
  faq: [
    {
      q: "What obligations can be imposed through judicial control?",
      a: "The obligations provided by art. 215 of the Criminal Procedure Code, which may include appearing before the judicial body or the police, notifying a change of residence, territorial restrictions, restrictions on contact with certain persons and, under the law, restrictions on certain activities.",
    },
    {
      q: "Does judicial control mean deprivation of liberty?",
      a: "No. The person remains free but must comply with the obligations set by the competent judicial body.",
    },
    {
      q: "How do I challenge judicial control ordered by the prosecutor?",
      a: "Through the specific remedy regulated by art. 213 of the Criminal Procedure Code. Deadlines are short, so it helps to tell me exactly when the order was communicated to you.",
    },
    {
      q: "Can the obligations be changed during the case?",
      a: "Yes, where there are legal grounds. Modification of the obligations, revocation or replacement of the measure can be requested depending on how the case evolves and on new circumstances.",
    },
    {
      q: "What is judicial control on bail?",
      a: "It is a distinct preventive measure which requires, in addition to the obligations of judicial control, the payment of bail under the conditions set by law.",
    },
  ],
  resources: [
    { text: "Art. 211-215 of the Criminal Procedure Code - judicial control.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 216-217 of the Criminal Procedure Code - judicial control on bail.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 213 of the Criminal Procedure Code - remedy against judicial control ordered by the prosecutor.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 242 of the Criminal Procedure Code - revocation and replacement of preventive measures.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_MP_EN,
};

export const houseArrestEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/house-arrest",
  altPath: "/servicii/arest-la-domiciliu",
  roPath: "/servicii/arest-la-domiciliu",
  title: "House Arrest Lawyer Bucharest | Bogdan Lamatic",
  h1: "House Arrest Lawyer Bucharest | Bogdan Lamatic",
  description:
    "House arrest lawyer in Bucharest - appeals, requests to leave the premises, revocation and replacement of the measure. 18+ years of experience.",
  keywords: "house arrest lawyer bucharest, house arrest romania appeal, criminal lawyer house arrest",
  breadcrumbLabel: "House arrest",
  serviceName: "House arrest lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you under house arrest, or is this measure about to be discussed?",
    "House arrest is a preventive measure involving deprivation of liberty, executed in the premises set by the judicial body.",
    "Depending on the situation, challenging the measure, replacing it with a less severe one or requesting permission to leave the premises can be analysed.",
  ],
  bio: [
    `${BIO_INTRO} I assist clients both before the measure is taken and after it has been ordered.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "How long house arrest can last",
      paragraphs: [
        [
          { text: "House arrest is one of the " },
          { text: "preventive measures involving deprivation of liberty", to: "/en/services/preventive-measures" },
          { text: "." },
        ],
        "During the criminal investigation it can be ordered for no more than 30 days, with the possibility of extension under the conditions of the law, and the maximum duration in this phase is 180 days.",
        "The person must remain in the premises where the measure is executed and comply with the obligations imposed, with the exceptions permitted by law or approved by the competent judicial body.",
      ],
    },
    {
      h2: "What I do for you in a house arrest case",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "I prepare the defence against the measure when you contact me before the hearing;",
        "I analyse the available remedy;",
        "I request replacement with a less severe measure where there are grounds;",
        "I analyse the possibility of revocation;",
        "I file requests to leave the premises where there is a justified reason and the legal conditions are met.",
      ],
      paragraphs: [
        "Situations concerning professional activity, medical treatment or other well-justified personal circumstances can become relevant. Each request must be analysed individually.",
      ],
      cta: "I am under house arrest - Check my options",
    },
    {
      h2: "What I check if the measure has already been ordered",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "whether a remedy is available;",
        "whether the measure is still necessary;",
        "whether it can be replaced with a less severe one;",
        "whether new circumstances have appeared;",
        "whether a request to temporarily leave the premises is needed in a situation permitted by law.",
      ],
      callout: "Send me the court decision and explain the concrete problem the measure creates for you.",
      links: [
        { label: "Judicial control - obligations, appeal and revocation", to: "/en/services/judicial-control" },
        { label: "Pre-trial detention - request, appeal and replacement", to: "/en/services/pre-trial-detention" },
        { label: "Police custody 24 hours - what to do immediately", to: "/en/services/police-custody-24-hours" },
      ],
    },
  ],
  faq: [
    {
      q: "How long can house arrest last?",
      a: "During the criminal investigation it can be taken for up to 30 days, with the possibility of extension under the law, and the maximum duration in this phase is 180 days.",
    },
    {
      q: "Who can order house arrest?",
      a: "The measure falls within the competence of the judge or the court, depending on the procedural stage and the applicable procedure.",
    },
    {
      q: "Can I leave the premises for work or medical treatment?",
      a: "In the situations and under the conditions provided by law, permission to leave the premises for a determined period and a justified purpose can be requested. There is no automatic approval and the request must be argued.",
    },
    {
      q: "Can house arrest be replaced with judicial control?",
      a: "Yes, where the conditions of art. 242 of the Criminal Procedure Code on replacement with a lighter measure are met.",
    },
    {
      q: "How is house arrest challenged?",
      a: "Through an appeal against the court decision, under art. 204-206 of the Criminal Procedure Code. The deadline is 48 hours from delivery or, as the case may be, from communication.",
    },
  ],
  resources: [
    { text: "Art. 218-222 of the Criminal Procedure Code - house arrest.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 204-206 of the Criminal Procedure Code - appeals regarding preventive measures.", href: CPP, linkLabel: "Legislation" },
    { text: "Art. 242 of the Criminal Procedure Code - revocation and replacement of preventive measures.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_MP_EN,
};

/* ============================================================
   Sub-services - Financial crime pillar page
   ============================================================ */

const L241_EN = "https://legislatie.just.ro/Public/DetaliiDocument/239926";

const PARENT_FC_EN = {
  to: "/en/services/financial-crime",
  label: "financial crime",
  breadcrumbLabel: "Financial crime",
};

export const taxEvasionEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/tax-evasion",
  altPath: "/servicii/evaziune-fiscala",
  roPath: "/servicii/evaziune-fiscala",
  title: "Tax Evasion Lawyer Bucharest | Bogdan Lamatic",
  h1: "Tax evasion lawyer in Bucharest",
  description:
    "Tax evasion lawyer in Bucharest. Defense in criminal tax evasion files, ANAF audits, damage assessment and asset freezing. Call now.",
  keywords: "tax evasion lawyer bucharest, tax evasion criminal file, tax fraud defense romania",
  breadcrumbLabel: "Tax evasion",
  serviceName: "Tax evasion lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Have you received a criminal complaint after an ANAF audit or been summoned by the prosecutor in a tax evasion case?",
    "Accounting records, the explanations given to inspectors and your first statement before the investigating authorities can directly shape how the file is built.",
  ],
  bio: [
    `${BIO_INTRO} I assist individuals, directors and companies in criminal tax evasion cases, from the complaint filed after a tax inspection to the final resolution.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Pick the situation that best describes your stage. The defense starts from there."],
      subsections: [
        {
          h3: "You have been summoned by the police or the prosecutor in a tax evasion case",
          paragraphs: [
            "Before you appear, you need to know in what capacity you are being questioned, what conduct is investigated and which documents support the accusation. The statement you give now stays in the file for the whole trial.",
          ],
        },
        {
          h3: "There has been an ANAF or anti-fraud inspection",
          paragraphs: [
            "The tax inspection report and the anti-fraud minutes are usually the acts that trigger the criminal complaint. The way the explanations were given to inspectors shapes the file.",
          ],
        },
        {
          h3: "Searches or document seizures have taken place",
          paragraphs: [
            "I check the legal basis of the search, what was actually seized and how the acts were recorded, because those documents become the prosecution's main evidence.",
          ],
        },
        {
          h3: "A tax damage figure has been calculated",
          paragraphs: [
            "The amount of the damage influences the legal classification, the sentencing range and any precautionary measures. The calculation can be challenged through objections and expert reports.",
          ],
        },
        {
          h3: "Accounts or assets have been frozen",
          paragraphs: [
            "Precautionary measures can be challenged, and their extent can be reviewed against the damage retained in the file.",
          ],
        },
      ],
      ctaAfterSubsections: "I have a tax evasion file - I want an assessment",
    },
    {
      h2: "What I review immediately in a tax evasion file",
      bullets: [
        "The tax inspection report and the criminal complaint, to identify exactly what conduct is alleged.",
        "Whether the operations invoked fall under Law 241/2005 or amount to a difference in tax interpretation.",
        "The reality of the contested operations: documents, deliveries, payments and financial flows.",
        "How the damage was calculated and whether an accounting or tax expert report is useful.",
        "The actual decision-making duties and the documents signed, to establish who answers and for what.",
        "The precautionary measures ordered and the grounds for challenging them.",
      ],
    },
    {
      h2: "What you should send me for the first assessment",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me what happened and at what stage the file is."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the tax inspection report;",
        "the criminal complaint or the order you received;",
        "the summons;",
        "the tax assessment decision;",
        "the relevant accounting documents.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What tax evasion is and when a tax problem becomes criminal",
      paragraphs: [
        "Tax evasion means avoiding tax obligations through the conduct exhaustively listed in Law 241/2005. A tax problem becomes criminal only where the conduct matches one of those forms and there is an intention to evade.",
        [
          { text: "An audit that establishes additional amounts due is not automatically an offense. That is why the first step in a " },
          { text: "financial crime", to: "/en/services/financial-crime" },
          { text: " file is to separate the tax obligation from the criminal accusation." },
        ],
      ],
    },
    {
      h2: "What conduct can amount to tax evasion",
      subsections: [
        {
          h3: "Income or operations not recorded in the accounts",
          paragraphs: ["Failing to record, in whole or in part, commercial operations carried out or income earned is one of the most frequently alleged forms."],
        },
        {
          h3: "Expenses and operations considered fictitious",
          paragraphs: ["Recording expenses not based on real operations, or fictitious operations, requires proof that the supply or service never existed."],
        },
        {
          h3: "Documents and accounting records contested by the investigators",
          paragraphs: ["Altering, destroying or hiding accounting documents, as well as keeping double records, are separately criminalized."],
        },
        {
          h3: "Concealing the taxable asset or source",
          paragraphs: ["This form requires conduct that disguises the taxable asset or source, not the mere failure to pay a declared obligation."],
        },
      ],
      calloutAfterSubsections: "Article 9 of Law 241/2005 remains the core provision for tax evasion.",
    },
    {
      h2: "The difference between tax evasion, a tax error and a tax dispute",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "A tax error occurs where an operation is recorded incorrectly or an obligation is miscalculated, without any intention to evade. The consequences remain, in principle, fiscal.",
        "A tax dispute occurs where the taxpayer and the tax authority interpret a tax rule differently. These disputes are settled through administrative appeals and administrative litigation.",
        "Tax evasion requires one of the forms of conduct set out in the law, committed with the intention of avoiding tax obligations. This distinction is often the core of the defense.",
      ],
    },
    {
      h2: "How the damage is established in a tax evasion file",
      subsections: [
        {
          h3: "The ANAF report and the damage calculation",
          paragraphs: ["The starting point is the tax authority's calculation. I check which operations were taken into account, what period is covered and whether ancillary amounts were wrongly included."],
        },
        {
          h3: "The accounting expert report",
          paragraphs: ["In files with large volumes of documents, a judicial accounting expert report can significantly change the amount retained. I submit expert objectives and objections to the report."],
        },
        {
          h3: "How the damage can be challenged",
          paragraphs: ["The damage can be challenged with supporting documents, through expert evidence and through requests for evidence, both during the investigation and at trial."],
        },
      ],
    },
    {
      h2: "What effect paying the damage can have in a tax evasion file",
      paragraphs: [
        "Law 241/2005 provides specific consequences depending on when the damage is covered and on its amount, ranging from grounds for non-punishment to reduced sentencing limits.",
        "The concrete effect must be analysed on your file, against the legal classification retained and the procedural stage. A payment made without prior analysis can be interpreted unfavourably.",
      ],
    },
    {
      h2: "Freezing accounts, real estate and other assets in tax evasion files",
      paragraphs: [
        "Precautionary measures are frequent in these files, to secure recovery of the damage. They can target bank accounts, real estate, vehicles or company shares.",
        "I check whether the measure was ordered lawfully, whether the value of the frozen assets is proportionate to the damage retained, and I file a challenge where there are grounds.",
      ],
    },
    {
      h2: "What happens after a criminal tax evasion file is opened",
      subsections: [
        {
          h3: "The criminal investigation",
          paragraphs: ["Accounting documents are collected, searches or document seizures are ordered, and directors, accountants and business partners are questioned."],
        },
        {
          h3: "Expert evidence and the taking of evidence",
          paragraphs: ["Most files involve an accounting expert report. This is the moment when the defense can decisively influence the damage figure and the legal classification."],
        },
        {
          h3: "Indictment or closing the file",
          paragraphs: ["At the end, the prosecutor may close the file, waive prosecution or send the case to trial. Each outcome is prepared through requests and submissions filed in time."],
        },
      ],
    },
    {
      h2: "How I build the defense in a tax evasion file",
      bullets: [
        "I start from the documents, not from the conclusions of the tax report, and reconstruct the real flow of operations.",
        "I separate the tax obligation from the criminal offense and argue the civil or fiscal nature of the dispute where appropriate.",
        "I challenge the damage calculation through objections and expert evidence.",
        "I contest disproportionate precautionary measures.",
        "I prepare you for questioning and assist you at every hearing.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Where the file also involves allegations of " },
          { text: "business deception", to: "/en/services/fraud-and-deception" },
          { text: ", the defense must be built as a whole, because the evidence largely overlaps." },
        ],
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "Does any debt to the tax authority mean tax evasion?",
      a: "No. Law 241/2005 lists the conduct that amounts to an offense. An unpaid tax debt or a difference resulting from a different interpretation of tax law is not automatically tax evasion.",
    },
    {
      q: "Is the company director automatically liable?",
      a: "No. Criminal liability is personal and is assessed against actual duties, decisions taken and documents signed. Being a director does not in itself mean guilt.",
    },
    {
      q: "What happens if the invoices are considered fictitious?",
      a: "The investigators must prove that the operation never took place. The defense is built on evidence of delivery, performance, payment and use of the goods or services.",
    },
    {
      q: "Who establishes the damage?",
      a: "The starting point is the tax authority's calculation, but the criminal damage is established by the judicial bodies, usually through an accounting expert report that can be challenged.",
    },
    {
      q: "Can the company accounts be frozen?",
      a: "Yes, through precautionary measures ordered to secure recovery of the damage. They can be challenged, and their extent reviewed against the amount retained in the file.",
    },
    {
      q: "Does paying the damage close the criminal file?",
      a: "Not automatically. The law provides different effects depending on the moment of payment and the amount, from grounds for non-punishment to reduced sentences. The analysis must be done before paying.",
    },
    {
      q: "Can the company itself be criminally liable?",
      a: "Yes. A legal entity can be criminally liable alongside the individuals involved, with specific penalties including fines and measures affecting its activity.",
    },
    {
      q: "How long can a tax evasion file take?",
      a: "It depends on the complexity of the operations, the number of persons investigated and the expert reports ordered. Files with large document volumes can take years, so the defense must be built from the start.",
    },
  ],
  resources: [
    { text: "Law 241/2005 - conduct constituting tax evasion offenses.", href: L241_EN, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code - art. 249 and following on precautionary measures.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

export const fraudAndDeceptionEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/fraud-and-deception",
  altPath: "/servicii/inselaciune-frauda",
  roPath: "/servicii/inselaciune-frauda",
  title: "Fraud and Deception Lawyer Bucharest | Bogdan Lamatic",
  h1: "Fraud and deception lawyer in Bucharest",
  description:
    "Fraud lawyer in Bucharest. Defense and representation in deception, financial fraud and unperformed contract cases. Call now for an assessment.",
  keywords: "fraud lawyer bucharest, deception lawyer romania, financial fraud attorney",
  breadcrumbLabel: "Fraud and deception",
  serviceName: "Fraud and deception lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you accused of deception, or have you lost money through fraud?",
    "The line between a breach of contract and the offense of deception is drawn on the evidence in the file, and that evidence takes shape from the very first investigative acts.",
  ],
  bio: [
    `${BIO_INTRO} I assist both persons accused of fraud or deception and injured parties who want to recover the sums lost.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Identify the concrete situation, because the defense differs by stage and by type of accusation."],
      subsections: [
        {
          h3: "You are accused of misleading a person",
          paragraphs: ["The accusation usually rests on the injured party's statements and on the documents exchanged. What you communicated, when and on what information matters."],
        },
        {
          h3: "A contract or a business deal ended up under criminal investigation",
          paragraphs: ["I reconstruct the timeline of the deal, to show whether non-performance had objective causes or whether the prosecution claims an intention that existed from the start."],
        },
        {
          h3: "You received money or an advance and a criminal complaint was filed",
          paragraphs: ["I analyse where the sums went, the evidence of partial performance and the correspondence between the parties, elements that can change the classification of the file."],
        },
        {
          h3: "You are investigated in a file with large damage or several injured parties",
          paragraphs: ["These files usually involve precautionary measures and related charges. The defense must be organised for each set of facts, not globally."],
        },
      ],
      ctaAfterSubsections: "I want to discuss my file",
    },
    {
      h2: "What I review in a deception file",
      bullets: [
        "Whether the conditions of the offense are met, in particular the misleading conduct and the loss.",
        "The moment when the intention to mislead is said to have arisen.",
        "The documents of the deal: contracts, invoices, proof of payment, correspondence.",
        "Partial performance or the steps taken to fulfil the obligations.",
        "How the damage was calculated and the civil claims filed.",
        "The precautionary measures ordered over accounts or assets.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me briefly what happened, what sums are involved and at what stage the file is."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the contract or written agreement;",
        "the invoices and proof of payment;",
        "the correspondence with the other party;",
        "the criminal complaint or the order you received;",
        "the summons.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What the offense of deception is",
      paragraphs: [
        "Deception means misleading a person by presenting a false fact as true or a true fact as false, in order to obtain an unjust patrimonial benefit, where a loss has been caused.",
        [
          { text: "The offense is aggravated where it is committed by using false names or capacities or other fraudulent means. It is one of the most frequent accusations in " },
          { text: "financial crime", to: "/en/services/financial-crime" },
          { text: " files." },
        ],
      ],
    },
    {
      h2: "What must be proven for the offense to exist",
      subsections: [
        {
          h3: "The misleading conduct",
          paragraphs: ["There must be proof of deceptive conduct, through untrue statements, concealment of essential information or the use of false documents or capacities."],
        },
        {
          h3: "The purpose of obtaining an unjust patrimonial benefit",
          paragraphs: ["An economic advantage is not enough. It must be proven that the benefit sought was unjust and that this was the purpose of the conduct."],
        },
        {
          h3: "The existence of a loss",
          paragraphs: ["The loss must be real and proven by documents, not merely asserted by the injured party."],
        },
        {
          h3: "The link between the misleading conduct and the loss",
          paragraphs: ["The loss must be the consequence of the deception. If the damage has another cause, such as an assumed commercial risk, the accusation loses its basis."],
        },
      ],
      calloutAfterSubsections: "Deception is governed by article 244 of the Criminal Code.",
    },
    {
      h2: "When failing to perform a contract becomes deception",
      cardClassName: "bg-[#faf0e6]",
      subsections: [
        {
          h3: "Non-performance of a contract is not automatically an offense",
          paragraphs: ["Failure to perform or late performance triggers, in principle, civil liability. A commercial dispute does not turn into a criminal file merely because one party suffered a loss."],
        },
        {
          h3: "What matters in establishing the intention at the moment the deal was concluded",
          paragraphs: ["What matters is whether the activity was real, whether the necessary resources existed, what information was presented to the partner, how the sums received were used and what steps were taken towards performance."],
        },
      ],
    },
    {
      h2: "The most frequent situations in deception files",
      subsections: [
        {
          h3: "Contracts and commercial transactions",
          paragraphs: ["Undelivered goods, unperformed services or payments redirected to destinations other than those agreed."],
        },
        {
          h3: "Advances and sales",
          paragraphs: ["Advances collected for goods never delivered, or sales of assets whose legal situation differed from the one presented to the buyer."],
        },
        {
          h3: "Investments and promises of profit",
          paragraphs: ["Investment schemes with promised returns, where the question is whether the economic activity invoked ever existed."],
        },
        {
          h3: "Use of untrue documents or information",
          paragraphs: ["Documents, capacities or financial data presented to gain the partner's trust. A forgery charge may also arise in these cases."],
        },
      ],
    },
    {
      h2: "The difference between deception and computer fraud",
      paragraphs: [
        "In deception, the benefit is obtained by misleading a person. The injured party acts personally, but on a false picture of reality.",
        [
          { text: "In " },
          { text: "computer fraud", to: "/en/services/computer-fraud" },
          { text: ", the result is obtained by interfering with data or with the functioning of a computer system, without any person being misled. The distinction has been analysed explicitly in the case law of the High Court." },
        ],
      ],
    },
    {
      h2: "Recovering the damage, returning the money and settlement between the parties",
      paragraphs: [
        "Returning the sums does not automatically remove criminal liability, but it can influence the outcome and the sentence. For some forms of deception, settlement between the parties has effects expressly provided by law.",
        "I analyse whether settlement is possible in your file, which procedural moment is useful and how it must be documented so that it produces the intended legal effect.",
      ],
    },
    {
      h2: "Asset freezing and recovery of the damage in a deception file",
      paragraphs: [
        "The injured party can join the proceedings as civil party and can request precautionary measures over accounts or assets, to protect the chances of recovery.",
        "On the defense side, I check the proportionality of the measure and the evidence of the claimed damage, and I file a challenge where the freezing exceeds the justified claims.",
      ],
    },
    {
      h2: "How I build the defense in a deception file",
      bullets: [
        "I reconstruct the timeline of the deal on documents and payments.",
        "I argue the civil or commercial nature of the dispute where the evidence allows it.",
        "I contest the existence of intention at the moment the agreement was concluded.",
        "I analyse the real amount of the damage and the civil claims.",
        "I prepare you for questioning and assist you at every hearing.",
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "Can an unpaid debt amount to deception?",
      a: "Not in itself. An unpaid debt is in principle a civil matter. It becomes criminally relevant only if misleading conduct and the purpose of an unjust patrimonial benefit are proven.",
    },
    {
      q: "Is failing to perform a contract an offense?",
      a: "Not automatically. It must be proven that the intention not to perform existed when the contract was concluded and that the partner was misled by untrue statements or documents.",
    },
    {
      q: "What happens if the damage is repaid?",
      a: "Repayment does not automatically close the file, but it can influence the prosecutor's decision and the sentence. For some forms, settlement between the parties has effects expressly provided by law.",
    },
    {
      q: "Can the victim withdraw the complaint?",
      a: "The effects depend on the legal classification retained. In certain cases settlement removes criminal liability, while in others the file continues ex officio.",
    },
    {
      q: "What is the difference between deception and computer fraud?",
      a: "In deception a person is misled and acts on a false picture of reality. In computer fraud the patrimonial result is obtained by interfering with data or with the functioning of a computer system.",
    },
    {
      q: "Can accounts and assets be frozen?",
      a: "Yes, through precautionary measures ordered to secure recovery of the damage. The measure can be challenged, especially where it is disproportionate to the amount claimed.",
    },
    {
      q: "Can a company be criminally liable?",
      a: "Yes. A legal entity can be criminally liable where the offense was committed in carrying out its activity or in its interest, alongside the liability of the individuals involved.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 244 on deception.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Code - art. 245 on insurance fraud.", href: CP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

export const embezzlementEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/embezzlement",
  altPath: "/servicii/delapidare",
  roPath: "/servicii/delapidare",
  title: "Embezzlement Lawyer Bucharest | Bogdan Lamatic",
  h1: "Embezzlement lawyer in Bucharest",
  description:
    "Embezzlement lawyer in Bucharest. Defense in criminal files involving missing funds, inventory shortfalls and misappropriated assets. Call now.",
  keywords: "embezzlement lawyer bucharest, embezzlement criminal case romania, misappropriation defense",
  breadcrumbLabel: "Embezzlement",
  serviceName: "Embezzlement lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for embezzlement, or have you found shortfalls in your company's accounts?",
    "In such a file everything is decided on documents: who held the assets, what sums were moved and how they were justified.",
  ],
  bio: [
    `${BIO_INTRO} I assist directors, employees with management duties and companies in embezzlement cases, both in defense and as injured party.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Tell me where the matter stands, because each stage requires different steps."],
      subsections: [
        {
          h3: "An audit or internal control has identified shortfalls in the accounts",
          paragraphs: ["The audit conclusions are not a criminal judgment. What matters is who actually held the assets and how the movements were documented."],
        },
        {
          h3: "The employer or the company has filed a criminal complaint",
          paragraphs: ["Once the complaint is filed, the evidence begins to be gathered. Your explanations must be supported by documents from the very first step."],
        },
        {
          h3: "You are a director, manager, custodian or employee under investigation for embezzlement",
          paragraphs: ["The offense can only be committed by a person who manages or administers the assets. I check whether you actually held that capacity."],
        },
        {
          h3: "A damage figure has been established and measures have been taken over assets",
          paragraphs: ["The amount of the damage influences the sentencing limits and any precautionary measures. Both can be challenged with supporting evidence."],
        },
      ],
      ctaAfterSubsections: "I am investigated for embezzlement - I want an assessment",
    },
    {
      h2: "What I review immediately in an embezzlement file",
      bullets: [
        "Whether you had, in law and in fact, duties of managing or administering the assets.",
        "What sums or goods are said to be missing and on what documents that is based.",
        "The accounting records, inventories and handover documents.",
        "Who had access to the funds, cash desk or warehouse, and under what internal procedures.",
        "How the damage was calculated and whether an expert report is needed.",
        "The precautionary measures ordered over your assets.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me what capacity you held and what is being claimed against you."],
      subsections: [
        {
          h3: "The accounting and inventory documents",
          paragraphs: ["Inventory records, cash registers, stock reports and any document showing the movement of the sums or goods."],
        },
        {
          h3: "The contracts and duties of the person under investigation",
          paragraphs: ["Employment contract, job description, mandate decisions and internal procedures on handling assets."],
        },
        {
          h3: "The audit or control report",
          paragraphs: ["The report that identified the shortfall, together with the annexes and the explanations already given."],
        },
        {
          h3: "The damage calculation",
          paragraphs: ["The document setting out how the claimed amount was calculated and for what period."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What embezzlement is",
      paragraphs: [
        "Embezzlement means appropriating, using or dealing with money, valuables or other assets managed or administered by the perpetrator, in that person's own interest or in the interest of another.",
        [
          { text: "It is one of the most frequent accusations in company-related " },
          { text: "financial crime", to: "/en/services/financial-crime" },
          { text: " files, and it is analysed on the accounting documents." },
        ],
      ],
    },
    {
      h2: "Who can be accused of embezzlement",
      paragraphs: [
        "Only a person who manages or administers the assets in question can commit the offense. This capacity results from the employment contract, from a mandate, from a decision of the company's bodies or from the actual duties performed.",
        "A person who merely has occasional access to funds, without duties of management or administration, may answer for another offense, but not for embezzlement.",
      ],
    },
    {
      h2: "What conduct can amount to embezzlement",
      subsections: [
        {
          h3: "Appropriating money or goods",
          paragraphs: ["Taking the assets out of the company's patrimony and treating them as one's own."],
        },
        {
          h3: "Using them in one's own interest or for another",
          paragraphs: ["Using the sums or goods for purposes other than those of the company, even temporarily."],
        },
        {
          h3: "Dealing with the managed assets or valuables",
          paragraphs: ["Carrying out operations with the managed assets for personal benefit or for the benefit of another person."],
        },
      ],
    },
    {
      h2: "Embezzlement or a mere inventory shortfall?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "A shortfall may result from accounting errors, poor internal procedures, wastage or from the conduct of other persons with access to the assets.",
        "For the offense to exist, it must be proven that the assets were appropriated, used or dealt with intentionally. Absent that proof, the discussion remains civil and disciplinary.",
      ],
    },
    {
      h2: "The difference between embezzlement, breach of trust and fraudulent management",
      paragraphs: [
        "Embezzlement concerns assets managed or administered by the perpetrator in a company context, based on that specific capacity.",
        "Breach of trust concerns goods held on the basis of a title, with the obligation to return or use them in a certain way.",
        "Fraudulent management involves damage caused while managing another person's assets, through acts contrary to that person's interest. The classification changes the sentencing limits and the defense strategy.",
      ],
    },
    {
      h2: "How the damage is established in an embezzlement case",
      subsections: [
        {
          h3: "The inventory and the accounting documents",
          paragraphs: ["The starting point is the shortfall recorded in the inventory and in the accounting records, which must be verified document by document."],
        },
        {
          h3: "The accounting expert report",
          paragraphs: ["In files with numerous operations, the expert report is decisive. I submit expert objectives and objections where the calculation is questionable."],
        },
        {
          h3: "Challenging the damage calculation",
          paragraphs: ["Amounts already returned, wrongly attributed operations and periods outside your duties can be removed from the amount retained."],
        },
      ],
    },
    {
      h2: "What effect recovering or paying the damage has",
      paragraphs: [
        "Repaying the damage does not remove the offense, but it is relevant to the prosecutor's decision, to the sentence and to the civil claims.",
        "I analyse whether payment is useful in your file and at what moment, so that it is not interpreted as an implicit admission of the alleged conduct.",
      ],
    },
    {
      h2: "Freezing assets in an embezzlement file",
      paragraphs: [
        "Precautionary measures can be ordered over personal assets, accounts and real estate, up to the value of the damage retained in the file.",
        "I check the proportionality of the measure and the evidence supporting the claimed amount, and I file a challenge where the freezing exceeds what is justified.",
      ],
    },
    {
      h2: "How I build the defense in an embezzlement file",
      bullets: [
        "I check whether the capacity of manager or administrator was actually held.",
        "I reconstruct the movement of the sums and goods on documents.",
        "I identify the other persons with access to the assets and the flaws in internal procedures.",
        "I challenge the damage calculation through objections and expert evidence.",
        "I prepare you for questioning and assist you at every hearing.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Where the file also involves contested documents, the accusation is analysed together with " },
          { text: "forgery of private documents", to: "/en/services/forgery-and-use-of-forgery" },
          { text: "." },
        ],
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "Does any inventory shortfall mean embezzlement?",
      a: "No. A shortfall may result from accounting errors, poor procedures or the conduct of other persons. The offense requires proof that the assets were appropriated, used or dealt with intentionally.",
    },
    {
      q: "Who can commit embezzlement?",
      a: "Only a person who manages or administers the assets in question, based on an employment contract, a mandate or actual duties performed within the company.",
    },
    {
      q: "Can a company director be accused of embezzlement?",
      a: "Yes, where the director managed or administered the assets concerned. Liability is assessed on the actual duties and on the documents signed.",
    },
    {
      q: "How is the damage calculated?",
      a: "It starts from the shortfall recorded in the accounts and inventories and is usually established through an accounting expert report, which can be challenged with documents and objections.",
    },
    {
      q: "What happens if the damage is repaid?",
      a: "Repayment does not remove the offense, but it is relevant to the prosecutor's decision, to the sentence and to the civil claims in the file.",
    },
    {
      q: "What is the difference between embezzlement and fraudulent management?",
      a: "Embezzlement concerns assets managed or administered by the perpetrator, while fraudulent management concerns damage caused while managing another person's assets through acts contrary to that person's interest.",
    },
    {
      q: "Can personal assets be frozen?",
      a: "Yes, through precautionary measures ordered up to the value of the damage retained. The measure can be challenged where it is disproportionate.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 295 on embezzlement.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Code - art. 238 and 242 on breach of trust and fraudulent management.", href: CP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

export const forgeryEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/forgery-and-use-of-forgery",
  altPath: "/servicii/fals-si-uz-de-fals",
  roPath: "/servicii/fals-si-uz-de-fals",
  title: "Forgery Lawyer Bucharest | Bogdan Lamatic",
  h1: "Forgery and use of forgery lawyer in Bucharest",
  description:
    "Forgery lawyer in Bucharest. Defense in cases of forged documents, intellectual forgery and use of forged documents. Call now.",
  keywords: "forgery lawyer bucharest, use of forgery romania, forged documents criminal defense",
  breadcrumbLabel: "Forgery and use of forgery",
  serviceName: "Forgery and use of forgery lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for forging a document, or for using a document said to be forged?",
    "In these files what matters is who drafted the document, what the person using it knew and what legal consequences it produced.",
  ],
  bio: [
    `${BIO_INTRO} I assist persons investigated for forgery of private documents, intellectual forgery, material forgery and use of forgery, including in complex economic files.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Tell me what document is contested and in what context it was used."],
      subsections: [
        {
          h3: "You are accused of forging a document",
          paragraphs: ["I check who drafted the document, what was altered and whether the change had any legal consequence."],
        },
        {
          h3: "You are accused of using a forged document",
          paragraphs: ["Use of forgery requires proof that you knew the document was forged. That is the core of the defense in most of these files."],
        },
        {
          h3: "The signature or the content of a document is contested",
          paragraphs: ["A handwriting expert report or a document examination can be decisive. The original documents and comparison samples matter."],
        },
        {
          h3: "The documents are used as evidence in another criminal file",
          paragraphs: ["Forgery charges usually accompany an economic accusation. The two must be defended together, because they rest on the same documents."],
        },
      ],
      ctaAfterSubsections: "I have a forgery file - I want an assessment",
    },
    {
      h2: "What I review in a forgery or use of forgery file",
      bullets: [
        "What document is contested and what type of forgery is alleged.",
        "Who drafted the document and how it reached you.",
        "Whether the document produced legal consequences.",
        "What you knew about the origin of the document at the moment you used it.",
        "The available expert evidence and comparison samples.",
        "The link with the other charges in the file.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Send me the contested document, if you have it, and the order or summons you received."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the contested document, in original or copy;",
        "the correspondence showing how you obtained it;",
        "the criminal complaint or the order in the file;",
        "the expert report, if one has already been produced;",
        "the summons.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "The difference between forgery and use of forgery",
      paragraphs: [
        "Forgery is the act of creating or altering a document so that it no longer reflects reality.",
        "Use of forgery is the act of using such a document in order to produce legal consequences, and it can be committed by a person who did not take part in the forgery itself.",
      ],
    },
    {
      h2: "The types of forgery that can appear in a criminal file",
      subsections: [
        {
          h3: "Material forgery of official documents",
          paragraphs: ["Falsifying an official document by counterfeiting or altering it, so that it appears genuine."],
        },
        {
          h3: "Intellectual forgery",
          paragraphs: ["Recording untrue facts in an official document, committed while drafting it by the person under a duty to certify the truth."],
        },
        {
          h3: "Forgery of private documents",
          paragraphs: ["Falsifying a private document, followed by its use or by handing it over to another person for use."],
        },
        {
          h3: "Use of forgery",
          paragraphs: ["Using a forged document, whether official or private, in order to produce legal consequences."],
        },
      ],
      calloutAfterSubsections: "These forms are regulated separately in the area of articles 320 to 323 of the Criminal Code.",
    },
    {
      h2: "Can you be accused of use of forgery if you did not forge the document?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Yes. Use of forgery is a separate offense and concerns the person who uses the document, regardless of who produced it.",
        "That is why the defense focuses on how you obtained the document, what checks you could reasonably make and what you actually knew about its origin.",
      ],
    },
    {
      h2: "Do you have to know the document is forged in order to answer for use of forgery?",
      paragraphs: [
        "Yes. The offense requires intention, meaning knowledge that the document is forged at the moment it is used.",
        "Using a document received from a third party, in good faith and without any element indicating a problem, does not meet this requirement. This must be proven by evidence, not merely asserted.",
      ],
    },
    {
      h2: "How it is proven that a document is forged",
      subsections: [
        {
          h3: "The handwriting expert report",
          paragraphs: ["It analyses the signature and the handwriting, by comparison with samples taken in the file."],
        },
        {
          h3: "Document examination",
          paragraphs: ["It examines the paper, the ink, the stamps and the traces of alteration, in order to establish whether the document was modified."],
        },
        {
          h3: "Original documents and comparison samples",
          paragraphs: ["Without the original, the conclusions of an expert report are limited. I request that the originals be brought into the file where they exist."],
        },
        {
          h3: "Other evidence on the origin of the document",
          paragraphs: ["Correspondence, witnesses and electronic records can show who produced the document and how it was circulated."],
        },
      ],
    },
    {
      h2: "What happens where the same person forges and uses the document",
      paragraphs: [
        "Where the person who forged the document also uses it, the situation is analysed under the rules on the relationship between the two offenses and on the concurrence of offenses.",
        "The legal classification retained influences the sentencing limits, so it must be discussed from the investigation stage, not only at trial.",
      ],
    },
    {
      h2: "The link between forgery and other offenses",
      subsections: [
        {
          h3: "Forgery and deception",
          paragraphs: [
            [
              { text: "Where a document is used to mislead a person, the accusation is analysed together with " },
              { text: "deception in business", to: "/en/services/fraud-and-deception" },
              { text: "." },
            ],
          ],
        },
        {
          h3: "Forgery and tax evasion",
          paragraphs: ["Invoices and accounting records considered untrue often generate both a tax accusation and a forgery charge."],
        },
        {
          h3: "Forgery and EU funds fraud",
          paragraphs: ["Documents submitted to the financing authority are examined both for the fraud charge and for the forgery charge."],
        },
      ],
      calloutAfterSubsections: "The relationship between forged documents and other economic offenses appears in the case law of the High Court as well.",
    },
    {
      h2: "How I build the defense in a forgery or use of forgery file",
      bullets: [
        "I establish who drafted the document and how it reached you.",
        "I contest the alleged knowledge of the forgery where you acted in good faith.",
        "I request the original documents and challenge incomplete expert reports.",
        "I analyse whether the document produced any legal consequence.",
        "I prepare you for questioning and assist you at every hearing.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Forgery charges rarely stand alone. They are usually part of a broader " },
          { text: "financial crime", to: "/en/services/financial-crime" },
          { text: " file and must be defended as a whole." },
        ],
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "What is the difference between forgery and use of forgery?",
      a: "Forgery is the act of producing or altering the document. Use of forgery is the act of using such a document to produce legal consequences, and it can be committed by a person who did not forge it.",
    },
    {
      q: "Can I be convicted if I did not know the document was forged?",
      a: "No. Use of forgery requires intention, meaning knowledge that the document was forged at the moment of use. Good faith must be supported by evidence in the file.",
    },
    {
      q: "Is a handwriting expert report necessary?",
      a: "It is often decisive where the signature is contested. Its conclusions depend on the availability of the original document and of proper comparison samples.",
    },
    {
      q: "What happens if the signature is not mine?",
      a: "The expert report can establish that. In that case the discussion moves to who produced the document and whether you used it knowing the situation.",
    },
    {
      q: "Can an electronic document be forged?",
      a: "Yes. Altering electronic data can fall under computer forgery, which is regulated separately from forgery of paper documents.",
    },
    {
      q: "Can forgery and deception coexist in the same file?",
      a: "Yes. Where a forged document was used to mislead a person, both charges can be retained, and they must be defended together.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 320 to 323 on forgery and use of forgery.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code - provisions on expert evidence.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

export const fraudulentBankruptcyEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/fraudulent-bankruptcy",
  altPath: "/servicii/bancruta-frauduloasa",
  roPath: "/servicii/bancruta-frauduloasa",
  title: "Fraudulent Bankruptcy Lawyer Bucharest | Bogdan Lamatic",
  h1: "Fraudulent bankruptcy lawyer in Bucharest",
  description:
    "Fraudulent bankruptcy lawyer in Bucharest. Defense in criminal files on insolvency, falsified records and asset transfers. Call now.",
  keywords: "fraudulent bankruptcy lawyer bucharest, insolvency criminal case romania, asset concealment defense",
  breadcrumbLabel: "Fraudulent bankruptcy",
  serviceName: "Fraudulent bankruptcy lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Has your company entered insolvency and a criminal complaint for fraudulent bankruptcy has been filed against you?",
    "The operations carried out before the procedure opened, the accounting records and the asset transfers are the first things the investigating authorities examine.",
  ],
  bio: [
    `${BIO_INTRO} I assist directors and shareholders in criminal files linked to insolvency, fraudulent bankruptcy and operations contested by creditors or by the insolvency practitioner.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Tell me at what stage the insolvency file is and what is being claimed against you."],
      subsections: [
        {
          h3: "The company is or has been in insolvency and a criminal complaint has been filed",
          paragraphs: ["Insolvency is not in itself an offense. The complaint must indicate concrete conduct, and that conduct is verified against documents."],
        },
        {
          h3: "You are a director or a member of the company's management",
          paragraphs: ["Liability is personal and is assessed on the decisions taken, the documents signed and the moment they were signed."],
        },
        {
          h3: "Transfers or disposals of assets are contested",
          paragraphs: ["I analyse the economic justification of each operation, its price and its timing relative to the opening of the procedure."],
        },
        {
          h3: "Missing accounting records or untrue debts are alleged",
          paragraphs: ["These allegations require verification of who kept the accounts, how the records were handed over and what documents actually exist."],
        },
      ],
      ctaAfterSubsections: "I have a bankruptcy file - I want an assessment",
    },
    {
      h2: "What I review in a fraudulent bankruptcy file",
      bullets: [
        "What concrete conduct is alleged and on what documents it is based.",
        "The chronology of the insolvency and the moment of the contested operations.",
        "The transfers of assets, their price and their economic justification.",
        "The state of the accounting records and how they were handed over.",
        "The reports of the insolvency practitioner and the creditors' claims.",
        "The damage claimed and the precautionary measures ordered.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me what company is involved and what stage the insolvency procedure has reached."],
      subsections: [
        {
          h3: "The insolvency file",
          paragraphs: ["The decision opening the procedure, the reports filed and the creditors' table."],
        },
        {
          h3: "The accounting records",
          paragraphs: ["Balance sheets, trial balances, journals and any document on the company's financial position."],
        },
        {
          h3: "The contracts and asset transfers",
          paragraphs: ["Sale contracts, valuations, proof of payment and documents on the destination of the sums."],
        },
        {
          h3: "The reports of the insolvency practitioner or liquidator",
          paragraphs: ["The reports on the causes of insolvency and on the operations considered questionable."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What fraudulent bankruptcy is",
      paragraphs: [
        "Fraudulent bankruptcy means conduct carried out in fraud of creditors, in the context of insolvency, such as concealing assets, falsifying or destroying records, presenting untrue debts or disposing of assets to their detriment.",
        [
          { text: "It is one of the most technical accusations in " },
          { text: "financial crime", to: "/en/services/financial-crime" },
          { text: ", because it requires a joint analysis of the insolvency file and of the company's accounts." },
        ],
      ],
    },
    {
      h2: "What conduct can amount to fraudulent bankruptcy",
      subsections: [
        {
          h3: "Concealing assets of the debtor",
          paragraphs: ["Removing assets from the reach of creditors, or hiding them from the procedure."],
        },
        {
          h3: "Falsifying, removing or destroying the records",
          paragraphs: ["Conduct affecting the accounting records of the debtor, so that the real financial position can no longer be established."],
        },
        {
          h3: "Presenting untrue debts",
          paragraphs: ["Introducing debts that do not exist, in order to alter the distribution among creditors."],
        },
        {
          h3: "Disposing of assets in fraud of creditors",
          paragraphs: ["Transfers made at undervalue or to related parties, in the period when insolvency was imminent."],
        },
      ],
    },
    {
      h2: "The difference between fraudulent bankruptcy and simple bankruptcy",
      paragraphs: [
        "Simple bankruptcy concerns failure to comply with the obligation to request the opening of the insolvency procedure within the legal time limit.",
        "Fraudulent bankruptcy requires conduct carried out in fraud of creditors. The two offenses have different conditions and different sentencing limits.",
      ],
    },
    {
      h2: "Does a company's insolvency automatically mean criminal liability?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "No. Insolvency can result from market conditions, from unpaid receivables, from loss of financing or from decisions that proved commercially wrong.",
        "Criminal liability requires proof of specific conduct carried out in fraud of creditors. A commercial failure, in itself, is not an offense.",
      ],
    },
    {
      h2: "Who can file a complaint for fraudulent bankruptcy",
      paragraphs: [
        "The complaint can come from creditors, from the insolvency practitioner or liquidator, or the file can be opened following notification by other authorities.",
        "The insolvency practitioner's report on the causes of insolvency is often the document that triggers the criminal file, which is why it must be examined carefully.",
      ],
    },
    {
      h2: "How transfers of goods and assets before or during insolvency are analysed",
      paragraphs: [
        "The relevant elements are the timing of the operation, the price, the identity of the buyer, the destination of the sums received and the economic justification of the transaction.",
        "A transfer made at market value, with payment received and used in the company's activity, has a different meaning from a transfer at undervalue to a related party shortly before the procedure opened.",
      ],
    },
    {
      h2: "The role of the accounting records and of expert evidence in a fraudulent bankruptcy file",
      paragraphs: [
        "The accounts are the main source of evidence. The absence of records, or their late handover, is often interpreted unfavourably, so the circumstances must be documented.",
        "A judicial accounting expert report can establish the real financial position, the causes of insolvency and whether the contested operations affected the creditors. I submit expert objectives and objections to the report.",
      ],
    },
    {
      h2: "Fraudulent bankruptcy and damage to creditors",
      paragraphs: [
        "The damage is assessed by reference to the creditors' unsatisfied claims and to the effect of the contested operations on the debtor's estate.",
        [
          { text: "Where the sums or assets were transferred through several companies or accounts, the file may also involve " },
          { text: "money laundering", to: "/en/services/money-laundering-and-asset-concealment" },
          { text: " charges, and the defense must be built jointly." },
        ],
      ],
    },
    {
      h2: "How I build the defense in a fraudulent bankruptcy file",
      bullets: [
        "I reconstruct the chronology of the insolvency and of the contested operations.",
        "I prove the economic justification of the transfers and the destination of the sums.",
        "I document the state of the accounts and how the records were handed over.",
        "I challenge the claimed damage through expert evidence and objections.",
        "I prepare you for questioning and assist you at every hearing.",
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "Does the company's bankruptcy mean fraudulent bankruptcy?",
      a: "No. Insolvency can result from objective causes or from commercial decisions that proved wrong. The offense requires conduct carried out in fraud of creditors.",
    },
    {
      q: "Is the director automatically liable?",
      a: "No. Liability is personal and is assessed on the decisions taken, on the documents signed and on the moment when the contested operations were carried out.",
    },
    {
      q: "Is selling the company's assets before insolvency an offense?",
      a: "Not in itself. What matters is the price, the buyer, the destination of the sums and the economic justification of the operation.",
    },
    {
      q: "Who can file the complaint?",
      a: "Creditors, the insolvency practitioner or liquidator, or the authorities that notify the prosecutor on the basis of the insolvency file.",
    },
    {
      q: "What is the difference between simple and fraudulent bankruptcy?",
      a: "Simple bankruptcy concerns failing to request the opening of the procedure in time. Fraudulent bankruptcy requires conduct carried out in fraud of creditors.",
    },
    {
      q: "What is the role of the insolvency practitioner?",
      a: "The practitioner administers the procedure and reports on the causes of insolvency. Those reports often become the basis of the criminal file.",
    },
    {
      q: "Can assets be frozen?",
      a: "Yes, through precautionary measures ordered to secure recovery of the damage claimed by creditors. The measure can be challenged where it is disproportionate.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 241 on fraudulent bankruptcy.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Code - art. 240 on simple bankruptcy.", href: CP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

export const computerFraudEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/computer-fraud",
  altPath: "/servicii/frauda-informatica",
  roPath: "/servicii/frauda-informatica",
  title: "Computer Fraud Lawyer Bucharest | Bogdan Lamatic",
  h1: "Computer fraud lawyer in Bucharest",
  description:
    "Computer fraud lawyer in Bucharest. Defense in cases involving fraudulent financial operations, online payments and computer data. Call now.",
  keywords: "computer fraud lawyer bucharest, online fraud attorney romania, cybercrime defense lawyer",
  breadcrumbLabel: "Computer fraud",
  serviceName: "Computer fraud lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for computer fraud, or have you lost money through a fraudulent online operation?",
    "The evidence in these files is technical: IP addresses, logs, accounts, devices. How it is obtained and interpreted can change the case entirely.",
  ],
  bio: [
    `${BIO_INTRO} I assist persons investigated for computer fraud and fraudulent financial operations, as well as persons harmed by such conduct.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Tell me what operations are investigated and what has already happened in the file."],
      subsections: [
        {
          h3: "You are investigated for transactions or operations carried out online",
          paragraphs: ["I check what conduct is alleged and whether the evidence actually links you to the operations in question."],
        },
        {
          h3: "Accounts, devices or computer data are being investigated",
          paragraphs: ["Technical data is interpretable. An account or an IP address does not automatically identify the person who used it."],
        },
        {
          h3: "The police or DIICOT have seized phones, laptops or other devices",
          paragraphs: [
            [
              { text: "The way the devices were seized and searched matters. The applicable rules are set out on the page dedicated to the " },
              { text: "computer search", to: "/en/services/computer-search" },
              { text: "." },
            ],
          ],
        },
        {
          h3: "The file involves bank transfers, online accounts or cryptocurrencies",
          paragraphs: ["Financial flows must be reconstructed document by document, because the amount of the damage and the precautionary measures depend on them."],
        },
      ],
      ctaAfterSubsections: "I have a computer fraud file - I want an assessment",
    },
    {
      h2: "What I review immediately in a computer fraud file",
      bullets: [
        "What conduct is alleged and whether it matches the elements of the offense.",
        "How the digital evidence was obtained and whether the procedure was lawful.",
        "The link between the accounts, devices and the person investigated.",
        "The bank transactions and the destination of the sums.",
        "The claimed damage and the civil claims in the file.",
        "The devices seized and the possibility of obtaining their return.",
      ],
    },
    {
      h2: "What you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me what happened and what documents you have received so far."],
      subsections: [
        {
          h3: "Search and seizure records",
          paragraphs: ["The minutes drawn up when the devices were seized and any authorisation communicated to you."],
        },
        {
          h3: "Bank statements and transactions",
          paragraphs: ["Statements showing the contested transfers and the accounts involved."],
        },
        {
          h3: "Relevant messages, emails and accounts",
          paragraphs: ["The correspondence connected to the operations, together with details of the accounts referred to in the file."],
        },
        {
          h3: "Documents on the seized devices",
          paragraphs: ["The list of items seized and any receipt confirming what was taken."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What computer fraud is",
      paragraphs: [
        "Computer fraud means causing a patrimonial loss by introducing, altering or deleting computer data, by restricting access to such data or by hindering the functioning of a computer system, in order to obtain a benefit.",
        "The essential element is the intervention on data or on the system, not the misleading of a person.",
      ],
    },
    {
      h2: "What conduct can amount to computer fraud",
      subsections: [
        {
          h3: "Introducing or transmitting computer data",
          paragraphs: ["Inserting data into a system in order to produce an unlawful patrimonial result."],
        },
        {
          h3: "Altering or deleting data",
          paragraphs: ["Changing or removing existing data, so that the system produces a different outcome."],
        },
        {
          h3: "Restricting access to data",
          paragraphs: ["Blocking legitimate access to data, with patrimonial consequences for the injured party."],
        },
        {
          h3: "Hindering the functioning of a computer system",
          paragraphs: ["Any intervention that prevents the system from operating normally, with the purpose of obtaining a benefit."],
        },
      ],
    },
    {
      h2: "The difference between computer fraud and deception",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        [
          { text: "In " },
          { text: "deception", to: "/en/services/fraud-and-deception" },
          { text: ", a person is misled and acts on a false picture of reality." },
        ],
        "In computer fraud, no person is misled. The result is obtained by intervening on the data or on the functioning of the system. The distinction determines the legal classification and the sentencing limits.",
      ],
    },
    {
      h2: "Computer fraud and other computer offenses",
      subsections: [
        {
          h3: "Unlawful access to a computer system",
          paragraphs: ["Accessing a system without authorisation is a separate offense and can be retained together with computer fraud."],
        },
        {
          h3: "Computer forgery",
          paragraphs: ["Altering data in order to produce legal consequences is criminalised separately from fraud."],
        },
        {
          h3: "Fraudulent financial operations",
          paragraphs: ["Operations carried out with payment instruments or with data obtained unlawfully are regulated distinctly and frequently appear in these files."],
        },
      ],
    },
    {
      h2: "How digital evidence is analysed in a computer fraud file",
      subsections: [
        {
          h3: "Phones and computers",
          paragraphs: ["The data extracted from devices must be obtained lawfully and correlated with other evidence in the file."],
        },
        {
          h3: "IP addresses, accounts and logs",
          paragraphs: ["Technical data indicates a connection or an account, not necessarily the person who used it at that moment."],
        },
        {
          h3: "Bank transactions",
          paragraphs: ["Financial flows are reconstructed on statements and can show who actually benefited from the sums."],
        },
        {
          h3: "Data from online platforms and services",
          paragraphs: ["Information provided by service providers must be verified against the period and the accounts relevant to the file."],
        },
      ],
    },
    {
      h2: "Computer search and seizure of devices",
      paragraphs: [
        "A computer search requires judicial authorisation and must be carried out within the limits set out in that authorisation.",
        "I check the lawfulness of the procedure, what was actually seized and how the data was preserved, and I request the return of devices where they are no longer needed for the file.",
      ],
    },
    {
      h2: "Computer fraud and cryptocurrency transactions",
      paragraphs: [
        [
          { text: "Where the file involves digital assets, the flows can be traced on the blockchain and are analysed as described for " },
          { text: "crypto asset investigations", to: "/en/services/crypto-asset-investigations" },
          { text: "." },
        ],
        "Holding an address or a wallet does not in itself prove participation in the alleged conduct. The link with the person investigated must be established by evidence.",
      ],
    },
    {
      h2: "Freezing, confiscation and recovery of the damage",
      paragraphs: [
        "Accounts, sums and digital assets can be frozen to secure recovery of the damage and possible confiscation.",
        "I check the proportionality of the measure against the damage retained in the file and file a challenge where the freezing affects assets unconnected to the alleged conduct.",
      ],
    },
    {
      h2: "How I build the defense in a computer fraud file",
      bullets: [
        "I contest the link between the accounts or devices and your person.",
        "I check the lawfulness of the way the digital evidence was obtained.",
        "I analyse the real amount of the damage and the destination of the sums.",
        "I request the return of the seized devices where they are no longer needed.",
        "I prepare you for questioning and assist you at every hearing.",
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "What is the difference between computer fraud and deception?",
      a: "In deception a person is misled. In computer fraud the patrimonial result is obtained by intervening on computer data or on the functioning of a system.",
    },
    {
      q: "Is using the internet enough for computer fraud to exist?",
      a: "No. The offense requires an intervention on data or on the system. Simply using the internet in a transaction does not amount to computer fraud.",
    },
    {
      q: "Can the police seize my phone or laptop?",
      a: "Yes, under the conditions provided by law, based on judicial authorisation. The lawfulness of the procedure and the scope of what was seized can be verified and challenged.",
    },
    {
      q: "What is a computer search?",
      a: "It is the procedure by which stored computer data is searched and examined, on the basis of a judicial authorisation and within the limits it sets.",
    },
    {
      q: "How is it established who used an account or a device?",
      a: "Through technical data correlated with other evidence. An IP address or an account is not, by itself, proof of the identity of the person who used it.",
    },
    {
      q: "Can cryptocurrency transactions be traced?",
      a: "Yes, transfers can be followed on the blockchain, but linking an address to a specific person must be proven by additional evidence.",
    },
    {
      q: "What happens to the seized devices?",
      a: "They remain in the file while they are needed as evidence. Their return can be requested once the technical examination has been completed.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 249 on computer fraud.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Code - art. 250 and 325 on fraudulent financial operations and computer forgery.", href: CP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

export const euFundsFraudEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/eu-funds-fraud",
  altPath: "/servicii/fonduri-europene",
  roPath: "/servicii/fonduri-europene",
  title: "EU Funds Fraud Lawyer Bucharest | Bogdan Lamatic",
  h1: "EU funds fraud lawyer in Bucharest",
  description:
    "EU funds fraud lawyer in Bucharest. Defense in cases on misuse of EU funds, project irregularities and anti-fraud controls. Call now.",
  keywords: "eu funds fraud lawyer bucharest, misuse of eu funds romania, dlaf investigation attorney",
  breadcrumbLabel: "EU funds",
  serviceName: "EU funds fraud lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Is your EU-funded project under review by the anti-fraud department, the managing authority or the prosecutor?",
    "The line between an administrative irregularity and a criminal offense is drawn on the project documents, and those documents must be prepared properly from the first control.",
  ],
  bio: [
    `${BIO_INTRO} I assist beneficiaries of EU funds, directors and persons involved in project implementation, during controls and in criminal files concerning EU funds.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in right now?",
      paragraphs: ["Tell me what stage your project has reached."],
      subsections: [
        {
          h3: "You have received a request or a control concerning an EU-funded project",
          paragraphs: ["The answers given to the managing authority become part of the file. I prepare them with you, on the project documents."],
        },
        {
          h3: "The anti-fraud department is reviewing the project",
          paragraphs: ["An anti-fraud control can be followed by a criminal notification. I analyse the scope of the control and prepare a position on each point raised."],
        },
        {
          h3: "You have been summoned by DNA, the prosecutor or another investigating body",
          paragraphs: [
            [
              { text: "Before being questioned you need to know what offense is investigated and on what documents it rests. For files handled by the National Anticorruption Directorate the rules are set out on the " },
              { text: "DNA lawyer", to: "/en/services/dna-lawyer" },
              { text: " page." },
            ],
          ],
        },
        {
          h3: "The documents used to obtain the financing are contested",
          paragraphs: ["I check each contested document, its origin and whether the information it contained was relevant to the award of the financing."],
        },
        {
          h3: "The authority is requesting recovery of the funds",
          paragraphs: ["Recovery of the sums is separate from criminal liability. The two procedures can run in parallel and must be handled in a coordinated way."],
        },
      ],
      ctaAfterSubsections: "I have an EU funds file - I want an assessment",
    },
    {
      h2: "What I review immediately in an EU funds file",
      bullets: [
        "What conduct is concretely alleged and what document supports the accusation.",
        "The conditions in the applicable guidelines and in the financing contract.",
        "The supporting documents submitted with the payment or reimbursement claims.",
        "The procurement procedures carried out within the project.",
        "The findings of the managing authority and of the anti-fraud department.",
        "How the damage was calculated and the precautionary measures ordered.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me under which programme the project was financed and what exactly is being claimed."],
      subsections: [
        {
          h3: "The application and the financing contract",
          paragraphs: ["The application, the contract and its amendments, together with the applicable guidelines."],
        },
        {
          h3: "The payment and reimbursement claims",
          paragraphs: ["The claims submitted, the progress reports and the correspondence with the managing authority."],
        },
        {
          h3: "The invoices and supporting documents",
          paragraphs: ["Invoices, proof of payment, acceptance records and documents on the deliveries made."],
        },
        {
          h3: "The procurement documents",
          paragraphs: ["The tender documentation, the offers received, the evaluation reports and the contracts concluded."],
        },
        {
          h3: "The control reports and the authorities' findings",
          paragraphs: ["The notes establishing irregularities, the anti-fraud reports and any criminal notification communicated to you."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "When an irregularity concerning EU funds can become a criminal file",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "An irregularity is a departure from the financing rules, which triggers financial corrections and recovery of the affected sums. It can result from differing interpretations, reporting errors or procedural flaws.",
        [
          { text: "A criminal offense requires, in addition, the use of false, inaccurate or incomplete documents or declarations, or the omission of information, with the intention of obtaining the funds. This distinction is essential in " },
          { text: "financial crime", to: "/en/services/financial-crime" },
          { text: " files concerning European financing." },
        ],
      ],
    },
    {
      h2: "What conduct can amount to EU funds fraud",
      subsections: [
        {
          h3: "Using false, inaccurate or incomplete documents or declarations",
          paragraphs: ["Submitting documents that do not reflect reality, in order to obtain the financing or the reimbursement of expenses."],
        },
        {
          h3: "Omitting information relevant to obtaining the funds",
          paragraphs: ["Failing to disclose data the beneficiary was required to communicate, where that data affected the award of the financing."],
        },
        {
          h3: "Changing the destination of the funds obtained",
          paragraphs: ["Using the sums for a purpose other than the one for which they were granted, which is criminalised separately."],
        },
        {
          h3: "Other conduct affecting the financial interests of the European Union",
          paragraphs: ["Conduct causing a loss to the Union budget, including in connection with the procurement procedures of the project."],
        },
      ],
      calloutAfterSubsections: "The specific criminal regime is provided mainly by articles 18 indent 1 to 18 indent 5 of Law 78/2000, while the unlawful change of the funds' destination is regulated separately.",
    },
    {
      h2: "The difference between an administrative irregularity and criminal EU funds fraud",
      paragraphs: [
        "An irregularity is established by the managing authorities or the control bodies and is resolved through financial corrections and recovery of the sums.",
        "Fraud requires the intention to obtain funds that are not due, proven through false documents, omitted information or use of the sums for another purpose. Without that intentional element, the matter remains administrative.",
      ],
    },
    {
      h2: "Who investigates EU funds fraud",
      subsections: [
        {
          h3: "The role of the anti-fraud department",
          paragraphs: ["The anti-fraud department carries out administrative controls concerning EU funds and can notify the criminal investigation bodies."],
        },
        {
          h3: "The criminal investigation",
          paragraphs: ["The investigation is conducted by the prosecutor, with evidence, expert reports and questioning, and the defense can file requests throughout."],
        },
        {
          h3: "Which body has jurisdiction over the file",
          paragraphs: ["Depending on the offense, on the capacity of the persons involved and on the amount of the damage, jurisdiction may lie with the National Anticorruption Directorate or with the ordinary prosecutor's offices."],
        },
      ],
      calloutAfterSubsections: "The anti-fraud department also operates an official channel for reporting fraud affecting European Union funds.",
    },
    {
      h2: "Contested documents in EU funds files",
      paragraphs: [
        [
          { text: "The accusation concerning documents submitted to the financing authority is frequently analysed together with " },
          { text: "forgery and use of forgery", to: "/en/services/forgery-and-use-of-forgery" },
          { text: ", because the same documents support both charges." },
        ],
        "I check the origin of each document, who drafted it and whether the contested information was relevant to the financing decision. An inaccurate document is not automatically a forged one.",
      ],
    },
    {
      h2: "Procurement problems in an EU-funded project",
      paragraphs: [
        "Procurement is the area generating most findings: restrictive criteria, offers prepared by the same person, overpriced contracts or amendments made during performance.",
        "Not every procedural departure amounts to an offense. I analyse whether it caused an actual loss and whether there is proof of intentional conduct, rather than an error in applying the procedure.",
      ],
    },
    {
      h2: "Are recovery of the funds and criminal liability the same thing?",
      paragraphs: [
        "No. Recovery of the funds is an administrative consequence of the irregularity established and can exist even where no criminal offense is retained.",
        "The obligation to return part of the financing does not, in itself, prove an offense. The two procedures have different conditions and different standards of proof.",
      ],
    },
    {
      h2: "How the damage is established in an EU funds file",
      paragraphs: [
        "The damage is assessed by reference to the sums unduly paid from European funds or from national co-financing, not to the total value of the project.",
        "I analyse which expenses were actually incurred and justified, support expert evidence where the calculation is questionable and file objections to the reports in the file.",
      ],
    },
    {
      h2: "Asset freezing and recovery of the damage",
      paragraphs: [
        "Precautionary measures are frequently ordered over accounts, real estate or assets purchased through the project, to secure recovery of the damage.",
        "I check the proportionality of the measure against the amount retained and file a challenge where the freezing affects assets unconnected to the project or exceeds the claimed damage.",
      ],
    },
    {
      h2: "How I build the defense in an EU funds file",
      bullets: [
        "I separate the administrative irregularity from the criminal accusation, on the project documents.",
        "I prove the reality of the expenses and of the activities implemented.",
        "I contest the alleged falsity or the relevance of the documents in question.",
        "I challenge the damage calculation through expert evidence and objections.",
        "I prepare you for questioning and assist you at every hearing, including in files handled by DNA.",
      ],
      cta: "I want a strategy for my file",
    },
  ],
  faq: [
    {
      q: "Does any irregularity in a project mean fraud?",
      a: "No. An irregularity triggers financial corrections and recovery of the sums. Fraud requires the intention to obtain funds that are not due, through false documents, omitted information or use of the sums for another purpose.",
    },
    {
      q: "If I have to return the financing, does that mean I committed an offense?",
      a: "No. The obligation to return is an administrative consequence and can exist without any criminal offense. The two procedures have different conditions and standards of proof.",
    },
    {
      q: "What documents can generate a criminal file?",
      a: "Documents submitted to obtain the financing or the reimbursement of expenses, where they do not reflect reality: invoices, acceptance records, declarations or procurement documents.",
    },
    {
      q: "Who investigates EU funds fraud?",
      a: "Administrative control is carried out by the anti-fraud department and the managing authorities, while the criminal investigation is conducted by the prosecutor, including by the National Anticorruption Directorate.",
    },
    {
      q: "Can the company and the director be liable at the same time?",
      a: "Yes. The legal entity can be criminally liable alongside the individuals involved, and in parallel there may be an obligation to return the funds.",
    },
    {
      q: "Can assets be frozen?",
      a: "Yes, including assets purchased through the project or other assets, up to the amount of the damage retained. The measure can be challenged where it is disproportionate.",
    },
    {
      q: "What happens if the funds were used for another purpose?",
      a: "Changing the destination of the funds is regulated separately and can trigger criminal liability, alongside the obligation to return the sums.",
    },
    {
      q: "Can forgery charges appear in the same file?",
      a: "Yes. The accusation concerning documents submitted to the financing authority is frequently analysed together with forgery and use of forgery, because the same documents support both charges.",
    },
  ],
  resources: [
    { text: "Law 78/2000 - offenses against the financial interests of the European Union.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code - art. 249 and following on precautionary measures.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};

/* ============================================================
   Sub-services - Corruption and public office pillar page
   ============================================================ */

const L78_EN = "https://legislatie.just.ro/Public/DetaliiDocument/22361";

const PARENT_COR_EN = {
  to: "/en/services/corruption-and-public-office-offenses",
  label: "corruption and public office offenses",
  breadcrumbLabel: "Corruption and public office offenses",
};

export const briberyGivingAndTakingEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/bribery-giving-and-taking",
  altPath: "/servicii/dare-luare-de-mita",
  roPath: "/servicii/dare-luare-de-mita",
  title: "Bribery Lawyer Bucharest | Bogdan Lamatic",
  h1: "Bribery lawyer in Bucharest - giving and taking bribes",
  description:
    "Bribery lawyer in Bucharest. Defense in giving and taking bribe cases, flagrante delicto, questioning and preventive measures. Call now.",
  keywords: "bribery lawyer bucharest, taking bribe defense romania, giving bribe lawyer",
  breadcrumbLabel: "Bribery",
  serviceName: "Bribery lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for giving or taking a bribe, or were you caught in a flagrante delicto operation?",
    "In these files, the first statements, the intercepted conversations and the way the sum or benefit is described set the direction of the whole investigation.",
  ],
  bio: [
    `${BIO_INTRO} I assist public officials, private sector employees and people accused of offering sums or other benefits, in bribery files handled by the Prosecutor's Office or by the DNA.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What is your situation right now?",
      paragraphs: ["Tell me at what stage you are, because the defense is built differently in each of these situations."],
      subsections: [
        {
          h3: "You were caught in flagrante delicto",
          paragraphs: [
            "I check how the operation was organised, whether the legal conditions were met and how the sums or goods seized were recorded.",
          ],
        },
        {
          h3: "You were summoned for questioning as a suspect",
          paragraphs: [
            "I analyse the prosecutor's order, establish what offense is actually alleged and we prepare your statement before you attend.",
          ],
        },
        {
          h3: "You offered or promised a sum and are now investigated",
          paragraphs: [
            "I check whether the act was determined by coercion from the official and whether the statutory ground for impunity available to the reporting person can apply.",
          ],
        },
        {
          h3: "A preventive measure has been proposed in the file",
          paragraphs: [
            "I prepare the defense for the detention or judicial control request and challenge the grounds invoked by the prosecutor.",
          ],
        },
      ],
      ctaAfterSubsections: "I am investigated for bribery - I want an assessment",
    },
    {
      h2: "What I analyse immediately in a bribery file",
      bullets: [
        "The capacity of the investigated person and their actual duties.",
        "The link between the sum or benefit claimed and a concrete official act.",
        "The lawfulness of interceptions, ambient recordings and authorisations.",
        "How the flagrante delicto operation was organised and how the seized items were recorded.",
        "The statements of the reporting person and their consistency throughout the file.",
        "The precautionary measures ordered over accounts and assets.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Send me whatever you have at hand, even if the file is at an early stage."],
      subsections: [
        {
          h3: "Documents received from the judicial authorities",
          paragraphs: ["The summons, the order initiating criminal action, the flagrante delicto or search report."],
        },
        {
          h3: "Employment documents",
          paragraphs: ["Job description, internal decisions, regulations and any document showing your actual duties."],
        },
        {
          h3: "Relevant correspondence",
          paragraphs: ["Messages, e-mails or documents explaining the nature of your relationship with the reporting person."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What to do if you were caught in flagrante delicto for giving or taking a bribe",
      paragraphs: [
        "Flagrante delicto is the moment when most of the evidence against you is gathered, but also the moment when most procedural mistakes are made. The first hours after it often decide the direction of the whole case.",
        "Do not sign anything and do not explain anything before speaking with a lawyer. You have the right to remain silent and that right cannot be used against you.",
      ],
      subsections: [
        {
          h3: "What I check in the flagrante delicto report",
          paragraphs: ["The report fixes the moment of the alleged act, so any inconsistency in it can change how the evidence is interpreted."],
          bullets: [
            { bold: "Time and place:", rest: "whether they match the other evidence in the file, including phone data or surveillance footage." },
            { bold: "Assisting witnesses:", rest: "whether they were actually present and signed under the conditions required by law." },
            { bold: "Description of the money or benefits:", rest: "banknote serial numbers, the marking method, the exact place where the items were found." },
            { bold: "Consistency with the authorisation:", rest: "whether the activity carried out falls within what the judge or the prosecutor had authorised." },
          ],
        },
        {
          h3: "What must be checked before your first statement",
          bullets: [
            { bold: "Procedural capacity:", rest: "whether you are questioned as a witness, a suspect or a defendant, because the rights differ substantially." },
            { bold: "Right to a lawyer:", rest: "whether it was actually communicated to you and whether you were able to talk to your lawyer before questioning." },
            { bold: "Right to remain silent:", rest: "you may refuse to give statements without any negative legal consequence." },
            { bold: "The risk of statements given under pressure:", rest: "a statement given under stress, without access to the case file, is very hard to correct later." },
          ],
        },
        {
          h3: "Interceptions and recordings used in flagrante delicto",
          bullets: [
            { bold: "Authorisation:", rest: "the existence of the technical surveillance warrant and whether it covers the period when the recordings were made." },
            { bold: "The moment they were obtained:", rest: "whether the recordings were made before or after the authorisation." },
            { bold: "Match with the transcripts:", rest: "whether the written version faithfully reflects the audio content, including pauses and incomplete sentences." },
          ],
        },
        {
          h3: "The role of the reporting person and the issue of entrapment",
          paragraphs: [
            "Many bribery files start from a report. I check whether the reporting person has an interest of their own, whether they cooperated with the investigating authorities and, more importantly, whether the act already existed or was triggered by their insistence.",
            "The line between recording an existing act and provoking it is essential: evidence obtained through entrapment cannot be used against you.",
          ],
        },
      ],
      calloutAfterSubsections: "Were you caught in flagrante delicto right now? You do not have the documents with you?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaAfterSubsections: "Was there a flagrante delicto? - Call me now!",
    },
    {
      h2: "Reporting, coercion and exemption from punishment for giving a bribe",
      paragraphs: [
        "Art. 290 of the Criminal Code contains two important safety valves for the person who gave the bribe: the situation where the act was committed under coercion and the exemption from punishment through self-reporting. Both have strict conditions.",
      ],
      subsections: [
        {
          h3: "When reporting can remove the punishment",
          paragraphs: [
            "The bribe giver is not punished if they report the act before the criminal investigation body was notified about it. The report must be complete and must concern the specific act, not just a general description of irregularities.",
          ],
        },
        {
          h3: "What it means that the investigation body had not yet been notified",
          paragraphs: [
            "The condition is assessed by reference to the moment the judicial authorities received the first information about your act, through a complaint, a report, an ex officio notification or an official record. If the file had already been opened for that act, the report no longer produces the exemption, but it can matter when the sentence is individualised.",
          ],
        },
        {
          h3: "What happens if you were coerced into giving a bribe",
          paragraphs: [
            "If you gave the money or benefits because you were coerced by the person who took the bribe, the act is not an offense. Evidence is decisive here: messages, witnesses, repeated refusals, requests abusively rejected or unjustified delays of an act you were entitled to.",
          ],
        },
        {
          h3: "When the money is returned and when it is confiscated",
          bullets: [
            { bold: "Return:", rest: "the money or assets are returned to the person who gave the bribe under coercion, as well as to the person who reported the act before the authorities were notified." },
            { bold: "Confiscation:", rest: "in all other situations, the sums and benefits received are confiscated and, where they can no longer be found, their monetary equivalent is confiscated." },
            { bold: "Assets marked during flagrante delicto:", rest: "they remain frozen until the case is resolved, even if they come from lawful sources." },
          ],
        },
      ],
    },
    {
      h2: "When can a gift, a token of appreciation or a benefit be considered a bribe?",
      paragraphs: [
        "Many people investigated for bribery do not recognise themselves in the wording „I gave” or „I took a bribe”. In practice, the discussion is about a gift, a token of appreciation, a meal, a repair, a discount or help between acquaintances.",
        "Art. 289 of the Criminal Code refers to money or other undue benefits received in connection with performing, not performing, speeding up or delaying an act falling within the official duties of the public official. The link with official duties is what turns a social gesture into a criminal charge.",
      ],
      bullets: [
        { bold: "The link with official duties:", rest: "whether the person had the power to decide on, approve or influence that act." },
        { bold: "Undue benefits:", rest: "any financial or non-financial advantage the person was not entitled to, regardless of what it was called." },
        { bold: "Timing:", rest: "a benefit offered before the act is seen differently from a gift given long after a working relationship ended." },
        { bold: "Value and context:", rest: "a symbolic gesture in a private context, unrelated to a pending file, does not carry the same meaning as a benefit proportionate to the decision obtained." },
        { bold: "Repetition:", rest: "repeated tokens of appreciation given to the same decision maker are almost always interpreted as a bribe." },
      ],
      paragraphsAfterBullets: [
        "There are situations with no offense at all: courtesy gestures unrelated to an official act, advantages granted lawfully and transparently, or payments made under a genuine contract with supporting documents.",
        [
          { text: "Where the benefit was offered to a person claiming influence over an official, the correct classification may be " },
          { text: "influence peddling or buying influence", to: "/en/services/influence-peddling" },
          { text: ", with a different evidentiary regime." },
        ],
      ],
    },
    {
      h2: "How interceptions and recordings are analysed in a bribery file",
      paragraphs: [
        "In corruption files, interceptions and ambient recordings are often the central evidence. That is exactly why they are also the evidence most open to challenge, when analysed in detail.",
      ],
      bullets: [
        { bold: "Authorisation:", rest: "I check the existence and limits of the technical surveillance warrant, the period covered, the persons and means of communication targeted, and the reasoning behind the measure." },
        { bold: "Integrity of the recording:", rest: "continuity of the files, absence of unjustified interruptions, the way it was stored and transferred, the existence of reference copies." },
        { bold: "Context of the conversation:", rest: "an isolated sentence can completely change the meaning; I request the full conversation, not only the selected excerpt." },
        { bold: "Incomplete transcripts:", rest: "I compare the written version with the audio to identify omitted passages, misheard words or lines wrongly attributed." },
        { bold: "Interpretation of ambiguous expressions:", rest: "generic phrases such as „we will sort it out” or „we will see what we can do” do not, on their own, prove a promise of a bribe." },
      ],
      calloutAfterBullets: "There are interceptions in the file and you do not know exactly what they contain?",
      calloutAfterBulletsCta: "Call anyway",
    },
    {
      h2: "Seizure and confiscation in a bribery file",
      paragraphs: [
        "In parallel with the criminal investigation, the prosecutor can order precautionary measures over assets and accounts, in order to secure confiscation or recovery of the damage. These measures immediately affect daily activity and the family business.",
      ],
      bullets: [
        { bold: "Precautionary measures:", rest: "seizure, garnishment and freezing of accounts can be ordered by prosecutor's order, before any conviction." },
        { bold: "What assets can be frozen:", rest: "sums of money, bank accounts, real estate, vehicles and, in certain situations, assets held by other persons." },
        { bold: "Special confiscation:", rest: "the money and benefits received as a bribe are confiscated and, if they can no longer be found, their equivalent in money or assets is confiscated." },
        { bold: "Return of assets:", rest: "assets given under coercion or connected to a report made before the authorities were notified can be returned." },
        { bold: "Challenging the measure:", rest: "seizure can be challenged and its limits reduced where it exceeds the value of the alleged benefit or covers assets unrelated to the act." },
      ],
      paragraphsAfterBullets: [
        "I check the proportionality of the measure, the lawful source of the assets and the documents showing they do not come from the investigated act. A well documented challenge can unblock economic activity even during the criminal investigation.",
      ],
      cta: "Have your accounts been frozen? - Call me now!",
    },
    {
      h2: "What taking a bribe means",
      paragraphs: [
        "Taking a bribe means claiming, receiving or accepting the promise of money or other benefits by a public official, in connection with performing, not performing or delaying an act falling within their official duties.",
        "The offense is set out in art. 289 of the Criminal Code and can be retained even if the money was never actually received, since claiming or accepting the promise is enough.",
        [
          { text: "Where the case is investigated alongside other economic charges, the file often falls within the area of " },
          { text: "economic crime defense", to: "/en/services/financial-crime" },
          { text: ", with expert evidence and analysis of financial flows." },
        ],
      ],
    },
    {
      h2: "What giving a bribe means",
      paragraphs: [
        "Giving a bribe consists of promising, offering or giving money or other benefits to a public official so that the official performs, does not perform or delays an official act. The offense is set out in art. 290 of the Criminal Code.",
        "The law provides two important situations: the act is not an offense where the person was coerced into giving the bribe, and the giver is not punished if they report the act before the criminal investigation body was notified.",
      ],
    },
    {
      h2: "Who can be a subject of the offense",
      paragraphs: [
        "The text targets public officials, but liability is extended by art. 308 of the Criminal Code to persons exercising duties within a private legal entity, such as directors, managers or employees with decision-making powers.",
        "Law 78/2000 assimilates certain professional categories and extends these texts to corruption acts connected with public or European funds.",
      ],
    },
    {
      h2: "What you actually risk in a bribery file",
      cardClassName: "bg-[#faf0e6]",
      bullets: [
        "Imprisonment, within the limits set by the relevant text for each offense.",
        "A ban on holding public office or on practising your profession.",
        "Confiscation of the sums or goods that were the object of the bribe.",
        "Precautionary measures over personal accounts and assets during the proceedings.",
        "Disciplinary and professional consequences running in parallel with the criminal case.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "If detention or judicial control is already being discussed, the defense must be prepared immediately for the " },
          { text: "preventive measure hearing", to: "/en/services/preventive-measures" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "The difference between bribery and influence peddling",
      paragraphs: [
        "In bribery, the benefit is claimed by or offered to the very official who holds the relevant duty.",
        [
          { text: "In " },
          { text: "buying or trading influence", to: "/en/services/influence-peddling" },
          { text: ", the benefit goes to a person who claims to have influence over the official, without the official receiving anything." },
        ],
        "This distinction has direct consequences for the legal classification and for the evidence that must be produced.",
      ],
    },
    {
      h2: "How I build the defense",
      bullets: [
        "I check whether there is proven link between the benefit and a concrete official act.",
        "I challenge the lawfulness of evidence obtained through interception or through a collaborator.",
        "I analyse the role of the reporting person and any entrapment.",
        "I argue coercion or lack of intent, where the evidence allows it.",
        "I prepare you for questioning and assist you at every hearing, including in files handled by DNA.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "When the investigation is run by the anticorruption prosecutors, the specific rules are described on the page dedicated to " },
          { text: "DNA case assistance", to: "/en/services/dna-lawyer" },
          { text: "." },
        ],
      ],
      cta: "Why choose me",
    },
  ],
  faq: [
    {
      q: "Can bribery be retained if I never received the money?",
      a: "Yes. Claiming the sum or accepting the promise is sufficient, even if the money was never actually handed over.",
    },
    {
      q: "What happens if I was coerced into giving a bribe?",
      a: "The law provides that the act is not an offense where the giver was coerced by the person who received the benefit. Coercion must, however, be proven.",
    },
    {
      q: "Does reporting the act exempt me from punishment?",
      a: "The giver is not punished if they report the act before the criminal investigation body was notified about it. The conditions must be checked carefully in each case.",
    },
    {
      q: "Can an employee of a private company be accused of bribery?",
      a: "Yes. Through the extension of liability, the texts also apply to persons exercising duties within a private legal entity, with reduced penalty limits.",
    },
    {
      q: "Is money seized during the operation returned?",
      a: "Sums that were the object of the bribe are subject to confiscation. The status of other seized goods is analysed separately.",
    },
    {
      q: "Who investigates bribery files?",
      a: "Depending on the capacity of the person and the value of the benefit, jurisdiction lies with the ordinary prosecutor's offices or with the National Anticorruption Directorate.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 289 and art. 290 on taking and giving bribes.", href: CP, linkLabel: "Legislation" },
    { text: "Law 78/2000 on preventing, discovering and sanctioning corruption offenses.", href: L78_EN, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR_EN,
};

export const influencePeddlingEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/influence-peddling",
  altPath: "/servicii/trafic-de-influenta",
  roPath: "/servicii/trafic-de-influenta",
  title: "Influence Peddling Lawyer Bucharest | Bogdan Lamatic",
  h1: "Influence peddling lawyer in Bucharest",
  description:
    "Influence peddling and buying of influence lawyer in Bucharest. Defense in corruption files based on interceptions and reports. Call now.",
  keywords: "influence peddling lawyer bucharest, buying of influence defense, trading in influence romania",
  breadcrumbLabel: "Influence peddling",
  serviceName: "Influence peddling lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you accused of claiming money by saying you have influence over an official, or of paying for such an intervention?",
    "In these files, everything turns on the content of the recorded discussions and on how the promise made is interpreted.",
  ],
  bio: [
    `${BIO_INTRO} I assist people investigated for influence peddling and buying of influence, in files built on reports, interceptions and ambient recordings.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What is your situation right now?",
      paragraphs: ["Tell me where the file stands, so we know what can be done immediately."],
      subsections: [
        {
          h3: "There is a report against you",
          paragraphs: ["I analyse the content of the report, the moment it was filed and the interest of the reporting person in the file."],
        },
        {
          h3: "You have been summoned for questioning",
          paragraphs: ["We establish what offense is actually alleged and prepare the statement, so that the conversations invoked are explained correctly."],
        },
        {
          h3: "The file contains interceptions or ambient recordings",
          paragraphs: ["I check the authorisations, the integrity of the recordings and the transcripts, because the interpretation of a conversation is often decisive."],
        },
        {
          h3: "You paid for an intervention and are now investigated",
          paragraphs: ["I check whether the ground for impunity through reporting can apply and what the real risks are in your situation."],
        },
      ],
      ctaAfterSubsections: "I want an assessment of my file",
    },
    {
      h2: "What I analyse immediately in the file",
      bullets: [
        "Whether there was a concrete promise to intervene with a determined official.",
        "Whether the influence claimed was real or only asserted, since the offense exists in both situations.",
        "The lawfulness and integrity of the interceptions and recordings.",
        "The role of the reporting person and any entrapment.",
        "The sums claimed, their financial trail and the documents accompanying them.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Send me the documents you received and, if available, the transcripts disclosed in the file."],
      subsections: [
        {
          h3: "Documents from the file",
          paragraphs: ["The summons, the order continuing the criminal investigation, the search report."],
        },
        {
          h3: "Correspondence with the person accusing you",
          paragraphs: ["Messages, e-mails, contracts or documents explaining the real nature of your relationship."],
        },
        {
          h3: "Financial documents",
          paragraphs: ["Bank statements, receipts, consultancy contracts or any document justifying the sums discussed."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "What is the difference between influence peddling and fraud?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Influence peddling and fraud may seem close because in both situations a person can be misled by false promises. The legal difference is however essential: in influence peddling the promise is to intervene with a public official, while in fraud there is no such link.",
        [
          { text: "If you are investigated for an act that seems to contain elements of both offenses, it is useful to see also the page on " },
          { text: "defense in fraud and deception files", to: "/en/services/fraud-and-deception" },
          { text: "." },
        ],
      ],
      subsections: [
        {
          h3: "What happens if the person did not really have influence",
          paragraphs: [
            "Real influence is not a mandatory element of the offense. It is sufficient for the person to let it be believed that they have influence over a public official and to claim or receive benefits in exchange for the promise to intervene. This is the first point where influence peddling clearly separates from fraud, where misleading with regard to a factual situation is required.",
          ],
        },
        {
          h3: "Promise of intervention vs simple misleading",
          paragraphs: [
            "In influence peddling, the object of the promise is to determine the official to perform, not perform or delay an official act. In fraud, the object of the misleading can be any factual situation that leads the victim to transfer assets. If the discussion does not clearly involve an intervention with an official, the influence peddling accusation can be challenged.",
          ],
        },
        {
          h3: "Can both accusations exist in the same file?",
          paragraphs: [
            "Yes. In practice, prosecutors can retain both offenses, especially when the person who claimed to have influence did not actually intervene and the money was received based on a false representation. The defense must precisely delimit the concrete elements of each accusation and the evidence supporting them.",
          ],
        },
      ],
    },
    {
      h2: "The report and the ground for impunity in buying of influence",
      paragraphs: [
        "Article 292 of the Criminal Code expressly provides that the person who bought influence is not punished if they report the act before the criminal investigation body was notified about it. This deadline is the most important and must be carefully checked in each case.",
        [
          { text: "The mechanism is similar to that for " },
          { text: "giving and taking bribes", to: "/en/services/bribery-giving-and-taking" },
          { text: ", but in buying of influence the beneficiary of the benefit is the intermediary, not the official himself." },
        ],
      ],
      subsections: [
        {
          h3: "When the report must be made",
          paragraphs: [
            "The report must be made before the criminal investigation body was notified about the act of buying of influence. Notification can be made by any person, not necessarily the reporting person. Therefore, it is crucial to establish exactly when the criminal investigation started and whether your report was earlier.",
          ],
        },
        {
          h3: "When the ground for impunity no longer applies",
          paragraphs: [
            "The ground for impunity can no longer apply after the criminal investigation body has been officially notified, after the criminal investigation has started or after procedural measures have been ordered. Also, the report must be real and complete, not just a verbal mention.",
          ],
        },
        {
          h3: "What happens to the money paid",
          paragraphs: [
            "Even if the ground for impunity applies, the money or benefits given are not automatically returned. The law provides for the possibility of confiscation or, in certain conditions, restitution. Each situation must be analysed separately, depending on the stage of the file and the assets identified.",
          ],
        },
      ],
    },
    {
      h2: "The sting operation, the reporting person and entrapment in influence peddling files",
      paragraphs: [
        "Many influence peddling files start from a report and continue with a sting operation. At this stage it becomes essential to check how the evidence was obtained, whether there was entrapment and what the real role of the reporting person was.",
      ],
      subsections: [
        {
          h3: "Consultancy contract, lobbying or influence peddling?",
          paragraphs: [
            "Not every conversation about connections or about how an institution works amounts to influence peddling. The offense requires a concrete promise to intervene with a determined or determinable official and a link between that promise and a benefit claimed or received.",
            "General discussions, genuine consultancy work, lobbying carried out within the limits of the law, or the mere mention of connections without a promise to intervene, do not meet the elements of the offense.",
          ],
        },
        {
          h3: "A consultancy contract does not automatically rule out the accusation",
          paragraphs: [
            "A consultancy contract is not an absolute defense. Prosecutors may find that behind the contract there was in fact a promise of influence. Therefore, I check both the form of the contract and the correspondence, deliverables and justification for the amounts.",
          ],
        },
        {
          h3: "How real professional activity is proven",
          paragraphs: [
            "Real activity is proven with documents: reports, analysis notes, correspondence with institutions, receipts, invoices and any other document showing that the promised service was actually provided. The more concrete evidence exists, the harder it is to retain the offense.",
          ],
        },
        {
          h3: "When payment has a legitimate contractual explanation",
          paragraphs: [
            "Payment is legitimate when there is a real service, the price matches the market, the amounts are documented and there is no direct link between payment and a promise to intervene with an official. I analyse every bank transfer and every justification offered.",
            [
              { text: "For files handled by the DNA, see also the page on " },
              { text: "assistance in anticorruption investigations", to: "/en/services/dna-lawyer" },
              { text: "." },
            ],
          ],
        },
      ],
    },
    {
      h2: "What happens to the money in an influence peddling or buying of influence file",
      paragraphs: [
        "Influence peddling and buying of influence have specific rules on confiscation and, in certain situations, restitution. The sums received or paid can be subject to special confiscation, and precautionary measures can be taken over your assets already during the criminal investigation.",
        "Restitution of money paid for influence is possible only under strictly limited conditions, usually when the act was reported before the criminal investigation bodies were notified. Even so, the court analyses whether the sums can be returned or must be confiscated.",
      ],
      bullets: [
        "Confiscation of the sums or goods that were the object of the offense.",
        "Precautionary measures over assets, ordered during the criminal investigation.",
        "Restitution to the victim, under the conditions provided by law.",
        "Accessory payment obligations, depending on how the money was used.",
      ],
      callout: "If you already have a seizure or confiscation order, I immediately analyse what remedies are available.",
      calloutCta: "Call me now",
    },
    {
      h2: "What influence peddling is",
      paragraphs: [
        "Influence peddling consists of claiming, receiving or accepting the promise of money or other benefits, directly or indirectly, by a person who has influence or who lets it be believed that they have influence over a public official, promising to determine that official to perform, not perform or delay an official act.",
        "The offense is set out in art. 291 of the Criminal Code. It is irrelevant whether the influence was real or merely asserted, and whether the official was ever contacted.",
      ],
    },
    {
      h2: "What buying of influence is",
      paragraphs: [
        "Buying of influence, set out in art. 292 of the Criminal Code, is the act of a person who promises, offers or gives money or other benefits to someone claiming to have influence over a public official.",
        "Here too, the law provides a ground for impunity for the person who reports the act before the criminal investigation body was notified.",
      ],
    },
    {
      h2: "What you risk if the accusation is confirmed",
      bullets: [
        "Imprisonment, within the limits set by the relevant text.",
        "A ban on certain rights, including the right to hold public office.",
        "Confiscation of the sums or goods received.",
        "Precautionary measures over assets, ordered during the criminal investigation.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "When the same file also concerns benefits received directly by the official, the accusation is analysed together with " },
          { text: "bribery charges", to: "/en/services/bribery-giving-and-taking" },
          { text: ", and the distinction between them becomes essential." },
        ],
      ],
    },
    {
      h2: "How I build the defense",
      bullets: [
        "I reconstruct the real context of the discussions, beyond the fragments selected in the indictment.",
        "I challenge inaccurate transcripts and request verification of the integrity of the recordings.",
        "I show, where applicable, that there was genuine professional activity behind the sums received.",
        "I analyse entrapment and the role of the judicial authorities in producing the evidence.",
        "I assist you at questioning and at every hearing, including in files handled by anticorruption prosecutors.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "For files within the jurisdiction of the National Anticorruption Directorate, the procedural particularities are detailed on the page dedicated to " },
          { text: "DNA investigations", to: "/en/services/dna-lawyer" },
          { text: "." },
        ],
      ],
      cta: "Why choose me",
    },
  ],
  faq: [
    {
      q: "Does it matter whether the influence was real?",
      a: "No. The offense is retained even where the person merely lets it be believed that they have influence over the official.",
    },
    {
      q: "Must the official have been contacted?",
      a: "No. The promise to intervene is sufficient, even if the official never learned about the discussion.",
    },
    {
      q: "Does a consultancy contract protect me?",
      a: "Not automatically. The contract matters only if there is real activity behind it, proven by deliverables and correspondence.",
    },
    {
      q: "What happens to the money paid for the intervention?",
      a: "The sums are subject to confiscation. A person who reports the act under the conditions of the law may obtain restitution, within the limits set by law.",
    },
    {
      q: "Can I be investigated based only on a report?",
      a: "A report can trigger the investigation but cannot alone support a conviction. It must be corroborated by other evidence.",
    },
    {
      q: "What is the difference from taking a bribe?",
      a: "In bribery, the benefit is claimed by the official holding the relevant duty. In influence peddling, the benefit goes to an intermediary who promises to intervene.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 291 and art. 292 on trading in and buying of influence.", href: CP, linkLabel: "Legislation" },
    { text: "Law 78/2000 on corruption offenses and assimilated acts.", href: L78_EN, linkLabel: "Legislation" },
    { text: "Rules on confiscation and restitution in criminal matters.", href: "https://legislatie.just.ro/Public/DetaliiDocument/304554", linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR_EN,
};

export const abuseOfOfficeEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/abuse-of-office",
  altPath: "/servicii/abuz-in-serviciu",
  roPath: "/servicii/abuz-in-serviciu",
  title: "Abuse of Office Lawyer Bucharest | Bogdan Lamatic",
  h1: "Abuse of office lawyer in Bucharest",
  description:
    "Abuse of office lawyer in Bucharest. Defense for public officials and directors, damage assessment, expert evidence and asset freezing.",
  keywords: "abuse of office lawyer bucharest, abuse of office defense romania, public official criminal defense",
  breadcrumbLabel: "Abuse of office",
  serviceName: "Abuse of office lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for abuse of office after an audit, a Court of Accounts report or a complaint?",
    "In these files, the defense starts from your exact duties and from the legal text said to have been breached.",
  ],
  bio: [
    `${BIO_INTRO} I assist public officials, mayors, directors, members of procurement committees and private sector managers in abuse of office files.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What is your situation right now?",
      paragraphs: ["Tell me where the file started from, because the source of the accusation shows which evidence must be countered."],
      subsections: [
        {
          h3: "An audit or control report notified the criminal authorities",
          paragraphs: ["I check the findings, the legal basis invoked and whether the irregularities identified are administrative or criminal in nature."],
        },
        {
          h3: "You signed or approved a document now being challenged",
          paragraphs: ["I analyse the circuit of the document, the approvals received and the actual responsibility of each person involved in the decision."],
        },
        {
          h3: "A damage figure has been calculated against you",
          paragraphs: ["I challenge how the loss was calculated and request expert evidence, because the amount directly influences the classification and the penalty limits."],
        },
        {
          h3: "You have been summoned for questioning",
          paragraphs: ["We prepare the statement on documents, so that the technical explanations are recorded correctly from the first hearing."],
        },
      ],
      ctaAfterSubsections: "I want an analysis of the accusation",
    },
    {
      h2: "What I analyse immediately in an abuse of office file",
      bullets: [
        "Which legal provision is said to have been breached.",
        "What duties you actually had, according to the job description and internal acts.",
        "Whether the contested document was also approved or signed by other persons.",
        "The existence of certain damage and the way it was calculated.",
        "The link between your conduct and the loss or harm claimed.",
        "The precautionary measures ordered over your assets.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["The sooner I see the documents, the more precisely I can tell you where the weak point of the accusation lies."],
      subsections: [
        {
          h3: "Documents describing your duties",
          paragraphs: ["Job description, organisation and functioning regulation, appointment decisions and delegations of authority."],
        },
        {
          h3: "The contested document and its circuit",
          paragraphs: ["The signed act, the memos, the legal and economic approvals, internal notes and related correspondence."],
        },
        {
          h3: "The audit or control report",
          paragraphs: ["The Court of Accounts report, the internal audit report or the finding note behind the notification."],
        },
        {
          h3: "Documents concerning the damage",
          paragraphs: ["The calculation of the loss, the annexes and any expert reports already produced."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "Which law must have been breached for abuse of office to exist?",
      paragraphs: [
        "In its current wording, art. 297 of the Criminal Code requires the prosecution to identify the specific act provided for by a law, a government ordinance or another act having the force of law that was not performed, or the provision of such an act that was breached. Without this precise identification, the accusation has no legal basis.",
        "That is why the first thing I request in the file is the exact text invoked by the prosecutor: article, paragraph and normative act. If the indictment or the order refers only to an internal procedure or to a matter of expediency, the defense can argue that the act is not provided for by criminal law.",
      ],
      subsections: [
        {
          h3: "Is the breach of an internal procedure enough?",
          paragraphs: [
            "No. Internal regulations, circulars, service notes or operating procedures are not laws or ordinances. Breaching them may trigger disciplinary or administrative liability, but on its own it does not meet the requirement of art. 297.",
            "In practice, the prosecution sometimes tries to link the internal procedure to a general provision of law. I check whether that link is real or merely constructed afterwards to cover the absence of an applicable legal text.",
          ],
        },
        {
          h3: "Can the job description alone be sufficient?",
          paragraphs: [
            "The job description shows what duties you had, not which legal provision you breached. It is useful for establishing whether the act fell within your competence, but it cannot replace the provision of law or ordinance on which the accusation rests.",
            "If the duty invoked appears neither in the job description nor in the delegation documents, I argue that there was no legal obligation to act in the manner claimed by the prosecutor.",
          ],
        },
        {
          h3: "What happens if the rule was unclear or open to interpretation",
          paragraphs: [
            "Where the legal text allows several reasonable interpretations, choosing one of them cannot automatically be turned into a criminal offense. An unclear rule, contradictory administrative practice or the absence of implementing instructions are strong arguments for the lack of intent.",
            "In these situations I also rely on the approvals received, the positions expressed by the institutions and similar solutions adopted in other files or by the administrative courts.",
          ],
        },
      ],
      cta: "I want the legal basis checked",
      ctaIcon: false,
    },
    {
      h2: "How is the damage established in an abuse of office file?",
      paragraphs: [
        "The damage is not an accounting detail, it is an element of the offense. Without certain damage or actual harm to a person's rights, the act does not meet the conditions of art. 297. In addition, the value retained directly influences the legal classification, jurisdiction and penalty limits.",
      ],
      subsections: [
        {
          h3: "The damage must be actual",
          paragraphs: [
            "The damage must be real and certain, not hypothetical or future. A lost benefit, an assessment of expediency or a theoretical price difference does not automatically amount to damage in the sense of criminal law.",
          ],
        },
        {
          h3: "How the loss is calculated",
          paragraphs: [
            "I review the calculation method in the finding note or in the control report: which amounts were taken into account, whether the service or works were actually delivered, whether the price paid matches the market price and whether amounts already recovered were deducted.",
          ],
        },
        {
          h3: "The role of expert evidence",
          paragraphs: [
            "In a file with an economic component, accounting or technical expert evidence is essential. I request the expert report, propose its objectives and file objections, so that the discussion does not remain limited to the conclusions of the control body.",
          ],
        },
        {
          h3: "How the damage can be challenged",
          paragraphs: [
            "I challenge both the existence and the extent of the loss: through evidentiary requests, objections to the expert report, documents showing the real consideration and, where necessary, by challenging precautionary measures ordered on the basis of an overstated value.",
          ],
        },
      ],
      calloutAfterSubsections: "Has a damage figure already been calculated against you?",
      calloutAfterSubsectionsCta: "Call anyway",
    },
    {
      h2: "Abuse of office or negligence in office?",
      paragraphs: [
        "The two offenses are regulated separately: abuse of office in art. 297 of the Criminal Code and negligence in office in art. 298. The difference does not lie in the seriousness of the outcome, but in the form of guilt.",
        "Abuse of office requires intent, meaning that you knew the act was contrary to a legal provision and accepted the consequences. Negligence in office requires fault: inattention, an omission or an error of assessment, without any wish to produce the outcome.",
        "The form of guilt changes everything: the legal classification, the penalty limits, the limitation period and even the investigating authority. This is why in many files the defense does not seek a full acquittal, but aims to show that the act, if committed at all, was committed negligently.",
        [
          { text: "For situations where the accusation concerns an omission out of inattention, see also the page on " },
          { text: "negligent liability of officials", to: "/en/services/negligence-in-office" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Who is liable when the act was approved and signed by several people?",
      paragraphs: [
        "In public administration, almost no act is issued by a single person. There are reports, approvals, preventive financial control endorsements, compliance signatures and sometimes collective decisions. The defense starts by fully reconstructing the document's route.",
      ],
      subsections: [
        {
          h3: "Favourable legal opinion",
          paragraphs: [
            "If you signed on the basis of a favourable legal opinion, the lack of intent argument becomes very solid. The opinion shows that the lawfulness of the act was verified by the person designated for exactly that purpose, and that you relied on their conclusion.",
          ],
        },
        {
          h3: "Economic or technical approval",
          paragraphs: [
            "For matters of price, quantities, technical solutions or accounting treatment, liability lies first with those who drafted and endorsed the specialist documentation. A decision maker is not required to redo the calculations made by specialists.",
          ],
        },
        {
          h3: "Delegation of duties",
          paragraphs: [
            "I analyse the delegation decisions, the period covered and the exact limits of the competence transferred. If the duty had been delegated to another person, the accusation directed at you may lack any basis.",
          ],
        },
        {
          h3: "Collective decision",
          paragraphs: [
            "For committees, councils or boards, the individual vote, the position expressed in the minutes and any recorded objections are decisive. A collective decision does not automatically turn into criminal liability for each member.",
          ],
        },
        {
          h3: "The liability of each person in the chain",
          paragraphs: [
            "The aim is a clear delimitation: who proposed, who verified, who approved and who signed last. I present the authorities with a map of the document's route, supported by documents, so that liability is established on real duties, not on the mere presence of a signature.",
          ],
        },
      ],
      cta: "I signed an act now being challenged",
      ctaIcon: false,
    },
    {
      h2: "When abuse of office falls under Law 78/2000",
      paragraphs: [
        "Law 78/2000 provides an aggravated form of abuse of office, applicable where the act was committed in connection with obtaining an undue benefit for oneself or for another. In that case the penalty limits are increased and the file becomes a corruption case.",
        "The practical consequences matter: jurisdiction may lie with the National Anticorruption Directorate, extensive precautionary measures are frequently ordered, and interceptions or whistleblower reports often appear in the evidence. The defense must challenge the very existence of the undue benefit and its link to the official act.",
        [
          { text: "If the investigation is run by anticorruption prosecutors, see also the page on " },
          { text: "assistance in DNA investigations", to: "/en/services/dna-lawyer" },
          { text: "." },
        ],
      ],
    },

    {
      h2: "What abuse of office is",
      paragraphs: [
        "Abuse of office is the act of a public official who, in the exercise of their duties, fails to perform an act or performs it defectively and thereby causes damage or harm to the rights or legitimate interests of a person. The offense is set out in art. 297 of the Criminal Code.",
        "Defective performance must be measured against a provision contained in a law or in a government ordinance, not against internal rules or considerations of expediency. This limitation is essential in the defense.",
      ],
    },
    {
      h2: "Who can be accused of abuse of office",
      paragraphs: [
        "The main subject is the public official, a broadly defined notion covering persons in central and local administration, in public institutions, as well as persons carrying out a public interest service for which they were invested.",
        "Through art. 308 of the Criminal Code, liability also extends to persons exercising duties within a private legal entity, with penalty limits reduced by one third.",
        "Where the act is committed in connection with obtaining an undue benefit, the aggravated form under Law 78/2000 applies and jurisdiction may lie with the National Anticorruption Directorate.",
      ],
    },
    {
      h2: "When an administrative error is not an offense",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Not every wrong or unlawful decision, or one annulled by the administrative court, amounts to abuse of office. The offense requires a breach of a provision in a law or ordinance, actual damage or harm, and the official's intent.",
        "A different interpretation of an unclear rule, a decision taken on the basis of a favourable legal opinion, the absence of certain damage or the mere breach of an internal procedure normally remain within administrative or disciplinary liability.",
      ],
    },
    {
      h2: "What you risk if the accusation is confirmed",
      bullets: [
        "Imprisonment and a ban on holding public office.",
        "An obligation to pay the damage retained against you.",
        "Precautionary measures over assets and accounts, ordered as early as the investigation stage.",
        "Disciplinary consequences and loss of office, in parallel with the criminal case.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Where the accusation is accompanied by the suspicion of an undue benefit, the file moves close to the area of " },
          { text: "bribery charges", to: "/en/services/bribery-giving-and-taking" },
          { text: ", with direct consequences for the legal classification." },
        ],
      ],
    },
    {
      h2: "How I build the defense",
      bullets: [
        "I identify the exact provision of law or ordinance invoked and check whether it applied to you.",
        "I separate your responsibility from that of the other persons who approved or signed the act.",
        "I challenge the existence and extent of the damage, through expert evidence and objections.",
        "I argue lack of intent, where the decision was taken on the basis of the approvals received.",
        "I file challenges against disproportionate precautionary measures.",
      ],


      cta: "Why choose me",
    },
  ],
  faq: [
    {
      q: "Can a private company director be accused of abuse of office?",
      a: "Yes, through the extension of liability, with penalty limits reduced by one third compared to the basic form.",
    },

    {
      q: "If I repay the damage, is the file closed?",
      a: "Not automatically. Covering the damage matters for sentencing and for the civil claim, but does not by itself remove criminal liability.",
    },
    {
      q: "Who investigates abuse of office files?",
      a: "The ordinary prosecutor's offices and, in the aggravated form or where the damage is high, the National Anticorruption Directorate.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 297 on abuse of office.", href: CP, linkLabel: "Legislation" },
    { text: "Law 78/2000 - aggravated form of abuse of office.", href: L78_EN, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR_EN,
};

export const negligenceInOfficeEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/negligence-in-office",
  altPath: "/servicii/neglijenta-in-serviciu",
  roPath: "/servicii/neglijenta-in-serviciu",
  title: "Negligence in Office Lawyer Bucharest | Bogdan Lamatic",
  h1: "Negligence in office lawyer in Bucharest",
  description:
    "Negligence in office lawyer in Bucharest. Defense for officials accused of negligent breach of their duties. 18+ years of experience.",
  keywords: "negligence in office lawyer bucharest, negligent breach of duty romania, public official defense",
  breadcrumbLabel: "Negligence in office",
  serviceName: "Negligence in office lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for negligence in office after an incident, an audit or a complaint?",
    "In these files, the defense is built on your real workload, on the resources available and on the link between the omission and the consequence produced.",
  ],
  bio: [
    `${BIO_INTRO} I assist public officials and persons with control, approval or supervision duties, investigated for the negligent breach of their obligations.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What is your situation right now?",
      paragraphs: ["Tell me what actually happened, because in these files the factual details decide the outcome."],
      subsections: [
        {
          h3: "An incident occurred and responsibility is being sought",
          paragraphs: ["I check what obligations you actually had, what you could genuinely control and whether the consequence can be attributed to you."],
        },
        {
          h3: "An audit found that you did not perform a duty",
          paragraphs: ["I analyse the control document and establish whether the omission caused damage or harm, an essential condition of the offense."],
        },
        {
          h3: "You have been summoned as a suspect",
          paragraphs: ["We prepare the statement on documents and on the chronology of events, to avoid assuming obligations that were not yours."],
        },
      ],
      ctaAfterSubsections: "I want an assessment of my situation",
    },
    {
      h2: "What I analyse immediately in the file",
      bullets: [
        "What the concrete duty was and from which legal act it derived.",
        "Whether the omission was negligent and in what form.",
        "Whether there is actual damage or harm to a person's rights.",
        "The causal link between the omission and the consequence produced.",
        "The resources, staff and time available during the period analysed.",
        "The responsibility of the other persons in the decision chain.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Send me the documents showing what you had to do and what you actually did."],
      subsections: [
        {
          h3: "Your official duties",
          paragraphs: ["Job description, internal regulation, delegation decisions and applicable operating procedures."],
        },
        {
          h3: "Documents concerning the incident",
          paragraphs: ["The complaint, the finding report, internal reports and correspondence from the relevant period."],
        },
        {
          h3: "Evidence about available resources",
          paragraphs: ["Staffing charts, workload allocated, requests for additional staff or budget."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "Which rule must have been breached for negligence in office to exist?",
      paragraphs: [
        "In its current wording, art. 298 of the Criminal Code requires the breached official duty to derive from a law, a Government ordinance, an emergency ordinance or another act having the force of law. Not every professional obligation falls into this category.",
        "The Constitutional Court applied to negligence in office the same standard set for abuse of office: „defective performance” means performance in breach of a provision contained in an act having the force of law, not the mere failure to observe internal rules or good practice.",
      ],
      subsections: [
        {
          h3: "Is a breach of the job description enough?",
          paragraphs: [
            "No. The job description shows which duties you had, so it is useful to establish whether the obligation was yours, but it cannot replace the provision of a law or ordinance on which the accusation must rest.",
            "If the only document invoked is the job description, I argue that the act is not provided for by criminal law and that the matter remains one of disciplinary liability.",
          ],
        },
        {
          h3: "Is a breach of an internal procedure enough?",
          paragraphs: [
            "Internal regulations, operating procedures, circulars or service notes are not laws or ordinances. Failing to observe them may attract administrative sanctions, but on its own it does not meet the requirement of art. 298.",
            "I check whether the internal procedure is genuinely linked to a provision of an act having the force of law, or whether that link was built later to cover the absence of an applicable text.",
          ],
        },
        {
          h3: "Which legal act must be indicated in the accusation?",
          paragraphs: [
            "From the outset I request the precise identification of the legal act, the article and the paragraph allegedly breached. Without that precise identification, the defense can seek dismissal or acquittal, because the material element of the offense is not determined.",
          ],
        },
      ],
      cta: "I want to check the legal basis invoked",
      ctaIcon: false,
    },
    {
      h2: "When does a professional mistake become negligence in office?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "The absence of actual damage or harm means the elements of the offense are not met, however serious the omission may appear from a disciplinary perspective.",
        "Likewise, negligence cannot be retained where the obligation was not yours, where performing it was impossible due to a lack of resources or staff, or where the consequence was caused by another person's conduct.",
      ],
      subsections: [
        {
          h3: "Professional mistake vs offense",
          paragraphs: [
            "An error of assessment, a reasonable interpretation of an unclear rule or a choice between several permitted options does not automatically become an offense. Negligence requires the breach of a duty provided by law and a proven damaging consequence.",
          ],
        },
        {
          h3: "Disciplinary breach vs criminal liability",
          paragraphs: [
            "Many facts reported in such files remain disciplinary: delays, incomplete entries, failure to meet internal deadlines. A disciplinary sanction does not imply that the offense exists, and the two forms of liability have different conditions.",
          ],
        },
        {
          h3: "Why an unfavourable outcome alone is not enough",
          paragraphs: [
            "The fact that an incident, a financial loss or a complaint occurred does not prove your fault. The prosecution must show which legal obligation you breached and how your conduct produced the consequence, not merely that the outcome is unwelcome.",
          ],
        },
      ],
      calloutAfterSubsections: "Have you been told you are responsible for an incident?",
      calloutAfterSubsectionsCta: "Call anyway",
    },
    {
      h2: "How is the link between the mistake and the damage proven?",
      paragraphs: [
        "Negligence in office is a result offense: breaching the duty is not enough, the prosecution must also prove damage or harm to the rights or legitimate interests of a person, together with the causal link between the two.",
      ],
      subsections: [
        {
          h3: "What if the result would have occurred anyway",
          paragraphs: [
            "If the damage would have occurred even had you performed your duty perfectly, the causal link is missing. This is one of the strongest defense arguments in files built on formal omissions.",
          ],
        },
        {
          h3: "The involvement of other persons",
          paragraphs: [
            "I reconstruct the full circuit of the document or decision: who proposed, who verified, who approved and who signed. Where the consequence was determined by another person's conduct, liability cannot be shifted onto you.",
          ],
        },
        {
          h3: "External causes",
          paragraphs: [
            "Technical failures, erroneous information received from outside, decisions of other institutions or unforeseeable events can break the causal chain. I document these circumstances with records, not only with statements.",
          ],
        },
        {
          h3: "Technical expert evidence",
          paragraphs: [
            "Where values, calculations or technical aspects are involved, I request an expert report, propose its objectives and file objections, so that causation and the extent of the damage are not established solely by the control body.",
          ],
        },
      ],
    },
    {
      h2: "Can a lack of staff, time or resources exclude liability?",
      paragraphs: [
        "Yes, where the impossibility of performance is real and can be proven. Fault cannot be retained for an obligation which, in the actual working conditions, could not be performed.",
      ],
      subsections: [
        {
          h3: "Lack of staff",
          paragraphs: ["Staffing charts, vacant positions and the actual allocation of tasks during the period analysed."],
        },
        {
          h3: "Insufficient budget",
          paragraphs: ["The approved budget, funding refusals and the impossibility of contracting the necessary services or works."],
        },
        {
          h3: "Excessive workload",
          paragraphs: ["The number of files allocated, the deadlines imposed and the comparison with the normal workload for your position."],
        },
        {
          h3: "Ignored requests for additional resources",
          paragraphs: ["The notes, memos and letters requesting staff, budget or deadline extensions, together with the replies received."],
        },
        {
          h3: "Objective impossibility of performance",
          paragraphs: ["Situations where performing the duty depended on a document, information or approval that did not exist at the relevant time."],
        },
      ],
      ctaAfterSubsections: "I want to review the resources I had",
    },
    {
      h2: "Who can be accused of negligence in office?",
      paragraphs: [
        "The subject of the offense is the public official in the criminal law sense, a notion far broader than the administrative one: it covers persons exercising duties provided by law, a public dignity office, a management position in a public institution or control and approval duties.",
        "Through art. 308 of the Criminal Code, liability also extends to persons who exercise, permanently or temporarily, with or without remuneration, a task of any nature in the service of a natural person or of a private legal entity. Employees in the private sector, directors, managers or members of governing bodies can therefore be investigated, with penalty limits reduced by one third.",
        [
          { text: "For the general context of charges related to the exercise of public office, see the page on " },
          { text: "acts related to the exercise of public office", to: PARENT_COR_EN.to },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What negligence in office is",
      paragraphs: [
        "Negligence in office consists of the negligent breach by a public official of an official duty, by failing to perform it or by performing it defectively, if damage or harm to the rights or legitimate interests of a person is caused. The offense is set out in art. 298 of the Criminal Code.",
        "Unlike other office offenses, intent is not required here, but negligence is. The damaging consequence must nevertheless exist and be proven, not presumed.",
      ],
    },
    {
      h2: "The difference from abuse of office",
      paragraphs: [
        [
          { text: "The element separating the two offenses is the form of guilt. In the " },
          { text: "intentional breach of duties", to: "/en/services/abuse-of-office" },
          { text: ", the official acts intentionally, whereas in negligence the act is committed carelessly." },
        ],
        "The distinction has major consequences: the penalty limits are lower, and in many situations an initial abuse charge can be correctly reclassified as negligence where the evidence does not support intent.",
      ],
    },
    {
      h2: "What you risk if the accusation is confirmed",
      bullets: [
        "Imprisonment or a fine, within the limits set by law.",
        "An obligation to pay the damage caused.",
        "Disciplinary sanctions applied in parallel by the employer.",
        "Consequences for your right to hold certain positions.",
      ],
    },
    {
      h2: "How I build the defense",
      bullets: [
        "I define exactly which obligations were yours, by reference to legal and internal acts.",
        "I show the absence of a causal link between the omission and the consequence produced.",
        "I challenge the existence or extent of the damage, with expert evidence where necessary.",
        "I argue the objective impossibility of performing the duty, through evidence about available resources.",
        "I assist you at questioning and at every hearing, before the prosecutor and the court.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Other charges frequently appearing in the same file, such as those concerning " },
          { text: "incompatibility situations", to: "/en/services/conflict-of-interest" },
          { text: ", must be analysed separately, because their conditions are different." },
        ],
      ],
      cta: "Why choose me",
    },
  ],
  faq: [
    {
      q: "Can an abuse charge be reclassified as negligence?",
      a: "Yes. Where the evidence does not support intent, the legal classification can be changed to negligence in office.",
    },
    {
      q: "Is a prior complaint required?",
      a: "No. The criminal investigation is carried out ex officio, and the injured person may join as a civil party.",
    },
    {
      q: "Does a disciplinary sanction rule out a criminal file?",
      a: "No. The two forms of liability are distinct and can run in parallel.",
    },
    {
      q: "How long does such a file take?",
      a: "It depends on the complexity of the evidence and the expert reports needed. I can give you a realistic estimate once I see the documents.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 298 on negligence in office.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Code - art. 308 on the extension of liability.", href: CP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR_EN,
};

export const conflictOfInterestEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/conflict-of-interest",
  altPath: "/servicii/conflict-de-interese",
  roPath: "/servicii/conflict-de-interese",
  title: "Conflict of Interest Lawyer Bucharest | Bogdan Lamatic",
  h1: "Conflict of interest lawyer in Bucharest",
  description:
    "Conflict of interest lawyer in Bucharest. Defense in files concerning the use of office to favour certain persons. 18+ years of experience.",
  keywords: "conflict of interest lawyer bucharest, use of office to favour persons, integrity report romania",
  breadcrumbLabel: "Conflict of interest",
  serviceName: "Conflict of interest lawyer Bucharest - Bogdan Lamatic",
  urgency: [
    "Have you received an assessment report from the National Integrity Agency or are you criminally investigated for conflict of interest?",
    "The administrative report and the criminal file are different procedures, and the defense must be built on both, in parallel.",
  ],
  bio: [
    `${BIO_INTRO} I assist local elected officials, public servants and decision makers in integrity procedures and in criminal files concerning conflict of interest.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What is your situation right now?",
      paragraphs: ["Tell me which procedure the problem started from, because the deadlines are different."],
      subsections: [
        {
          h3: "You received an integrity assessment report",
          paragraphs: ["I analyse the report, the challenge deadline and the chances of annulment before the administrative court, before it becomes final."],
        },
        {
          h3: "You were notified that you are criminally investigated",
          paragraphs: ["I check whether the act performed falls within the criminal text and whether the benefit claimed is of a patrimonial nature."],
        },
        {
          h3: "You signed a contract with a related company",
          paragraphs: ["I check the degree of kinship or affinity, whether a real patrimonial benefit resulted from the act and whether the situation falls within the exceptions provided by law. Separately from criminal liability, I check whether an administrative integrity issue may exist."],
        },
      ],
      ctaAfterSubsections: "I want an assessment of my situation",
    },
    {
      h2: "What I analyse immediately in the file",
      bullets: [
        "The concrete act performed in the exercise of official duties.",
        "The existence of a patrimonial benefit for you, for your spouse, for a relative or an in-law up to the second degree inclusive.",
        "The degree of kinship or affinity invoked in the accusation.",
        "Whether the situation falls within the exceptions expressly provided by law.",
        "Separately from the criminal file, whether an administrative integrity issue exists and within what deadline it can be challenged.",
      ],
    },
    {
      h2: "What documents you should send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["I need the documents showing who decided and under what conditions."],
      subsections: [
        {
          h3: "The contested act",
          paragraphs: ["The contract, order, decision or resolution signed, together with the underlying documentation."],
        },
        {
          h3: "The assessment report",
          paragraphs: ["The report received, proof of its communication and any challenge already filed."],
        },
        {
          h3: "Documents about the relationship invoked",
          paragraphs: ["Civil status documents, corporate records, earlier contracts showing the real nature of the dealings."],
        },
      ],
      calloutAfterSubsections: "You do not have all the documents?",
      calloutAfterSubsectionsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
    {
      h2: "How do you challenge an integrity report on conflict of interest?",
      paragraphs: [
        "The assessment report drawn up by the National Integrity Agency is challenged before the administrative court, within 15 days of receiving it. The deadline is short, and missing it lets the report become final.",
      ],
      subsections: [
        {
          h3: "When the 15 day deadline starts running",
          paragraphs: [
            "The deadline runs from the date you received the report, not from the date it was drawn up. That is why I first check the proof of communication: the acknowledgment of receipt, the envelope, the address it was sent to and who signed for it.",
          ],
        },
        {
          h3: "Where the report is challenged",
          paragraphs: [
            "The challenge is filed with the competent administrative court, depending on the office held and the seat of the authority. The application must set out the grounds of unlawfulness and the evidence you rely on.",
          ],
        },
        {
          h3: "Which documents must be analysed",
          paragraphs: [
            "The full report and its annexes, the act said to have generated the benefit, the underlying documentation of the decision, the job description and the civil status documents showing the real degree of kinship or affinity.",
          ],
        },
        {
          h3: "What happens if you do not challenge it",
          paragraphs: [
            "A report not challenged in time becomes final and may trigger consequences for your office, disciplinary consequences and procedures concerning the acts concluded. A final report does not automatically mean a criminal conviction, but it makes the defense harder.",
          ],
          ctaWhatsApp: true,
          ctaWhatsAppLabel: "Received the integrity report? Send it now so I can check the deadline",
        },
      ],
    },
    {
      h2: "Conflict of interest or incompatibility - what is the difference?",
      paragraphs: [
        "The two are frequently confused, because they are assessed through similar integrity procedures, but they are distinct legal situations.",
        "Conflict of interest concerns a concrete act performed in the exercise of official duties, generating a benefit for you or for the close persons set out by law. Incompatibility concerns simply holding two offices or capacities at the same time which the law does not allow to be combined, regardless of any act or any benefit.",
        "The difference has practical consequences: incompatibility is usually resolved by ending the combined offices and through administrative consequences, whereas conflict of interest may also, under certain conditions, trigger criminal liability under art. 301 of the Criminal Code.",
      ],
    },
    {
      h2: "Who must obtain the benefit for the offense to exist?",
      paragraphs: [
        "The circle of favoured persons is expressly limited by the current criminal text. If the beneficiary of the benefit is outside that circle, the offense is not made out.",
      ],
      subsections: [
        {
          h3: "A benefit for you",
          paragraphs: [
            "The most direct scenario: the act performed brings you a personal patrimonial advantage. Here I check whether the advantage is real, whether it stems from the act complained of and whether you actually performed that act.",
          ],
        },
        {
          h3: "A benefit for your spouse",
          paragraphs: [
            "The law expressly includes the spouse. I check the existence and date of the marriage, as well as whether the benefit actually entered the spouse's assets.",
          ],
        },
        {
          h3: "Relatives and in-laws up to the second degree",
          paragraphs: [
            "The circle stops at relatives and in-laws up to the second degree inclusive. Persons beyond that degree do not fall within the criminal text, even if the relationship is close in fact.",
          ],
        },
        {
          h3: "What a patrimonial benefit means",
          paragraphs: [
            "The benefit must have economic content: money, goods, contracts, exemptions, advantages assessable in money. Non-patrimonial benefits, such as reputational advantages or favours without economic value, do not fall within the current text.",
          ],
        },
      ],
    },
    {
      h2: "If I abstained from the vote or did not sign the act, is there still criminal liability?",
      paragraphs: [
        "The criminal text requires the act to have been actually performed by you, in the exercise of your official duties. That is why I analyse each form of involvement separately.",
      ],
      subsections: [
        {
          h3: "Actual participation in the act",
          paragraphs: [
            "What you concretely did matters: whether you drafted, endorsed, approved or were merely present in the procedure. Without an act of your own in the exercise of your duties, the material element is missing.",
          ],
        },
        {
          h3: "The signature",
          paragraphs: [
            "The signature is the element most often used by the prosecution, but it is not sufficient in itself: what counts is your competence, the checks that were your responsibility and whether the signature actually generated the benefit.",
          ],
        },
        {
          h3: "The vote",
          paragraphs: [
            "In collective decisions I analyse whether your vote was necessary for the act to be adopted and how it was recorded in the minutes of the meeting.",
          ],
        },
        {
          h3: "The abstention",
          paragraphs: [
            "Abstaining from the vote or refusing to sign, recorded in the meeting documents, are strong defense arguments, because they show you did not perform the act generating the benefit.",
          ],
        },
        {
          h3: "Preparatory acts",
          paragraphs: [
            "Internal notes, reports or proposals producing no legal effects of their own do not amount to performing the act. They may be relevant for context, not for the legal classification.",
          ],
        },
        {
          h3: "Who actually took the decision",
          paragraphs: [
            "I reconstruct the decision path to show who had final competence. Where the decision was taken by another person or by a collective body, liability cannot be extended automatically.",
          ],
        },
      ],
    },
    {
      h2: "What happens if the integrity report becomes final?",
      paragraphs: [
        "A final assessment report is not merely a finding document: it may trigger distinct procedures, running in parallel with any criminal file.",
      ],
      subsections: [
        {
          h3: "Consequences for your office",
          paragraphs: [
            "Depending on the capacity held, a final report may lead to the termination of the mandate or of the service relationship and to a ban on holding a similar office for the period provided by law.",
          ],
        },
        {
          h3: "Disciplinary consequences",
          paragraphs: [
            "The authority you work for may start disciplinary proceedings based on the final report, with its own sanctions, independent of the outcome of the criminal file.",
          ],
        },
        {
          h3: "Effects on acts and contracts",
          paragraphs: [
            "Administrative acts and contracts concluded in a state of conflict of interest may be subject to nullity under the conditions of the law, with effects on payments, guarantees and works already performed.",
          ],
        },
        {
          h3: "The relationship with a possible criminal file",
          paragraphs: [
            "A final report does not mean criminal guilt, because the offense has stricter conditions. It is, however, frequently used as the starting point of the complaint, which is why the administrative and the criminal defense must be coordinated.",
          ],
        },
      ],
    },
    {
      h2: "What conflict of interest means in criminal law",
      paragraphs: [
        "The criminal text, named use of office to favour certain persons, sanctions the act of a public official who, in the exercise of their duties, performed an act through which a patrimonial benefit was obtained for themselves, for their spouse, for a relative or an in-law up to the second degree inclusive. The offense is set out in art. 301 of the Criminal Code.",
        "The law also provides an express exception, for situations involving the issuing, approval or adoption of normative acts.",
      ],
    },
    {
      h2: "The difference between the integrity procedure and the criminal file",
      paragraphs: [
        "The assessment report drawn up in the administrative integrity procedure may find a state of conflict of interest without the act automatically being an offense. The report is challenged before the administrative court, within the statutory deadline.",
        "The criminal file has its own, stricter conditions regarding the act performed, the patrimonial benefit and the circle of favoured persons. The two procedures run in parallel, and the defense must be coordinated between them.",
      ],
    },
    {
      h2: "When art. 301 of the Criminal Code does not apply",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: [
        "Not every overlap of interests amounts to an offense. It must be proven that an act was actually performed in the exercise of official duties, that a concrete patrimonial benefit resulted, and that the beneficiary belongs to the circle of persons set out by law. In addition, art. 301 para. (2) expressly provides situations in which the act is not punishable.",
        "Also outside the criminal text remain situations of abstention from voting or signing, preparatory acts producing no effects, and non-patrimonial benefits.",
      ],
      subsections: [
        {
          h3: "Issuing, approving or adopting normative acts",
          paragraphs: [
            "Where the act complained of is a normative act, the criminal text does not apply. I check the real nature of the act, because in practice normative acts are sometimes wrongly treated as individual acts.",
          ],
        },
        {
          h3: "Exercising a right recognised by law",
          paragraphs: [
            "There is no offense where the benefit results from exercising a right the law recognises, such as salary rights, allowances or other entitlements granted under the law.",
          ],
        },
        {
          h3: "Performing an obligation imposed by law",
          paragraphs: [
            "Where the law obliged you to perform the act and you had no margin of appreciation, the act does not fall under the criminal text. Acts executing a court decision or a legal obligation are relevant here.",
          ],
        },
      ],
    },
    {
      h2: "What you risk if the accusation is confirmed",
      bullets: [
        "Imprisonment and a ban on holding public office.",
        "Annulment of the administrative acts or contracts concluded in conflict of interest.",
        "Termination of the mandate or of the service relationship, in the integrity procedure.",
        "A ban on holding an elected position for the period provided by law.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "The same files frequently also contain the accusation of " },
          { text: "defective exercise of duties", to: "/en/services/abuse-of-office" },
          { text: ", which is why the defense must be built as a whole." },
        ],
      ],
    },
    {
      h2: "How I build the defense",
      bullets: [
        "I check whether the act complained of falls within your official duties.",
        "I challenge the patrimonial character of the benefit or its very existence.",
        "I analyse the degree of kinship or affinity and whether you or a person within the circle set out by law was the beneficiary of the benefit.",
        "I argue for the application of the exceptions expressly provided by law.",
        "I coordinate the criminal defense with the challenge against the integrity report.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Where the file also contains accusations about benefits received directly, the situation is analysed together with " },
          { text: "corruption charges proper", to: "/en/services/bribery-giving-and-taking" },
          { text: "." },
        ],
      ],
      cta: "Why choose me",
    },
  ],
  faq: [
    {
      q: "Does an integrity report automatically mean a criminal file?",
      a: "No. An administrative finding of a conflict of interest does not equate to the elements of the offense being met.",
    },
    {
      q: "Can the signed contract be annulled?",
      a: "Yes. Acts concluded in breach of the conflict of interest rules can be null and void.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 301 on the use of office to favour certain persons.", href: CP, linkLabel: "Legislation" },
    { text: "Law 78/2000 on corruption offenses and assimilated acts.", href: L78_EN, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_COR_EN,
};

/* ============================================================
   Sub-services - Drug offenses pillar page
   ============================================================ */

const L143_EN = "https://legislatie.just.ro/Public/DetaliiDocumentAfis/23629";
const L58_EN = "https://legislatie.just.ro/Public/DetaliiDocument/280178";
const ICCJ25_EN = "https://legislatie.just.ro/Public/DetaliiDocumentAfis/293958";
const ICCJ15_EN = "https://legislatie.just.ro/Public/DetaliiDocument/189358";
const OUG78_EN = "https://legislatie.just.ro/Public/DetaliiDocument/305273";

const PARENT_DO_EN = {
  to: "/en/services/drug-offenses",
  label: "drug offense cases",
  breadcrumbLabel: "Drug offenses",
};

export const drugPossessionPersonalUseEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/drug-possession-personal-use",
  altPath: "/servicii/detinere-droguri-consum-propriu",
  roPath: "/servicii/detinere-droguri-consum-propriu",
  title: "Drug Possession for Personal Use Lawyer Bucharest | Bogdan Lamatic",
  h1: "Drug possession for personal use lawyer in Bucharest",
  description:
    "Were you found with drugs for personal use or summoned in a criminal case? I quickly analyse the charge, the evidence and the trafficking risk.",
  keywords:
    "drug possession personal use lawyer, drug offenses lawyer bucharest, personal use vs trafficking, criminal lawyer drugs",
  breadcrumbLabel: "Drug possession for personal use",
  serviceName: "Drug possession for personal use lawyer in Bucharest - Bogdan Lamatic",
  urgency: [
    "Drugs found on you, in your car or in your home?",
    "Have you received a summons or are you about to be questioned?",
    "The difference between personal use and trafficking can drastically change the legal situation.",
  ],
  bio: [
    `${BIO_INTRO} I assist people investigated for drug possession for personal use, in cases handled by the Police, Prosecutor's Office or DIICOT.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in now?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Choose the scenario that matches your case."],
      subsections: [
        {
          h3: "Drugs were found on you, in your car or at your home",
          paragraphs: [
            "It must be quickly established what substance was seized, the quantity, where it was found and what other evidence exists in the file.",
            "In a charge of drug possession for personal use, the analysis must not be done by quantity alone. The full context of the case and what can be proven by evidence matter.",
          ],
        },
        {
          h3: "You received a summons or are about to be questioned",
          paragraphs: [
            "Before giving a statement, you must know exactly in what capacity you are summoned, what offense is being investigated and what information is already in the file.",
            "Do not try to explain the situation through an improvised statement before you understand the charge and the evidence.",
          ],
        },
        {
          h3: "The prosecutor believes the drugs were not just for personal use",
          paragraphs: [
            [
              { text: "The difference between possession for personal use and " },
              { text: "drug trafficking", to: "/en/services/drug-offenses" },
              { text: " can radically change the legal situation." },
            ],
            "If quantity, packaging, conversations, money transfers or other distribution clues are invoked, each element must be analysed separately.",
          ],
        },
        {
          h3: "A close person is being investigated",
          paragraphs: [
            "Family can contact me even if they do not have all the file documents. Tell me where the person is, what happened and what documents you currently have.",
          ],
          cta: "Call now - 031 632 01 83",
          ctaIcon: false,
        },
      ],
    },
    {
      h2: "What I immediately analyse in a personal-use drug possession case",
      paragraphs: [
        "I first check whether the evidence actually supports the charge retained by the prosecution.",
      ],
      bullets: [
        "the identified substance and the finding or expert report;",
        "the seized quantity;",
        "the place and circumstances where it was found;",
        "how it was stored or packaged;",
        "the existence or absence of evidence concerning distribution;",
        "phone conversations and their full context;",
        "any money transfers;",
        "statements of the other persons in the file;",
        "search and seizure records;",
        "the legality of how evidence was obtained;",
        "whether evidence supports the exclusive purpose of personal use;",
        "whether the charge also includes other offenses.",
      ],
      paragraphsAfterBullets: [
        "There is no fixed quantity threshold in the law that automatically turns personal-use possession into trafficking. The charge is determined by the overall evidence and the purpose of possession. The High Court emphasised in 2025 the legislator's choice not to set such a threshold.",
      ],
      cta: "Call now - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "What you should send me for the first assessment",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["If you have them, send me:"],
      bullets: [
        "the summons;",
        "the search report;",
        "the seizure report for the substances;",
        "orders or documents received from the prosecution;",
        "the substance report, if communicated to you;",
        "any document regarding seized phones or other devices;",
        "information about the next hearing or deadline.",
      ],
      paragraphsAfterBullets: [
        "For the first discussion, it is enough to tell me what happened and what you know at this stage.",
      ],
      calloutAfterBullets: "Don't have all documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me documents on WhatsApp",
    },
    {
      h2: "What does drug possession for personal use mean?",
      paragraphs: [
        "Art. 4 of Law no. 143/2000 punishes the cultivation, production, manufacture, experimentation, extraction, preparation, transformation, purchase or possession of drugs for personal use, without right.",
        "In the current consolidated form of the law, the offense under Art. 4 is punishable by imprisonment from 2 to 5 years.",
        "The important element is the purpose for which the substance was bought or held. The same material fact - for example possession - may require a completely different analysis if the investigative authorities claim the drugs were intended for circulation or distribution rather than exclusively for personal use.",
      ],
    },
    {
      h2: "What is the difference between possession for personal use and drug trafficking?",
      paragraphs: [
        "The difference is not determined solely by the number of grams. To see whether the evidence indicates personal use or trafficking, all circumstances must be analysed together.",
      ],
      subsections: [
        {
          h3: "Quantity matters, but does not alone decide the charge",
          paragraphs: [
            "A larger quantity may be used by the prosecution as a clue, but the law does not set a gram threshold from which possession automatically becomes trafficking.",
          ],
        },
        {
          h3: "Packaging can become relevant",
          paragraphs: [
            "Several separate packages, objects that the prosecution claims were used for portioning or similar circumstances can be analysed together with the other evidence. These elements must not be assessed in isolation.",
          ],
        },
        {
          h3: "Phone and conversations can change the interpretation of the file",
          paragraphs: [
            "In many cases, the prosecution uses conversations, contacts, localisations, photos or other computer data to support the existence of distribution operations. Messages must be analysed in context, not only through selected fragments.",
          ],
        },
        {
          h3: "Money flows can be analysed as evidence",
          paragraphs: [
            "Bank transfers or other payments may be invoked in support of the charge. However, it must be established what each transaction actually represents and whether there is proven connection to the drugs.",
          ],
        },
      ],
      paragraphsAfterBullets: [
        [
          { text: "See also the main page on " },
          { text: "drug offense cases", to: "/en/services/drug-offenses" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "Can you be charged with trafficking if the drugs were for you?",
      paragraphs: [
        "Yes, such a charge can arise if the investigative authorities interpret the evidence as indicating distribution or other circulation operations. But the existence of the charge does not mean the charge is automatically correct.",
        "Art. 2 and Art. 4 of Law no. 143/2000 regulate different situations, and the concrete purpose of the operation must be established through evidence.",
      ],
      bullets: [
        "what evidence indicates the alleged distribution;",
        "whether actual buyers or recipients are identified;",
        "whether transactions are proven;",
        "the context of conversations;",
        "the ratio between quantity and the concrete situation;",
        "the explanation for other seized objects;",
        "whether there are arguments for another legal classification.",
      ],
    },
    {
      h2: "What happens to the seized phone?",
      paragraphs: [
        "In drug cases, the phone can become one of the main sources of evidence. The following may be analysed, under the applicable procedural conditions: conversations, photos and files, contacts, account data, locations, messaging apps and other information relevant to the charge.",
        "I verify both the content used by the prosecution and the manner in which the data were obtained and interpreted. Do not delete or alter data that you know may be relevant to a criminal procedure.",
      ],
    },
    {
      h2: "What happens after the file is opened?",
      paragraphs: [
        "The procedure differs from case to case. It may include: analysis of seized substances, questioning of the investigated person, analysis of phones and other evidence, administration of further evidence, determination of the legal classification, a prosecutor's solution or, if indictment is ordered, continuation of the case in court.",
        "In defence, I pursue both the charge itself and the legality and strength of the evidence on which it is based. No solution can be guaranteed before the file is analysed.",
      ],
    },
    {
      h2: "If several people are investigated together",
      paragraphs: [
        [
          { text: "The fact that several people are investigated together does not automatically mean an " },
          { text: "organized crime group", to: "/en/services/organized-crime-group" },
          { text: " exists. Such a charge has distinct conditions and must be proven separately." },
        ],
      ],
    },
    {
      h2: "How I build the defence in a personal-use drug possession case",
      paragraphs: ["The strategy may include, depending on the file:"],
      bullets: [
        "distinguishing personal use from the trafficking charge;",
        "checking the legality of the search and seizure of evidence;",
        "analysing the substance report;",
        "verifying computer data;",
        "challenging interpretations not supported by the overall evidence;",
        "administering favourable evidence;",
        "formulating requests and defences appropriate to the procedural stage;",
        "representing you before the prosecution and in court.",
      ],
      paragraphsAfterBullets: [
        "I personally handle the case strategy and the essential moments of the mandate.",
        [
          { text: "See also the " },
          { text: "main drug offense page", to: "/en/services/drug-offenses" },
          { text: " or the " },
          { text: "international drug trafficking page", to: "/en/services/international-drug-trafficking" },
          { text: "." },
        ],
      ],
      cta: "Call now - 031 632 01 83",
      ctaIcon: false,
    },
  ],
  faq: [
    {
      q: "Is there a maximum quantity automatically considered personal use?",
      a: "No. The law does not set a fixed quantity threshold that automatically separates personal use from trafficking. Quantity is analysed together with the other evidence.",
    },
    {
      q: "If the drugs were only for me, is there still a criminal case?",
      a: "Art. 4 of Law no. 143/2000 criminalises, among others, the purchase and possession without right of drugs for personal use. Even in this situation a criminal case is possible, although the charge and penalty are different from trafficking.",
    },
    {
      q: "Does a small quantity guarantee a personal-use classification?",
      a: "No. Neither a small nor a large quantity alone determines the charge. The overall evidence must be analysed.",
    },
    {
      q: "Can the charge be changed from trafficking to personal-use possession?",
      a: "The legal classification must correspond to the facts and evidence actually proven. If the evidence invoked for trafficking does not support that charge, the correct classification in the concrete situation must be analysed.",
    },
    {
      q: "What do I do if I received a summons?",
      a: "Check in what capacity you are summoned and discuss with a lawyer before the hearing, especially if there is a risk that the statement could influence the legal classification.",
    },
    {
      q: "Can family contact the lawyer?",
      a: "Yes. A family member can contact me and send the available documents, even if partial.",
    },
  ],
  faqTitle: "Frequently asked questions about drug possession for personal use",
  resources: [
    { text: "Law no. 143/2000 on preventing and combating drug trafficking and illicit drug use.", href: L143_EN, linkLabel: "Legislation" },
    { text: "High Court Decision no. 25/2025 on the absence of a fixed quantity threshold.", href: ICCJ25_EN, linkLabel: "Legislation" },
    { text: "Emergency Ordinance no. 78/2016 on the organisation and jurisdiction of DIICOT.", href: OUG78_EN, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Send me documents on WhatsApp",
  reviewAfterSection: 2,
  reviewAuthor: "Lidia Caescu",
  reviewText:
    "I was looking for a lawyer in Bucharest and fortunately I met Mr. Bogdan Lamatic. From the very first moment he won my trust through his professionalism, calmness and the empathy with which he listened to me. A true human being in the full sense of the word. I wholeheartedly recommend him to anyone who needs a criminal law specialist and real support in a difficult moment.",
  reviewMeta: "Local Guide · 24 reviews",
  reviewTimestamp: "4 months ago",
  reviewLink: "https://maps.app.goo.gl/wQzkQUTgvdG3JwbG6",
  parent: PARENT_DO_EN,
};

export const organizedCrimeGroupEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/organized-crime-group",
  altPath: "/servicii/grup-infractional-organizat",
  roPath: "/servicii/grup-infractional-organizat",
  title: "Organized crime group lawyer Bucharest | DIICOT",
  h1: "Organized crime group lawyer in Bucharest",
  description:
    "Investigated for setting up, joining or supporting an organized crime group? Analysis of your role, the evidence and the DIICOT charges.",
  keywords:
    "organized crime group lawyer, diicot lawyer bucharest, art 367 criminal code, joining criminal group",
  breadcrumbLabel: "Organized crime group",
  serviceName: "Organized crime group lawyer in Bucharest - Bogdan Lamatic",
  urgency: [
    "Are you investigated for setting up, joining or supporting an organized crime group?",
    "The charge under art. 367 of the Criminal Code has its own conditions, separate from the target offense.",
    "The individual role and the evidence concerning it must be analysed separately from the group's activity.",
  ],
  bio: [
    `${BIO_INTRO} I defend people investigated for setting up, joining or supporting an organized crime group, including in cases handled by DIICOT.`,
    LEGAL500,
  ],
  reviewAfterSection: 2,
  reviewAuthor: "Florian Claudiu Lazar",
  reviewMeta: "Local Guide · 2 reviews",
  reviewTimestamp: "5 months ago",
  reviewText:
    "Mr. Bogdan Lamatic not only knows the law, he also explains it so anyone can understand. And he gives you confidence throughout the whole trial.",
  reviewLink: "https://maps.app.goo.gl/GQWEZ7T1arUcytpc8",
  sections: [
    {
      h2: "What situation are you in now?",
      cardClassName: "bg-[#faf0e6]",
      subsections: [
        {
          h3: "You are investigated in a case with several people",
          paragraphs: [
            "The fact that several people are investigated in the same case does not, on its own, mean that an organized crime group exists.",
            "It must be verified whether the specific elements set out in art. 367 of the Criminal Code are met.",
          ],
        },
        {
          h3: "The prosecutor claims you joined or supported a group",
          paragraphs: [
            "It is essential that the specific act attributed to you is identified.",
            "It is not enough for the charge to use general wording such as \"supported the group's activity\". The individual facts and evidence must be analysed.",
          ],
        },
        {
          h3: "You had links or conversations with people investigated in the same case",
          paragraphs: [
            "Personal relationships, conversations or merely knowing other people must be distinguished from knowing participation in a group set up for a criminal purpose.",
          ],
        },
        {
          h3: "The case concerns drug trafficking",
          paragraphs: [
            [
              { text: "In drug cases, art. 367 may appear alongside the offenses under Law no. 143/2000. Each charge must however be proven separately. See also the page on " },
              { text: "criminal drug cases", to: "/en/services/drug-offenses" },
              { text: "." },
            ],
          ],
        },
      ],
      ctaAfterSubsections: "☎ Call now - 031 632 01 83",
    },
    {
      h2: "What I immediately analyse in an organized crime group charge",
      paragraphs: ["I check:"],
      bullets: [
        "how many people are alleged to be part of the group;",
        "the period during which the group is said to have operated;",
        "how it would have been structured;",
        "whether there is coordination between the persons;",
        "the criminal purpose attributed to the group;",
        "the specific role imputed to the client;",
        "the moment of the alleged joining;",
        "the acts said to amount to supporting the group;",
        "the conversations and wiretaps;",
        "technical surveillance;",
        "meetings and travel;",
        "money transfers;",
        "data from phones and other devices;",
        "statements of co-defendants, witnesses or collaborators;",
        "the link between the client and the offenses said to be part of the group's purpose;",
        "whether the evidence describes an organized group or only contacts and isolated activities.",
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "What you need to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["If you have them, send me:"],
      bullets: [
        "the summons;",
        "the order communicating your procedural status;",
        "the description of the charge;",
        "any interlocutory decisions or orders received;",
        "the search reports;",
        "the documents concerning seized phones and devices;",
        "documents on any measures taken in the case;",
        "the date of the next hearing.",
      ],
      paragraphsAfterBullets: [
        "If you only received a summons and do not know the file yet, you can contact me before the hearing.",
      ],
      calloutAfterBullets: "Don't have all the documents?",
      calloutAfterBulletsCta: "Call anyway.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send documents on WhatsApp",
    },
    {
      h2: "What is an organized crime group?",
      paragraphs: [
        "Art. 367 of the Criminal Code defines the organized crime group as a structured group of three or more persons, set up for a certain period of time and acting in a coordinated manner in order to commit one or more offenses.",
        "The law criminalises:",
      ],
      bullets: [
        "initiating a group;",
        "setting up the group;",
        "joining it;",
        "supporting such a group, in any form.",
      ],
    },
    {
      h2: "What must the prosecution prove?",
      subsections: [
        {
          h3: "At least three persons",
          paragraphs: ["The legal definition requires a minimum of three persons."],
        },
        {
          h3: "A structured group",
          paragraphs: [
            "There must be elements allowing the identification of a group structure.",
            "The charge cannot simply be reduced to the fact that several people know each other or were present in the same case.",
          ],
        },
        {
          h3: "A certain duration",
          paragraphs: [
            "The Criminal Code refers to a group set up for a certain period of time.",
            "It must be analysed whether the evidence indicates a structure with continuity or only isolated circumstances.",
          ],
        },
        {
          h3: "Coordinated action",
          paragraphs: [
            "It must be established what the coordination would have consisted of and what role each person would have had.",
          ],
        },
        {
          h3: "The purpose of committing one or more offenses",
          paragraphs: [
            "A criminal purpose of the group is required.",
            "The acts said to be part of the group's purpose must be identified and analysed in relation to each person.",
          ],
        },
      ],
    },
    {
      h2: "Do three people committing an act together automatically form an organized crime group?",
      paragraphs: [
        "No.",
        "The number of persons is only one of the conditions.",
        "Art. 367 also requires a structured group, set up for a certain period and intended for coordinated action with a criminal purpose.",
        "That is why the following must be analysed specifically:",
      ],
      bullets: [
        "the duration of the relationship between the persons;",
        "the organisation;",
        "the coordination;",
        "the actual roles;",
        "the common purpose;",
        "the evidence showing that the investigated person knew and accepted that purpose.",
      ],
    },
    {
      h2: "Must the group pursue financial gain?",
      paragraphs: [
        "This is not a condition under the current definition in art. 367 para. (6).",
        "Unlike older provisions, the current definition focuses on the structure of at least three persons, its duration, the coordination and the purpose of committing one or more offenses. The Constitutional Court explained this difference between the former and the current provisions.",
      ],
    },
    {
      h2: "What does joining an organized crime group mean?",
      paragraphs: [
        "Joining requires more than simply knowing some members of the group.",
        "Case law has described joining as actually entering the group, accepting its purpose and its manner of action and contributing to achieving it.",
        "In a specific case I check:",
      ],
      bullets: [
        "when the prosecution claims the joining took place;",
        "which act would demonstrate it;",
        "whether the person knew the purpose of the group;",
        "whether there is evidence of an actual contribution;",
        "whether the interpretation of the conversations is supported by other evidence.",
      ],
    },
    {
      h2: "What does supporting a group mean?",
      paragraphs: [
        "A charge of supporting must be tied to specific acts.",
        "It must be identified:",
      ],
      bullets: [
        "what help is said to have been given;",
        "to whom;",
        "when;",
        "for what purpose;",
        "whether the person knew the nature and purpose of the group;",
        "what evidence proves the link between the help and the group's activity.",
      ],
      paragraphsAfterBullets: [
        "A commercial or personal relationship, or a conversation, must not automatically be confused with criminal support of a group.",
      ],
    },
    {
      h2: "What penalties apply for setting up an organized crime group?",
      paragraphs: [
        "For initiating, setting up, joining or supporting an organized crime group, art. 367 para. (1) provides imprisonment from 1 to 5 years and a ban on exercising certain rights.",
        "If the offense forming the group's purpose is punished with life imprisonment or with imprisonment of more than 10 years, art. 367 para. (2) provides imprisonment from 3 to 10 years and a ban on exercising certain rights.",
        "If the group's activity is followed by the commission of the intended offenses, the rules on concurrent offenses apply.",
      ],
    },
    {
      h2: "What happens if the case also includes other offenses?",
      paragraphs: [
        "Art. 367 does not automatically replace the offense that would have been the purpose of the group.",
        "For example, in a drug case the following may be analysed separately:",
      ],
      bullets: [
        "setting up or joining the group;",
        "drug trafficking;",
        "international drug trafficking;",
        "other acts attributed to each person.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "I have dedicated pages on " },
          { text: "cross-border drug trafficking", to: "/en/services/international-drug-trafficking" },
          { text: ", on " },
          { text: "possession for personal use", to: "/en/services/drug-possession-personal-use" },
          { text: " and on " },
          { text: "drug cases in general", to: "/en/services/drug-offenses" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What evidence is used in an organized crime group case?",
      paragraphs: [
        "Such cases can involve a very large volume of evidence.",
        "The following may be used:",
      ],
      bullets: [
        "wiretaps;",
        "technical surveillance;",
        "messaging app conversations;",
        "phone data;",
        "photographs;",
        "location data;",
        "travel records;",
        "financial transfers;",
        "documents and contracts;",
        "statements of the other persons;",
        "witness statements;",
        "undercover investigators or collaborators;",
        "evidence on the offenses said to be part of the group's purpose.",
      ],
      paragraphsAfterBullets: [
        "One of the most important parts of the defence is separating the evidence about the group as a whole from the evidence that specifically shows the client's conduct.",
        "The fact that a piece of evidence concerns another defendant does not automatically mean it also proves the conduct of everyone else.",
      ],
    },
    {
      h2: "What happens if you appear in a WhatsApp or Telegram group?",
      paragraphs: [
        "Mere presence in a messaging group does not on its own prove all the elements of art. 367.",
        "The following must be analysed:",
      ],
      bullets: [
        "the reason why the person was in the conversation;",
        "the specific messages;",
        "the period;",
        "who actually communicated;",
        "the subsequent actions;",
        "knowledge of the alleged criminal purpose;",
        "the link between the conversations and the acts under investigation.",
      ],
      paragraphsAfterBullets: [
        "The full context of the conversation can be just as important as the individual messages selected by the prosecution.",
      ],
    },
    {
      h2: "Denunciation and cooperation under art. 367 of the Criminal Code",
      paragraphs: [
        "The Criminal Code contains special provisions that can become extremely important in certain situations.",
        "The law provides for exemption from punishment for the person who reports the group to the authorities under the conditions and at the moment strictly provided by art. 367.",
        "In addition, if the person who committed one of the acts under art. 367 para. (1)-(3) facilitates, during the criminal investigation, the establishment of the truth and the criminal liability of one or more members of the group, the special limits of the penalty are reduced by half.",
        "These provisions have precise conditions and procedural moments. Do not decide on statements or cooperation before you understand the concrete legal effects.",
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Why does the individual role matter in a case with many defendants?",
      paragraphs: [
        "In complex cases there is a risk that a person is described through the general activity of the group and not through their own actions.",
        "In the defence I aim to delimit:",
      ],
      bullets: [
        "what the client actually did;",
        "what the client did not do;",
        "what the client knew;",
        "what the client could not have known;",
        "the period of the links with the others;",
        "whether the client actually took part in the coordination;",
        "whether the client knew the criminal purpose;",
        "whether the individual evidence supports the prosecutor's conclusions.",
      ],
    },
    {
      h2: "DIICOT jurisdiction in organized crime cases",
      paragraphs: [
        "Emergency Ordinance no. 78/2016 sets DIICOT's jurisdiction for the categories of offenses provided by law and for art. 367 when the group's purpose includes certain offenses within DIICOT's jurisdiction.",
        "The offenses provided by Law no. 143/2000 on drugs fall within DIICOT's jurisdiction.",
        "Such cases can involve lengthy investigations, large volumes of evidence and several persons with different procedural positions.",
      ],
    },
    {
      h2: "How I build the defence in an organized crime group case",
      paragraphs: ["I analyse separately:"],
      bullets: [
        "the existence of the alleged group;",
        "the structure and the duration;",
        "the criminal purpose;",
        "the coordination;",
        "the client's role;",
        "the moment of the alleged joining or support;",
        "the individual evidence;",
        "the relation to the target offense;",
        "the legality of the evidence;",
        "the related charges.",
      ],
      paragraphsAfterBullets: [
        "I do not start from the premise that activity attributed to the other persons can automatically be transferred to the client.",
        "I personally handle the case strategy and the representation for which I take the mandate.",
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Are you investigated in a case with several people?",
      paragraphs: ["If the charge uses wording such as:"],
      bullets: [
        "\"organized crime group\";",
        "\"joining\";",
        "\"supporting\";",
        "\"role within the group\";",
        "\"coordinated activity\";",
      ],
      paragraphsAfterBullets: [
        "send me the document describing the charge and tell me when the next hearing takes place.",
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "Are three persons enough for an organized crime group to exist?",
      a: "No. A minimum of three persons is one of the conditions, but the law also requires a structured group, set up for a certain period and intended for coordinated action with a criminal purpose.",
    },
    {
      q: "Must there be a leader?",
      a: "Art. 367 does not condition the offense on the existence of a formally named \"leader\". The structure and the coordination are analysed based on how the alleged group actually operated.",
    },
    {
      q: "If I know the other defendants, does that mean I am part of the group?",
      a: "Not automatically. The conduct amounting to initiating, setting up, joining or supporting must be proven, together with the person's link to the criminal purpose of the group.",
    },
    {
      q: "If I took part in a single act, can I also be charged with organized crime?",
      a: "The charge must be analysed separately. Participation in an act and membership of an organized crime group have distinct legal elements.",
    },
    {
      q: "What penalty applies for setting up an organized crime group?",
      a: "The basic form is punished with 1-5 years. If the target offense carries life imprisonment or imprisonment of more than 10 years, the limits for art. 367 are 3-10 years.",
    },
    {
      q: "Can I be punished both for the group and for the offense committed by the group?",
      a: "If the legal conditions are met and the acts under art. 367 are followed by the commission of an offense, the Criminal Code provides for the rules on concurrent offenses.",
    },
    {
      q: "Are there legal benefits if a person cooperates with the investigation?",
      a: "Art. 367 contains special provisions on denunciation and, during the criminal investigation, on facilitating the establishment of the truth and the liability of the group's members. Their application depends on the exact conditions and on the procedural moment.",
    },
    {
      q: "Can family contact the lawyer?",
      a: "Yes. A family member can contact me and send the available documents, even if partial.",
    },
  ],
  faqTitle: "Frequently asked questions about organized crime groups",
  resources: [
    {
      text: "Legislative Portal - Criminal Code, art. 367 on setting up an organized crime group.",
      href: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/109855",
      linkLabel: "Legislation",
    },
    {
      text: "Legislative Portal - Emergency Ordinance no. 78/2016 on the organisation and jurisdiction of DIICOT.",
      href: "https://legislatie.just.ro/Public/DetaliiDocument/305273",
      linkLabel: "Legislation",
    },
    {
      text: "Legislative Portal - Law no. 39/2003 on preventing and combating organized crime.",
      href: "https://legislatie.just.ro/Public/DetaliiDocument/41478",
      linkLabel: "Legislation",
    },
    {
      text: "Legislative Portal - Constitutional Court Decision no. 35/2021 on art. 367 and the definition of the organized crime group.",
      href: "https://legislatie.just.ro/Public/DetaliiDocumentAfis/240065",
      linkLabel: "Legislation",
    },
  ],
  contactText: CONTACT,
  contactWhatsApp: true,
  contactWhatsAppLabel: "Send documents on WhatsApp",
  parent: PARENT_DO_EN,

};

export const internationalDrugTraffickingEn: SubServicePageData = {
  lang: "en",
  path: "/en/services/international-drug-trafficking",
  altPath: "/servicii/trafic-international-de-droguri",
  roPath: "/servicii/trafic-international-de-droguri",
  title: "International drug trafficking lawyer | Bucharest",
  h1: "International drug trafficking lawyer in Bucharest",
  description:
    "Accused of importing, exporting or bringing drugs into the country? Defence in international trafficking cases, border controls and DIICOT investigations.",
  keywords:
    "international drug trafficking lawyer, border drug lawyer, parcel drug lawyer, diicot drug lawyer",
  breadcrumbLabel: "International drug trafficking",
  serviceName: "International drug trafficking lawyer in Bucharest - Bogdan Lamatic",
  urgency: [
    "Drugs discovered at the border, airport or in international traffic?",
    "Cross-border drug trafficking carries severe penalties and complex procedures.",
    "Every stage of transport and every piece of evidence must be verified in detail.",
  ],
  bio: [
    `${BIO_INTRO} I defend people investigated for international drug trafficking, in cases involving wiretaps, transports and international judicial cooperation.`,
    LEGAL500,
  ],
  sections: [
    {
      h2: "What situation are you in now?",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Choose the scenario closest to your situation."],
      subsections: [
        {
          h3: "Drugs found at the airport, border or in a vehicle",
          paragraphs: [
            "In an international trafficking case it must be established exactly who had control over the luggage, parcel or vehicle, what each person knew and what evidence links the investigated person to the substances discovered.",
          ],
        },
        {
          h3: "You received or sent a parcel from abroad",
          paragraphs: [
            "The fact that substances are transported by courier or post does not remove the cross-border nature of the investigation. The sender, recipient, payment, communications, parcel route and what can be proved regarding knowledge of the contents must all be analysed.",
          ],
        },
        {
          h3: "You are accused of organising the transport without having the drugs on you",
          paragraphs: [
            "A case is not limited to the person physically transporting the substances. The prosecution may examine the roles of people alleged to have ordered, financed, coordinated, received or facilitated the operation. Each role must however be proved individually.",
          ],
        },
        {
          h3: "The case involves several people or an organised criminal group charge",
          paragraphs: [
            [
              { text: "The offence under Article 367 of the Criminal Code is distinct and must be analysed separately from the drug offence. See also the dedicated page on " },
              { text: "organised criminal groups", to: "/en/services/organized-crime-group" },
              { text: "." },
            ],
          ],
        },
      ],
    },
    {
      h2: "What I immediately analyse in an international drug trafficking case",
      paragraphs: [
        "In such cases I verify:",
      ],
      bullets: [
        "where and how the substances were discovered;",
        "the international route alleged by the prosecution;",
        "who organised the travel or shipment;",
        "who had control over the luggage, parcel or vehicle;",
        "what the investigated person actually knew about the contents;",
        "transport documents;",
        "reservations and tickets;",
        "phone data;",
        "locations and communications;",
        "payments and money transfers;",
        "evidence regarding sender and recipient;",
        "technical surveillance;",
        "any controlled deliveries;",
        "control and search records;",
        "the report on the nature of the substance;",
        "the chain of custody of the evidence;",
        "the concrete role attributed to each person.",
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Documents to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["If you have them, send me:"],
      bullets: [
        "the summons;",
        "the control record;",
        "the search record;",
        "documents regarding the luggage or parcel;",
        "the AWB and courier documents;",
        "tickets, reservations or transport documents;",
        "ordinances and court orders received;",
        "documents regarding the phone or other seized devices;",
        "any document relating to the next hearing.",
      ],
      calloutAfterBullets: "Don't have all the documents?",
      calloutAfterBulletsCta: "Call anyway.",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send documents on WhatsApp",
    },
    {
      h2: "What does international drug trafficking mean?",
      paragraphs: [
        [
          { text: "Article 3 of Law no. 143/2000 criminalises the introduction or removal from the country, as well as the import or export of drugs, without right. It is an offence distinct from the forms of " },
          { text: "drug trafficking", to: "/en/services/drug-offenses" },
          { text: " regulated by Article 2." },
        ],
        "In practice, the international element can arise through:",
      ],
      bullets: [
        "road transport;",
        "air transport;",
        "luggage;",
        "parcels;",
        "courier services;",
        "maritime transport;",
        "other methods by which substances cross the border.",
      ],
    },
    {
      h2: "What penalties does the law provide for international drug trafficking?",
      paragraphs: [
        "The current form of Article 3 of Law no. 143/2000 provides:",
      ],
      bullets: [
        "for risk drugs: 10 to 20 years' imprisonment and a ban on certain rights;",
        "for high-risk drugs: 15 to 25 years' imprisonment and a ban on certain rights.",
      ],
      paragraphsAfterBullets: [
        "For the offence under Article 3 paragraph (2) - international trafficking of high-risk drugs - the law expressly provides that suspended execution of the sentence under supervision cannot be ordered. This rule was introduced by Law no. 58/2024.",
        "For this reason, the classification of the substance and the exact determination of the facts alleged are of major importance.",
      ],
    },
    {
      h2: "International trafficking or drug trafficking on Romanian territory?",
      paragraphs: [
        [
          { text: "Articles 2 and 3 regulate different facts. Article 3 concerns the cross-border element - introduction, removal, import or export. Article 2 concerns operations for the circulation of drugs such as production, offering, sale, distribution, transport, procurement, purchase or possession, under the conditions provided by law.", bold: true },
        ],
        "In certain situations, a cross-border activity may lead to the analysis of both offences. The High Court of Cassation and Justice has expressly analysed the possibility of concurrence between international trafficking and drug trafficking in the situation of cross-border transport continued thereafter on Romanian territory.",
        "Therefore, the following must be established separately:",
      ],
      bullets: [
        "the moment the border was crossed;",
        "conduct after entering Romania;",
        "the role of each participant;",
        "the evidence relating to each charge.",
      ],
    },
    {
      h2: "What happens if the drugs were found in luggage belonging to you?",
      paragraphs: [
        "The fact that the substances are in luggage associated with a person is important evidence, but the case must be analysed as a whole. The following must be verified:",
      ],
      bullets: [
        "who prepared the luggage;",
        "who had access to it;",
        "who actually controlled it;",
        "what the person knew about the contents;",
        "what conversations exist;",
        "who bought the tickets;",
        "who financed the trip;",
        "what other evidence supports or contradicts the charge.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "There is no standard strategy for all situations. If the quantity found is small and the investigation considers personal use, the analysis differs, as explained on the page about " },
          { text: "drug possession for personal use", to: "/en/services/drug-possession-personal-use" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What happens if the drugs came in a parcel?",
      paragraphs: [
        "In such cases the investigation may trace the entire route of the parcel:",
      ],
      bullets: [
        "sender;",
        "details entered in the order;",
        "phone number;",
        "delivery address;",
        "payment;",
        "IPs and accounts;",
        "recipient;",
        "the person who actually collected the parcel;",
        "communications between the people involved.",
      ],
      paragraphsAfterBullets: [
        "It must be established whether the recipient actually knew the contents and what evidence exists in this regard.",
        [
          { text: "If you have been summoned to collect a parcel or after receiving it, discuss with a lawyer before making a statement. See what " },
          { text: "assistance during questioning", to: "/en/services/police-prosecutor-questioning" },
          { text: " involves and what happens during a " },
          { text: "home search", to: "/en/services/home-search" },
          { text: "." },
        ],
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
    },
    {
      h2: "Controlled delivery and intervention by the investigating authorities",
      paragraphs: [
        "The law allows, subject to applicable procedural conditions, the use of controlled deliveries in the investigation of drug offences. Legislation also permits the use of authorised investigators and collaborators under the conditions of the law.",
        "In such a case I verify:",
      ],
      bullets: [
        "the authorisation documents;",
        "the sequence of operations;",
        "the moment the judicial authorities intervened;",
        "the persons under surveillance;",
        "how the actions were documented;",
        "the statements of investigators or collaborators;",
        "whether the evidence actually supports the role attributed to the client.",
      ],
    },
    {
      h2: "What role do phone, location and money transfers play?",
      paragraphs: [
        "International trafficking cases often have a significant digital and financial component. The prosecution may try to reconstruct the alleged route of the operation through:",
      ],
      bullets: [
        "conversations;",
        "calls;",
        "locations;",
        "reservations;",
        "online accounts;",
        "money transfers;",
        "payments for transport;",
        "courier data;",
        "photos and files.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "In defence it is not enough to read isolated fragments. The complete chronology, the real link between each piece of evidence and the alleged act, and the lawfulness of how data was extracted during a " },
          { text: "computer search", to: "/en/services/computer-search" },
          { text: " must all be verified." },
        ],
      ],
    },
    {
      h2: "What happens if you did not personally transport the drugs?",
      paragraphs: [
        "A person can be investigated even if they did not themselves cross the border with the substances, if the prosecutor alleges that they participated in organising or carrying out the operation. In this case the following must be established exactly:",
      ],
      bullets: [
        "what action is attributed to them;",
        "what evidence supports participation;",
        "whether there are only contacts with other people or concrete actions;",
        "whether the person knew the purpose of the operation;",
        "whether the charge correctly distinguishes the roles of the participants.",
      ],
      paragraphsAfterBullets: [
        "Simple association with other people does not replace proof of individual contribution.",
      ],
    },
    {
      h2: "If the case also includes an organised criminal group charge",
      paragraphs: [
        [
          { text: "In cases with several participants, the prosecutor may also examine the existence of an " },
          { text: "organised criminal group", to: "/en/services/organized-crime-group" },
          { text: ". This offence has its own elements and does not automatically result from the mere fact that three or more people are investigated in the same case." },
        ],
      ],
    },
    {
      h2: "How I build the defence in an international drug trafficking case",
      paragraphs: [
        "I analyse separately:",
      ],
      bullets: [
        "the cross-border element;",
        "the nature and classification of the substance;",
        "the concrete role attributed to the client;",
        "knowledge of the transported contents;",
        "the link between the client and the other participants;",
        "digital and financial evidence;",
        "legality of controls, searches and surveillance;",
        "any controlled deliveries;",
        "the legal classification;",
        "connected charges.",
      ],
      paragraphsAfterBullets: [
        "Strategy is built from the case, not from assumptions.",
      ],
      cta: "☎ Call now - 031 632 01 83",
      ctaIcon: false,
    },
  ],
  reviewAfterSection: 2,
  reviewAuthor: "Robert Boloaja",
  reviewText:
    "Complicated criminal case with serious accusations. Mr. Bogdan Lamatic was exceptional: extremely professional, very good strategy, calm and maximally prepared. He quickly identified the weak points of the case and handled everything with determination. Available at any time, explains everything clearly and realistically, without false promises. The result was far beyond what I hoped for.",
  reviewMeta: "Local Guide · 3 reviews",
  reviewTimestamp: "2 months ago",
  reviewLink: "https://maps.app.goo.gl/FrP7GEBkgb1pFW2Y8",
  faqTitle: "Frequently asked questions about international drug trafficking",
  faq: [
    {
      q: "What is the difference between international trafficking and drug trafficking?",
      a: "International trafficking involves the introduction, removal, import or export element regulated by Article 3. Trafficking under Article 2 covers other operations concerning the circulation of drugs.",
    },
    {
      q: "Can I be accused if the drugs were in a parcel addressed to me?",
      a: "You can be investigated, but it must be established whether you knew what the parcel contained and what evidence actually links the person to the operation.",
    },
    {
      q: "What is the penalty for importing drugs?",
      a: "Under the current form of the law, Article 3 provides 10-20 years for risk drugs and 15-25 years for high-risk drugs.",
    },
    {
      q: "Can the sentence be suspended for international trafficking of high-risk drugs?",
      a: "Law no. 143/2000 expressly provides that for Article 3 paragraph (2) suspended execution of the sentence under supervision cannot be ordered.",
    },
    {
      q: "Is attempt punishable?",
      a: "Yes. Law no. 143/2000 provides for the punishment of attempt for the indicated offences, including Article 3.",
    },
    {
      q: "Do several people involved in transport automatically mean an organised criminal group?",
      a: "Not automatically. For Article 367 of the Criminal Code the specific conditions of the organised criminal group must be proved.",
    },
  ],
  resources: [
    {
      text: "Legislative Portal - Law no. 143/2000 on preventing and combating drug trafficking and illicit drug use.",
      href: L143_EN,
      linkLabel: "Legislation",
    },
    {
      text: "Legislative Portal - Law no. 58/2024 including the impossibility of suspension for Article 2 paragraph (2) and Article 3 paragraph (2).",
      href: L58_EN,
      linkLabel: "Legislation",
    },
    {
      text: "Legislative Portal - High Court Decision no. 15/2017 on international trafficking and drug trafficking.",
      href: ICCJ15_EN,
      linkLabel: "Legislation",
    },
    {
      text: "Legislative Portal - Emergency Ordinance no. 78/2016 on DIICOT jurisdiction.",
      href: OUG78_EN,
      linkLabel: "Legislation",
    },
  ],
  contactText:
    "Do you have a cross-border trafficking or drug import case? Tell me where the substances were found, how they reached Romania, what role is attributed to you, whether other people are also investigated and when the next hearing is. You do not need to have all the documents before contacting me.",
  contactWhatsApp: true,
  contactWhatsAppLabel: "Send documents on WhatsApp",
  parent: PARENT_DO_EN,
};
