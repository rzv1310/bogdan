import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface GeminiButtonEffectProps {
  className?: string;
  children: React.ReactNode;
}

// Lightweight button aura inspired by GoogleGeminiEffect
export const GeminiButtonEffect: React.FC<GeminiButtonEffectProps> = ({ className, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.4 });

  React.useEffect(() => {
    if (inView) {
      controls.start("loop");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const transition = { duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 2 };
  const variants = { hidden: { pathLength: 0 }, loop: { pathLength: 1 } };

  return (
    <div ref={ref} className={cn("relative inline-block isolate", className)}>
      {/* SVG aura behind the button - does not affect layout */}
      <motion.svg
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[260px] z-0"
        viewBox="0 0 720 260"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <filter id="gb-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
          </filter>
        </defs>
        <motion.path
          d="M0 190C80 190 120 192 170 178C210 167 220 160 260 130C290 108 302 106 324 102C336 100 343 92 354 92.2C364 92.2 369.5 98.8 383 103.6C388 105.4 393.6 105.9 398.6 103.9C409.7 99.1 420.3 87.3 430 87.4C440.2 87.4 452.7 101.9 464.9 106.4C468.7 107.8 473 107.4 476.7 105.9C488.8 100.9 496.9 90.1 508 89.9C515.8 89.8 521.9 98.1 533.3 104.2C542 108.9 552.1 109.9 560.8 105.2C569.9 100.3 579.2 92.7 588.5 93.5C600.4 94.5 607.8 97.8 614.4 101C620 103.7 625.8 105.7 631.9 107.2C646.7 110.7 653.7 113 668.5 121.5C695.2 136.5 698.5 149.5 736 172C776 196.5 828 190 720 190"
          stroke="hsl(var(--accent) / 0.7)"
          strokeWidth="2"
          fill="none"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
          filter="url(#gb-blur)"
        />
        <motion.path
          d="M0 160C80 160 190 160 212 154C238 149 268 139 278 134C296 126.5 291 129 324 123.5C334 121.7 352 120.2 359.5 121.9C371.5 124.7 372.2 129.2 384.5 129.7C394.6 129.7 409.8 114 420.4 114.4C429.8 114.4 437.3 126.5 451.9 132.9C456.7 135 462.5 134.6 467.3 132.7C479.6 127.7 487.9 117.2 498.2 117.4C508.3 117.6 519.5 127.8 530.4 131.7C541.4 135.6 551.1 125.9 561.4 123.1C573 120 588.5 121.5 602.5 121.5C630 121.5 650.5 132 720 132"
          stroke="hsl(var(--accent) / 0.55)"
          strokeWidth="2"
          fill="none"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
        />
        <motion.path
          d="M0 130C82 129 165 129 213 129C227 129.6 236.8 129.8 245 129.7C270 129.5 295 124 320 127.5C323 127.9 326.5 128.5 330.5 129.2C338.5 130.7 353 133.4 360.5 132.1C372.5 130 380 121.5 392 121.5C403.5 121.5 416.5 138.5 426 138.3C434.5 138.1 441.1 127.3 454 121.8C459 119.6 465 119.3 470 121.4C482 126.5 494 139.8 504 139.7C514 139.7 526.5 129.3 539 127C542 126.5 545.6 126.8 548.9 127.4C566.2 130.6 568.5 132.6 579.5 132.7C590.2 132.9 607.5 131.7 618 131.7C649 131.7 635.5 131.7 655 131.7C685 131.7 685.9 132.5 723.5 132.5C740 132.5 720 131.9 720 131.9"
          stroke="hsl(var(--accent) / 0.4)"
          strokeWidth="2"
          fill="none"
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
        />
      </motion.svg>

      {/* Button slot */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GeminiButtonEffect;
