import React from 'react'
import {FilterBar,ProductList} from "../../components/index";

 export const ProductPage = () => {
  return (
    <div className="grid-container">
      <FilterBar/>
      <ProductList/>
    </div>
  )
}


