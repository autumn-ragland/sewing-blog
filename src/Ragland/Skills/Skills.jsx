import styles from "./skills.module.css";
import ItemDisplay from "../ItemCard/ItemCard.jsx";
import skills from "./skills.ts";
export default function Skills() {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.items}>
        {skills.map((item, index) => (
          <ItemDisplay
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
