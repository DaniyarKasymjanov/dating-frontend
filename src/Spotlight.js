import React, { Component } from 'react'
import { SpotlightGrid, StyledLink, StyledCard, ProfileImage, FavoriteButton } from './Styled';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Spotlight extends Component {
  constructor() {
    super()
  }
    calculateAge = (birthday) => {
      console.log(birthday)
      var str = birthday;
      var dob = str.replace(/-/g, "")
      var year = Number(dob.substr(0, 4));
      var month = Number(dob.substr(4, 2)) - 1;
      var day = Number(dob.substr(6, 2));
      var today = new Date();
      var age = today.getFullYear() - year;
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
      }
      return <div>Age: {age} </div>
    

  }
  render() {
    console.log(this.props, "SPOTLIGHT")
    return (
      <SpotlightGrid>
        <StyledCard>
          {this.props.profileImage ? <CardImg top width="100%" src={this.props.profileImage}/> : <CardImg top width="100%" src="http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"/>}
          <CardBody>
            <CardTitle>
              <StyledLink to={"/profile/" + this.props.username}>{this.props.username}</StyledLink>
            </CardTitle>
            <CardText>{this.calculateAge(this.props.birthday)}</CardText> 
            <CardText>Gender: {this.props.gender}</CardText>
            <CardText>City : {this.props.city}</CardText>
            <FavoriteButton>
              <StyledLink to="/favorites"> Favorites</StyledLink>
            </FavoriteButton>
          </CardBody>
        </StyledCard>
        {/* <div className="spotLightTop"></div>
          <ProfileImage><img src="https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w710.h473.jpg"/></ProfileImage>
          <div>
            Age, Gender
            <div>City</div>
          </div>
          <StyledLink to={"/profile/" + this.props.username}>{this.props.username}</StyledLink>
          <div>
            <StyledLink to="/favorites"> Favorites</StyledLink>
          </div>
          <div className="spotLightBottom"></div> */}
      </SpotlightGrid>
    )
  }
}

export default Spotlight