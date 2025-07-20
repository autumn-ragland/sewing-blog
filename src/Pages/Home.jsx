import projects from "./Data/projects.ts";
const pageTitle = "Sewing Blog";

const formatProject = (project) => {
  return (
    <div key={project.id}>
      <p>{project.title}</p>
      <p>{project.description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {pageTitle}
      {projects.map((project) => formatProject(project))}
    </div>
  );
}
