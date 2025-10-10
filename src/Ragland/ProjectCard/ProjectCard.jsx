import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// interface Project {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
//   detail?: ProjectDetail[];
// }
export default function ProjectCard({ project }) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardMedia
        component="img"
        alt={project.alt}
        height="140"
        image={project.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
