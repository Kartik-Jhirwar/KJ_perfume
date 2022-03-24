import React from "react";
import "../../components/ProductCard/Productcard.css";
import { FaEyeSlash } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../LogIN/LogInPage.css";

export const LogInPage = () => {
  return (
    <div className="grid-container">
      <div className="LogIn-content-container border-round ">
        <div className="login-page-container flex-center ">
          <h2 className="heading heading-shadow">LOG IN</h2>
          <div className="input-and-buttons-container">
            <input
              className="input-textbox"
              placeholder="Enter your email here"
              type="text"
              required
            />
            <p className="alert alert-danger alert-with-flex">
              <BsExclamationTriangle /> please enter valid email
            </p>
            <span className="input-with-icon-container">
              <input
                className="input-textbox"
                placeholder="Enter your password here"
                type="password"
                required
              />
              <button className="eye-icon" type="button">
                <FaEyeSlash />
              </button>
            </span>
            <p className="alert alert-danger alert-with-flex">
              <BsExclamationTriangle /> please enter valid password
            </p>
            <span className="remember-me-and-link-container text-size-sm">
              <span className="remember-checkbox">
                <input
                  type="checkbox"
                  name="light"
                  className="checkbox-input"
                  value=""
                />
                <span className="text">Remember Me</span>
              </span>
              <Link to="/forgotpassword" className="forgot-pass-link">
                Forgot your Password?
              </Link>
            </span>
            <span className="btn-login">
              <button className="link-btn border-round fluid-btn">LOGIN</button>
            </span>
            <span className="btn-login">
              <button className="btn link-btn btn-color-rose border-round fluid-btn mt-3">
                Log In As Admin
              </button>
            </span>

            <p className="alert alert-danger alert-with-flex">
              <BsExclamationTriangle /> Email or Password is incorrect
            </p>
            <span className="New-user-links">
              <p>New User ?</p>
              <Link to="/signup" className="signup-link">
                Sign up here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
