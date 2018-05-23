import React, {Component} from 'react'
import { MainGrid, MainContentGrid, ProfileDisplayGrid, ProfileImage, StyledContent, H1, viewMultiple } from './Styled';
import Spotlight from './Spotlight';
import Footer from './Footer'
import { Link } from 'react-router-dom';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recentMembers: []
    }
  }
  handleRecent = () => {
    fetch('/main')
    .then( res => res.json())
    .then(resJSON => {
      if(resJSON.success) this.setState({recentMembers:  resJSON.result})
    })
  }
  componentDidMount(){
    this.handleRecent()
  }

  calculateAge = (birthday) => {
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
    this.setProfileData({ age: age })
  }
  render(){
    return(
      <div className="BackgroundImage">
      <MainGrid>
        <Spotlight regusername={this.props.regusername} username={this.props.username} gender={this.props.gender} city={this.props.city} birthday={this.props.birthday} profileImage={this.props.profileImage}/>
        <MainContentGrid>
          <H1> Recent Members </H1>
          <ProfileDisplayGrid>
            {/* {(new Array(4))
            .fill({ imgSrc: 'https://pbs.twimg.com/profile_images/987161597821861888/tI0h5qPB_400x400.jpg'})
            .map(imgObj => 
            <ProfileImage>
              <img src={imgObj.imgSrc}/>
              Rich Brian
              19, Male
              
            </ProfileImage>
            )} */}

            {this.state.recentMembers.map((obj)=>
            <div>
              <Link style={{textDecoration:"none"}}to={"/profile/" + obj.username}>
                <div>{ obj.profileImg ? <ProfileImage><img src = {obj.profileImg}/></ProfileImage> : <ProfileImage><img src="http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"/></ProfileImage>}</div>
                <div>{obj.username}</div>
              </Link>
              <div>
                <div>{obj.city}</div>
                <div>{this.calculateAge(obj.birthday)}</div>
              </div>
            </div>
            )}
          </ProfileDisplayGrid>
        </MainContentGrid>
      </MainGrid>
      <Footer/>
    </div>
    )
  }
}

export default Home