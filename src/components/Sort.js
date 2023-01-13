import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'






const Sort = ({setproducts}) => {
    const [sortprice,setsortprice] = useState([])
    const [dessort,setdessort]=useState([])
    
    useEffect(()=>{
        axios.get("/api/products").then(resp=>{
            setsortprice(resp.data.products)
        })
    }, [])
     
    useEffect(()=>{
        axios.get("/api/products").then(resp=>{
            setdessort(resp.data.products)
        })
    }, [])

    function asendingsort(){
        setproducts(sortprice.sort((a,b)=>{
            return a.price-b.price
        }))
    }
    function descendingsort(){
        setproducts(dessort.sort((a,b)=>{
            return b.price-a.price
        }))
    }
  
    
    

   
    
  
    
    
        
 
      
    
  return (
    <div>

        <div className='sortbypricebutton'>
            <h2>Sort by:</h2>
           <button onClick={asendingsort}>Low to High</button>
           <button onClick={descendingsort}> High to low</button>

           

        </div>
        
    </div>
  )
}

export default Sort