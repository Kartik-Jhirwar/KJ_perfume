import { createContext,useContext,useReducer, useEffect,useState   } from "react";
import { getCartData,addItemToCartwithInc,addItemToCart, removeItemFromCart,incrementQtnService,decrementQtyService } from "../Services/cartservice";
import { getWishlist,AddItemToWishList,removeItemFromWishList } from "../Services/wishlistservice";
import { useAuth } from "./Authentication/auth-context";
import { CartItemReducer } from "./Reducer/CartItemReducer";

import {itemExistInCart} from "../context/utils/cartUtils";
import { incData,decData } from "../constants/Api-constants";



 const CartAndWishlistContext = createContext();
 const  cartandWishlistInitialState ={
     cartItem:[],
      wishListItem :[]
 } 

 const CartandWishListProvider =({children})=>{

  const [cartState,cartDispatch]=useReducer(CartItemReducer,cartandWishlistInitialState);  
  const {user}=useAuth();

  // GET WISHLIST AND CART DATA 
  useEffect(async()=>{
      if(user.isloggedIn)
      {
        const wData= await getWishlist(user);  
        const  cData=await getCartData(user);                      
        cartDispatch({type:"LOAD_CART_DATA",payload:cData.cart})     
        cartDispatch({type:"LOAD_WISHLIST_DATA",payload:wData.wishlist}) 
      }
      else{
          throw new Error("colud not complete the request");
      } 
               
  },[user]);

  // ADD ITEM TO WISHLIST
  const addProductToWishlist =async(product,setBtnDisabled)=>{
      const {data,status}=await AddItemToWishList(product,user,setBtnDisabled);          
      if(status===201)
      {  
          cartDispatch({type:"ADD_ITEM_TO_WISHLIST",payload:data.wishlist})
      }
      else{
          throw new Error("could not complete the request");
      }
      setBtnDisabled(false);
  }
  // REMOVE ITEM FROM WISHLIST
  const removeProductFromWishlist=async(product,setBtnDisabled)=>{
      const {data,status}=await removeItemFromWishList(product,user,setBtnDisabled);      
      if(status===200)
      {
          cartDispatch({type:"REMOVE_ITEM_FROM_WISHLIST",payload:data.wishlist})
      }
       else{
          throw new Error("could not complete the request");
      }
      setBtnDisabled(false)
  }
 // ADD ITEM TO CART
 const addproductToCart =async(product,setIsDisabled)=>{
     const iteminCart=itemExistInCart(product,cartState);     
     if (iteminCart) {

   const {data}=await addItemToCartwithInc(product,user,incData,setIsDisabled);  
   console.log(data,"context-cart-response");   
      cartDispatch({type:"ADD_ITEM_TO_CART",payload:data.cart})
}
 else {
    const {data}=await addItemToCart(product,user,setIsDisabled);
     cartDispatch({type:"ADD_ITEM_TO_CART",payload:data.cart})
 }
 setIsDisabled(false)
 }
 // REMOVE ITEM FROM CART
 const removeProductFromCart =async(product)=>{
     const {data,status}=await removeItemFromCart(product,user);           
      if(status===200)
      {
          cartDispatch({type:"REMOVE_ITEM_FROM_CART",payload:data.cart})
      }
       else{
          throw new Error("could not complete the request");
      }
 }
 const incrementCartQuantity=async(product,setisPlusBtnDisabled)=>{
     const {data,status}=await incrementQtnService(product,user,incData,setisPlusBtnDisabled);     
     if(status===200)
     {
         cartDispatch({type:"INCREMENT_QUANTITY",payload:data.cart})
     }
     else{
          throw new Error("could not complete the request");
     }
     setisPlusBtnDisabled(false);
 }

 const decrementCartQuantity=async(product,setMinusBtnDisabled)=>{
     const{data}=await decrementQtyService(product,user,decData,setMinusBtnDisabled);
     cartDispatch({type:"DECREMENT_QUANTITY",payload:data.cart}) 
     setMinusBtnDisabled(false)    
 }
 
 const getCartItemCount = (product) => {
    return product.reduce((acc, item) => (acc = acc + item.qty), 0);
  };


     return <CartAndWishlistContext.Provider value={{cartState,cartDispatch,addProductToWishlist,removeProductFromWishlist,addproductToCart,removeProductFromCart,getCartItemCount,incrementCartQuantity,decrementCartQuantity}}>
         {children}</CartAndWishlistContext.Provider>
 }
 const useCartandWishList =()=>useContext(CartAndWishlistContext);

 export {useCartandWishList,CartandWishListProvider};