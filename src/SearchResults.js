import React, {Component} from 'react';
import Spotlight from './Spotlight';
import {MainGrid, MainContentGrid} from './Styled';
import Footer from './Footer'

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchedMembers: []
    }
  }
  
  handleSeachedResults = () => {
    fetch('/search')
    .then(res => res.json())
    .then(resJSON => {
      this.setState({searchedMembers: resJSON })
    })
  }
  
  render(){
    return(
      <div>
      <MainGrid>
        <Spotlight username={this.props.username}/>
        <MainContentGrid>
          <h1>Searched Results</h1>
          {this.state.searchedMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </MainContentGrid>
      </MainGrid>
      <Footer/>
      </div>
    )
  }
}

export default Results