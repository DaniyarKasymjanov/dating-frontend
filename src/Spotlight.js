import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { SpotlightGrid } from './Styled';

class Spotlight extends Component{
  render(){
    console.log(this.props)
    return(
      <SpotlightGrid>
          <h1>Spotlight</h1>
          <img className="profileImg"src="https://pbs.twimg.com/profile_images/987161597821861888/tI0h5qPB_400x400.jpg"/>
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