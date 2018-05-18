import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { SpotlightGrid } from './Styled';

class Spotlight extends Component{


  render(){
    console.log(this.props)
    return(
      <SpotlightGrid>
          <h1>Spotlight</h1>
          <div>User's quick info: City, Age, Gender</div>
          <Link to={"/profile/" + this.props.username}>{this.props.username}</Link>
          <div>
            <Link to="/favorites"> Favorites</Link>
          </div>
      </SpotlightGrid>
    )
  }
}

export default Spotlight