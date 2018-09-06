import React from 'react'


function RestaurantIndex(props) {
    let resta;
    if (props.input) {
        debugger
        resta = props.restaurants.name.filter(rest => {
            return rest.name.toLowerCase().includes(props.input.toLowerCase())
        })
    } else {
        resta = props.restaurants
    }
    return (
        <div>
            
                <div className="search">
                <form  action="search">
                <input onChange={props.change} type="text" className="searchbar"
                    name="input" 
                    placeholder="Find a Restaurant"
                     />
                <input className="submit" type="submit" value="search"/>
                </form>
                </div>
           
            <div className="container">
            {resta.map(restaurant => (
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