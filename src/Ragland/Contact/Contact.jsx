import styles from "./contact.module.css";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import Info from "@mui/icons-material/Info";

const actions = [
  { icon: <FileCopyIcon sx={{ color: "black" }} />, name: "LinkedIn" },
  { icon: <SaveIcon sx={{ color: "black" }} />, name: "Resume" },
  { icon: <PrintIcon sx={{ color: "black" }} />, name: "This Site" },
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
