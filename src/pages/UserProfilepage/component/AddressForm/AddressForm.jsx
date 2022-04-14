import React from "react";
import "./addressForm.css";

export const AddressForm = ({ cancelFormHandler }) => {
  return (
    <div className="add-address-container border-round flex-center">
      <h2 className="address-heading">ADD NEW ADDRESS</h2>
      <div className="name-container">
        <label htmlFor="FullName" className="required-field">
          Full Name
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter Full Name"
          type="text"
          required
        />

        <label htmlFor="Mobile" className="required-field">
          Mobile No
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter mobile number"
          type="number"
          required
        />

        <label htmlFor="Housenumber" className="required-field">
          Flat,House no., Building
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter house number, road"
          type="text"
          required
        />

        <label htmlFor="city" className="required-field">
          City
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter City name"
          type="text"
          required
        />

        <label htmlFor="State" class="required-field">
          State
        </label>
        <input
          class="input-textbox input-sm"
          placeholder="Enter state name"
          type="text"
          required
        />

        <label htmlFor="pincode" class="required-field">
          Pincode
        </label>
        <input
          class="input-textbox input-sm"
          placeholder="Enter pincode"
          type="number"
          required
        />

        <span class="center flex-center gap mt-1">
          <button class="btn btn-primary border-round mt-3">SAVE</button>
          <button
            class="btn btn-secondary border-round mt-3"
            onClick={cancelFormHandler}
          >
            CANCEL
          </button>
        </span>
      </div>
    </div>
  );
};
