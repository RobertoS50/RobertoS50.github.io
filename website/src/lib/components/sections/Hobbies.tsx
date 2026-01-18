import { CDN } from "@/util/globalConstants";
import styles from "@/scss/components/sections/hobbies.module.scss";

//TODO 36: !!FUTURE!! Add conveyor belt with movies that Roberts has had a role in

export default function Hobbies() {
  return (
    <div className={styles.hobbiesSection}>
      <article className={styles.hobbies}>
        <h2>Hobbies</h2>
        <p>
          I&apos;m very social but can also enjoy my own company. Here&apos;s a
          couple of my interests:
        </p>
        <ul>
          <li>Acting</li>
          <li>Performing stand-up</li>
          <li>Going to concerts</li>
          <li>Finding new hole in the walls to eat at</li>
          <li>Reading</li>
          <li>Journaling</li>
        </ul>
      </article>
      <article className={styles.acting}>
        <h2>Acting</h2>
        <p>
          I have been acting since 2021, and have appeared in various
          productions, including commercials, short films, and feature films. My
          acting portfolio highlighting my more involved roles can be found on
          Breakdown Express.
        </p>
        <br />
        <div className={styles.actingGallery}>
          <picture className={styles.imgContainer}>
            <source
              srcSet={CDN + "/Portraits/redBkg-mobile.jpg"}
              media="(max-width: 1279px)"
            />
            <source
              srcSet={CDN + "/Portraits/redBkg-small.jpg"}
              media="(max-width: 3839px)"
            />
            <source
              srcSet={CDN + "/Portraits/redBkg-4K.jpg"}
              media="(min-width: 3840px)"
            />
            <img
              src={CDN + "/Portraits/redBkg-mobile.jpg"}
              alt="Roberto Soto headshot"
              className={styles.img}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <address className={styles.contactLinkList}>
            <a
              href="https://www.imdb.com/name/nm11430942/?ref_=mv_close"
              className={styles.contactLink}
            >
              <picture className={styles.linkImgContainer}>
                <source
                  srcSet={CDN + "/Logos/IMDB/IMDBLogo-mobile.jpg"}
                  media="(max-width: 1279px)"
                />
                <source
                  srcSet={CDN + "/Logos/IMDB/IMDBLogo-small.jpg"}
                  media="(max-width: 3839px)"
                />
                <source
                  srcSet={CDN + "/Logos/IMDB/IMDBLogo-4K.jpg"}
                  media="(min-width: 3840px)"
                />
                <img
                  srcSet={CDN + "/Logos/IMDB/IMDBLogo-mobile.jpg"}
                  alt="IMDB logo"
                  className={styles.linkImg}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </a>
            <a
              href="https://resumes.breakdownexpress.com/robertosoto"
              className={styles.contactLink}
            >
              <picture className={styles.linkImgContainer}>
                <source
                  srcSet={
                    CDN + "/Logos/actorsAccess/actorsAccessLogo-mobile.webp"
                  }
                  media="(max-width: 1279px)"
                />
                <source
                  srcSet={
                    CDN + "/Logos/actorsAccess/actorsAccessLogo-small.webp"
                  }
                  media="(max-width: 3839px)"
                />
                <source
                  srcSet={CDN + "/Logos/actorsAccess/actorsAccessLogo-4K.webp"}
                  media="(min-width: 3840px)"
                />
                <img
                  src={CDN + "/Logos/actorsAccess/actorsAccessLogo-mobile.webp"}
                  alt="actors Access logo"
                  className={styles.linkImg}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </a>
          </address>
        </div>
      </article>
    </div>
  );
}
