import React from "react";

export const AddressList = () => {
  return (
    <div>
      <address className="address-container">
        <p className="text-size-md">Adrienne Ford</p>
        <p className="text-size-sm">70, Jal Vihar, Wazirabad, New Delhi-33</p>
        <p className="text-size-sm">India.</p>
        <p className="text-size-sm">Phone Number : 9867564509</p>
        <div className="address-btn-container">
          <button className="btn btn-secondary border-round">Edit</button>
          <button className="btn btn-primary border-round">Remove</button>
        </div>
      </address>

      <address className="address-container">
        <p className="text-size-md">Adrienne Ford</p>
        <p className="text-size-sm">70, Jal Vihar, Wazirabad, New Delhi-33</p>
        <p className="text-size-sm">India.</p>
        <p className="text-size-sm">Phone Number : 9867564509</p>
        <div className="address-btn-container">
          <button className="btn btn-secondary border-round">Edit</button>
          <button className="btn btn-primary border-round">Remove</button>
        </div>
      </address>
    </div>
  );
};
