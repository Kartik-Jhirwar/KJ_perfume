import React, { useState } from "react";
import "../../components/ProductCard/Productcard.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../LogIN/LogInPage.css";
import { initialLogInData, guestData } from "../../constants/auth-constants";
import { useAuth } from "../../context/Authentication/auth-context";
import { useProduct } from "../../context/product-context";
import { Loader } from "../../components";

export const LogInPage = () => {
  const [logInData, setLogInData] = useState(initialLogInData);
  const [passVisible, setPassVisible] = useState(true);
  const { logInHandler } = useAuth();
  const { isloading, setLoading } = useProduct();

  const logInChangeHandler = (e) => {
    const { name, value } = e.target;
    setLogInData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="grid-container">
      <div className="LogIn-content-container border-round ">
        <div className="login-page-container flex-center ">
          <h2 className="heading heading-shadow">LOG IN</h2>
          <div className="input-and-buttons-container">
            <input
              name="email"
              id="email"
              className="input-textbox"
              placeholder="Enter your email here"
              type="text"
              onChange={logInChangeHandler}
              required
            />
            <span className="input-with-icon-container">
              <input
                name="password"
                id="password"
                className="input-textbox"
                placeholder="Enter your password here"
                type={passVisible ? "password" : "text"}
                onChange={logInChangeHandler}
                required
              />
              <button className="eye-icon" type="button">
                {passVisible ? (
                  <FaEyeSlash onClick={() => setPassVisible(!passVisible)} />
                ) : (
                  <FaEye onClick={() => setPassVisible(!passVisible)} />
                )}
              </button>
            </span>

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
              <button
                className="link-btn border-round fluid-btn"
                onClick={(e) => {
                  e.preventDefault(), logInHandler(logInData);
                }}
              >
                LOGIN
              </button>
            </span>
            <span className="btn-login">
              <button
                className="btn link-btn btn-color-rose border-round fluid-btn mt-3"
                onClick={(e) => {
                  e.preventDefault, logInHandler(guestData);
                }}
              >
                Log In As Admin
              </button>
            </span>

            <span className="New-user-links">
              <p>New User ?</p>
              <Link to="/signup" className="signup-link">
                Sign up here
              </Link>
            </span>
          </div>
        </div>
      </div>
      {isloading && (
        <div className="loader homepage">
          <Loader />
        </div>
      )}
    </div>
  );
};
