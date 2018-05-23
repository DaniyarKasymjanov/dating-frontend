import React from 'react'
import {Modal} from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; `;

const ImageWrapper = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  & > img {
    max-width: 100px;
  }`;

  const ModalImages = styled.img`
  filter: blur(${(props) => props.blur ? 10 : 0}px);
  max-width: 100%;
  `

  const WrapperBlurred = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapperBlurred = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  & > img {
    max-width: 100px;
  }`;

  

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
      if(this.props.viewImages || this.props.ownProfile) {
        return (
          <div className="MiniPicGrid">
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalImages src={this.state.img}/>
          </Modal>
          {this.props.extraImages.map((imgUrl, i) => 
            <ImageWrapper>
              {this.props.isEditable && <button onClick={() => this.props.deleteExtraImage(i)}>x</button> }
              <ModalImages src={imgUrl} onClick={()=>this.setState({modal:true, img: imgUrl})}/>
            </ImageWrapper>
          )}
          </div>
        )
      }
      else if(!this.props.viewImages) {
        return (
          <div className="MiniPicGrid">
          {this.props.extraImages.map((imgUrl, i) => 
            <ImageWrapper>
              {this.props.isEditable && <button onClick={() => this.props.deleteExtraImage(i)}>x</button> }
              <ModalImages blur className="ModalImages"src={imgUrl} onClick={()=>this.setState({modal:true, img: imgUrl})}/>
            </ImageWrapper>
          )}

        </div>
        )
      }
  }
}

export default ProfileImages
