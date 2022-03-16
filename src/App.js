import "./App.css";
import Nav from "./components/nav/Nav";
import MockMan from "mockman-js";
import {Routes,Route} from "react-router";
import Home from "./pages/Home/Home";
import { ProductPage } from "./pages/ProductPage/ProductPage";


function App() {
  return (
    // <div className="App">
      <div className="grid-container">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Productpage" element={<ProductPage/>}/>
        <Route path="/mockman" element={<MockMan/>}/>
      </Routes>
      </div>
      // </div>
  );
}

export default App;
