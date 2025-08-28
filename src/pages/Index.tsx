import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Play } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import GeminiButtonEffect from "@/components/ui/gemini-button-effect";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { ReviewsCarousel3D, type Review as Reviews3DItem } from "@/components/ui/reviews-carousel-3d";
import { Link } from "react-router-dom";

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

const reviewsRO: Reviews3DItem[] = [
  { name: "Stefan G.", text: "Am avut un accident rutier și nu știam cum să fac. Domnul Lamatic m-a ghidat pas cu pas, iar rezultatul a fost peste așteptări. Mulțumesc!", stars: 5 },
  { name: "Costică C.", text: "Domnul avocat Bogdan Lamatic nu doar că știe legea, dar o și explică pe înțelesul oricui. Și îți da siguranță pe tot timpul procesului. Recomand cu căldură!", stars: 5 },
  { name: "Mihai C.", text: "În calitate de coleg avocat, pot spune că Bogdan este cu adevărat generos cu timpul și cunoștințele sale, mereu dispus să ajute.", stars: 5 },
  { name: "Crina A.", text: "Am apelat la avocatul Lamatic pentru o situație de executare silită. Soluția propusă a funcționat perfect.", stars: 5 },
  { name: "Matei R.", text: "Într-un dosar penal foarte greu Bogdan a reușit să obțină un rezultat pe care îl credeam imposibil. Recomand 100%!", stars: 5 },
  { name: "Ștefan A.", text: "Sunt avocat în Cluj și am colaborat cu Bogdan pe un dosar de malpraxis medical. Pregătirea sa juridică este impecabilă.", stars: 5 },
  { name: "Nicoleta L.", text: "Căutam un avocat bun în București și l-am găsit pe domnul Bogdan Lamatic. Îl recomand tuturor celor care au nevoie de un avocat de încredere și in primul rând de un OM", stars: 5 },
  { name: "Gigi T.", text: "Bogdan este foarte bine pregătit în drept penal. M-a apărat într-un dosar cu acuzații urate și rezultatul a fost excepțional.", stars: 5 },
  { name: "Elena C.", text: "Cel mai bun avocat penalist din București!", stars: 5 },
  { name: "Ana-Maria A.", text: "L am avut ca avocat pe Bogdan Lamatic, m a aparat intr un dosar de drept penal in București și am fost achitata!", stars: 5 },
];

const reviewsEN: Reviews3DItem[] = [
  { name: "Stefan G.", text: "I had a car accident and didn’t know what to do. Mr. Lamatic guided me step by step, and the result was beyond expectations. Thank you!", stars: 5 },
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
  "/servicii/criminalitate-economica",
  "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
  "/servicii/investigatii-privind-activele-cripto",
  "/servicii/cauze-penale-privind-droguri",
  "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
  "/servicii/neglijenta-profesionala-si-malpraxis",
  "/servicii/infractiuni-rutiere-cu-victime",
  "/servicii/raspundere-penala-incidente-locul-de-munca",
  "/servicii/reprezentarea-victimelor-in-procese-penale",
] as const;

const Index = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  return <div className="min-h-screen bg-background text-foreground">

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
                <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Portret avocat drept penal în costum, studio" title="Avocat drept penal Bucuresti Bogdan Lamatic" loading="lazy" className="w-full h-auto rounded-lg shadow-md max-w-[80%] mx-auto" />
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
                      {t.heroQuote.split("\n").map((line, i) => <p key={i} className="mb-2 last:mb-0">
                          {line}
                        </p>)}
                    </div>
                  </> : t.heroQuote.split("\n").map((line, i) => <p key={i} className="mb-2 last:mb-0">
                      {line}
                    </p>)}
              </blockquote>
              <p className="mt-2 text-[22px] md:text-2xl italic font-light font-signature text-right py-[11px] px-[22px]">{t.heroAuthor}</p>
              {lang === "ro" && (
                <p className="text-lg md:text-xl italic font-light font-signature text-right py-[2px] px-[22px] text-hero-foreground/80 -mt-2">- de 18 ani lângă tine !</p>
              )}
              {lang === "en" && (
                <p className="text-lg md:text-xl italic font-light font-signature text-right py-[2px] px-[22px] text-hero-foreground/80 -mt-2">- 18 years by your side !</p>
              )}
              <div className="mt-6 flex md:justify-start justify-center mx-[24px] px-0 py-[11px]">
                <a href="tel:+40745506443" aria-label={lang === "ro" ? "Sună acum" : "Call now"}>
                  <Button variant="premium" size="lg" className="border border-hero-foreground">
                    <Phone /> {t.callNow}
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden md:block relative md:max-w-[90%] md:ml-auto">
              <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Portret avocat drept penal în costum, studio" title="Avocat drept penal Bucuresti Bogdan Lamatic" loading="lazy" className="w-full h-auto rounded-lg shadow-md" />
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
              <div>
                <a href="tel:+40745506443" aria-label={t.ctaLawyerButton}>
                  <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                    <Phone /> {t.ctaLawyerButton}
                  </Button>
                </a>
              </div>
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
                <a href="tel:+40745506443" aria-label={lang === "ro" ? "Apelează 0745 506 443" : "Call 0745 506 443"}>
                  <Button variant="premium" size="lg" className="border border-hero-foreground">
                    <Phone /> 0745 506 443
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
                  <a href="tel:+40745506443" aria-label={lang === "ro" ? "Apelează 0745 506 443" : "Call 0745 506 443"}>
                    <Button variant="premium" size="lg" className="border border-hero-foreground">
                      <Phone /> 0745 506 443
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
                className="w-full h-auto max-w-md md:max-w-lg rounded-lg shadow-md"
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
          <ReviewsCarousel3D reviews={lang === "ro" ? reviewsRO : reviewsEN} />
        </section>
      </main>

    </div>;
};
export default Index;