import projects from "./Data/projects.ts";
import styles from "../Styles/home.module.css";
import fullscreen from "../Images/fullscreen.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Project from "./Components/Project.jsx";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const navigateToCoding = () => {
    navigate("/coding");
  };

  const displayProjectPopup = (projectId) => {
    setShowPopup(true);
    setSelectedProject(projectId);
  };

  const formatProject = (project) => {
    return (
      <div
        key={project.id}
        className={styles.project}
      >
        <img
          src={project.image}
          alt={project.alt}
        />
        <div className={styles.projectInfo}>
          <div className={styles.projectHeader}>
            <p>{project.title}</p>
            <button
              className={styles.fullscreenBtn}
              onClick={() => displayProjectPopup(project.id)}
            >
              <img
                src={fullscreen}
                alt="view fullscreen"
              />
            </button>
          </div>
          <div className={styles.projectDescription}>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.sidebar}>
        <h1>
          Autumn's <br></br>Rag Land
        </h1>
        <p className={styles.subtitle}>
          a record of secondhand <br></br>fabric finding new life
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button onClick={navigateToCoding}>My Day Job</button>
      </div>
      <div className={styles.projectContainer}>
        {showPopup && (
          <div className={styles.popupOverlay}>
            <div>
              <Project
                projectId={selectedProject}
                onClose={() => setShowPopup(false)}
              />
            </div>
          </div>
        )}
        <div className={styles.projectGrid}>
          {projects.map((project) => formatProject(project))}
        </div>
      </div>
    </div>
  );
}
