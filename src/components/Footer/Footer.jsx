import React, { useState } from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {

    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                @plucafo 2024
            </footer>
        </div>
    );
}