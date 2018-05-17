import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Spotlight extends Component{
  constructor(){
    super();
    this.state = {
    }
  }
  render(){
    return(
      <div>
          <h1>Spotlight</h1>
          <h3>img</h3>
          <Link to={"/profile/" + this.props.username}>test{this.props.username}</Link>
          <div>
            <Link to="/favorites"> Favorites</Link>
          </div>
      </div>
    )
  }
}

export default Spotlight