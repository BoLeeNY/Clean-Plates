import React from 'react'


function RestaurantIndex(props) {
    // This searches through all restaurants to match user input
    let resta;
    if (props.input) {
        resta = props.restaurants.filter(rest => {
           if (rest.name) {
               return rest.name.toLowerCase().includes(props.input.toLowerCase())
           }else{
               // If there is no match, display "Not Found"
               return "Not found"
           }
        })
    } else {
        resta = props.restaurants
    }
    return (
        <div>
            <div id="spinner">
                <img id="img-spinner" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="Loading"/>
            </div>
                <div className="search">
                <form  action="search">
                <input onChange={props.change} type="text" className="searchbar"
                    name="input" 
                    placeholder="Find a Restaurant"
                     />
                </form>
                </div>
           
            <div className="container">
            {resta.map(restaurant => (
                // This maps through and displays all restaurants
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