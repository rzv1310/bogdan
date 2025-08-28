import React from "react";
import heroMobileWebp from "@/assets/hero-mobile.webp";
import heroDesktopWebp from "@/assets/hero-desktop.webp";
import heroPdfWebp from "@/assets/hero-pdf.webp";
import heroMobileJpg from "@/assets/hero-mobile.jpg";
import heroDesktopJpg from "@/assets/hero-desktop.jpg";
import heroPdfJpg from "@/assets/hero-pdf.jpg";

interface OptimizedImageProps {
  variant: "mobile" | "desktop" | "pdf";
  alt: string;
  title?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  variant,
  alt,
  title,
  loading = "lazy",
  fetchPriority = "auto",
  className = "",
}) => {
  const getImageSources = () => {
    switch (variant) {
      case "mobile":
        return {
          webp: heroMobileWebp,
          jpg: heroMobileJpg,
          sizes: "(max-width: 768px) 400px, 512px",
        };
      case "desktop":
        return {
          webp: heroDesktopWebp,
          jpg: heroDesktopJpg,
          sizes: "(min-width: 769px) 600px, 512px",
        };
      case "pdf":
        return {
          webp: heroPdfWebp,
          jpg: heroPdfJpg,
          sizes: "120px",
        };
      default:
        return {
          webp: heroDesktopWebp,
          jpg: heroDesktopJpg,
          sizes: "600px",
        };
    }
  };

  const { webp, jpg, sizes } = getImageSources();

  // For PDF variant, return simple img tag for react-pdf compatibility
  if (variant === "pdf") {
    return (
      <img
        src={jpg}
        alt={alt}
        title={title}
        className={className}
      />
    );
  }

  // For web usage, return picture element with WebP + JPEG fallback
  return (
    <picture className={className}>
      <source srcSet={webp} type="image/webp" sizes={sizes} />
      <source srcSet={jpg} type="image/jpeg" sizes={sizes} />
      <img
        src={jpg}
        alt={alt}
        title={title}
        loading={loading}
        fetchPriority={fetchPriority}
        className="w-full h-auto"
      />
    </picture>
  );
};

export default OptimizedImage;