import React from 'react'
import { Link } from 'react-router-dom'

const Navbar  = () => {
   
  return (
    <div> <div className='nav-bar'>
      
    
      
      <a className='nav-cart'><Link style={{textDecoration:"none",color:"white"}} to="/cartpage"><span class="material-symbols-outlined">shopping_bag</span> <span className='nav-text'>Bag</span></Link></a>
      <a className='nav-wishlist'><Link style={{textDecoration:"none",color:"white"}} to="/wishlistpage"><span class="material-symbols-outlined">favorite</span><span className='nav-text'>Wishlist</span></Link></a>
      
    
    <a className='logo'><Link style={{textDecoration:"none",color:"black"}} to="/"><span className='logo-back'> StyleSphere</span></Link></a>
    
    </div></div>
  )
}

export default Navbar