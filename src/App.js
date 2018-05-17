import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar.js'
import Login from './Login.js'
import Onboarding from './Onboarding';
import EvaluationQuestions from './EvaluationQuestions'
import Home from './Home.js'
import Search from './Search.js'
import Profile from './Profile.js'
import Favorites from './Favorites.js'
import Spotlight from './Spotlight.js';
import Register from './Register.js'
import SearchResults from './SearchResults.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

fontawesome.library.add(faUser)
fontawesome.library.add(faCircle)
fontawesome.library.add(faFacebook)


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
      <Route exact path="/searchresults" render={this.renderSearchResults}/>
      <Route exact path="/search" render={this.renderSearch}/>
      <Grid>
        {(this.props.location.pathname !== '/login' && this.props.location.pathname !== '/register') && (<NavBar/>)}
          <div>
            <Route exact path="/favorites" render={this.renderFavorites}/>
            <Route exact path="/spotlight" render={this.renderSpotLight}/>
            <Route exact path="/profile" render={this.renderUserProfile}/>
            <Route exact path="/" render={this.renderHome}/>
            <Onboarding />
          </div>
      </Grid>
      </div>
    );
  }
}

export default withRouter(App);
