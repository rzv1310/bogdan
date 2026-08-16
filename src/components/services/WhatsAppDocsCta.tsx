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
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.433 5.168L2 22l4.962-1.394A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.947 7.947 0 01-4.065-1.117l-.292-.174-2.946.829.79-2.848-.187-.302A7.948 7.948 0 014 12a8 8 0 1116 0 8 8 0 01-8 8zm4.106-5.99c-.223-.111-1.32-.65-1.524-.725-.204-.075-.353-.111-.502.112-.148.223-.575.725-.705.873-.13.149-.26.167-.483.056-.223-.112-.941-.348-1.792-1.107-.663-.591-1.11-1.32-1.24-1.543-.13-.223-.014-.344.098-.455.1-.1.223-.26.335-.39.112-.13.149-.223.223-.372.075-.149.038-.279-.018-.39-.056-.112-.502-1.21-.688-1.353-.181-.14-.38-.152-.502-.156-.13 0-.279.019-.427.019-.149 0-.39.055-.594.278-.204.223-.78.762-.78 1.858 0 1.097.799 2.157.91 2.306.112.148 1.57 2.4 3.803 3.28 1.86.734 2.238.588 2.641.55.404-.036 1.302-.53 1.487-1.042.186-.512.186-.95.13-1.042-.055-.093-.204-.148-.427-.26z" />
      </svg>
      {label}
    </a>
  );
}
