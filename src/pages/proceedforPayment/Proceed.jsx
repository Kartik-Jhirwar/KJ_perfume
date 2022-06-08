import React, { useEffect } from "react";
import "../proceedforPayment/proceed.css";
import { AddressDetail, AddressList } from "../UserProfilepage/component";
import { TextOnlyCardWithPrice } from "../../components";

export const ProceedForPayment = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <div className="proceed-page-container flex-center border-round">
      <div className="addressList-container">
        <h2 className="heading-address">Select Address</h2>
        <AddressDetail />
      </div>
      <div className="order-payment-detail">
        <h2 className="heading-address">Cart Summary</h2>
        <TextOnlyCardWithPrice />
      </div>
    </div>
  );
};
