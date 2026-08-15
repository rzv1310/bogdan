import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import ServicesQuickLinks from "@/components/ServicesQuickLinks";
export default function Blog() {
  useSEO({
    keywords: "blog drept penal, articole juridice penale, noutati drept penal",
    schemas: [{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://avocatpenalbucuresti.ro/blog" }] }],
    canonical: "/blog",
    alternates: { ro: "/blog", en: "/en/blog", xDefault: "/blog" },
    locale: "ro_RO",
    title: "Blog | Avocat Bogdan Lamatic",
    description: "Articole și noutăți juridice publicate de avocat Bogdan Lamatic.",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-2">Blog</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article>
          <Card className="transition-all hover:shadow-lg border-transparent bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))] text-hero-foreground hover-scale">
            <CardHeader>
              <CardTitle as="h2">Calculator despăgubiri</CardTitle>
              <CardDescription className="text-hero-foreground/90">Instrument rapid pentru estimarea despăgubirilor.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/calculator-despagubiri" aria-label="Deschide calculatorul de despăgubiri">
                <Button variant="hero" size="sm" className="border-hero-foreground/20 bg-hero-foreground/10 text-hero-foreground hover:bg-hero-foreground/20">Deschide</Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
          <ServicesQuickLinks />
</section>
  );
}
