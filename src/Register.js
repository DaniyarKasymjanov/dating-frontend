import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import EvaluationQuestions from './EvaluationQuestions';
import {Button, Alert, Tooltip} from 'reactstrap'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      password2: "",
      verifyUsername: true,
      passwordMatch: "",
      birthday: '',
      city: '',
      gender: '',
      isMounted: false,
    }
  }
  componentDidMount() {
    this.setState({ isMounted: true });
  }
  handleUsername = event => {
    event.preventDefault()
    this.setState({username: event.target.value})
  }
  verifyUsername = () => {
    console.log("verifyUsername")
    fetch('/verifyUsername', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (res.success) {
        this.setState({verifyUsername: true})
      }
      else {
        this.setState({verifyUsername: false})
      }
    })
  }
  renderValidInvalidUsername = () => {
    if(this.state.verifyUsername) {
      return <Alert>Your username is valid</Alert>
    }
    else if(this.state.verifyUsername === false){
      return <Alert>Your username is already taken</Alert>
    }
  }

  handlePassword = event => {
    event.preventDefault()
    this.setState({password: event.target.value})
  }
  handlePassword2 = event => {
    event.preventDefault()
    this.setState({password2: event.target.value})
  }
  passwordMatch = () => {
    if(this.state.password2 !== this.state.password) {
      this.setState({passwordMatch:false})
    } else {
      this.setState({passwordMatch:true})
    }
  }
  renderPasswordValidation = () => {
    if(this.state.passwordMatch === false) {
      return <Tooltip placement="right" isOpen={this.state.isMounted} target="passwordInput">
            Your password does not match.
          </Tooltip>
    }
  }

  varifyPassword = () => {

  }

  handleBirthday = event => {
    event.preventDefault()
    this.setState({birthday: event.target.value});
  }
  handleCity = event => {
    event.preventDefault()
    this.setState({city: event.target.value});
  }
  handleGender = event => {
    event.preventDefault()
    this.setState({gender: event.target.value});;
  }
  stepTwo = event => {
    this.props.setRegister(this.state)
    this.props.history.push('/evaluation');
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.stepTwo} className="regForm">
        <div className="regTop">
          <label >First Name:</label>
          <input id="usernameInput" className="regInput" required type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleUsername} onBlur={this.verifyUsername}></input>
          {!this.state.verifyUsername && (
          <Tooltip placement="right" isOpen={this.state.isMounted} target="usernameInput">
            Your username is already taken
          </Tooltip>
          )}
        </div>
        <div className="regBody">
        <label >Password:</label>
          <input className="regInput" required type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePassword}></input>
        </div>
        <div className="regBody"> 
        <label >Re-enter Password:</label>
          <input id="passwordInput"className="regInput" required type="password" placeholder="Re-Enter Password" value={this.state.password2} onChange={this.handlePassword2} onBlur={this.passwordMatch}></input>
          {this.renderPasswordValidation()}
        </div>
        <div className="regBody">  
        <label >Birthday:</label>
          <input className="regInput" required type="date" name="birthday" value={this.state.birthday} onChange={this.handleBirthday}></input>
        </div>
        <div className="regBody">   
        <label >City:</label>
          <input className="regInput" required type="text" placeholder="Choose Your City" value={this.state.city} onChange={this.handleCity}></input>
        </div>
        <div className="regBody">  
        <label >Gender:</label>
          <select className="regInput" required value={this.state.gender} onChange={this.handleGender}>
            <option value="">--Select One--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="regBottom">
            <Button className="regInput" size="sm" outline color="light" type="submit" disabled={!this.state.verifyUsername}>Next Step</Button>
        </div>
        </form>
      </div>


    );
  }
}

export default Register;