import { CDN } from "@/util/globalConstants";
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
      <article className={styles.contact}>
        <h2>Contact Me</h2>
        <address className={styles.contactLinkList}>
          <a
            href="https://www.linkedin.com/in/roberto-soto12/"
            className={styles.contactLink}
          >
            <picture className={styles.linkImgContainer}>
              <source
                srcSet={CDN + "logos/linkedIn/linkedIn-mobile.webp"}
                media="(max-width: 1279px)"
              />
              <source
                srcSet={CDN + "logos/linkedIn/linkedIn-small.webp"}
                media="(max-width: 3839px)"
              />
              <source
                srcSet={CDN + "logos/linkedIn/linkedIn-4K.webp"}
                media="(min-width: 3840px)"
              />
              <img
                srcSet={CDN + "/logos/linkedIn/linkedIn-mobile.webp"}
                alt="LinkedIn logo"
                className={styles.linkImg}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className={styles.linkText}>LinkedIn</div>
          </a>
          <br />
          <a href="mailto:sotor2588@gmail.com" className={styles.contactLink}>
            <div className={styles.linkImgContainer}>
              <img
                src={CDN + "logos/GmailLogo.svg"}
                alt="Gmail logo"
                className={styles.linkImg}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className={styles.linkText}>Email - sotor2588@gmail.com</div>
          </a>
        </address>
      </article>
    </div>
  );
}
