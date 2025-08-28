import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import { useSEO } from "@/hooks/useSEO";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { GlowCard } from "@/components/ui/spotlight-card";
import GeminiButtonEffect from "@/components/ui/gemini-button-effect";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { ReviewsCarousel3D, type Review as Reviews3DItem } from "@/components/ui/reviews-carousel-3d";

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

export default function EnIndex() {
  const { setLang } = useLanguage();
  const { lang } = useLanguage();
  const t = translations[lang];
  
  useEffect(() => { setLang("en"); }, [setLang]);

  useSEO({
    title: "Attorney Bogdan Lamatic - Criminal Defense | Bucharest",
    description: "Defense in white-collar crime, corruption, road traffic, crypto, malpractice.",
    alternates: { en: "/en", ro: "/" },
    locale: "en_US",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Attorney Bogdan Lamatic",
            url: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en",
            telephone: "+40 745 506 443",
            areaServed: ["RO", "EU"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Attorney Bogdan Lamatic",
            url: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en",
            inLanguage: "en-US",
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 pt-[30px] pb-16 md:pt-12 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1">
              <h1 className="text-[32px] md:text-5xl font-semibold leading-tight tracking-tight mb-6 py-0">
                Criminal Defense Attorney in Bucharest
              </h1>
              {/* Mobile-only responsive image */}
              <div className="mt-4 block md:hidden">
                <picture>
                  <source 
                    media="(max-width: 480px)" 
                    srcSet="/lovable-uploads/49019fba-compressed-320w.png 320w"
                    sizes="(max-width: 480px) 280px"
                  />
                  <source 
                    media="(max-width: 640px)" 
                    srcSet="/lovable-uploads/49019fba-compressed-400w.png 400w"
                    sizes="(max-width: 640px) 320px"
                  />
                  <img 
                    src="/lovable-uploads/49019fba-compressed-400w.png" 
                    alt="Portrait of criminal defense attorney in suit, studio" 
                    title="Criminal Defense Attorney Bucharest Bogdan Lamatic" 
                    loading="eager" 
                    fetchPriority="high"
                    width="400"
                    height="600"
                    style={{ aspectRatio: '2/3' }}
                    className="w-full h-auto rounded-lg shadow-md max-w-[80%] mx-auto"
                  />
                </picture>
              </div>
              <div className="h-[25px] md:hidden" aria-hidden="true"></div>
              <blockquote className="border-l-4 border-accent pl-4 md:pl-6 italic text-lg md:text-xl text-hero-foreground/90">
                <p className="mb-2">I defend your rights</p>
                <p className="mb-2">with professionalism and dedication</p>
                <p className="mb-0">in criminal law cases</p>
              </blockquote>
              <p className="mt-2 text-[22px] md:text-2xl italic font-light font-signature text-right py-[11px] px-[22px]">Bogdan Lamatic</p>
              <p className="text-lg md:text-xl italic font-light font-signature text-right py-[2px] px-[22px] text-hero-foreground/80 -mt-2">- 18 years by your side !</p>
              <div className="mt-6 flex md:justify-start justify-center mx-[24px] px-0 py-[11px]">
                <a href="tel:+40745506443" aria-label="Call now">
                  <Button variant="premium" size="lg" className="border border-hero-foreground">
                    <Phone /> Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden md:block relative md:max-w-[90%] md:ml-auto">
              <picture>
                <source 
                  media="(min-width: 1024px)" 
                  srcSet="/lovable-uploads/49019fba-desktop-800w.png 800w"
                  sizes="(min-width: 1024px) 400px"
                />
                <source 
                  media="(min-width: 768px)" 
                  srcSet="/lovable-uploads/49019fba-compressed-400w.png 400w"
                  sizes="(min-width: 768px) 350px"
                />
                <img 
                  src="/lovable-uploads/49019fba-compressed-400w.png" 
                  alt="Portrait of criminal defense attorney in suit, studio" 
                  title="Criminal Defense Attorney Bucharest Bogdan Lamatic" 
                  loading="eager" 
                  fetchPriority="high"
                  width="400"
                  height="600"
                  style={{ aspectRatio: '2/3' }}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </picture>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Client Reviews
          </h2>
          <ReviewsCarousel3D reviews={reviewsEN} />
        </section>
      </main>
    </div>
  );
}
