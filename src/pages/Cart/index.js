// react
import React from "react";
// redux
import { useSelector } from "react-redux";
// component
import CartItem from "../../components/CartItem";

// styles
import styles from "./styles.module.css";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartItemsCont}>
        {cartItems?.length > 0 ? (
          cartItems?.map((cartItem, i) => (
            <CartItem key={i} cartItem={cartItem} />
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
