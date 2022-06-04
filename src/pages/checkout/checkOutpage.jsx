import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/Authentication/auth-context";
import "../checkout/checkout.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const CheckOutpage = () => {
  const { logOutHandler } = useAuth();
  return (
    <div className="checkout-details-container border-round">
      <div className="icon-text-container">
        <BsFillCheckCircleFill className="icon-check" />
        <h1 className="color-pink">Your order successfully Placed.</h1>
      </div>
      <span className="btn-container">
        <Link to="/">
          <button
            className="btn btn-danger border-round mt-3"
            onClick={(e) => {
              e.preventDefault(), logOutHandler();
            }}
          >
            Logout
          </button>
        </Link>
        <Link to="/productpage">
          <button className="btn btn-success border-round mt-3">
            Continue Shopping
          </button>
        </Link>
      </span>
    </div>
  );
};
