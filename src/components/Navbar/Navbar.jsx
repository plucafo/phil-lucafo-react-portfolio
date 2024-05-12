import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (event, link) => {
    event.preventDefault;
    setActiveLink(link);
    console.log("Active link set to:", link);
    setMenuOpen(false);
  };

  const links = [
    { href: "#about", text: "About" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
    { href: "#resume", text: "Resume" },
  ];

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
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? styles.active : ""}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
