import React, { Component } from 'react';
import { Route, Redirect, Link} from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Register from './Register';
import EvaluationQuestions from './EvaluationQuestions';


class Onboarding extends React.Component {
    constructor() {
        super()
        this.state = {
            register: {},
        }
    }

        setRegister = (registerObj) => {
            this.setState({ register: registerObj });
        }

        // setEvaluation = (key, val) => {
        //     const evaluationCopy = { ...this.state.evaluation };
        //     evaluationCopy[key] = val;
        //     this.setState({ evaluation: evaluationCopy });
        // }

        submitOnboarding = (questions) => {
            //event.preventDefault();
            fetch('/register', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.state.register.username,
                    password: this.state.register.password,
                    birthday: this.state.register.birthday,
                    city: this.state.register.city,
                    gender: this.state.register.gender,
                    questions: [
                        {
                        title: questions.q1Title,
                        answers: questions.q1Answers,
                        type: questions.q1Type,
                        answer: questions.q1Correct
                    },
                    {
                        title: questions.q2Title,
                        answers: questions.q2Answers,
                        type: questions.q2Type,
                        answer: questions.q2Correct
                    },
                    {
                        title: questions.q3Title,
                        answers: questions.q3Answers,
                        type: questions.q3Type,
                        answer: questions.q3Correct
                    },
                    {
                        title: questions.q4Title,
                        answers: questions.q4Answers,
                        type: questions.q4Type,
                        answer: questions.q4Correct
                    }
                ]
                })  
            })
            .then(res => res.json())
            .then(res => console.log(res))
            // must set up redirect to recent members
   
        }
        

        renderRegister = (routeProps) => {
            console.log(this.state.register)
            return (
                <LandingPage handleLogin={this.props.handleLogin}>
                    <Register history={routeProps.history} setRegister={this.setRegister} />
                </LandingPage>
            )
        }
        renderEvaluation = (routeProps) => {
            return (<EvaluationQuestions submitEvaluation={this.submitOnboarding} history={routeProps.history} />)
        }

        render() {
            return (
                <div>
                    <Route exact path="/" render={this.renderRegister} />
                    <Route exact path="/evaluation" render={this.renderEvaluation} />
                </div>
            );
        }
    }

    export default Onboarding;