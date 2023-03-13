// react
import React from "react";
// styles
import styles from "./styles.module.css";

export default function index(props) {
  return <button className={styles.blueBtn}>{props.text}</button>;
}
