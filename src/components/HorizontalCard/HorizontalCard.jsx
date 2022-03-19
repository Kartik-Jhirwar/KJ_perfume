import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";
import { useCartandWishList } from "../../context/CartAndWishlist-context";

export const HorizontalCard = ({ item }) => {
  const {
    productName,
    qty,
    sellingPrice,
    originalPrice,
    discountOffer,
    image,
  } = item;
  const { cartState, cartDispatch, wishListState, wishListDispatch } =
    useCartandWishList();
  return (
    <div className="horizontal-card pd-1 border-round">
      <div className="card-image-holder">
        <img src={image} className="card-image" alt="product-Image" />
      </div>

      <div className="card-body">
        <span className="card-title fw-300">{productName}</span>
        <p className="card-detail card-qty-flex">
          Quantity :
          {item.qty === 1 ? (
            <FaTrashAlt
              onClick={() =>
                cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item })
              }
            />
          ) : (
            <BiMinus
              onClick={() =>
                cartDispatch({ type: "DECREMENT_QUANTITY", payload: item })
              }
            />
          )}
          <span className="qty">{qty}</span>
          <BiPlus
            onClick={() =>
              cartDispatch({ type: "INCREMENT_QUANTITY", payload: item })
            }
          />
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
            <button className="btn button-lg fc-pink border-round">
              REMOVE
            </button>
          </span>
          <span className="button-cart">
            <button className="link-btn border-round">ADD TO WISHLIST</button>
          </span>
        </div>
      </div>
    </div>
  );
};
