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
      <button className={styles.marketingButton} onClick={handleMarketingClick}>
        Marketing<span>{marketingActive === true ? "▼" : "▶"}</span>
      </button>
      {marketingActive === true && <JobList jobListData={marketingJobs} />}
      <button className={styles.salesButton} onClick={handleSalesClick}>
        Sales<span>{salesActive === true ? "▼" : "▶"}</span>
      </button>
      {salesActive === true && <JobList jobListData={salesJobs} />}
    </div>
  );
}
/*
// Helper function to format dates
function formatDate(dateStr: string): string {
  if (dateStr === 'Present') return 'Present';
  if (dateStr.includes('-')) {
    const [year, month] = dateStr.split('-');
    return new Date(`${year}-${month}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  }
  return dateStr; // Just year
}

export default WorkExperience;
*/
