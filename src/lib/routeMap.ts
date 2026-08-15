import { RO_TO_EN } from "../../scripts/langPairs.mjs";

// The homepage pair is handled by the fallbacks below, so it is excluded here
// to keep the previous behaviour of the language switcher.
export const roToEn: Record<string, string> = Object.fromEntries(
  Object.entries(RO_TO_EN as Record<string, string>).filter(([ro]) => ro !== "/")
);


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
