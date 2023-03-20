// react
import React from "react";
//react redux
import { useSelector } from "react-redux";

// styles
import styles from "./styles.module.css";
import { FaSitemap } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

import {
  AiFillDollarCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  console.log({cartItems});

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItemsCont}>
        {cartItems?.length > 0 ? (
          cartItems?.map((cartItem, i) => 
          {
            return  <div key={i} className={styles.cartItem}>
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

              {/* cart-item footer */}
              <div className={styles.cartItemFooter}>
                <div className={styles.cartItemPrice}>
                  <AiFillDollarCircle className={styles.cartItemPriceIcon} />
                  {cartItem?.price} <span>$</span>
                </div>

                <div className={styles.cartItemCount}>
                  <span>
                    <MdAddCircleOutline className={styles.cartItemInc} />
                  </span>
                  <input type="text" defaultValue={"1"} />

                  <span>
                    <MdRemoveCircleOutline className={styles.cartItemInc} />
                  </span>
                </div>

                <div className={styles.cartItemRating}>
                  <BsFillEmojiSmileFill className={styles.cartItemRateIcon} />
                  <span> {cartItem?.rating}</span>
                </div>
              </div>
            </div>
          }
           
          )
        ) : (
          <div className={styles.noCartItemsCont}>
            <p>No items in your cart!</p>
          </div>
        )}
      </div>
    </div>
  );
}
