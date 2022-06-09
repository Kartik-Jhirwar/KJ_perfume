import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../categories/categories.css";
import { useProduct } from "../../context/product-context";
import { reducerTypes } from "../../context/Reducer/reducertype";
const { MEN_CATEGORY, WOMEN_CATEGORY, CLEAR_CATEGORY } = reducerTypes;

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
  }, []);
  return (
    <div className="category-options">
      {categories.map((category) => {
        return (
          <div className="category-container" key={category.id}>
            <Link
              to={`/productpage?category=${category.categoryName}`}
              onClick={
                category.categoryName === "Men"
                  ? () => dispatch({ type: MEN_CATEGORY })
                  : () => dispatch({ type: WOMEN_CATEGORY })
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
