/**
 * Shared CTA button styling. Use this for primary call-to-action buttons
 * across service pages. It is mobile-first: full width, wrapped text and
 * smaller font on small screens; compact horizontal layout on desktop.
 */
export const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none whitespace-normal h-auto min-h-11 w-full py-2.5 text-sm md:w-auto md:whitespace-nowrap md:h-11 md:py-0 md:text-base";

/**
 * Hero CTA button styling. More prominent than the standard CTA on mobile
 * while keeping the same visual treatment. Text is allowed to wrap so the
 * longer hero label ("☎ Sună-mă acum - +40 745 506 443") remains readable.
 */
export const HERO_CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none whitespace-normal h-auto min-h-[52px] w-full py-2.5 text-base px-6 md:w-auto md:whitespace-nowrap md:min-h-[56px] md:py-0 md:px-8 md:text-lg";
