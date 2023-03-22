// react
import React, { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// action creator
import { FetchProducts } from "../../redux/products/actions";
// creator functions
import { AddProductToCart } from "../../redux/cart/actions";
import { AddProductToWishlist } from "../../redux/wishlist/actions";
// component
import Footer from "../../components/Footer";

// styles, icons
import styles from "./styles.module.css";
import { FaSitemap } from "react-icons/fa";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";
import {
  AiFillDollarCircle,
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { type } from "@testing-library/user-event/dist/type";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  // cart animation
  const [clickedProduct, setClickedProduct] = useState(null);

  function handleAddToCart(product, e) {
    e.preventDefault();

    // cart animation
    setClickedProduct(product);
    setTimeout(() => {
      setClickedProduct(null);
    }, 1000);

    dispatch(AddProductToCart(product));
  }

  function handleAddToWishlist(product) {
    dispatch(AddProductToWishlist(product));
  }

  useEffect(() => {
    if (products) dispatch(FetchProducts());
  }, []);

  return (
    <>
      <div className={styles.pageBody}>
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

        {products?.map((product) => (
          <div
            key={product?.id}
            className={`${styles.slideIn} ${styles.productsItem}`}
          >
            <header className={styles.itemHeader}>
              <div className={styles.itemId}>{product?.id}</div>
              <div className={styles.itemName}>
                <div>
                  <FaSitemap className={styles.itemNameIcon} /> {product?.name}
                </div>

                <div className={styles.itemReact}>
                  <span onClick={() => handleAddToWishlist(product)}>
                    <AiOutlineHeart className={styles.itemNameHeartIcon} />

                    <AiFillHeart className={styles.itemNameFillHeartIcon} />
                  </span>

                  {/* cart icon */}
                  <BiCartAdd
                    onClick={(e) => handleAddToCart(product, e)}
                    className={styles.itemNameAddCartIcon}
                  />
                </div>
              </div>
            </header>

            <div className={styles.itemImgCont}>
              <img
                className={styles.itemPic}
                src={product?.image_link}
                alt={product?.name}
              />
            </div>

            <div className={styles.itemFooter}>
              <div className={styles.itemPrice}>
                <AiFillDollarCircle className={styles.itemPriceIcon} />
                {product?.price} <span>$</span>
              </div>

              <div className={styles.itemRating}>
                <BsFillEmojiSmileFill className={styles.itemRateIcon} />

                {new Array(product?.rating)
                  .fill(<AiFillStar />)
                  .map((star, i) => (
                    <span className={styles.ratingStar} key={i}>
                      {star}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
