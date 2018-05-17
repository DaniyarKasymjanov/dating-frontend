import React, { Component } from 'react';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar.js'
import Login from './Login.js'
import Onboarding from './Onboarding';
import Home from './Home.js'
import Search from './Search.js'
import Profile from './Profile.js'
import Favorites from './Favorites.js'
import Spotlight from './Spotlight.js';
import Register from './Register.js'
import SearchResults from './SearchResults.js'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

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

  // renderNavBar = () => {
  //   return(<NavBar/>)
  // }

  renderUserProfile = () => {
    return(<Profile/>)
  }
  renderRegister = () => {
    return(<Register/>)
  }
  renderEvaluation = () => {
    return(<EvaluationQuestions/>)
  }
  renderSpotLight = () => {
    return(<Spotlight/>)
  }

  renderFavorites = () => {
    return(<Favorites/>)
  }

  renderSearchResults = () => {
    return(<SearchResults/>)
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Route exact path="/login" render={this.renderLogin}/>
      <Grid>
        {(this.props.location.pathname !== '/login' && this.props.location.pathname !== '/register') && (
          <NavBar/>
        )}
        <Route exact path="/profile" render={this.renderUserProfile}/>
        <Route exact path="/register" render={this.renderRegister}/>
        <Route exact path="/evaluation" render={this.renderEvaluation}/>
        <Route exact path="/favorites" render={this.renderFavorites}/>
        <Route exact path="/" render={this.renderHome}/>
        <Route exact path="/searchedResults" render={this.renderSearchResults}/>
      </Grid>
      </div>
    );
  }
}

export default withRouter(App);
