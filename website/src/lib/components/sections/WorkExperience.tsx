"use client";
import { useState } from "react";
import { salesJobs } from "@/data/jobListData/salesJobsData";
import { marketingJobs } from "@/data/jobListData/marketingJobsData";
import JobList from "@/components/JobList";
import styles from "@/scss/components/sections/workExperience.module.scss";

export default function WorkExperience() {
  const [salesActive, setSalesActive] = useState<boolean>(false);
  const [marketingActive, setMarketingActive] = useState<boolean>(false);

  function handleSalesClick(): void {
    setSalesActive(!salesActive);
    console.log("Sales button clicked!");
  }

  function handleMarketingClick(): void {
    setMarketingActive(!marketingActive);
    console.log("Marketing button clicked!");
  }

  return (
    <div className={styles.workExpSection}>
      <div className={styles.listWrapper}>
        <button
          className={styles.listButton}
          id={styles.marketingButton}
          onClick={handleMarketingClick}
        >
          <span className={styles.buttonText}>
            Marketing<span>{marketingActive === true ? "▼" : "▶"}</span>
          </span>
        </button>
        {marketingActive === true && <JobList jobListData={marketingJobs} />}
      </div>
      <div className={styles.listWrapper}>
        <button
          className={styles.listButton}
          id={styles.salesButton}
          onClick={handleSalesClick}
        >
          <span className={styles.buttonText}>
            Sales<span>{salesActive === true ? "▼" : "▶"}</span>
          </span>
        </button>
        {salesActive === true && <JobList jobListData={salesJobs} />}
      </div>
    </div>
  );
}
