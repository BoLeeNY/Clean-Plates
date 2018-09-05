import React from 'react'

function OneRestaurant(props) {
    return (
        <div>
            <h2>{props.rest.name}</h2>
            <p>Address: {props.rest.building} {props.rest.street}, {props.rest.borough}, {props.rest.zip}</p>
            <p>Cuisine: {props.rest.cuisine}</p>
            <p>Grade: {props.rest.violations[0].grade}</p>
            <p>Inspection Date: {props.rest.violations[0].inspection_date}</p>
            <p>Violations: {props.rest.violations[0].description}</p>
        </div>
    )
}

export default OneRestaurant;