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
    console.log(this.state)
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
          <input type="text" placeholder="Username" value={this.state.userName} onChange={this.handleUserName}></input>
          <input type="password" placeholder="Password" value={this.state.passWord} onChange={this.handlePassword}></input>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Login
