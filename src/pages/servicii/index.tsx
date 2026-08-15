import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, ArrowRight, Briefcase } from "lucide-react";
import { servedAreasSchema } from "@/lib/areaServed";
import { roServiceGroups } from "@/lib/serviceGroups";

const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii";
const TITLE = "Servicii avocat penal București - av. Bogdan Lamatic";
const DESCRIPTION =
  "Servicii de avocat penal în București: urmărire penală, măsuri preventive, criminalitate economică, corupție, spălare de bani, crypto, droguri, infracțiuni rutiere, malpraxis, accidente de muncă și reprezentarea victimelor.";

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Discută cu avocatul" }: { label?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - avocat Bogdan Lamatic`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

export default function ServiciiPage() {
  const allServiceItems = roServiceGroups.flatMap((group, groupIndex) =>
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
    canonical: "/servicii",
    locale: "ro_RO",
    title: TITLE,
    description: DESCRIPTION,
    keywords: "servicii avocat penal",
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { ro: "/servicii", en: "/en/services", xDefault: "/servicii" },
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" },
          { "@type": "ListItem", position: 2, name: "Servicii", item: PAGE_URL },
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
        name: "Avocat penal București - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: servedAreasSchema,
        availableLanguage: ["ro", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: "București",
          addressRegion: "București",
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
        {/* Hero */}
        <section className="mb-12 md:mb-16">
          <h1 className="text-2xl font-semibold mb-4">Servicii de avocat penal în București</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Asistență și reprezentare în dosare penale complexe, de la audieri, reținere și arest preventiv până la cauze DIICOT, criminalitate economică, corupție, infracțiuni rutiere și reprezentarea victimelor.
          </p>
          <div className="mt-6">
            <CallCta />
          </div>
        </section>

        {/* Service groups */}
        <div className="space-y-14 md:space-y-20">
          {roServiceGroups.map((group) => (
            <section key={group.id} className={group.id === "economic" ? "rounded-2xl border border-primary/10 bg-primary/5 p-5 md:p-8" : undefined}>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                {group.id === "economic" && <Briefcase className="h-5 w-5 text-primary" />}
                {group.title}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <Card key={card.to} className="flex flex-col h-full border-border bg-card">
                    <CardHeader className="pb-3">
                      <h3 className="text-lg font-semibold leading-snug">
                        <Link to={card.to} className="hover:text-primary hover:underline underline-offset-2">
                          {card.title}
                        </Link>
                      </h3>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                      <ul className="mt-4 space-y-1.5 text-sm">
                        {card.subServices.map((sub) => (
                          <li key={sub} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-5">
                        <Link
                          to={card.to}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-2"
                        >
                          {card.cta} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Final CTA */}
        <section className="mt-16 md:mt-20 rounded-2xl border border-border bg-muted/40 p-6 md:p-10 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">Nu știi în ce categorie se încadrează situația ta?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Fiecare caz este diferit. Sună-mă direct și îți spun în câteva minute cum te pot ajuta și care este cea mai bună strategie pentru tine.
          </p>
          <CallCta label="Sună avocatul" />
        </section>
      </div>
    </main>
  );
}
