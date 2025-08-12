import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function RoadTrafficEn() {
  useSEO({
    title: "Road Traffic Offenses | Defense & Victim representation",
    description: "DUIs, no license, leaving the scene; accidents with/without victims.",
    alternates: { en: "/en/services/road-traffic-offenses", ro: "/servicii/infractiuni-rutiere-cu-victime" },
    locale: "en_US",
  });
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Road traffic offenses</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/en">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-muted-foreground">Services</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Road traffic offenses</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6">
        <a href="tel:+40745506443" aria-label="Call now">
          <Button variant="premium" size="lg"><Phone /> Call now</Button>
        </a>
      </div>
    </section>
  );
}
