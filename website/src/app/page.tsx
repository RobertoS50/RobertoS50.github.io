import Image from "next/image";
import ProfilePic from "@/public/RobertoS-4.jpg";
import styles from "@/scss/pages/home.module.scss";

// TODO #4/8: Add easy navigation like a button to get to certain parts of website

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
          <h1>Roberto Soto</h1>
        </header>
        <main className={styles.main}>
          <section>
            <article>
              <h2>Bio</h2>
              <p>
                Hi My name is Roberto Soto I am currently a rising senior at
                Aurora University. My passion is in Marketing and I have done
                Brand Ambassador work since 2019. Working for brands such as
                Gatorade, Coke, Insta Kart, and, most recently for 2024,
                LollaPalooza and American Apparel. I&apos;ve also managed a
                local company&apos;s social media handles as well. Besides
                focusing on my career I like to go to concerts in my free time
                as well as acting as a hobby.
              </p>
            </article>
          </section>
          <section>
            <article>
              <h3>Background</h3>
            </article>
          </section>
          <section>
            <article>
              <h4>Work experience</h4>
            </article>
          </section>
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
