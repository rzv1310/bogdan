import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogEn() {
  useSEO({
    title: "Blog | Attorney Bogdan Lamatic",
    description: "Legal articles and updates published by attorney Bogdan Lamatic.",
    alternates: { en: "/en/blog", ro: "/blog" },
    locale: "en_US",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-2xl font-semibold mb-2">Blog</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/en">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article>
          <Card className="transition-all hover:shadow-lg border-transparent bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))] text-hero-foreground hover-scale">
            <CardHeader>
              <CardTitle>Compensation calculator</CardTitle>
              <CardDescription className="text-hero-foreground/90">Quick tool to estimate compensation.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/calculator-despagubiri" aria-label="Open compensation calculator">
                <Button variant="hero" size="sm" className="border-hero-foreground/20 bg-hero-foreground/10 text-hero-foreground hover:bg-hero-foreground/20">Open</Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
    </section>
  );
}
