import React from 'react'
import { useProduct } from '../../context/product-context'
import { Productcard } from '../ProductCard/Productcard';
import "../ProductList/ProductList.css";

 export const ProductList = () => {
     const {productList,setProductList,showProductList}=useProduct();
  return (
    <div className="product-content-container">
      <div className="grid-3-column-layout">
          {showProductList.map((product)=>{
              return <Productcard userProduct={product} key={product.id}/>
          })}
          </div>
          </div>
  )
}


