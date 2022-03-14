import React from 'react';
import "../nav/nav.css";
import Mehaklogo from "../../assets/Mehak.png";
import { Link } from "react-router-dom";
import SearchBar from '../Searchbar/searchbar';
import { FiHeart } from "react-icons/fi";
import { FaRegHeart,FaShoppingBag,FaUserAlt } from "react-icons/fa";


function Nav() {
  return (   
    
      <nav className="navbar">
      <div className="nav-content-container">
        <ul className="nav-items">
          <li className="nav-item nav-item-active">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/">Shop</Link>
          </li>          

          <li className="nav-item">
            <SearchBar/>
          </li>
        </ul>
      </div>
     
      
      <div className="logo-container">
        <div className="logo">
          <img className="logo-image" src={Mehaklogo} />
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
                <FaUserAlt/>               
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="">
              <span className="nav-icon">   
                      <FaRegHeart/>               
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="">
              <span className="nav-icon">                             
               <FaShoppingBag/>
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

