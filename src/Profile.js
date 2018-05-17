import React from 'react'

class Profile extends React.Component{
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    fetch('/getProfile?username=' + this.props.username)
    .then(res => res.json())
    .then(res => {this.setState({res})})
  }

  render(){
    return(
      <div>
        <div>background img</div>
        <div>
          <div>
            Personal info
          </div>
          <div>
            cluster of images
          </div>
          <div>
            About me
          </div>
        </div>
      </div>
    )
  }
}

export default Profile 