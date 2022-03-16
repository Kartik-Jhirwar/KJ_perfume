import React from 'react'
import { FilterBar } from '../../components/Filterbar/FilterBar'
import { ProductList } from '../../components/ProductList/ProductList'

 export const ProductPage = () => {
  return (
    <div>
      <FilterBar/>
      <ProductList/>
    </div>
  )
}


