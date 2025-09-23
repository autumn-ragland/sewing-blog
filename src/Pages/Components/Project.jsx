import exit from "../../Images/exit.svg";
import projects from "../Data/projects.ts";
import styles from "./project.module.css";

export default function Project({ projectId, onClose }) {
  const selectedProject = projects.find((project) => project.id === projectId);

  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <div>{selectedProject.title}</div>
        <button
          className={styles.closeBtn}
          onClick={onClose}
        >
          <img
            src={exit}
            alt="close pop up"
          />
        </button>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.secondaryImages}>
          {selectedProject.detail.map((detailImg, index) => (
            <img
              key={index}
              src={detailImg.img}
              alt={detailImg.alt}
            />
          ))}
        </div>
        <div className={styles.primaryImage}>
          <img
            src={selectedProject.image}
            alt={selectedProject.alt}
          />
        </div>
      </div>
    </div>
  );
}
