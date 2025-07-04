"use client";
import { useEffect, useState } from "react";
import styles from "@/scss/components/progressiveImage.module.scss";

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
    img.src = p.src;
    img.onload = (): void => {
      setImgSrc(p.src);
    };
  }, [p.src]);

  return (
    <img
      src={imgSrc}
      alt={p.alt}
      decoding="async"
      loading="lazy"
      className={`
        ${styles.progressiveImage}
        ${styles[p.position]} 
        ${imgSrc == p.placeholderSrc ? styles.blur : ""}
        `}
    />
  );
}
