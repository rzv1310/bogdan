interface GoogleReviewStarsProps {
  lang: "ro" | "en";
  className?: string;
}

export default function GoogleReviewStars({ lang, className = "" }: GoogleReviewStarsProps) {
  return (
    <p className={`text-sm text-foreground ${className}`}>
      {lang === "en" ? (
        <>
          5.0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> from 28 Google reviews
        </>
      ) : (
        <>
          5,0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> din 28 de recenzii Google
        </>
      )}
    </p>
  );
}
