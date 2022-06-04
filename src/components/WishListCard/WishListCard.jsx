import React, { useState } from "react";
import { FaStar, FaRupeeSign, FaHeart } from "react-icons/fa";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import { CartItemReducer } from "../../context/Reducer/CartItemReducer";
import "../../pages/WishListPage/WishListPage.css";
import "../ProductCard/Productcard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const WishListCard = ({ product }) => {
  const {
    cartState,
    cartDispatch,
    removeProductFromWishlist,
    addproductToCart,
  } = useCartandWishList();
  const [isDisabled, setIsDisabled] = useState(false);
  const [iswishlistBtnDisabled, setWishListBtnDisabled] = useState(false);

  const {
    productName,
    brand,
    isRatingGood,
    originalPrice,
    sellingPrice,
    rating,
    image,
    discountOffer,
    isSoldOut,
  } = product;

  return (
    <div className="card-for-ecommerce pd-1 card-with-shadow">
      <div className="card-image-holder">
        <Link to={`/product/${product._id}`}>
          <img src={image} className="card-image" alt={productName} />
          {isSoldOut && <span className="sold-out-badge">Sold out</span>}
        </Link>
      </div>

      <div className="card-body">
        <span className="card-title fw-300">{productName}</span>
        <p className="card-detail">by {brand}</p>
        <span className="discount">
          <FaRupeeSign className="rupees-sign-wishlist" />
          {sellingPrice}
        </span>
        <p className="price">
          <FaRupeeSign className="rupees-sign-wishlist" />
          {originalPrice}
        </p>
        <p className="discountTag">({discountOffer})</p>
        <span className="rating-badge">
          <div
            className={
              isRatingGood
                ? "rating-container bg-green border-round"
                : "rating-container bg-yellow border-round"
            }
          >
            <div className="rating-with-icon">
              {rating}
              <FaStar />
            </div>
          </div>
        </span>

        <div className="btns-in-flex mt-2">
          <span>
            <button
              className="btn fontcolor-pink border-round fw-bold"
              disabled={isDisabled}
              onClick={
                isSoldOut
                  ? () => {
                      toast("Inform you when product back in stock", {
                        icon: "✔️",
                      });
                    }
                  : () => {
                      addproductToCart(product, setIsDisabled),
                        toast("added to cart", { icon: "✔️" });
                    }
              }
            >
              {isSoldOut ? "NOTIFY ME" : " ADD TO CART"}
            </button>
          </span>
          <span>
            <button
              className="btn-wishlist wishlistcard-button"
              disabled={iswishlistBtnDisabled}
              onClick={() => {
                removeProductFromWishlist(product, setWishListBtnDisabled),
                  toast("Removed from wishlist", { icon: "❌" });
              }}
            >
              <FaHeart />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
