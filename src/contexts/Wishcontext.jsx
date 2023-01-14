import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const Wishlist = createContext()

const Wishcontext = ({children}) => {
    const [wishlist,setwishlist] = useState([])
  return (
    <Wishlist.Provider value={{wishlist,setwishlist}}>
        {children}

    </Wishlist.Provider>
  )
}

export default Wishcontext