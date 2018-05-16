import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Register from './Register'
import EvaluationQuestions from './EvaluationQuestions.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login></Login>
      <Register></Register>
      <EvaluationQuestions></EvaluationQuestions>
      </div>
    );
  }
}

export default App;
