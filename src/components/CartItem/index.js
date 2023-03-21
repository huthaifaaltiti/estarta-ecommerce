// react
import React from "react";
// redux
import { useDispatch } from "react-redux";

// creator functions
import {
  AddProductToCart,
  RemoveProductFromCart,
  MinProductFromCart,
} from "../../redux/cart/actions";

// styles, icons
import styles from "./styles.module.css";
import { FaSitemap } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import {
  AiFillDollarCircle,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  function handlePlusBtn(cartItem) {
    dispatch(AddProductToCart(cartItem));
  }

  function handleDeleteBtn(cartItem) {
    dispatch(RemoveProductFromCart(cartItem));
  }

  function handleMinBtn(cartItem) {
    dispatch(MinProductFromCart(cartItem));
  }
  return (
    <div  className={styles.cartItem}>
      <header className={styles.cartItemHeader}>
        {/* <div className={styles.cartItemId}>{cartItem?.id}</div> */}
        <div className={styles.cartItemName}>
          <div>
            <FaSitemap className={styles.cartItemNameIcon} />
            {cartItem?.name}
          </div>

          <div className={styles.cartItemReact}>
          <AiOutlineDelete className={styles.deleteCartItemIcon} onClick={() => handleDeleteBtn(cartItem)}/>
            <span>
              <AiOutlineHeart className={styles.cartItemNameHeartIcon} />

              <AiFillHeart className={styles.cartItemNameFillHeartIcon} />
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
            {/* + btn */}

            <MdAddCircleOutline
              onClick={() => handlePlusBtn(cartItem)}
              className={styles.cartItemInc}
            />
          </span>
          <input type="text" defaultValue={1} value={cartItem?.quantity} />

          {/* - btn */}
          <span>
            <MdRemoveCircleOutline
              onClick={() => handleMinBtn(cartItem)}
              className={styles.cartItemInc}
            />
          </span>
        </div>


       

        <div className={styles.cartItemRating}>
          <BsFillEmojiSmileFill className={styles.cartItemRateIcon} />
          <span> {cartItem?.rating}</span>
        </div>
      </div>
    </div>
  );
}
