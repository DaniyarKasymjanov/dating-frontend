import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar.js'
import Login from './Login.js'
import Onboarding from './Onboarding';
import EvaluationQuestions from './EvaluationQuestions'
import Home from './Home.js'
import Search from './Search.js'
import Profile from './Profile'
import Favorites from './Favorites.js'
import Spotlight from './Spotlight.js';
import SearchResults from './SearchResults.js'
import LandingPage from './LandingPage.js'
import Messages from './Messages.js'
import ChatHistory from './ChatHistory.js'
import ToS from './ToS.js'
import FAQ from './FAQ.js'
import Contacts from './Contacts.js'
import {Grid} from './Styled.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from '@fortawesome/fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faCircle from '@fortawesome/fontawesome-free-regular/faCircle'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'

fontawesome.library.add(faUser)
fontawesome.library.add(faCircle)
fontawesome.library.add(faFacebook)

class App extends Component {
  constructor() {
    super() 
    this.state = {
      username : "",
      password: "",
      searchResults: [],
      fetchedSession: false
    }
  }
  componentDidMount = () => {
    fetch('/session', {
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if(res.success) this.setState({ username: res.user.username, fetchedSession: true });
      });
  }

  handleSearch = (searchObj) => {
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify(searchObj)
    })
    .then(res => res.json())
    .then(resJON => this.setState({ searchResults: resJON }))
  }

  handleLogin = obj => {
    fetch('/login',{
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify( obj )
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) this.setState({ username: res.username });
    })
  }

  setUsername = (username, password) => {
    this.setState({username:username, password: password})
  }

  renderHome = () => {
    return(<Home username={this.state.username}/>)
  }

  // renderLogin = () => {
  //   return(<Login/>)
  // }

  renderUserProfile = (routerData) => {
    let username = routerData.match.params.username
    return(<Profile username={username} ownProfile={username === this.state.username} history={routerData.history} />)
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
    return(<SearchResults searchResults={this.state.searchResults} username={this.state.username}/>)
  }

  renderMessagesLast = (routeProps) => {
    return this.state.fetchedSession ? <Messages username={this.state.username} history={routeProps.history} /> : <div>Loading...</div>
  }

  renderMessages = (routeProps) => {
    const receiverName = routeProps.match.params.receiverName;
    return this.state.fetchedSession ? <Messages username={this.state.username} receiverName={receiverName} /> : <div>Loading...</div>
  }

  renderToS = () => {
    return(<ToS/>)
  }

  renderFAQ = () => {
    return(<FAQ/>)
  }

  renderContacts = () => {
    return(<Contacts/>)
  }


  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Route exact path="/search" render={this.renderSearch}/>
      {this.props.location.pathname !== '/' && (<NavBar username={this.state.username} handleSearch={this.handleSearch} history={this.props.history}/>)}
      <Grid>
          <Onboarding handleLogin={this.handleLogin}/>
          <div>
          <Route exact path="/login" render={this.renderLogin}/>
            <Route exact path="/favorites" render={this.renderFavorites}/>
            <Route exact path="/spotlight" render={this.renderSpotLight}/>
            <Route exact path="/profile/:username" render={this.renderUserProfile}/>
            <Route exact path="/main" render={this.renderHome}/>
            <Route exact path="/termofservices" render={this.renderToS}/>
            <Route exact path="/faq" render={this.renderFAQ}/>
            <Route exact path="/contacts" render={this.renderContacts}/>
            <Route exact path="/searchresults" render={this.renderSearchResults}/>
            <Route exact path="/messages/" render={this.renderMessagesLast}/>
            <Route exact path="/messages/:receiverName" render={this.renderMessages}/>
          </div>
      </Grid>
      </div>
    );
  }
}

export default withRouter(App);
