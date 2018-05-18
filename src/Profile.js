import React from 'react'
import ProfileImages from './ProfileImages.js'

class Profile extends React.Component{
  constructor() {
    super();
    this.state = {            
      username: 'a',
      password: 'a',
      birthday: '1908-12-12',
      city: 'a',
      gender: 'a',
      interstedIn: "a",
      smoking: "a",
      drinking: "a",
      education: "a",
      languages: ["s"],
      questions: [],
      aboutMe: "a",
      lookingFor: "a",
      profileImg: "a",
      backgrounImage: "a",
      extraImages: [""],
      isLiked: false
    }
  }

  componentDidMount() {
    fetch('/getProfile?username=' + this.props.username)
    // .then(res => res.json())
    // .then(res => this.setState(res))
  }

  calculateAge = () => {
    var str= this.state.birthday;
    var dob = str.replace(/-/g, "")
      var year = Number(dob.substr(0, 4));
      var month = Number(dob.substr(4, 2)) - 1;
      var day = Number(dob.substr(6, 2));
      var today = new Date();
      var age = today.getFullYear() - year;
      if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
}
return age
  }

  renderLanguages = () => {
    if(this.state.languages.length >= 1){
        return (this.state.languages.map(x => <li>{x}</li>))
    }
  }
  renderImages = () => {
    if(this.state.extraImages.length >= 1){
        return (this.state.extraImages.map(x => <li><img src={'/'+ x}></img></li>))
    }
  }
  likeSwitch = () => {
    this.setState({isLiked: !this.state.isLiked})
    fetch('/isLiked?username=' + this.state.username), {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify({isLiked: this.state.isLiked})//still need to send my username and the clicked username
    }
  }

  handleProfileImage = (x) => {
    var filename = x.name;
    var fileExtension = filename.split('.').pop();
    fetch('/uploadProfileImage?extension=' + fileExtension, { method: "POST", body: x })
        .then(res => res.json())
        .then((res) => this.setState({ profileImg: res.profileImg }))
}

  render(){
    return(
      <div>
        <ProfileImages extraImages={this.state.extraImages}/>
        <form onSubmit={this.updateProfile}>
        <div>{this.state.backgrounImage ? <img src={'/' + this.state.backgrounImage} /> : null}</div>
        <div>{this.state.profileImg}</div>
        <div>{this.state.profileImg ? <img src={'/' + this.state.profileImg} /> : null}</div>
        <input type="file" onChange={e => this.handleProfileImage(e.target.files[0])} />
        <div></div>
        <input type="checkbox" name="Like" title="Select All" onclick={this.likeSwitch}></input>
        <div><input value={this.state.city} onChange={this.editCity}/></div>
        <div>{this.state.gender}</div>
        <div>{this.calculateAge()}</div>
        <div><input value={this.state.education} onChange={this.editEducation}/></div>
        <div>{this.renderLanguages()}</div>
        <div><input value={this.state.aboutMe} onChange={this.editAboutMe}/></div>
        <div><input value={this.state.lookingFor} onChange={this.editLookingFor}/></div>
        <div>{this.renderImages()}</div>
        </form>



        </div>
    )
  }
}

export default Profile 