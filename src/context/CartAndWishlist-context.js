import { createContext,useContext,useReducer } from "react";
import { CartItemReducer } from "./Reducer/CartItemReducer";
import { WishListItemReducer } from "./Reducer/WishListItemReducer";


 const CartAndWishlistContext = createContext();
 const  cartInitialState ={
     cartItem:[],
     cartCount:0
 }

 const wishListInitialState = {
     wishListItem :[],
     wishListCount:0
 }

 const CartandWishListProvider =({children})=>{

  const [cartState,cartDispatch]=useReducer(CartItemReducer,cartInitialState);
  const [wishListState,wishListDispatch]=useReducer(WishListItemReducer,wishListInitialState);

     return <CartAndWishlistContext.Provider value={{cartState,cartDispatch,wishListState,wishListDispatch}}>
         {children}</CartAndWishlistContext.Provider>
 }

 const useCartandWishList =()=>useContext(CartAndWishlistContext);

 export {useCartandWishList,CartandWishListProvider};