import React, { Component } from "react";
import Spotlight from "./Spotlight";
import { MainGrid, MainContentGrid, ProfileDisplayGrid, H1 } from "./Styled";
import Footer from "./Footer";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedMembers: []
    };
  }

  handleSeachedResults = () => {
    fetch("/search")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ searchedMembers: resJSON });
      });
  };

  render() {
    return (
      <div>
        <MainGrid>
          <Spotlight profileImage={this.props.profileImage} username={this.props.username} gender={this.props.gender} city={this.props.city} birthday={this.props.birthday}/>
          <MainContentGrid>
            <H1>Searched Results</H1>
            <ProfileDisplayGrid>
              {this.state.searchedMembers.map(obj => (
                <div>
                  {obj.username}, {obj.profileImage}, {obj.city}, {obj.age}
                </div>
              ))}
            </ProfileDisplayGrid>
          </MainContentGrid>
        </MainGrid>
        <Footer />
      </div>
    );
  }
}

export default Results;
