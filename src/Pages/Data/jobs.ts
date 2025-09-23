interface Job {
  id: number;
  title: string;
  dates: string;
  link: string;
  description: string[];
}

const jobs: Job[] = [
  {
    id: 0,
    title: "This Project!",
    dates: "August 2025 - Present",
    link: "https://github.com/autumn-ragland/sewing-blog",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    id: 1,
    title: "Cro Metrics Senior Frontend Engineer",
    dates: "April 2025 - July 2025",
    link: "https://www.linkedin.com/company/crometrics",
    description: [
      "Improve user engagement on various client sites leveraging Optimizely injected typescript.",
      "Collaborated with in-house LLM to generate A/B test variants and troubleshoot AI-driven user experience improvements.",
    ],
  },

  {
    id: 2,
    title: "Zip Co Senior Software Engineer",
    dates: "January 2021 - February 2025",
    link: "https://www.linkedin.com/company/zip-co-limited",
    description: [
      "Rewrote Zip’s primary Vue web payment application in React/Next.JS for maintainability, leveraging Jest for testing and Redux for state management to ensure a modern, supported application",
      "Manage weekly releases of three customer-facing products, communicating with quality assurance, engineers, and technical leads to enable smooth updates to production code",
      "Resolve and monitor production errors while on-call by troubleshooting DataDog metrics, communicating cross-functionally both internally and externally, and managing unprocessed messages in our asynchronous data distribution system",
      "Deploy code changes using Azure DevOps continuous integration and deployment (CI/CD) in an agile environment",
    ],
  },

  {
    id: 3,
    title: "Zip Co Software Engineer II",
    dates: "January 2021 - February 2025",
    link: "https://www.linkedin.com/company/zip-co-limited",
    description: [
      "Leverage Vue along with Jest and Cypress for testing, and VueX for state management to improve a global checkout experience for customers seeking financial flexibility",
      "Spearhead Smartling integration to enable internationalization across the checkout experience",
      "Lead Contentful CMS integration to empower marketing to maintain copy and reduce developer pain points",
      "Conduct React-based technical interviews for engineering candidates",
    ],
  },

  {
    id: 4,
    title: "Zip Co Software Engineer I",
    dates: "January 2021 - February 2025",
    link: "https://www.linkedin.com/company/zip-co-limited",
    description: [
      "Built responsive, accessible Vue components from Figma wireframes, ensuring WCAG AA compliance, leveraging TypeScript and SCSS.",
      "Implement data driven development and experimentation by creating and supporting Optimizely A/B tests",
      "Redesigned static widget for external consumption as an extensible Vue application",
    ],
  },

  {
    id: 5,
    title: "CodeCrew Code School Instructor",
    dates: "January 2020 - January 2021",
    link: "https://www.linkedin.com/school/codecrew-code-school",
    description: [
      "Create and deliver lesson plans for a continually evolving web development curriculum across three programs within the CodeSchool including a MERN(MongoDB, Express, React, and NodeJS), a .NET(C#, Razor CSHTML Templates, SQL), and web basic (HTML/JS/CSS) cohort",
      "Develop well-documented, full-stack web applications for instructional purposes utilizing technologies outlined in the curriculum for the MERN and .NET cohorts",
    ],
  },
];

export default jobs;
