"use client";

import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export type Review = {
  name: string;
  text: string;
  stars?: number; // default 5
};


const spring = { type: "spring", stiffness: 140, damping: 20 } as const;

const IS_SERVER = typeof window === "undefined";
const useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER) return;
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function circularDiff(i: number, active: number, n: number) {
  let diff = i - active;
  const half = Math.floor(n / 2);
  if (diff > half) diff -= n;
  if (diff < -half) diff += n;
  return diff;
}

export function ReviewsCarousel3D({ reviews }: { reviews: Review[] }) {
  const isSm = useMediaQuery("(max-width: 640px)");
  const cardW = isSm ? 300 : 300; // larger on mobile
  const gap = isSm ? 14 : 18; // equal gap
  const slot = cardW + gap;
  const [active, setActive] = useState(0);
  const n = reviews.length;

  // autoplay removed (stopped automatic movement)

  // drag support
  const xDrag = useMotionValue(0);
  
  const controls = useAnimation();

  const items = useMemo(() => reviews, [reviews]);

  return (
    <div
      className="relative h-[360px] md:h-[420px] w-full overflow-hidden"
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      aria-roledescription="carousel"
      aria-label="Carusel recenzii 3D"
    >
      <motion.div
        className="absolute inset-0"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.05}
        style={{ x: xDrag }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -80) setActive((a) => (a + 1) % n);
          else if (info.offset.x > 80) setActive((a) => (a - 1 + n) % n);
          controls.start({ x: 0, transition: spring });
        }}
        animate={controls}
      >
        {items.map((r, i) => {
          const diff = circularDiff(i, active, n);
          const x = diff * slot;
          const isCenter = diff === 0;
          return (
            <motion.article
              key={`${r.name}-${i}`}
              className={cn(
                "absolute left-1/2 top-[90px] md:top-[90px]",
                "rounded-xl border bg-card text-card-foreground shadow-sm"
              )}
              style={{
                width: cardW,
                x: `calc(-50% + ${x}px)`,
                rotateY: isCenter ? 0 : diff * -10,
                scale: isCenter ? 1 : 0.95,
                zIndex: 100 - Math.abs(diff),
                transformStyle: "preserve-3d",
              }}
              transition={spring}
            >
              <div className="p-4 md:p-5">
                <p className="text-sm md:text-base leading-relaxed">{r.text}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs md:text-sm font-medium opacity-90">{r.name}</span>
                  <span className="text-base" aria-label={`${r.stars ?? 5} stele`}>
                    {"⭐️".repeat(r.stars ?? 5)}
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* simple controls */}
      <div className="pointer-events-none absolute inset-x-0 top-[30px] z-50 flex items-center justify-between px-2 md:px-6">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => setActive((a) => (a - 1 + n) % n)}
          className="pointer-events-auto h-9 w-9 md:h-10 md:w-10 rounded-full border border-accent/50 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Următor"
          onClick={() => setActive((a) => (a + 1) % n)}
          className="pointer-events-auto h-9 w-9 md:h-10 md:w-10 rounded-full border border-accent/50 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition"
        >
          ›
        </button>
      </div>

      {/* indicators */}
      <div className="absolute top-[300px] md:top-[340px] left-0 right-0 flex justify-center gap-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              i === active ? "bg-primary" : "bg-muted"
            )}
            aria-hidden
          />)
        )}
      </div>
    </div>
  );
}
