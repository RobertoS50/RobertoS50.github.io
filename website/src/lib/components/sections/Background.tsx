import styles from "@/scss/components/sections/background.module.scss";

export default function Background() {
  return (
    <div className={styles.backgroundSection}>
      <article className={styles.skills}>
        <h2>Skills</h2>
        <p>
          My background in retail and my education in marketing have given me a
          wide range of skills. I&apos;ll list a few highlights:
        </p>
        <ul>
          <li>Graphic design using software like Canva</li>
          <li>Salesman</li>
          <li>Team player</li>
          <li>Quick learner</li>
          <li>Bilingual in Spanish</li>
        </ul>
      </article>
      <article className={styles.education}>
        <h2>Education</h2>
        <div className={styles.eduTitle}>
          <div className={styles.eduImgContainer}>
            <picture>
              <source
                srcSet="/logos/AU/auroraUniversityLogo-mobile.webp"
                media="(max-width: 1279px)"
              />
              <source
                srcSet="/logos/AU/auroraUniversityLogo-small.webp"
                media="(max-width: 3839px)"
              />
              <source
                srcSet="/logos/AU/auroraUniversityLogo-4K.webp"
                media="(min-width: 3840px)"
              />
              <img
                src="/logos/AU/auroraUniversityLogo-mobile.webp"
                alt="AU logo"
                className={styles.eduImg}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className={styles.eduContent}>
            <strong>Aurora University</strong>
            <br />
            <em>Bachelors of Science Degree in Marketing</em>
            <br />
            Jan 2024 - Jan 2026 (expected grad date)
          </div>
        </div>
      </article>
    </div>
  );
}
