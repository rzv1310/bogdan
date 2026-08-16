import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getRelatedServices } from "@/lib/relatedServices";

interface RelatedServicesProps {
  /** Current page path, e.g. "/servicii/masuri-preventive" or "/en/services/drug-offenses" */
  current: string;
  lang?: "ro" | "en";
  /** Paths already linked contextually on the page; they are not repeated here. */
  exclude?: string[];
}

const RelatedServices = ({ current, lang = "ro", exclude }: RelatedServicesProps) => {
  const links = getRelatedServices(current, lang, exclude);
  if (links.length === 0) return null;


  return (
    <Card className="mt-8 border-accent">
      <CardHeader>
        <h2 className="text-2xl font-semibold leading-none tracking-tight">
          {lang === "en" ? "Related services" : "Servicii conexe"}
        </h2>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3 sm:grid-cols-3">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="group flex h-full items-start gap-2 rounded-md border border-border bg-card p-4 text-base leading-snug text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <span>{link.label}</span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RelatedServices;
