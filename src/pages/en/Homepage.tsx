import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Play } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import GeminiButtonEffect from "@/components/ui/gemini-button-effect";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { ReviewsCarousel3D, type Review as Reviews3DItem } from "@/components/ui/reviews-carousel-3d";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

// PulseBeams animation config (extracted from demo)
const beams: any[] = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 6.5, cy: 398.5, r: 6 },
      { cx: 269, cy: 220.5, r: 6 },
    ],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 851, cy: 34, r: 6.5 },
      { cx: 568, cy: 200, r: 6 },
    ],
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 142, cy: 427, r: 6.5 },
      { cx: 425.5, cy: 274, r: 6 },
    ],
  },
  {
    path: "M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427",
    gradientConfig: {
      initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
      animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 770, cy: 427, r: 6.5 },
      { cx: 493, cy: 274, r: 6 },
    ],
  },
  {
    path: "M380 168V17C380 11.4772 384.477 7 390 7H414",
    gradientConfig: {
      initial: { x1: "-40%", x2: "-10%", y1: "0%", y2: "20%" },
      animate: {
        x1: ["40%", "0%", "0%"],
        x2: ["10%", "0%", "0%"],
        y1: ["0%", "0%", "180%"],
        y2: ["20%", "20%", "200%"],
      },
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        repeatDelay: 2,
        delay: Math.random() * 2,
      },
    },
    connectionPoints: [
      { cx: 420.5, cy: 6.5, r: 6 },
      { cx: 380, cy: 168, r: 6 },
    ],
  },
];

const gradientStops = ["#FFFFFF", "#FFFF00", "#FFA500", "#FFD700"];

const reviewsEN: Reviews3DItem[] = [
  { name: "Stefan G.", text: "I had a car accident and didn't know what to do. Mr. Lamatic guided me step by step, and the result was beyond expectations. Thank you!", stars: 5 },
  { name: "Costică C.", text: "Mr. Lawyer Bogdan Lamatic not only knows the law, but also explains it in a way anyone can understand. He gives you confidence throughout the whole trial. Highly recommended!", stars: 5 },
  { name: "Mihai C.", text: "As a fellow lawyer, I can say that Bogdan is truly generous with his time and knowledge, always willing to help.", stars: 5 },
  { name: "Crina A.", text: "I turned to Lawyer Lamatic for a foreclosure situation. The solution he proposed worked perfectly.", stars: 5 },
  { name: "Matei R.", text: "In a very difficult criminal case, Bogdan managed to obtain a result I thought was impossible. 100% recommended!", stars: 5 },
  { name: "Ștefan A.", text: "I am a lawyer in Cluj and I collaborated with Bogdan on a medical malpractice case. His legal preparation is impeccable.", stars: 5 },
  { name: "Nicoleta L.", text: "I was looking for a good lawyer in Bucharest and found Mr. Bogdan Lamatic. I recommend him to everyone who needs a trustworthy lawyer and, above all, a good human being.", stars: 5 },
  { name: "Gigi T.", text: "Bogdan is very well-prepared in criminal law. He defended me in a case with serious accusations and the result was exceptional.", stars: 5 },
  { name: "Elena C.", text: "The best criminal lawyer in Bucharest!", stars: 5 },
  { name: "Ana-Maria A.", text: "I had Bogdan Lamatic as my lawyer. He defended me in a criminal law case in Bucharest and I was acquitted!", stars: 5 },
];

const serviceRoutes: (string | null)[] = [
  null,
  "/en/services/financial-crime",
  "/en/services/corruption-and-public-office-offenses",
  "/en/services/crypto-asset-investigations",
  "/en/services/drug-offenses",
  "/en/services/money-laundering-and-asset-concealment",
  "/en/services/professional-negligence-and-malpractice",
  "/en/services/road-traffic-offenses",
  "/en/services/workplace-criminal-liability",
  "/en/services/victim-representation-in-criminal-cases",
] as const;

