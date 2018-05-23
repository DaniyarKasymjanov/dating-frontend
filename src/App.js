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
      fetchedSession: false,
      city: "",
      gender: "",
      birthday: "",
      profileImage: "",

    }
  }
  componentDidMount = () => {
    fetch('/session', {
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(res => {
        console.log(res, "APPPPPPPPPP");
        if (res.success) {
          this.setState({ username: res.user.username, city: res.user.city, gender: res.user.gender, birthday: res.user.birthday, profileImage: res.user.profileImg });
          if (this.props.location.pathname === '/') this.props.history.push('/main');
        }
        else if (this.props.location.pathname !== '/') {
          this.props.history.push('/');
        }
        this.setState({ fetchedSession: true });
      });
  }

  handleSearch = (searchObj) => {
    fetch('/search', {
      method: 'POST',
      body: JSON.stringify(searchObj)
    })
    .then(res => res.json())
    .then(resJSON => { 
      console.log('SEARCH', resJSON)
      this.setState({ searchResults: resJSON.result })
      if(this.props.location.pathname !== '/searchresults')
        this.props.history.push('/searchresults') 
    })
  }

  handleLogin = obj => {
    return fetch('/login',{
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify( obj )
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) this.setState({ username: res.result.username, city: res.result.city, gender: res.result.gender, birthday: res.result.birthday, profileImage: res.result.profileImg });
      console.log(res)
      return res;
      
    })
  }

  setUsername = (username, password) => {
    this.setState({username:username, password: password})
  }

  renderHome = () => {
    return(<Home username={this.state.username}  gender={this.state.gender} city={this.state.city} birthday={this.state.birthday} profileImage={this.state.profileImage}/>)
  }

  // renderLogin = () => {
  //   return(<Login/>)
  // }

  renderUserProfile = (routerData) => {
    let username = routerData.match.params.username
    return(<Profile ownUsername={this.state.username} username={username} ownProfile={username === this.state.username} history={routerData.history} />)
  }
  renderEvaluation = () => {
    return(<EvaluationQuestions/>)
  }
  renderSpotLight = () => {
    return(<Spotlight profileImage={this.state.profileImage} username={this.state.username} gender={this.state.gender} city={this.state.city} birthday={this.state.birthday}/>)
  }

  renderFavorites = () => {
    return(<Favorites profileImage={this.state.profileImage} username={this.state.username}  gender={this.state.gender} city={this.state.city} birthday={this.state.birthday}/>)
  }

  renderSearchResults = () => {
    return(<SearchResults profileImage={this.state.profileImage} searchResults={this.state.searchResults} username={this.state.username}  gender={this.state.gender} city={this.state.city} birthday={this.state.birthday}/>)
  }

  renderMessagesLast = (routeProps) => {
    return this.state.fetchedSession ? <Messages username={this.state.username} history={routeProps.history} /> : <div>Loading...</div>
  }

  renderMessages = (routeProps) => {
    console.log('renderMessages', this.state.profileImage)
    const receiverName = routeProps.match.params.receiverName;
    return this.state.fetchedSession ? <Messages username={this.state.username}  gender={this.state.gender} city={this.state.city} birthday={this.state.birthday} profileImage={this.state.profileImage} receiverName={receiverName} /> : <div>Loading...</div>
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
    if(!this.state.fetchedSession) return <div>Loading</div>;
    return (
      <div className="App">
      {/* <Route exact path="/search" render={this.renderSearch}/> */}
      {this.props.location.pathname !== '/' && (<NavBar username={this.state.username} profileImage={this.state.profileImage} username={this.state.username} gender={this.state.gender} city={this.state.city} birthday={this.state.birthday} handleSearch={this.handleSearch} history={this.props.history}/>)}
      <Grid>
          <Onboarding handleLogin={this.handleLogin} setUsername={this.setUsername} history={this.props.history} />
          <div style={{backgroundImage: 'url("/chat-bg.png")'}}>
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
