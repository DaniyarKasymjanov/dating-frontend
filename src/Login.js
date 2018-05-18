import React,{Component}  from 'react'

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
    //   body: JSON.stringify({username: this.state.username, password: this.state.password})
    // })

  }
  render(){
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
