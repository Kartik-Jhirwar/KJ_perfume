import "./App.css";
import {Nav} from "./components/nav/Nav";
import MockMan from "mockman-js";
import {Routes,Route} from "react-router";
import Home from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { LogInPage } from "./pages/LogIN/LogInPage";




function App() {
  return (  
       <div className="grid-container">     
        <Nav/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productpage" element={<ProductPage/>}/>    
          <Route path="/login" element={<LogInPage/>}/>   
          <Route path="/mockman" element={<MockMan/>}/>
        </Routes>
      </div>
      
  );
}

export default App;