const HomepageEN = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const currentReviews = reviewsEN;
  const origin = typeof window !== "undefined" ? window.location.origin : "https://avocatpenalbucuresti.ro";
  
  useSEO({
    title: "Attorney Bogdan Lamatic - Criminal Defense Lawyer | Bucharest",
    description: "Defense in white-collar crime, corruption, road traffic, crypto, malpractice.",
    alternates: { en: "/en", ro: "/", xDefault: "/" },
    locale: "en_US",
    robotsDirectives: "index, follow, noarchive",
    schemas: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LegalService",
            "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html",
            "name": "Criminal Defense Lawyer Bucharest — Bogdan Lamatic",
            "description": "Criminal law firm in Bucharest — defense in white-collar crime, corruption, traffic offenses, crypto investigations, and medical malpractice.",
            "url": "https://avocatpenalbucuresti.ro/en",
            "telephone": "+40316320183",
            "email": "contact@avocatpenalbucuresti.ro",
            "image": "https://avocatpenalbucuresti.ro/lovable-uploads/cabinet_avocat_bogdan_lamatic.jpeg",
            "priceRange": "$$",
            "sameAs": [
              "https://www.linkedin.com/in/bogdan-lamatic-b36a2a1b8",
              "https://x.com/BogdanLamatic",
              "https://www.instagram.com/bogdanlamatic/",
              "https://www.facebook.com/profile.php?id=61580770400222",
              "https://www.tiktok.com/@avocatdreptpenal",
              "https://pinterest.com/AvocatDreptPenalBogdanLamatic"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Strada Colonel Stefan Stoika 22",
              "addressLocality": "București",
              "addressRegion": "Bucuresti",
              "postalCode": "012244",
              "addressCountry": "RO"
            },
            "hasMap": "https://www.google.com/maps?cid=17818591254142574295",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 44.4572663,
              "longitude": 26.0635712
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "06:00",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday","Sunday"],
                "opens": "09:00",
                "closes": "20:00"
              }
            ],
            "areaServed": [
              { "@type": "City", "name": "București" },
              { "@type": "Country", "name": "România" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Criminal law services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Financial crime",
                    "description": "Defense in tax evasion, fraud, abuse of office and related cases"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corruption and public office offenses",
                    "description": "Defense in bribery, influence peddling and related offenses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Crypto asset investigations",
                    "description": "Specialized services for blockchain investigations and digital assets"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drug offenses",
                    "description": "Defense in drug trafficking and possession cases"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Money laundering and asset concealment",
                    "description": "Defense in money laundering and asset origin concealment cases"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional negligence and malpractice",
                    "description": "Defense and representation in medical and professional malpractice cases"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Road traffic offenses",
                    "description": "Defense in traffic accidents with victims"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workplace criminal liability",
                    "description": "Defense in workplace accidents and criminal liability cases"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Victim representation in criminal cases",
                    "description": "Legal representation for victims in criminal proceedings"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "reviewCount": "10"
            },
            "review": currentReviews.slice(0, 5).map((review, index) => ({
              "@type": "Review",
              "inLanguage": "en-US",
              "author": { "@type": "Person", "name": review.name },
              "reviewRating": { "@type": "Rating", "ratingValue": review.stars.toString(), "bestRating": "5" },
              "reviewBody": review.text
            }))
          },
          {
            "@type": "Person",
            "@id": "https://avocatpenalbucuresti.ro/despre-mine#person",
            "url": "https://avocatpenalbucuresti.ro/despre-mine",
            "name": "Bogdan Lamatic",
            "jobTitle": "Avocat specializat în drept penal",
            "image": "https://avocatpenalbucuresti.ro/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png",
            "telephone": "+40316320183",
            "email": "contact@avocatpenalbucuresti.ro",
            "worksFor": { "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html" },
            "affiliation": [
              { "@type": "Organization", "name": "Wolf Theiss" },
              { "@type": "Organization", "name": "Enache Pirtea & Asociații S.p.a.r.l." },
              { "@type": "Organization", "name": "Mușat & Asociații S.p.a.r.l." },
              { "@type": "Organization", "name": "Șerban & Asociații – Societate de Avocați" }
            ],
            "memberOf": [
              {
                "@type": "Organization",
                "name": "Baroul București",
                "url": "https://www.baroul-bucuresti.ro/"
              },
              {
                "@type": "Organization",
                "name": "Uniunea Națională a Barourilor din România",
                "url": "https://www.unbr.ro/",
                "sameAs": [
                  "https://ro.wikipedia.org/wiki/Uniunea_Na%C8%9Bional%C4%83_a_Barourilor_din_Rom%C3%A2nia"
                ]
              }
            ],
            "alumniOf": [
              { "@type": "CollegeOrUniversity", "name": "Universitatea Nicolae Titulescu din București" }
            ],
            "hasCredential": [
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Bachelor of Laws (LL.B.)",
                "datePublished": "2006",
                "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Universitatea Nicolae Titulescu din București" }
              },
              {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Postgraduate Diploma in Criminal Law",
                "datePublished": "2015",
                "recognizedBy": { "@type": "CollegeOrUniversity", "name": "Universitatea Nicolae Titulescu din București" }
              }
            ],
            "award": [
              "Legal 500 – Rising Star (White-Collar Crime) 2020",
              "Legal 500 – Next Generation Partner (White-Collar Crime) 2021",
              "Legal 500 – Next Generation Partner (White-Collar Crime) 2022",
              "Legal 500 – Next Generation Partner (White-Collar Crime) 2023",
              "Legal 500 – Next Generation Partner (White-Collar Crime) 2024"
            ],
            "knowsAbout": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "Thing", "name": "white-collar economic crime" },
                { "@type": "Thing", "name": "corporate investigations" },
                { "@type": "Thing", "name": "compliance" },
                { "@type": "Thing", "name": "asset recovery and international enforcement" },
                { "@type": "Thing", "name": "litigation" },
                { "@type": "Thing", "name": "criminal law" },
                { "@type": "Thing", "name": "defense in financial crime cases" },
                { "@type": "Thing", "name": "representation in corruption and public office offenses" },
                { "@type": "Thing", "name": "legal assistance in crypto asset investigations" },
                { "@type": "Thing", "name": "representation in drug-related criminal cases" },
                { "@type": "Thing", "name": "defense in money laundering and asset concealment cases" },
                { "@type": "Thing", "name": "handling professional negligence and malpractice cases" },
                { "@type": "Thing", "name": "representation in road traffic offenses with bodily injury or death" },
                { "@type": "Thing", "name": "criminal liability for workplace incidents" },
                { "@type": "Thing", "name": "victim representation in criminal proceedings" }
              ]
            },
            "sameAs": [
              "https://www.wolftheiss.com/lawyer/bogdan-lamatic/",
              "https://profesionisti.juridice.ro/bogdan-lamatic",
              "https://www.google.com/maps?cid=17818591254142574295",
              "https://www.instagram.com/bogdanlamatic/",
              "https://www.linkedin.com/in/bogdan-lamatic-b36a2a1b8",
              "https://www.legal500.com/firms/11986-wolf-theiss-rechtsanwalte-gmbh-co-kg/c-romania/lawyers/4275126-bogdan-lamatic"
            ],
            "workLocation": {
              "@type": "Place",
              "name": "Cabinet Avocat Bogdan Lamatic",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strada Colonel Stefan Stoika 22",
                "addressLocality": "București",
                "addressRegion": "București",
                "postalCode": "012244",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.4533",
                "longitude": "26.0876"
              },
              "hasMap": "https://www.google.com/maps?cid=17818591254142574295"
            }
          },
          {
            "@type": "WebSite",
            "name": "Criminal Defense Lawyer Bucharest — Bogdan Lamatic",
            "url": "https://avocatpenalbucuresti.ro/en",
            "description": "Official website of lawyer Bogdan Lamatic — criminal defense, white-collar crime, and crypto investigations in Bucharest.",
            "inLanguage": "en-US",
            "publisher": {
              "@type": "LegalService",
              "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does representation in a criminal case cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fees depend on the complexity of the case and its procedural stage. During the first consultation (free), I provide an estimate and all costs are transparently listed in the contract. Call me at +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer a free initial consultation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I offer a free initial discussion to evaluate your legal situation and possible defense strategies. Phone +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "Do you have experience with drug-related criminal cases?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I have represented clients in a wide range of cases — from economic crimes to offenses against the person or drug trafficking — with favorable outcomes."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a criminal trial take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It can vary from a few months to several years, depending on complexity and procedural stages. I will do everything possible to expedite proceedings within the law. Call +40 (31) 632 01 83 for a free consultation."
                }
              },
              {
                "@type": "Question",
                "name": "What are my rights as a suspect or defendant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You have the right to counsel, to be properly informed of the charges, to consult the file, and to a fair trial. I will explain these in detail in relation to your case. Phone +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "Will you personally represent me in court?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I personally handle the case and court representation. When needed, I collaborate with trusted partners, but I remain your contact lawyer."
                }
              },
              {
                "@type": "Question",
                "name": "What options do I have if the court decision is unfavorable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We can use remedies — appeal or extraordinary remedies — depending on the legal situation and deadlines."
                }
              },
              {
                "@type": "Question",
                "name": "Can I receive free legal aid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in certain conditions you may obtain a court-appointed lawyer or support through the legal aid system. I can help check your eligibility."
                }
              },
              {
                "@type": "Question",
                "name": "How can I find a good lawyer in Romania or Bucharest?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "My experience and expertise are detailed here: https://avocatpenalbucuresti.ro/despre-mine Call me for a free consultation at 0316320183."
                }
              },
              {
                "@type": "Question",
                "name": "Can I avoid a criminal record if I plead guilty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In some situations, the law allows penalties without entry in the criminal record (e.g., waiver of prosecution, administrative fine, waiver of applying the penalty). Each case is analyzed individually. Call +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "What are my rights if I am detained by the police?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You have the right to be informed of the reasons, to have a chosen or court-appointed lawyer, to request an interpreter if you do not speak Romanian, and to receive medical assistance if needed. You can call me from 6 AM. Phone +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "What is parole and can I obtain it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parole allows early release before the end of the sentence if you have served part of it, behaved well, and met the legal conditions."
                }
              },
              {
                "@type": "Question",
                "name": "How long can a criminal investigation last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Duration depends on complexity and the amount of evidence; the law does not set maximum terms for each stage. Call me at +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "Can I refuse to incriminate myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you have the right against self-incrimination under the Code of Criminal Procedure, the Romanian Constitution, and the European Convention on Human Rights."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if I disagree with the charges against me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact me immediately at +40 (31) 632 01 83. I will review the charges, prepare the defense, and challenge unlawful evidence or procedures to protect your rights."
                }
              },
              {
                "@type": "Question",
                "name": "I was caught driving under the influence. What do I risk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depending on blood alcohol level, the act may be a misdemeanor or a crime. It can lead to a criminal case, license suspension, and even imprisonment. Proper defense can reduce the sanction. Call +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "Police found drugs on me, but they were for personal use. What happens next?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Possession for personal use is a criminal offense. In some conditions, we can obtain waiver of prosecution or a suspended sentence. It's important to have a lawyer from the first stage."
                }
              },
              {
                "@type": "Question",
                "name": "I was accused of theft but there is no clear evidence. How can I defend myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Insufficient or illegally obtained evidence may lead to dismissal or acquittal. We will review the case file and make the necessary defenses. Phone +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if I refuse breathalyzer or drug testing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Refusal is a separate criminal offense and triggers a criminal case. It is more serious than a positive result, so seek legal assistance immediately. Call +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "I am suspected of domestic violence. What are the consequences?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Domestic violence is a criminal offense; protection orders may also be issued. We will build your defense considering witness statements, evidence, and circumstances. Phone +40 (31) 632 01 83."
                }
              },
              {
                "@type": "Question",
                "name": "I received a subpoena as a witness. Can I skip it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Attendance is mandatory. Refusal may lead to a fine or being brought in by warrant. You have the right to be assisted by a lawyer and the right not to self-incriminate."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if I'm falsely accused?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact a lawyer immediately. Call me at +40 (31) 632 01 83. We will challenge the evidence, bring witnesses and independent expert opinions; in some cases we may file a complaint for false accusation."
                }
              },
              {
                "@type": "Question",
                "name": "Can the police detain me for more than 24 hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Police custody cannot exceed 24 hours. Extension is by preventive arrest ordered by a judge, for which defense before the court is necessary."
                }
              },
              {
                "@type": "Question",
                "name": "What is a plea agreement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is a procedure in which you admit the offense in exchange for a reduced sentence. It applies only in certain cases and must be carefully assessed to avoid a disadvantageous outcome."
                }
              }
            ]
          }
        ]
      }
    ]
  });
  
  return <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 pt-[30px] pb-16 md:pt-12 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1">
              <h1 className="text-[32px] md:text-5xl font-semibold leading-tight tracking-tight mb-6 py-0">
                Criminal Defense Lawyer in Bucharest, Romania
              </h1>
              {/* Mobile-only image right after H1 */}
              <div className="mt-4 block md:hidden">
                <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Criminal defense attorney in suit, studio portrait" title="Criminal defense attorney Bucharest Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-md max-w-[68%] mx-auto" />
              </div>
              <div className="h-[25px] md:hidden" aria-hidden="true"></div>
              <blockquote className="border-l-4 border-accent pl-4 md:pl-6 italic text-lg md:text-xl text-hero-foreground/90">
                {(() => {
                  const parts = t.heroQuote.split("\n");
                  const l1 = parts[0] || "";
                  const l2 = parts[1] || "";
                  return <div className="space-y-2">
                          <p className="mb-0">{l1}</p>
                          <p className="mb-0">{l2}</p>
                        </div>;
                })()}
               </blockquote>
               <p className="mt-2 text-[22px] md:text-2xl italic font-light font-signature text-right py-[11px] px-[22px]">{t.heroAuthor}</p>
               <p className="text-lg md:text-xl italic font-light font-signature text-right py-[2px] px-[22px] text-hero-foreground/80 -mt-2">- 18 years by your side !</p>
              <div className="mt-6 flex md:justify-start justify-center mx-[24px] px-0 py-[11px]">
                <a href="tel:+40316320183" aria-label={lang === "ro" ? "Sună acum" : "Call now"}>
                  <Button variant="static" size="lg" className="border border-hero-foreground">
                    <Phone /> {t.callNow}
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:order-2 hidden md:flex justify-center">
              <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Criminal defense attorney in suit, studio portrait" title="Criminal defense attorney Bucharest Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-2xl max-w-sm" />
            </div>
          </div>
        </section>

        {/* Values and Reasons */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <GlowCard customSize borderPx={1} borderRunner noShadow className="w-full p-0">
            <div className="absolute inset-[var(--border-size)] rounded-xl bg-background" aria-hidden="true"></div>
            <div className="relative z-10 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{t.valuesTitle}</h2>
                  <ul className="space-y-2">
                    {t.values.map((v, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground animate-in fade-in-50 zoom-in-50 duration-500"
                        style={{ animationDelay: `${i * 120}ms` }}
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{t.reasonsTitle}</h2>
                  <ul className="space-y-2">
                    {t.reasons.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-foreground animate-in fade-in-50 zoom-in-50 duration-500"
                        style={{ animationDelay: `${i * 120}ms` }}
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 pb-4 md:pb-8">
          <div className="rounded-xl border p-6 md:p-8 bg-accent/10 overflow-hidden">
            <h2 className="text-2xl font-semibold mb-2">{t.ctaTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">{t.ctaText}</p>
            <div className="flex justify-center">
              <GeminiButtonEffect>
                <a href="tel:+40316320183" aria-label={t.ctaLawyerButton}>
                  <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                    <Phone /> {t.ctaLawyerButton}
                  </Button>
                </a>
              </GeminiButtonEffect>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="w-full bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
            <h2 className="text-3xl font-semibold mb-8">{t.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.services.slice(0, 4).map((s, i) => (
                <GlowCard key={i} customSize borderPx={1} blackBg borderRunner runnerSpeedFactor={2} noShadow className="relative w-full">
                  <article className="text-hero-foreground">
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-hero-foreground whitespace-pre-line">{s.body}</p>
                  </article>
                  {serviceRoutes[i] && (
                    <Link
                      to={serviceRoutes[i]!}
                      aria-label={`${lang === "ro" ? "Deschide pagina" : "Open page"}: ${s.title}`}
                      className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground shadow-md hover-scale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      <Play className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </GlowCard>
              ))}
              <div className="col-span-full flex justify-center">
                <a href="tel:+40316320183" aria-label={lang === "ro" ? "Apelează (31) 632 01 83" : "Call (31) 632 01 83"}>
                  <Button variant="premium" size="lg" className="border border-hero-foreground">
                    <Phone /> (31) 632 01 83
                  </Button>
                </a>
              </div>
              {t.services.slice(4).map((s, i) => (
                <GlowCard key={i + 4} customSize borderPx={1} blackBg borderRunner runnerSpeedFactor={2} noShadow className="relative w-full">
                  <article className="text-hero-foreground">
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-hero-foreground whitespace-pre-line">{s.body}</p>
                  </article>
                  {serviceRoutes[i + 4] && (
                    <Link
                      to={serviceRoutes[i + 4]!}
                      aria-label={`${lang === "ro" ? "Deschide pagina" : "Open page"}: ${s.title}`}
                      className="absolute bottom-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground shadow-md hover-scale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      <Play className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </GlowCard>
              ))}
            </div>
            <div className="mt-8">
              <PulseBeams
                beams={beams}
                gradientStops={gradientStops}
                width={858}
                height={434}
                className="relative w-full h-[180px] md:h-[220px]"
              >
                <div className="flex justify-center">
                  <a href="tel:+40316320183" aria-label={lang === "ro" ? "Apelează (31) 632 01 83" : "Call (31) 632 01 83"}>
                    <Button variant="premium" size="lg" className="border border-hero-foreground">
                      <Phone /> (31) 632 01 83
                    </Button>
                  </a>
                </div>
              </PulseBeams>
            </div>
            <div className="h-[30px]" aria-hidden="true"></div>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/e6b30f85-12f8-4f74-b39f-a1f4eda76d6a.png"
                alt={lang === "ro" ? "Portret avocat drept penal București, fundal alb" : "Criminal defense attorney portrait, white background"}
                title="Avocat drept penal Bucuresti Bogdan Lamatic"
                loading="lazy"
                className="w-full h-auto max-w-md md:max-w-sm rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
        {/* Reviews */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <h2 className="text-[22px] md:text-[24px] font-semibold mb-6 italic">
            {lang === "ro" ? (
              <>
                &bdquo;Cuvintele de mulțumire ale celor pe care i-am reprezentat<br />
                sunt cea mai mare satisfacție profesională pe care o pot primi!&rdquo;
              </>
            ) : (
              <>
                &ldquo;The words of gratitude from those I have represented<br />
                are the greatest professional satisfaction I can receive!&rdquo;
              </>
            )}
          </h2>
          <ReviewsCarousel3D reviews={reviewsEN} />
        </section>
      </main>
    </div>
};

export default HomepageEN;
