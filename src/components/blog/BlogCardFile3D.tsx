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
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [active, setActive] = React.useState(false)
  const [inView, setInView] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)

  // Track if element is in viewport
  React.useEffect(() => {
    const el = containerRef.current
    if (!el || typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto "peek" animation
  React.useEffect(() => {
    if (!inView || hovered || typeof window === "undefined") return

    const prefersReduced = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false

    if (disableAutoOnReduceMotion && prefersReduced) return

    let timeoutId: number | undefined
    const start = () => {
      setActive(true)
      timeoutId = window.setTimeout(() => setActive(false), autoDurationMs)
    }

    const intervalId = window.setInterval(start, autoIntervalMs)
    // Run once initially (feels more responsive)
    start()

    return () => {
      window.clearInterval(intervalId)
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [inView, hovered, autoIntervalMs, autoDurationMs, disableAutoOnReduceMotion])

  const descId = React.useId()

  return (
    <article aria-labelledby={descId} className="animate-fade-in">
      <div
        ref={containerRef}
        className="group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
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
              active ? "-translate-y-1 rotate-[-2deg] shadow-md" : "translate-y-0 rotate-0",
              "group-hover:-translate-y-1 group-hover:rotate-[-2deg] group-hover:shadow-lg"
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
