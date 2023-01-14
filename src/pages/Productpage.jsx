import React, {useState, useEffect } from "react"; //This is our first step in which we are importing 2 hooks one is useState and another is useEffect 
import axios from "axios";//This is our third step in which we fist download a axios in terminal and after that we simply import it
import Navbar from "../components/Navbar";
import {Cart} from "./Context";
import {Wishlist} from "../contexts/Wishcontext";
import { useContext } from "react";
import Categorybuttons from "./Categorybuttons";
import Ratingbtn from "../components/Ratingbtn";
import Stock from "../components/Stock";
import Sort from "../components/Sort";




// This is the productpage
const Productpage = () => {
    const [product,setproducts] = useState([]) //This step was performed to show items in the window
    const {cart,setcart} =useContext(Cart);//This step was used for adding to cart including the functiobelow
    const {wishlist,setwishlist} = useContext(Wishlist)
    
    
    function addtocart(item){
        
        setcart([...cart,item])
       
      
       
    }

  
   function addtowishlist(item){
    setwishlist([...wishlist,item])
   }
    
    
    
    
    

        
        
    

    
    //This was our second step in which we are getting data from fake backend with the help of useEffect hook and axios 
    
    useEffect(()=>{
        axios.get("/api/products").then(resp=>{
            
            setproducts(resp.data.products)
        })
    }, []) 

    
   

    //using filter for categories
    
   
   
    
    return (
        <>
        <div>
         <Navbar product={product}/>
         
       
         
         
        
            <div className="product-container">
            <Categorybuttons setproducts={setproducts} product={product}/>
            <Ratingbtn setproducts={setproducts}/>
            <Stock setproducts={setproducts}/>
            <Sort setproducts={setproducts}/>
            
           
            
            {
                product.map(item=>{
                    return <div className="products"> <img height="70%" width="100%" src={"https://m.media-amazon.com/images/I/61y7eNVNEeL._UY741_.jpg"}/> <div className="productdetails"> price: ${item.price} <br/>Rating:{item.ratings } <br/> Description: {item.title} <br/>   </div><button onClick={()=>addtocart(item)}className="cart-btn">Add to cart</button> <button onClick={()=>addtowishlist(item)} className="wishlist-btn">Add to Wishlist</button></div>
                        
                        
                    
                })
             }
           
            
            

           


            

            
            </div>
            
        
     
        
       
       
            
        
            
     </div>
     
     </>
      );
}
 
export default Productpage