// react
import React from "react";
import { Link } from "react-router-dom";
// styles
import Styles from "./styles.module.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <div className={Styles.logo}>Estarta E-Commerce</div>
      </Link>

      <div className={Styles.divBtn}>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </nav>
  );
}
