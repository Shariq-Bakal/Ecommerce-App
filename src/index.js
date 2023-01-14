import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import Context from "./pages/Context";
import Wishcontext from "./contexts/Wishcontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  
      <Context>
        <Wishcontext>
        <App />
       </Wishcontext>
      
     </Context>
      
     
    

   
    
   
  </React.StrictMode>,
  document.getElementById("root")
);