import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CTA_CLASS } from "@/lib/cta";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { servedAreasSchema } from "@/lib/areaServed";
import RelatedServices from "@/components/RelatedServices";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";

export interface SubServiceSubsection {
  h3: string;
  paragraphs?: (string | { text: string; bold?: boolean; to?: string }[])[];
  bullets?: (string | { bold: string; rest: string })[];
  /** Renders a CTA button at the end of the subsection, with this label. */
  cta?: string;
  /** When false, hides the phone icon inside the CTA button. Defaults to true. */
  ctaIcon?: boolean;
  /** Optional small highlighted callout inside the subsection. */
  callout?: string;
  /** Optional extra className for the callout paragraph. */
  calloutClassName?: string;
  /** Optional inline CTA button rendered inside the callout. */
  calloutCta?: string;
  /** Renders a secondary WhatsApp CTA at the end of the subsection. */
  ctaWhatsApp?: boolean;
  /** Custom label for the secondary WhatsApp CTA. */
  ctaWhatsAppLabel?: string;
}

export interface SubServiceSection {
  h2: string;
  /** Optional DOM id, used as in-page anchor target. */
  id?: string;
  paragraphs?: (string | { text: string; bold?: boolean; to?: string }[])[];
  bullets?: (string | { bold: string; rest: string })[];
  /** Renders a CTA button at the end of the section, with this label. */
  cta?: string;
  /** When false, hides the phone icon inside the CTA button. Defaults to true. */
  ctaIcon?: boolean;
  /** Optional list of inline service links (text-only when `to` is missing). Use "#id" for in-page anchors. */
  links?: { label: string; to?: string }[];

  /** Optional small highlighted callout inside the section. */
  callout?: string;
  /** Optional extra className for the callout paragraph. */
  calloutClassName?: string;
  /** Optional inline CTA button rendered inside the callout. */
  calloutCta?: string;
  /** Optional paragraphs rendered after the bullets. */
  paragraphsAfterBullets?: (string | { text: string; bold?: boolean; to?: string }[])[];
  /** Optional small highlighted callout rendered after the bullets. */
  calloutAfterBullets?: string;
  /** Optional extra className for the after-bullets callout. */
  calloutAfterBulletsClassName?: string;
  /** Optional inline CTA button rendered inside the after-bullets callout. */
  calloutAfterBulletsCta?: string;
  /** Optional extra className applied to the section Card. */
  cardClassName?: string;
  /** Optional subsections rendered as h3 blocks inside the section. */
  subsections?: SubServiceSubsection[];
  /** Renders a secondary WhatsApp CTA at the end of the section. */
  ctaWhatsApp?: boolean;
  /** Custom label for the secondary WhatsApp CTA. */
  ctaWhatsAppLabel?: string;
  /** Optional callout rendered after the subsections block. */
  calloutAfterSubsections?: string;
  /** Optional main CTA rendered after the subsections block. */
  ctaAfterSubsections?: string;
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
  /** Replaces the email button in the final contact card with a WhatsApp CTA. */
  contactWhatsApp?: boolean;
  /** Inserts the Google review card after the section at this index. */
  reviewAfterSection?: number;
  /** Link to the parent pillar page */
  parent: { to: string; label: string; breadcrumbLabel: string };

}

const SITE = "https://avocatpenalbucuresti.ro";

/** Collects every internal service path already linked in the page body or FAQ. */
function collectContextualPaths(data: SubServicePageData): string[] {
  const paths = new Set<string>();

  const fromParagraphs = (
    paragraphs?: (string | { text: string; bold?: boolean; to?: string }[])[]
  ) => {
    paragraphs?.forEach((paragraph) => {
      if (typeof paragraph === "string") return;
      paragraph.forEach((segment) => {
        if (segment.to) paths.add(segment.to);
      });
    });
  };

  data.sections.forEach((section) => {
    fromParagraphs(section.paragraphs);
    fromParagraphs(section.paragraphsAfterBullets);
    section.links?.forEach((link) => {
      if (link.to) paths.add(link.to);
    });
    section.subsections?.forEach((sub) => fromParagraphs(sub.paragraphs));
  });

  const hrefPattern = /href="((?:\/en)?\/serv[^"]+)"/g;
  data.faq.forEach((item) => {
    for (const match of item.a.matchAll(hrefPattern)) paths.add(match[1]);
  });

  return [...paths];
}




