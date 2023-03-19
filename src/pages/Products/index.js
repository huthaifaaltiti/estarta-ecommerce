// react
import React, { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// action creator
import { FetchProducts } from "../../redux/products/actions";

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

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  return (
    <div className={styles.pageBody}>
      {products?.map((product) => (
        <div className={styles.productsItem}>
          <header className={styles.itemHeader}>
            <div className={styles.itemId}>{product?.id}</div>
            <div className={styles.itemName}>
              <div>
                <FaSitemap className={styles.itemNameIcon} /> {product?.name}
              </div>

              <div className={styles.itemReact}>
                <span>
                  <AiOutlineHeart className={styles.itemNameHeartIcon} />

                  <AiFillHeart className={styles.itemNameFillHeartIcon} />
                </span>
                <BiCartAdd className={styles.itemNameAddCartIcon} />
              </div>
            </div>
          </header>

          <div className={styles.itemImgCont}>
            <img
              className={styles.itemPic}
              src={product?.image_link}
              alt="Item"
            />
          </div>

          <div className={styles.itemFooter}>
            <div className={styles.itemPrice}>
              <AiFillDollarCircle className={styles.itemPriceIcon} />
              {product?.price} <span>$</span>
            </div>

            <div className={styles.itemRating}>
              <BsFillEmojiSmileFill className={styles.itemRateIcon} />

              {new Array(product?.rating).fill(<AiFillStar />).map((star) => (
                <span className={styles.ratingStar} key={product?.id}>
                  {star}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
