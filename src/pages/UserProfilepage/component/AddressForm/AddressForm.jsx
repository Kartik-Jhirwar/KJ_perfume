import React from "react";
import "./addressForm.css";

export const AddressForm = ({
  cancelFormHandler,
  addressFormvalues,
  setAddressFormValues,
  submitHandler,
  handleEditSubmit,
}) => {
  const addressFormOnChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddressFormValues((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="add-address-container border-round flex-center">
      <h2 className="address-heading">
        {addressFormvalues.isEditing ? "EDIT ADDRESS" : "ADD NEW ADDRESS"}
      </h2>
      <form
        className="name-container"
        onSubmit={
          addressFormvalues.isEditing
            ? (e) =>
                handleEditSubmit(e, addressFormvalues.id, addressFormvalues)
            : (e) => {
                submitHandler(e, addressFormvalues);
              }
        }
      >
        <label htmlFor="FullName" className="required-field">
          Full Name
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter Full Name"
          name="fullName"
          type="text"
          id="fullName"
          value={addressFormvalues.fullName}
          onChange={addressFormOnChangeHandler}
          required
        />

        <label htmlFor="Mobile" className="required-field">
          Mobile No
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter mobile number"
          type="number"
          name="mobileNo"
          id="mobileNo"
          value={addressFormvalues.mobileNo}
          onChange={(e) => addressFormOnChangeHandler(e)}
          required
        />

        <label htmlFor="Housenumber" className="required-field">
          Flat,House no., Building
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter house number, road"
          type="text"
          name="address"
          id="address"
          value={addressFormvalues.address}
          onChange={addressFormOnChangeHandler}
          required
        />

        <label htmlFor="city" className="required-field">
          City
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter City name"
          type="text"
          name="city"
          id="city"
          value={addressFormvalues.city}
          onChange={addressFormOnChangeHandler}
          required
        />

        <label htmlFor="State" className="required-field">
          State
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter state name"
          type="text"
          name="state"
          id="state"
          value={addressFormvalues.state}
          onChange={addressFormOnChangeHandler}
          required
        />

        <label htmlFor="pincode" className="required-field">
          Pincode
        </label>
        <input
          className="input-textbox input-sm"
          placeholder="Enter pincode"
          type="number"
          name="pincode"
          id="pincode"
          value={addressFormvalues.pincode}
          onChange={addressFormOnChangeHandler}
          required
        />

        <span className="center flex-center gap mt-1">
          <button className="btn btn-primary border-round mt-3">
            {addressFormvalues.isEditing ? "UPDATE" : "SAVE"}
          </button>
          <button
            className="btn btn-secondary border-round mt-3"
            onClick={cancelFormHandler}
          >
            CANCEL
          </button>
        </span>
      </form>
    </div>
  );
};
