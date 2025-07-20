import Intro from "@/components/sections/Intro";
import Background from "@/components/sections/Background";
import WorkExperience from "@/components/sections/WorkExperience";
import Hobbies from "@/components/sections/Hobbies";
import styles from "@/scss/pages/home.module.scss";
import ProgressiveImage from "@/components/ProgressiveImage";

// TODO #9/9: !!FUTURE!! Design components to be loaded in dynamically. Intersection observer API (This website can grow a lot if it stays one page)
// TODO #37: Add animation when the user enters the page and even when the user scrolls down the page.
// * (Entry) contentOverlay scrolls up. (Scroll down) content fades in
// * On scroll, have parallax image fade or have the contentOverlay a shadow box at the top of the overlay.

// TODO 39: Reduce main thread blocker
// TODO 40: Reduce resource delay and element render delay
// TODO 41: Stick to transform and opacity for animations (non-composite animations)
// TODO 42: Look for the render blockers

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.parallaxContainer}>
        <ProgressiveImage
          srcSet={[
            "/RobertoS-4-tablet-scaled.jpg",
            "/RobertoS-4-small-scaled.jpg",
            "/RobertoS-4-4K-scaled.jpg",
          ]}
          placeholderSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA8ADwAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAeABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCwtnDjPQisn7NqN7JKbK3Tyo2Kkv1JH4itm5u4bZN8zqi+/X8qg067trne8QDIc5zIVJOfSvMoXbbaO2VtjCjAljDsm1uhHuDiir00kc0rPEFCk9B2opt6iSM/WboyXZ3HKIAPzqhEXidvLldVbqFYgGonkee2Lvjcx5x7f/qph3qn3u1d8Y8sUjkk7tstNOgbAwcUVQhOVOeeaKsk/9k="
          alt="Self portrait of Roberto Soto looking at the camera"
          position="topCenter"
          fetchP="high"
          loading="eager"
          width={1000}
          height={1500}
        />
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
