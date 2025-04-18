import styles from "@/scss/components/sections/intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.introSection}>
      <article className={styles.bio}>
        <h2>Bio</h2>
        <p>
          Hi, my name is Roberto Soto I am currently a rising senior at Aurora
          University. My passion is in Marketing and I have done Brand
          Ambassador work since 2019.
          <br />
          <br />
          Working for brands such as Gatorade, Coke, Insta Kart, and, most
          recently for 2024, LollaPalooza and American Apparel. I&apos;ve also
          managed a local company&apos;s social media handles as well.
          <br />
          <br />
          Besides focusing on my career I like to go to concerts in my free time
          as well as acting as a hobby.
        </p>
      </article>
      <article className={styles.contactInfo}>
        <h2>Contact</h2>
        <address>
          <a href="https://www.linkedin.com/in/roberto-soto12/">LinkedIn</a>
          <br />
          <a href="mailto:sotor2588@gmail.com">Email - sotor2588@gmail.com</a>
        </address>
      </article>
    </div>
  );
}
