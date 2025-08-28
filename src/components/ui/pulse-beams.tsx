import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BeamPath {
  path: string;
  gradientConfig: {
    initial: {
      x1: string;
      x2: string;
      y1: string;
      y2: string;
    };
    animate: {
      x1: string | string[];
      x2: string | string[];
      y1: string | string[];
      y2: string | string[];
    };
    transition?: {
      duration?: number;
      repeat?: number;
      repeatType?: string;
      ease?: string;
      repeatDelay?: number;
      delay?: number;
    };
  };
  connectionPoints?: Array<{
    cx: number;
    cy: number;
    r: number;
  }>;
}

export interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
  beams: BeamPath[];
  width?: number;
  height?: number;
  baseColor?: string;
  accentColor?: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
  gradientStops?: string[];
}

export const PulseBeams: React.FC<PulseBeamsProps> = ({
  children,
  className,
  background,
  beams,
  width = 858,
  height = 434,
  baseColor = "var(--slate-800)",
  accentColor = "var(--slate-600)",
  gradientColors,
  gradientStops,
}) => {
  return (
    <div
      className={cn(
        // Avoid forcing page layout; consumer controls size
        "relative flex items-center justify-center antialiased overflow-hidden",
        className
      )}
    >
      {background}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <SVGs
          beams={beams}
          width={width}
          height={height}
          baseColor={baseColor}
          accentColor={accentColor}
          gradientColors={gradientColors}
          gradientStops={gradientStops}
        />
      </div>
    </div>
  );
};

const SVGs: React.FC<{
  beams: BeamPath[];
  width: number;
  height: number;
  baseColor: string;
  accentColor: string;
  gradientColors?: { start: string; middle: string; end: string };
  gradientStops?: string[];
}> = ({ beams, width, height, baseColor, accentColor, gradientColors, gradientStops }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      {beams.map((beam, index) => (
        <React.Fragment key={index}>
          <path d={beam.path} stroke={baseColor} strokeWidth="1" />
          <path d={beam.path} stroke={`url(#grad${index})`} strokeWidth="2" strokeLinecap="round" />
          {beam.connectionPoints?.map((point, pointIndex) => (
            <circle
              key={`${index}-${pointIndex}`}
              cx={point.cx}
              cy={point.cy}
              r={point.r}
              fill={baseColor}
              stroke={accentColor}
            />
          ))}
        </React.Fragment>
      ))}

      <defs>
        {beams.map((beam, index) => (
          <motion.linearGradient
            key={index}
            id={`grad${index}`}
            gradientUnits="userSpaceOnUse"
            initial={beam.gradientConfig.initial as any}
            animate={beam.gradientConfig.animate as any}
            transition={beam.gradientConfig.transition as any}
          >
            <GradientColors colors={gradientColors} stops={gradientStops} />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  );
};

const GradientColors: React.FC<{
  colors?: { start: string; middle: string; end: string };
  stops?: string[];
}> = ({
  colors = {
    start: "#18CCFC",
    middle: "#6344F5",
    end: "#AE48FF",
  },
  stops,
}) => {
  if (stops && stops.length >= 4) {
    const [c0, c1, c2, c3] = stops;
    return (
      <>
        <stop offset="0%" stopColor={c0} stopOpacity="0" />
        <stop offset="15%" stopColor={c0} stopOpacity="1" />
        <stop offset="40%" stopColor={c1} stopOpacity="1" />
        <stop offset="70%" stopColor={c2} stopOpacity="1" />
        <stop offset="100%" stopColor={c3} stopOpacity="0" />
      </>
    );
  }
  return (
    <>
      <stop offset="0%" stopColor={colors.start} stopOpacity="0" />
      <stop offset="20%" stopColor={colors.start} stopOpacity="1" />
      <stop offset="50%" stopColor={colors.middle} stopOpacity="1" />
      <stop offset="100%" stopColor={colors.end} stopOpacity="0" />
    </>
  );
};

export default PulseBeams;
