import React from 'react'
import { BiMinus,BiPlus,BiRupee } from "react-icons/bi";

export const HorizontalCard = () => {
  return (
    <div className="horizontal-card pd-1 border-round">
      <div className="card-image-holder">
        <img src="./assets/CHANEL.jpg" className="card-image" alt="product-Image" />
      </div>

      <div className="card-body">
        <span className="card-title fw-300">Armani-prive-cuir- 100ml (MEN)</span>
        <p className="card-detail card-qty-flex">
          Quantity :                   
            <BiMinus/>                     
          <span className="qty">1</span>
          <BiPlus/>
        </p>
        <span className="price-details">
          <p className="price-cut">
            <BiRupee/>
            1000
          </p>
          <span className="discount">
            <BiRupee/>
           2000
          </span>
          <p className="discount-tag">(56% Off)</p>
        </span>

        <div className="button-container">
          <span className="button-cart">
            <button
              className="btn button-lg fc-pink border-round"              
            >
              REMOVE
            </button>
          </span>
          <span className="button-cart">
            <button
              className="link-btn border-round"
              >
              ADD TO WISHLIST
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}


