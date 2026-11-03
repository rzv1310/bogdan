
import { useSEO } from "@/hooks/useSEO";
import { CTA_CLASS } from "@/lib/cta";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { servedAreasSchema } from "@/lib/areaServed";
import { enServiceGroups } from "@/lib/serviceGroups";

const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services";
const TITLE = "Criminal Law Services Bucharest - Attorney Bogdan Lamatic";
const DESCRIPTION =
  "Criminal defense services in Bucharest: financial crime, corruption, money laundering, crypto investigations, drug offenses, road traffic offenses, malpractice, workplace accidents and victim representation.";

const MAIN_SERVICE_PATHS = new Set([
  "/en/services/criminal-investigation",
  "/en/services/preventive-measures",
  "/en/services/financial-crime",
  "/en/services/corruption-and-public-office-offenses",
  "/en/services/money-laundering-and-asset-concealment",
  "/en/services/crypto-asset-investigations",
  "/en/services/drug-offenses",
  "/en/services/road-traffic-offenses",
  "/en/services/offenses-against-persons",
  "/en/services/professional-negligence-and-malpractice",
  "/en/services/workplace-criminal-liability",
  "/en/services/victim-representation-in-criminal-cases",
]);

function CallCta({ label = "Talk to the attorney" }: { label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - attorney Bogdan Lamatic`}>
        <a href="tel:+40745506443">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

export default function EnServicesPage() {
  const filteredGroups = enServiceGroups
    .map((group) => ({ ...group, cards: group.cards.filter((card) => MAIN_SERVICE_PATHS.has(card.to)) }))
    .filter((group) => group.cards.length > 0);

  const allServiceItems = filteredGroups.flatMap((group, groupIndex) =>
    group.cards.map((card, cardIndex) => ({
      "@type": "ListItem",
      position: groupIndex * 10 + cardIndex + 1,
      name: card.title,
      description: card.description,
      url: `https://avocatpenalbucuresti.ro${card.to}`,
      item: { "@type": "LegalService", name: card.title, url: `https://avocatpenalbucuresti.ro${card.to}` },
    }))
  );

  useSEO({
    canonical: "/en/services",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    keywords: "criminal law services romania",
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { ro: "/servicii", en: "/en/services", xDefault: "/servicii" },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: allServiceItems,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Criminal lawyer Bucharest - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: servedAreasSchema,
        availableLanguage: ["ro", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: "Bucharest",
          addressRegion: "Bucharest",
          postalCode: "012244",
          addressCountry: "RO",
        },
        hasMap: "https://www.google.com/maps?cid=17818591254142574295",
        telephone: "+40 745 506 443",
        email: "contact@avocatpenalbucuresti.ro",
        provider: {
          "@type": "Attorney",
          name: "Bogdan Lamatic",
          telephone: "+40 745 506 443",
        },
      },
    ],
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col">
        <Breadcrumb className="order-last mt-5 md:order-first md:mt-0 md:mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/en">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Hero */}
        <section className="mb-12 md:mb-16">

          <h1 className="text-2xl font-semibold mb-4">Criminal law services in Bucharest</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Assistance and representation in complex criminal cases, from hearings, detention and preventive arrest to DIICOT cases, economic crime, corruption, road traffic offenses and victim representation.
          </p>
          <div className="mt-6">
            <CallCta />
          </div>
        </section>
        </div>

        {/* Service groups */}
        <div className="space-y-14 md:space-y-20">
          {filteredGroups.map((group) => (
            <section key={group.id}>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">
                {group.title}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <GlowCard key={card.to} customSize borderPx={1} blackBg borderRunner noShadow className="w-full h-full hover:border-accent transition-colors">
                    <article className="flex flex-col h-full text-hero-foreground">
                      <h3 className="text-lg font-semibold leading-snug mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm text-hero-foreground/80 leading-relaxed">{card.description}</p>
                      <ul className="mt-4 space-y-2.5 text-sm text-hero-foreground/90">
                        {card.subServices.map((sub) => (
                          <li key={sub.label} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {sub.to ? (
                              <Link
                                to={sub.to}
                                className="group inline-flex items-center gap-1 text-hero-foreground underline underline-offset-2 transition-colors hover:text-accent"
                              >
                                {sub.label}
                                <ArrowRight className="h-3 w-3 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5" />
                              </Link>
                            ) : (
                              <span>{sub.label}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={card.to}
                        className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:underline hover:underline-offset-2"
                      >
                        {card.cta} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </article>
                  </GlowCard>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Final CTA */}
        <section className="mt-16 md:mt-20 rounded-2xl border border-border bg-muted/40 p-6 md:p-10 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Not sure which category fits your situation?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Every case is different. Call me directly and I will tell you in a few minutes how I can help and what the best strategy is for you.
          </p>
          <div className="flex justify-center">
            <CallCta label="Call the attorney" />
          </div>
        </section>
      </div>
    </main>
  );
}
