import React, {Component} from 'react'
import { MainGrid, MainContentGrid } from './Styled';
import Spotlight from './Spotlight';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      recentMembers: []
    }
  }
  handleRecent = () => {
    // fetch('/home')
    // .then( res => res.json())
    // .then(resJSON => {
    //   this.setState({recentMembers:  resJSON})
    // })
  }
  componentDidMount(){
    this.handleRecent()
  }
  render(){
    return(
      <MainGrid>
        <Spotlight username={this.props.username}/>
        <MainContentGrid>
        <h1> Recent Members </h1>
          {this.state.recentMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </MainContentGrid>
      </MainGrid>
    )
  }
}

export default Home