import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import EvaluationQuestions from './EvaluationQuestions';

class Register extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     username: '',
  //     password: '',
  //     birthday: '',
  //     city: '',
  //     gender: ''
  //   }
  // }
  handleUsername = event => {
    event.preventDefault()
    this.props.setRegister('username', event.target.value)
  }
  handlePassword = event => {
    event.preventDefault()
    this.props.setRegister('password', event.target.value)
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
<<<<<<< HEAD
      <div style={{display:"flex"}}>
        <div>
        Lorem ipsum dolor sit amet, molestie arcu tincidunt nisi pellentesque nibh suspendisse, placerat diam mauris sagittis id id nulla, varius aliquam, eu vitae.
        Etiam vestibulum penatibus pede sem, urna erat voluptate phasellus erat.
        </div>
        <div>
          <form>
            <di>Register here!</di>
            <input required type="text" placeholder="Create a Username" value={this.state.username} onChange={this.handleUsername}></input>
            <input required type="password" placeholder="Create a Password" value={this.state.password} onChange={this.handlePassword}></input>
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
=======
      <div>
        <form onSubmit={this.stepTwo}>
          <input required type="text" placeholder="Create a Username" value={this.props.register.username} onChange={this.handleUsername}></input>
          <input required type="text" placeholder="Create a Password" value={this.props.register.password} onChange={this.handlePassword}></input>
          <input required type="date" name="birthday" value={this.props.register.birthday} onChange={this.handleBirthday}></input>
          <input required type="text" placeholder="Choose Your City" value={this.props.register.city} onChange={this.handleCity}></input>
          <select required value={this.props.register.gender} onChange={this.handleGender}>
            <option value="">--Select One--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit">Next Step</button>
        </form>
>>>>>>> 9a85d496c194253a748bcccfb096df2ed0fbc94b
      </div>


    );
  }
}

export default Register;