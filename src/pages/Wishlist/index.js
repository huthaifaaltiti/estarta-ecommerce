// react
import React from "react";
// redux
import { useSelector } from "react-redux";

// styles, icons
import styles from "./styles.module.css";
import { FaSitemap } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFillCartPlusFill, BsFillEmojiSmileFill } from "react-icons/bs";

export default function Wishlist() {
  const { wishlistItems } = useSelector((state) => state.WishlistReducer);
  console.log({ wishlistItems });

  return (
    <div className={styles.wishlistPage}>
      <div className={styles.wishlistItemsCont}>
        {wishlistItems.map((wishlistItem, i) => (
          <div key={i} className={styles.wishlistItem}>
            <header className={styles.wishlistItemHeader}>
              <h3 className={styles.wishlistItemName}>
                <FaSitemap className={styles.wishlistItemNameIcon} />
                {wishlistItem?.name}
              </h3>

              <div className={styles.wishlistItemReact}>
                <span className={styles.wishlistItemDelete}>
                  <AiOutlineDelete className={styles.deleteWishlistItemIcon} />
                </span>
                <span className={styles.wishlistItemAddToCart}>
                  <BsFillCartPlusFill
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
                <BsFillEmojiSmileFill className={styles.wishlistItemRateIcon} />

                <span>{wishlistItem?.rating}</span>
              </span>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}
