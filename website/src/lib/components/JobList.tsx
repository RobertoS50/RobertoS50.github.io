import { JobInterface } from "@/interface/jobInterface";
import styles from "@/scss/components/jobList.module.scss";

// TODO 15/16: Adjust HTML tags and styles for jobList
// TODO 16/16: Address user being yanked when list is disappeared

/**
 * @file JobList.tsx
 *
 * @what
 * A jobList lays out details of given jobs.
 * This makes up the template for a jobCard.
 *
 * @param jobListData - Fills in the details of the template
 *
 * @related salesJobs.ts, marketingJobs.ts, retailJobs.ts, JobInterface.ts
 */

interface Props {
  readonly jobListData: JobInterface[];
}

export default function JobList(p: Props) {
  return (
    <div className={styles.jobList}>
      {p.jobListData.map((job: JobInterface) => (
        <div key={job.id} className={styles.job}>
          <h3>{job.company}</h3>
          <h4>{job.position}</h4>
          <p>{job.location}</p>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          <p>{job.description}</p>
          Skills:
          <ul>
            {job.skills.map((skill: string, index: number) => (
              <li key={"skill-" + index}>{skill}</li>
            ))}
          </ul>
          Achievements:
          <ul>
            {job.achievements.map((achievement: string, index: number) => (
              <li key={"achievement-" + index}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
