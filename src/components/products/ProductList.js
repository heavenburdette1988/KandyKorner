import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "../productTypes/ProductTypesProvider"
// import { useNavigate } from "react-router"



import "./product.css"
import { ProductCard } from "./ProductCard"
import { ProductContext } from "./ProductProvider"



export const ProductList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { products, getProducts } = useContext(ProductContext)
// const {productTypes, getProductTypes} = useContext(ProductTypeContext)
  //useEffect - reach out to the world for something
  useEffect(() => {

    getProducts()


  }, [])
//   const navigate = useNavigate()

  return (
 
    
    <>
    {/* <h2>Location</h2>
    <button onClick={() => {navigate("create")}}>
        Add Location
    </button> */}
    <div className="products">
 
      { products.map(product => {
        
          
         
            // const productType = productType.find(t => t.id === product.productTypeId)
          return  <ProductCard 
          key={product.id}         
          product={product}
          
           />
         
        })
      }
    </div>
    </>
    
  )
}

// productType={kandy}