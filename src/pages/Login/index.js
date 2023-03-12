// react
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import Styles from "./styles.module.css";
// login creator function
import { Login } from "../../redux/authUser/actions";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { isAuth, loading } = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleLogin() {

    // 1st approach
    // dispatch returns a promise so we can use "then()" with it
    // dispatch(Login(email)).then(res => {

      // Note: we returned a true from res from actions file, and false to the error
    //   if (res) {
    //     navigate("/")
    //   }
    // });

    dispatch(Login(email))
  }

  // 2nd approach => to go to the home page after user has logged gis mail and gor auth
  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [isAuth])

  return (
    <div className={Styles.loginPage}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <button disabled={loading} onClick={handleLogin}>{loading ? "Loading.." : "Login"}</button>
    </div>
  );
}
