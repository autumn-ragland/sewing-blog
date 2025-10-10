import styles from "./projects.module.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import projects from "./projects.ts";
export default function Sewing() {
  return (
    <div className={styles.container}>
      <h1>Sewing</h1>
      <div className={styles.experiences}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      {/* <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        corporis animi quidem eos, ipsam nihil consequatur odit iste excepturi,
        maxime natus adipisci! Quae voluptates corrupti atque et sapiente
        mollitia perspiciatis?
      </h2> */}
    </div>
  );
}
