import React from 'react'
import {Modal} from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  & > img {
    max-width: 100px;
  }
`;

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
      <Wrapper>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <img src={this.state.img}/>
          </Modal>
          <div>
          {this.props.isEditable && <input type="file" onChange={(e)=> this.props.handleExtraImageChange(e)} />}
          {this.props.extraImages.map((imgUrl, i) => 
            <ImageWrapper>
              {this.props.isEditable && <button onClick={() => this.props.deleteExtraImage(i)}>x</button> }
              <img src={imgUrl} onClick={()=>this.setState({modal:true, img: imgUrl})}/>
            </ImageWrapper>
          )}

          </div>
        </Wrapper>
    )
  }
}

export default ProfileImages
