/**
 * Single source of truth for the indexable routes.
 * Used by scripts/prerender.mjs (static HTML) and scripts/generate-sitemap.mjs.
 */
export const SITE_ORIGIN = "https://avocatpenalbucuresti.ro";

export const ROUTES = [
  "/",
  "/despre-mine",
  "/blog",
  "/calculator-despagubiri",
  "/contact",
  "/servicii/urmarire-penala",
  "/servicii/masuri-preventive",
  "/servicii/criminalitate-economica",
  "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
  "/servicii/investigatii-privind-activele-cripto",
  "/servicii/cauze-penale-privind-droguri",
  "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
  "/servicii/neglijenta-profesionala-si-malpraxis",
  "/servicii/infractiuni-rutiere-cu-victime",
  "/servicii/raspundere-penala-incidente-locul-de-munca",
  "/servicii/reprezentarea-victimelor-in-procese-penale",
  "/harta-site",
  "/termeni-si-conditii",
  "/gdpr",
  "/politica-cookies",
  "/en",
  "/en/about",
  "/en/blog",
  "/en/contact",
  "/en/terms-and-conditions",
  "/en/gdpr",
  "/en/cookie-policy",
  "/en/services/financial-crime",
  "/en/services/corruption-and-public-office-offenses",
  "/en/services/crypto-asset-investigations",
  "/en/services/drug-offenses",
  "/en/services/money-laundering-and-asset-concealment",
  "/en/services/professional-negligence-and-malpractice",
  "/en/services/road-traffic-offenses",
  "/en/services/workplace-criminal-liability",
  "/en/services/victim-representation-in-criminal-cases",
];

/** Priority hints for the sitemap. */
export function priorityFor(route) {
  if (route === "/" || route === "/en") return "1.0";
  if (route.startsWith("/servicii/") || route.startsWith("/en/services/")) return "0.9";
  if (["/despre-mine", "/contact", "/en/about", "/en/contact"].includes(route)) return "0.8";
  if (["/termeni-si-conditii", "/gdpr", "/politica-cookies", "/en/terms-and-conditions", "/en/gdpr", "/en/cookie-policy", "/harta-site"].includes(route))
    return "0.3";
  return "0.6";
}
