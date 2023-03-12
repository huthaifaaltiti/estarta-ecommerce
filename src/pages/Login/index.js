// react
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import Styles from "./styles.module.css";

import { Login } from "../../redux/authUser/actions";
// import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  function handleLogin() {
    dispatch(Login(email));
  }

  return (
    <div className={Styles.loginPage}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
