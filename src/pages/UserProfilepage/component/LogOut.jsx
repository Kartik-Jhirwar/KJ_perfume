import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/Authentication/auth-context";
import "../userprofile.css";

export const LogOut = () => {
  const { logOutHandler } = useAuth();
  return (
    <>
      <h2 className="text-size-md">Account Settings</h2>
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
    </>
  );
};
