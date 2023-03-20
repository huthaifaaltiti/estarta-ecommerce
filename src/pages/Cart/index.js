// react
import React from "react";
//react redux
import { useSelector } from "react-redux";

// styles
import styles from "./styles.module.css";
import { FaSitemap } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import {
  AiFillDollarCircle,
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItemsCont}>
        {cartItems?.length > 0 ? (
          cartItems?.map((cartItem) => (
            <div className={styles.cartItem}>
              <header className={styles.cartItemHeader}>
                {/* <div className={styles.cartItemId}>{cartItem?.id}</div> */}
                <div className={styles.cartItemName}>
                  <div>
                    <FaSitemap className={styles.cartItemNameIcon} />
                    {cartItem?.name}
                  </div>

                  <div className={styles.cartItemReact}>
                    <span>
                      <AiOutlineHeart
                        className={styles.cartItemNameHeartIcon}
                      />

                      <AiFillHeart
                        className={styles.cartItemNameFillHeartIcon}
                      />
                    </span>
                  </div>
                </div>
              </header>

              <div className={styles.cartItemImgCont}>
                <img src={cartItem?.image_link} alt="Item" />
              </div>

              <div className={styles.cartItemFooter}>
                <div className={styles.cartItemPrice}>
                  <AiFillDollarCircle className={styles.cartItemPriceIcon} />
                  {cartItem?.price} <span>$</span>
                </div>

                <div className={styles.cartItemRating}>
                  <BsFillEmojiSmileFill className={styles.cartItemRateIcon} />

                  {new Array(cartItem?.rating)
                    .fill(<AiFillStar />)
                    .map((star, i) => (
                      <span className={styles.cartRatingStar} key={i}>
                        {star}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noCartItemsCont}>
            <p>No items in your cart!</p>
          </div>
        )}
      </div>
    </div>
  );
}
