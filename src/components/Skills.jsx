import React, { useState, useEffect, useRef } from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const skills = [
    { name: "React.js", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "MySQL", level: 80 },
    { name: "Git & GitHub", level: 85 },
    { name: "REST APIs", level: 85 },
    { name: "Java", level: 75 },
    { name: "C & C++", level: 70 },
  ];

  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Expertise</h2>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <h3>{skill.name}</h3>
                <span className={styles.percentage}>
                  {isVisible ? skill.level : 0}%
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transition: isVisible ? "width 1.5s ease-out" : "none",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.toolsSection}>
          <h3>Tools & Technologies</h3>
          <div className={styles.toolsGrid}>
            {[
              "VS Code",
              "React",
              "Vite",
              "Git",
              "GitHub",
              "MySQL",
              "Figma",
              "DevTools",
            ].map((tool) => (
              <div key={tool} className={styles.toolBadge}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
