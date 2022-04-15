import React, { useState } from "react";
import "../userprofile.css";
import { AddressList, AddressForm } from "./index";
import { FaPlus } from "react-icons/fa";

export const AddressDetail = () => {
  const [newaddress, setNewaddress] = useState(false);

  const cancelFormHandler = () => {
    setNewaddress(false);
  };
  return (
    <>
      <h2 className="text-size-lg text-center">MANAGE ADDRESS</h2>
      {newaddress ? (
        <AddressForm cancelFormHandler={cancelFormHandler} />
      ) : (
        <button
          className="btn btn-warning border-round mt-3"
          onClick={() => setNewaddress(true)}
        >
          <FaPlus className="plus-icon" /> Add New Address
        </button>
      )}

      <AddressList />
    </>
  );
};
