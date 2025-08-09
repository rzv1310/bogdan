"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (q: string): boolean => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(q).matches;
  };

  const [matches, setMatches] = useState<boolean>(() =>
    initializeWithValue ? getMatches(query) : defaultValue
  );

  const handleChange = () => setMatches(getMatches(query));

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export type Review = {
  name: string;
  text: string;
  stars?: number; // default 5
};

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" } as const;

const Carousel = memo(function Carousel({
  controls,
  cards,
  isCarouselActive,
}: {
  controls: any;
  cards: Review[];
  isCarouselActive: boolean;
}) {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
  const cylinderWidth = isScreenSizeSm ? 900 : 1500;
  const faceCount = cards.length;
  const faceWidth = Math.max(260, cylinderWidth / faceCount);
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ perspective: "1000px", transformStyle: "preserve-3d", willChange: "transform" }}
      aria-label="Carusel recenzii"
    >
      <motion.div
        drag={isCarouselActive ? "x" : false}
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
        onDrag={(_, info) => isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)}
        onDragEnd={(_, info) =>
          isCarouselActive &&
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
          })
        }
        animate={controls}
      >
        {cards.map((review, i) => (
          <motion.div
            key={`rev-${review.name}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
          >
            <article
              className={cn(
                "rounded-xl border bg-card text-card-foreground shadow-sm",
                "w-full p-4 md:p-5"
              )}
            >
              <p className="text-sm md:text-base leading-relaxed">{review.text}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs md:text-sm font-medium opacity-90">{review.name}</span>
                <span className="text-base" aria-label={`${review.stars ?? 5} stele`}>
                  {"⭐️".repeat(review.stars ?? 5)}
                </span>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(() => reviews, [reviews]);

  useEffect(() => {
    // optional autoplay slow rotation
    let raf: number;
    let frame = 0;
    function tick() {
      if (isCarouselActive) {
        frame += 0.15; // gentle auto-rotate
        controls.set({ rotateY: frame });
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [controls, isCarouselActive]);

  return (
    <motion.div layout className="relative h-[360px] md:h-[420px] w-full overflow-hidden">
      <Carousel controls={controls} cards={cards} isCarouselActive={isCarouselActive} />
    </motion.div>
  );
}
