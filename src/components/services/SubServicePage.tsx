import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { servedAreasSchema } from "@/lib/areaServed";
import RelatedServices from "@/components/RelatedServices";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";

export interface SubServiceSection {
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Renders a CTA button at the end of the section, with this label. */
  cta?: string;
  /** Optional list of inline service links (text-only when `to` is missing). */
  links?: { label: string; to?: string }[];
}

export interface SubServiceFaqItem {
  q: string;
  a: string;
}

export interface SubServiceResource {
  text: string;
  href: string;
  linkLabel: string;
}

export interface SubServicePageData {
  lang: "ro" | "en";
  /** Path of this page, e.g. "/servicii/avocat-dna" */
  path: string;
  /** Path of the RO/EN counterpart */
  altPath: string;
  /** RO path of the pair (used for x-default) */
  roPath: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  breadcrumbLabel: string;
  serviceName: string;
  /** Bold-first urgency lines, one sentence per line */
  urgency: string[];
  /** Intro/bio paragraphs, plain text with optional {parentLink} placeholder */
  bio: string[];
  sections: SubServiceSection[];
  faq: SubServiceFaqItem[];
  resources: SubServiceResource[];
  contactText: string;
  /** Link to the parent pillar page */
  parent: { to: string; label: string };
}

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

const SITE = "https://avocatpenalbucuresti.ro";

export default function SubServicePage({ data }: { data: SubServicePageData }) {
  const isEn = data.lang === "en";
  const callLabel = isEn ? "Call now" : "Sună-mă acum";
  const heroCallLabel = isEn ? "Call now!" : "Sună-mă acum!";
  const pageUrl = SITE + data.path;

  useSEO({
    canonical: data.path,
    locale: isEn ? "en_GB" : "ro_RO",
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      ro: isEn ? data.altPath : data.path,
      en: isEn ? data.path : data.altPath,
      xDefault: data.roPath,
    },
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: isEn ? "Home" : "Acasă", item: isEn ? `${SITE}/en` : `${SITE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: isEn ? "Services" : "Servicii",
            item: isEn ? `${SITE}/en/services` : `${SITE}/servicii`,
          },
          { "@type": "ListItem", position: 3, name: data.breadcrumbLabel, item: pageUrl },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: data.serviceName,
        description: data.description,
        url: pageUrl,
        areaServed: servedAreasSchema,
        availableLanguage: ["ro", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: isEn ? "Bucuresti" : "București",
          addressRegion: "Bucuresti",
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
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  });

  const CallCta = ({ label = callLabel }: { label?: string }) => (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - ${data.serviceName}`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-2xl font-semibold mb-4">{data.h1}</h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          {data.urgency.map((line, index) => (
            <span className="block" key={line}>
              {index === 0 ? <strong>{line}</strong> : line}
            </span>
          ))}
        </p>
      </div>

      <ServiceHeroCta lang={data.lang} ariaLabel={`${heroCallLabel} - ${data.serviceName}`} />

      <p className="mt-3 text-sm text-muted-foreground">
        <span className="text-yellow-400" aria-hidden="true">★★★★★</span>{" "}
        {isEn ? "5.0 from 27 Google reviews" : "5,0 din 27 de recenzii Google"}
      </p>

      <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
        {data.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          {isEn ? "This page is part of my " : "Această pagină face parte din serviciile de "}
          <Link to={data.parent.to} className="text-primary underline underline-offset-2">
            {data.parent.label}
          </Link>
          {isEn ? " services." : "."}
        </p>
      </div>

      <div className="mt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={isEn ? "/en" : "/"}>{isEn ? "Home" : "Acasă"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={isEn ? "/en/services" : "/servicii"}>{isEn ? "Services" : "Servicii"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data.breadcrumbLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {data.sections.map((section) => (
        <Card className="mt-8 border-accent" key={section.h2}>
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">{section.h2}</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc pl-6 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.links && section.links.length > 0 && (
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="group inline-flex items-start gap-2 text-base text-primary underline underline-offset-2"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-start gap-2 text-base text-foreground">
                        <span>{link.label}</span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-60" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {section.cta && <CallCta label={section.cta} />}
          </CardContent>
        </Card>
      ))}

      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            {isEn ? "Frequently asked questions" : "Întrebări frecvente"}
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ol className="list-decimal pl-6 space-y-3">
            {data.faq.map((item) => (
              <li key={item.q}>
                <strong>{item.q}</strong>
                <p className="mt-1">{item.a}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">
            {isEn ? "Contact | Free initial assessment" : "Contact | Evaluare inițială gratuită"}
          </h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>{data.contactText}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183">
                <Phone className="mr-2 h-4 w-4" /> {callLabel}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:contact@avocatpenalbucuresti.ro">{isEn ? "Send email" : "Trimite email"}</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            {isEn ? "Official resources" : "Resurse oficiale (linkuri utile)"}
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            {data.resources.map((resource) => (
              <li key={resource.text}>
                {resource.text} (
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  {resource.linkLabel}
                </a>
                )
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <RelatedServices current={data.path} lang={data.lang} />
    </section>
  );
}
