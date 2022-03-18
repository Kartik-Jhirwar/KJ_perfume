import React from 'react'
import {HorizontalCard,TextOnlyCardWithPrice} from "../../components/index";
import "../Cart/Cartpage.css";

 export const CartPage = () => {
  return (

     <div className="main-content-container">
      <h2 className="heading">My Cart</h2>   
        <div className="cart-order-container">
          <div className="product-container">           
               <HorizontalCard />          
          </div>

          <div className="final-price-container">            
              <TextOnlyCardWithPrice />           
          </div>
        </div>      
    </div>
    
  )
}


