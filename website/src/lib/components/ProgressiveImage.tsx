"use client";
import { useEffect, useState } from "react";
import styles from "@/scss/components/progressiveImage.module.scss";

// TODO 43: Progressive image currently acts just like a regular picture element with only a slight speed improvement. Look to change further.

/**
 * @file ProgressiveImage.tsx
 *
 * @what
 * Loads a low-resolution placeholder image first, then replaces it with a high-resolution image.
 *
 * @param src - The high-resolution image source
 * @param placeholderSrc - The low-resolution placeholder image source
 * @param alt - The alt text for the image
 * @param position -
 *
 * @related progressiveImage.module.scss
 * @related Used for high detail images that need to load quickly without blocking the main content
 */

interface Props {
  readonly src: string;
  readonly placeholderSrc: string;
  readonly alt: string;
  readonly position: string;
}

export default function ProgressiveImage(p: Props) {
  const [imgSrc, setImgSrc] = useState(p.placeholderSrc);

  useEffect((): void => {
    const img = new Image();
    img.fetchPriority = "high";
    img.src = p.src;
    img.onload = (): void => {
      setImgSrc(p.src);
    };
  }, [p.src]);

  return (
    <picture>
      <source
        srcSet="/RobertoS-4-tablet-scaled.jpg"
        media="(max-width: 1279px)"
      />
      <source
        srcSet="/RobertoS-4-small-scaled.jpg"
        media="(max-width: 3839px)"
      />
      <source srcSet="/RobertoS-4-4K-scaled.jpg" media="(min-width: 3840px)" />
      <img
        src={imgSrc}
        alt={p.alt}
        fetchPriority="high"
        className={`
        ${styles.progressiveImage}
        ${styles[p.position]} 
        ${imgSrc == p.placeholderSrc ? styles.blur : styles.reveal}
        `}
      />
    </picture>
  );
}
