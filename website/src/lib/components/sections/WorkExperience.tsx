"use client";
import { useState } from "react";
import JobList from "@/components/JobList";
import { salesJobs } from "@/data/jobListData/salesJobsData";
import { marketingJobs } from "@/data/jobListData/marketingJobsData";
import styles from "@/scss/components/sections/workExperience.module.scss";

//TODO 23/23: Check if you can use a screen reader to better implement ARIA attributes

export default function WorkExperience() {
  const [salesActive, setSalesActive] = useState<boolean>(false);
  const [marketingActive, setMarketingActive] = useState<boolean>(false);

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
    </div>
  );
}
