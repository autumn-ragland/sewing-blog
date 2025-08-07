import jobs from "./Data/jobs.ts";
import styles from "../Styles/coding.module.css";
import { useNavigate } from "react-router-dom";
import link from "../Images/link.svg";
import download from "../Images/download.svg";

export default function Coding() {
  const navigate = useNavigate();
  const navigateToHobby = () => {
    navigate("/");
  };
  const navigateToLinkedIn = (link) => {
    alert(`Navigating to LinkedIn for : ${link}`);
  };
  const navigateToPersonalLinkedIn = () => {
    alert(`Navigating to Personal LinkedIn`);
  };
  const downloadResume = () => {
    alert(`Downloading Resume`);
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
          frontend engineer <br></br>open to work
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={navigateToHobby}>My Hobby</button>
          <button onClick={navigateToPersonalLinkedIn}>LinkedIn</button>
          <button
            onClick={downloadResume}
            className={styles.resumeBtn}
          >
            <span>Resume</span>
            <img
              src={download}
              alt="download resume"
            />
          </button>
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
