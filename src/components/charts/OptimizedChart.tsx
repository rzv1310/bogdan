import React, { useRef, useState, useEffect, useCallback, memo } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface OptimizedChartProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

// Memoized chart wrapper to prevent unnecessary re-renders
const OptimizedChart = memo(({ children, className = "", width, height }: OptimizedChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [cachedDimensions, setCachedDimensions] = useState({ width: 0, height: 0 });

  // Use intersection observer to lazy load charts
  useIntersectionObserver(
    containerRef,
    useCallback((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        setIsIntersecting(true);
      }
    }, []),
    { threshold: 0.1, rootMargin: '50px' }
  );

  // Cache dimensions to avoid repeated layout calculations
  useEffect(() => {
    if (!isIntersecting || !containerRef.current) return;

    const element = containerRef.current;
    const updateDimensions = () => {
      setCachedDimensions({
        width: width || element.offsetWidth,
        height: height || element.offsetHeight
      });
    };

    updateDimensions();
    
    // Debounced resize observer
    let timeoutId: number;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateDimensions, 100);
    });

    resizeObserver.observe(element);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [isIntersecting, width, height]);

  return (
    <div
      ref={containerRef}
      className={`chart-container ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
        contain: 'layout style paint',
        willChange: isIntersecting ? 'auto' : 'transform',
      }}
    >
      {isIntersecting ? (
        <div style={{ width: cachedDimensions.width, height: cachedDimensions.height }}>
          {children}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="animate-pulse text-muted-foreground">Încărcare grafic...</div>
        </div>
      )}
    </div>
  );
});

OptimizedChart.displayName = "OptimizedChart";

export { OptimizedChart };