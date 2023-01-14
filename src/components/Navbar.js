import React from 'react'
import { Link } from 'react-router-dom'

const Navbar  = () => {
  return (
    <div> <div className='nav-bar'>
    
      
      <span className='nav-cart'><Link style={{textDecoration:"none",color:"black"}} to="./cartpage">Cart</Link></span>
    
    <span className='logo'><Link style={{textDecoration:"none",color:"black"}} to="/">Wintra</Link></span>
    <span className='nav-wishlist'><Link style={{textDecoration:"none",color:"black"}} to="./wishlistpage">Wishlist</Link></span>
    </div></div>
  )
}

export default Navbar