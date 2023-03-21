// react
import React from "react";

import BlueBtn from "../../components/BlueBtn/index";
import { BsFillMicFill, BsFillPeopleFill } from "react-icons/bs";
import { BiMedal } from "react-icons/bi";

// styles
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <div className={`${styles.HomePageLeft} ${styles.slideIn}`}>
        <h2>We are helping to grow your business.</h2>

        <p>
          An international company specializing in User Experience & eCommerce
          Apps, we combine innovation with digital craftsmanship to help brands
          fulfill their potential.
        </p>

        <BlueBtn className={styles.blueBtnWel} text="Learn more about us" />
      </div>
      <div className={`${styles.HomePageRight} ${styles.slideIn}`}>
        {/* sector 1 */}
        <div className={styles.homePageRightSector}>
          <div className={styles.homePageRightSectorPicCont}>
            <span>
              <BsFillMicFill className={styles.homePageRightSectorPic} />
            </span>
          </div>
          <div className={styles.homePageRightSectorInfo}>
            <h3>what we do</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              distinctio architecto vero modi! Voluptate possimus neque unde,
              quisquam maxime explicabo consequatur iure ad deserunt sequi
              inventore magnam cumque numquam ipsum.
            </p>
          </div>
        </div>

        {/* sector 2 */}
        <div className={styles.homePageRightSector}>
          <div className={styles.homePageRightSectorPicCont}>
            <span>
              <BsFillPeopleFill className={styles.homePageRightSectorPic} />
            </span>
          </div>
          <div className={styles.homePageRightSectorInfo}>
            <h3>meat our team</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              distinctio architecto vero modi! Voluptate possimus neque unde,
              quisquam maxime explicabo consequatur iure ad deserunt sequi
              inventore magnam cumque numquam ipsum.
            </p>
          </div>
        </div>

        {/* sector 3 */}

        <div className={styles.homePageRightSector}>
          <div className={styles.homePageRightSectorPicCont}>
            <span>
              <BiMedal className={styles.homePageRightSectorPic} />
            </span>
          </div>
          <div className={styles.homePageRightSectorInfo}>
            <h3>our creations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              distinctio architecto vero modi! Voluptate possimus neque unde,
              quisquam maxime explicabo consequatur iure ad deserunt sequi
              inventore magnam cumque numquam ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
