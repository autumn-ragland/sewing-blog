import jobs from "./Data/jobs.ts";
const pageTitle = "Coding";

const formatJob = (job) => {
  return (
    <div key={job.id}>
      <p>{job.title}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default function Coding() {
  return (
    <div>
      {pageTitle}
      {jobs.map((job) => formatJob(job))}
    </div>
  );
}
