# Clean-Plates

## Summary
Clean Plates ( name is subject to change ), is an app that lists restaurants in New York City and the sanitation grades that they received. It will display all of the health violations that the restaurant received. It fetches from an api found [here](https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j).

## User Stories
1. As a user, I want to be able to search for a specific restaurant.
2. As a user, I want to be able to add a restaurant.
3. As a user, i want to be able to edit a restaurant.
4. As a user, I want to be able to go back to the homepage from any page.

## ERD
<img width="642" alt="screen shot 2018-09-10 at 9 06 13 am" src="https://user-images.githubusercontent.com/39596048/45299219-db4d1e00-b4d8-11e8-8338-939685b0676f.png">

## Wireframe
![img_3138](https://user-images.githubusercontent.com/39596048/45035546-3b9b1600-b028-11e8-9a6a-88ce89192431.JPG)
![img_3139](https://user-images.githubusercontent.com/39596048/45035535-38a02580-b028-11e8-9d17-228a86df734c.JPG)

## Resources
Gem Rack-cors, Gem Httparty, Bulma, api found [here](https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j).

## Code Snippet
```
<div className={(props.modal&&props.currentModal==="update") ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <form onSubmit={props.update}>
                    <div>
                        <input type="text"
                            className="name"
                            name="name"
                            value={props.name}
                            placeholder="Name"
                            onChange={props.change} />
                    </div>
```
This is the code from the Update Comment modal. It conditionally renders on a button click. 

```
  updateComment(comment) {
    comment = {name: this.state.name, comment: this.state.comment, restaurant_id: this.state.restaurant_id, id: this.state.com_id}
    updateComment(comment)
      .then(data => fetchRestaurants())
      .then(data => {
        this.setState({
          restaurants: data.restaurants,
          currentView: 'All Restaurants'
        });
      })
  };
```
This code is my update method for a comment. It grabs specific pieces of state to pass to the api.

## MVP
1. Full CRUD
2. Search Bar

## Post-MVP
1. Auth
2. Extra styling


