import React from "react";
import { BiMinus, BiRupee } from "react-icons/bi";

export const TextOnlyCardWithPrice = ({ cartState }) => {
  const { cartItem } = cartState;
  const DeliveryCharges = 50;

  // calculating total original price
  const totalOriginalPrice = [...cartItem].reduce(
    (acc, currentItem) => currentItem.qty * currentItem.originalPrice + acc,
    0
  );
  //  calculating total sellingPrice
  const totalSellingPrice = [...cartItem].reduce(
    (acc, currentItem) => currentItem.qty * currentItem.sellingPrice + acc,
    0
  );
  // calculating Bag discount (original-selling)
  const BagDiscount = totalOriginalPrice - totalSellingPrice;

  //  billing
  const GrandTotal = totalSellingPrice + DeliveryCharges;

  return (
    <div className="text-only-card card-with-shadow">
      <h2>PAYMENT DETAILS</h2>
      <div className="card-body">
        <hr />
        <div className="item-price-detail">
          <p className="card-detail">Bag Total ({cartItem.length} items)</p>
          <span className="discount">
            <BiRupee />
            {totalOriginalPrice}
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail"> Bag Discount</p>
          <span className="discount">
            <BiMinus />
            <BiRupee />
            {BagDiscount}
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail">Sub Total</p>
          <span className="discount">
            <BiRupee />
            {totalSellingPrice}
          </span>
        </div>
        <div className="item-price-detail">
          <p className="card-detail">Delivery Charges</p>
          <span className="discount">
            <BiRupee />
            {DeliveryCharges}
          </span>
        </div>
        <hr />
        <div className="item-price-detail">
          <p className="card-detail fw-bold">Grand Total</p>
          <span className="discount fw-bold">
            <BiRupee />
            {GrandTotal}
          </span>
        </div>

        <div className="saving-quote">
          <p className="card-detail">
            You will save <BiRupee />
            {BagDiscount} on this order.
          </p>
          <span>
            <button className="link-btn border-round btn-proceed">
              PROCEED
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
