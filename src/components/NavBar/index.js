// react
import React from "react";
// redux
import { useSelector } from "react-redux";
// react-router-dom
import { Link } from "react-router-dom";
// icon
import { BiLogIn } from "react-icons/bi";
// styles
import Styles from "./styles.module.css";

export default function NavBar() {
  const { isAuth } = useSelector((state) => state.authReducer);
  return (
    <nav>
      <Link to="/">
        <div className={Styles.logo}>Estarta ECommerce</div>
      </Link>

      {!isAuth && (
        <div className={Styles.divBtn}>
          <Link to="/login">
            <button>
              Login
              <BiLogIn />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
