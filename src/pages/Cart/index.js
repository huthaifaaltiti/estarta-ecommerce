// react
import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
// components
import CartItem from "../../components/CartItem";
import Spinner from "../../components/Spinner/index";
// creator function
import { DeleteAllCartItems } from "../../redux/cart/actions";
// component
import Footer from "../../components/Footer";

// styles, icons
import styles from "./styles.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { loading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const totalPrices = cartItems.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  if (loading) return <Spinner />;
  return (
    <>
      <div className={styles.cartPage}>
        <div className={styles.cartItemsCont}>
          {/* Delete all-btn */}
          {cartItems?.length > 1 && (
            <button
              className={styles.deleteAllCartItemsBtn}
              onClick={() => {
                dispatch(DeleteAllCartItems());
              }}
            >
              Delete All
              <AiOutlineDelete className={styles.deleteAllCartItemsIcon} />
            </button>
          )}

          {cartItems?.length > 0 ? (
            cartItems?.map((cartItem, i) => (
              <CartItem key={i} cartItem={cartItem} />
            ))
          ) : (
            <div className={styles.noCartItemsCont}>
              <p>
                No items in your cart!
                <Link to="/products">
                  <span> Go back to products page.</span>
                </Link>
              </p>
            </div>
          )}
        </div>

        {cartItems?.length > 0 && (
          <div className={`${styles.checkoutPriceContMain} ${styles.slideIn}`}>
            <div className={styles.checkoutPriceContSubMain}>
              <div>
                <p>
                  Total price: <span>{totalPrices}</span>
                  <span> $</span>
                </p>
              </div>

              <div className={styles.checkoutBtnCont}>
                <button>
                  Checkout
                  <MdShoppingCartCheckout className={styles.checkoutBtnIcon} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      {cartItems?.length > 1 && <Footer />}
    </>
  );
}
