import React, { useEffect } from 'react'
import axios from "axios"
import { useState,useffect } from 'react'



const Ratingbtn = ({setproducts}) => {
    const [rating,setrating] = useState([])
    useEffect(()=>{
        axios.get("/api/products").then(reply=>{
            setrating(reply.data.products)
        })
    }, [])
    const ratingbuttons = [...new Set(rating.map(item=>item.ratings))]
    console.log(ratingbuttons)

    function filterratingitem(vals){
        setproducts(rating.filter(newval=>{
            return newval.ratings===vals
        }))
    }
    

    
    
  return (
    <div>
        <div className='ratingbuttons'>
            <h2>Ratings</h2>
            {
                ratingbuttons.map((vals,id)=>{
                    return <button onClick={()=>filterratingitem(vals)} key={id}>{vals}</button> 
                })
            }
        </div>

    </div>
  )
}

export default Ratingbtn