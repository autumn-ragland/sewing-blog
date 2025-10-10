import styles from "./card.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function ItemDisplay({ item }) {
  //   interface Skill {
  //   id: number;
  //   title: string;
  //   primaryDetail: string;
  //   description: string;
  // }
  return (
    <div className={styles.container}>
      <Box sx={{ minWidth: 200 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {item.primaryDetail}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {item.title}{" "}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
