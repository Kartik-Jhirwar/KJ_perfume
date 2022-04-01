import React, { useState } from "react";
import "../nav/nav.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SearchBar } from "../Searchbar/searchbar";
import { FaRegHeart, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { Categories } from "../categories/Categories";
import { useProduct } from "../../context/product-context";
import { useCartandWishList } from "../../context/CartAndWishlist-context";

export const Nav = () => {
  const { state, dispatch } = useProduct();
  const { cartState, wishListState } = useCartandWishList();
  const { cartItem, cartCount } = cartState;
  const { wishListItem, wishListCount } = wishListState;

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "#10b981" : "",
  });

  return (
    <nav className="navbar">
      <div className="nav-content-container">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" style={getActiveLinkStyle}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/productpage"
              onClick={() => dispatch({ type: "SORT_CLEAR_CATEGORY" })}
              style={getActiveLinkStyle}
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <Categories />
          </li>
          <li className="nav-item">
            <SearchBar />
          </li>
        </ul>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img className="logo-image" src="./assets/Mehak.png" />
        </div>

        <div className="logo-text">
          <em>Mehak </em>
        </div>
      </div>
      <div className="nav-social-media-icons-container">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/login">
              <span className="nav-icon">
                <FaUserAlt title="Log In" />
              </span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/wishlist">
              <span className="nav-icon">
                <FaRegHeart title="WishList" />
              </span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/cart">
              <span className="nav-icon">
                <FaShoppingBag title="Cart" />
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {wishListItem.length === 0 ? (
        ""
      ) : (
        <span className="badge badge-wishlist flex-center text-size-sm text-white">
          {wishListCount}
        </span>
      )}

      {cartItem.length === 0 ? (
        " "
      ) : (
        <span className="badge badge-cart flex-center text-size-sm text-white">
          {cartCount}
        </span>
      )}
    </nav>
  );
};
