import React, {Component} from 'react'
import { MainGrid } from './Styled';
import Spotlight from './Spotlight';

class Favorites extends React.Component{
  constructor(props){
    super(props);
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
        <div>
          <h1>Favorite Members</h1>
          {this.state.favoriteMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </div>
      </MainGrid>
    )
  }
}

export default Favorites