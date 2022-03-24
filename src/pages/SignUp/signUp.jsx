import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { FaEyeSlash } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";

export const SignUpPage = () => {
  return (
    <div className="main-content-container">
      <div className="sign-up-page-container border-round flex-center">
        <h2 className="heading text-size-xl">Sign Up</h2>
        <div className="name-container">
          <label for="FirstName" className="required-field">
            First Name
          </label>
          <input
            className="input-textbox input-sm"
            placeholder="First Name"
            type="text"
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid name
          </p>
          <label for="LastName" className="required-field">
            Last Name
          </label>
          <input
            className="input-textbox input-sm"
            placeholder="Last Name"
            type="text"
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid Surname
          </p>
          <label for="LastName" className="required-field">
            Email
          </label>
          <input
            className="input-textbox input-sm"
            placeholder="Email"
            type="email"
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid email
          </p>
          <label for="LastName" className="required-field">
            User Name
          </label>
          <input
            className="input-textbox input-sm"
            placeholder="Enter Username"
            type="text"
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid Username
          </p>
          <label for="LastName" className="required-field">
            Password
          </label>
          <span className="input-with-icon-container">
            <input
              className="input-textbox"
              placeholder="Enter your password here"
              type="password"
              required
            />
            <button className="eye-icon eye-icon-signup" type="button">
              <FaEyeSlash />
            </button>
          </span>
          <p className="alert alert-danger">
            <BsExclamationTriangle />
            minimum 8 characters(one capital, small letter and number)
          </p>

          <label for="LastName" className="required-field">
            Confirm Password
          </label>
          <span className="input-with-icon-container">
            <input
              className="input-textbox"
              placeholder="Re-enter your password here"
              type="password"
              required
            />
            <button className="eye-icon eye-icon-signup" type="button">
              <FaEyeSlash />
            </button>
          </span>
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> Password does not match
          </p>
          <span className="center">
            <button className="link-btn border-round mt-3">REGISTER</button>
          </span>
          <span className="New-user-links">
            <p>Have account?</p>
            <Link to="/login" className="signup-link">
              Log-In here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
