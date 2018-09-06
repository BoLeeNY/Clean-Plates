import React from 'react'

function RestaurantIndex(props) {
    return (
        <div>
            
            <div>
            {props.restaurants.map(restaurant => (
                <div key={restaurant.id} className="Index"
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
        </div>
    )
}

export default RestaurantIndex;