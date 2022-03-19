import React from "react";
import "../ErrorMessage/Error.css";

export const ErrorMessage = ({ message }) => {
  return <div className="error">{message}</div>;
};
