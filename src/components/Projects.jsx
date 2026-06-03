import React, { useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";

const Projects = () => {
  const ref = useRef(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Study Material Management System",
      category: "fullstack",
      description:
        "Developed using React.js, Express.js and MySQL with full CRUD operations for managing study materials.",
      technologies: ["React.js", "Express.js", "MySQL", "REST APIs"],
      image: "📚",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Blockchain-Based Health Management System",
      category: "blockchain",
      description:
        "Secure healthcare records system using blockchain concepts for data integrity and privacy.",
      technologies: ["Blockchain", "Web3", "React", "Smart Contracts"],
      image: "🔐",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Real Estate Website",
      category: "frontend",
      description:
        "Responsive property listing website with advanced filtering and search capabilities.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "🏠",
      link: "#",
      github: "#",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>

        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterBtn} ${
              filter === "all" ? styles.active : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "fullstack" ? styles.active : ""
            }`}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "frontend" ? styles.active : ""
            }`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${styles.filterBtn} ${
              filter === "blockchain" ? styles.active : ""
            }`}
            onClick={() => setFilter("blockchain")}
          >
            Blockchain
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>{project.image}</div>

              <div className={styles.projectContent}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  <a
                    href={project.link}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View project"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={project.github}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repository"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
