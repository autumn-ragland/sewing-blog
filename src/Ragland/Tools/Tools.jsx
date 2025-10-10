import styles from "./tools.module.css";
import ItemDisplay from "../ItemCard/ItemCard.jsx";
import tools from "./tools.ts";

export default function Tools() {
  return (
    <div className={styles.container}>
      <h1>Tools</h1>
      <div className={styles.items}>
        {tools.map((item, index) => (
          <ItemDisplay
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
