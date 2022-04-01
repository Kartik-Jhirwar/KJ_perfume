import React from "react";
import "./forgotpassword.css";
import { BsExclamationTriangle } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ForgotpassWord = () => {
  return (
    <div className="main-content-container">
      <div className="forgot-page-container border-round">
        <h2 className="heading heading-shadow">Forgot Password</h2>
        <div className="forget-email-container">
          <label for="LastName" className="required-field">
            Email Address
          </label>
          <input
            className="input-textbox input-sm"
            placeholder="test@gmail.com"
            type="email"
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid email
          </p>
          <span className="center">
            <button className="link-btn border-round mt-3">
              RESET PASSWORD
            </button>
          </span>
          <span className="New-user-links back-to-signin-link">
            <Link to="/login" className="signup-link">
              Back to Sign In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
