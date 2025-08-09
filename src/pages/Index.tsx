import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

type Lang = "ro" | "en";

const translations = {
  ro: {
    brand: "avocat Bogdan Lamatic",
    navLangRO: "RO",
    navLangEN: "EN",
    heroTitle: "Avocat Drept Penal Bucuresti",
    heroQuote:
      "„În dreptul penal, încrederea salvează!\nÎți ascult povestea. Îți înțeleg temerile. Îți apăr drepturile ca și cum ar fi ale mele.”",
    heroAuthor: "avocat Bogdan Lamatic",
    valuesTitle: "Valorile mele",
    values: ["implicare totală.", "respect.", "discreție."],
    reasonsTitle: "De ce sa lucrezi cu mine",
    reasons: [
      "experiență dovedită în achitări și reduceri de pedeapsă în dosare penale complexe.",
      "apărare rapidă și eficientă, de la audieri până la instanță.",
      "consiliere penală personalizată, bazată pe colaborare strânsă și transparență.",
    ],
    ctaTitle: "Situația ta nu poate aștepta",
    ctaText:
      "În drept penal, fiecare oră contează. Contactează-mă acum pentru o consultanță confidențială și află cum îți poți apăra libertatea și reputația.",
    callNow: "Sună acum",
    servicesTitle: "Servicii",
    services: [
      {
        title: "DREPT PENAL",
        body:
          "Am o vastă experiență în reprezentarea clienților în fața tuturor instanțelor de judecată, începând cu cele cu grad de jurisdicție inferior și până la Înalta Curte de Casație și Justiție, precum și la toate nivelurile unităților de parchet de pe lângă instanțele de judecată (de la instanțe ordinare până la Înalta Curte de Casație și Justiție, inclusiv structuri specializate – Direcția Națională Anticorupție, Direcția de Investigare a Infracțiunilor de Criminalitate Organizată și Terorism și Parchetul European). Cele mai multe dintre cazurile mele prezintă un grad ridicat de complexitate, incluzând documentație voluminoasă și activități de cercetare pluridisciplinară.",
      },
      {
        title: "Apărare în cauze de criminalitate economică",
        body:
          "Reprezint persoane fizice și juridice în dosare privind fraude, delapidare, fals și evaziune fiscală. Abordarea mea îmbină cunoștințe aprofundate despre mecanismele economice cu o solidă expertiză juridică.",
      },
      {
        title:
          "Reprezentare în infracțiuni de corupție și fapte legate de exercitarea funcției publice",
        body:
          "Acord consultanță și apăr clienți acuzați de dare sau luare de mită, abuz în serviciu, trafic de influență, obținere nelegală de foloase și conflict de interese, asigurând o abordare discretă și strategică pe tot parcursul procedurii.",
      },
      {
        title: "Asistență juridică în investigații privind activele cripto",
        body:
          "Gestionez cauze ce implică tranzacții ilicite cu criptomonede, dețineri nedeclarate de active digitale și fraude asociate tehnologiilor blockchain — un domeniu în continuă evoluție, ce necesită atât claritate juridică, cât și înțelegere tehnică.",
      },
      {
        title: "Reprezentare în cauze penale legate de droguri",
        body:
          "Apăr clienți acuzați de deținere, trafic de droguri sau conducere sub influența substanțelor psihoactive, asigurând respectarea deplină a garanțiilor procedurale și a standardelor probatorii.",
      },
      {
        title: "Apărare în dosare de spălare de bani și ascundere de bunuri",
        body:
          "Reprezint clienți în investigații și procese privind ascunderea sau spălarea produselor provenite din activități infracționale, oferind o apărare solidă în contexte financiare complexe.",
      },
      {
        title: "Gestionarea cazurilor de neglijență profesională și malpraxis",
        body:
          "Acord asistență profesioniștilor (din domeniul medical, juridic sau tehnic) acuzați de răspundere penală ca urmare a unor erori sau încălcări ale îndatoririlor de serviciu, construind apărări bine documentate și fundamentate tehnic.",
      },
      {
        title: "Reprezentare în infracțiuni rutiere cu victime",
        body:
          "Reprezint clienți în cazuri de accidente rutiere grave, inclusiv cele soldate cu vătămări corporale sau deces, tratând cauza cu rigoare juridică și înțelegere umană.",
      },
      {
        title: "Răspundere penală pentru incidente la locul de muncă",
        body:
          "Acord consultanță și apăr persoane fizice sau juridice acuzate în legătură cu accidente de muncă, încălcări ale normelor de securitate sau neglijență a angajatorului, mai ales în cazurile cu consecințe penale.",
      },
      {
        title: "Reprezentarea victimelor în procese penale",
        body:
          "Ofer asistență persoanelor vătămate în vederea obținerii despăgubirilor pentru prejudicii cauzate prin fapte penale, inclusiv accidente rutiere, malpraxis medical și alte daune personale sau materiale. Aceasta include reprezentare juridică în fața organelor de urmărire penală și a instanțelor, precum și asistență în negocieri pentru soluționări amiabile și despăgubiri echitabile.",
      },
    ],
  },
  en: {
    brand: "attorney Bogdan Lamatic",
    navLangRO: "RO",
    navLangEN: "EN",
    heroTitle: "Criminal Defense Lawyer in Bucharest",
    heroQuote:
      "“In criminal law, trust saves lives.\nI listen to your story. I understand your fears. I defend your rights as if they were my own.”",
    heroAuthor: "attorney Bogdan Lamatic",
    valuesTitle: "My values",
    values: ["total commitment.", "respect.", "discretion."],
    reasonsTitle: "Why work with me",
    reasons: [
      "proven track record of acquittals and sentence reductions in complex criminal cases.",
      "swift and effective defense, from hearings to trial.",
      "tailored criminal counsel, built on close collaboration and transparency.",
    ],
    ctaTitle: "Your situation can’t wait",
    ctaText:
      "In criminal law, every hour counts. Contact me now for a confidential consultation and learn how to protect your freedom and reputation.",
    callNow: "Call now",
    servicesTitle: "Services",
    services: [
      {
        title: "CRIMINAL LAW",
        body:
          "I have extensive experience representing clients before all courts of law, from lower jurisdiction courts to the High Court of Cassation and Justice, as well as before all levels of the prosecutor’s offices attached to the courts (including specialized structures – the National Anticorruption Directorate, the Directorate for Investigating Organized Crime and Terrorism, and the European Public Prosecutor’s Office). Most of my cases are highly complex, involving extensive documentation and multidisciplinary research.",
      },
      {
        title: "Defense in financial crime cases",
        body:
          "I represent individuals and companies in cases involving fraud, embezzlement, forgery, and tax evasion. My approach combines deep knowledge of economic mechanisms with strong legal insight.",
      },
      {
        title: "Representation in corruption and public office-related offenses",
        body:
          "I advise and defend clients facing allegations such as bribery, abuse of office, influence peddling, unlawful financial benefits, and conflict of interest, ensuring a discreet and strategic approach throughout.",
      },
      {
        title: "Legal support in crypto-asset–related investigations",
        body:
          "I handle cases involving illicit crypto transactions, undeclared digital asset holdings, and fraud involving blockchain technologies — a fast-evolving field that requires both legal clarity and technical understanding.",
      },
      {
        title: "Representation in drug-related criminal cases",
        body:
          "I defend clients accused of drug possession, trafficking, and driving under the influence of psychoactive substances, ensuring full respect of procedural safeguards and evidentiary standards.",
      },
      {
        title: "Defense in money laundering and asset concealment proceedings",
        body:
          "I represent clients in investigations and trials concerning the concealment or laundering of proceeds derived from criminal activity, offering a robust defense in complex financial contexts.",
      },
      {
        title: "Handling cases of professional negligence and malpractice",
        body:
          "I assist professionals (medical, legal, or technical) charged with criminal liability arising from errors or breaches of duty, building well-documented and technically grounded defenses.",
      },
      {
        title: "Representation in road traffic offenses resulting in injury or death",
        body:
          "I represent clients in cases involving serious traffic accidents, including those leading to bodily harm or fatality, ensuring that the case is addressed with both legal precision and human understanding.",
      },
      {
        title: "Criminal liability in workplace-related incidents",
        body:
          "I advise and defend individuals or legal entities charged in relation to work accidents, safety breaches, or employer negligence, particularly where criminal consequences are pursued.",
      },
      {
        title: "Representation of victims in criminal proceedings",
        body:
          "I also assist injured parties in seeking compensation for harm caused by criminal acts, including traffic accidents, medical malpractice, and other personal or material damage. This includes legal representation before investigative and judicial authorities, as well as assistance during negotiations aimed at amicable settlements and fair compensation.",
      },
    ],
  },
} as const;

