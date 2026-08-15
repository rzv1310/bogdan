import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicesQuickLinksProps {
  lang?: "ro" | "en";
  className?: string;
}


const linksRo = [
  { to: "/servicii/urmarire-penala", label: "Avocat urmărire penală" },
  { to: "/servicii/masuri-preventive", label: "Avocat măsuri preventive (reținere, arest)" },
  { to: "/servicii/criminalitate-economica", label: "Avocat infracțiuni economice" },
  { to: "/servicii/infractiuni-contra-persoanei", label: "Avocat infracțiuni contra persoanei" },
  { to: "/servicii/reprezentarea-victimelor-in-procese-penale", label: "Reprezentarea victimelor în procese penale" },
  { to: "/calculator-despagubiri", label: "Calculator despăgubiri" },
  { to: "/despre-mine", label: "Despre mine - av. Bogdan Lamatic" },
  { to: "/blog", label: "Blog - articole de drept penal" },
  { to: "/contact", label: "Contact - programează o evaluare" },
];

const linksEn = [
  { to: "/en/services/financial-crime", label: "Economic crime defense" },
  { to: "/en/services/corruption-and-public-office-offenses", label: "Corruption and public office offenses" },
  { to: "/en/services/money-laundering-and-asset-concealment", label: "Money laundering and asset concealment" },
  { to: "/en/services/crypto-asset-investigations", label: "Crypto asset investigations" },
  { to: "/en/services/victim-representation-in-criminal-cases", label: "Representation of victims in criminal proceedings" },
  { to: "/en/about", label: "About attorney Bogdan Lamatic" },
  { to: "/en/blog", label: "Blog - criminal law articles" },
  { to: "/en/contact", label: "Contact - book an assessment" },
];

const ServicesQuickLinks = ({ lang = "ro", className = "" }: ServicesQuickLinksProps) => {
  const { pathname } = useLocation();
  const currentPath = pathname.replace(/\/$/, "") || "/";
  const links = (lang === "en" ? linksEn : linksRo).filter(
    (link) => link.to !== currentPath
  );

  return (

    <nav
      aria-label={lang === "en" ? "Useful pages" : "Pagini utile"}
      className={`mt-10 rounded-lg border border-border bg-muted/30 p-6 ${className}`}
    >
      <h2 className="text-xl font-medium">
        {lang === "en" ? "Useful pages" : "Pagini utile"}
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="group inline-flex items-start gap-2 text-base text-primary underline underline-offset-2"
            >
              <span>{link.label}</span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ServicesQuickLinks;
