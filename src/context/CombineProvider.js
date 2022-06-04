import React from "react";
import {ProductProvider} from "./product-context";
import {CartandWishListProvider} from "./CartAndWishlist-context";
import { AuthProvider } from "./Authentication/auth-context";

export const CombineProvider=({children})=>{
   return(<ProductProvider>
       <AuthProvider>
           <CartandWishListProvider>
               {children}
           </CartandWishListProvider>
       </AuthProvider>
   </ProductProvider>)
}
