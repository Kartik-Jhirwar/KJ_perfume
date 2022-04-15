import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter } from "react-router-dom";
import { CombineProvider } from "./context/CombineProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <CombineProvider>      
        <App />
        </CombineProvider>      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
