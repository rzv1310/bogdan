import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

interface ServiceHeroCtaProps {
  lang: "ro" | "en";
  ariaLabel?: string;
}

export function ServiceHeroCta({ lang, ariaLabel }: ServiceHeroCtaProps) {
  const label = lang === "en" ? "Call now!" : "Sună-mă acum!";
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button
        asChild
        variant="premium"
        size="lg"
        className={`${CTA_CLASS} h-14 px-6 text-base md:h-11 md:px-8 md:text-sm`}
        aria-label={ariaLabel || label}
      >
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-5 w-5 md:h-4 md:w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}
