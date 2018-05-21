import React from 'react'
import {Modal} from 'reactstrap'
import styled from 'styled-components'

class AnswerQuestions extends React.Component{
  constructor() {
    super();
    this.state = {

    }
  }

  renderQuestions = () => {
      return this.props.questions.map((question, index)=> {
        // let questionx = question[index + 1]
        // let typex = type[index + 1]
        // if(typex === "multiple") {
        //   this.props.questions.answers.map((obj, ind)=> {
        //     let qxpx = q[index].p[ind]
        //     this.setState({qxpx: obj.answers})
        //   })
        // } else if(typex === "bool") {
        //   let qxp1 = q[index].p1
        //   let qxp2 = q[index].p2
        //   this.setState({})
        // }
        // this.setState({
        //   questionx: object.title,
        // })
       // return <div>{this.props.questions.title}</div>
       return <div>
         <div>{question.title}</div>
         <form>
         {question.type === 'bool' && (
           <div>
              <input type="radio" value="true"/>yes
              <input type="radio" value="false"/>no
          </div> 
         )}
         {question.type === 'multiple' && question.answers.map((answer, idx)=> (
           <div><input type="radio" value={idx}/>answer</div>
         ))}
         </form>
         </div>
      }
    )
  }

  render(){
    console.log(this.props.questions)
    return(<div>
        <button>View Questions</button>
        {this.renderQuestions()}
        <div>{this.state.question1}</div>
        </div>
    )
  }
}

export default AnswerQuestions
