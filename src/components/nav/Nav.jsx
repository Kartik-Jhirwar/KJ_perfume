import React from "react";
import "../nav/nav.css";
import { Link } from "react-router-dom";
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

  return (
    <nav className="navbar">
      <div className="nav-content-container">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link
              to="/productpage"
              onClick={() => dispatch({ type: "SORT_CLEAR_CATEGORY" })}
            >
              Shop
            </Link>
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
            <Link to="/login">
              <span className="nav-icon">
                <FaUserAlt title="Log In" />
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/wishlist">
              <span className="nav-icon">
                <FaRegHeart title="WishList" />
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cart">
              <span className="nav-icon">
                <FaShoppingBag title="Cart" />
              </span>
            </Link>
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
