import React from "react";
import "./SingleProduct.css";
import { SingleProductCard } from "../../components/singleProductCard/SingleProductCard";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/product-context";

export const SingleProduct = () => {
  const { productList } = useProduct();
  const { productId } = useParams();

  const getProductDetails = (products, productId) => {
    return products.find((product) => product._id === productId);
  };

  let product = getProductDetails(productList, productId);

  return (
    <>
      <SingleProductCard Product={product} />
    </>
  );
};
