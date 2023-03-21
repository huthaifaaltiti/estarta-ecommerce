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
  const totalPrices = cartItems.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

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

      {cartItems?.length > 0 && (
        <div className={styles.checkoutPriceContMain}>
          <div className={styles.checkoutPriceContSubMain}>
            <div>
              <p>
                Total price: <span>{totalPrices}</span>
                <span> $</span>
              </p>
            </div>

            <div className={styles.checkoutBtnCont}>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
