import "./App.css";
import {Nav} from "./components/nav/Nav";
import {Routes,Route} from "react-router";
import { useLocation } from "react-router-dom";
import {Home,ProductPage,LogInPage,CartPage,WishListPage,SignUpPage,CheckOutpage,ForgotpassWord,PageNotFound,SingleProduct,UserProfilepage,MockMan,ProceedForPayment,OrderSummary} from "../src/pages/indexpages";
import { useState,  useEffect  } from "react";
import { Toaster } from 'react-hot-toast';
import { RequiresAuth } from "./Router/RequiresAuth";
import { useCartandWishList } from "./context/CartAndWishlist-context";
import { reducerTypes } from "./context/Reducer/reducertype";
import { useProduct } from "./context/product-context";





function App() {

  const {pathname}=useLocation();
  const [isNavVisible,setIsNavVisible]=useState(true);
  const path=pathname.slice(1);
  const {orders}=useCartandWishList();
  const {state,dispatch}=useProduct();

  useEffect(()=>{
    document.title=`${path} || Mehak Shop`;
    return ()=>(dispatch({type:reducerTypes.CLEAR_SEARCH}));

  },[pathname]);
  return (  
       <div className="grid-container">   
          {pathname==="/checkout" || pathname==="*" ? null: <Nav/> } 
        
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
         <Route path="/checkout" element={<RequiresAuth children={<CheckOutpage/>}></RequiresAuth>}/>
          <Route path="/payment" element={<ProceedForPayment/>}/>
          <Route path="/orders" element={<OrderSummary/>}/>
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
