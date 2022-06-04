import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar, FaRegHeart, FaRupeeSign, FaHeart } from "react-icons/fa";
import "../ProductCard/Productcard.css";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import toast from "react-hot-toast";
import { useAuth } from "../../context/Authentication/auth-context";

export const Productcard = ({ product }) => {
  const {
    _id,
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
  const {
    cartState,
    cartDispatch,
    addProductToWishlist,
    addproductToCart,
    removeProductFromWishlist,
  } = useCartandWishList();
  const [isbtnDisable, setBtnDisabled] = useState(false);

  const { cartItem, wishListItem } = cartState;

  const {
    user: { isloggedIn },
  } = useAuth();
  const navigate = useNavigate();

  const showToast = () => {
    toast("inform you when product back in stock", { icon: "✔️" });
  };
  return (
    <div className="card-for-ecommerce pd-1 card-with-shadow">
      <div className="card-image-holder">
        <Link to={`/product/${_id}`}>
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
                {isloggedIn ? "GO TO CART" : "ADD TO CART"}
              </button>
            </Link>
          ) : (
            <span>
              <button
                disabled={isbtnDisable}
                className={
                  isSoldOut
                    ? "link-btn btn-lg btn-outline border-round "
                    : "link-btn btn-lg btn-outline border-round  "
                }
                onClick={
                  isSoldOut
                    ? showToast
                    : () => {
                        if (isloggedIn) {
                          addproductToCart(product, setBtnDisabled),
                            toast("added to cart", { icon: "✔️" });
                        } else {
                          toast("please logIn to continue", { icon: "✔️" });
                          navigate("/login");
                        }
                      }
                }
              >
                {isSoldOut ? "NOTIFY ME" : "ADD TO CART"}
              </button>
            </span>
          )}
          {wishListItem.some((item) => item._id === product._id) ? (
            <span>
              <Link to="">
                <button
                  className="productcard-wishlist-icon"
                  disabled={isbtnDisable}
                  onClick={() => {
                    if (isloggedIn) {
                      removeProductFromWishlist(product, setBtnDisabled),
                        toast("remove to wishlist", { icon: "✔️" });
                    } else {
                      toast("please logIn to continue", { icon: "✔️" });
                      navigate("/login");
                    }
                  }}
                >
                  {isloggedIn ? (
                    <FaHeart className="btn-wishlist" />
                  ) : (
                    <FaRegHeart className="btn-wishlist" />
                  )}
                </button>
              </Link>
            </span>
          ) : (
            <span>
              <button
                className="productcard-wishlist-icon"
                disabled={isbtnDisable}
                onClick={() => {
                  if (isloggedIn) {
                    addProductToWishlist(product, setBtnDisabled),
                      toast("added to wishlist", { icon: "✔️" });
                  } else {
                    toast("please logIn to continue", { icon: "✔️" });
                    navigate("/login");
                  }
                }}
              >
                <FaRegHeart className="btn-wishlist" />
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
