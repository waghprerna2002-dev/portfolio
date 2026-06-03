import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className={styles.button}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
