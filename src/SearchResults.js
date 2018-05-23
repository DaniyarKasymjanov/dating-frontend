import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Spotlight from "./Spotlight";
import { MainGrid, MainContentGrid, ProfileDisplayGrid, H1, ProfileImage } from "./Styled";
import Footer from "./Footer";
import { calculateAge } from './Home';

class Results extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchedMembers: []
  //   };
  // }

  // handleSeachedResults = () => {
  //   fetch("/search")
  //     .then(res => res.json())
  //     .then(resJSON => {
  //       this.setState({ searchedMembers: resJSON });
  //     });
  // };

  render() {
    return (
      <div>
        <MainGrid>
          <Spotlight profileImage={this.props.profileImage} username={this.props.username} gender={this.props.gender} city={this.props.city} birthday={this.props.birthday}/>
          <MainContentGrid>
            <H1>Searched Results</H1>
            <ProfileDisplayGrid>
            {this.props.searchResults.map((obj)=>
            <div>
            <Link to={"/profile/" + obj.username}>
            <div>{ obj.profileImg ? <ProfileImage><img src = {obj.profileImg}/></ProfileImage> : <ProfileImage><img src="http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"/></ProfileImage>}
            </div>
            <div>{obj.username}</div>
            </Link>
            <div>
            <div>{obj.city}</div>
            <div>{calculateAge(obj.birthday)}</div>
            </div>
            </div>
            )}
            </ProfileDisplayGrid>
          </MainContentGrid>
        </MainGrid>
        <Footer />
      </div>
    );
  }
}

export default Results;
