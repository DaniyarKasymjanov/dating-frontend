import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { MainGrid, MainContentGrid, ProfileDisplayGrid, H1 } from "./Styled";
import Spotlight from "./Spotlight";
import Footer from "./Footer";

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteMembers: []
    };
  }
  handleFavorite = () => {
    fetch("/favorites", {
      credentials: "same-origin"
    })
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
        if (resJSON.success) this.setState({ favoriteMembers: resJSON.result });
      });
  };
  componentDidMount() {
    this.handleFavorite();
  }

  calculateAge = (birthday) => {
    var str = birthday;
    var dob = str.replace(/-/g, "")
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return <div>Age: {age} </div>
    this.setProfileData({ age: age })
  }
  render() {
    console.log(this.state.favoriteMembers);
    return (
      <div>
        <MainGrid>
          <Spotlight username={this.props.username} gender={this.props.gender} city={this.props.city} birthday={this.props.birthday} />
          <MainContentGrid>
            <H1>Your Favorite Members</H1>
            <ProfileDisplayGrid>
            {this.state.favoriteMembers.map((obj)=>
            <Link to={"/profile/" + obj.username}>
              <div>{obj.profileImg ? <img src = {obj.profileImg}/> : <img src="http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"/>}
                <div>{obj.username}</div>
                <div>{obj.city}</div>
                <div>{this.calculateAge(obj.birthday)}</div>
              </div>
            </Link>
            )}
            </ProfileDisplayGrid>
          </MainContentGrid>
        </MainGrid>
        <Footer />
      </div>
    );
  }
}

export default Favorites;
