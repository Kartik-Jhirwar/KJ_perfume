import React from 'react'
import { BiMinus,BiRupee } from "react-icons/bi";


 export const TextOnlyCardWithPrice = () => {
  return (
    <div className="text-only-card card-with-shadow">
      <h2>PAYMENT DETAILS</h2>
      <div className="card-body">
        <hr />
        <div className="item-price-detail">
          <p className="card-detail">Bag Total (0 items)</p>
          <span className="discount">
            <BiRupee/>
            0000
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail"> Bag Discount</p>
          <span className="discount">
            <BiMinus/>
            <BiRupee/>
           0000
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail">Sub Total</p>
          <span className="discount">
           <BiRupee/>
            0000
          </span>
        </div>
        <div className="item-price-detail">
          <p className="card-detail">Delivery Charges</p>
          <span className="discount">
            <BiRupee/>
            0000
          </span>
        </div>
        <hr />
        <div className="item-price-detail">
          <p className="card-detail fw-bold">Grand Total</p>
          <span className="discount fw-bold">
           <BiRupee/>
            0000
          </span>
        </div>

        <div className="saving-quote">
          <p className="card-detail">
            You will save <BiRupee/>
            0000 on this order.
          </p>
          <span>
            <button className="link-btn border-round btn-proceed">
              PROCEED
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}


