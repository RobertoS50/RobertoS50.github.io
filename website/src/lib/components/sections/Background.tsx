import styles from "@/scss/components/sections/background.module.scss";

export default function Background() {
  return (
    <div className={styles.backgroundSection}>
      <article className={styles.skills}>
        <h2>Skills</h2>
        <p>
          List any skills you&apos;ve exerted throughout your career that are
          related to marketing. If applicable, list technology/apps that you
          used while utilizing these skills:
        </p>
        <ul>
          <li>Graphic design using software like Canva</li>
          <li>etc.</li>
        </ul>
      </article>
      <article className={styles.education}>
        <h2>Education</h2>
        Aurora University
        <br />
        Started: Jan 2024
        <br />
        Expected grad date: Jan 2026
        <br />
        Bachelors of Science Degree in Marketing
        <br />
      </article>
    </div>
  );
}
