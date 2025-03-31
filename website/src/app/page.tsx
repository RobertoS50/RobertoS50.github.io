import Image from "next/image";
import ProfilePic from "@/public/RobertoS-4.jpg";
import styles from "@/scss/pages/home.module.scss";
// TODO #2: Implement paralax scrolling
// TODO #3: Have picture be behind main content of website
// TODO #4: Add easy navigation like a button to get to certain parts of website

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <Image
          src={ProfilePic}
          alt="A picture of myself - Roberto Soto"
          width={1334}
          height={1959}
          priority
          style={{ width: "auto", height: "150px" }}
        />
      </div>
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
              LollaPalooza and American Apparel. I&apos;ve also managed a local
              company&apos;s social media handles as well. Besides focusing on
              my career I like to go to concerts in my free time as well as
              acting as a hobby.
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
        Website coded by Alexander Rojas
      </footer>
    </div>
  );
}
