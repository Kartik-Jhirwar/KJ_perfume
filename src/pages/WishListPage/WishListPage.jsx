import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorMessage,
  Productcard,
  WishListCard,
} from "../../components/index";
import { useCartandWishList } from "../../context/CartAndWishlist-context";

export const WishListPage = () => {
  const { wishListState, wishListDispatch } = useCartandWishList();
  const { wishListItem, wishListCount } = wishListState;
  return (
    <div className="main-content-container">
      <h2 className="heading">My WishList</h2>
      <div className="grid-3-column-layout">
        {wishListItem.length === 0 ? (
          <Link to="/productpage">
            <ErrorMessage message={"No Products in your WishList Page"} />
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
