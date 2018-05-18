import React, {Component} from 'react';
import Spotlight from './Spotlight';
import {MainGrid, MainContentGrid} from './Styled';

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchedMembers: []
    }
  }
  
  handleSeachedResults = () => {
    // fetch('/search')
    // .then(res => res.json())
    // .then(resJSON => {
    //   this.setState({searchedMembers: resJSON })
    // })
  }
  
  render(){
    return(
      <MainGrid>
        <Spotlight username={this.props.username}/>
        <diMainContentGrid>
          <h1>Searched Results</h1>
          {this.state.searchedMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </diMainContentGrid>
      </MainGrid>
    )
  }
}

export default Results