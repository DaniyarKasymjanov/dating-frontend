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
      modal: false,
      showQuestions: true
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
          alert("You answered all the questions correctly, you can now see this users photos")
          this.setState({viewPhotos: true, showQuestions: false})
        }
        else if(res.success === false) {
          alert("You answered a question incorrectly, better luck next time")
          this.setState({viewPhotos: false, showQuestions: false})
        }
      })
  }





  renderQuestions = () => {
    console.log(this.props.questions)
    return this.props.questions.map((question, index) => {
      return <div>
        <div>{question.title}</div>
        <form onSubmit={this.getResults}>
          {question.type === 'bool' && (
            <div>
              <input required name={index} type="radio" value="True" onClick={(event) => this.setResponse(event, index)} />True
              <input required name={index} type="radio" value="False" onClick={(event) => this.setResponse(event, index)} />False
          </div>
          )}
          {question.type === 'multiple' && question.answers.map((answer, idx) => (
            <div><input required type="radio" name={index} value={idx} onClick={(event) => this.setResponse(event, index)} />{answer}</div>
          ))}
          <input type="submit"/>
        </form>
      </div>
    }
    )

  }

  render() {
    //console.log(this.props.questions.answers[2])
    return (<div>

      {this.renderQuestions()}
      {/* <button onSubmit={this.getResults}>Submit</button> */}
    </div>
    )
  }
}

export default AnswerQuestions
