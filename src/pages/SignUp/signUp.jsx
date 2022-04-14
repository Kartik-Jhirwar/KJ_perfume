import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { BsExclamationTriangle } from "react-icons/bs";
import { initialSignUpData } from "../../constants/auth-constants";
import { useAuth } from "../../context/Authentication/auth-context";

export const SignUpPage = () => {
  const [signupData, setSignUpData] = useState(initialSignUpData);
  const [passVisible, setPassVisible] = useState(true);
  const [conPassVisible, setConPassVisible] = useState(true);
  const [error, setErrMessage] = useState("");
  const { signUpHandler } = useAuth();
  const navigate = useNavigate();

  const signUpChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
    setErrMessage("");
  };

  const passwordMatchHandler = (e, pwd1, pwd2) => {
    if (pwd1 === pwd2) {
      setErrMessage("");
      e.preventDefault();
      signUpHandler({ signupData });
    } else {
      e.preventDefault();
      setErrMessage("password and confirmpassord doesn't match");
      navigate("/signup");
    }
  };
  return (
    <div className="main-content-container">
      <div className="sign-up-page-container border-round flex-center">
        <h2 className="heading text-size-xl">Sign Up</h2>
        <form className="name-container">
          <label htmlFor="FirstName" className="required-field">
            First Name
          </label>
          <input
            className="input-textbox input-sm"
            name="firstName"
            id="firstName"
            placeholder="Adarsh"
            type="text"
            onChange={signUpChangeHandler}
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid name
          </p>
          <label htmlFor="LastName" className="required-field">
            Last Name
          </label>
          <input
            className="input-textbox input-sm"
            name="lastName"
            id="lastName"
            placeholder="Balika"
            type="text"
            onChange={signUpChangeHandler}
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid Surname
          </p>
          <label htmlFor="LastName" className="required-field">
            Email
          </label>
          <input
            name="email"
            className="input-textbox input-sm"
            placeholder="test@gmail.com"
            type="email"
            onChange={signUpChangeHandler}
            required
          />
          <p className="alert alert-danger alert-with-flex">
            <BsExclamationTriangle /> please enter valid email
          </p>
          <label htmlFor="LastName" className="required-field">
            Password
          </label>
          <span className="input-with-icon-container">
            <input
              name="password"
              id="password"
              className="input-textbox"
              placeholder="*********"
              type={passVisible ? "password" : "text"}
              onChange={signUpChangeHandler}
              required
            />
            <button className="eye-icon eye-icon-signup" type="button">
              {passVisible ? (
                <FaEyeSlash onClick={() => setPassVisible(!passVisible)} />
              ) : (
                <FaEye onClick={() => setPassVisible(!passVisible)} />
              )}
            </button>
          </span>
          <p className="alert alert-danger">
            <BsExclamationTriangle />
            minimum 8 characters(one capital, small letter and number)
          </p>

          <label htmlFor="LastName" className="required-field">
            Confirm Password
          </label>
          <span className="input-with-icon-container">
            <input
              name="confirmpassword"
              id="confirmpassword"
              className="input-textbox"
              placeholder="**********"
              type={conPassVisible ? "password" : "text"}
              onChange={signUpChangeHandler}
              required
            />
            <button className="eye-icon eye-icon-signup" type="button">
              {conPassVisible ? (
                <FaEyeSlash
                  onClick={() => setConPassVisible(!conPassVisible)}
                />
              ) : (
                <FaEye onClick={() => setConPassVisible(!conPassVisible)} />
              )}
            </button>
          </span>
          <p className="err-message flex-center">{error}</p>
          <span className="center">
            <button
              className="link-btn border-round mt-3"
              onClick={(e) => {
                passwordMatchHandler(
                  e,
                  signupData.password,
                  signupData.confirmpassword
                );
              }}
            >
              REGISTER
            </button>
          </span>
          <span className="New-user-links">
            <p>Have account?</p>
            <Link to="/login" className="signup-link">
              Log-In here
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
