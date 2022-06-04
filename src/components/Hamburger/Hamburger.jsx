import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authentication/auth-context";
import "../Hamburger/Hamburger.css";

const humburgerConstant = [
  { path: "/", name: "Home" },
  { path: "/productpage", name: "Shop" },
  { path: "/cart", name: "Cart" },
  { path: "/wishlist", name: "Wishlist" },
];
export const Hamburger = () => {
  const {
    user: { isloggedIn },
    logOutHandler,
  } = useAuth();
  return (
    <div>
      <ul className="hamburger-menu-container">
        {humburgerConstant.map(({ path, name }) => {
          return (
            <Link to={`${path}`} className="hamburger-menu-item">
              {name}
            </Link>
          );
        })}

        {isloggedIn && (
          <Link to="/userprofile" className="hamburger-menu-item">
            Profile
          </Link>
        )}

        {isloggedIn ? (
          <Link
            to="/login"
            className="hamburger-menu-item"
            onClick={logOutHandler}
          >
            LogOut
          </Link>
        ) : (
          <Link to="/login" className="hamburger-menu-item">
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};
