import styles from "./contact.module.css";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Info from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/autumn-ragland/", "LinkedIn");
};
const openGithub = () => {
  window.open("https://github.com/autumn-ragland/sewing-blog", "GitHub");
};

const actions = [
  {
    icon: (
      <LinkedInIcon
        sx={{ color: "black" }}
        onClick={() => openLinkedIn()}
      />
    ),
    name: "LinkedIn",
  },
  {
    icon: (
      <GitHubIcon
        sx={{ color: "black" }}
        onClick={() => openGithub()}
      />
    ),
    name: "This Site",
  },
];

export default function Contact() {
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        className={styles.speedDail}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", top: 10, right: 10 }}
        direction="left"
        icon={<Info sx={{ color: "black" }} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            slotProps={{
              tooltip: {
                title: action.name,
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
