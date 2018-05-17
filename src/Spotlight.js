import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { SpotlightGrid } from './Styled';

class Spotlight extends Component{
  constructor(){
    super();
    this.state = {
    }
  }
  render(){
    return(
      <SpotlightGrid>
          <h1>Spotlight</h1>
          <h3>img</h3>
          <Link to={"/profile/" + this.props.username}>test{this.props.username}</Link>
          <div>
            <Link to="/favorites"> Favorites</Link>
          </div>
      </SpotlightGrid>
    )
  }
}

export default Spotlight