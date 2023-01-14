import React from 'react'
import { Wishlist } from '../contexts/Wishcontext'
import { useContext } from 'react'
import Navbar from '../components/Navbar'


const Wishlistpage = () => {
const {wishlist,setwishlist}= useContext(Wishlist)

function removewishlist(item){
    setwishlist(wishlist.filter(val=>{
        return item!=val
        
    }))
}


 
  return (
    <div>
        <Navbar/>
        <div className='wishlist-product-container'>
        <h2>My Wishlist:|{wishlist.length}|</h2>
        
        {
            wishlist.map(item=>{
                return <div className="wishlist-products"> <img height="70%" width="100%" src="https://m.media-amazon.com/images/I/61y7eNVNEeL._UY741_.jpg"/> <div className="productdetails"> price: ${item.price} <br/>Rating:{item.ratings } <br/> Description: {item.title} <br/>   </div><button onClick={()=>removewishlist(item)} 
                className="remove-wishlist">Remove from wishlist</button></div>
            })
        }
        </div>
        
    </div>
  )
}

export default Wishlistpage