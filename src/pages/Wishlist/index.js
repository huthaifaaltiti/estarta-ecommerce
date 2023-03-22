// react
import React, { useEffect, useState } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
// creator function
import {
  DeleteWishlistItem,
  DeleteAllWishlistItems,
} from "../../redux/wishlist/actions";
import { AddProductToCart } from "../../redux/cart/actions";
// component
import Footer from "../../components/Footer/index";

// styles, icons
import styles from "./styles.module.css";
import { FaSitemap } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillCartPlusFill, BsFillEmojiSmileFill } from "react-icons/bs";

export default function Wishlist() {
  const { wishlistItems } = useSelector((state) => state.WishlistReducer);
  const dispatch = useDispatch();

  // cart animation
  const [clickedProduct, setClickedProduct] = useState(null);

  function handleDeleteWishlistItem(wishlistItem) {
    dispatch(DeleteWishlistItem(wishlistItem));
  }

  function handleAddToCartWishlistItem(product) {
    dispatch(AddProductToCart(product));
    dispatch(DeleteWishlistItem(product));

    // cart animation
    setClickedProduct(product);
    setTimeout(() => {
      setClickedProduct(null);
    }, 1000);
  }

  return (
    <>
      <div className={styles.wishlistPage}>
        {/* animated product after clicking addToCart icon*/}
        {clickedProduct && (
          <div className={styles.animatedProduct}>
            <div className={styles.animatedProductName}>
              {clickedProduct?.name}
            </div>

            <div className={styles.animatedProductImgCon}>
              <img
                src={clickedProduct?.image_link}
                alt={clickedProduct?.name}
              />
            </div>
          </div>
        )}

        <div className={styles.wishlistItemsCont}>
          {/* Delete all btn */}
          {wishlistItems?.length > 1 && (
            <button
              className={styles.deleteAllWishlistItemsBtn}
              onClick={() => {
                dispatch(DeleteAllWishlistItems());
              }}
            >
              Delete All
              <AiOutlineDelete className={styles.deleteAllWishlistItemsIcon} />
            </button>
          )}

          {wishlistItems?.length > 0 ? (
            wishlistItems.map((wishlistItem, i) => (
              <div
                key={i}
                className={`${styles.wishlistItem} ${styles.slideIn}`}
              >
                <header className={styles.wishlistItemHeader}>
                  <h3 className={styles.wishlistItemName}>
                    <FaSitemap className={styles.wishlistItemNameIcon} />
                    {wishlistItem?.name}
                  </h3>

                  <div className={styles.wishlistItemReact}>
                    <span className={styles.wishlistItemDelete}>
                      <AiOutlineDelete
                        onClick={() => handleDeleteWishlistItem(wishlistItem)}
                        className={styles.deleteWishlistItemIcon}
                      />
                    </span>
                    <span className={styles.wishlistItemAddToCart}>
                      <BsFillCartPlusFill
                        onClick={() =>
                          handleAddToCartWishlistItem(wishlistItem)
                        }
                        className={styles.addToCartWishlistItemIcon}
                      />
                    </span>
                  </div>
                </header>

                <div className={styles.wishlistItemBodyImage}>
                  <img src={wishlistItem?.image_link} alt="Wishlist item" />
                </div>

                <footer className={styles.wishlistItemFooter}>
                  <span className={styles.wishlistItemPrice}>
                    {wishlistItem?.price}
                    <span>$</span>
                  </span>
                  <span className={styles.wishlistItemRate}>
                    <BsFillEmojiSmileFill
                      className={styles.wishlistItemRateIcon}
                    />

                    <span>{wishlistItem?.rating}</span>
                  </span>
                </footer>
              </div>
            ))
          ) : (
            <div className={styles.noItemsMessage}>
              <p>
                No items in your wishlist!
                <Link to="/products">
                  <span> Go back to products page.</span>
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* footer */}
      {wishlistItems?.length > 1 && <Footer />}
    </>
  );
}
