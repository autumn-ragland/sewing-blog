interface Skill {
  id: number;
  title: string;
  primaryDetail: string;
  description: string;
}

const skills: Skill[] = [
  {
    id: 4,
    title: "React",
    primaryDetail: "5 Years",
    description: "CodeCrew Code School, Zip Co",
  },
  {
    id: 5,
    title: "Vue",
    primaryDetail: "4 Years",
    description: "Zip Co",
  },
  {
    id: 0,
    title: "JavaScript",
    primaryDetail: "5 Years",
    description: "CodeCrew Code School, Zip Co, CroMetrics",
  },
  {
    id: 1,
    title: "HTML",
    primaryDetail: "5 Years",
    description: "CodeCrew Code School, Zip Co, CroMetrics",
  },
  {
    id: 2,
    title: "CSS/SCSS",
    primaryDetail: "5 Years",
    description: "CodeCrew Code School, Zip Co, CroMetrics",
  },
  {
    id: 3,
    title: "TypeScript",
    primaryDetail: "4 Years",
    description: "Zip Co, CroMetrics",
  },
];

export default skills;
