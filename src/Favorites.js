import React, {Component} from 'react'

class Favorite extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favoriteMembers: []
    }
  }
  handleFavorite = () => {
    fetch('/favorites')
    .then( res => res.json())
    .then(resJSON => {
      this.setState({favoriteMembers:  resJSON})
    })
  }
  componentDidMount(){
    this.handleFavorite()
  }
  render(){
    return(
      <div>
        <div>
          <h1>Favorite Members</h1>
          {this.state.favoriteMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </div>
      </div>
    )
  }
}

export default Home