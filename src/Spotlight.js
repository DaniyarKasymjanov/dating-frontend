import React, {Component} from 'react'
import { SpotlightGrid, StyledLink,ProfileImage } from './Styled';

class Spotlight extends Component{
  render(){
    console.log(this.props)
    return(
      <SpotlightGrid>
          <div className="spotLightTop"></div>
          <ProfileImage><img src="https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w710.h473.jpg"/></ProfileImage>
          <div>
            Age, Gender
            <div>City</div>
          </div>
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