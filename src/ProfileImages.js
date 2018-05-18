import React from 'react'
import {Modal} from 'reactstrap'

class ProfileImages extends React.Component{
  constructor() {
    super();
    this.state = {
        modal: false,
        img: ''   
    }
  }
toggle = () => {
    this.setState({modal: !this.state.modal})
}

  render(){
    return(
      <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <img src={this.state.img}/>
            </Modal>
            <div>{this.props.extraImages.map(imgUrl => <li onClick={()=>this.setState({modal:true, img: imgUrl})}>
            <img src={imgUrl}/>
            </li>)}
            </div>
        </div>
    )
  }
}

export default ProfileImages
