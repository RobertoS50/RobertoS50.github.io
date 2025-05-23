import Intro from "@/components/sections/Intro";
import Background from "@/components/sections/Background";
import WorkExperience from "@/components/sections/WorkExperience";
import styles from "@/scss/pages/home.module.scss";

// TODO #4/8: Add easy navigation like a button to get to certain parts of website
// TODO #9/9: Design components they can be hidden and loaded in seamlessly. (This website can grow a lot if it stays one page)
// TODO #26/26: Look to rework mobile styles to accommodate smaller pixel widths (320px, currently shows cracks starting at 350px) marketing bar in particular
// TODO #28/28: Look into reworking px to em for more responsive styles
// TODO #29: Resize Roberto's portrait image as it is much larger than its container in all screen sizes

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.parallaxContainer}>
        <picture>
          <source
            srcSet="/RobertoS-4-tablet-scaled.jpg"
            media="(max-width: 1279px)"
          />
          <source
            srcSet="/RobertoS-4-small-scaled.jpg"
            media="(max-width: 3839px)"
          />
          <source
            srcSet="/RobertoS-4-4K-scaled.jpg"
            media="(min-width: 3840px)"
          />
          <img
            src="/RobertoS-4-tablet-scaled.jpg"
            alt="Self portrait of Roberto Soto looking at the camera"
            className={styles.parallaxImage}
          />
        </picture>
      </div>
      <div className={styles.contentOverlay}>
        <header className={styles.header}>
          <hgroup>
            <h1>Roberto Soto</h1>
            <p>Portfolio</p>
          </hgroup>
        </header>
        <main className={styles.main}>
          <div className={styles.sectionContainer}>
            <h2>About me</h2>
            <Intro />
          </div>
          <div className={styles.sectionContainer}>
            <h3>Background</h3>
            <Background />
          </div>
          <div className={styles.sectionContainer} id="workExperience">
            <h4>Work experience</h4>
            <WorkExperience />
          </div>
          <section>
            <article>
              <h5>More room</h5>
            </article>
          </section>
        </main>
        <footer className={styles.footer}>
          Website coded by{" "}
          <a href="https://www.github.com/alexrojas431">Alexander Rojas</a>
        </footer>
      </div>
    </div>
  );
}
