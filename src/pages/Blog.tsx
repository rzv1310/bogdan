import { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Avocat Bogdan Lamatic";
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-2xl font-semibold mb-2">Blog</h1>
      <Breadcrumb>
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

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article>
          <Card className="transition-all hover:shadow-lg border-transparent bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))] text-hero-foreground hover-scale">
            <CardHeader>
              <CardTitle>Calculator despăgubiri</CardTitle>
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
    </section>
  );
}
