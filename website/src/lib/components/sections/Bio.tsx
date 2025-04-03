import styles from "@/scss/components/sections/bio.module.scss";

export default function Bio() {
  return (
    <section>
      <article className={styles.bioArticle}>
        <h2>Bio</h2>
        <p>
          Hi My name is Roberto Soto I am currently a rising senior at Aurora
          University. My passion is in Marketing and I have done Brand
          Ambassador work since 2019. Working for brands such as Gatorade, Coke,
          Insta Kart, and, most recently for 2024, LollaPalooza and American
          Apparel. I&apos;ve also managed a local company&apos;s social media
          handles as well. Besides focusing on my career I like to go to
          concerts in my free time as well as acting as a hobby.
        </p>
      </article>
    </section>
  );
}
