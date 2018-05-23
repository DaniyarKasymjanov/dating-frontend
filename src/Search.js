import React, { Component } from "react";
import {
  ModalBody, 
  ModalFooter,
  Button
} from 'reactstrap';
import {ModalHeaderFix, NavButton, } from './Styled'

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      searchInput:'',
      gender: '',
      minAge: '',
      maxAge: '',
      city: '',
      education: '',
      smoking: '',
      drinking: ''
    }
  }
  
  handleSearch = event => {
    event.preventDefault();
    this.props.handleSearch(
      {
        searchInput: this.state.searchInput.split(' '),
        age: {
          from: this.state.minAge,
          to: this.state.maxAge,
        },
        fields: {
          gender: this.state.gender,
          city: this.state.city,
          education: this.state.education,
          smoking: this.state.smoking,
          drinking: this.state.drinking
        }
      }
    )
  }
  handleSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  handleGender = event => {
    console.log(event.target.value);
    this.setState({ gender: event.target.value });
  }
  handleMinAge = event => {
    console.log(event.target.value);
    this.setState({minAge: event.target.value})
  }
  handleMaxAge = event => {
    console.log(event.target.value);
    this.setState({maxAge: event.target.value})
  }
  handleCity = event => {
    console.log(event.target.value);
    this.setState({city: event.target.value})
  }
  handleEducation = event => {
    console.log(event.target.value);
    this.setState({education: event.target.value})
  }
  handleSmoking = event => {
    console.log(event.target.value);
    this.setState({smoking: event.target.value})
  }
  handleDrinking = event => {
    console.log(event.target.value);
    this.setState({drinking: event.target.value})  
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <ModalHeaderFix toggle={this.props.toggle}>Please filled in the form to find your next best match!</ModalHeaderFix>
          <ModalBody>
          <div className="searchDivs">
            Search: <input className="searchInputs" type="text" placeholder="Enter here" onChange={this.handleSearchInput} value={this.state.searchInput}/>
          </div>
          <div className="searchDivs">
            Gender: 
            <input className="searchInputs" type="radio" name="gender" value="Male" onChange={this.handleGender}/>Male
            <input className="searchInputs" type="radio" name="gender" value="Female" onChange={this.handleGender}/>Female
          </div>
          <div className="searchDivs">
            Age:
              <input className="searchInputs" placeholder="from" type="number" name="age"  min="18" max="100" onChange={this.handleMinAge}/>
              :
              <input className="searchInputs" placeholder="to" type="number" name="age" min="18" max="100" onChange={this.handleMaxAge}/>
          </div>
          <div className="searchDivs">
            City:
            <input className="searchInputs" placeholder="Montreal" type="text" name="city" value={this.state.city} onChange={this.handleCity}/>
          </div>
          <div className="searchDivs">
            Education:
            <select className="searchInputs" name="education" onChange={this.handleEducation}>
              <option value="None selected">Please select below</option>
              <option>High School Diploma</option>
              <option>DEC</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>Doctorate</option>
            </select>
          </div>
          <div className="searchDivs">
            Smoker:
            <input className="searchInputs" type="radio" name="smoker" value="Yes" onChange={this.handleSmoking}/> Yes
            <input className="searchInputs" type="radio" name="smoker" value="No" onChange={this.handleSmoking}/> No
          </div>
          <div className="searchDivs">
            Drinker:
            <input className="searchInputs" type="radio" name="drinker" value="Yes" onChange={this.handleDrinking}/> Yes
            <input className="searchInputs" type="radio" name="drinker" value="No" onChange={this.handleDrinking}/> No
          </div>
          </ModalBody>
          <ModalFooter>
            <NavButton onClick={this.props.toggle} type="submit" className="navBtns">Enter</NavButton>{' '}
            <Button onClick={this.props.toggle} type="button" className="navBtns">Cancel</Button>
          </ModalFooter>
        </form>
    );
  }
}


export default Search;
