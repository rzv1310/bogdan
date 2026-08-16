interface WhatsAppDocsCtaProps {
  lang?: "ro" | "en";
  className?: string;
}

const WHATSAPP_URL = "https://wa.me/40745506443";

/** Secondary CTA used right after explaining which documents are useful. */
export default function WhatsAppDocsCta({ lang = "ro", className = "" }: WhatsAppDocsCtaProps) {
  const label = lang === "en" ? "Send documents on WhatsApp" : "Trimite actele pe WhatsApp";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center gap-2 rounded-md border border-accent bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[#25D366]" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.433 5.168L2 22l4.962-1.394A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.947 7.947 0 01-4.065-1.117l-.292-.174-2.946.829.79-2.848-.187-.302A7.948 7.948 0 014 12a8 8 0 1116 0 8 8 0 01-8 8zm4.472-5.618c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-1.803-.242-.187-.506-.203-.67-.207-.267 0-.569.029-.871.173.302-.144.52-.347.67-.545z" />
      </svg>
      {label}
    </a>
  );
}
