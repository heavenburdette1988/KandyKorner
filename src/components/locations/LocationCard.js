import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="address">{ location.address}</div>
        <div className="footage">{ location.squareFootage}</div>
        <div className="handicap">{ location.handicap}</div>
    </section>
)


