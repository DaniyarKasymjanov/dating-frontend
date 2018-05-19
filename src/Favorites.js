import React, {Component} from 'react'
import { MainGrid, MainContentGrid } from './Styled';
import Spotlight from './Spotlight';
import Footer from './Footer'

class Favorites extends React.Component{
  constructor(){
    super();
    this.state = {
      favoriteMembers: []
    }
  }
  handleFavorite = () => {
    fetch('/favorites', {
      credentials: 'same-origin'
    })
    .then( res => res.json())
    .then(resJSON => {
      console.log(resJSON);
      if(resJSON.success) this.setState({favoriteMembers: resJSON.result })
    })
  }
  componentDidMount(){
    this.handleFavorite()
  }
  render(){
    console.log(this.state.favoriteMembers)
    return(
      <div>
      <MainGrid>
        <Spotlight username={this.props.username}/>
        <MainContentGrid>
          <h1>Favorite Members</h1>
          {this.state.favoriteMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </MainContentGrid>
      </MainGrid>
      <Footer/>
      </div>
    )
  }
}

export default Favorites