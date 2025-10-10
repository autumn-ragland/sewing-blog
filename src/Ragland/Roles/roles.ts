interface Role {
  id: number;
  title: string;
  primaryDetail: string;
  link?: string;
  description: string[];
  primaryImg?: string;
  secondaryImg01?: string;
  secondaryImg02?: string;
  secondaryImg03?: string;
}

const roles: Role[] = [
  {
    id: 1,
    title: "Cro Metrics Senior Frontend Engineer",
    primaryDetail: "April 2025 - July 2025",
    link: "https://www.linkedin.com/company/crometrics",
    description: [
      "Improve user engagement on various client sites leveraging Optimizely injected typescript",
      "Collaborated with in-house LLM to generate A/B test variants and troubleshoot AI-driven user experience improvements",
    ],
  },

  {
    id: 2,
    title: "Zip Co Senior Software Engineer",
    primaryDetail: "January 2021 - February 2025",
    link: "https://www.linkedin.com/company/zip-co-limited",
    description: [
      "Rewrote Zip’s primary Vue web payment application in React/Next.JS for maintainability, leveraging Jest for testing and Redux for state management to ensure a modern, supported application",
      "Manage weekly releases of three customer-facing products, communicating with quality assurance, engineers, and technical leads to enable smooth upprimaryDetail to production code",
      "Resolve and monitor production errors while on-call by troubleshooting DataDog metrics, communicating cross-functionally both internally and externally, and managing unprocessed messages in our asynchronous data distribution system",
      "Deploy code changes using Azure DevOps continuous integration and deployment (CI/CD) in an agile environment",
    ],
  },

  {
    id: 3,
    title: "Zip Co Software Engineer II",
    primaryDetail: "January 2021 - February 2025",
    link: "https://www.linkedin.com/company/zip-co-limited",
    description: [
      "Leverage Vue along with Jest and Cypress for testing, and VueX for state management to improve a global checkout experience for customers seeking financial flexibility",
      "Spearhead Smartling integration to enable internationalization across the checkout experience",
      "Lead Contentful CMS integration to empower marketing to maintain copy and reduce developer pain points",
      "Conduct React-based technical interviews for engineering candiprimaryDetail",
    ],
  },

  {
    id: 4,
    title: "Zip Co Software Engineer I",
    primaryDetail: "January 2021 - February 2025",
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
    primaryDetail: "January 2020 - January 2021",
    link: "https://www.linkedin.com/school/codecrew-code-school",
    description: [
      "Create and deliver lesson plans for a continually evolving web development curriculum across three programs within the CodeSchool including a MERN(MongoDB, Express, React, and NodeJS), a .NET(C#, Razor CSHTML Templates, SQL), and web basic (HTML/JS/CSS) cohort",
      "Develop well-documented, full-stack web applications for instructional purposes utilizing technologies outlined in the curriculum for the MERN and .NET cohorts",
    ],
  },
];

export default roles;
