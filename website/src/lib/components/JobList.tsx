import formatDate from "@/util/formatDate";
import { JobInterface } from "@/interface/jobInterface";
import styles from "@/scss/components/jobList.module.scss";

// TODO 16/19: Address user being yanked when list is disappeared
// TODO 18/19: Add images to these type of lists (including the education list)

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
  const userLocale = navigator.language || "en-US";

  return (
    <div className={styles.jobList}>
      {p.jobListData.map((job: JobInterface) => (
        <div key={job.id} className={styles.job}>
          <h2>{job.company}</h2>
          <h3>{job.position}</h3>
          <div className={styles.jobSubHeading}>
            <span>
              {formatDate(job.startDate, userLocale)} -{" "}
              {formatDate(job.endDate, userLocale)}
            </span>
            <span>{job.location}</span>
          </div>
          <p>{job.description}</p>
          <br />
          <span>Skills:</span>
          <br />
          <ul>
            {job.skills.map((skill: string, index: number) => (
              <li key={"skill-" + index}>{skill}</li>
            ))}
          </ul>
          <br />
          <span>Achievements:</span>
          <br />
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
