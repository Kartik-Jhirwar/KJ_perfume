import React from 'react'
import { useProduct } from '../../context/product-context'
import { Productcard } from '../ProductCard/Productcard';
import "../ProductList/ProductList.css";

 export const ProductList = () => {
     const {productList,setProductList}=useProduct();
  return (
    <div className="product-content-container">
      <div className="grid-3-column-layout">
          {productList.map((product)=>{
              return <Productcard userProduct={product}/>
          })}
          </div>
          </div>
  )
}


