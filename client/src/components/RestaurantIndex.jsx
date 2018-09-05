import React from 'react'

function RestaurantIndex(props) {
    return (
        <div>
            {props.restaurants.map(restaurant => (
                <div key={restaurant.id}
                        onClick={(ev) => {
                        ev.preventDefault();
                        props.select(restaurant)
                    }}>
                    <h2>{restaurant.name}</h2>
                    <p>Address: {restaurant.building} {restaurant.street}, {restaurant.borough}, {restaurant.zip}</p>
                    <p>Cuisine: {restaurant.cuisine}</p>
                </div>
            ))}
        </div>
    )
}

export default RestaurantIndex;