import React from 'react'
import { Cart } from './Context'
import { useContext } from 'react'
import Navbar from '../components/Navbar'



const Cartpage = () => {
  const {cart,setcart} = useContext(Cart)
 
  function deletecart(id){
    const newlist = cart.filter(prod=> prod.id!==id)
    setcart(newlist)//do it once again
    console.log(newlist)
  

   
}
  return (
    <div>
      <Navbar/>
      
      <div className="cart-product-container">
      <h2 >My cart |{cart.length}| </h2>
      {
                cart.map(item=>{
                    return <div className="cart-products"> <img height="70%" width="100%" src="https://m.media-amazon.com/images/I/61y7eNVNEeL._UY741_.jpg"/> <div className="productdetails"> price: ${item.price} <br/>Rating:{item.ratings } <br/> Description: {item.title} <br/>   </div><button onClick={()=>deletecart(item.id)} 
                      className="cart-btn">Remove from cart</button></div>
                        
                        
                    
                })
            }
            
        
        

             </div>
     
    </div>
  )
}

export  {Cartpage}