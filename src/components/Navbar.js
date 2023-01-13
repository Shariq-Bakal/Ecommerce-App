import React from 'react'
import { Link } from 'react-router-dom'

const Navbar  = () => {
  return (
    <div> <div className='nav-bar'>
    
      
      <span className='nav-cart'><Link style={{textDecoration:"none",color:"black"}} to="./cartpage">Cart</Link></span>
    
    <span className='logo'><Link style={{textDecoration:"none",color:"black"}} to="/">Wintra</Link></span>
    </div></div>
  )
}

export default Navbar