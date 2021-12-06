import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductTypeContext = createContext()

export const ProductTypeProvider = (props) => {
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
        .then(res => res.json())
        .then(setProductTypes)

    
        
    }

    // const addLocation = locationObj => {
    //     return fetch("http://localhost:8088/locations", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(locationObj)
    //     })
    //     .then(getLocations)
    // }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
     
        <ProductTypeContext.Provider value={{
            productTypes, getProductTypes
           
        }}>
            {props.children}
        </ProductTypeContext.Provider>

        
    )
}
