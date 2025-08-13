import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogCardFile3DProps {
  title: string
  description?: string
  to: string
  ctaLabel?: string
}

export function BlogCardFile3D({
  title,
  description,
  to,
  ctaLabel = "Deschide",
}: BlogCardFile3DProps) {
  const descId = React.useId()

  return (
    <article aria-labelledby={descId} className="animate-fade-in">
      <div className="group">
        {/* 3D file/folder card */}
        <Link
          to={to}
          aria-label={`${ctaLabel}: ${title}`}
          className="block w-full"
        >
          <div
            className={cn(
              "relative w-full aspect-[3/2] rounded-xl border border-accent/40 overflow-hidden",
              "shadow-sm transition-transform ease-out duration-300 will-change-transform transform-gpu hover-scale",
              "translate-y-0 rotate-0 group-hover:-translate-y-1 group-hover:rotate-[-2deg] group-hover:shadow-lg"
            )}
          >
            {/* Back folder tab */}
            <div
              aria-hidden
              className={cn(
                "absolute left-3 right-6 top-3 h-8 rounded-t-xl",
                "bg-[hsl(var(--accent)/0.85)]"
              )}
            />

            {/* Paper stack (revealed on hover) */}
            <div className="absolute left-4 right-4 top-10 bottom-4 pointer-events-none">
              <div className="h-1/3 min-h-[40px] rounded-lg bg-muted border border-border shadow-sm opacity-0 translate-y-2 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0" />
              <div className="mt-2 h-1/3 min-h-[40px] rounded-lg bg-card border border-border shadow-sm opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0" />
              <div className="mt-2 h-1/3 min-h-[40px] rounded-lg bg-background border border-border shadow-sm opacity-0 translate-y-2 transition-all duration-300 delay-200 group-hover:opacity-100 group-hover:translate-y-0" />
            </div>

            {/* Front folder (with top notch) */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))]"
              style={{
                clipPath:
                  "polygon(0 20%, 22% 20%, 26% 8%, 100% 8%, 100% 100%, 0 100%)",
              }}
            />

            {/* Subtle glow on hover */}
            <div
              aria-hidden
              className={cn(
                "absolute -inset-[6px] rounded-2xl opacity-0",
                "transition-opacity duration-300",
                "group-hover:opacity-100",
                "bg-[radial-gradient(120%_120%_at_50%_0%,hsl(var(--primary)/0.25)_0%,transparent_60%)]"
              )}
            />
          </div>
        </Link>
      </div>

      {/* Text under card */}
      <div className="mt-3">
        <h3 className="text-base font-semibold leading-tight">{title}</h3>
        {description ? (
          <p id={descId} className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        ) : (
          <span id={descId} className="sr-only">
            {title}
          </span>
        )}
        <div className="mt-3">
          <Button asChild variant="hero" size="sm" className="border-hero-foreground/20 bg-hero-foreground/10 text-hero-foreground hover:bg-hero-foreground/20">
            <Link to={to} aria-label={`${ctaLabel}: ${title}`}>
              {ctaLabel}
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

export default BlogCardFile3D
