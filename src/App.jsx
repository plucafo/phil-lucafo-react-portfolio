import { useState } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
      <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
              <About />
              {/* Additional components can be added here */}
          </div>
          <Footer />
      </div>
  );
}

export default App;
