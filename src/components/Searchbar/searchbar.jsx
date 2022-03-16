import React from 'react'
import "../Searchbar/searchbar.css";

const SearchBar = () => {
  return (
    <div className="serchbox-container">
              <input
                type="text"
                placeholder="search"
                className="input-searchbox border-round"
               
              />
            </div>
  )
}

export default SearchBar
