import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import NavBar from './NavBar'
import Login from './Login'
import Register from './Register'
import EvaluationQuestions from './EvaluationQuestions.js'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
import Favorites from './Favorites'
import './App.css';

class App extends Component {

  renderHome = () => {
    return(<Home/>)
  }
  
  renderProfile = () => {
    return(<Profile/>)
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
      <Route exact path={/^\/(?!(login|register)).*$/} render={this.renderNavbar}/>
      <Route exact path="/login" render={this.renderLogin}/>
      <Route exact path="/" render={this.renderHome}/>
      <Route exact path="/search" render={this.renderSearch}/>
      <Route exact path="/profile" render={this.renderUserProfile}/>
      </div>
    );
  }
}

export default App;
