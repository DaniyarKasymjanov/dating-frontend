import React, { Component } from "react";

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
      smoker: '',
      drinker: ''
    }
  }
  
  handleSearch = event => {
    this.props.handleSearch(
      {
        searchInput: this.state.searchInput,
        age: {
          from: this.state.minAge,
          to: this.state.maxAge,
        },
        fields: {
          gender: this.state.gender,
          city: this.state.city,
          education: this.state.education,
          smoker: this.state.smoker,
          drinker: this.state.drinker
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
  handleSmoker = event => {
    console.log(event.target.value);
    this.setState({smoker: event.target.value})
  }
  handleDrinker = event => {
    console.log(event.target.value);
    this.setState({drinker: event.target.value})  
  }

  render() {
    return (
      <div>
        <form>
          <div>
          Search: <input type="text" placeholder="Search here" onChange={this.handleSearchInput} value={this.state.searchInput}/>
          </div>
          <div>
            Gender:
            <input type="radio" name="gender" value="male" onChange={this.handleGender}/>Male
            <input type="radio" name="gender" value="female" onChange={this.handleGender}/>Female
          </div>
          <div>
            Age:
            from:
              <input type="number" name="age"  min="18" max="100" onChange={this.handleMinAge}/>
            to:
              <input type="number" name="age" min="18" max="100" onChange={this.handleMaxAge}/>
          </div>
          <div>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleCity}/>
          </div>
          <div>
            Education:
            <select name="education" onChange={this.handleEducation}>
              <option value="None selected">Please select below</option>
              <option>High School Diploma</option>
              <option>DEC</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>Doctorate</option>
            </select>
          </div>
          <div>
            Smoker:
            <input type="radio" name="smoker" value="smoker" onChange={this.handleSmoker}/> Yes
            <input type="radio" name="smoker" value="notsmoker" onChange={this.handleSmoker}/> No
          </div>
          <div>
            Drinker:
            <input type="radio" name="drinker" value="drinker" onChange={this.handleDrinker}/> Yes
            <input type="radio" name="drinker" value="notdrinker" onChange={this.handleDrinker}/> No
          </div>
        </form>
      </div>
    );
  }
}


export default Search;
