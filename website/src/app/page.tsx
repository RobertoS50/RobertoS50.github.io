import Intro from "@/components/sections/Intro";
import Background from "@/components/sections/Background";
import WorkExperience from "@/components/sections/WorkExperience";
import Hobbies from "@/components/sections/Hobbies";
import styles from "@/scss/pages/home.module.scss";

// TODO #9/9: Design components they can be hidden and loaded in seamlessly. (This website can grow a lot if it stays one page)
// TODO #28/28: Look into reworking px to em for more responsive styles
// TODO #37: Add animation when the user enters the page and even when the user scrolls down the page.
// * (Entry) contentOverlay scrolls up. (Scroll down) content fades in
// * On scroll, have parallax image fade or have the contentOverlay a shadow box at the top of the overlay.

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
          <div className={styles.sectionContainer}>
            <h4>Work experience</h4>
            <WorkExperience />
          </div>

          <div className={styles.sectionContainer}>
            <h4>My interests</h4>
            <Hobbies />
          </div>
        </main>
        <footer className={styles.footer}>
          Website coded by{" "}
          <a href="https://www.github.com/alexrojas431">Alexander Rojas</a>
        </footer>
      </div>
    </div>
  );
}
