import React from "react";
import { Productcard, WishListCard } from "../../components/index";
// import "../../components/ProductCard/Productcard.css";

export const WishListPage = () => {
  return (
    <div className="main-content-container">
      <h2 className="heading">My WishList</h2>
      <div className="grid-3-column-layout">
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
      </div>
    </div>
  );
};
