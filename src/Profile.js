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
    .then(res => this.setState(res))
  }

  render(){
    return(
      <div>
        <div>background img</div>
        <div>
          <div>
            {/* {this.props.info.name} */}
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

// import React, { Component } from 'react';
// import { Route, Redirect, Link} from 'react-router-dom';
// import Register from './Register';
// import EvaluationQuestions from './EvaluationQuestions';


// class Profile extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             info {
//                 username: '',
//                 password: '',
//                 birthday: '',
//                 city: '',
//                 gender: ''
//                smoking: '',
//             },
//             questions: {
//                 q1Type: "",
//                 q1Title: "",
//                 q1Answers: [],
//                 q1Correct: "",
//                 q2Type: "",
//                 q2Title: "",
//                 q2Answers: [],
//                 q2Correct: "",
//                 q3Type: "",
//                 q3Title: "",
//                 q3Answers: [],
//                 q3Correct: "",
//                 q4Type: "",
//                 q4Title: "",
//                 q4Answers: [],
//                 q4Correct: "",
//             }
//         }
//     }

//         setRegister = (key, val) => {
//             const registerCopy = { ...this.state.register };
//             registerCopy[key] = val;
//             this.setState({ register: registerCopy });
//         }

//         setEvaluation = (key, val) => {
//             const evaluationCopy = { ...this.state.evaluation };
//             evaluationCopy[key] = val;
//             this.setState({ evaluation: evaluationCopy });
//         }

//         submitOnboarding = () => {
//             //event.preventDefault();
//             fetch('/register', {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     username: this.state.register.username,
//                     password: this.state.register.password,
//                     birthday: this.state.register.birthday,
//                     city: this.state.register.city,
//                     gender: this.state.register.gender,
//                     questions: [
//                         {
//                         title: this.state.evaluation.q1Title,
//                         answers: this.state.evaluation.q1Answers,
//                         type: this.state.evaluation.q1Type,
//                         answer: this.state.evaluation.q1Correct
//                     },
//                     {
//                         title: this.state.evaluation.q2Title,
//                         answers: this.state.evaluation.q2Answers,
//                         type: this.state.evaluation.q2Type,
//                         answer: this.state.evaluation.q2Correct
//                     },
//                     {
//                         title: this.state.evaluation.q3Title,
//                         answers: this.state.evaluation.q3Answers,
//                         type: this.state.evaluation.q3Type,
//                         answer: this.state.evaluation.q3Correct
//                     },
//                     {
//                         title: this.state.evaluation.q4Title,
//                         answers: this.state.evaluation.q4Answers,
//                         type: this.state.evaluation.q4Type,
//                         answer: this.state.evaluation.q4Correct
//                     }
//                 ]
//                 })  
//             })
//             .then(res => res.json())
//             .then(res => console.log(res))
   
//         }
        



//         render() {
//             return (
//                 <div>
//                     <ProfileInfo info={this.state.info}/>
//                     {this.state.isEditable ? <EvaluationQuestion/> : null}
//                 </div>
//             );
//         }
//     }

//     export default Profile;