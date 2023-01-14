import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import Context from "./pages/Context";
import Wishcontext from "./contexts/Wishcontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context>
        <Wishcontext>
        <App />
       </Wishcontext>
      
     </Context>
    </BrowserRouter>
  
      
      
     
    

   
    
   
  </React.StrictMode>,
  document.getElementById("root")
);