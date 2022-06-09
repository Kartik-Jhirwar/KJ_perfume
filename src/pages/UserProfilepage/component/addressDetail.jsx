import React, { useState } from "react";
import "../userprofile.css";
import { AddressList, AddressForm } from "./index";
import { FaPlus } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import {
  initialAddressValues,
  tempAddressValues,
} from "../../../constants/address-constants";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../context/Authentication/auth-context";

export const AddressDetail = () => {
  const [newaddress, setNewaddress] = useState(false);
  const [addressFormvalues, setAddressFormValues] = useState([
    initialAddressValues,
  ]);
  const { addressList, setAddressList } = useAuth();
  const { pathname } = useLocation();

  const cancelFormHandler = () => {
    setNewaddress(false);
  };

  const submitDataHandler = (e, values) => {
    e.preventDefault();
    setAddressList((prevData) => [...prevData, { id: uuid(), ...values }]);
    // setAddressList((prevData) => ({...prevData, { id: uuid(), ...values });
    setAddressFormValues(initialAddressValues);
    setNewaddress(false);
  };

  const editDataHandler = (e, id) => {
    e.preventDefault();
    setNewaddress(true);
    setAddressList(
      addressList.map((address) => {
        if (address.id === id) {
          setAddressFormValues({ ...address, isEditing: true });
        }
        return { ...address };
      })
    );
  };

  const handleEditSubmit = (e, id, values) => {
    e.preventDefault();
    setAddressList(
      addressList.map((address) => {
        if (address.id === id) {
          return { ...values, isEditing: false };
        }
        return address;
      })
    );

    setAddressFormValues({ isEditing: false });
    setNewaddress(false);
    setAddressFormValues(initialAddressValues);
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();
    setAddressList(addressList.filter((address) => address.id !== id));
  };

  return (
    <>
      {pathname === "/userprofile" && (
        <h2 className="text-size-lg text-center">MANAGE ADDRESS</h2>
      )}
      {pathname === "/userprofile" &&
        (newaddress ? (
          <AddressForm
            cancelFormHandler={cancelFormHandler}
            addressFormvalues={addressFormvalues}
            setAddressFormValues={setAddressFormValues}
            submitHandler={submitDataHandler}
            handleEditSubmit={handleEditSubmit}
          />
        ) : (
          <button
            className="btn btn-warning border-round mt-3"
            onClick={() => setNewaddress(true)}
          >
            <FaPlus className="plus-icon" /> Add New Address
          </button>
        ))}

      <AddressList
        deleteDataHandler={deleteHandler}
        editDataHandler={editDataHandler}
      />
    </>
  );
};
