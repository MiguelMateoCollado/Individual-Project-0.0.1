import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.atribute}>
        <span>
          <h3>MIGUEL A. MATEO </h3>
          <h5>Full Stack Developer</h5>
        </span>
        <p>
          Full Stack Web Developer Specializing in JavaScript / React.js with
          great skills in handling and creating web pages and computer systems,
          a wide knowledge about ✒️ design with a full command of tools like
          Photoshop, Illustrator.
        </p>
        <h5>TECNOLOGY</h5>
        <p>Javascript | React | Express | Redux</p>
      </div>
      <div className={styles.atribute1}>
        <div className={styles.contact}>
          <h2>CONTACT ME</h2>
          <div className={styles.line}></div>
        </div>
        <div>
          <Link
            className={styles.icons}
            href="https://www.linkedin.com/in/miguelmateojs/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </Link>
          <Link
            className={styles.icons}
            href="https://github.com/MiguelMateoCollado"
          >
            <ion-icon name="logo-github"></ion-icon>
          </Link>
        </div>
      </div>
      <div className={styles.atribute}>
        <h3>SKILLS</h3>
        <p className={styles.para}>Graphic Designer</p>
        <p className={styles.para}>Front-end Developer</p>
        <p className={styles.para}>Back-end Developer</p>
      </div>
    </footer>
  );
}

export default Footer;
