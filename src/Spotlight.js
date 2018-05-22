import React, {Component} from 'react'
import { SpotlightGrid, StyledLink, StyledCard, ProfileImage, LogoutButton } from './Styled';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Spotlight extends Component{
  constructor() {
    super()
    this.state = {
      usernamme: "",
      birthday: "",
      gender: "",
      city: "",
    }


  // componentDidMount = () => {
  //   fetch('/spotlight', {
  //     credentials: "same-origin"
  //   })
  //   .then((res) => res.json())
  //   .then((res)=> {
  //     this.setState({username: res.username, birthday: res.birthday, gender: res.gender, city: res.city})
  //   })
  // }

  // calculateAge = () => {
  //   var str =this.state.birthday;
  //   var dob = str.replace(/-/g, "")
  //   var year = Number(dob.substr(0, 4));
  //   var month = Number(dob.substr(4, 2)) - 1;
  //   var day = Number(dob.substr(6, 2));
  //   var today = new Date();
  //   var age = today.getFullYear() - year;
  //   if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  //     age--;
  //   }
  //   return <div>Age: {age} </div>
  // }

   }
  render(){
    console.log(this.props)
    return(
      <SpotlightGrid>
        <StyledCard>
        <CardImg top width="100%" src="https://hypb.imgix.net/image/2016/03/rich-chigga-interview-000.jpg?q=75&w=1000&fit=max&auto=compress%2Cformat" alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <StyledLink to={"/profile/" + this.props.username}>{this.props.username}</StyledLink>
          </CardTitle>
          {/* <CardSubtitle>{this.calculateAge()}</CardSubtitle> */}
          <CardText>Gender</CardText>
          <CardText>City</CardText>
          <LogoutButton>
            <StyledLink to="/favorites"> Favorites</StyledLink>
          </LogoutButton>
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