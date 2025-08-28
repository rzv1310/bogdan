import { cn } from "@/lib/utils";

// Import optimized images
import heroMobileWebP from "@/assets/hero-mobile.webp";
import heroMobileJpg from "@/assets/hero-mobile.jpg";
import heroDesktopWebP from "@/assets/hero-desktop.webp";
import heroDesktopJpg from "@/assets/hero-desktop.jpg";
import heroPdfWebP from "@/assets/hero-pdf.webp";
import heroPdfJpg from "@/assets/hero-pdf.jpg";

interface OptimizedImageProps {
  variant: "mobile" | "desktop" | "pdf";
  alt: string;
  title?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
}

export function OptimizedImage({ 
  variant, 
  alt, 
  title, 
  loading = "lazy", 
  fetchPriority = "auto",
  className 
}: OptimizedImageProps) {
  const getImageSources = () => {
    switch (variant) {
      case "mobile":
        return { 
          webp: heroMobileWebP, 
          jpg: heroMobileJpg, 
          width: 400, 
          height: 600 
        };
      case "desktop":
        return { 
          webp: heroDesktopWebP, 
          jpg: heroDesktopJpg, 
          width: 600, 
          height: 900 
        };
      case "pdf":
        return { 
          webp: heroPdfWebP, 
          jpg: heroPdfJpg, 
          width: 120, 
          height: 180 
        };
    }
  };

  const { webp, jpg, width, height } = getImageSources();

  return (
    <picture>
      <source 
        srcSet={webp}
        type="image/webp"
      />
      <img 
        src={jpg}
        alt={alt}
        title={title}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        width={width}
        height={height}
        className={cn("w-full h-auto", className)}
      />
    </picture>
  );
}