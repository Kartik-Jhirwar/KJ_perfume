import React from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../context/Authentication/auth-context";
import { Address } from "./Address";

export const AddressList = ({ deleteDataHandler, editDataHandler }) => {
  const { pathname } = useLocation();
  const { addressList, setAddressList, selectedAddress, setSelectedAddress } =
    useAuth();
  const selectedAddressHandler = (address) => {
    setSelectedAddress(address);
    toast("address selected", { icon: "✔" });
  };
  return (
    <div>
      {addressList.map((address, index) => {
        return (
          <div
            className={
              pathname === "/payment" ? "flex-center address-style" : ""
            }
            key={index}
          >
            {pathname === "/payment" && (
              <input
                type="radio"
                name="grp1"
                className="flex-center input-address"
                onChange={() => selectedAddressHandler(address)}
              />
            )}
            <Address
              addressData={address}
              key={index}
              deleteDataHandler={deleteDataHandler}
              editDataHandler={editDataHandler}
            />
          </div>
        );
      })}
    </div>
  );
};
