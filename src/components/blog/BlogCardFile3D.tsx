import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogCardFile3DProps {
  title: string
  description?: string
  to: string
  ctaLabel?: string
  autoIntervalMs?: number
  autoDurationMs?: number
  disableAutoOnReduceMotion?: boolean
}

export function BlogCardFile3D({
  title,
  description,
  to,
  ctaLabel = "Deschide",
  autoIntervalMs = 3000,
  autoDurationMs = 600,
  disableAutoOnReduceMotion = true,
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
              "relative w-full aspect-[3/2] rounded-xl border border-accent/40",
              "bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent-glow))]",
              "shadow-sm transition-transform ease-out duration-300 will-change-transform transform-gpu hover-scale",
              "translate-y-0 rotate-0 group-hover:-translate-y-1 group-hover:rotate-[-1.5deg] group-hover:shadow-lg"
            )}
          >
            {/* Depth layers */}
            <div
              aria-hidden
              className={cn(
                "absolute inset-0 rounded-xl",
                "bg-foreground/5"
              )}
            />
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
