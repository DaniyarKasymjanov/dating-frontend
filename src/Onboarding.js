import React, { Component } from 'react';
import { Route, Redirect, Link} from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Register from './Register';
import EvaluationQuestions from './EvaluationQuestions';


class Onboarding extends React.Component {
    constructor() {
        super()
        this.state = {
            register: {
                username: '',
                password: '',
                birthday: '',
                city: '',
                gender: ''
            },
            evaluation: {
                q1Type: "",
                q1Title: "",
                q1Answers: [],
                q1Correct: "",
                q2Type: "",
                q2Title: "",
                q2Answers: [],
                q2Correct: "",
                q3Type: "",
                q3Title: "",
                q3Answers: [],
                q3Correct: "",
                q4Type: "",
                q4Title: "",
                q4Answers: [],
                q4Correct: "",
            }
        }
    }

        setRegister = (key, val) => {
            const registerCopy = { ...this.state.register };
            registerCopy[key] = val;
            this.setState({ register: registerCopy });
        }

        setEvaluation = (key, val) => {
            const evaluationCopy = { ...this.state.evaluation };
            evaluationCopy[key] = val;
            this.setState({ evaluation: evaluationCopy });
        }

        submitOnboarding = () => {
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
                        title: this.state.evaluation.q1Title,
                        answers: this.state.evaluation.q1Answers,
                        type: this.state.evaluation.q1Type,
                        answer: this.state.evaluation.q1Correct
                    },
                    {
                        title: this.state.evaluation.q2Title,
                        answers: this.state.evaluation.q2Answers,
                        type: this.state.evaluation.q2Type,
                        answer: this.state.evaluation.q2Correct
                    },
                    {
                        title: this.state.evaluation.q3Title,
                        answers: this.state.evaluation.q3Answers,
                        type: this.state.evaluation.q3Type,
                        answer: this.state.evaluation.q3Correct
                    },
                    {
                        title: this.state.evaluation.q4Title,
                        answers: this.state.evaluation.q4Answers,
                        type: this.state.evaluation.q4Type,
                        answer: this.state.evaluation.q4Correct
                    }
                ]
                })  
            })
            .then(res => res.json())
            .then(res => console.log(res))
   
        }
        

        renderRegister = (routeProps) => {
            console.log(this.state.register)
            return (
                <LandingPage>
                    <Register register={this.state.register} history={routeProps.history} setRegister={this.setRegister} />
                </LandingPage>
            )
        }
        renderEvaluation = (routeProps) => {
            return (<EvaluationQuestions evaluation={this.state.evaluation} submitOnboarding={this.submitOnboarding} history={routeProps.history} setEvaluation={this.setEvaluation} />)
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