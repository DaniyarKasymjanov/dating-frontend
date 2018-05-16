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
    //   body: JSON.stringify({username: username, password: password})
    // })

  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUserName}></input>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}></input>
          <div>
            <input type="submit"/>
          </div>
        </form>

      </div>
    )
  }
}

export default Login
