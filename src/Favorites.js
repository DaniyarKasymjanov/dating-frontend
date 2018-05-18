import React, {Component} from 'react'
import { MainGrid, MainContentGrid } from './Styled';
import Spotlight from './Spotlight';

class Favorites extends React.Component{
  constructor(){
    super();
    this.state = {
      favoriteMembers: []
    }
  }
  handleFavorite = () => {
    // fetch('/favorite?username=') + this.props.username
    // .then( res => res.json())
    // .then(resJSON => {
    //   this.setState({favoriteMembers:  resJSON})
    // })
  }
  componentDidMount(){
    this.handleFavorite()
  }
  render(){
    return(
      <MainGrid>
        <Spotlight username={this.props.username}/>
        <MainContentGrid>
          <h1>Favorite Members</h1>
          {this.state.favoriteMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </MainContentGrid>
      </MainGrid>
    )
  }
}

export default Favorites