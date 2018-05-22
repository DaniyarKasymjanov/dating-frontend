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
  render(){
    return(
      <div>
      <MainGrid>
        <Spotlight username={this.props.username}/>
        <MainContentGrid>
          <H1> Recent Members </H1>
          <ProfileDisplayGrid>
            {(new Array(4))
            .fill({ imgSrc: 'https://pbs.twimg.com/profile_images/987161597821861888/tI0h5qPB_400x400.jpg'})
            .map(imgObj => 
            <ProfileImage>
              <img src={imgObj.imgSrc}/>
              Rich Brian
              19, Male
              
            </ProfileImage>
            )}
            {this.state.recentMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
          </ProfileDisplayGrid>
        </MainContentGrid>
      </MainGrid>
      <Footer/>
    </div>
    )
  }
}

export default Home