import React, { useEffect, useState } from "react";
import styles from "./ragland.module.css";
import Contact from "./Contact/Contact.jsx";
import Hero from "./Hero/Hero.jsx";
import Tools from "./Tools/Tools.jsx";
import Skills from "./Skills/Skills.jsx";
import Roles from "./Roles/Roles.jsx";
import Sewing from "./Projects/Projects.jsx";
export default function RagLand() {
  const [isScrolled, setIsScrolled] = useState(0);

  const changeBackground = () => {
    setIsScrolled((window.scrollY / window.innerHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <Contact />
      </div>
      <div
        className={
          isScrolled >= 0 && isScrolled <= 54
            ? styles.primaryBg
            : styles.secondaryBg
        }
      >
        <Hero />
      </div>
      <div
        className={
          styles.toolsSkillsContainer +
          " " +
          (isScrolled >= 55 && isScrolled <= 118
            ? styles.primaryBg
            : styles.secondaryBg)
        }
      >
        <div className={styles.toolsSkills}>
          <Tools />
          <Skills />
        </div>
      </div>
      <div
        className={
          isScrolled >= 119 && isScrolled <= 176
            ? styles.primaryBg
            : styles.secondaryBg
        }
      >
        <Roles />
      </div>
      <div
        className={isScrolled >= 177 ? styles.primaryBg : styles.secondaryBg}
      >
        <Sewing />
      </div>
    </div>
  );
}
