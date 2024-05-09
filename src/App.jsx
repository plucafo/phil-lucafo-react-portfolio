import { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
