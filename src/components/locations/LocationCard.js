import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="address">Address: { location.address}</div>
        <div className="footage">Sq Ft: { location.squareFootage}</div>
        <div className="handicap">Handicap Accessible: { location.handicap ? 'Yes' : 'No'}</div>
    </section>
)


