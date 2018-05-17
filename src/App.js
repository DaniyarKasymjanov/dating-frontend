import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
import SearchResults from './SearchResults.js'
import LandingPage from './LandingPage.js'
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
  constructor() {
    super() 
    this.state = {
      username : "adam"
    }
  }

  // componentDidMount = () => {
  //   fetch('/session', {
  //     credentials: 'same-origin'
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ username: res.username });
  //     });

  // }

  renderHome = () => {
    return(<Home username={this.state.username}/>)
  }

  renderSearch = () => {
    return(<Search/>)
  }

  renderLogin = () => {
    return(<Login/>)
  }

  renderUserProfile = (routerData) => {
    let username = routerData.match.params.username
    return(<Profile username={username}/>)
  }
  renderEvaluation = () => {
    return(<EvaluationQuestions/>)
  }
  renderSpotLight = () => {
    return(<Spotlight username={this.state.username}/>)
  }

  renderFavorites = () => {
    return(<Favorites username={this.state.username}/>)
  }

  renderSearchResults = () => {
    return(<SearchResults username={this.state.username}/>)
  }
  
  // renderLandingPage = () => {
  //   return(<LandingPage/>)
  // }

  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Route exact path="/search" render={this.renderSearch}/>
      {this.props.location.pathname !== '/' && (<NavBar username={this.state.username}/>)}
      <Grid>
          <Onboarding/>
          <div>
          <Route exact path="/login" render={this.renderLogin}/>
            <Route exact path="/favorites" render={this.renderFavorites}/>
            <Route exact path="/spotlight" render={this.renderSpotLight}/>
            <Route exact path="/profile/:username" render={this.renderUserProfile}/>
            <Route exact path="/main" render={this.renderHome}/>
            <Route exact path="/searchresults" render={this.renderSearchResults}/>
          </div>
      </Grid>
      </div>
    );
  }
}

export default withRouter(App);