export default function SubServicePage({ data }: { data: SubServicePageData }) {
  const isEn = data.lang === "en";
  const callLabel = isEn ? "Call now" : "Sună-mă acum";
  const heroCallLabel = isEn ? "Call now!" : "Sună-mă acum!";
  const pageUrl = SITE + data.path;
  const contextualPaths = collectContextualPaths(data);



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
          {
            "@type": "ListItem",
            position: 3,
            name: data.parent.breadcrumbLabel,
            item: SITE + data.parent.to,
          },
          { "@type": "ListItem", position: 4, name: data.breadcrumbLabel, item: pageUrl },
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

  const SectionContent = ({
    paragraphs,
    bullets,
    links,
    callout,
    calloutClassName,
    calloutCta,
    paragraphsAfterBullets,
    calloutAfterBullets,
    calloutAfterBulletsClassName,
    calloutAfterBulletsCta,
    cta,
    ctaIcon = true,
    ctaWhatsApp,
    ctaWhatsAppLabel,
  }: {
    paragraphs?: (string | { text: string; bold?: boolean; to?: string }[])[];
    bullets?: (string | { bold: string; rest: string })[];
    links?: { label: string; to?: string }[];
    callout?: string;
    calloutClassName?: string;
    calloutCta?: string;
    paragraphsAfterBullets?: (string | { text: string; bold?: boolean; to?: string }[])[];
    calloutAfterBullets?: string;
    calloutAfterBulletsClassName?: string;
    calloutAfterBulletsCta?: string;
    cta?: string;
    ctaIcon?: boolean;
    ctaWhatsApp?: boolean;
    ctaWhatsAppLabel?: string;
  }) => (
    <>
      {paragraphs?.map((paragraph, pIdx) => (
        <p key={pIdx}>
          {typeof paragraph === "string" ? (
            paragraph
          ) : (
            paragraph.map((segment, sIdx) =>
              segment.to ? (
                <Link key={sIdx} to={segment.to} className="text-primary underline hover:text-primary/80">
                  {segment.text}
                </Link>
              ) : segment.bold ? (
                <strong key={sIdx}>{segment.text}</strong>
              ) : (
                <span key={sIdx}>{segment.text}</span>
              )
            )
          )}
        </p>
      ))}
      {callout && (
        <div className={`border-l-4 border-primary bg-primary/10 px-4 py-3 text-foreground rounded-r-md flex flex-wrap items-center gap-3 ${calloutClassName ?? ""}`}>
          <span>{callout}</span>
          {calloutCta && (
            <Button asChild variant="warning" size="sm" aria-label={`${calloutCta} - ${data.serviceName}`}>
              <a href="tel:+40316320183">
                <Phone className="mr-1 h-3.5 w-3.5" /> {calloutCta}
              </a>
            </Button>
          )}
        </div>
      )}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc pl-6 space-y-2">
          {bullets.map((bullet, idx) => (
            <li key={idx}>
              {typeof bullet === "string" ? (
                bullet
              ) : (
                <>
                  <span className="font-semibold text-foreground">{bullet.bold}</span>{" "}
                  {bullet.rest}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      {paragraphsAfterBullets?.map((paragraph, pIdx) => (
        <p key={`after-${pIdx}`}>
          {typeof paragraph === "string" ? (
            paragraph
          ) : (
            paragraph.map((segment, sIdx) =>
              segment.to ? (
                <Link key={sIdx} to={segment.to} className="text-primary underline hover:text-primary/80">
                  {segment.text}
                </Link>
              ) : segment.bold ? (
                <strong key={sIdx}>{segment.text}</strong>
              ) : (
                <span key={sIdx}>{segment.text}</span>
              )
            )
          )}
        </p>
      ))}
      {calloutAfterBullets && (
        <div className={`border-l-4 border-primary bg-primary/10 px-4 py-3 text-foreground rounded-r-md flex flex-wrap items-center gap-3 ${calloutAfterBulletsClassName ?? ""}`}>
          <span>{calloutAfterBullets}</span>
          {calloutAfterBulletsCta && (
            <Button asChild variant="warning" size="sm" aria-label={`${calloutAfterBulletsCta} - ${data.serviceName}`}>
              <a href="tel:+40316320183">
                <Phone className="mr-1 h-3.5 w-3.5" /> {calloutAfterBulletsCta}
              </a>
            </Button>
          )}
        </div>
      )}
      {links && links.length > 0 && (
        <ul className="space-y-2">
          {links.map((link) => (
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
      {(cta || ctaWhatsApp) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {cta && (
            <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${cta} - ${data.serviceName}`}>
              <a href="tel:+40316320183">
                {ctaIcon && <Phone className="mr-2 h-4 w-4" />} {cta}
              </a>
            </Button>
          )}
          {ctaWhatsApp && (
            <WhatsAppDocsCta lang={data.lang} variant="green" label={ctaWhatsAppLabel} />
          )}
        </div>
      )}
    </>
  );

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <div className="flex flex-col">
        <Breadcrumb className="order-last mt-5 mb-5 md:order-first md:mt-0 md:mb-4">
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
              <BreadcrumbLink href={data.parent.to}>{data.parent.breadcrumbLabel}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{data.breadcrumbLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

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

        <LawyerBioBlock path={data.path} lang={data.lang} />
      </div>


      {data.sections.map((section, sectionIndex) => (
        <Card className={`${sectionIndex === 0 ? "mt-12 md:mt-14" : "mt-8"} border-accent ${section.cardClassName ?? ""}`} key={section.h2}>

          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">{section.h2}</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <SectionContent
              paragraphs={section.paragraphs}
              bullets={section.bullets}
              links={section.links}
              callout={section.callout}
              calloutClassName={section.calloutClassName}
              calloutCta={section.calloutCta}
              paragraphsAfterBullets={section.paragraphsAfterBullets}
              calloutAfterBullets={section.calloutAfterBullets}
              calloutAfterBulletsClassName={section.calloutAfterBulletsClassName}
              calloutAfterBulletsCta={section.calloutAfterBulletsCta}
              cta={section.cta}
              ctaIcon={section.ctaIcon}
              ctaWhatsApp={section.ctaWhatsApp}
              ctaWhatsAppLabel={section.ctaWhatsAppLabel}
            />
            {section.subsections && section.subsections.length > 0 && (
              <div className="space-y-6 pt-2">
                {section.subsections.map((sub) => (
                  <div key={sub.h3} className="space-y-3">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight">{sub.h3}</h3>
                    <SectionContent
                      paragraphs={sub.paragraphs}
                      bullets={sub.bullets}
                      callout={sub.callout}
                      calloutClassName={sub.calloutClassName}
                      calloutCta={sub.calloutCta}
                      cta={sub.cta}
                      ctaIcon={sub.ctaIcon}
                      ctaWhatsApp={sub.ctaWhatsApp}
                      ctaWhatsAppLabel={sub.ctaWhatsAppLabel}
                    />
                  </div>
                ))}
              </div>
            )}
            {(section.calloutAfterSubsections || section.ctaAfterSubsections) && (
              <SectionContent
                calloutAfterBullets={section.calloutAfterSubsections}
                cta={section.ctaAfterSubsections}
                ctaIcon={false}
              />
            )}
          </CardContent>
        </Card>
      ))}

      <ServiceFaq
        title={isEn ? "Frequently asked questions" : "Întrebări frecvente"}
        items={data.faq.map((item) => ({ q: item.q, a: item.a }))}
        ordered
      />

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
            {data.contactWhatsApp ? (
              <WhatsAppDocsCta
                lang={data.lang}
                variant="green"
                label={isEn ? "WhatsApp - send documents" : "WhatsApp - trimite actele"}
              />
            ) : (
              <Button asChild variant="outline">
                <a href="mailto:contact@avocatpenalbucuresti.ro">{isEn ? "Send email" : "Trimite email"}</a>
              </Button>
            )}
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

      <RelatedServices current={data.path} lang={data.lang} exclude={contextualPaths} />
    </section>
  );
}
