// react
import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// react-router-dom
import { Link, useLocation, useNavigate } from "react-router-dom";
// creator function
import { Logout } from "../../redux/authUser/actions";



// icon
import { BiLogIn, BiUserPin, BiUser, BiCart, BiLogOut } from "react-icons/bi";
// styles
import styles from "./styles.module.css";

export default function NavBar() {
  const { isAuth, user, loading } = useSelector((state) => state.authReducer);

  const locationOfUser = useLocation();
  const [showLoginBtn, setShowLoginBtn] = useState(true);

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (
      locationOfUser.pathname === "/" ||
      locationOfUser.pathname === "/login"
    ) {
      setShowLoginBtn(false);
    }
  }, [locationOfUser]);

  function handleLogout() {
    // dispatch returns promise, so anything get back from Logout(), res will catch it.
    dispatch(Logout()).then((res) => {
      if (res) nav("/home");
    });
  }



  return (
    <nav>
      <Link to="/">
        <div className={styles.logo}>EECommerce</div>
      </Link>

      {/* When user has logged in don't show the btn */}
      {showLoginBtn && !isAuth && (
        <div className={styles.divBtn}>
          <Link to="/login">
            <button>
              Login
              <BiLogIn />
            </button>
          </Link>
        </div>
      )}

      {/* When user has logged-in show log out btn */}
      {isAuth && (
        <div className={styles.authNavContents}>
          <span className={styles.authUserIcon}>
            <BiCart />
          </span>
          <span
            className={`${styles.authUserIcon} ${styles.authUserFloatingBoxHovIcon}`}
          >
            <BiUser />
          </span>

          <div className={styles.authUserFloatingBox}>
            <span>
              <BiUserPin />
              <span className={styles.authUserData}>{user?.email}</span>
            </span>

            <span onClick={handleLogout} className={styles.logoutContainer}>
              <BiLogOut />
              <span className={styles.authUserData}>Logout</span>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
