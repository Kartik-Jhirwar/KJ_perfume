import "./App.css";
import {Nav} from "./components/nav/Nav";
import MockMan from "mockman-js";
import {Routes,Route} from "react-router";
import {Home,ProductPage,LogInPage,CartPage,WishListPage,SignUpPage,ForgotpassWord} from "../src/pages/indexpages";




function App() {
  return (  
       <div className="grid-container">     
        <Nav/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productpage" element={<ProductPage/>}/>    
          <Route path="/login" element={<LogInPage/>}/>  
          <Route path="/wishlist" element={<WishListPage/>} /> 
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/forgotpassword" element={<ForgotpassWord/>}/>
          <Route path="/mockman" element={<MockMan/>}/>
        </Routes>        
      </div>
      
  );
}

export default App;
