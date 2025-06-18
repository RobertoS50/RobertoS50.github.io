"use client";
import { useState } from "react";
import JobList from "@/components/JobList";
import { salesJobs } from "@/data/jobListData/salesJobsData";
import { marketingJobs } from "@/data/jobListData/marketingJobsData";
import styles from "@/scss/components/sections/workExperience.module.scss";

//TODO 23/23: Check if you can use a screen reader to better implement ARIA attributes
//TODO 32: Look into turning buttons into components to reduce code duplication
//TODO 33: Have buttons for lists sticky so users always have access to close it out

export default function WorkExperience() {
  const [salesActive, setSalesActive] = useState<boolean>(false);
  const [marketingActive, setMarketingActive] = useState<boolean>(false);
  const [designActive, setDesignActive] = useState<boolean>(false);

  /**
   * @Function
   *  handle****Click
   * @Description
   *  Toggles the visibility of the job list and scrolls to top of the work experience section if all other lists are closed
   **/

  function handleMarketingClick(): void {
    setMarketingActive(!marketingActive);
    /*
    if (marketingActive === true && salesActive === false) {
      document
        .getElementById("workExperience")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    */
  }

  function handleSalesClick(): void {
    setSalesActive(!salesActive);
    /*
    if (salesActive === true && marketingActive === false) {
      document
        .getElementById("workExperience")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    */
  }

  function handleDesignClick(): void {
    setDesignActive(!designActive);
  }

  return (
    <div className={styles.workExpSection}>
      <div className={styles.listWrapper}>
        <button
          className={styles.listButton}
          id={styles.marketingButton}
          onClick={handleMarketingClick}
          aria-haspopup="true"
          aria-expanded={marketingActive}
          aria-controls={styles.marketingList}
        >
          <span className={styles.buttonText}>
            Toggle list of marketing jobs{""}
            <span>{marketingActive === true ? "▼" : "▶"}</span>
          </span>
        </button>
        <div
          className={styles.expander}
          id={styles.marketingList}
          aria-labelledby={styles.marketingButton}
          aria-hidden={!marketingActive}
        >
          <JobList jobListData={marketingJobs} />
        </div>
      </div>
      <div className={styles.listWrapper}>
        <button
          className={styles.listButton}
          id={styles.salesButton}
          onClick={handleSalesClick}
          aria-haspopup="true"
          aria-expanded={salesActive}
          aria-controls={styles.salesList}
        >
          <span className={styles.buttonText}>
            Toggle list of sales jobs{""}
            <span>{salesActive === true ? "▼" : "▶"}</span>
          </span>
        </button>
        <div
          className={styles.expander}
          id={styles.salesList}
          aria-labelledby={styles.salesButton}
          aria-hidden={!salesActive}
        >
          <JobList jobListData={salesJobs} />
        </div>
      </div>
      <div className={styles.listWrapper}>
        <button
          className={styles.listButton}
          id={styles.designButton}
          onClick={handleDesignClick}
          aria-haspopup="true"
          aria-expanded={designActive}
          aria-controls={styles.designList}
        >
          <span className={styles.buttonText}>
            Toggle list of sample graphic design work{""}
            <span>{designActive === true ? "ᐁ" : "ᐅ"}</span>
          </span>
        </button>
        <div
          className={styles.expander}
          id={styles.designList}
          aria-labelledby={styles.designButton}
          aria-hidden={!designActive}
        >
          <div className={styles.sampleList}>
            <div className={styles.sample}>
              <h3 className={styles.sampleHeading}>
                Design for Coach™ profile
              </h3>
              <h4 className={styles.sampleSubHeading}>
                <span>Jan 2020</span>
                <span>-</span>
                <span>Dec 2025</span>
              </h4>
              <div className={styles.sampleImgContainer}>
                <picture>
                  <source
                    srcSet="/sampleDesigns/allAboutMe-tablet-scaled.jpg"
                    media="(max-width: 1279px)"
                  />
                  <source
                    srcSet="/sampleDesigns/allAboutMe-small-scaled.jpg"
                    media="(max-width: 3839px)"
                  />
                  <source
                    srcSet="/sampleDesigns/allAboutMe-4K-scaled.jpg"
                    media="(min-width: 3840px)"
                  />
                  <img
                    src="/sampleDesigns/allAboutMe-tablet-scaled.jpg"
                    alt="Test"
                    className={styles.sampleImg}
                  />
                </picture>
              </div>
              <p>
                Filled with pastel colors for a clear and inviting look. The
                idea behind this design is to create an visually interesting
                profile that also directs the viewer&apos;s eye to the
                highlighted information.
              </p>
            </div>

            <div className={styles.sample}>
              <h3 className={styles.sampleHeading}>Purpose</h3>
              <h4 className={styles.sampleSubHeading}>date</h4>
              <div className={styles.sampleImgContainer}>
                <picture>
                  <source
                    srcSet="/sampleDesigns/allAboutMe-tablet-scaled.jpg"
                    media="(max-width: 1279px)"
                  />
                  <source
                    srcSet="/sampleDesigns/allAboutMe-small-scaled.jpg"
                    media="(max-width: 3839px)"
                  />
                  <source
                    srcSet="/sampleDesigns/allAboutMe-4K-scaled.jpg"
                    media="(min-width: 3840px)"
                  />
                  <img
                    src="/sampleDesigns/allAboutMe-tablet-scaled.jpg"
                    alt="Test"
                    className={styles.sampleImg}
                  />
                </picture>
              </div>
              {""}
              Special points for the design
            </div>

            <div className={styles.sample}>
              <h3 className={styles.sampleHeading}>Purpose</h3>
              <h4 className={styles.sampleSubHeading}>date</h4>
              <div className={styles.sampleImgContainer}>
                <img
                  src="/sampleDesigns/SampleDesign_allAboutMe.png"
                  alt="Design for coach's profile"
                  className={styles.sampleImg}
                />
              </div>
              {""}
              Special points for the design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
