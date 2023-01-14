import React from 'react'
import { Link } from 'react-router-dom'

const Navbar  = () => {
   
  return (
    <div> <div className='nav-bar'>
    
      
      <a className='nav-cart'><Link style={{textDecoration:"none",color:"black"}} to="/cartpage"><span class="material-symbols-outlined">shopping_bag</span></Link></a>
      <a className='nav-wishlist'><Link style={{textDecoration:"none",color:"black"}} to="/wishlistpage">Wishlist</Link></a>
    
    <a className='logo'><Link style={{textDecoration:"none",color:"black"}} to="/">Wintra</Link></a>
    
    </div></div>
  )
}

export default Navbar