const HEADSHOTS = [
  "/lovable-uploads/avocat_bogdan_lamatic_headshot.webp",
  "/lovable-uploads/avocat_bogdan_lamatic_headshot_2.webp",
];

function pickHeadshot(path: string) {
  const slug = path.replace(/\/+$/, "").split("/").pop() ?? "";
  let sum = 0;
  for (const char of slug) sum += char.charCodeAt(0);
  return HEADSHOTS[sum % HEADSHOTS.length];
}

interface ServiceAuthorBioProps {
  lang: "ro" | "en";
  path: string;
}

export function ServiceAuthorBio({ lang, path }: ServiceAuthorBioProps) {
  const isEn = lang === "en";
  const headshotSrc = pickHeadshot(path);

  return (
    <div className="mt-6 flex items-center gap-4">
      <img
        src={headshotSrc}
        alt={
          isEn
            ? "Bogdan Lamatic, criminal defence lawyer in Bucharest"
            : "Avocat Bogdan Lamatic, drept penal București"
        }
        width={72}
        height={72}
        loading="lazy"
        decoding="async"
        className="h-[72px] w-[72px] rounded-full object-cover border border-accent"
      />
      <div className="text-sm leading-relaxed">
        <span className="block text-base font-semibold text-foreground">
          {isEn ? "Lawyer Bogdan Lamatic" : "Avocat Bogdan Lamatic"}
        </span>
        <span className="block text-foreground">
          {isEn ? "Bucharest Bar · 18+ years of experience" : "Baroul București · 18+ ani experiență"}
        </span>
        <span className="block text-foreground">Legal 500 · White-Collar Crime</span>
      </div>
    </div>
  );
}
