import React from "react";
import { Link } from "react-router-dom";
import { Productcard, WishListCard } from "../../components/index";
import { useCartandWishList } from "../../context/CartAndWishlist-context";

export const WishListPage = () => {
  const { cartState } = useCartandWishList();
  const { wishListItem } = cartState;
  return (
    <div className="main-content-container">
      <h2 className="heading">My WishList</h2>
      <div className="grid-3-column-layout">
        {wishListItem.length === 0 ? (
          <Link to="/productpage">
            <p className="wishlist-msg">
              No Products in your WishList Page
              <span className="span-msg">Let's Shop</span>
            </p>
          </Link>
        ) : (
          wishListItem.map((product) => {
            return <WishListCard product={product} key={product._id} />;
          })
        )}
      </div>
    </div>
  );
};
