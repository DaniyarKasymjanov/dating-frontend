import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import EvaluationQuestions from './EvaluationQuestions.js'
import Home from './Home'
import Search from './Search'
import Profile from './Profile'
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

  render() {
    return (
      <div className="App">
      <Login></Login>
      <Register></Register>
      <EvaluationQuestions></EvaluationQuestions>

      {/* <Login></Login>
      <Home></Home> */}
      {/* <Route exact path="/" render={this.renderHome}/> */}
      <Route exact path="search" render={this.renderSearch}/>
      <Search></Search>
      </div>
    );
  }
}

export default App;
