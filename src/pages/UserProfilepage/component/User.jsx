import React from "react";

export const User = () => {
  return (
    <>
      {/* <div className="user-detail details" id="profile"> */}
      <h2 className="text-size-md">Profile Details</h2>
      <div className="user-details">
        <div className="fullname-detail">
          <span className="text-size-md">Full Name : </span>
          <span className="text-size-md">Admin </span>
        </div>
        <div className="email-detail text-size-md">
          <span>Email :</span>
          <span> test@gmail.com </span>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
