import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import EvaluationQuestions from './EvaluationQuestions';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      password2: "",
      verifyUsername: "",
      passwordMatch: ""
    }
  }

  handleUsername = event => {
    event.preventDefault()
    this.setState({username: event.target.value})
    this.props.setRegister('username', event.target.value)
  }
  verifyUsername = () => {
    console.log("verifyUsername")
    fetch('/verifyusername', {
      method: 'POST',
      body: JSON.stringify({username: this.state.username})
    })
    .then(res => res.json())
    .then(res => {
      if (res === {success:true}) {
        this.setState({verifyUsername: true})
      }
      else {
        this.setState({verifyUsername: false})
      }
    })
  }
  renderValidInvalidUsername = () => {
    if(this.state.verifyUsername) {
      return <p>Your username is valid</p>
    }
    else if(this.state.verifyUsername === false){
      return <p>Your username is already taken</p>
    }
  }

    handlePassword = event => {
    event.preventDefault()
    this.setState({password: event.target.value})
    this.props.setRegister('password', event.target.value)
  }
  handlePassword2 = event => {
    event.preventDefault()
    this.setState({password2: event.target.value})
  }
  passwordMatch = () => {
    if(this.state.password2 !== this.state.password) {
      this.setState({passwordMatch:false})
    }
  }
  renderPasswordValidation = () => {
    if(this.state.passwordMatch === false) {
      return <p>Your passwords do not match</p>
    } else if(this.state.passwordMatch === true){
      return <div>test</div>
    }
  }

  varifyPassword = () => {

  }

  handleBirthday = event => {
    event.preventDefault()
    this.props.setRegister('birthday', event.target.value)
  }
  handleCity = event => {
    event.preventDefault()
    this.props.setRegister('city', event.target.value)
  }
  handleGender = event => {
    event.preventDefault()
    // this.setState({ gender: event.target.value })
    this.props.setRegister('gender', event.target.value);
  }
  stepTwo = event => {
    this.props.history.push('/evaluation');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.stepTwo}>
          <input required type="text" placeholder="Create a Username" value={this.props.register.username} onChange={this.handleUsername} onBlur={this.verifyUsername}></input>
          {this.renderValidInvalidUsername()}
          <input required type="password" placeholder="Create a Password" value={this.props.register.password} onChange={this.handlePassword}></input>
          <input required type="password" placeholder="Re-Enter Password" value={this.state.password2} onChange={this.handlePassword2} onBlur={this.passwordMatch}></input>
          {this.renderPasswordValidation()}
          <input required type="date" name="birthday" value={this.props.register.birthday} onChange={this.handleBirthday}></input>
          <input required type="text" placeholder="Choose Your City" value={this.props.register.city} onChange={this.handleCity}></input>
          <select required value={this.props.register.gender} onChange={this.handleGender}>
            <option value="">--Select One--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit">Next Step</button>
        </form>
      </div>
    );
  }
}

export default Register;