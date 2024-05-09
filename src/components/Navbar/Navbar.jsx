import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (event, link) => {
    event.preventDefault;
    setActiveLink(link);
    console.log("Active link set to:", link);
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Phil Lucafo
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? styles.active : ""}
              onClick={(e) => handleLinkClick(e, "#about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeLink === "#portfolio" ? styles.active : ""}
              onClick={(e) => handleLinkClick(e, "#portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? styles.active : ""}
              onClick={(e) => handleLinkClick(e, "#contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeLink === "#resume" ? styles.active : ""}
              onClick={(e) => handleLinkClick(e, "#resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
