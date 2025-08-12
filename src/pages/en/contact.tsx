import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function ContactEn() {
  useSEO({
    title: "Contact - Attorney Bogdan Lamatic",
    description: "Get in touch for criminal defense and compensation evaluation.",
    alternates: { en: "/en/contact", ro: "/contact", xDefault: "/" },
    locale: "en_US",
    canonical: "/en/contact",
  });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en`
                    : "/en",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en/contact`
                    : "/en/contact",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact - Attorney Bogdan Lamatic",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en/contact`
                : "/en/contact",
            inLanguage: "en-US",
          }),
        }}
      />
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contact - Attorney Bogdan Lamatic</h1>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/en">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="text-muted-foreground max-w-3xl">Need urgent help or a case assessment? Call me directly.</p>
        <div className="mt-4">
          <a href="tel:+40745506443" aria-label="Call now">
            <Button variant="premium" size="lg" className="border border-hero-foreground">
              <Phone /> Call now: +40 745 506 443
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
