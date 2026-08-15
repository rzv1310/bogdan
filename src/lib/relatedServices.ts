import { services, servicesEn } from "./services";
import { roToEn } from "./routeMap";

/** Related-service map (RO paths). EN equivalents are derived via routeMap. */
export const relatedServices: Record<string, string[]> = {
  "/servicii/urmarire-penala": [
    "/servicii/audiere-politie-parchet",
    "/servicii/perchezitie-domiciliara",
    "/servicii/perchezitie-informatica",
    "/servicii/avocat-diicot",
    "/servicii/avocat-dna",
    "/servicii/masuri-preventive",
    "/servicii/cauze-penale-privind-droguri",
    "/servicii/criminalitate-economica",
  ],
  "/servicii/masuri-preventive": [
    "/servicii/urmarire-penala",
    "/servicii/cauze-penale-privind-droguri",
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
  ],
  "/servicii/infractiuni-contra-persoanei": [
    "/servicii/infractiuni-rutiere-cu-victime",
    "/servicii/reprezentarea-victimelor-in-procese-penale",
    "/servicii/masuri-preventive",
      "/calculator-despagubiri",
  ],
  "/servicii/criminalitate-economica": [
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
    "/servicii/investigatii-privind-activele-cripto",
  ],
  "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice": [
    "/servicii/criminalitate-economica",
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/urmarire-penala",
  ],
  "/servicii/investigatii-privind-activele-cripto": [
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/criminalitate-economica",
    "/servicii/urmarire-penala",
  ],
  "/servicii/cauze-penale-privind-droguri": [
    "/servicii/masuri-preventive",
    "/servicii/urmarire-penala",
    "/servicii/infractiuni-contra-persoanei",
  ],
  "/servicii/spalare-de-bani-si-ascundere-de-bunuri": [
    "/servicii/criminalitate-economica",
    "/servicii/investigatii-privind-activele-cripto",
    "/servicii/masuri-preventive",
      "/servicii/cauze-penale-privind-droguri",
  ],
  "/servicii/neglijenta-profesionala-si-malpraxis": [
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/raspundere-penala-incidente-locul-de-munca",
    "/servicii/reprezentarea-victimelor-in-procese-penale",
      "/calculator-despagubiri",
  ],
  "/servicii/infractiuni-rutiere-cu-victime": [
    "/servicii/reprezentarea-victimelor-in-procese-penale",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/masuri-preventive",
      "/calculator-despagubiri",
  ],
  "/servicii/raspundere-penala-incidente-locul-de-munca": [
    "/servicii/neglijenta-profesionala-si-malpraxis",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/reprezentarea-victimelor-in-procese-penale",
      "/calculator-despagubiri",
  ],
  "/servicii/audiere-politie-parchet": [
    "/servicii/urmarire-penala",
    "/servicii/perchezitie-domiciliara",
    "/servicii/perchezitie-informatica",
    "/servicii/avocat-diicot",
    "/servicii/avocat-dna",
    "/servicii/masuri-preventive",
  ],
  "/servicii/perchezitie-domiciliara": [
    "/servicii/urmarire-penala",
    "/servicii/audiere-politie-parchet",
    "/servicii/perchezitie-informatica",
    "/servicii/avocat-diicot",
    "/servicii/avocat-dna",
    "/servicii/masuri-preventive",
  ],
  "/servicii/perchezitie-informatica": [
    "/servicii/urmarire-penala",
    "/servicii/audiere-politie-parchet",
    "/servicii/perchezitie-domiciliara",
    "/servicii/avocat-diicot",
    "/servicii/avocat-dna",
    "/servicii/masuri-preventive",
  ],
  "/servicii/avocat-diicot": [
    "/servicii/urmarire-penala",
    "/servicii/audiere-politie-parchet",
    "/servicii/perchezitie-domiciliara",
    "/servicii/perchezitie-informatica",
    "/servicii/avocat-dna",
    "/servicii/masuri-preventive",
  ],
  "/servicii/avocat-dna": [
    "/servicii/urmarire-penala",
    "/servicii/audiere-politie-parchet",
    "/servicii/perchezitie-domiciliara",
    "/servicii/perchezitie-informatica",
    "/servicii/avocat-diicot",
    "/servicii/masuri-preventive",
  ],
  "/servicii/reprezentarea-victimelor-in-procese-penale": [
    "/calculator-despagubiri",
    "/servicii/infractiuni-rutiere-cu-victime",
    "/servicii/infractiuni-contra-persoanei",
  ],
};

const extraLabelsRo: Record<string, string> = {
  "/servicii/audiere-politie-parchet": "Audiere Poliție și Parchet",
  "/servicii/perchezitie-domiciliara": "Percheziție domiciliară",
  "/servicii/perchezitie-informatica": "Percheziție informatică",
  "/servicii/avocat-diicot": "Avocat DIICOT",
  "/servicii/avocat-dna": "Avocat DNA",
  "/calculator-despagubiri": "Calculator despăgubiri",
  "/despre-mine": "Despre mine",
  "/contact": "Contact",
};

const extraLabelsEn: Record<string, string> = {
  "/en/services/police-prosecutor-questioning": "Police and prosecutor questioning",
  "/en/services/home-search": "Home search",
  "/en/services/computer-search": "Computer search",
  "/en/services/diicot-lawyer": "DIICOT lawyer",
  "/en/services/dna-lawyer": "DNA lawyer",
  "/en/compensation-calculator": "Compensation calculator",
  "/en/about": "About me",
  "/en/contact": "Contact",
};

export type RelatedLink = { to: string; label: string };

function labelRo(path: string): string | undefined {
  return services.find((s) => s.to === path)?.label ?? extraLabelsRo[path];
}

function labelEn(path: string): string | undefined {
  return servicesEn.find((s) => s.to === path)?.label ?? extraLabelsEn[path];
}

/**
 * Returns related internal links for a given page path.
 * Accepts either a RO service path or an EN service path.
 */
export function getRelatedServices(currentPath: string, lang: "ro" | "en" = "ro"): RelatedLink[] {
  const roPath = currentPath.startsWith("/en")
    ? Object.entries(roToEn).find(([, en]) => en === currentPath)?.[0] ?? currentPath
    : currentPath;

  const targets = relatedServices[roPath] ?? [];

  return targets
    .map((target) => {
      if (lang === "en") {
        
        const enTarget = roToEn[target] ?? target;
        const label = labelEn(enTarget) ?? labelEn(target);
        return label ? { to: enTarget, label } : null;
      }
      const label = labelRo(target);
      return label ? { to: target, label } : null;
    })
    .filter((x): x is RelatedLink => Boolean(x));
}
