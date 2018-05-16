import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import NavBar from './NavBar.js'
import Login from './Login.js'
import Register from './Register.js'
import EvaluationQuestions from './EvaluationQuestions.js'
import Home from './Home.js'
import Search from './Search.js'
import Profile from './Profile.js'
import Favorites from './Favorites.js'
import './App.css';

class App extends Component {

  renderHome = () => {
    return(<Home/>)
  }

  renderSearch = () => {
    return(<Search/>)
  }

  renderLogin = () => {
    return(<Login/>)
  }

  renderNavBar = () => {
    return(<NavBar/>)
  }

  renderUserProfile = () => {
    return(<Profile/>)
  }

  render() {
    return (
      <div className="App">
      <Route exact path="/navbar" render={this.renderNavBar}/>
      <Route exact path="/login" render={this.renderLogin}/>
      <Route exact path="/" render={this.renderHome}/>
      <Route exact path="/search" render={this.renderSearch}/>
      <Route exact path="/profile" render={this.renderUserProfile}/>
      </div>
    );
  }
}

export default App;
