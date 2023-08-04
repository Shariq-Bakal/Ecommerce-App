import "./App.css";
import Productpage from "./pages/Productpage";
import {Routes, Route,} from "react-router-dom";
import { Cartpage } from "./pages/Cartpage";
import {Wishlistpage} from "./pages/Wishlistpage";
function App() {
  return ( 
  <Routes>
    <Route path="/" element={<Productpage/>}/>
    <Route path="/Wishlistpage" element={<Wishlistpage/>}/>
    <Route path="/Cartpage" element={<Cartpage/>}/>
 </Routes>
  );
}

export default App;
