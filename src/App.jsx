import React from "react";
import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";

function App() {
  // const foo = "bar";
  // const [data, setData] = React.useState("");

  // React.useEffect(() => {
  //   setData("BALLSSSS");
  //   fetch().then((res) => {
  //     setData(res.body);
  //   });
  // }, []);

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
