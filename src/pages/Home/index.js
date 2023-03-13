// react
import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// component
import BlueBtn from "../../components/BlueBtn/index";
// styles
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.homePage}>
        <h1 className={styles.h1}>
          We provide the world with professionalism!
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
