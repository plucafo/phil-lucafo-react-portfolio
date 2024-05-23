import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from 'react-router-dom';

import menuIcon from '../../assets/nav/menuIcon.png'
import closeIcon from '../../assets/nav/closeIcon.png'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const handleLinkClick = (event, link) => {
    event.preventDefault;
    setActiveLink(link);
    console.log("Active link set to:", link); // testing
    setMenuOpen(false);
  };

  const links = [
    { href: "/", text: "About" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/contact", text: "Contact" },
    { href: "/resume", text: "Resume" },
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
              ? closeIcon
              : menuIcon
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={activeLink === link.href ? styles.active : ""}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
