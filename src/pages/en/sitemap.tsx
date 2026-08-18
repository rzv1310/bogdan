import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Home, Briefcase, Phone, User, FileText, Globe, Shield, Cookie } from "lucide-react";

export default function SitemapEn() {
  useSEO({
    keywords: "sitemap criminal lawyer bucharest",
    locale: "en_GB",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
          { "@type": "ListItem", position: 2, name: "Sitemap", item: "https://avocatpenalbucuresti.ro/en/sitemap" },
        ],
      },
    ],
    title: "Sitemap | Criminal Lawyer Bucharest - All Website Pages",
    description:
      "Complete sitemap of the criminal lawyer Bucharest website. Quickly find all legal services, contact details and available resources.",
    canonical: "/en/sitemap",
    alternates: { ro: "/harta-site", en: "/en/sitemap", xDefault: "/harta-site" },
  });

  const mainPages = [
    { url: "/en", title: "Homepage - Criminal Lawyer Bucharest", icon: Home },
    { url: "/en/about", title: "About - Attorney Bogdan Lamatic", icon: User },
    { url: "/en/contact", title: "Contact - Legal Consultations", icon: Phone },
    { url: "/en/blog", title: "Resources - Legal Articles", icon: FileText },
    { url: "/en/compensation-calculator", title: "Compensation Calculator", icon: FileText },
  ];

  const services = [
    { url: "/en/services", title: "All services" },
    { url: "/en/services/criminal-investigation", title: "Criminal Investigation - Defense from the First Hour" },
    { url: "/en/services/preventive-measures", title: "Preventive Measures - Immediate Intervention" },
    { url: "/en/services/offenses-against-persons", title: "Offenses Against Persons - Criminal Defense" },
    { url: "/en/services/police-prosecutor-questioning", title: "Police and Prosecutor Questioning" },
    { url: "/en/services/home-search", title: "Home Search - Immediate Assistance" },
    { url: "/en/services/computer-search", title: "Computer Search - Phone, Laptop, Data" },
    { url: "/en/services/diicot-lawyer", title: "DIICOT Lawyer - Organised Crime" },
    { url: "/en/services/dna-lawyer", title: "DNA Lawyer - Corruption Cases" },
    { url: "/en/services/financial-crime", title: "Financial Crime - Legal Services" },
    { url: "/en/services/corruption-and-public-office-offenses", title: "Corruption and Public Office Offenses" },
    { url: "/en/services/bribery-giving-and-taking", title: "Bribery" },
    { url: "/en/services/influence-peddling", title: "Influence Peddling" },
    { url: "/en/services/abuse-of-office", title: "Abuse of Office" },
    { url: "/en/services/negligence-in-office", title: "Negligence in Office" },
    { url: "/en/services/conflict-of-interest", title: "Conflict of Interest" },
    { url: "/en/services/crypto-asset-investigations", title: "Crypto Asset Investigations" },
    { url: "/en/services/drug-offenses", title: "Drug Offenses - Legal Defense" },
    { url: "/en/services/money-laundering-and-asset-concealment", title: "Money Laundering and Asset Concealment" },
    { url: "/en/services/asset-freezing-order", title: "Asset Seizure" },
    { url: "/en/services/drunk-driving", title: "Drunk driving" },
    { url: "/en/services/drug-driving", title: "Drug driving" },
    { url: "/en/services/leaving-the-accident-scene", title: "Leaving the accident scene" },
    { url: "/en/services/refusal-to-provide-biological-samples", title: "Refusal to provide biological samples" },
    { url: "/en/services/driving-without-a-licence", title: "Driving without a licence" },
    { url: "/en/services/road-accident-with-victims", title: "Road accident with victims" },
    { url: "/en/services/confiscation", title: "Confiscation" },
    { url: "/en/services/road-accident-compensation", title: "Road accident compensation" },
    { url: "/en/services/bodily-injury-compensation", title: "Bodily injury compensation" },
    { url: "/en/services/assault-and-bodily-injury", title: "Assault and bodily harm" },
    { url: "/en/services/domestic-violence", title: "Domestic violence" },
    { url: "/en/services/unlawful-detention-and-threats", title: "Unlawful detention and threats" },
    { url: "/en/services/blackmail-and-harassment", title: "Blackmail and harassment" },
    { url: "/en/services/rape-and-sexual-assault", title: "Rape and sexual assault" },
    { url: "/en/services/homicide-and-manslaughter", title: "Homicide and manslaughter" },
    { url: "/en/services/professional-negligence-and-malpractice", title: "Professional Negligence and Malpractice" },
    { url: "/en/services/road-traffic-offenses", title: "Road Traffic Offenses" },
    { url: "/en/services/workplace-criminal-liability", title: "Workplace Criminal Liability" },
    { url: "/en/services/victim-representation-in-criminal-cases", title: "Victim Representation in Criminal Cases" },
    { url: "/en/services/tax-evasion", title: "Tax Evasion" },
    { url: "/en/services/fraud-and-deception", title: "Fraud and Deception" },
    { url: "/en/services/embezzlement", title: "Embezzlement" },
    { url: "/en/services/forgery-and-use-of-forgery", title: "Forgery and Use of Forgery" },
    { url: "/en/services/fraudulent-bankruptcy", title: "Fraudulent Bankruptcy" },
    { url: "/en/services/computer-fraud", title: "Computer Fraud" },
    { url: "/en/services/eu-funds-fraud", title: "EU Funds Fraud" },
    { url: "/en/services/drug-possession-personal-use", title: "Drug Possession for Personal Use" },
    { url: "/en/services/organized-crime-group", title: "Organized Crime Group" },
    { url: "/en/services/international-drug-trafficking", title: "International Drug Trafficking" },
    { url: "/en/services/police-custody-24-hours", title: "Police Custody 24 Hours" },
    { url: "/en/services/pre-trial-detention", title: "Pre-trial Detention" },
    { url: "/en/services/judicial-control", title: "Judicial Control" },
    { url: "/en/services/house-arrest", title: "House Arrest" },
  ];

  const romanianPages = [
    { url: "/", title: "Pagina Principală - Avocat Penal București" },
    { url: "/servicii", title: "Toate serviciile" },
    { url: "/despre-mine", title: "Despre Mine - Avocat Bogdan Lamatic" },
    { url: "/contact", title: "Contact - Consultații Juridice" },
    { url: "/blog", title: "Resurse - Articole Juridice" },
    { url: "/calculator-despagubiri", title: "Calculator Despăgubiri" },
    { url: "/harta-site", title: "Harta site" },
  ];

  const legalPages = [
    { url: "/en/terms-and-conditions", title: "Terms and Conditions", icon: FileText },
    { url: "/en/gdpr", title: "GDPR - Data Protection", icon: Shield },
    { url: "/en/cookie-policy", title: "Cookie Policy", icon: Cookie },
    { url: "/termeni-si-conditii", title: "Termeni și Condiții", icon: FileText },
    { url: "/gdpr", title: "GDPR - Protecția Datelor", icon: Shield },
    { url: "/politica-cookies", title: "Politica de Cookies", icon: Cookie },
  ];

  return (
    <main className="min-h-screen bg-hero text-hero-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-4">Sitemap</h1>
          <p className="text-xl text-hero-foreground/90 max-w-3xl mx-auto">
            Complete map of the avocatpenalbucuresti.ro website
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="space-y-8">
            <div className="bg-hero-foreground/5 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Home className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-semibold">Main Pages</h2>
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">Top Priority</span>
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

            <div className="bg-hero-foreground/5 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-accent" />
                <h2 className="text-2xl font-semibold">Criminal Law Services</h2>
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">Top Priority</span>
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

          <section className="space-y-8">
            <div className="bg-hero-foreground/3 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-accent/80" />
                <h2 className="text-2xl font-semibold">Pagini în română</h2>
                <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-medium">Medium Priority</span>
              </div>
              <ul className="space-y-2">
                {romanianPages.map((page) => (
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

            <div className="bg-hero-foreground/2 rounded-lg p-6 border border-hero-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-muted-foreground" />
                <h2 className="text-2xl font-semibold">Legal Information</h2>
                <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm font-medium">Low Priority</span>
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
            Total pages: {mainPages.length + services.length + romanianPages.length + legalPages.length}
          </p>
          <p className="text-hero-foreground/60 mt-2">
            For legal consultations, contact{" "}
            <Link to="/en/contact" className="text-accent hover:underline">
              Attorney Bogdan Lamatic
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
}
