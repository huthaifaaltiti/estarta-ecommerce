// react
import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// react-router-dom
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
// creator function
import { Logout } from "../../redux/authUser/actions";

// styles, icons
import styles from "./styles.module.css";
import { BiLogIn, BiUserPin, BiUser, BiCart, BiLogOut } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

export default function NavBar() {
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);

  const locationOfUser = useLocation();
  const [showLoginBtn, setShowLoginBtn] = useState(true);
  const [userBtnClicked, setUserBtnClicked] = useState(true);

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
    // dispatch returns promise, so anything get back from Logout(), "res" will catch it.
    dispatch(Logout()).then((res) => {
      if (res) nav("/home");
    });
  }

  function handleUserPanel() {
    setUserBtnClicked(!userBtnClicked);
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
          <NavLink className={styles.navLinkHome} to="/home">
            Home
          </NavLink>

          <NavLink className={styles.navLinkProducts} to="/products">
            Products
          </NavLink>

          {/* Uer cart */}
          <Link to="/cart">
            <span className={styles.authUserIcon}>
              <BiCart />

              <span className={styles.userCartCounter}>
                {cartItems?.length || 0}
              </span>
            </span>
          </Link>

          <span
            onClick={handleUserPanel}
            className={`${styles.authUserIcon} ${styles.authUserFloatingBoxHovIcon}`}
          >
            <BiUser />
          </span>

          {/* user float box  */}

          {userBtnClicked && (
            <div className={styles.authUserFloatingBox}>
              <span>
                <BiUserPin />
                <span className={styles.authUserData}>{user?.email}</span>
              </span>

              <span className={styles.wishlist}>
                <Link to="/wishlist">
                  <AiFillHeart />
                  Wishlist
                </Link>
              </span>

              <span onClick={handleLogout} className={styles.logoutContainer}>
                <BiLogOut />
                <span className={styles.authUserData}>Logout</span>
              </span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
