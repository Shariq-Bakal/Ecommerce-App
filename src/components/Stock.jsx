import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react'

const Stock = ({setproducts}) => {
    const[stocks,setstocks]=useState([])
    useEffect(()=>{
        axios.get("/api/products").then(stockreturn=>{
            setstocks(stockreturn.data.products)
        })
    }, [])
    const stockbuttons = [...new Set(stocks.map(item=>item.stock))]
    function stockavailable(vals){
        setproducts(stocks.filter(newval=>{
            return newval.stock===vals
        }))
    }
    console.log(stockbuttons)
  return (
    <div>
        <div className='stockbuttons'>
            <h2>Products availibility</h2>
            {
                stockbuttons.map((vals)=>{
                    return <button onClick={()=>stockavailable(vals)}>{vals}</button>

                })
            }
        </div>
    </div>
  )
}

export default Stock