// react
import React, { useEffect, useState } from "react";
// redux
import { useSelector } from "react-redux";
// react-router-dom
import { Link, useLocation } from "react-router-dom";

// icon
import { BiLogIn } from "react-icons/bi";
// styles
import Styles from "./styles.module.css";

export default function NavBar() {
  const { isAuth } = useSelector((state) => state.authReducer);

  const locationOfUser = useLocation();
  const [showLoginBtn, setShowLoginBtn] = useState(true);

  useEffect(() => {
    if (locationOfUser.pathname === "/" || locationOfUser.pathname === "/login") {
      setShowLoginBtn(false);
    }
  }, []);

  return (
    <nav>
      <Link to="/">
        <div className={Styles.logo}>EECommerce</div>
      </Link>

      {/* When user has logged in don't show the btn */}
      {showLoginBtn && !isAuth && (
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
