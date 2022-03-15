import React from 'react';
import {EpicDealItem, TopBrandItem } from "../../components/HomePageCard/HomePageData";
import { HomePageCard } from '../../components/HomePageCard/HomePageCard';
import "../Home/HomePage.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="main-images-container">
      <div className="image-with-badges">
        <img className="home-page-image" src="./assets/cover-image.jpg"/>
        <div className="home-product-badge border-round">
          <p className="quote">
            <em>
              perfume is the art that makes memory speak, choose your art with
              Mehak
            </em>
          </p>
          <Link to="">
            <span className="product-with-arrow"> Buy Now </span>
          </Link>
        </div>
      </div>
      <h2 className="heading">EPIC DEALS ON BIG BRANDS</h2>
      <div className="feature-brand-container">
        <div className="discount-images-container">
          {EpicDealItem.map((item) => {
            return (            
            <HomePageCard Item={item}/>
            );
          })}
        </div>
      </div>
      <h2 className="heading">TOP PRODUCTS FOR YOU</h2>
      <div className="feature-brand-container">
        <div className="discount-images-container">
          {TopBrandItem.map((item) => {
            return (              
              <HomePageCard Item={item}/>
            );
          })}
        </div>
      </div>
      </section>
  )
}

export default Home

