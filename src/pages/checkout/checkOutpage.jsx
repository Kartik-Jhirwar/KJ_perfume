import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import { useAuth } from "../../context/Authentication/auth-context";
import "../checkout/checkout.css";

export const CheckOutpage = () => {
  const { logOutHandler } = useAuth();
  return (
    <div className="checkout-details-container border-round">
      <h1 className="color-pink">Your order successfully Placed.</h1>
      <Link to="/">
        <span className="btn-container">
          <button
            className="btn btn-danger border-round mt-3"
            onClick={(e) => {
              e.preventDefault(), logOutHandler();
            }}
          >
            Logout
          </button>
        </span>
      </Link>
    </div>
  );
};
