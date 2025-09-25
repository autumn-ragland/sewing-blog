import projects from "./Data/projects.ts";
import styles from "../Styles/home.module.css";
import fullscreen from "../Images/fullscreen.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Project from "./Components/Project.jsx";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const subtitle01 = "a record of secondhand fabric";
  const subtitle02 = "finding new life";
  const sidebarCopy01 =
    "I taught myself how to sew in the summer of 2024 with youtube and a dream. Since then I've been self drafting clothes and accessories nearly every month. This page documents some of my favorite projects.";
  const sidebarCopy02 =
    "I decided to focus on using secondhand fabric once I got the hang of basic techniques. I love the challenge of working with what I have and producing unique pieces.";
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
          onClick={() => displayProjectPopup(project.id)}
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
          {subtitle01}
          <br />
          {subtitle02}
        </p>
        <p>{sidebarCopy01}</p>
        <p>{sidebarCopy02}</p>
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
