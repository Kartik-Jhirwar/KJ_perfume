import "./App.css";
import Nav from "./components/nav/Nav";
import MockMan from "mockman-js";
import {Routes,Route} from "react-router";




function App() {
  return (
    <div className="App">

      <Nav/>
      <Routes>
        <Route path="/mockman" element={<MockMan/>}/>
      </Routes>
    </div>
  );
}

export default App;
