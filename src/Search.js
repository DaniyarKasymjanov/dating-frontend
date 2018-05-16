import React, { Component } from "react";

class Search extends React.Component {
  constructor(){
    super();
    this.state = {
      gender: '',
      minAge: '',
      maxAge: '',
      languages: {
        french: false,
        english: false,
        other: false,
      },
      city: '',
      education: '',
      smoker: '',
      drinker: ''
    }
  }
  handleSearch = event => {
    // fetch('/search', {
    //   method: POST,
    //   body: JSON.stringify({
    //     gender: gender,
    //     minAge: minAge,
    //     maxAge: maxAge,
    //     languages: Object.keys(this.state.languages).filter(key => this.state.languages[key])),
    //     city: city,
    //     education: education,
    //     smoker: smoker,
    //     drinker: drinker
    //   })
    // })
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
  handleLanguages = event => {
    const languages = {...this.state.languages};
    if(event.target.value === 'French'){
      languages.french = !languages.french;
    } else if(event.target.value === 'English'){
      languages.english = !languages.english;
    } else {
      languages.other = !languages.other;
    }
    this.setState({ languages: languages })
    console.log(this.state);
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
        <form onSubmit={this.handleSearch}>
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
            Languages:
            <input type="checkbox" name="languages" value="French" onChange={this.handleLanguages}/> French
            <input type="checkbox" name="languages" value="English" onChange={this.handleLanguages}/> English
            <input type="checkbox" name="languages" value="Other" onChange={this.handleLanguages}/> Other
          </div>
          <div>
            City:
            <select name="city" onChange={this.handleCity}>
              <option value="None selected">Please select below</option>
              <option>Montreal</option>
              <option>Laval</option>
              <option>Trois-Riviere</option>
              <option>Quebec</option>
            </select>
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
          <div />
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}


export default Search;
