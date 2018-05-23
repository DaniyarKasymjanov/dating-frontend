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
      return <CardText>Age: {age} Years Old</CardText>
    

  }
  render() {
    console.log(this.props, "SPOTLIGHT")
    return (
      <SpotlightGrid style={{color: "#005D8C", textAlign:"center"}}>
        <StyledCard style={{border:"3px solid #005D8C"}}>
          {this.props.profileImage ? <CardImg top width="100%" src={this.props.profileImage}/> : <CardImg top width="100%" src="http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"/>}
          <CardBody>
            <CardTitle>
              <StyledLink to={"/profile/" + this.props.username}>{this.props.username}</StyledLink>
            </CardTitle>
            <CardText>{(()=>{if(this.props.birthday){return(this.calculateAge(this.props.birthday))}})()}</CardText> 
            <CardText>Gender: {this.props.gender}</CardText>
            <CardText>City: {this.props.city}</CardText>
            <FavoriteButton>
              <StyledLink to="/favorites">Favorites <span><i className="fas fa-heart"></i></span></StyledLink>
            </FavoriteButton>
          </CardBody>
        </StyledCard>
      </SpotlightGrid>
    )
  }
}

export default Spotlight