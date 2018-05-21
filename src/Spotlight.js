import React, {Component} from 'react'
import { SpotlightGrid, StyledLink } from './Styled';

class Spotlight extends Component{
  render(){
    console.log(this.props)
    return(
      <SpotlightGrid>
          <div className="spotLightTop"></div>
          <img className="profileImg"src="https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w710.h473.jpg"/>
          <div>City, Age, Gender</div>
          <StyledLink to={"/profile/" + this.props.username}>{this.props.username}</StyledLink>
          <div>
            <StyledLink to="/favorites"> Favorites</StyledLink>
          </div>
          <div className="spotLightBottom"></div>
      </SpotlightGrid>
    )
  }
}

export default Spotlight