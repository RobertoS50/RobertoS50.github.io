"use client";
import { useEffect, useState } from "react";
import styles from "@/scss/components/progressiveImage.module.scss";

// TODO 43: !!FUTURE!! Progressive image currently acts just like a regular picture element with only a slight speed improvement. Look to change further.

/**
 * @file ProgressiveImage.tsx
 *
 * @what
 * Loads a low-resolution placeholder image first, then replaces it with a high-resolution image.
 *
 * @param srcSet - Array of high-resolution image sources
 * @param placeholderSrc - The low-resolution placeholder image source
 * @param alt - The alt text for the image
 * @param position - The position of the image (e.g., "center", "left", "right")
 * @param fetchP - fetch priority for the image, either "high" or "low"
 * @param loading - loading strategy for the image, either "eager" or "lazy"
 * @param width - width of the image in pixels
 * @param height - height of the image in pixels
 *
 * @related progressiveImage.module.scss
 * @related Used for high detail images that need to load quickly without blocking the main content
 */

interface Props {
  readonly srcSet: string[];
  readonly placeholderSrc: string;
  readonly alt: string;
  readonly position: string;
  readonly fetchP: "high" | "low";
  readonly loading: "eager" | "lazy";
  readonly width: number;
  readonly height: number;
}

export default function ProgressiveImage(p: Props) {
  const [imgSrc, setImgSrc] = useState(p.placeholderSrc);
  const [img2, setImg2] = useState(p.placeholderSrc);
  const [img3, setImg3] = useState(p.placeholderSrc);

  useEffect((): void => {
    const img = new Image();
    img.fetchPriority = "high";
    img.decoding = "async";
    img.src = p.srcSet[0];
    img.onload = (): void => {
      setImgSrc(p.srcSet[0]);
      setImg2(p.srcSet[1]);
      setImg3(p.srcSet[2]);
    };
  }, [p.srcSet]);

  return (
    <picture>
      <source srcSet={imgSrc} media="(max-width: 1279px)" />
      <source srcSet={img2} media="(max-width: 3839px)" />
      <source srcSet={img3} media="(min-width: 3840px)" />
      <img
        src={imgSrc}
        alt={p.alt}
        fetchPriority={p.fetchP}
        loading={p.loading}
        decoding="async"
        width={p.width}
        height={p.height}
        className={`
        ${styles.progressiveImage}
        ${styles[p.position]} 
        ${imgSrc == p.placeholderSrc ? styles.blur : styles.reveal}
        `}
      />
    </picture>
  );
}
