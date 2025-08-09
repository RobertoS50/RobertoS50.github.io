import formatDate from "@/util/formatDate";
import { SampleDesignInterface } from "@/interface/sampleDesignInterface";
import styles from "@/scss/components/sampleList.module.scss";

/**
 * @file SampleList.tsx
 *
 * @what
 * A sampleList lays out details of given sample design work.
 * This makes up the template for a sampleList.
 *
 * @param sampleListData - Fills in the details of the template
 *
 * @related sampleDesignData.ts, sampleDesignInterface.ts
 * @related This file is used in the WorkExperience section. workExperience.tsx
 */

interface Props {
  readonly sampleListData: SampleDesignInterface[];
}

export default function SampleList(p: Props) {
  const userLocale = navigator.language || "en-US";

  return (
    <div className={styles.sampleList}>
      {p.sampleListData.map((sample: SampleDesignInterface) => (
        <article key={sample.id} className={styles.sample}>
          <div className={styles.sampleMainHeading}>
            <h2>{sample.purpose}</h2>
          </div>
          <h4 className={styles.sampleSubHeading}>
            <span>{formatDate(sample.startDate, userLocale)}</span>
            <span>-</span>
            <span>{formatDate(sample.endDate, userLocale)}</span>
          </h4>
          <div className={styles.sampleImgContainer}>
            <picture>
              <source srcSet={sample.samples[0]} media="(max-width: 1279px)" />
              <source srcSet={sample.samples[1]} media="(max-width: 3839px)" />
              <source srcSet={sample.samples[2]} media="(min-width: 3840px)" />
              <img
                src={sample.samples[0]}
                alt={sample.sampleAlt}
                width={sample.sampleWidth}
                height={sample.sampleHeight}
                className={styles.sampleImg}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <p>{sample.description}</p>
        </article>
      ))}
    </div>
  );
}
