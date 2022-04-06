import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaRupeeSign, FaHeart } from "react-icons/fa";
import "../ProductCard/Productcard.css";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import toast from "react-hot-toast";

export const Productcard = ({ product }) => {
  const {
    image,
    isSoldOut,
    productName,
    brand,
    sellingPrice,
    originalPrice,
    discountOffer,
    isRatingGood,
    rating,
  } = product;
  const { cartState, cartDispatch, wishListState, wishListDispatch } =
    useCartandWishList();

  const { cartItem, cartCount } = cartState;
  const { wishListItem, wishListCount } = wishListState;

  const showToast = () => {
    toast("inform you when product back in stock", { icon: "✔️" });
  };
  return (
    <div className="card-for-ecommerce pd-1 card-with-shadow">
      <div className="card-image-holder">
        <Link to="#">
          <img src={image} className="card-image" alt="product-image" />
        </Link>
        {isSoldOut && <span className="sold-out-badge">Sold out</span>}
      </div>

      <div className="card-body">
        <span className="card-title fw-300">{productName}</span>
        <p className="card-detail">by {brand}</p>
        <span className="discount">
          <FaRupeeSign className="rupees-sign" /> {sellingPrice}
        </span>
        <span className="price">
          <FaRupeeSign className="rupees-sign" />
          {originalPrice}
        </span>
        <p className="discountTag">({discountOffer})</p>
        <span className="rating-badge estee-badge">
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
        <div className="btns-in-flex">
          {cartItem.some((item) => item._id === product._id) ? (
            <Link to="/cart">
              <button className="link-btn btn-lg btn-outline border-round cursor-pointer">
                GO TO CART
              </button>
            </Link>
          ) : (
            <span>
              <button
                className={
                  isSoldOut
                    ? "link-btn btn-lg btn-outline border-round "
                    : "link-btn btn-lg btn-outline border-round  "
                }
                onClick={
                  isSoldOut
                    ? showToast
                    : () => {
                        cartDispatch({
                          type: "ADD_ITEM_TO_CART",
                          payload: product,
                        }),
                          toast("added to cart", { icon: "✔️" });
                      }
                }
              >
                {isSoldOut ? "NOTIFY ME" : "ADD TO CART"}
              </button>
            </span>
          )}
          {wishListItem.some((item) => item._id === product._id) ? (
            <span>
              <Link to="/wishList">
                <FaHeart className="btn-wishlist" />
              </Link>
            </span>
          ) : (
            <span>
              <FaRegHeart
                className="btn-wishlist"
                onClick={() => {
                  wishListDispatch({
                    type: "ADD_ITEM_TO_WISHLIST",
                    payload: product,
                  }),
                    toast("added to wishlist", { icon: "✔️" });
                }}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
