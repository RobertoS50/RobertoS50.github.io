"use client";
import { useState } from "react";
import JobList from "@/components/JobList";
import SampleList from "@/components/SampleList";
import { salesJobs } from "@/data/jobListData/salesJobsData";
import { marketingJobs } from "@/data/jobListData/marketingJobsData";
import { sampleDesigns } from "@/data/sampleDesignData";
import styles from "@/scss/components/sections/workExperience.module.scss";

//TODO 23/23: Check if you can use a screen reader to better implement ARIA attributes
//TODO 32: Look into turning buttons into components to reduce code duplication
//TODO 33: Have buttons for lists sticky so users always have access to close it out

export default function WorkExperience() {
  const [salesActive, setSalesActive] = useState<boolean>(false);
  const [marketingActive, setMarketingActive] = useState<boolean>(false);
  const [designActive, setDesignActive] = useState<boolean>(false);

  function handleMarketingClick(): void {
    setMarketingActive(!marketingActive);
  }

  function handleSalesClick(): void {
    setSalesActive(!salesActive);
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
            <span>{marketingActive === true ? "ᐁ" : "ᐅ"}</span>
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
            <span>{salesActive === true ? "ᐁ" : "ᐅ"}</span>
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
          <SampleList sampleListData={sampleDesigns} />
        </div>
      </div>
    </div>
  );
}
