import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import "../categories/categories.css";

 export const Categories = () => {
     const [categories,setCategories]=useState([]);
     useEffect(()=>{
         (async()=>{
             try {
               const {data}= await axios.get("/api/categories")              
            setCategories(data.categories);
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
            < div className="category-container" key={category.id}>
            <Link to={`/Productpage?category=${category.categoryName}`}
            key={category._id}>
                {category.categoryName}
            </Link>
            </div>
            )
        })}
    </div>
  )
}


