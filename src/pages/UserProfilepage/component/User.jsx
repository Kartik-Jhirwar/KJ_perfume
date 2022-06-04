import React from "react";
import { useAuth } from "../../../context/Authentication/auth-context";

export const User = () => {
  const {
    user: { email, userName },
  } = useAuth();
  return (
    <>
      <h2 className="text-size-md">Profile Details</h2>
      <div className="user-details">
        <div className="fullname-detail">
          <span className="text-size-md">Full Name : </span>
          <span className="text-size-md">{userName} </span>
        </div>
        <div className="email-detail text-size-md">
          <span>Email :</span>
          <span> {email} </span>
        </div>
      </div>
    </>
  );
};
