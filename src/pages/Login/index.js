// react
import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// creator function
import { Login } from "../../redux/authUser/actions";
//react-router-dpm
import { useNavigate } from "react-router-dom";
// component
// import BlueBtn from "../../components/BlueBtn/index";

// styles
import Styles from "./styles.module.css";

export default function LoginPage() {
  const { isAuth, loading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  function handleLogin() {
    // 1st approach
    // dispatch returns a promise so we can use "then()" with it
    // dispatch(Login(email)).then(res => {

    // Note: we returned a true from res from actions file, and false to the error
    //   if (res) {
    //     navigate("/")
    //   }
    // });

    dispatch(Login(email));
  }

  // 2nd approach => to go to the home page after user has logged gis mail and gor auth
  useEffect(() => {
    if (isAuth) {
      nav("/products");
    }
  }, [isAuth]);

  return (
    <div className={Styles.loginPage}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />

      <button disabled={loading} onClick={handleLogin}>
        {loading ? "Loading.." : "Login"}
      </button>

      {/* <BlueBtn disabled={loading} onClick={handleLogin} text={loading ? "Loading.." : "Login"} /> */}
    </div>
  );
}
