import jobs from "./Data/jobs.ts";
import styles from "../Styles/coding.module.css";
import { useNavigate } from "react-router-dom";
import link from "../Images/link.svg";

export default function Coding() {
  const personalSummary01 =
    "Impact-driven frontend engineer with 4+ years of experience building and testing scalable web applications using React and Vue.";
  const personalSummary02 =
    "Efficiently delivering frontend initiatives by embracing close collaboration with QA, product, and engineering teams in agile environments.";
  const personalSummary03 =
    "Passionate about creating accessible, delightful interfaces that improve user satisfaction and engagement.";
  const navigate = useNavigate();
  const navigateToHobby = () => {
    navigate("/");
  };
  const navigateToLinkedIn = (link) => {
    window.open(link, "_blank");
  };
  const navigateToPersonalLinkedIn = () => {
    window.open("https://www.linkedin.com/in/autumn-ragland/", "_blank");
  };
  const formatJob = (job) => {
    return (
      <div
        key={job.id}
        className={styles.job}
      >
        <div className={styles.jobHeader}>
          <span>{job.title}</span>
          <button
            className={styles.linkButton}
            onClick={() => navigateToLinkedIn(job.link)}
          >
            <img
              src={link}
              alt="open linkedIn for job in new window"
            />
          </button>
        </div>
        <div>
          <span>{job.dates}</span>
        </div>
        <div>
          {job.description.map((description) => (
            <p>{description}</p>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.codingContainer}>
      <div className={styles.sidebar}>
        <h1>
          Autumn <br></br>Ragland
        </h1>
        <p className={styles.subtitle}>
          frontend engineer <br />
          open to work
        </p>
        <p>
          {personalSummary01} <br /> {personalSummary02}
          <br /> {personalSummary03}
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={navigateToHobby}>My Hobby</button>
          <button onClick={navigateToPersonalLinkedIn}>LinkedIn</button>
        </div>
      </div>
      <div className={styles.jobsContainer}>
        <div className={styles.jobGrid}>
          {jobs.map((job) => formatJob(job))}
        </div>
      </div>
    </div>
  );
}
