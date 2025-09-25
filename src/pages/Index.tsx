import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Play } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import GeminiButtonEffect from "@/components/ui/gemini-button-effect";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { ReviewsCarousel3D, type Review as Reviews3DItem } from "@/components/ui/reviews-carousel-3d";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
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
    answer: "Da, am reprezentat clienți în cauze variate – de la infracțiuni economice, la infracțiuni contra persoanei sau trafic de droguri – cu rezultate favorabile."
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
    answer: "Putem folosi căi de atac - apel, recurs sau contestație, în funcție de situația juridică și termenele legale."
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
    answer: "Durata depinde de complexitatea cazului și de numărul probelor, însă legea prevede termene maxime pentru fiecare etapă, pentru a asigura un proces echitabil. Sunați-mă la +40 (31) 632 01 83"
  },
  {
    question: "14. Pot refuza să dau declarații împotriva mea?",
    answer: "Da, aveți dreptul să nu vă autoincriminați, conform Constituției României și Convenției Europene a Drepturilor Omului."
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
    answer: "Nu. Prezența este obligatorie. Refuzul poate atrage amendă sau chiar aducerea cu mandat. Totuși, aveți dreptul să refuzați să vă autoincriminați."
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
  const parts = processedText.split(/(\|\|(?:URL|PHONE|PHONE2|BR)\|\|[^|]*\|\|(?:URL|PHONE|PHONE2)\|\||\|\|BR\|\|)/);
  
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
  
  useSEO({
    title: "Avocat Drept Penal Bucuresti | Bogdan Lamatic | Evaziune | Droguri | Malpraxis | Coruptie | Accidente rutiere | Frauda | Mita | Criminalitate economica",
    description: "Avocat drept penal Bucuresti > Bogdan Lamatic > Apărare în criminalitate economică, corupție, accidente rutiere, crypto, malpraxis., droguri ",
    alternates: { ro: "/", en: "/en", xDefault: "/" },
    locale: "ro_RO",
    robotsDirectives: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  });
  
  const currentReviews = lang === "ro" ? reviewsRO : reviewsEN;
  
  return <div className="min-h-screen bg-background text-foreground">
    {/* Schema Markup */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "@id": typeof window !== "undefined" ? `${window.location.origin}#LegalService` : "https://avocatpenalbucuresti.ro#LegalService",
          "name": "Avocat Drept Penal Bucuresti Bogdan Lamatic",
          "description": "Cabinet avocat penal București - Apărare în criminalitate economică, corupție, cauze rutiere, investigații crypto și malpraxis",
          "url": typeof window !== "undefined" ? window.location.origin : "https://avocatpenalbucuresti.ro",
          "telephone": "+40316320183",
          "email": "contact@avocatpenalbucuresti.ro",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Colonel Stefan Stoika 22",
            "addressLocality": "București",
            "addressRegion": "Bucuresti",
            "postalCode": "012244",
            "addressCountry": "RO",
            "url": "https://www.google.com/maps?cid=17818591254142574295"
          },
          "hasMap": "https://www.google.com/maps?cid=17818591254142574295",
          "areaServed": [
            {
              "@type": "City",
              "name": "București",
              "addressCountry": "RO"
            },
            {
              "@type": "Country",
              "name": "România"
            }
          ],
          "serviceType": [
            "Apărare penală",
            "Criminalitate economică",
            "Infracțiuni de corupție",
            "Investigații crypto",
            "Malpraxis medical",
            "Accidente rutiere"
          ],
          "priceRange": "$$",
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
                  "name": "Infracțiuni de corupție",
                  "description": "Apărare în dosare de luare de mită, dare de mită, trafic de influență"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Investigații active crypto",
                  "description": "Servicii specializate pentru investigații blockchain și active digitale"
                }
              }
            ]
          },
          "review": currentReviews.slice(0, 5).map(review => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": review.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.stars,
              "bestRating": 5
            },
            "reviewBody": review.text
          })),
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 5,
            "reviewCount": currentReviews.length,
            "bestRating": 5
          }
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Bogdan Lamatic",
          "jobTitle": "Avocat specializat în drept penal",
          "worksFor": {
            "@id": typeof window !== "undefined" ? `${window.location.origin}#LegalService` : "https://avocatpenalbucuresti.ro#LegalService"
          },
          "telephone": "+40316320183",
          "email": "contact@avocatpenalbucuresti.ro",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Colonel Stefan Stoika 22",
            "addressLocality": "București",
            "addressRegion": "Bucuresti",
            "postalCode": "012244",
            "addressCountry": "RO",
            "url": "https://www.google.com/maps?cid=17818591254142574295"
          },
          "hasMap": "https://www.google.com/maps?cid=17818591254142574295",
          "alumniOf": {
            "@type": "Organization",
            "name": "Universitatea de Vest din Timișoara"
          },
          "memberOf": {
            "@type": "Organization",
            "name": "Baroul București"
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Licență în drept",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Baroul București"
            }
          },
          "knowsAbout": [
            "Drept penal",
            "Criminalitate economică",
            "Infracțiuni de corupție",
            "Investigații blockchain",
            "Malpraxis medical",
            "Accidente rutiere cu victime"
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Avocat Drept Penal Bucuresti Bogdan Lamatic",
          "url": typeof window !== "undefined" ? window.location.origin : "https://avocatpenalbucuresti.ro",
          "description": "Site oficial avocat Bogdan Lamatic - specializat în apărare penală, criminalitate economică și investigații crypto în București",
          "inLanguage": lang === "ro" ? "ro-RO" : "en-US",
          "publisher": {
            "@id": typeof window !== "undefined" ? `${window.location.origin}#LegalService` : "https://avocatpenalbucuresti.ro#LegalService"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": typeof window !== "undefined" 
                ? `${window.location.origin}/search?q={search_term_string}`
                : "https://avocatpenalbucuresti.ro/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": typeof window !== "undefined" ? `${window.location.origin}#LocalBusiness` : "https://avocatpenalbucuresti.ro#LocalBusiness",
          "name": "Avocat Drept Penal Bucuresti Bogdan Lamatic",
          "description": "Cabinet avocat penal în București, specializat în criminalitate economică, corupție și investigații crypto",
          "url": typeof window !== "undefined" ? window.location.origin : "https://avocatpenalbucuresti.ro",
          "telephone": "+40316320183",
          "email": "contact@avocatpenalbucuresti.ro",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Colonel Stefan Stoika 22",
            "addressLocality": "București", 
            "addressRegion": "Bucuresti",
            "postalCode": "012244",
            "addressCountry": "RO",
            "url": "https://www.google.com/maps?cid=17818591254142574295"
          },
          "hasMap": "https://www.google.com/maps?cid=17818591254142574295",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 44.4572663,
            "longitude": 26.0635712
          },
          "openingHours": ["Mo-Fr 06:00-22:00", "Sa-Su 09:00-20:00"],
          "paymentAccepted": "Cash, BankTransfer",
          "currenciesAccepted": "RON, EUR",
          "priceRange": "$$",
          "sameAs": [
            "https://www.linkedin.com/in/bogdan-lamatic",
            "https://x.com/BogdanLamatic"
          ],
          "image": typeof window !== "undefined" ? `${window.location.origin}/lovable-uploads/cabinet_avocat_bogdan_lamatic.jpeg` : "https://avocatpenalbucuresti.ro/lovable-uploads/cabinet_avocat_bogdan_lamatic.jpeg"
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
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
                "text": "Da, am reprezentat clienți în cauze variate – de la infracțiuni economice, la infracțiuni contra persoanei sau trafic de droguri – cu rezultate favorabile."
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
                "text": "Putem folosi căi de atac - apel, recurs sau contestație, în funcție de situația juridică și termenele legale."
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
              "name": "Cum pot găsi un avocat bun în România sau in București?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Căutați un avocat înscris în Baroul București, cu experiență dovedită în cazuri similare și cu recenzii pozitive de la clienți. În dreptul penal, experiența practică și cunoașterea procedurii sunt esențiale.  Experiența si expertiza mea sunt detaliate aici: https://avocatpenalbucuresti.ro/despre-mine  Avocat drept penal București Bogdan Lamatic Strada Colonel Ștefan Stoika 22, București 012244 Telefon: 0316320183"
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
                "text": "Durata depinde de complexitatea cazului și de numărul probelor, însă legea prevede termene maxime pentru fiecare etapă, pentru a asigura un proces echitabil. Sunați-mă la +40 (31) 632 01 83"
              }
            },
            {
              "@type": "Question",
              "name": "Pot refuza să dau declarații împotriva mea?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Da, aveți dreptul să nu vă autoincriminați, conform Constituției României și Convenției Europene a Drepturilor Omului."
              }
            },
            {
              "@type": "Question",
              "name": "Ce trebuie să fac dacă nu sunt de acord cu acuzațiile care mi se aduc?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contactați-mă imediat la +40 (31) 632 01 83.  Voi analiza acuzațiile, voi pregăti apărarea și voi contesta probele sau procedurile ilegale pentru a vă proteja drepturile."
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
                "text": "Nu. Prezența este obligatorie. Refuzul poate atrage amendă sau chiar aducerea cu mandat. Totuși, aveți dreptul să refuzați să vă autoincriminați."
              }
            },
            {
              "@type": "Question",
              "name": "Ce fac dacă sunt acuzat pe nedrept?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contactați imediat un avocat. Sunați-mă la +40 (31) 632 01 83  Vom contesta probele, vom aduce martori și expertize independente, iar în unele cazuri putem formula plângere pentru denunț calomnios."
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
                "text": "Este o procedură prin care recunoașteți fapta în schimbul unei pedepse reduse. Se aplică doar în anumite situații și trebuie analizat cu atenție, pentru a nu accepta o soluție dezavantajoasă."
              }
            }
          ]
        })
      }}
    />

      <main>
        {/* Hero Section */}
        <section id="hero" className="bg-hero text-hero-foreground">
          <div className="mx-auto max-w-6xl px-4 md:px-6 pt-[30px] pb-16 md:pt-12 md:pb-[66px] grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1">
              <h1 className="text-[28px] md:text-4xl font-semibold leading-tight tracking-tight mb-6 py-0 whitespace-pre-line">
                {t.heroTitle}
              </h1>
              {/* Mobile-only image right after H1 */}
              <div className="mt-4 block md:hidden">
                <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Portret avocat drept penal în costum, studio" title="Avocat drept penal Bucuresti Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-md max-w-[68%] mx-auto" />
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
                <a href="tel:+40316320183" aria-label={lang === "ro" ? "Sună acum" : "Call now"}>
                  <Button variant="static" size="lg" className="border border-hero-foreground">
                    <Phone /> {t.callNow}
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden md:block relative md:max-w-[76.5%] md:ml-auto">
              <img src="/lovable-uploads/49019fba-928b-46d2-b2b3-fedace8aacf9.png" alt="Portret avocat drept penal în costum, studio" title="Avocat drept penal Bucuresti Bogdan Lamatic" fetchPriority="high" className="w-full h-auto rounded-lg shadow-md" />
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