import ExpanderButton from "@/components/ExpanderButton";
import JobList from "@/components/JobList";
import SampleList from "@/components/SampleList";
import { salesJobs } from "@/data/jobListData/salesJobsData";
import { marketingJobs } from "@/data/jobListData/marketingJobsData";
import { sampleDesigns } from "@/data/sampleDesignData";
import styles from "@/scss/components/sections/workExperience.module.scss";

//TODO 23/23: Check if you can use a screen reader to better implement ARIA attributes
//TODO 33: Have buttons for lists sticky so users always have access to close it out

export default function WorkExperience() {
  return (
    <div className={styles.workExpSection}>
      <ExpanderButton
        id="marketing"
        color="rgb(19, 81, 151)"
        buttonText="Toggle list of marketing Jobs"
      >
        <JobList jobListData={marketingJobs} />
      </ExpanderButton>
      <ExpanderButton
        id="sales"
        color="rgb(63, 162, 63)"
        buttonText="Toggle list of sales Jobs"
      >
        <JobList jobListData={salesJobs} />
      </ExpanderButton>
      <ExpanderButton
        id="sampleDesigns"
        color="rgb(78, 63, 162)"
        buttonText="Toggle list of sample graphic design work"
      >
        <SampleList sampleListData={sampleDesigns} />
      </ExpanderButton>
    </div>
  );
}
