import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import "../categories/categories.css";

 export const Categories = () => {
     const [categories,setCategories]=useState([]);
     useEffect(()=>{
         (async()=>{
             try {
               const response= await axios.get("/api/categories")
               console.log(response,"");
               setCategories(response.data.categories);
             }
             catch{
                 console.error("something went wrong");
             }
         })();
     })
  return (
    <div className="category-options">
        {categories.map((category)=>{
            return(
            < div className="category-container">
            <Link to={`/Productpage?category=${category._id}`}
            key={category._id}>
                {category.categoryName}
            </Link>
            </div>
            )
        })}
    </div>
  )
}


