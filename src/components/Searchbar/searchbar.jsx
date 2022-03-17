import React from 'react'
import { useProduct } from '../../context/product-context';
import "../Searchbar/searchbar.css";

const SearchBar = () => {
  const {state,dispatch}=useProduct();
   return (
    <div className="serchbox-container">
              <input
                type="text"
                placeholder="search"
                className="input-searchbox border-round"
                onChange={(event)=>dispatch({type:"SEARCH_BY_QUERY",payload:event.target.value})}
               
              />
            </div>
  )
}

export default SearchBar
