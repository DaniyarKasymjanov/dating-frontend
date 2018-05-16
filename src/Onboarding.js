import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
            //fetch
            console.log(this.state);
        }

        renderRegister = (routeProps) => {
            return (<Register register={this.state.register} history={routeProps.history} setRegister={this.setRegister} />)
        }
        renderEvaluation = (routeProps) => {
            return (<EvaluationQuestions evaluation={this.state.evaluation} submitOnboarding={this.submitOnboarding} history={routeProps.history} setEvaluation={this.setEvaluation} />)
        }

        render() {
            return (
                <div>
                    <Route exact path="/register" render={this.renderRegister} />
                    <Route exact path="/evaluation" render={this.renderEvaluation} />
                </div>
            );
        }
    }

    export default Onboarding;