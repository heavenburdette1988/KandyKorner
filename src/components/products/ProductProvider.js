import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productTypes")
        .then(res => res.json())
        .then(setProducts)
        
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
        <ProductContext.Provider value={{
            products, getProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
