import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SubServiceLinkButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

/** Secondary CTA: transparent background, accent (gold) border only. */
export default function SubServiceLinkButton({ to, children, className = "" }: SubServiceLinkButtonProps) {
  return (
    <Link
      to={to}
      className={`mt-1 inline-flex items-center gap-2 rounded-md border border-accent bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />
    </Link>
  );
}
