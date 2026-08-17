import { Button } from "@/components/ui/button";
import { HERO_CTA_CLASS } from "@/lib/cta";
import GoogleReviewStars from "./GoogleReviewStars";

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

      <GoogleReviewStars lang={lang} className="mt-2" />
    </>
  );
}
