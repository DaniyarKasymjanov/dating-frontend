import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      birthday: '',
      city: '',
      gender: '',
      questions: {}
    }
  }
  handleUsername = event => {
    event.preventDefault()
    this.setState({ username: event.target.value })
  }
  handlePassword = event => {
    event.preventDefault()
    this.setState({ password: event.target.value })
  }
  handleBirthday = event => {
    event.preventDefault()
    this.setState({ birthday: event.target.value })
  }
  handleCity = event => {
    event.preventDefault()
    this.setState({ city: event.target.value })
  }
  handleGender = event => {
    event.preventDefault()
    this.setState({ gender: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form>
          <input required type="text" placeholder="Create a Username" value={this.state.username} onChange={this.handleUsername}></input>
          <input required type="text" placeholder="Create a Password" value={this.state.password} onChange={this.handlePassword}></input>
          <input required type="date" name="birthday" value={this.state.birthday} onChange={this.handleBirthday}></input>
          <input required type="text" placeholder="Choose Your City" value={this.state.city} onChange={this.handleCity}></input>
          <select required value={this.state.gender} onChange={this.handleGender}>
            <option value="">--Select One--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type="Submit" onClick={this.handleSubmit}/>
        </form>

      </div>


    );
  }
}

export default Register;