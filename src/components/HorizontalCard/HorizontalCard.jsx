import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export const HorizontalCard = ({ item }) => {
  const {
    productName,
    qty,
    sellingPrice,
    originalPrice,
    discountOffer,
    image,
  } = item;
  const {
    cartState,
    removeProductFromCart,
    incrementCartQuantity,
    decrementCartQuantity,
    addProductToWishlist,
  } = useCartandWishList();
  const { wishListItem } = cartState;
  const [isbtnDisable, setBtnDisabled] = useState(false);
  const [isPlusDisable, setisPlusBtnDisabled] = useState(false);
  const [isminusbtnDisable, setMinusBtnDisabled] = useState(false);

  //  adding item to wishlist and removing that item from cart

  const addToWishListRemoveFromCart = (product) => {
    const newWishlistItem = wishListItem.some(
      (item) => item._id === product._id
    );

    if (newWishlistItem) {
      removeProductFromCart(product);
    } else {
      removeProductFromCart(product);
      addProductToWishlist(product, setBtnDisabled);
    }
  };

  return (
    <div className="horizontal-card pd-1 border-round">
      <div className="card-image-holder">
        <Link to={`/product/${item._id}`}>
          <img src={image} className="card-image" alt="product-Image" />
        </Link>
      </div>

      <div className="card-body">
        <span className="card-title fw-300">{productName}</span>
        <p className="card-detail card-qty-flex">
          Quantity :
          <span className="flex-center">
            {item.qty === 1 ? (
              <button className="horizontal-card-button-icon flex-center ">
                <FaTrashAlt
                  onClick={() => {
                    removeProductFromCart(item),
                      toast("Removed from cart", { icon: "❌" });
                  }}
                />
              </button>
            ) : (
              <button
                className="horizontal-card-button-icon flex-center"
                disabled={isminusbtnDisable}
                onClick={() => decrementCartQuantity(item, setMinusBtnDisabled)}
              >
                <BiMinus />
              </button>
            )}
            <span className="qty">{qty}</span>
            <button
              className="horizontal-card-button-icon flex-center"
              disabled={isPlusDisable}
              onClick={() => incrementCartQuantity(item, setisPlusBtnDisabled)}
            >
              <BiPlus />
            </button>
          </span>
        </p>
        <span className="price-details">
          <p className="price-cut">
            <FaRupeeSign className="rupees-sign-cart" />
            {originalPrice}
          </p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {sellingPrice}
          </span>
          <p className="discount-tag">({discountOffer})</p>
        </span>

        <div className="button-container">
          <span className="button-cart">
            <button
              className="btn button-lg fontcolor-pink border-round"
              onClick={() => {
                removeProductFromCart(item),
                  toast("Removed from cart", { icon: "❌" });
              }}
            >
              REMOVE
            </button>
          </span>
          <span className="button-cart">
            <button
              className="link-btn border-round"
              disabled={isbtnDisable}
              onClick={() => {
                addToWishListRemoveFromCart(item),
                  toast("Added to wishList", { icon: "✔️" });
              }}
            >
              ADD TO WISHLIST
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
