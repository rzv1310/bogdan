import { useRef, useEffect, useState } from "react"
import { usePerformanceOptimized } from "@/hooks/usePerformanceOptimized"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number>()
  const numSquaresX = useRef<number>()
  const numSquaresY = useRef<number>()
  const gridOffset = useRef({ x: 0, y: 0 })
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number
    y: number
  } | null>(null)
  
  const { 
    isLowEndDevice, 
    shouldReduceAnimations, 
    cachedDimensions, 
    updateCachedDimensions,
    rafDOMOperation 
  } = usePerformanceOptimized()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas background
    canvas.style.background = "#060606"

    const resizeCanvas = () => {
      rafDOMOperation(() => {
        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        
        // Update cached dimensions
        updateCachedDimensions(canvas);
        
        canvas.width = width;
        canvas.height = height;
        numSquaresX.current = Math.ceil(width / squareSize) + 1;
        numSquaresY.current = Math.ceil(height / squareSize) + 1;
      });
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize

      ctx.lineWidth = 0.5

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize)
          const squareY = y - (gridOffset.current.y % squareSize)

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2,
      )
      gradient.addColorStop(0, "rgba(6, 6, 6, 0)")
      gradient.addColorStop(1, "#060606")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.current.x =
            (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.current.y =
            (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.current.x =
            (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.current.y =
            (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    // Optimized mouse move with performance checks
    let mouseRafId: number;
    const handleMouseMove = (event: MouseEvent) => {
      if (isLowEndDevice || shouldReduceAnimations) return;
      
      if (!mouseRafId) {
        mouseRafId = requestAnimationFrame(() => {
          // Use cached dimensions instead of getBoundingClientRect
          const mouseX = event.clientX - (canvas.offsetLeft || 0);
          const mouseY = event.clientY - (canvas.offsetTop || 0);

          const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
          const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

          const hoveredSquareX = Math.floor(
            (mouseX + gridOffset.current.x - startX) / squareSize,
          );
          const hoveredSquareY = Math.floor(
            (mouseY + gridOffset.current.y - startY) / squareSize,
          );

          setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY });
          mouseRafId = 0;
        });
      }
    }

    const handleMouseLeave = () => {
      setHoveredSquare(null)
    }

    // Event listeners
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Initial setup
    resizeCanvas();
    
    // Conditionally start animation based on device capability
    if (!isLowEndDevice && !shouldReduceAnimations) {
      requestRef.current = requestAnimationFrame(updateAnimation);
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (mouseRafId) {
        cancelAnimationFrame(mouseRafId);
      }
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize, isLowEndDevice, shouldReduceAnimations])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block squares-background ${className}`}
      style={{
        willChange: shouldReduceAnimations ? 'auto' : 'transform',
        contain: 'layout style paint',
      }}
    />
  )
}
