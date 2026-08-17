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
      paragraphs: [
        "Yes. Use of forgery is a separate offense and concerns the person who uses the document, regardless of who produced it.",
        "That is why the defense focuses on how you obtained the document, what checks you could reasonably make and what you actually knew about its origin.",
      ],
    },
    {
      h2: "Do you have to know the document is forged in order to answer for use of forgery?",
      cardClassName: "bg-[#faf0e6]",
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
      cardClassName: "bg-[#faf0e6]",
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
