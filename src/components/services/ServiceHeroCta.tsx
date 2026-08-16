import { Button } from "@/components/ui/button";
import { HERO_CTA_CLASS } from "@/lib/cta";

interface ServiceHeroCtaProps {
  lang: "ro" | "en";
  /** @deprecated kept for backward compatibility; visible label now includes the phone number */
  ariaLabel?: string;
}

export function ServiceHeroCta({ lang, ariaLabel: _ariaLabel }: ServiceHeroCtaProps) {
  const label =
    lang === "en"
      ? "☎ Call now - 031 632 01 83"
      : "☎ Sună-mă acum - 031 632 01 83";
  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          asChild
          variant="premium"
          size="lg"
          className={HERO_CTA_CLASS}
          aria-label={label}
        >
          <a href="tel:+40316320183">{label}</a>
        </Button>
      </div>

      <p className="mt-3 text-base font-semibold text-foreground">
        {lang === "en" ? "I personally handle your case" : "Mă ocup personal de dosar"}
      </p>

      <p className="mt-2 text-sm text-foreground">
        {lang === "en" ? (
          <>
            5.0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> from 28 Google reviews
          </>
        ) : (
          <>
            5,0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> din 28 de recenzii Google
          </>
        )}
      </p>
    </>
  );
}
