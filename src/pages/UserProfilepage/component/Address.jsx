import React from "react";

export const Address = ({
  addressData,
  deleteDataHandler,
  editDataHandler,
}) => {
  const { id, fullName, address, mobileNo, pincode, state, city } = addressData;

  return (
    <address className="address-container" key={id}>
      <p className="text-size-md">{fullName}</p>
      <p className="text-size-sm">{address}</p>
      <p className="text-size-sm">Mobile Number :{mobileNo}</p>
      <p className="text-size-sm">
        {city}, {state}-{pincode}
      </p>
      <div className="address-btn-container">
        <button
          className="btn btn-secondary border-round"
          onClick={(e) => editDataHandler(e, id)}
        >
          Edit
        </button>
        <button
          className="btn btn-primary border-round"
          onClick={(e) => deleteDataHandler(e, id)}
        >
          Remove
        </button>
      </div>
    </address>
  );
};
