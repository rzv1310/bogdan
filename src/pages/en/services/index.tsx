import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Phone, ArrowRight, Briefcase } from "lucide-react";
import { servedAreasSchema } from "@/lib/areaServed";
import { enServiceGroups } from "@/lib/serviceGroups";

const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services";
const TITLE = "Criminal Law Services Bucharest - Attorney Bogdan Lamatic";
const DESCRIPTION =
  "Criminal defense services in Bucharest: financial crime, corruption, money laundering, crypto investigations, drug offenses, road traffic offenses, malpractice, workplace accidents and victim representation.";

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Talk to the attorney" }: { label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - attorney Bogdan Lamatic`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

export default function EnServicesPage() {
  const allServiceItems = enServiceGroups.flatMap((group, groupIndex) =>
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
        telephone: "+40 (31) 632 01 83",
        email: "contact@avocatpenalbucuresti.ro",
        provider: {
          "@type": "Attorney",
          name: "Bogdan Lamatic",
          telephone: "+40 (31) 632 01 83",
        },
      },
    ],
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <Breadcrumb className="mb-6">
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

        {/* Service groups */}
        <div className="space-y-14 md:space-y-20">
          {enServiceGroups.map((group) => (
            <section key={group.id} className={group.id === "economic" ? "rounded-2xl border border-primary/20 p-5 md:p-8" : undefined}>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                {group.id === "economic" && <Briefcase className="h-5 w-5 text-primary" />}
                {group.title}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <GlowCard key={card.to} customSize borderPx={1} blackBg borderRunner noShadow className="w-full h-full">
                    <article className="flex flex-col h-full text-hero-foreground">
                      <h3 className="text-lg font-semibold leading-snug mb-3">
                        <Link to={card.to} className="hover:text-accent hover:underline underline-offset-2">
                          {card.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-hero-foreground/80 leading-relaxed">{card.description}</p>
                      <ul className="mt-4 space-y-1.5 text-sm text-hero-foreground/90">
                        {card.subServices.map((sub) => (
                          <li key={sub} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-5">
                        <Link
                          to={card.to}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-2"
                        >
                          {card.cta} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
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
