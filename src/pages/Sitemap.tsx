import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Home, Briefcase, Phone, User, FileText, Globe, Shield, Cookie } from "lucide-react";

export default function Sitemap() {
  useSEO({
    title: "Sitemap | Avocat Penal București - Toate Paginile Site-ului",
    description: "Harta completă a site-ului avocat penal București. Găsește rapid toate serviciile juridice, informațiile de contact și resursele disponibile.",
    canonical: "https://avocatpenalbucuresti.ro/sitemap.xml",
  });

  const mainPages = [
    { url: "/", title: "Pagina Principală - Avocat Penal București", icon: Home },
    { url: "/despre-mine", title: "Despre Mine - Avocat Bogdan Lamatic", icon: User },
    { url: "/contact", title: "Contact - Consultații Juridice", icon: Phone },
    { url: "/blog", title: "Blog - Articole Juridice", icon: FileText },
  ];

  const services = [
    { url: "/servicii/criminalitate-economica", title: "Criminalitate Economică - Servicii Juridice" },
    { url: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice", title: "Infracțiuni de Corupție și Funcție Publică" },
    { url: "/servicii/investigatii-privind-activele-cripto", title: "Investigații Cripto - Active Digitale" },
    { url: "/servicii/cauze-penale-privind-droguri", title: "Cauze Penale Droguri - Apărare Juridică" },
    { url: "/servicii/spalare-de-bani-si-ascundere-de-bunuri", title: "Spălare de Bani și Ascundere Bunuri" },
    { url: "/servicii/neglijenta-profesionala-si-malpraxis", title: "Neglijență Profesională și Malpraxis" },
    { url: "/servicii/infractiuni-rutiere-cu-victime", title: "Infracțiuni Rutiere cu Victime" },
    { url: "/servicii/raspundere-penala-incidente-locul-de-munca", title: "Răspundere Penală Locul de Muncă" },
    { url: "/servicii/reprezentarea-victimelor-in-procese-penale", title: "Reprezentarea Victimelor în Procese Penale" },
  ];

  const englishPages = [
    { url: "/en", title: "Homepage - Criminal Lawyer Bucharest" },
    { url: "/en/contact", title: "Contact - Legal Consultations" },
    { url: "/en/blog", title: "Blog - Legal Articles" },
    { url: "/en/services/financial-crime", title: "Financial Crime - Legal Services" },
    { url: "/en/services/corruption-and-public-office-offenses", title: "Corruption and Public Office Offenses" },
    { url: "/en/services/crypto-asset-investigations", title: "Crypto Asset Investigations" },
    { url: "/en/services/drug-offenses", title: "Drug Offenses - Legal Defense" },
    { url: "/en/services/money-laundering-and-asset-concealment", title: "Money Laundering and Asset Concealment" },
    { url: "/en/services/professional-negligence-and-malpractice", title: "Professional Negligence and Malpractice" },
    { url: "/en/services/road-traffic-offenses", title: "Road Traffic Offenses" },
    { url: "/en/services/workplace-criminal-liability", title: "Workplace Criminal Liability" },
    { url: "/en/services/victim-representation-in-criminal-cases", title: "Victim Representation in Criminal Cases" },
  ];

  const legalPages = [
    { url: "/termeni-si-conditii", title: "Termeni și Condiții", icon: FileText },
    { url: "/gdpr", title: "GDPR - Protecția Datelor", icon: Shield },
    { url: "/politica-cookies", title: "Politica de Cookies", icon: Cookie },
    { url: "/en/terms-and-conditions", title: "Terms and Conditions", icon: FileText },
    { url: "/en/gdpr", title: "GDPR - Data Protection", icon: Shield },
    { url: "/en/cookie-policy", title: "Cookie Policy", icon: Cookie },
  ];

  return (
    <main className="min-h-screen bg-hero text-hero-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
          <p className="text-xl text-hero-foreground/90 max-w-3xl mx-auto">
            Harta completă website avocatpenalbucuresti.ro
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* High Priority - Romanian Pages */}
          <section className="space-y-8">
            {/* Main Pages */}
            <div className="bg-hero-foreground/5 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Home className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-semibold">Pagini Principale</h2>
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">Prioritate Maximă</span>
              </div>
              <ul className="space-y-3">
                {mainPages.map((page) => {
                  const IconComponent = page.icon;
                  return (
                    <li key={page.url}>
                      <Link 
                        to={page.url} 
                        className="flex items-center gap-3 text-hero-foreground/90 hover:text-accent transition-colors duration-200 group"
                      >
                        <IconComponent className="h-4 w-4 group-hover:text-accent" />
                        <span className="group-hover:underline">{page.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-hero-foreground/5 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-semibold">Servicii Avocat Penal</h2>
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">Prioritate Maximă</span>
              </div>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.url}>
                    <Link 
                      to={service.url} 
                      className="text-hero-foreground/90 hover:text-accent transition-colors duration-200 hover:underline block"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Medium & Low Priority */}
          <section className="space-y-8">
            {/* English Pages */}
            <div className="bg-hero-foreground/3 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-accent/80" />
                <h2 className="text-2xl font-semibold">English Pages</h2>
                <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">Prioritate Medie</span>
              </div>
              <ul className="space-y-2">
                {englishPages.map((page) => (
                  <li key={page.url}>
                    <Link 
                      to={page.url} 
                      className="text-hero-foreground/80 hover:text-accent/80 transition-colors duration-200 hover:underline block text-sm"
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="bg-hero-foreground/2 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-muted-foreground" />
                <h2 className="text-2xl font-semibold">Informații Legale</h2>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-medium">Prioritate Mică</span>
              </div>
              <ul className="space-y-2">
                {legalPages.map((page) => {
                  const IconComponent = page.icon;
                  return (
                    <li key={page.url}>
                      <Link 
                        to={page.url} 
                        className="flex items-center gap-2 text-hero-foreground/70 hover:text-accent/70 transition-colors duration-200 group text-sm"
                      >
                        <IconComponent className="h-3 w-3 group-hover:text-accent/70" />
                        <span className="group-hover:underline">{page.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-hero-foreground/10 text-center">
          <p className="text-hero-foreground/60">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')} | 
            Total pagini: {mainPages.length + services.length + englishPages.length + legalPages.length}
          </p>
          <p className="text-hero-foreground/60 mt-2">
            Pentru consultații juridice, contactați{" "}
            <Link to="/contact" className="text-accent hover:underline">
              Avocat Bogdan Lamatic
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}