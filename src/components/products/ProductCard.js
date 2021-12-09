
import React from "react"
import "./product.css"

export const ProductCard = ({ product }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">{ product.price}</div>
        <div className="product__type">{ product.productTypes.type}</div>
       
    </section>
)





