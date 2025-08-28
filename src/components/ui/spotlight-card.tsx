import * as React from "react";

interface GlowCardProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
  flatOrange?: boolean; // Solid orange border (no gradient)
  borderPx?: number; // Border thickness in px (default 3, use 1 for services)
  blackBg?: boolean; // Force solid black background for the card
  hoverOnly?: boolean; // Show glow animation only on hover (not used for services)
  borderRunner?: boolean; // Animate a small orange segment around the border continuously
  runnerSpeedFactor?: number; // Multiply runner duration (1 = default, 2 = 50% slower)
  noShadow?: boolean; // Disable outer shadow entirely
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
};

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "blue",
  size = "md",
  width,
  height,
  customSize = false,
  flatOrange = false,
  borderPx,
  blackBg = false,
  hoverOnly = false,
  borderRunner = false,
  runnerSpeedFactor = 1,
  noShadow = false,
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);
  const runnerRef = React.useRef<SVGPathElement>(null);
  const pathIdRef = React.useRef(`runnerPath-${Math.random().toString(36).slice(2)}`);
  const [pathD, setPathD] = React.useState<string>("");
  const [runnerDur, setRunnerDur] = React.useState<string>("5s");

  React.useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cardRef.current) {
        cardRef.current.style.setProperty("--x", x.toFixed(2));
        cardRef.current.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty("--y", y.toFixed(2));
        cardRef.current.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
   }, []);

  React.useEffect(() => {
    if (!borderRunner) return;
    const el = cardRef.current;
    if (!el) return;

    const update = () => {
      const cs = getComputedStyle(el);
      const br = parseFloat(cs.borderTopLeftRadius || "14");
      const b = borderPx ?? 1;
      const w = Math.max(0, el.clientWidth - 2 * b);
      const h = Math.max(0, el.clientHeight - 2 * b);
      const r = Math.max(0, Math.min(br - b * 0.5, w / 2, h / 2));
      const d = roundedRectPath(w, h, r);
      setPathD(d);
      const length = 2 * (w + h - 2 * r) + 2 * Math.PI * r;
      const baseDur = Math.max(3, Math.min(14, length / 160));
      const finalDur = baseDur * (runnerSpeedFactor ?? 1);
      setRunnerDur(`${finalDur.toFixed(2)}s`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, [borderRunner, borderPx, runnerSpeedFactor]);

  const { base, spread } = glowColorMap[glowColor];

  // Determine sizing
  const getSizeClasses = () => {
    if (customSize) {
      return ""; // Let className or inline styles handle sizing
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & Record<string, string | number> = {
      "--base": String(base),
      "--spread": String(spread),
      "--radius": "14",
      "--border": String(borderPx ?? 3),
      "--backdrop": "hsl(0 0% 60% / 0.12)",
      "--backup-border": "var(--backdrop)",
      "--size": "200",
      "--outer": "1",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: (blackBg ? ("hsl(var(--hero))" as any) : ("var(--backdrop, transparent)" as any)) as any,
      backgroundSize: "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "pan-y",
    };

    // Flat orange variant: solid border color from design token, no exterior glow
    if (flatOrange) {
      baseStyles["--backup-border"] = "hsl(var(--accent) / 0.9)";
      baseStyles["--outer"] = "0";
      baseStyles.backgroundImage = "none";
    }

    // Border runner animation: disable spotlight, rely on conic runner, no inner overlay
    if (borderRunner) {
      baseStyles["--backup-border"] = "hsl(var(--accent) / 0.7)";
      baseStyles["--outer"] = "0";
      baseStyles.backgroundImage = "none";
    }

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const roundedRectPath = (w: number, h: number, r: number) => `M ${r},0 H ${w - r} A ${r},${r} 0 0 1 ${w},${r} V ${h - r} A ${r},${r} 0 0 1 ${w - r},${h} H ${r} A ${r},${r} 0 0 1 0,${h - r} V ${r} A ${r},${r} 0 0 1 ${r},0 Z`;

  const beforeAfterStyles = `
    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }

    /* Default colorful glow (disabled for flatOrange or borderRunner) */
    [data-glow]:not([data-flat-orange]):not([data-border-runner])::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) 100% 50% / var(--border-spot-opacity, 1)), transparent 100%
      );
      filter: brightness(2);
    }

    [data-glow]:not([data-flat-orange]):not([data-border-runner])::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
      );
    }

    /* Flat orange variant: solid orange line, no gradient or shadow */
    [data-glow][data-flat-orange]::before,
    [data-glow][data-flat-orange]::after {
      background: none;
    }
    [data-glow][data-flat-orange] { box-shadow: none; }

    /* Border runner: moving luminous orange dot along the border */
    @keyframes dash-move { to { stroke-dashoffset: calc(-1 * var(--len)); } }
    [data-glow][data-border-runner]::before,
    [data-glow][data-border-runner]::after { background: none; }
    [data-glow][data-border-runner] [data-glow] { display: none; }
    [data-glow][data-border-runner] .runner-core,
    [data-glow][data-border-runner] .runner-glow {
      stroke-dasharray: var(--dash, 12) calc(var(--len) - var(--dash, 12));
      stroke-dashoffset: 0;
      animation: dash-move var(--speed, 5s) linear infinite;
      stroke-linecap: round;
    }
    [data-glow][data-border-runner] .runner-core {
      stroke: hsl(var(--accent));
      stroke-width: 2;
    }
    [data-glow][data-border-runner] .runner-glow {
      stroke: hsl(var(--accent) / 0.45);
      stroke-width: 6;
      filter: blur(2px);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        {...(flatOrange ? { "data-flat-orange": true } : {})}
        {...(borderRunner ? { "data-border-runner": true } : {})}
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          ${!customSize ? "aspect-[3/4]" : ""}
          rounded-2xl 
          relative 
          grid 
          grid-rows-[auto] 
          ${noShadow ? "" : "shadow-[0_1rem_2rem_-1rem_rgb(0_0_0_/_0.6)]"}
          p-6 
          gap-4 
          backdrop-blur-[5px]
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
        {borderRunner && (
          <svg
            className="pointer-events-none absolute overflow-visible"
            aria-hidden="true"
            style={{
              top: "var(--border-size)",
              right: "var(--border-size)",
              bottom: "var(--border-size)",
              left: "var(--border-size)",
            }}
          >
            <path ref={runnerRef} id={pathIdRef.current} d={pathD} fill="none" />
            <circle r={2} fill="hsl(var(--accent))">
              <animateMotion dur={runnerDur} repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref={`#${pathIdRef.current}`} />
              </animateMotion>
            </circle>
            <circle r={4} fill="hsl(var(--accent) / 0.5)" style={{ filter: "blur(3px)" }}>
              <animateMotion dur={runnerDur} repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref={`#${pathIdRef.current}`} />
              </animateMotion>
            </circle>
          </svg>
        )}
      </div>
    </>
  );
};

export { GlowCard };
