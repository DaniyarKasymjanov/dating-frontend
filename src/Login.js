import React,{Component}  from 'react'
import {Redirect} from 'react-router-dom'


class Login extends React.Component{
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
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
    this.props.handleLogin({
      username: this.state.username,
      password: this.state.password
    })
    this.setState({redirect: true})
  }
  render(){
    if(this.state.redirect === true)  
      return <Redirect to="/main"/>
    if(this.state.redirect === false)
      return(
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUserName}></input>
            </div>
          <div>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}></input>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      )
  }
}

export default Login
