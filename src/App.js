import "./App.css";
import {Nav} from "./components/nav/Nav";
import MockMan from "mockman-js";
import {Routes,Route} from "react-router";
import { useLocation } from "react-router-dom";
import {Home,ProductPage,LogInPage,CartPage,WishListPage,SignUpPage,ForgotpassWord,PageNotFound} from "../src/pages/indexpages";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';



function App() {

  const {pathname}=useLocation();
  const [isNavVisible,setIsNavVisible]=useState(true);
  return (  
       <div className="grid-container">     
        {isNavVisible && pathname !== "*"? <Nav/> :null}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productpage" element={<ProductPage/>}/>    
          <Route path="/login" element={<LogInPage/>}/>  
          <Route path="/wishlist" element={<WishListPage/>} /> 
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/forgotpassword" element={<ForgotpassWord/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/mockman" element={<MockMan/>}/>
        </Routes>  
        <Toaster
        position="top-center"
        toastOptions={{ className: "toast-display", duration: 2000 }}
      />     
      </div>
      
  );
}

export default App;
