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
      h2: "What I do for you in a tax evasion case",
      bullets: [
        "I review the tax inspection report and the criminal complaint to identify the exact conduct alleged.",
        "I check whether the operations invoked fall under Law 241/2005 or amount only to a different fiscal interpretation.",
        "I analyse how the damage was calculated and, where useful, request an accounting or tax expert report.",
        "I prepare you for questioning and assist you at every stage, before the prosecutor and in court.",
        "I challenge precautionary measures, including seizures over accounts or assets, where grounds exist.",
        "I assess the effect that covering the damage may have on criminal liability, under the conditions set by law.",
      ],
      cta: "I have a tax evasion case - request an assessment",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "ANAF filed a criminal complaint after an audit or tax inspection;",
        "you are summoned for questioning as a suspect or defendant;",
        "the company you manage is investigated for fictitious operations;",
        "accounts, real estate or other assets have been frozen;",
        "you have been indicted and are preparing the trial defense;",
        "you want to know what effect paying the damage has in your case.",
      ],
    },
    {
      h2: "What the law says about tax evasion",
      paragraphs: [
        "Law 241/2005 on preventing and combating tax evasion sets out an exhaustive list of criminal conduct. Not every difference found by the tax authority is automatically a criminal offense.",
        "Article 9 of the law covers, among others:",
      ],
      bullets: [
        "concealing the taxable asset or source;",
        "omitting to record commercial operations carried out or income earned;",
        "recording expenses not based on real operations, or fictitious operations;",
        "altering, destroying or hiding accounting records;",
        "keeping double accounting records;",
        "substituting, damaging or disposing of seized assets.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "Penalty limits increase when the damage exceeds the statutory thresholds, and the file is often accompanied by precautionary measures. The defense is built on the accounting documents and on the " },
          { text: "rules of the criminal investigation", to: "/en/services/criminal-investigation" },
          { text: " governing the evidence gathered." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["For a quick first assessment, tell me what happened and at what stage the file is."],
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
  ],
  faq: [
    {
      q: "Does any tax debt mean tax evasion?",
      a: "No. Law 241/2005 lists the conduct that constitutes an offense. An unpaid tax debt or a difference resulting from a different reading of tax legislation is not automatically a criminal offense.",
    },
    {
      q: "What happens if I pay the damage?",
      a: "The law provides specific consequences depending on when the damage is covered and on its amount. The concrete effect must be assessed against the legal classification retained in your file and the procedural stage.",
    },
    {
      q: "Can the company accounts be frozen?",
      a: "Yes, the judicial authorities may order precautionary measures to secure recovery of the damage. Such measures can be challenged and their extent assessed against the damage retained.",
    },
    {
      q: "Who is liable, the director or the company?",
      a: "Criminal liability may be examined both for the individual and for the legal entity. What matters is the actual decision-making powers, the decisions taken and the documents signed.",
    },
    {
      q: "What should I do if I am summoned for questioning?",
      a: "Do not attend without knowing in what capacity you are questioned and what conduct is investigated. Contact me beforehand so we can assess the situation and prepare the hearing.",
    },
    {
      q: "How long does a tax evasion case take?",
      a: "It depends on the complexity of the operations, the number of persons investigated and the expert reports ordered. Files with a large volume of documents can take longer, so the defense must be built from the start.",
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
      h2: "What I do for you",
      bullets: [
        "I review the accusation and check whether the conditions of deception are met, in particular misleading conduct and damage.",
        "I separate the civil or commercial dispute from criminal liability, where the facts allow it.",
        "I build the defense on documents: contracts, invoices, bank statements, correspondence.",
        "I file the criminal complaint and represent the injured party seeking recovery of the damage.",
        "I request precautionary measures to protect sums and assets, where appropriate.",
        "I assist you at hearings and before the court, at every stage of the proceedings.",
      ],
      cta: "I want to discuss my case",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "you are accused of misleading a contractual partner;",
        "you paid for goods or services you never received;",
        "you were the victim of an investment or online fraud;",
        "you are a director and your company is reported over a failed deal;",
        "you issued cheques or promissory notes without funds;",
        "you want to file a criminal complaint and join the case as a civil party.",
      ],
    },
    {
      h2: "What the law says about deception",
      paragraphs: [
        "Article 244 of the Criminal Code punishes misleading a person by presenting a false fact as true or a true fact as false, in order to obtain an unjust patrimonial benefit, where damage has been caused.",
        "The offense is aggravated when committed by using false names or capacities or other fraudulent means. The Criminal Code also regulates insurance deception separately, in art. 245.",
        [
          { text: "In practice, the central issue is whether the intent to mislead existed from the outset or whether this is a contractual breach. That assessment is made on the evidence gathered during the " },
          { text: "criminal investigation stage", to: "/en/services/criminal-investigation" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me briefly what happened, what amounts are involved and at what stage the file is."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the contract or written agreement;",
        "invoices and proof of payment;",
        "correspondence with the other party;",
        "the criminal complaint or the order received;",
        "the summons.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "When does a breach of contract become deception?",
      a: "When it is proven that the party misled the other by presenting untrue facts, in order to obtain an unjust patrimonial benefit, and damage was caused. A mere breach without that element remains a civil dispute.",
    },
    {
      q: "Can I recover my money through the criminal case?",
      a: "You can join the criminal proceedings as a civil party to claim compensation. In parallel, precautionary measures can be requested to protect available sums or assets.",
    },
    {
      q: "What should I do if I was the victim of an online fraud?",
      a: "Gather all available evidence, including conversations, proof of payment and details of the accounts used, then file a criminal complaint. Depending on the method used, the conduct may also be assessed as computer fraud.",
    },
    {
      q: "What do I risk if I am accused of deception?",
      a: "Article 244 of the Criminal Code provides for imprisonment, with higher limits in the aggravated form. Alongside the penalty, an obligation to repair the damage may be examined.",
    },
    {
      q: "Is issuing a cheque without funds an offense?",
      a: "It may be assessed as deception when the legal conditions on misleading conduct and damage are met. The context of issuance and what the parties knew at that time are decisive.",
    },
    {
      q: "Can I be investigated if my company became insolvent?",
      a: "Insolvency in itself is not an offense. However, the operations carried out before insolvency may be examined, including from the perspective of fraudulent bankruptcy.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 244 on deception.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Code - art. 245 on insurance deception.", href: CP, linkLabel: "Legislation" },
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
      h2: "What I do for you",
      bullets: [
        "I check whether you held the capacity required by law, namely a public official managing or administering the assets.",
        "I analyse the management records, account sheets, settlements and supporting documents.",
        "I challenge how the damage was established and, where needed, request an accounting expert report.",
        "I separate shortfalls caused by errors or weak internal procedures from criminal conduct.",
        "I assist you at hearings and throughout the trial, filing the necessary requests and objections.",
        "I represent the injured company seeking recovery of the sums and precautionary measures.",
      ],
      cta: "I am investigated for embezzlement - request an assessment",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "you have been notified that money or goods are missing from the assets you manage;",
        "the company filed a criminal complaint against you;",
        "you have been summoned for questioning in an embezzlement file;",
        "you are a director and discovered unjustified operations;",
        "you have been indicted and are preparing the defense;",
        "precautionary measures have been ordered over your assets.",
      ],
    },
    {
      h2: "What the law says about embezzlement",
      paragraphs: [
        "Article 295 of the Criminal Code punishes the appropriation, use or trafficking, by a public official, in his own interest or for another, of money, valuables or other assets he manages or administers.",
        "Several elements must be proven for the offense to exist:",
      ],
      bullets: [
        "the capacity of official with management or administration duties;",
        "the existence of the assets or sums under that person's management;",
        "the act of appropriation, use or trafficking;",
        "intent, not mere negligence in keeping the records.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "The offense has an aggravated form where particularly serious consequences were caused. In complex files, embezzlement often appears alongside other economic charges, so the defense must be built as a whole. See also " },
          { text: "defense in economic crime cases", to: "/en/services/financial-crime" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me what position you held, what sums are retained and at what stage the file is."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "your job description and employment contract or mandate;",
        "the inventory report;",
        "the relevant accounting documents and settlements;",
        "the criminal complaint or the order received;",
        "the summons.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "Does any shortfall mean embezzlement?",
      a: "No. A shortfall may result from bookkeeping errors, weak internal procedures or justified losses. Embezzlement requires proof of appropriation, use or trafficking, committed with intent.",
    },
    {
      q: "Who can be liable for embezzlement?",
      a: "The person holding the capacity required by law who actually manages or administers the assets or sums. The analysis starts from the job description, the mandate granted and the duties actually exercised.",
    },
    {
      q: "What happens if I return the money?",
      a: "Returning the damage does not automatically remove criminal liability, but it can be used in the defense and in sentencing. The concrete effect depends on the procedural stage and the circumstances.",
    },
    {
      q: "Can the company claim damages in the criminal case?",
      a: "Yes. The injured company can join as a civil party and request precautionary measures to recover the damage.",
    },
    {
      q: "Is an accounting expert report useful?",
      a: "In many files yes, because the damage retained rests on accounting calculations. An expert report can clarify the sums, the period analysed and the supporting documents.",
    },
    {
      q: "What do I risk in an embezzlement file?",
      a: "Article 295 of the Criminal Code provides for imprisonment, with higher limits where particularly serious consequences were caused. An obligation to repair the damage may also be examined.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 295 on embezzlement.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code - art. 249 and following on precautionary measures.", href: CPP, linkLabel: "Legislation" },
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
      h2: "What I do for you",
      bullets: [
        "I check which type of forgery is retained and whether the document is an official or a private one.",
        "I assess whether the document produced legal consequences, an essential condition for several of these offenses.",
        "I challenge the conclusions of the handwriting expert report and request a new one where needed.",
        "I examine whether the person using the document knew it was forged.",
        "I assist you at hearings, file requests and objections and prepare the trial defense.",
      ],
      cta: "I want an assessment of my case",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "you are accused of signing a document in another person's name;",
        "a contract, invoice or certificate is said to be forged;",
        "you filed with an institution a document said not to be genuine;",
        "you are an official and an official act is said to have been drafted untruthfully;",
        "the forgery charge accompanies a tax evasion, deception or fraud file;",
        "you have been summoned for questioning or received the indictment.",
      ],
    },
    {
      h2: "What the law says about forgery",
      paragraphs: ["The Criminal Code regulates several distinct offenses:"],
      bullets: [
        {
          bold: "Material forgery of official documents (art. 320).",
          rest: "Forging an official document by counterfeiting the writing or signature, or by altering it in any way.",
        },
        {
          bold: "Intellectual forgery (art. 321).",
          rest: "Forging an official document when drafting it, by certifying facts or circumstances that do not correspond to the truth or by omitting data.",
        },
        {
          bold: "Forgery of private documents (art. 322).",
          rest: "Forging a private document, followed by using it or handing it to another person for use, with a view to producing legal consequences.",
        },
        {
          bold: "Use of forgery (art. 323).",
          rest: "Using an official or private document, knowing it is forged, with a view to producing legal consequences.",
        },
      ],
      paragraphsAfterBullets: [
        [
          { text: "Forgery frequently accompanies other economic charges, so the strategy must cover the whole file, not just the document. See also " },
          { text: "tax evasion cases", to: "/en/services/tax-evasion" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me which document is involved, who drafted it and where it was used."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the contested document;",
        "the order or the criminal complaint;",
        "the expert report, if one was ordered;",
        "the summons;",
        "the relevant correspondence.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "What is the difference between forgery and use of forgery?",
      a: "Forgery means falsifying the document, while use of forgery means using a forged document, knowing its character, with a view to producing legal consequences. The same person may be liable for both or only one of them.",
    },
    {
      q: "Can I be investigated if I did not know the document was forged?",
      a: "Use of forgery requires knowledge that the document is forged. If you did not know, this must be established through the evidence in the file.",
    },
    {
      q: "What does producing legal consequences mean?",
      a: "It means the document is capable of creating, modifying or extinguishing rights or obligations. It is assessed separately for private documents and for use of forgery.",
    },
    {
      q: "Can the handwriting expert report be challenged?",
      a: "Yes. The conclusions can be contested, objections can be filed and a new expert report can be requested, under the conditions set by the Criminal Procedure Code.",
    },
    {
      q: "What do I risk in a forgery file?",
      a: "Penalties differ depending on the type of forgery retained and are set out in art. 320-323 of the Criminal Code. The concrete classification directly affects the penalty limits.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 320-323 on forgery and use of forgery.", href: CP, linkLabel: "Legislation" },
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
      h2: "What I do for you",
      bullets: [
        "I review the complaint and the report of the judicial administrator or liquidator.",
        "I check whether the contested operations had a genuine economic justification.",
        "I separate insolvency caused by economic difficulties from conduct committed with fraudulent intent.",
        "I analyse asset transfers, preferential payments and how the accounting records were kept.",
        "I assist you at hearings and before the court, with defenses built on the company's documents.",
        "I align the criminal defense with the ongoing insolvency proceedings.",
      ],
      cta: "I received a bankruptcy complaint - request an assessment",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "the judicial administrator or liquidator filed a criminal complaint;",
        "a creditor accuses you of hiding or transferring assets;",
        "you are investigated for falsifying or destroying accounting records;",
        "preferential payments to certain creditors are alleged;",
        "you have been summoned in a file linked to the company's insolvency;",
        "the bankruptcy charge comes with other economic offenses.",
      ],
    },
    {
      h2: "What the law says about fraudulent bankruptcy",
      paragraphs: ["Article 241 of the Criminal Code punishes a person who, in fraud of creditors:"],
      bullets: [
        "falsifies, removes or destroys the debtor's records, or hides part of the debtor's assets;",
        "presents non-existent debts or records in the debtor's registers, in another document or in the financial statements sums that are not owed;",
        "transfers part of the assets in case of the debtor's insolvency.",
      ],
      paragraphsAfterBullets: [
        "The essential condition is fraud of creditors. A company may become insolvent for objective economic reasons, without that amounting to an offense.",
        [
          { text: "The Criminal Code also regulates simple bankruptcy in art. 240. In larger files, these charges may appear together with " },
          { text: "asset concealment operations", to: "/en/services/money-laundering-and-asset-concealment" },
          { text: "." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me at what stage the insolvency procedure is and which operations are contested."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the report of the judicial administrator or liquidator;",
        "the criminal complaint or the order received;",
        "the relevant financial statements and trial balances;",
        "the contracts concerning the transferred assets;",
        "the summons.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "Does insolvency automatically mean fraudulent bankruptcy?",
      a: "No. Insolvency may have objective economic causes. Fraudulent bankruptcy requires conduct committed in fraud of creditors, from those expressly listed in art. 241 of the Criminal Code.",
    },
    {
      q: "Who can notify the criminal authorities?",
      a: "The judicial administrator, the liquidator, creditors or other interested persons. The investigating authorities may also act on their own initiative.",
    },
    {
      q: "What are preferential payments?",
      a: "Payments made to certain creditors to the detriment of others. They are examined in the insolvency procedure and may also be relevant in the criminal file, depending on the circumstances.",
    },
    {
      q: "Is the director liable with personal assets?",
      a: "In the insolvency procedure, patrimonial liability may be examined, and in the criminal file an obligation to repair the damage may be assessed. These are distinct procedures with their own conditions.",
    },
    {
      q: "How do the criminal file and the insolvency relate?",
      a: "Documents from the insolvency procedure frequently end up in the criminal file. The defense must therefore be consistent across both procedures, with the same economic explanations.",
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
      h2: "What I do for you",
      bullets: [
        "I review the accusation and check whether the conduct qualifies as computer fraud or as another cybercrime offense.",
        "I verify how the digital evidence was obtained and whether the legal procedures were observed.",
        "I analyse the technical report and, where needed, support an independent expert examination.",
        "I challenge the link between an IP address, an account or a device and the accused person where that link is not proven.",
        "I file the criminal complaint and represent the injured party seeking recovery of the sums.",
        "I assist you at hearings and at every stage of the proceedings.",
      ],
      cta: "I want an assessment of my situation",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "you are accused of carrying out fraudulent operations in computer systems;",
        "your accounts were emptied through an unauthorised online operation;",
        "you were the victim of card or electronic payment fraud;",
        "you were involved, without knowing, in suspicious money transfers;",
        "your devices were seized in an investigation into online fraud;",
        "you have been summoned in a cybercrime file.",
      ],
    },
    {
      h2: "What the law says about computer fraud",
      paragraphs: [
        "Article 249 of the Criminal Code punishes causing patrimonial damage to a person by introducing, modifying or deleting computer data, by restricting access to such data or by hindering in any way the functioning of a computer system, in order to obtain a material benefit for oneself or for another.",
        "In practice, the charge often comes together with others, such as illegal access to a computer system, illegal operations with devices or computer programs, or fraudulent financial operations.",
        [
          { text: "Evidence is frequently obtained by seizing devices and analysing the data. See what a " },
          { text: "computer search of your phone or laptop", to: "/en/services/computer-search" },
          { text: " involves." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me which operations are targeted, what amounts are involved and what you have been told so far."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the order or the criminal complaint;",
        "bank statements and proof of the transactions;",
        "the report on the seizure of the devices;",
        "correspondence with the bank or the platform involved;",
        "the summons.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "What is the difference between deception and computer fraud?",
      a: "Deception requires misleading a person, while computer fraud requires intervening on data or on the functioning of a computer system, causing patrimonial damage and pursuing a material benefit.",
    },
    {
      q: "Is an IP address enough to accuse me?",
      a: "An IP address identifies a connection, not automatically a person. The link between connection, device and user must be proven through corroborating evidence.",
    },
    {
      q: "Can I recover money lost in an online fraud?",
      a: "You can join the criminal proceedings as a civil party, and in parallel steps towards the bank or the payment service provider can be assessed. Acting quickly is essential.",
    },
    {
      q: "What happens to the seized devices?",
      a: "Devices may be kept for as long as they are needed as evidence. Where there is a legal basis, their return or a copy of the data can be requested.",
    },
    {
      q: "Can I be investigated if I received money without knowing its origin?",
      a: "Yes, such a situation can be examined. What matters is what you knew when the sums were received and what you did with them afterwards, points that must be clarified from the first statements.",
    },
  ],
  resources: [
    { text: "Criminal Code - art. 249 on computer fraud.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code - art. 168 on computer searches.", href: CPP, linkLabel: "Legislation" },
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
      h2: "What I do for you",
      bullets: [
        "I review the project documents, the funding application and the control reports.",
        "I check whether the situation is an administrative irregularity or conduct covered by criminal law.",
        "I analyse how the damage and the financial corrections were established.",
        "I assist you before the investigating authorities, including in files handled by the anti-corruption directorate.",
        "I build the defense on documents: procurement, deliveries, progress reports, proof of payment.",
        "I challenge precautionary measures ordered over accounts or assets.",
      ],
      cta: "My project is under control - I want to discuss",
    },
    {
      h2: "When you can contact me",
      paragraphs: ["Contact me if:"],
      bullets: [
        "the anti-fraud department or the managing authority started a review of the project;",
        "you received a note establishing irregularities;",
        "a criminal complaint was filed over documents or statements submitted in the project;",
        "the funds are said to have been used for other purposes than those provided;",
        "the procurement procedure in the project is contested;",
        "you have been summoned in a file concerning EU funds.",
      ],
    },
    {
      h2: "What the law says about EU funds fraud",
      paragraphs: [
        "Law 78/2000 regulates, in art. 18^1 to art. 18^5, offenses against the financial interests of the European Union. These include:",
      ],
      bullets: [
        "using or presenting false, inaccurate or incomplete documents or statements, resulting in the wrongful obtaining of funds;",
        "omitting to provide the required data, with the same result;",
        "changing the destination of the funds obtained, without observing the legal provisions;",
        "changing the destination of a lawfully obtained benefit, where the conduct produces the consequences provided by law.",
      ],
      paragraphsAfterBullets: [
        [
          { text: "These files are frequently handled by the National Anticorruption Directorate, so the defense must be prepared from the control stage. See what " },
          { text: "assistance in a DNA investigation", to: "/en/services/dna-lawyer" },
          { text: " involves." },
        ],
      ],
    },
    {
      h2: "What to send me",
      cardClassName: "bg-[#faf0e6]",
      paragraphs: ["Tell me which funding programme is involved, what amounts are at stake and who is carrying out the review."],
      paragraphsAfterBullets: [[{ text: "If you have them, send me:", bold: true }]],
      bulletsAfterBullets: [
        "the financing contract and the funding application;",
        "the note of findings or the control report;",
        "the procurement documents of the project;",
        "the progress reports and reimbursement claims;",
        "the order or summons received.",
      ],
      calloutAfterBullets: "You do not have all the documents?",
      calloutAfterBulletsClassName: "font-semibold bg-white",
      calloutAfterBulletsCta: "Call anyway",
      ctaWhatsApp: true,
      ctaWhatsAppLabel: "Send me the documents on WhatsApp",
    },
  ],
  faq: [
    {
      q: "Is every project irregularity a criminal offense?",
      a: "No. An irregularity may only trigger financial corrections and the obligation to return funds. Criminal liability requires the conditions set by law, including as regards intent.",
    },
    {
      q: "What does the anti-fraud department do?",
      a: "It carries out controls on how EU funds are used and may notify the criminal investigation authorities where it finds indications of criminal conduct.",
    },
    {
      q: "Who handles these files?",
      a: "Offenses against the financial interests of the European Union are generally handled by the National Anticorruption Directorate, within the limits of its statutory competence.",
    },
    {
      q: "What happens if I return the funds?",
      a: "Returning the sums may be relevant in the file, but it does not automatically remove criminal liability. The concrete effect depends on the conduct retained and the procedural stage.",
    },
    {
      q: "Can I continue implementing the project?",
      a: "It depends on the measures ordered by the managing authority and on any precautionary measures. Each situation must be assessed separately, on the project documents.",
    },
  ],
  resources: [
    { text: "Law 78/2000 - offenses against the financial interests of the European Union.", href: CP, linkLabel: "Legislation" },
    { text: "Criminal Procedure Code - art. 249 and following on precautionary measures.", href: CPP, linkLabel: "Legislation" },
  ],
  contactText: CONTACT,
  parent: PARENT_FC_EN,
};
