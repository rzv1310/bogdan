import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";



export default function Blog() {
  useSEO({
    title: "Blog | Avocat Bogdan Lamatic",
    description: "Articole și noutăți juridice publicate de avocat Bogdan Lamatic.",
  });

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
          <Card className="blog-card text-card-foreground">
            <span className="blog-card__ribbon" aria-hidden="true"></span>
            <CardHeader className="text-right">
              <CardTitle className="text-right">Calculator despăgubiri</CardTitle>
              <CardDescription className="text-right text-hero-foreground/90">Instrument rapid pentru estimarea despăgubirilor.</CardDescription>
            </CardHeader>
          </Card>
        </article>
      </div>
    </section>
  );
}
