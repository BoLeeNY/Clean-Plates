import React, { Component } from 'react';
import RestaurantIndex from './components/RestaurantIndex';
import OneRestaurant from './components/OneRestaurant';
import Header from './components/Header';
import './App.css';
import {
  fetchRestaurants,
  fetchOneRestaurant,
  fetchComments,
  searchRestaurants,
  deleteComment
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
    this.search = this.search.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetchRestaurants()
    .then(data => this.setState({ restaurants: data.restaurants }));
  };

  search(name) {
    searchRestaurants(name)
    .then(data => this.setState({ restuarants: data.restaurants }));
  }

  fetchOne(id) {
    fetchOneRestaurant(id)
      .then(data => this.setState({
        restaurants: data.restaurants,
        currentView: 'One Restaurant'
      }))
  };

  selectRestaurant(rest) {
    this.setState({
      selectedRest: rest,
      currentView: 'One Restaurant'
    })
  };

  handleDelete(comment) {
    debugger
    deleteComment(comment)
      .then(data => fetchOneRestaurant(comment.restaurant_id))
      .then(data => {
        this.setState({
          currentView: 'One Restaurant',
          restaurants: data.restaurants,
        });
      })
  }



  determinRender() {
    switch(this.state.currentView) {
      case 'All Restaurants':
      return <RestaurantIndex restaurants={this.state.restaurants} select={this.selectRestaurant}/>
      case 'One Restaurant':
      return <OneRestaurant rest={this.state.selectedRest} delete={this.handleDelete} />
    }
  };
  render() {
    return (
      <div className="App">
      <Header search={this.search}/>
      {this.determinRender()}
      </div>
    );
  }
}

export default App;
