import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { roServiceGroups, enServiceGroups } from "@/lib/serviceGroups";

interface ServiceSubServicesProps {
  /** Path of the current pillar page, e.g. "/servicii/urmarire-penala" */
  path: string;
  lang?: "ro" | "en";
}

const ITEM_CLASS = "flex items-start gap-2 text-base leading-snug";

const ServiceSubServices = ({ path, lang = "ro" }: ServiceSubServicesProps) => {
  const groups = lang === "en" ? enServiceGroups : roServiceGroups;
  const card = groups.flatMap((g) => g.cards).find((c) => c.to === path);
  if (!card || card.subServices.length === 0) return null;

  return (
    <ul className="mt-8 space-y-3">
      {card.subServices.map((sub) =>
        sub.to ? (
          <li key={sub.label} className={ITEM_CLASS}>
            <Link
              to={sub.to}
              className="group inline-flex items-start gap-2 text-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
            >
              <span>{sub.label}</span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ) : (
          <li key={sub.label} className={`${ITEM_CLASS} text-muted-foreground`}>
            <span>{sub.label}</span>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-50" aria-hidden="true" />
          </li>
        )
      )}
    </ul>
  );
};

export default ServiceSubServices;
