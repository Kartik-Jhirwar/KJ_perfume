import "./App.css";
import {Nav} from "./components/nav/Nav";
import {Routes,Route} from "react-router";
import { useLocation } from "react-router-dom";
import {Home,ProductPage,LogInPage,CartPage,WishListPage,SignUpPage,ForgotpassWord,PageNotFound,SingleProduct,UserProfilepage,MockMan} from "../src/pages/indexpages";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { RequiresAuth } from "./Router/RequiresAuth";



function App() {

  const {pathname}=useLocation();
  const [isNavVisible,setIsNavVisible]=useState(true);
  return (  
       <div className="grid-container">   
       {/* <Nav/>   */}
        {isNavVisible && pathname !== "*"? <Nav/> :null}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productpage" element={<ProductPage/>}/>    
          <Route path="/login" element={<LogInPage/>}/>            
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/forgotpassword" element={<ForgotpassWord/>}/>
          <Route path="/product/:productId" element={<SingleProduct/>}/>
          <Route path="/userprofile" element={<UserProfilepage/>}/> 
          <Route path="/cart" element={<RequiresAuth children={<CartPage/>}></RequiresAuth>}/>
          <Route path="/wishlist" element={<RequiresAuth children={<WishListPage/>}></RequiresAuth>}/>
          <Route path="*" element={<PageNotFound/>}/>                 
          <Route path="/mockman" element={<MockMan/>}/>
        </Routes>  
        <Toaster
        position="top-center"
        toastOptions={{ className: "toast-display", duration: 3000 }}
      />     
      </div>
      
  );
}

export default App;
