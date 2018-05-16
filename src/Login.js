import React,{Component}  from 'react'
import {Button} from 'reactstrap'

class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUserName = event => {
    this.setState({username: event.target.value})
  }
  handlePassword = event => {
    this.setState({password: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault()
    // fetch('/login', {
    //   method: POST,
    //   body: JSON.stringify({username: username, password: password})
    // })

  }
  render(){
    return(
     <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUserName}></input>
        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}></input>
        <div>
          <input type="submit"/>
        </div>
      </form>
    )
  }
}

export default Login