const Index = () => {
  const [lang, setLang] = useState<Lang>("ro");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-signature italic text-lg md:text-xl">
            {t.brand}
          </a>
          <div className="flex items-center gap-2">
            <Button
              variant={lang === "ro" ? "premium" : "secondary"}
              size="sm"
              aria-label="Limba română"
              onClick={() => setLang("ro")}
            >
              🇷🇴 {t.navLangRO}
            </Button>
            <Button
              variant={lang === "en" ? "premium" : "secondary"}
              size="sm"
              aria-label="English language"
              onClick={() => setLang("en")}
            >
              🇬🇧 {t.navLangEN}
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:pt-12 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
                {t.heroTitle}
              </h1>
              {/* Mobile-only image right after H1 */}
              <div className="mt-4 block md:hidden">
                <img
                  src="/lovable-uploads/b1523668-aa61-486e-82ba-395734a9dc03.png"
                  alt="Portret avocat drept penal în costum, studio"
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-md max-w-[80%] mx-auto"
                />
              </div>
              <div className="h-[15px] md:hidden" aria-hidden="true"></div>
              <blockquote className="border-l-4 border-accent pl-4 md:pl-6 italic text-lg md:text-xl text-hero-foreground/90">
                {lang === "ro" ? (
                  <>
                    <div className="hidden md:block">
                      {(() => {
                        const parts = t.heroQuote.split("\n");
                        const l1 = parts[0] || "";
                        const l2 = parts[1] || "";
                        const splitIdx = l2.indexOf("Îți apăr drepturile");
                        const before = splitIdx >= 0 ? l2.slice(0, splitIdx).trim() : l2.trim();
                        const third = splitIdx >= 0 ? l2.slice(splitIdx).trim() : "";
                        return (
                          <div className="space-y-2">
                            <p className="mb-0">{l1}</p>
                            <p className="mb-0">{before}</p>
                            {third && <p className="mb-0">{third}</p>}
                          </div>
                        );
                      })()}
                    </div>
                    <div className="md:hidden">
                      {t.heroQuote.split("\n").map((line, i) => (
                        <p key={i} className="mb-2 last:mb-0">
                          {line}
                        </p>
                      ))}
                    </div>
                  </>
                ) : (
                  t.heroQuote.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {line}
                    </p>
                  ))
                )}
              </blockquote>
              <p className="mt-2 text-lg md:text-xl italic font-signature text-right">{t.heroAuthor}</p>
              <div className="mt-5 md:hidden text-center">
                <a href="tel:+40745506443" aria-label="Apelează 0745 506 443">
                  <Button variant="premium" size="lg" className="border border-hero-foreground"><Phone /> 0745 506 443</Button>
                </a>
              </div>
              <div className="hidden md:block h-[35px]" aria-hidden="true"></div>
              <div className="hidden md:flex justify-center">
                <a href="tel:+40745506443" aria-label="Apelează 0745 506 443">
                  <Button variant="premium" size="lg" className="border border-hero-foreground"><Phone /> 0745 506 443</Button>
                </a>
              </div>
            </div>

            <div className="hidden md:block relative md:max-w-[90%] md:ml-auto">
              <img
                src="/lovable-uploads/b1523668-aa61-486e-82ba-395734a9dc03.png"
                alt="Portret avocat drept penal în costum, studio"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Values and Reasons */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <div className="rounded-xl border border-accent bg-background p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-3">{t.valuesTitle}</h2>
                <ul className="space-y-2">
                  {t.values.map((v, i) => (
                    <li key={i} className="text-foreground">• {v}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">{t.reasonsTitle}</h2>
                <ul className="space-y-2">
                  {t.reasons.map((r, i) => (
                    <li key={i} className="text-foreground">• {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 pb-4 md:pb-8">
          <div className="rounded-xl border p-6 md:p-8 bg-accent/10">
            <h2 className="text-2xl font-semibold mb-2">{t.ctaTitle}</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">{t.ctaText}</p>
            <a href="tel:+40700000000" aria-label={t.callNow}>
              <Button variant="premium" size="lg">
                <Phone /> {t.callNow}
              </Button>
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="w-full bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
            <h2 className="text-3xl font-semibold mb-8">{t.servicesTitle}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.services.map((s, i) => (
                <GlowCard key={i} customSize borderPx={1} blackBg borderRunner noShadow className="w-full">
                  <article className="text-hero-foreground">
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-hero-foreground whitespace-pre-line">{s.body}</p>
                  </article>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {t.brand}. Toate drepturile rezervate.
      </footer>
    </div>
  );
};

export default Index;
