export const roToEn: Record<string, string> = {
  "/contact": "/en/contact",
  "/termeni-si-conditii": "/en/terms-and-conditions",
  "/servicii/criminalitate-economica": "/en/services/financial-crime",
  "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice": "/en/services/corruption-and-public-office-offenses",
  "/servicii/investigatii-privind-activele-cripto": "/en/services/crypto-asset-investigations",
  "/servicii/cauze-penale-privind-droguri": "/en/services/drug-offenses",
  "/servicii/spalare-de-bani-si-ascundere-de-bunuri": "/en/services/money-laundering-and-asset-concealment",
  "/servicii/neglijenta-profesionala-si-malpraxis": "/en/services/professional-negligence-and-malpractice",
  "/servicii/infractiuni-rutiere-cu-victime": "/en/services/road-traffic-offenses",
  "/servicii/raspundere-penala-incidente-locul-de-munca": "/en/services/workplace-criminal-liability",
  "/servicii/reprezentarea-victimelor-in-procese-penale": "/en/services/victim-representation-in-criminal-cases",
};

export const enToRo: Record<string, string> = Object.fromEntries(
  Object.entries(roToEn).map(([ro, en]) => [en, ro])
);

export function mapPathToLang(pathname: string, target: "ro" | "en"): string {
  if (target === "en") {
    return roToEn[pathname] || (pathname.startsWith("/en") ? pathname : "/en");
  } else {
    // to RO
    return enToRo[pathname] || (pathname.startsWith("/en") ? pathname.replace(/^\/en/, "") || "/" : pathname);
  }
}
