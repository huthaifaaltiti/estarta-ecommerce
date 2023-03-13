// react
import React, { useState, useEffect } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// component
import BlueBtn from "../../components/BlueBtn/index";

// styles
import styles from "./styles.module.css";

export default function Welcome() {
  // auto changed home headers
  const headersHome = [
    "We provide the world with professionalism.",
    "Software Products that fulfils the need.",
    "Estarta E-Commerce App",
  ];
  const [currentHeaderIndex, setCurrentHeaderHomeIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentHeaderHomeIndex(
        (currentIndex) => (currentIndex + 1) % headersHome.length
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className={styles.homePage}>
        <h1
          className={`${currentHeaderIndex === 2 ? styles.h1Main : styles.h1}`}
        >
          {headersHome[currentHeaderIndex]}
        </h1>

        <h2 className={styles.h2}>
          <Link to="/login">
            <BlueBtn text="Login to continue" />
          </Link>
        </h2>
      </div>
    </>
  );
}
