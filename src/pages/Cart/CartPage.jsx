import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorMessage,
  HorizontalCard,
  TextOnlyCardWithPrice,
} from "../../components/index";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import "../Cart/Cartpage.css";

export const CartPage = () => {
  const { cartState } = useCartandWishList();
  const { cartItem } = cartState;

  return (
    <div className="main-content-container">
      <h2 className="heading">My Cart</h2>
      {cartItem.length === 0 ? (
        <Link to="/productpage">
          <p className="wishlist-msg">
            Your Cart is Empty...
            <span className="span-msg">Let's Shop</span>
          </p>
        </Link>
      ) : (
        <div className="cart-order-container">
          <div className="product-container">
            {cartItem.map((item) => {
              return <HorizontalCard item={item} key={item._id} />;
            })}
          </div>

          <div className="final-price-container">
            {cartItem.length === 0 ? "" : <TextOnlyCardWithPrice />}
          </div>
        </div>
      )}
    </div>
  );
};
