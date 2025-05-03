import styles from "@/scss/components/sections/hobbies.module.scss";

export default function Hobbies() {
  return (
    <div className={styles.hobbiesSection}>
      <article className={styles.hobbies}>
        <h2>Hobbies</h2>
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
      <article className={styles.acting}>
        <h2>Acting</h2>
        <a href="https://resumes.breakdownexpress.com/robertosoto">
          Acting portfolio
        </a>
      </article>
    </div>
  );
}
