import React from 'react';
import "../nav/nav.css";
import { Link } from "react-router-dom";
import SearchBar from '../Searchbar/searchbar';
import { FaRegHeart,FaShoppingBag,FaUserAlt } from "react-icons/fa";


const Nav = ()=> {
  return (   
    
      <nav className="navbar">
      <div className="nav-content-container">
        <ul className="nav-items">
          <li className="nav-item nav-item-active">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/Productpage">Shop</Link>
          </li>          

          <li className="nav-item">
            <SearchBar/>
          </li>
        </ul>
      </div>
     
      
      <div className="logo-container">
        <div className="logo">
          <img className="logo-image" src="./assets/Mehak.png" />
        </div>

        <div className="logo-text">
          <em>Mehak </em>
        </div>
      </div>

      
      <div className="nav-social-media-icons-container">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="">
              <span className="nav-icon">
                <FaUserAlt title="Log In"/>               
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="">
              <span className="nav-icon">   
                      <FaRegHeart title="WishList"/>               
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="">
              <span className="nav-icon">                             
               <FaShoppingBag title="Cart"/>
              </span>
            </Link>
          </li>

          
        </ul>
      </div>
      <span className="badge badge-wishlist flex-center text-size-sm text-white">
        0
      </span>
      
        <span className="badge badge-cart flex-center text-size-sm text-white">
          0
        </span>
      
    </nav>
    
    
  )
}

export default Nav

