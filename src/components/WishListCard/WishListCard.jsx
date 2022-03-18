import React from 'react'
import { FaStar,FaRupeeSign,FaHeart} from "react-icons/fa";
import "../../pages/WishListPage/WishListPage.css";
import "../ProductCard/Productcard"



 export const WishListCard = () => {
  return (
 
     <div className="card-for-ecommerce pd-1 card-with-shadow">
            <div className="card-image-holder">
              <img
                src="./assets/MEN/Acqua-di-Gio-Essenza-Giorgio-Armani_men.jpg"
                className="card-image"
              />
            </div>

             <div className="card-body">
              <span className="card-title fw-300">
                Acqua-di-Gio-Essenza- 150ml (MEN)</span>              
              <p className="card-detail">by Armani</p>
              <span className="discount"> <FaRupeeSign className="rupees-sign-wishlist"/>999</span>
               <p className="price"><FaRupeeSign className="rupees-sign-wishlist"/>1000</p>
                <p className="discountTag">(30% Off )</p>
             <span className="rating-badge">
                <div className="rating-container bg-green border-round">
                  <div className="rating-with-icon">
                    4.5<FaStar/>
                  </div>
                </div>
              </span>

            <div className="btns-in-flex">
              <span>
                <button  className="btn fc-pink border-round fw-bold">MOVE TO CART</button>
                </span>
                <span className="btn-wishlist"> <FaHeart/> </span>
           </div>
            </div> 
          </div>
        
  )
}


