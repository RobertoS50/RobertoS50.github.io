"use client";
import { useState } from "react";
import styles from "@/scss/components/expanderButton.module.scss";

/**
 * @file ExpanderButton.tsx
 *
 * @what
 * This button expands or collapses a list of content when clicked.
 * Uses ARIA attributes for accessibility and to indicate the state of the button.
 *
 * @param color
 * @param buttonText
 * @param children
 *
 * @related This file is used in the WorkExperience section. workExperience.tsx
 */

interface Props {
  readonly id: string;
  readonly color: string;
  readonly buttonText: string;
  readonly children: React.ReactNode;
}

export default function ExpanderButton(p: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  function onClick(): void {
    setExpanded(!expanded);
  }

  const buttonID = `${p.id}Button`;
  const expanderID = `${p.id}Expander`;

  return (
    <div className={styles.listWrapper}>
      <button
        className={styles.listButton}
        id={buttonID}
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-controls={expanderID}
        onClick={onClick}
        style={{ backgroundColor: p.color }}
      >
        <span className={styles.buttonText}>
          {p.buttonText}
          <span>{expanded ? "ᐁ" : "ᐅ"}</span>
        </span>
      </button>
      <div
        className={styles.expander}
        id={expanderID}
        aria-labelledby={buttonID}
        aria-hidden={!expanded}
      >
        {p.children}
      </div>
    </div>
  );
}
