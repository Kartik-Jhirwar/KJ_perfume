import React from "react";
import { Link } from "react-router-dom";
import "../Hamburger/Hamburger.css";
export const Hamburger = () => {
  return (
    <div>
      <ul className="hamburger-menu-container">
        <Link to="/" className="hamburger-menu-item">
          Home
        </Link>
        <Link to="/productpage" className="hamburger-menu-item">
          Shop
        </Link>
        <Link to="/cart" className="hamburger-menu-item">
          Cart
        </Link>
        <Link to="/wishlist" className="hamburger-menu-item">
          Wishlist
        </Link>
        <Link to="/login" className="hamburger-menu-item">
          Login
        </Link>
      </ul>
    </div>
  );
};
