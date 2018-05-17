import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar.js'
import Login from './Login.js'
import Onboarding from './Onboarding';
import Register from './Register'
import EvaluationQuestions from './EvaluationQuestions'
import Home from './Home.js'
import Search from './Search.js'
import Profile from './Profile.js'
import Favorites from './Favorites.js'
import Spotlight from './Spotlight.js';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0 5%;
  grid-gap: 10px;
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

  renderNavBar = () => {
    return(<NavBar/>)
  }

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

  render() {
    return (
      <div className="App">
      <Route exact path="/login" render={this.renderLogin}/>
      <Grid>
        <Route path={/^\/(?!(login|register)).*$/} render={this.renderNavBar}/>
        <MainGrid>
          <div>
            <Route exact path="/spotlight" render={this.renderSpotLight}/>
            <Route exact path="/profile" render={this.renderUserProfile}/>
            <Onboarding />
          </div>
          <div>
            <Route exact path="/" render={this.renderHome}/>
          </div>
        </MainGrid>
      </Grid>
      </div>
    );
  }
}

export default App;
