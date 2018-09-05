import React, { Component } from 'react';
import RestaurantIndex from './components/RestaurantIndex';
import OneRestaurant from './components/OneRestaurant';
import './App.css';
import {
  fetchRestaurants,
  fetchOneRestaurant
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      selectedRest: '',
      currentView: 'All Restaurants'
    }
    this.fetchOne = this.fetchOne.bind(this);
    this.selectRestaurant = this.selectRestaurant.bind(this);
  }

  componentDidMount() {
    fetchRestaurants()
    .then(data => this.setState({ restaurants: data.restaurants }));
  };

  fetchOne(id) {
    fetchOneRestaurant(id)
      .then(data => this.setState({
        restaurantss: data.restaurants,
        currentView: 'One Restaurant'
      }))
  };

  selectRestaurant(rest) {
    this.setState({
      selectedRest: rest,
      currentView: 'One Restaurant'
    })
  };

  determinRender() {
    switch(this.state.currentView) {
      case 'All Restaurants':
      return <RestaurantIndex restaurants={this.state.restaurants} select={this.selectRestaurant}/>
      case 'One Restaurant':
      return <OneRestaurant rest={this.state.selectedRest} />
    }
  };
  render() {
    return (
      <div className="App">
      {this.determinRender()}
      </div>
    );
  }
}

export default App;
