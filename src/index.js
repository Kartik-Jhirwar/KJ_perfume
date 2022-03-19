import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../src/context/product-context";
import { CartandWishListProvider } from "./context/CartAndWishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
    <ProductProvider>
      <CartandWishListProvider>
        <App />
      </CartandWishListProvider>
    </ProductProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
