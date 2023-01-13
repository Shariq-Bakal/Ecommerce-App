import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'





const Categorybuttons = ({setproducts}) => {
  const [allprod,setallprod]=useState([])
  useEffect(()=>{
    axios.get("/api/products").then(response=>{
      setallprod(response.data.products)
      
    })
    }, [])
  
  
    const catbuttons = [...new Set(allprod.map((val)=>val.categoryName))] 
    console.log(catbuttons)
    
    function filteritems(btns){
      setproducts(allprod.filter(newval=>{
        return newval.categoryName===btns
      }))
    }
    
  return (
    <div>
        <div className='categorybuttons'>
        <h2>Categories</h2>
        {
            catbuttons.map((btns,id)=>{
                return <button onClick={()=>filteritems(btns)} key={id}>{btns}</button>
            })
        }
        <button onClick={()=>setproducts(allprod)}>All</button>
        </div>
        
        
    </div>
  )
}

export default Categorybuttons