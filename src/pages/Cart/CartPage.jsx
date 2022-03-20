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
  const { cartState, cartDispatch, wishListState, wishListDispatch } =
    useCartandWishList();
  const { cartItem, cartCount } = cartState;
  return (
    <div className="main-content-container">
      <h2 className="heading">My Cart</h2>
      {cartItem.length === 0 ? (
        <Link to="/productpage">
          <ErrorMessage message={"your cart is empty"} />
        </Link>
      ) : (
        <div className="cart-order-container">
          <div className="product-container">
            {cartItem.map((item) => {
              return <HorizontalCard item={item} />;
            })}
          </div>

          <div className="final-price-container">
            {cartItem.length === 0 ? (
              ""
            ) : (
              <TextOnlyCardWithPrice cartState={cartState} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
