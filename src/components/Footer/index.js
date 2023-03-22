// react
import React from "react";

// styles, icons
import styles from "./styles.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={styles.footerBody}>
      <div className={`${styles.logoCont} ${styles.box}`}>
        <h3>estarta</h3>
      </div>

      <div className={`${styles.linksCont} ${styles.box}`}>
        <ul>
          <li>Website Links</li>

          <li>Home</li>

          <li>Products</li>

          <li>Wishlist</li>
        </ul>
      </div>
      <div className={`${styles.socialLinksCont} ${styles.box}`}>
        <ul>
          <li>social Links</li>

          <li className={styles.socialIcons}>
            <span>
              <AiOutlineTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <GrInstagram />
            </span>
            <span>
              <FaYoutube />
            </span>
          </li>

          <li className={styles.email}>
            <span>Text us</span>
            <span className={styles.emailCon}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Text here.."
              />
            </span>
          </li>
        </ul>

        <p> Copyrights {year} &copy; estarta.com</p>
      </div>
    </div>
  );
}
