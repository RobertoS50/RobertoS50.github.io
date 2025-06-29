import formatDate from "@/util/formatDate";
import { JobInterface } from "@/interface/jobInterface";
import styles from "@/scss/components/jobList.module.scss";

/**
 * @file JobList.tsx
 *
 * @what
 * A jobList lays out details of given jobs for a specific topic/industry.
 * This makes up the template for a JobList.
 *
 * @param jobListData - Fills in the details of the template
 *
 * @related salesJobs.ts, marketingJobs.ts, retailJobs.ts, JobInterface.ts
 * @related This file is used in the WorkExperience section. workExperience.tsx
 */

interface Props {
  readonly jobListData: JobInterface[];
}

export default function JobList(p: Props) {
  const userLocale = navigator.language || "en-US";

  return (
    <div className={styles.jobList}>
      {p.jobListData.map((job: JobInterface) => (
        <article key={job.id} className={styles.job}>
          <div className={styles.jobMainHeading}>
            <picture className={styles.jobImgContainer}>
              <source srcSet={job.logos[0]} media="(max-width: 1279px)" />
              <source srcSet={job.logos[1]} media="(max-width: 3839px)" />
              <source srcSet={job.logos[2]} media="(min-width: 3840px)" />
              <img
                src={job.logos[0]}
                alt={job.logoAlt}
                className={styles.jobImg}
                loading="lazy"
              />
            </picture>
            <div className={styles.jobTitle}>
              <h2>{job.company}</h2>
              <h3>{job.position}</h3>
            </div>
          </div>
          <h4 className={styles.jobSubHeading}>
            <span>
              {formatDate(job.startDate, userLocale)} -{" "}
              {formatDate(job.endDate, userLocale)}
            </span>
            <span>{job.location}</span>
          </h4>
          <p>{job.description}</p>
          <br />
          <h5>
            <span>Skills:</span>
          </h5>
          <ul>
            {job.skills.map((skill: string, index: number) => (
              <li key={job.id + "-skill-" + index}>{skill}</li>
            ))}
          </ul>
          <br />
          <h6>
            <span>Achievements:</span>
          </h6>
          <ul>
            {job.achievements.map((achievement: string, index: number) => (
              <li key={job.id + "-achievement-" + index}>{achievement}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
