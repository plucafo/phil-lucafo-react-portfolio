import { useState } from "react";
import styles from "./App.module.css";
import { Outlet } from 'react-router-dom';
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
