import { Heart, MoreVertical } from "lucide-react";

interface GoogleReviewCardProps {
  lang?: "ro" | "en";
  className?: string;
}

const REVIEW_TEXT =
  "Dosar penal complicat, cu acuzații serioase. Domnul avocat Bogdan Lamatic a fost excepțional: extrem de profesionist, strategie foarte bună, calm și pregătit maxim. A identificat rapid punctele slabe ale dosarului și a gestionat totul cu fermitate. Disponibil oricând, explică totul clar și realist, fără promisiuni false. Rezultatul a fost mult peste ce speram.";

const AUTHOR = "Robert Boloaja";

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.44a5.5 5.5 0 01-2.39 3.6v3h3.86c2.26-2.08 3.61-5.15 3.61-8.78z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.86-3a7.2 7.2 0 01-4.09 1.17c-3.14 0-5.8-2.12-6.75-4.98H1.28v3.1A12 12 0 0012 24z"
      />
      <path fill="#FBBC05" d="M5.25 14.28a7.2 7.2 0 010-4.57V6.6H1.28a12 12 0 000 10.79l3.97-3.11z" />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.23 0 12 0A12 12 0 001.28 6.6l3.97 3.11C6.2 6.86 8.86 4.75 12 4.75z"
      />
    </svg>
  );
}

/** Single social-proof review, styled like a Google Business Profile review. */
export default function GoogleReviewCard({ lang = "ro", className = "" }: GoogleReviewCardProps) {
  const badge = lang === "en" ? "Google review" : "Recenzie Google";
  const reviewCount = lang === "en" ? "3 reviews" : "3 recenzii";
  const timestamp = lang === "en" ? "2 months ago" : "acum 2 luni";

  return (
    <figure className={`mt-12 md:mt-16 rounded-lg border border-slate-700 bg-slate-900 p-5 shadow-sm ${className}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-base font-semibold text-muted-foreground"
            aria-hidden="true"
          >
            R
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-100">{AUTHOR}</p>
            <p className="text-xs text-slate-400">{reviewCount}</p>
          </div>
        </div>
        <MoreVertical className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-sm text-yellow-400" aria-hidden="true">
          ★★★★★
        </span>
        <span className="text-xs text-slate-400">{timestamp}</span>
      </div>

      <blockquote className="mt-3 text-base leading-relaxed text-slate-200">{REVIEW_TEXT}</blockquote>

      <div className="mt-4 flex items-center justify-between">
        <Heart className="h-5 w-5 text-red-500" fill="currentColor" aria-hidden="true" />
        <span className="inline-flex items-center gap-1 text-xs text-slate-300">
          <GoogleGlyph />
          {badge}
        </span>
      </div>

      <figcaption className="sr-only">
        {AUTHOR} - {badge}
      </figcaption>
    </figure>
  );
}

