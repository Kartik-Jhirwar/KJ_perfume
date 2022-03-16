import React from 'react'
import { IoReload } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import "../Filterbar/FilterBar.css";

 export const FilterBar = () => {
  return (
    <form className="sidebar-container sidebar-content">
      <ul className="sidebar-items">
         {/* <!-- ----------sort--------------------------- --> */} 
        <span className="filter-icon">
          <IoReload type='reset'/>
        </span>
        <h4 className="sidebar-content-item">Sort</h4>
        <li className="sidebar-list">
          <input
            type="radio"
            value="price low to high"
            name="sort-btn"            
          />
          Price Low to High
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="price high to low"
            name="sort-btn"            
          />
          Price High to Low
        </li>
        {/* -----------price range------- */}
        <h4 className="sidebar-content-item">PRICE RANGE</h4>
        <div className="sidebar-list">
          <li>
            <input
              type="range"           
              max={15000}
              min={50}
              steps={1000}
            />
          </li>
        </div>
        {/* <!-- -------------------CATEGORY-------------- --> */}
        <h4 className="sidebar-content-item">CATEGORY</h4>
        <div className="sidebar-list">
          <li>
            <input
              type="radio"
              value="Men"
              name="category-btn"              
            />
            Men
          </li>
          <li className="sidebar-list">
            <input
              type="radio"
              value="Women"
              name="category-btn"              
            />
            Women
          </li>
        </div>

        {/* <!-- -------------------Availability-------------- --> */}
        <h4 className="sidebar-content-item">Availability</h4>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="In-stock"
            name="available-btn"            
          />
          Include Out-of-Stock
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="out-ot-stock"
            name="available-btn"            
          />
          Fast Delivery
        </li>

        {/* <!-- -------------------Brand-------------- --> */}
        <h4 className="sidebar-content-item">Brand</h4>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Armani"
            name="available-btn"            
          />
          Armani
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Chanel"
            name="available-btn"            
          />
          Chanel
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Gucci"
            name="available-btn"           
          />
          Gucci
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Zara"
            name="available-btn"           
          />
          Zara
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Estee Lauder"
            name="available-btn"            
          />
          Estee Lauder
        </li>

        {/* <!-- ------------------Quantity----------- --> */}

        <h4 className="sidebar-content-item">Quantity</h4>
        <li className="sidebar-list">
          <input
            type="radio"
            value="150 ml"
            name="quantity-btn"            
          />
          150 ml
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="100 ml"
            name="quantity-btn"            
          />
          100 ml
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="clear"
            name="quantity-btn"           
          />
          Clear Quantity Filter
        </li>
        {/* <!-- ---ratings----- --> */}
        <h4 className="sidebar-content-item">Ratings</h4>
        <li className="sidebar-list">
          <input
            type="radio"
            value="4Starts"
            name="rating"            
          />
          4 <FaRegStar/> & above
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="3Starts"
            name="rating"            
          />
          3 <FaRegStar/> & above
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="2starts"
            name="rating"            
          />
          2 <FaRegStar/> & above
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="1starts"
            name="rating"            
          />
          Clear Rating Filter
        </li>
      </ul>
    </form>
  )
}


