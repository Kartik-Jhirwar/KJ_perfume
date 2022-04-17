import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../categories/categories.css";
import { useProduct } from "../../context/product-context";

export const Categories = () => {
  const { state, dispatch } = useProduct();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        setCategories(data.categories);
      } catch {
        console.error("something went wrong");
      }
    })();
  });
  return (
    <div className="category-options">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            <Link
              to={`/productpage?category=${category.categoryName}`}
              onClick={
                category.categoryName === "Men"
                  ? () => dispatch({ type: "SORT_BY_MEN_CATEGORY" })
                  : () => dispatch({ type: "SORT_BY_WOMEN_CATEGORY" })
              }
              key={category._id}
            >
              {category.categoryName}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
