import React from 'react';
import heroDesktop from '@/assets/hero-desktop.jpg';
import heroMobile from '@/assets/hero-mobile.jpg';
import heroPdf from '@/assets/hero-pdf.jpg';

interface OptimizedImageProps {
  variant: 'hero' | 'pdf';
  alt: string;
  title?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function OptimizedImage({
  variant,
  alt,
  title,
  loading = 'lazy',
  fetchPriority = 'auto',
  className,
  width,
  height
}: OptimizedImageProps) {
  if (variant === 'pdf') {
    // For PDF use - simple img tag with small optimized version
    return (
      <img
        src={heroPdf}
        alt={alt}
        title={title}
        loading={loading}
        fetchPriority={fetchPriority}
        className={className}
        width={width}
        height={height}
        decoding="async"
      />
    );
  }

  // For web use - responsive picture element
  return (
    <picture>
      {/* Desktop: larger version for >= 768px */}
      <source
        media="(min-width: 768px)"
        srcSet={heroDesktop}
        type="image/jpeg"
      />
      {/* Mobile: smaller version for < 768px */}
      <source
        media="(max-width: 767px)"
        srcSet={heroMobile}
        type="image/jpeg"
      />
      {/* Fallback */}
      <img
        src={heroDesktop}
        alt={alt}
        title={title}
        loading={loading}
        fetchPriority={fetchPriority}
        className={className}
        width={width}
        height={height}
        decoding="async"
      />
    </picture>
  );
}