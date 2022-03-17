import { createContext } from "react";
import { useContext, useReducer } from "react";
import { useProduct } from "../product-context";

const ProductFilterContext=createContext();

const initialState={
    sortByPrice: null,
  sortByCategory: null,
  pricerange: 0,
  showAllProduct: true,
  fastDelivery: false,
  sortByBrand: [],
  sortByQuantity: null,
  sortByRatings: null,
  searchByQuery: ""
}
const ProductFilterProvider=({children})=>{
    const {productList}=useProduct();
    const [state,dispatch]=useReducer(productFilterReducer,initialState);
    return <ProductFilterContext.Provider>{children}</ProductFilterContext.Provider>
};

const useProductFilter=()=>useContext(ProductFilterContext);

export {useProductFilter,ProductFilterProvider};