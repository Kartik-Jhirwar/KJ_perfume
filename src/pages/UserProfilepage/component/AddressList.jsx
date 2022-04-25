import React from "react";
import { Address } from "./Address";

export const AddressList = ({
  addressListData,
  setAddressListData,
  deleteDataHandler,
  editDataHandler,
}) => {
  return (
    <div>
      {addressListData.map((address, index) => {
        return (
          <Address
            addressData={address}
            key={index}
            deleteDataHandler={deleteDataHandler}
            editDataHandler={editDataHandler}
          />
        );
      })}
    </div>
  );
};
