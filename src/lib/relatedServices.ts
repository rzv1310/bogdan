import { services, servicesEn } from "./services";
import { roToEn } from "./routeMap";

/** Related-service map (RO paths). EN equivalents are derived via routeMap. */
export const relatedServices: Record<string, string[]> = {
  "/servicii/urmarire-penala": [
    "/servicii/masuri-preventive",
    "/servicii/criminalitate-economica",
    "/servicii/cauze-penale-privind-droguri",
    "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
  ],
  "/servicii/masuri-preventive": [
    "/servicii/urmarire-penala",
    "/servicii/cauze-penale-privind-droguri",
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/criminalitate-economica",
  ],
  "/servicii/criminalitate-economica": [
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
    "/servicii/investigatii-privind-activele-cripto",
    "/servicii/urmarire-penala",
  ],
  "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice": [
    "/servicii/criminalitate-economica",
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/urmarire-penala",
    "/servicii/investigatii-privind-activele-cripto",
  ],
  "/servicii/spalare-de-bani-si-ascundere-de-bunuri": [
    "/servicii/criminalitate-economica",
    "/servicii/investigatii-privind-activele-cripto",
    "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
    "/servicii/masuri-preventive",
  ],
  "/servicii/investigatii-privind-activele-cripto": [
    "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
    "/servicii/criminalitate-economica",
    "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
    "/servicii/urmarire-penala",
  ],
  "/servicii/cauze-penale-privind-droguri": [
    "/servicii/masuri-preventive",
    "/servicii/urmarire-penala",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/criminalitate-economica",
  ],
  "/servicii/infractiuni-rutiere-cu-victime": [
    "/servicii/reprezentarea-victimelor-in-procese-penale",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/masuri-preventive",
    "/servicii/neglijenta-profesionala-si-malpraxis",
  ],
  "/servicii/infractiuni-contra-persoanei": [
    "/servicii/infractiuni-rutiere-cu-victime",
    "/servicii/reprezentarea-victimelor-in-procese-penale",
    "/servicii/masuri-preventive",
    "/servicii/neglijenta-profesionala-si-malpraxis",
  ],
  "/servicii/neglijenta-profesionala-si-malpraxis": [
    "/servicii/raspundere-penala-incidente-locul-de-munca",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/reprezentarea-victimelor-in-procese-penale",
    "/servicii/infractiuni-rutiere-cu-victime",
  ],
  "/servicii/raspundere-penala-incidente-locul-de-munca": [
    "/servicii/neglijenta-profesionala-si-malpraxis",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/reprezentarea-victimelor-in-procese-penale",
    "/servicii/infractiuni-rutiere-cu-victime",
  ],
  "/servicii/reprezentarea-victimelor-in-procese-penale": [
    "/servicii/infractiuni-rutiere-cu-victime",
    "/servicii/infractiuni-contra-persoanei",
    "/servicii/neglijenta-profesionala-si-malpraxis",
    "/servicii/raspundere-penala-incidente-locul-de-munca",
  ],
};

/**
 * Sub-service groups: parent pillar page -> its sub-service pages (RO paths).
 * For sub-service pages the related list is derived automatically as
 * parent page + sibling sub-services.
 */
export const subServiceGroups: Record<string, string[]> = {
  "/servicii/urmarire-penala": [
    "/servicii/audiere-politie-parchet",
    "/servicii/perchezitie-domiciliara",
    "/servicii/perchezitie-informatica",
    "/servicii/avocat-diicot",
    "/servicii/avocat-dna",
  ],
  "/servicii/masuri-preventive": [
    "/servicii/retinere-24-ore",
    "/servicii/arest-preventiv",
    "/servicii/control-judiciar",
    "/servicii/arest-la-domiciliu",
  ],
  "/servicii/criminalitate-economica": [
    "/servicii/evaziune-fiscala",
    "/servicii/inselaciune-frauda",
    "/servicii/delapidare",
    "/servicii/fals-si-uz-de-fals",
    "/servicii/bancruta-frauduloasa",
    "/servicii/frauda-informatica",
    "/servicii/fonduri-europene",
  ],
};


function subServiceTargets(roPath: string): string[] {
  for (const [parent, children] of Object.entries(subServiceGroups)) {
    if (children.includes(roPath)) {
      return [parent, ...children.filter((child) => child !== roPath)];
    }
  }
  return [];
}


const extraLabelsRo: Record<string, string> = {
  "/servicii/audiere-politie-parchet": "Audiere Poliție și Parchet",
  "/servicii/perchezitie-domiciliara": "Percheziție domiciliară",
  "/servicii/perchezitie-informatica": "Percheziție informatică",
  "/servicii/avocat-diicot": "Avocat DIICOT",
  "/servicii/avocat-dna": "Avocat DNA",
  "/servicii/retinere-24-ore": "Reținere 24 ore",
  "/servicii/arest-preventiv": "Arest preventiv",
  "/servicii/control-judiciar": "Control judiciar",
  "/servicii/arest-la-domiciliu": "Arest la domiciliu",
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
  "/en/services/police-custody-24-hours": "Police custody 24 hours",
  "/en/services/pre-trial-detention": "Pre-trial detention",
  "/en/services/judicial-control": "Judicial control",
  "/en/services/house-arrest": "House arrest",
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
 * `exclude` removes paths that are already linked contextually on the page.
 */
export function getRelatedServices(
  currentPath: string,
  lang: "ro" | "en" = "ro",
  exclude: string[] = []
): RelatedLink[] {
  const roPath = currentPath.startsWith("/en")
    ? Object.entries(roToEn).find(([, en]) => en === currentPath)?.[0] ?? currentPath
    : currentPath;

  const targets = relatedServices[roPath] ?? subServiceTargets(roPath);
  const excluded = new Set(exclude);

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
    .filter((x): x is RelatedLink => Boolean(x))
    .filter((link) => !excluded.has(link.to));
}

