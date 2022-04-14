import React, { useState } from "react";
import "./userprofile.css";
import { User, AddressDetail, LogOut } from "./component";

export const UserProfilepage = () => {
  const [currenttab, setcurrentTab] = useState("userprofile");
  return (
    <section className="main-content-container">
      <div className="profile-container">
        <h2 className="heading">Account</h2>
        <div className="user-profile-details flex-center">
          <div className="btn-container flex-center">
            <button
              className="btn-tabs text-size-md"
              id="profile"
              onClick={() => setcurrentTab("userprofile")}
            >
              Profile
            </button>
            <button
              className="btn-tabs text-size-md"
              id="address"
              onClick={() => setcurrentTab("addressdetail")}
            >
              Address
            </button>
            <button
              className="btn-tabs text-size-md"
              id="settings"
              onClick={() => setcurrentTab("settings")}
            >
              Settings
            </button>
          </div>
          <div className="details-container">
            <div className="user-detail details border-round" id="profile">
              {currenttab === "userprofile" && <User />}
              {currenttab === "addressdetail" && <AddressDetail />}
              {currenttab === "settings" && <LogOut />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
