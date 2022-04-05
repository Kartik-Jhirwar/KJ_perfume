import React from "react";
import { Link } from "react-router-dom";
import "../NotFoundPage/notfoundpage.css";

export const PageNotFound = () => {
  return (
    <div className="wrapper flex-center">
      <img
        src="./assets/pagenotfound.png"
        alt="not-found"
        className="error-image-container"
      />
      <div className="errorpage-message flex-center ">
        <span className="error-status">404 </span>
        <p className="message-for-user">
          Aha!!! You see ! You can be wrong ! or it could be us you should
          probably Go to HomePage
        </p>
      </div>
    </div>
  );
};
