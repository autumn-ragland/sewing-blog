interface Tool {
  id: number;
  title: string;
  primaryDetail: string;
  description: string;
}

const skills: Tool[] = [
  {
    id: 0,
    title: "Git/Github",
    primaryDetail: "5 Years",
    description: "CodeCrew Code School, Zip Co, CroMetrics",
  },
  {
    id: 1,
    title: "Azure DevOps",
    primaryDetail: "4 Years",
    description: "Zip Co, CroMetrics",
  },
  {
    id: 2,
    title: "Optimizely (A/B Testing)",
    primaryDetail: "4 Years",
    description: "Zip Co, CroMetrics",
  },
  {
    id: 3,
    title: "DataDog (Observability)",
    primaryDetail: "4 Years",
    description: "Zip Co",
  },
  {
    id: 4,
    title: "Contentful (CMS)",
    primaryDetail: "4 Years",
    description: "Zip Co",
  },
];

export default skills;
