import Image from "next/image";
import ProfilePic from "@/public/RobertoS-4.jpg";
import Intro from "@/components/sections/Intro";
import Background from "@/components/sections/Background";
import WorkExperience from "@/components/sections/WorkExperience";
import styles from "@/scss/pages/home.module.scss";

// TODO #4/8: Add easy navigation like a button to get to certain parts of website
// TODO #9/9: Design components they can be hidden and loaded in seamlessly. (This website can grow a lot if it stays one page)

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.parallaxContainer}>
        <Image
          src={ProfilePic}
          alt="A picture of myself - Roberto Soto"
          className={styles.parallaxImage}
          sizes="100svw"
          fill
          priority
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
