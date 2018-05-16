import React, { Component } from 'react';
import './App.css';

class EvaluationQuestions extends Component {
    constructor() {
        super()
        this.state = {
            q1Type: "",
            q1Title: "",
            q1a1: "",
            q1a2:"",
            q1a3:"",
            q1a4:"",
            q1Correct: "",
            q2Type: "",
            q2Title: "",
            q2a1: "",
            q2a2:"",
            q2a3:"",
            q2a4:"",
            q2Correct: "",
            q3Type: "",
            q3Title: "",
            q3a1: "",
            q3a2:"",
            q3a3:"",
            q3a4:"",
            q3Correct: "",
            q4Type: "",
            q4Title: "",
            q4a1: "",
            q4a2:"",
            q4a3:"",
            q4a4:"",
            q4Correct: "",
        }
    }
    q1Type = (type) => {
        console.log(type)
        this.setState({ q1Type: type })
    }

    q2Type = (type) => {
        console.log(type)
        this.setState({ q2Type: type })
    }
    q3Type = (type) => {
        console.log(type)
        this.setState({ q3Type: type })
    }
    q4Type = (type) => {
        console.log(type)
        this.setState({ q4Type: type })
    }

    renderQuestion1 = () => {
        if (this.state.q1Type === "bool") {
            return (
            <div>
                <div>Question 1 True or False</div>
                <input required type="text" value={this.state.q1Title} onChange={(event) => this.setState({q1Title: event.target.value})}/>
                <div>Expected answer</div>
                <select required value={this.state.q1a1} onChange={(event) => this.setState({q1a1: event.target.value})}>
                    <option value="">--Select One--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                </select>
            </div>
            )
        }
        else if (this.state.q1Type === "multiple") {
            return (
            <div>
                <div>Question 1 Multiple Choice</div>
                <input required type="text" value={this.state.q1Title} onChange={(event) => this.setState({q1Title: event.target.value})}/>
                <div>Possible Answers</div>
                <input required value={this.state.q1a1} onChange={(event) => this.setState({q1a1: event.target.value})}></input>
                <input required value={this.state.q1a2} onChange={(event) => this.setState({q1a2: event.target.value})}></input>
                <input value={this.state.q1a3} onChange={(event) => this.setState({q1a3: event.target.value})}></input>
                <input value={this.state.q1a4} onChange={(event) => this.setState({q1a4: event.target.value})}></input>                
                <div>Expected answer</div>
                <input value={this.state.q1Correct} onChange={(event) => this.setState({q1Correct: event.target.value})}></input>
                </div>)
        }
        return null
    }

    renderQuestion2 = () => {
        if (this.state.q2Type === "bool") {
            return (
            <div>
                <div>Question 2 True or False</div>
                <input required type="text" value={this.state.q2Title} onChange={(event) => this.setState({q2Title: event.target.value})}/>
                <div>Expected answer</div>
                <select required value={this.state.q2a1} onChange={(event) => this.setState({q2a1: event.target.value})}>
                    <option value="">--Select One--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                </select>
            </div>
            )
        }
        else if (this.state.q2Type === "multiple") {
            return (
            <div>
                <div>Question 2 Multiple Choice</div>
                <input required type="text" value={this.state.q2Title} onChange={(event) => this.setState({q2Title: event.target.value})}/>
                <div>Possible Answers</div>
                <input required value={this.state.q2a1} onChange={(event) => this.setState({q2a1: event.target.value})}></input>
                <input required value={this.state.q2a2} onChange={(event) => this.setState({q2a2: event.target.value})}></input>
                <input value={this.state.q2a3} onChange={(event) => this.setState({q2a3: event.target.value})}></input>
                <input value={this.state.q2a4} onChange={(event) => this.setState({q2a4: event.target.value})}></input>                
                <div>Expected answer</div>
                <input value={this.state.q2Correct} onChange={(event) => this.setState({q2Correct: event.target.value})}></input>
                </div>)
        }
        return null
    }

