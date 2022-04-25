import React from "react";
import { useProduct } from "../../context/product-context";
import { ErrorMessage, Productcard, Loader } from "../../components/index";
import "../ProductList/ProductList.css";

export const ProductList = () => {
  const { productList, setProductList, showProductList, isloading } =
    useProduct();
  return (
    <div className="product-content-container">
      {isloading && <Loader />}
      <div className="grid-3-column-layout">
        {showProductList.length === 0 ? (
          <ErrorMessage message={"No Products Matches with Your Criteria"} />
        ) : (
          showProductList.map((product) => {
            return <Productcard product={product} key={product._id} />;
          })
        )}
      </div>
    </div>
  );
};
