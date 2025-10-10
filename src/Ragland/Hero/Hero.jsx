import styles from "./hero.module.css";
export default function Hero() {
  const personalStatement =
    "Impact-driven frontend engineer with 5+ years in software, including 4+ years building and testing scalable web applications with React and Vue. Skilled at delivering frontend initiatives in agile environments through close collaboration with QA, product, and engineering teams. Passionate about accessibility and crafting interfaces that drive user satisfaction and engagement.";
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://pub-8fed60eb719648a3a88503d913f2c1a4.r2.dev/icons/favicon.jpg"
          alt="Personal logo"
        />
      </div>
      <div className={styles.contentContainer}>
        <h1>Autumn Ragland</h1>
        <h2>Frontend Engineer</h2>
        <p>{personalStatement}</p>
      </div>
    </div>
  );
}

/*

      className={
        styles.container + " " + scrollPosition >= 0 && scrollPosition <= 64
          ? styles.primaryBg
          : styles.secondaryBg
      }
*/
