import React, { Component } from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const socket = io();

class App extends Component {
componentDidMount(){
  socket.on('receive_msg', (msg) => {
    console.log(msg)
  })
}
  handleClick = ()=> {
    socket.emit('send_msg', {msg: 'Hey man!'})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>test</button>
      </div>
    );
  }
}

export default App;
