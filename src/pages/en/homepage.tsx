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

const serviceRoutesEN: (string | null)[] = [
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

const EnHomepage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  useSEO({
    title: "Attorney Bogdan Lamatic - Criminal Defense Lawyer | Bucharest",
    description: "Defense in white-collar crime, corruption, road traffic, crypto, malpractice.",
    canonical: "https://avocatpenalbucuresti.ro/en",
    alternates: { 
      xDefault: "https://avocatpenalbucuresti.ro",
      en: "https://avocatpenalbucuresti.ro/en", 
      ro: "https://avocatpenalbucuresti.ro" 
    },
    locale: "en_US",
  });
  
  return <div className="min-h-screen bg-background text-foreground">
    {/* Simplified Schema Markup for EN version */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Attorney Bogdan Lamatic",
          "description": "Criminal defense lawyer in Bucharest - Defense in white-collar crime, corruption, road traffic cases, crypto investigations and malpractice",
          "url": "https://avocatpenalbucuresti.ro/en",
          "telephone": "+40745506443",
          "email": "contact@avocatpenalbucuresti.ro",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Constantin Prezan nr. 11, et. 1",
            "addressLocality": "Bucharest",
            "addressRegion": "Bucharest",
            "postalCode": "020088",
            "addressCountry": "RO"
          },
          "areaServed": ["RO", "EU"],
          "serviceType": [
            "Criminal defense",
            "White-collar crime",
            "Corruption offenses",
            "Crypto investigations",
            "Medical malpractice",
            "Road traffic accidents"
          ],
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://avocatpenalbucuresti.ro#website",
            "url": "https://avocatpenalbucuresti.ro"
          },
          "relatedLink": {
            "@type": "WebPage",
            "@id": "https://avocatpenalbucuresti.ro",
            "name": "Avocat Drept Penal București - Pagina Principală Română"
          }
        })
      }}
    />

      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 pt-[30px] pb-16 md:pt-12 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1">
              <h1 className="text-[32px] md:text-5xl font-semibold leading-tight tracking-tight mb-6 py-0">
                {t.heroTitle}
              </h1>
              {/* Mobile-only image right after H1 */}
              <div className="mt-4 block md:hidden">
                <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Criminal defense attorney in suit, studio portrait" title="Criminal Defense Attorney Bucharest Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-md max-w-[80%] mx-auto" />
              </div>
              <div className="h-[25px] md:hidden" aria-hidden="true"></div>
              <blockquote className="border-l-4 border-accent pl-4 md:pl-6 italic text-lg md:text-xl text-hero-foreground/90">
                {lang === "ro" ? <>
                    <div className="hidden md:block">
                      {(() => {
                    const parts = t.heroQuote.split("\n");
                    const l1 = parts[0] || "";
                    const l2 = parts[1] || "";
                    const splitIdx = l2.indexOf("Îți apăr drepturile");
                    const before = splitIdx >= 0 ? l2.slice(0, splitIdx).trim() : l2.trim();
                    const third = splitIdx >= 0 ? l2.slice(splitIdx).trim() : "";
                    return <div className="space-y-2">
                            <p className="mb-0">{l1}</p>
                            <p className="mb-0">{before}</p>
                            {third && <p className="mb-0">{third}</p>}
                          </div>;
                  })()}
                    </div>
                    <div className="md:hidden">
                      {t.heroQuote}
                    </div>
                  </> : t.heroQuote}
              </blockquote>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/en/contact">
                  <GeminiButtonEffect>
                    <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Phone className="mr-2 h-4 w-4" />
                      {t.callNow}
                    </Button>
                  </GeminiButtonEffect>
                </Link>
              </div>
            </div>
            <div className="md:order-2 hidden md:block relative">
              <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Criminal defense attorney in suit, studio portrait" title="Criminal Defense Attorney Bucharest Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-md max-w-[80%] mx-auto lg:max-w-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Client Values Section */}
        <section className="py-16 md:py-24 bg-section">
          <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-section-foreground">
              {t.valuesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.values.map((value, index) => (
                <GlowCard key={index} className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-lg font-semibold text-muted-foreground">{value}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  {t.reasonsTitle}
                </h2>
                <div className="space-y-4">
                  {t.reasons.map((reason, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src="/lovable-uploads/c40b182c-b51b-42af-b1d1-50bf623b2110.png" alt="Professional lawyer consulting with client in modern office" title="Criminal defense lawyer consultation" className="w-full h-auto rounded-lg shadow-md" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-accent text-accent-foreground">
          <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {t.ctaText}
            </p>
            <Link to="/en/contact">
              <GeminiButtonEffect>
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  <Phone className="mr-2 h-4 w-4" />
                  {t.callNow}
                </Button>
              </GeminiButtonEffect>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-section">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-section-foreground">
                {t.servicesTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.map((service, index) => (
                <GlowCard key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.body}</p>
                  {serviceRoutesEN[index] && (
                    <Link 
                      to={serviceRoutesEN[index]!} 
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
                    >
                      Learn more
                      <Play className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <PulseBeams
            beams={beams}
            className="absolute inset-0 pointer-events-none"
            gradientStops={gradientStops}
          />
          <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Client Reviews
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                What our clients say about our services
              </p>
            </div>
            <ReviewsCarousel3D reviews={reviewsEN} />
          </div>
        </section>
      </main>
    </div>;
};

export default EnHomepage;