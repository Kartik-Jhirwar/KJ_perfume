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
  const { wishListItem } = wishListState;

  //  adding item to wishlist and removing that item from cart

  const addToWishListRemoveFromCart = (product) => {
    const newWishlistItem = wishListItem.find(
      (item) => item._id === product._id
    );
    if (newWishlistItem) {
      cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: product });
    } else {
      cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: product });
      wishListDispatch({ type: "ADD_ITEM_TO_WISHLIST", payload: product });
    }
  };

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
            <button
              className="btn button-lg fontcolor-pink border-round"
              onClick={() =>
                cartDispatch({ type: "REMOVE_ITEM_FROM_CART", payload: item })
              }
            >
              REMOVE
            </button>
          </span>
          <span className="button-cart">
            <button
              className="link-btn border-round"
              onClick={() => addToWishListRemoveFromCart(item)}
            >
              ADD TO WISHLIST
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
