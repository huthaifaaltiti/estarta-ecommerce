// react
import React from "react";
// react-router-dom
import { useNavigate } from "react-router-dom";
// component
import BlueBtn from "../../components/BlueBtn/index";

// lottiefiles
import { Player } from "@lottiefiles/react-lottie-player";
import notfoundData from "../../assets/gifs/Jhzemsdgeo.json";
// styles
import styles from "./styles.module.css";

export default function NotFound() {
  const nav = useNavigate();

  const notFoundedGIFData = {
    animationData: notfoundData,
  };

  return (
    <div className={styles.notFoundPage}>
      <Player
        className={styles.player}
        autoplay
        loop
        src={notFoundedGIFData.animationData}
      ></Player>

      <div className={styles.errorMessage}>
      <span onClick={() => {
            nav("/");
          }}>

        <BlueBtn
          
          text="back to home page"
        />
      </span>
        
      </div>
    </div>
  );
}
