import React, { useState } from "react";
import "./SingleProductcard.css";
import { BiRupee } from "react-icons/bi";
import { FaTag, FaRegHeart, FaStar, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import toast from "react-hot-toast";
import { useAuth } from "../../context/Authentication/auth-context";

export const SingleProductCard = ({ Product }) => {
  const {
    cartState,
    cartDispatch,
    addProductToWishlist,
    addproductToCart,
    removeProductFromWishlist,
  } = useCartandWishList();

  const { cartItem, wishListItem } = cartState;

  const [isbtnDisable, setBtnDisabled] = useState(false);
  const {
    user: { isloggedIn },
  } = useAuth();
  const {
    image,
    productName,
    sellingPrice,
    originalPrice,
    discountOffer,
    isRatingGood,
    rating,
    fastDelivery,
    brand,
    quantity,
    description,
    isSoldOut,
  } = Product;

  const showToast = () => {
    toast("inform you when product back in stock", { icon: "✔️" });
  };

  return (
    <div className="product-image-details-container">
      <div className="image-of-product mt-3">
        <img src={image} className="image-of-product" alt={productName} />
      </div>
      <div className="product-details">
        <h2 className="heading heading-of-single-product-page">
          {productName}
        </h2>
        <div className="price-detail-container flex-center">
          <span className="discount flex-center">
            <BiRupee />
            {sellingPrice}
          </span>
          <p className="price flex-center">
            <BiRupee />
            {originalPrice}
          </p>
          <p className="discount-tag-for-single-product text-size-md">
            ({discountOffer})
          </p>
          <span className="rating-badge rating-badge-single-product">
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
        </div>
        <span className="tags-container text-size-sm">
          <FaTag /> {fastDelivery ? "Fastest Delivery" : "3-4 Days Delivery"}
        </span>
        <span className="tags-container text-size-sm">
          <FaTag /> Inclusive of All Taxes
        </span>

        <div className="perfume-manufacture-detail mt-3 text-size-sm">
          <span className="fw-bold gray-text">
            Brand: <span className="pc-detail">{brand} </span>
          </span>
          <span className="fw-bold gray-text">
            Item Volume:<span className="pc-detail">{quantity}</span>
          </span>
          <span className="fw-bold gray-text">
            Details:
            <span className="detail-of-product flex-center">{description}</span>
          </span>
        </div>
        <div className="btns-in-flex mt-3">
          {cartItem.some((item) => item._id === Product._id) ? (
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
                          addproductToCart(Product, setBtnDisabled),
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
          {wishListItem.some((item) => item._id === Product._id) ? (
            <span>
              <Link to="">
                <button
                  className="productcard-wishlist-icon"
                  disabled={isbtnDisable}
                  onClick={() => {
                    if (isloggedIn) {
                      removeProductFromWishlist(Product, setBtnDisabled),
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
                    addProductToWishlist(Product, setBtnDisabled),
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
