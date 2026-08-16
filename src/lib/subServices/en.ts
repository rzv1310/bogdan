import type { SubServicePageData } from "@/components/services/SubServicePage";

const CPP = "https://legislatie.just.ro/Public/DetaliiDocument/185907";
const CP = "https://legislatie.just.ro/Public/DetaliiDocument/223635";
const PARENT = { to: "/en/services/criminal-investigation", label: "criminal investigation" };
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

const PARENT_MP_EN = { to: "/en/services/preventive-measures", label: "preventive measures" };

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
        "Once the 24 hours expire, the person cannot be held further on the basis of the same custody measure.",
        "Depending on the case, another preventive measure may come into discussion, which is why the defence strategy should be analysed before the next decision.",
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
        "During the criminal investigation the measure can be ordered initially for no more than 30 days, and extensions are subject to the conditions and limits set by law. The total duration in this phase cannot exceed 180 days.",
        "The regime applicable in the preliminary chamber and during trial is distinct and involves periodic verification of the measure.",
      ],
    },
    {
      h2: "If the measure has already been ordered",
      paragraphs: ["The fact that detention was ordered does not mean the analysis of the defence is over. Depending on the stage of the case, the following can become relevant:"],
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
      paragraphs: ["The fact that an obligation was imposed does not mean it must remain unchanged regardless of how the case evolves. I analyse whether:"],
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
        "In such a situation I analyse, as the case may be, the conditions of the measure, its suitability compared with other measures, the obligations imposed, the bail, the relevant financial situation and the possibility of using a non-custodial measure instead of a more severe one, where the legal framework and the facts support that argument.",
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
