import styles from "./roles.module.css";
import ExperienceDisplay from "../RoleCard/RoleCard.jsx";
import roles from "./roles.ts";
export default function Roles() {
  return (
    <div className={styles.container}>
      <h1>Roles</h1>
      <div className={styles.experiences}>
        {roles.map((role) => (
          <ExperienceDisplay
            key={role.id}
            experience={role}
          />
        ))}
      </div>
    </div>
  );
}
