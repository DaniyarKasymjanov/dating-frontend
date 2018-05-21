import React from 'react'
import { Modal } from 'reactstrap'
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
    max-width: 400px;
  }
`;


class AnswerQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      response: [],
      viewPhotos: false,
      modal: false
    }
  }
  setResponse = (event, index) => {
    this.state.response[index] = event.target.value
    this.setState({ response: this.state.response })
    console.log(this.state.response)
  }

  getResults = () => {
      fetch('/checkAnswers', {
        credentials: 'same-origin',
        method: "POST",
        body: JSON.stringify({answer: this.state.response, username: this.props.username})
      })
      .then(res=> {
        if(res.success) {
          this.setState({viewPhotos: true})
        }
        else if(res.success === false) {
          this.setState({viewPhotos: false})
        }
      })
  }





  renderQuestions = () => {
    console.log(this.props.questions)
    return this.props.questions.map((question, index) => {
      return <div>
         {/* <Wrapper>
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
        </Wrapper> */}
        <div>{question.title}</div>
        <form>
          {question.type === 'bool' && (
            <div>
              <input name={index} type="radio" value="True" onClick={(event) => this.setResponse(event, index)} />True
              <input name={index} type="radio" value="False" onClick={(event) => this.setResponse(event, index)} />False
          </div>
          )}
          {question.type === 'multiple' && question.answers.map((answer, idx) => (
            <div><input type="radio" name={index} value={idx} onClick={(event) => this.setResponse(event, index)} />{answer}</div>
          ))}
        </form>
      </div>
    }
    )

  }

  render() {
    //console.log(this.props.questions.answers[2])
    return (<div>

      {this.renderQuestions()}
      <button onSubmit={this.getResults}>Submit</button>
    </div>
    )
  }
}

export default AnswerQuestions
