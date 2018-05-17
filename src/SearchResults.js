import React, {Component} from 'react';
import Spotlight from './Spotlight';
import { MainGrid } from './Styled';

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchedMembers: []
    }
  }
  
  render(){
    return(
      <MainGrid>
        <Spotlight/>
        <div>
          <h1>Searched Results</h1>
          {this.state.searchedMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </div>
      </MainGrid>
    )
  }
}

export default Results