    renderQuestion3 = () => {
        if (this.state.q3Type === "bool") {
            return (
            <div>
                <div>Question 3 True or False</div>
                <input required type="text" value={this.state.q3Title} onChange={(event) => this.setState({q3Title: event.target.value})}/>
                <div>Expected answer</div>
                <select required value={this.state.q3a1} onChange={(event) => this.setState({q3a1: event.target.value})}>
                    <option value="">--Select One--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                </select>
            </div>
            )
        }
        else if (this.state.q3Type === "multiple") {
            return (
            <div>
                <div>Question 3 Multiple Choice</div>
                <input required type="text" value={this.state.q3Title} onChange={(event) => this.setState({q3Title: event.target.value})}/>
                <div>Possible Answers</div>
                <input required value={this.state.q3a1} onChange={(event) => this.setState({q3a1: event.target.value})}></input>
                <input required value={this.state.q3a2} onChange={(event) => this.setState({q3a2: event.target.value})}></input>
                <input value={this.state.q3a3} onChange={(event) => this.setState({q3a3: event.target.value})}></input>
                <input value={this.state.q3a4} onChange={(event) => this.setState({q3a4: event.target.value})}></input>                
                <div>Expected answer</div>
                <input value={this.state.q3Correct} onChange={(event) => this.setState({q3Correct: event.target.value})}></input>
                </div>)
        }
        return null
    }

    renderQuestion4 = () => {
        if (this.state.q4Type === "bool") {
            return (
            <div>
                <div>Question 4 True or False</div>
                <input required type="text" value={this.state.q4Title} onChange={(event) => this.setState({q4Title: event.target.value})}/>
                <div>Expected answer</div>
                <select required value={this.state.q4a1} onChange={(event) => this.setState({q4a1: event.target.value})}>
                    <option value="">--Select One--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                </select>
            </div>
            )
        }
        else if (this.state.q4Type === "multiple") {
            return (
            <div>
                <div>Question 4 Multiple Choice</div>
                <input required type="text" value={this.state.q4Title} onChange={(event) => this.setState({q4Title: event.target.value})}/>
                <div>Possible Answers</div>
                <input requiredvalue={this.state.q4a1} onChange={(event) => this.setState({q4a1: event.target.value})}></input>
                <input required value={this.state.q4a2} onChange={(event) => this.setState({q4a2: event.target.value})}></input>
                <input value={this.state.q4a3} onChange={(event) => this.setState({q4a3: event.target.value})}></input>
                <input value={this.state.q4a4} onChange={(event) => this.setState({q4a4: event.target.value})}></input>                
                <div>Expected answer</div>
                <input value={this.state.q4Correct} onChange={(event) => this.setState({q4Correct: event.target.value})}></input>
                </div>)
        }
        return null
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>Evaluation Question 1</legend>
                        <input required type="radio" name="question1" id="bool1" onChange={() => this.q1Type('bool')} /><label for="bool1">True Or False</label><br />
                        <input required type="radio" name="question1" id="multipleChoice1" onChange={() => this.q1Type('multiple')} /><label for="multipleChoice1">Multiple Choice</label><br />
                        {this.renderQuestion1()}
                    </fieldset>
                    <fieldset>
                        <legend>Evaluation Question 2</legend>
                        <input required type="radio" name="question2" id="bool2" onChange={() => this.q2Type('bool')} /><label for="bool2">True Or False</label><br />
                        <input required type="radio" name="question2" id="multipleChoice2" onChange={() => this.q2Type('multiple')} /><label for="multipleChoice2">Multiple Choice</label><br />
                        {this.renderQuestion2()}
                    </fieldset>
                    <fieldset>
                        <legend>Evaluation Question 3</legend>
                        <input required type="radio" name="question3" id="bool3" onChange={() => this.q3Type('bool')} /><label for="bool3">True Or False</label><br />
                        <input required type="radio" name="question3" id="multipleChoice3" onChange={() => this.q3Type('multiple')} /><label for="multipleChoice3">Multiple Choice</label><br />
                        {this.renderQuestion3()}
                    </fieldset>
                    <fieldset>
                        <legend>Evaluation Question 4</legend>
                        <input required type="radio" name="question4" id="bool4" onChange={() => this.q4Type('bool')} /><label for="bool4">True Or False</label><br />
                        <input required type="radio" name="question4" id="multipleChoice4" onChange={() => this.q4Type('multiple')} /><label for="multipleChoice4">Multiple Choice</label><br />
                        {this.renderQuestion4()}
                    </fieldset>
                    <input type="submit" />
                </form>

            </div>


        );
    }
}

export default EvaluationQuestions;