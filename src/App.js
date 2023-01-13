import "./App.css";
import logo from "./logo.png";
import Productpage from "./pages/Productpage";





import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { Cartpage } from "./pages/Cartpage";
function App() {
  return ( 
  

  <Router>
     
   
   
   
   
 
   
    <Routes>
    <Route path="/" element={<Productpage/>}/>
  
    
    <Route path='/Cartpage' element={<Cartpage/>}/>
   


    </Routes>
     
    
    

  </Router>

   
 
 
   
    
   
     
    
   
   
    
  );
}

export default App;
