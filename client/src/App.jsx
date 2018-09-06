import React, { Component } from 'react';
import RestaurantIndex from './components/RestaurantIndex';
import OneRestaurant from './components/OneRestaurant';
import Header from './components/Header';
import './App.css';
import {
  fetchRestaurants,
  fetchOneRestaurant,
  fetchComments,
  saveNewComment,
  deleteComment
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      selectedRest: '',
      currentView: 'All Restaurants',
      input: '',
      name: '',
      comment: ''
    }
    this.fetchOne = this.fetchOne.bind(this);
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createComment = this.createComment.bind(this);
  }

  componentDidMount() {
    fetchRestaurants()
    .then(data => this.setState({ restaurants: data.restaurants }));
  };

  handleSubmit(ev) {
    ev.preventDefault();
    this.createComment(this.state.text)
};

  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
        [name]: value,
    });
};

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

  createComment() {
    
    let text = {name: this.state.name, comment: this.state.comment, restaurant_id: this.state.selectedRest.camis}
    saveNewComment(text)
    .then(data => fetchOneRestaurant(this.state.selectedRest.camis))
      .then(data => {
        this.setState({
          currentView: 'One Restaurant',
          restaurants: data.restaurants,
        });
      })
  };

  handleDelete(comment) {

    deleteComment(comment)
      .then(data => fetchComments(comment.restaurant_id))
      .then(data => {
        this.setState({
          currentView: 'One Restaurant',
          restaurants: data.restaurant,
        });
      })
  }



  determinRender() {
    switch(this.state.currentView) {
      case 'All Restaurants':
      return <RestaurantIndex 
        restaurants={this.state.restaurants} 
        select={this.selectRestaurant}
        change={this.handleChange}
        input={this.state.input} />
      case 'One Restaurant':
      return <OneRestaurant 
        rest={this.state.selectedRest} 
        delete={this.handleDelete}
        create={this.handleSubmit}
        change={this.handleChange} />
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
