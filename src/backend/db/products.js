import { v4 as uuid } from "uuid";

 


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  
 
  {
    _id: uuid(),
    title: "Shoes for men",
    price: 1000,
    categoryName: "Men",
    ratings:5 ,
    stock:"in stock",
    delivey:"COD",
    
  },
  {
    _id: uuid(),
    title: "Black jacket for men",
    price: 15000,
    categoryName: "Men",
    ratings: 4 ,
    stock:"in stock",
    delivey:"COD",
    
  },
  {
    _id: uuid(),
    title: "Shoes for men",
    
    price: 21000,
    categoryName: "Men",
    ratings:3 ,
    stock:"in stock",
    delivey:"COD",
    
  },
  {
    _id: uuid(),
    title: "Black jacket for men",
    price: 500,
    categoryName: "Men",
    ratings:3 ,
    stock:"in stock",
    delivey:"COD" ,
    
    
  },
  {
    _id: uuid(),
    title: "Shoes for men",
    
    price: 1050,
    categoryName: "women",
    ratings:1 ,
    stock:"in stock",
    delivey:"COD",
    
  },
  {
    _id: uuid(),
    title: "Black jacket for men",
    price: 5060,
    categoryName: "women",
    ratings:5 ,
    stock:"out of stock",
    delivey:"COD",
    
  },
  {
    _id: uuid(),
    title: "Shoes for men",
    
    price: 1020,
    categoryName: "women",
    ratings:2 ,
    stock:"out of stock",
    delivey:"COD NA",
   
  },
  {
    _id: uuid(),
    title: "Black jacket for men",
    price: 50,
    categoryName: "women",
    ratings:1 ,
    stock:"out of stock",
    delivey:"COD NA",
    

  },

];
