import React, { useState } from "react";
import styles from "./Footer.module.css";

import githubImg from "../../assets/contact/githubIcon.png";
import linkedinImg from "../../assets/contact/linkedinIcon.png";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <a href="https://github.com/plucafo" target="_blank">
          <img src={githubImg} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/philliplucafo/" target="_blank">
          <img src={linkedinImg} alt="linkedin icon" />
        </a>
      </footer>
    </div>
  );
};
