import styles from "./card.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// interface ExperienceProps {
//   id: number;
//   title: string;
//   primaryDetail: string;
//   link?: string;
//   description: string[];
//   primaryImg?: string;
//   secondaryImg01?: string;
//   secondaryImg02?: string;
//   secondaryImg03?: string;
// }
export default function RoleCard({ experience }) {
  return (
    <div className={styles.container}>
      <Box sx={{ minWidth: 350 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {experience.primaryDetail}{" "}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {experience.title}
            </Typography>
            <Typography variant="body2">{experience.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LinkedIn</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}
