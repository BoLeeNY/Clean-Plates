import React, { Component } from 'react';
import RestaurantIndex from './components/RestaurantIndex';
import OneRestaurant from './components/OneRestaurant';
import Header from './components/Header';
import 'bulma/css/bulma.css';
import './App.css';
import {
  fetchRestaurants,
  fetchOneRestaurant,
  fetchComments,
  saveNewComment,
  updateComment,
  deleteComment
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      selectedRest: '',
      currentView: 'All Restaurants',
      currentModal: '',
      input: '',
      name: '',
      comment: '',
      restaurant_id: '',
      com_id: '',
      modal: false
    }
    this.fetchOne = this.fetchOne.bind(this);
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.createComment = this.createComment.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.homepage = this.homepage.bind(this);
    this.selectModal = this.selectModal.bind(this);
  }
// This fetchs all restaurants on load
  componentDidMount() {
    fetchRestaurants()
    .then(data => this.setState({ restaurants: data.restaurants }));
  };
// This toggles the modal on or off
  toggleModal() {
    this.setState({
      modal: !(this.state.modal)
    })
  }
// The Update component uses this to set state
  handleState(comment) {
    this.setState({
      name: comment.name,
      comment: comment.comment,
      restaurant_id: comment.restaurant_id,
      com_id:comment.id,
      modal: !(this.state.modal),
      currentModal: "update"
    })
  }
// The Header uses this to set the view to "All Restaurants" when clicked
  homepage() {
    this.setState({
      currentView: 'All Restaurants'
    })
  }
// This sets state according to user input
  handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
        [name]: value,
    });
};
// This fetches a single restaurant
  fetchOne(id) {
    fetchOneRestaurant(id)
      .then(data => this.setState({
        restaurants: data.restaurants,
        currentView: 'One Restaurant'
      }))
  };
// This sets the view to a single restaurant
  selectRestaurant(rest) {
    this.setState({
      selectedRest: rest,
      currentView: 'One Restaurant'
    })
  };

  selectModal(modal) {
    this.setState({
      currentModal: "create",
      modal: !(this.state.modal)
    })
  }
// This creates a new Comment
  createComment(comment) {
    saveNewComment(comment)
    .then(data => fetchOneRestaurant(comment.restaurant_id))
      .then(data => {
        this.setState({
          currentView: 'One Restaurant',
          selectedRest: comment.rest,
        });
      })
  };
// This updates an existing Comment
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
// This deletes a Comment
  handleDelete(comment) {
    deleteComment(comment)
      .then(data => fetchRestaurants())
      .then(data => {
        this.setState({
          currentView: 'All Restaurants',
          restaurants: data.restaurants,
        });
      })
  }


// This is the conditional render
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
        create={this.createComment}
        toggle={this.toggleModal}
        modal={this.state.modal}
        update={this.updateComment}
        state={this.handleState}
        change={this.handleChange}
        name={this.state.name}
        comment={this.state.comment}
        id={this.state.restaurant_id}
        selectModal={this.selectModal}
        currentModal={this.state.currentModal} />
    }
  };
  render() {
    return (
      <div className="App">
      <Header search={this.search} home={this.homepage}/>
      {this.determinRender()}
      </div>
    );
  }
}

export default App;
