import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import GeminiButtonEffect from "@/components/ui/gemini-button-effect";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { ReviewsCarousel3D, type Review as Reviews3DItem } from "@/components/ui/reviews-carousel-3d";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { servedAreasSchema } from "@/lib/areaServed";
import { googleReviews } from "@/lib/reviews";
const legal500Badges = [
  { src: "/lovable-uploads/EMEA_LEGAL_500_rising_star_2020_avocat_bogdan_lamatic.png", webp: "/lovable-uploads/EMEA_LEGAL_500_rising_star_2020_avocat_bogdan_lamatic.webp", alt: "Legal 500 EMEA Rising Star 2020 - avocat Bogdan Lamatic" },
  { src: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2021_avocat_bogdan_lamatic.png", webp: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2021_avocat_bogdan_lamatic.webp", alt: "Legal 500 EMEA Next Generation Partner 2021 - avocat Bogdan Lamatic" },
  { src: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2022_avocat_bogdan_lamatic.png", webp: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2022_avocat_bogdan_lamatic.webp", alt: "Legal 500 EMEA Next Generation Partner 2022 - avocat Bogdan Lamatic" },
  { src: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2023_avocat_bogdan_lamatic.png", webp: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2023_avocat_bogdan_lamatic.webp", alt: "Legal 500 EMEA Next Generation Partner 2023 - avocat Bogdan Lamatic" },
  { src: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2024_avocat_bogdan_lamatic.png", webp: "/lovable-uploads/EMEA_LEGAL_500_Next_Generation_Partner_2024_avocat_bogdan_lamatic.webp", alt: "Legal 500 EMEA Next Generation Partner 2024 - avocat Bogdan Lamatic" },
];

const Legal500BadgeStrip = () => (
  <div className="absolute -left-11 md:-left-[68px] top-1/2 -translate-y-1/2 flex flex-col gap-1.5 md:gap-2 z-10">
    {legal500Badges.map((b, i) => (
      <picture key={i}>
        <source srcSet={b.webp} type="image/webp" />
        <img src={b.src} alt={b.alt} width="56" height="56" decoding="async" className="w-10 h-10 md:w-14 md:h-14 rounded-md shadow-md ring-1 ring-hero-foreground/80 object-contain" />
      </picture>
    ))}
  </div>
);

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

const faqData = [
  {
    question: "1. Cât costă reprezentarea într-un dosar penal?",
    answer: "Onorariul depinde de complexitatea dosarului și de stadiul procesului. La prima consultanță (gratuită) stabilesc un tarif estimativ și toate costurile sunt prevăzute transparent în contract. Sunați-mă la +40 (31) 632 01 83"
  },
  {
    question: "2. Oferiți consultanță inițială gratuită?",
    answer: "Da, ofer o primă discuție gratuită pentru evaluarea situației juridice și a posibilelor strategii de apărare. Telefon +40 (31) 632 01 83"
  },
  {
    question: "3. Aveți experiență în dosare penale legate de droguri?",
    answer: "Da, am reprezentat clienți în cauze variate - de la infracțiuni economice, la infracțiuni contra persoanei sau trafic de droguri - cu rezultate favorabile."
  },
  {
    question: "4. Cât durează un proces penal?",
    answer: "Poate varia de la câteva luni la câțiva ani, în funcție de complexitatea cazului și etapele procesuale. Voi face tot posibilul să accelerez procedura în limitele legii. Sunați-mă la +40 (31) 632 01 83 pentru o consultație gratuită."
  },
  {
    question: "5. Care sunt drepturile mele ca suspect sau inculpat?",
    answer: "Aveți dreptul la avocat, la informarea corectă asupra acuzațiilor, la consultarea dosarului și la un proces echitabil. Le voi explica detaliat în raport cu cazul dvs. Telefon +40 (31) 632 01 83"
  },
  {
    question: "6. Mă reprezentați dvs. personal în instanță sau trimiteți pe altcineva din echipă?",
    answer: "Da, mă ocup personal de dosar și de reprezentarea în fața instanței. Dacă este nevoie, colaborez și cu parteneri de încredere, dar eu rămân avocatul de contact."
  },
  {
    question: "7. Ce opțiuni am dacă hotărârea instanței nu îmi este favorabilă?",
    answer: "Putem folosi căi de atac - apel, căi de atac extraordinare - în funcție de situația juridică și termenele legale."
  },
  {
    question: "8. Pot beneficia de asistență juridică gratuită?",
    answer: "Da, în anumite condiții puteți obține avocat din oficiu sau sprijin prin sistemul de asistență juridică. Vă pot ajuta să verificați eligibilitatea."
  },
  {
    question: "9. Cum pot găsi un avocat bun în România sau in București?",
    answer: "Experiența si expertiza mea sunt detaliate aici: https://avocatpenalbucuresti.ro/despre-mine\nSunați-mă pentru o consultație gratuită la 0316320183"
  },
  {
    question: "10. Pot evita cazierul judiciar dacă îmi recunosc vina?",
    answer: "În anumite situații, legea permite aplicarea unor pedepse fără înscriere în cazier (ex. renunțarea la urmărirea penală, amenda administrativă, renunțarea la aplicarea pedepsei). Fiecare caz se analizează individual. Sunați-ma la +40 (31) 632 01 83"
  },
  {
    question: "11. Ce drepturi am în cazul reținerii de către poliție?",
    answer: "Aveți dreptul să fiți informat asupra motivelor, să beneficiați de avocat ales sau din oficiu, să cereți un interpret dacă nu vorbiți româna și să primiți asistență medicală dacă este nevoie. Mă puteți suna începând cu ora 6 dimineața. Telefon +40 (31) 632 01 83"
  },
  {
    question: "12. Ce este eliberarea condiționată și pot beneficia de ea?",
    answer: "Eliberarea condiționată este posibilitatea de a fi pus în libertate înainte de termen, dacă ați executat o parte din pedeapsă, ați avut bună purtare și ați îndeplinit condițiile legale."
  },
  {
    question: "13. Cât timp poate dura o anchetă penală?",
    answer: "Durata depinde de complexitatea cazului și de numărul probelor, însă legea nu prevede termene maxime pentru fiecare etapă. Sunați-mă la +40 (31) 632 01 83"
  },
  {
    question: "14. Pot refuza să dau declarații împotriva mea?",
    answer: "Da, aveți dreptul să nu vă autoincriminați, conform Codului de Procedură Penală, Constituției României și Convenției Europene a Drepturilor Omului."
  },
  {
    question: "15. Ce trebuie să fac dacă nu sunt de acord cu acuzațiile care mi se aduc?",
    answer: "Contactați-mă imediat la +40 (31) 632 01 83. Voi analiza acuzațiile, voi pregăti apărarea și voi contesta probele sau procedurile ilegale pentru a vă proteja drepturile."
  },
  {
    question: "16. Am fost prins conducând sub influența alcoolului. Ce risc?",
    answer: "În funcție de alcoolemie, fapta poate fi contravenție sau infracțiune. Se poate ajunge la dosar penal, suspendarea permisului și chiar pedeapsă cu închisoarea. Apărarea corectă poate reduce sancțiunea. Sunați-mă la +40 (31) 632 01 83"
  },
  {
    question: "17. Poliția a găsit droguri asupra mea, dar erau pentru consum propriu. Ce urmează?",
    answer: "Deținerea de droguri pentru consum este infracțiune. În anumite condiții, se poate obține renunțarea la urmărirea penală sau suspendarea pedepsei. Este important să aveți avocat încă din prima fază. Sunați-mă la +40 (31) 632 01 83"
  },
  {
    question: "18. Am fost acuzat de furt, dar nu există probe clare. Cum mă pot apăra?",
    answer: "Lipsa probelor suficiente sau probe obținute ilegal pot duce la clasarea dosarului sau la achitare. Vom analiza actele dosarului și vom formula apărările necesare. Telefon +40 (31) 632 01 83"
  },
  {
    question: "19. Ce se întâmplă dacă refuz testul de alcoolemie sau de droguri?",
    answer: "Refuzul testării este infracțiune distinctă și atrage dosar penal. Este mai grav decât un rezultat pozitiv, de aceea e important să cereți imediat asistență juridică. Sunați-mă la +40 (31) 632 01 83"
  },
  {
    question: "20. Sunt suspect de violență domestică. Care sunt consecințele?",
    answer: "Violența domestică este infracțiune, iar pe lângă pedeapsă se pot dispune ordine de protecție. Voi construi apărarea luând în calcul declarațiile martorilor, probele și circumstanțele. Telefon +40 (31) 632 01 83"
  },
  {
    question: "21. Am primit citație ca martor într-un dosar penal. Pot să nu merg?",
    answer: "Nu. Prezența este obligatorie. Refuzul poate atrage amendă sau chiar aducerea cu mandat. Totuși, aveți dreptul la a fi asistat de un avocat ales și aveți dreptul să refuzați să vă autoincriminați."
  },
  {
    question: "22. Ce fac dacă sunt acuzat pe nedrept?",
    answer: "Contactați imediat un avocat. Sunați-mă la +40 (31) 632 01 83 Vom contesta probele, vom aduce martori și expertize independente, iar în unele cazuri putem formula plângere pentru denunț calomnios."
  },
  {
    question: "23. Pot fi reținut mai mult de 24 de ore de poliție?",
    answer: "Reținerea nu poate depăși 24 de ore. Prelungirea se face prin arestare preventivă dispusă de judecător, pentru care se impune apărare în fața instanței."
  },
  {
    question: "24. Ce înseamnă acord de recunoaștere a vinovăției?",
    answer: "Este o procedură prin care recunoașteți fapta în schimbul unei pedepse reduse. Se aplică doar în anumite situații și trebuie analizat cu atenție, pentru a nu accepta o soluție dezavantajoasă."
  }
];

// Utility function to render text with clickable phone numbers and URLs
const renderTextWithLinks = (text: string) => {
  // First handle URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let processedText = text.replace(urlRegex, (url) => `||URL||${url}||URL||`);
  
  // Then handle phone numbers
  const phoneRegex = /\+40 \(31\) 632 01 83/g;
  processedText = processedText.replace(phoneRegex, '||PHONE||+40 (31) 632 01 83||PHONE||');
  
  // Also handle the phone number without parentheses format
  const phoneRegex2 = /0316320183/g;
  processedText = processedText.replace(phoneRegex2, '||PHONE2||0316320183||PHONE2||');
  
  // Handle line breaks
  processedText = processedText.replace(/\n/g, '||BR||');
  
  // Split by all markers and process
  const parts = processedText.split(/(\|\|(?:URL|PHONE|PHONE2)\|\|[^|]+\|\|(?:URL|PHONE|PHONE2)\|\||\|\|BR\|\|)/);
  
  return parts.map((part, index) => {
    if (part.startsWith('||URL||') && part.endsWith('||URL||')) {
      const url = part.slice(7, -7);
      return (
        <a 
          key={index} 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:no-underline text-primary"
        >
          {url}
        </a>
      );
    } else if (part.startsWith('||PHONE||') && part.endsWith('||PHONE||')) {
      const phone = part.slice(9, -9);
      return (
        <a 
          key={index} 
          href="tel:+40316320183" 
          className="underline hover:no-underline text-primary"
        >
          {phone}
        </a>
      );
    } else if (part.startsWith('||PHONE2||') && part.endsWith('||PHONE2||')) {
      const phone = part.slice(10, -10);
      return (
        <a 
          key={index} 
          href="tel:+40316320183" 
          className="underline hover:no-underline text-primary"
        >
          {phone}
        </a>
      );
    } else if (part === '||BR||') {
      return <br key={index} />;
    }
    return part;
  });
};

const Index = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  
  const currentReviews = lang === "ro" ? reviewsRO : reviewsEN;
  const origin = "https://avocatpenalbucuresti.ro";
  
  useSEO({
    keywords: "avocat drept penal, avocat penalist, avocat penal bucuresti",
    title: "Avocat Penal București - Bogdan Lamatic | 18+ Ani Experiență în Drept Penal",
    description: "Avocat drept penal Bucuresti > Bogdan Lamatic > Apărare în criminalitate economică, corupție, accidente rutiere, crypto, malpraxis., droguri ",
    alternates: { ro: "/", en: "/en", xDefault: "/" },
    locale: "ro_RO",
    robotsDirectives: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    schemas: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LegalService",
            "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html",
            "founder": { "@id": "https://avocatpenalbucuresti.ro/despre-mine#person" },
            "employee": { "@id": "https://avocatpenalbucuresti.ro/despre-mine#person" },
            "name": "Avocat Drept Penal București Bogdan Lamatic",
            "description": "Cabinet avocat penal București - Apărare în criminalitate economică, corupție, cauze rutiere, investigații crypto și malpraxis",
            "url": "https://avocatpenalbucuresti.ro/",
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
            "areaServed": servedAreasSchema,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicii juridice penale",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Criminalitate economică",
                    "description": "Apărare în dosare de evaziune fiscală, fraudă, abuz în serviciu"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infracțiuni de corupție și fapte legate de exercitarea funcției publice",
                    "description": "Apărare în dosare de luare de mită, dare de mită, trafic de influență"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Investigații privind activele cripto",
                    "description": "Servicii specializate pentru investigații blockchain și active digitale"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cauze penale privind droguri",
                    "description": "Apărare în dosare de trafic și consum de substanțe interzise"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spălare de bani și ascundere de bunuri",
                    "description": "Apărare în dosare de spălare de bani și disimulare a provenienței bunurilor"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Neglijență profesională și malpraxis",
                    "description": "Apărare și reprezentare în cazuri de malpraxis medical și profesional"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infracțiuni rutiere cu victime",
                    "description": "Apărare în dosare de accidente rutiere cu victime"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Răspundere penală pentru incidente la locul de muncă",
                    "description": "Apărare în dosare privind accidente de muncă și răspundere penală"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reprezentarea victimelor în procese penale",
                    "description": "Reprezentare juridică pentru victime în proceduri penale"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "reviewCount": "28"
            },
            "review": googleReviews.map((review) => ({
              "@type": "Review",
              "inLanguage": "ro-RO",
              "author": { "@type": "Person", "name": review.author },
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "reviewBody": review.reviewBody,
              "itemReviewed": { "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html" },
              "publisher": { "@type": "Organization", "name": "Google" },
              ...(review.ownerReply
                ? {
                    "comment": {
                      "@type": "Answer",
                      "author": { "@type": "Person", "name": "Avocat Bogdan Lamatic" },
                      "text": review.ownerReply,
                    },
                  }
                : {}),
            }))
          },
          {
            "@type": "Person",
            "@id": "https://avocatpenalbucuresti.ro/despre-mine#person",
            "url": "https://avocatpenalbucuresti.ro/despre-mine",
            "name": "Bogdan-Constantin Lamatic",
            "jobTitle": "Avocat specializat în drept penal",
            "image": "https://avocatpenalbucuresti.ro/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png",
            "telephone": "+40316320183",
            "email": "contact@avocatpenalbucuresti.ro",
            "worksFor": { "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html" },
            "affiliation": [
              { "@type": "Organization", "name": "Wolf Theiss" },
              { "@type": "Organization", "name": "Enache Pirtea & Asociații S.p.a.r.l." },
              { "@type": "Organization", "name": "Mușat & Asociații S.p.a.r.l." },
              { "@type": "Organization", "name": "Șerban & Asociații - Societate de Avocați" }
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
              "Legal 500 - Rising Star (White-Collar Crime) 2020",
              "Legal 500 - Next Generation Partner (White-Collar Crime) 2021",
              "Legal 500 - Next Generation Partner (White-Collar Crime) 2022",
              "Legal 500 - Next Generation Partner (White-Collar Crime) 2023",
              "Legal 500 - Next Generation Partner (White-Collar Crime) 2024"
            ],
            "knowsAbout": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "Thing", "name": "criminalitate economică (white-collar)" },
                { "@type": "Thing", "name": "investigații corporative" },
                { "@type": "Thing", "name": "conformitate (compliance)" },
                { "@type": "Thing", "name": "recuperarea activelor și executare internațională" },
                { "@type": "Thing", "name": "litigii" },
                { "@type": "Thing", "name": "drept penal" },
                { "@type": "Thing", "name": "apărare în cauze de criminalitate financiară" },
                { "@type": "Thing", "name": "reprezentare în infracțiuni de corupție și fapte legate de funcția publică" },
                { "@type": "Thing", "name": "asistență juridică în investigații privind activele cripto" },
                { "@type": "Thing", "name": "reprezentare în cauze penale privind drogurile" },
                { "@type": "Thing", "name": "apărare în dosare de spălare de bani și disimularea provenienței bunurilor" },
                { "@type": "Thing", "name": "gestionarea cazurilor de neglijență profesională și malpraxis" },
                { "@type": "Thing", "name": "reprezentare în infracțiuni rutiere cu vătămări corporale sau deces" },
                { "@type": "Thing", "name": "răspundere penală pentru incidente la locul de muncă" },
                { "@type": "Thing", "name": "reprezentarea victimelor în proceduri penale" }
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
              "name": "Avocat Drept Penal București Bogdan Lamatic",
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
                "latitude": 44.4572663,
                "longitude": 26.0635712
              },
              "hasMap": "https://www.google.com/maps?cid=17818591254142574295"
            }
          },
          {
            "@type": "WebSite",
            "name": "Avocat Drept Penal Bucuresti Bogdan Lamatic",
            "url": "https://avocatpenalbucuresti.ro/",
            "description": "Site oficial avocat Bogdan Lamatic - specializat în apărare penală, criminalitate economică și investigații crypto în București",
            "inLanguage": "ro-RO",
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
                "name": "Cât costă reprezentarea într-un dosar penal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Onorariul depinde de complexitatea dosarului și de stadiul procesului. La prima consultanță (gratuită) stabilesc un tarif estimativ și toate costurile sunt prevăzute transparent în contract. Sunați-mă la +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Oferiți consultanță inițială gratuită?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Da, ofer o primă discuție gratuită pentru evaluarea situației juridice și a posibilelor strategii de apărare. Telefon +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Aveți experiență în dosare penale legate de droguri?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Da, am reprezentat clienți în cauze variate - de la infracțiuni economice, la infracțiuni contra persoanei sau trafic de droguri - cu rezultate favorabile."
                }
              },
              {
                "@type": "Question",
                "name": "Cât durează un proces penal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Poate varia de la câteva luni la câțiva ani, în funcție de complexitatea cazului și etapele procesuale. Voi face tot posibilul să accelerez procedura în limitele legii. Sunați-mă la +40 (31) 632 01 83 pentru o consultație gratuită."
                }
              },
              {
                "@type": "Question",
                "name": "Care sunt drepturile mele ca suspect sau inculpat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aveți dreptul la avocat, la informarea corectă asupra acuzațiilor, la consultarea dosarului și la un proces echitabil. Le voi explica detaliat în raport cu cazul dvs. Telefon +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Mă reprezentați dvs. personal în instanță sau trimiteți pe altcineva din echipă?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Da, mă ocup personal de dosar și de reprezentarea în fața instanței. Dacă este nevoie, colaborez și cu parteneri de încredere, dar eu rămân avocatul de contact."
                }
              },
              {
                "@type": "Question",
                "name": "Ce opțiuni am dacă hotărârea instanței nu îmi este favorabilă?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Putem folosi căi de atac - apel, căi de atac extraordinare - în funcție de situația juridică și termenele legale."
                }
              },
              {
                "@type": "Question",
                "name": "Pot beneficia de asistență juridică gratuită?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Da, în anumite condiții puteți obține avocat din oficiu sau sprijin prin sistemul de asistență juridică. Vă pot ajuta să verificați eligibilitatea."
                }
              },
              {
                "@type": "Question",
                "name": "Cum pot găsi un avocat bun în România sau în București?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Experiența și expertiza mea sunt detaliate aici: https://avocatpenalbucuresti.ro/despre-mine Sunați-mă pentru o consultație gratuită la 0316320183"
                }
              },
              {
                "@type": "Question",
                "name": "Pot evita cazierul judiciar dacă îmi recunosc vina?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "În anumite situații, legea permite aplicarea unor pedepse fără înscriere în cazier (ex. renunțarea la urmărirea penală, amenda administrativă, renunțarea la aplicarea pedepsei). Fiecare caz se analizează individual. Sunați-ma la +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Ce drepturi am în cazul reținerii de către poliție?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aveți dreptul să fiți informat asupra motivelor, să beneficiați de avocat ales sau din oficiu, să cereți un interpret dacă nu vorbiți româna și să primiți asistență medicală dacă este nevoie. Mă puteți suna începând cu ora 6 dimineața. Telefon +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Ce este eliberarea condiționată și pot beneficia de ea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Eliberarea condiționată este posibilitatea de a fi pus în libertate înainte de termen, dacă ați executat o parte din pedeapsă, ați avut bună purtare și ați îndeplinit condițiile legale."
                }
              },
              {
                "@type": "Question",
                "name": "Cât timp poate dura o anchetă penală?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Durata depinde de complexitatea cazului și de numărul probelor, însă legea nu prevede termene maxime pentru fiecare etapă. Sunați-mă la +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Pot refuza să dau declarații împotriva mea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Da, aveți dreptul să nu vă autoincriminați, conform Codului de Procedură Penală, Constituției României și Convenției Europene a Drepturilor Omului."
                }
              },
              {
                "@type": "Question",
                "name": "Ce trebuie să fac dacă nu sunt de acord cu acuzațiile care mi se aduc?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contactați-mă imediat la +40 (31) 632 01 83. Voi analiza acuzațiile, voi pregăti apărarea și voi contesta probele sau procedurile ilegale pentru a vă proteja drepturile."
                }
              },
              {
                "@type": "Question",
                "name": "Am fost prins conducând sub influența alcoolului. Ce risc?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "În funcție de alcoolemie, fapta poate fi contravenție sau infracțiune. Se poate ajunge la dosar penal, suspendarea permisului și chiar pedeapsă cu închisoarea. Apărarea corectă poate reduce sancțiunea. Sunați-mă la +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Poliția a găsit droguri asupra mea, dar erau pentru consum propriu. Ce urmează?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Deținerea de droguri pentru consum este infracțiune. În anumite condiții, se poate obține renunțarea la urmărirea penală sau suspendarea pedepsei. Este important să aveți avocat încă din prima fază. Sunați-mă la +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Am fost acuzat de furt, dar nu există probe clare. Cum mă pot apăra?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lipsa probelor suficiente sau probe obținute ilegal pot duce la clasarea dosarului sau la achitare. Vom analiza actele dosarului și vom formula apărările necesare. Telefon +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Ce se întâmplă dacă refuz testul de alcoolemie sau de droguri?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Refuzul testării este infracțiune distinctă și atrage dosar penal. Este mai grav decât un rezultat pozitiv, de aceea e important să cereți imediat asistență juridică. Sunați-mă la +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Sunt suspect de violență domestică. Care sunt consecințele?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Violența domestică este infracțiune, iar pe lângă pedeapsă se pot dispune ordine de protecție. Voi construi apărarea luând în calcul declarațiile martorilor, probele și circumstanțele. Telefon +40 (31) 632 01 83"
                }
              },
              {
                "@type": "Question",
                "name": "Am primit citație ca martor într-un dosar penal. Pot să nu merg?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nu. Prezența este obligatorie. Refuzul poate atrage amendă sau chiar aducerea cu mandat. Totuși, aveți dreptul la a fi asistat de un avocat ales și aveți dreptul să refuzați să vă autoincriminați."
                }
              },
              {
                "@type": "Question",
                "name": "Ce fac dacă sunt acuzat pe nedrept?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contactați imediat un avocat. Sunați-mă la +40 (31) 632 01 83. Vom contesta probele, vom aduce martori și expertize independente, iar în unele cazuri putem formula plângere pentru denunț calomnios."
                }
              },
              {
                "@type": "Question",
                "name": "Pot fi reținut mai mult de 24 de ore de poliție?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Reținerea nu poate depăși 24 de ore. Prelungirea se face prin arestare preventivă dispusă de judecător, pentru care se impune apărare în fața instanței."
                }
              },
              {
                "@type": "Question",
                "name": "Ce înseamnă acord de recunoaștere a vinovăției?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Este o procedură prin care recunoașteți fapta în schimbul unei pedepse reduse. Se aplică doar în anumite situații și trebuie analizat cu atenție."
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
          <div className="mx-auto max-w-6xl px-4 md:px-6 pt-[30px] pb-16 md:pt-12 md:pb-[66px] grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1">
              <h1 className="text-[26px] md:text-4xl font-semibold leading-tight tracking-tight mb-6 py-0 whitespace-pre-line">
                {t.heroTitle}
              </h1>
              {/* Mobile-only image right after H1 */}
              <div className="mt-4 block md:hidden relative max-w-[68%] mx-auto">
                <Legal500BadgeStrip />
                <img src="/lovable-uploads/avocat_drept_penal_Bucuresti_Bogdan_Lamatic.webp" alt="Portret avocat drept penal în costum, studio" title="Avocat drept penal Bucuresti Bogdan Lamatic" fetchPriority="high" className="w-[90%] h-auto rounded-lg shadow-md mx-auto" />
              </div>
              <div className="h-[25px] md:hidden" aria-hidden="true"></div>
              <blockquote className="border-l-4 border-accent pl-4 md:pl-6 italic text-[17px] md:text-xl text-hero-foreground/90">
                <div className="hidden md:block">
                  {t.heroQuote.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0">{line}</p>
                  ))}
                </div>
                <div className="md:hidden">
                  {(() => {
                    const parts = t.heroQuote.split("\n");
                    return (
                      <>
                        <p className="mb-2">{parts[0]}</p>
                        <p className="mb-2">{[parts[1], parts[2]].filter(Boolean).join(" ")}</p>
                        <p className="mb-0">{parts[3]}</p>
                      </>
                    );
                  })()}
                </div>
              </blockquote>
              {(() => {
                const yearsText = lang === "ro" ? "- de 18 ani lângă tine !" : "- 18 years by your side !";
                return (
                  <>
                    {/* Mobile: author only */}
                    <p className="md:hidden mt-2 text-[18px] italic font-light font-signature text-right whitespace-nowrap py-[11px] px-[22px]">
                      {t.heroAuthor}
                    </p>
                    {/* Tablet/Desktop: keep original two-row layout */}
                    <div className="hidden md:block">
                      <p className="mt-2 text-[22px] md:text-2xl italic font-light font-signature text-right py-[11px] px-[22px]">{t.heroAuthor}</p>
                      <p className="text-lg md:text-xl italic font-light font-signature text-right py-[2px] px-[22px] text-hero-foreground/80 -mt-2">{yearsText}</p>
                    </div>
                  </>
                );
              })()}
              <div className="mt-[21px] md:mt-6 flex md:justify-start justify-center mx-[24px] px-0 py-[11px]">
                <a href="tel:+40316320183" aria-label={lang === "ro" ? "Sună acum" : "Call now"}>
                  <Button variant="static" size="lg" className="border border-hero-foreground">
                    <Phone /> {t.callNow}
                  </Button>
                </a>
              </div>
              <div className="flex md:justify-start justify-center mx-[24px] px-0 -mt-2 mb-2">
                <div className="flex items-center gap-1.5 text-sm text-hero-foreground/90">
                  <span className="font-semibold">{t.googleRating}</span>
                  <span className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </span>
                  <span>{t.googleReviews}</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative md:max-w-[76.5%] md:ml-auto">
              <Legal500BadgeStrip />
              <img src="/lovable-uploads/avocat_drept_penal_Bucuresti_Bogdan_Lamatic.webp" alt="Portret avocat drept penal în costum, studio" title="Avocat drept penal Bucuresti Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-md" />
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
            <p className="text-foreground mb-6 max-w-3xl">{t.ctaText}</p>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.services.map((s) => (
                <GlowCard key={s.to} to={s.to} customSize borderPx={1} blackBg borderRunner noShadow className="relative w-full hover:border-accent transition-colors">
                  <article className="text-hero-foreground flex flex-col h-full">
                    <h3 className="text-base md:text-lg font-semibold mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-sm text-hero-foreground/80 leading-relaxed">{s.body}</p>
                    <div className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      {lang === "ro" ? "Detalii" : "Details"} <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </article>
                </GlowCard>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to="/servicii/"
                className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-accent hover:underline underline-offset-2"
              >
                {lang === "ro" ? "Vezi toate serviciile" : "See all services"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 flex justify-center">
              <img
                src="/lovable-uploads/e6b30f85-12f8-4f74-b39f-a1f4eda76d6a.webp"
                alt={lang === "ro" ? "Portret avocat drept penal București, fundal alb" : "Criminal defense attorney portrait, white background"}
                title="Avocat drept penal Bucuresti Bogdan Lamatic"
                loading="lazy"
                className="w-full h-auto max-w-md md:max-w-sm rounded-lg shadow-md"
              />
            </div>
            <div className="mt-6 text-center text-hero-foreground">
              <h2 className="text-lg font-semibold">{t.homeBio.name}</h2>
              <p className="text-sm text-hero-foreground/80">{t.homeBio.line1}</p>
              <p className="text-sm text-hero-foreground/80">{t.homeBio.line2}</p>
            </div>
            <div className="h-[30px]" aria-hidden="true"></div>
            <div className="mt-10">
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

        {/* FAQ Section */}
        <section className="py-20 px-4 border-t border-accent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Întrebări frecvente ale clienților mei
            </h2>
            
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full border border-accent rounded-lg p-6"
              >
                <CarouselContent>
                  {faqData.map((faq, index) => (
                    <CarouselItem key={index} className="basis-full">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4 text-primary">
                          {faq.question}
                        </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {renderTextWithLinks(faq.answer)}
                            </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        </section>
      </main>

    </div>;
};
export default Index;