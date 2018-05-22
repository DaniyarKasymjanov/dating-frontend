import React, {Component} from 'react'
import { MainGrid, MainContentGrid, ProfileDisplayGrid, ProfileImage, StyledContent, H1 } from './Styled';
import Spotlight from './Spotlight';
import Footer from './Footer'

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
      <div>
      <MainGrid>
        <Spotlight username={this.props.username}/>
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
            <div>{ obj.profileImage ? <ProfileImage><img src = {obj.profileImage}/></ProfileImage> : <ProfileImage><img src="http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"/></ProfileImage>}
            <div>{obj.username}</div>
            <div>{obj.city}</div>
            <div>{this.calculateAge(obj.birthday)}</div>
            </div>)}
          </ProfileDisplayGrid>
        </MainContentGrid>
      </MainGrid>
      <Footer/>
    </div>
    )
  }
}

export default Home