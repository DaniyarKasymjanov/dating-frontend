import React, {Component} from 'react'

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchedMembers: []
    }
  }
  handleSearched = () => {
    // fetch('/home')
    // .then( res => res.json())
    // .then(resJSON => {
    //   this.setState({searchedMembers:  resJSON})
    // })
  }
  componentDidMount(){
    this.handleSearched()
  }
  render(){
    return(
      <div>
        <div>
          <h1>Searched Results</h1>
          {this.state.searchedMembers.map((obj)=> <div>{obj.username}, {obj.profileImage}, {obj.city}, {obj.age}</div>)}
        </div>
      </div>
    )
  }
}

export default Results