import React from 'react'
import ProfileImages from './ProfileImages.js'

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {
        birthday: '',
        city: '',
        gender: '',
        interstedIn: "",
        smoking: "",
        drinking: "",
        education: "",
        languages: [],
        questions: [],
        aboutMe: "",
        lookingFor: "",
        profileImg: "",
        backgroundImage: "",
        extraImages: [],
      },
      profileData: {
        username: '',
        password: '',
        age: "",
        isLiked: false,
        isEditable: false
      }
    }
  }

  componentDidMount() {
    fetch('/getProfile?username=' + this.props.username, {
      credentials: 'same-origin'
    })
      .then(res => res.json())

      .then(res => {
        let infoData = res.result;
        this.setInfo({
          city: infoData.city,
          birthday: infoData.birthday,
          gender: infoData.gender,
          education: infoData.education,
          aboutMe: infoData.aboutMe,
          smoking: infoData.smoking,
          drinking: infoData.drinking,
          languages: ["eng"],
          lookingFor: infoData.lookingFor,

        })
        this.setProfileData({
          username: infoData.username
        })
      })


  }

  setNestedState = (key, obj) => {
    let stateCopy = { ...this.state[key] };
    Object.keys(obj).forEach(key => {
      stateCopy[key] = obj[key];
    })
    this.setState({ [key]: stateCopy })
  }

  setInfo = (obj) => {
    this.setNestedState('info', obj);
  }

  setProfileData = (obj) => {
    this.setNestedState('profileData', obj);
  }

  calculateAge = () => {
    var str = this.state.birthday;
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
    this.setState({ age: age })
  }

  renderLanguages = () => {
    if (this.state.info.languages.length >= 1) {
      return (this.state.info.languages.map(x => <div>{x}</div>))
    }
    return null
  }
  renderImages = () => {
    if (this.state.info.extraImages.length >= 1) {
      return (this.state.info.extraImages.map(x => <li><img src={'/' + x}></img></li>))
    }
  }
  likeSwitch = () => {
    // if(this.state.isLiked === "checked") {
    this.setState({ isLiked: !this.state.isLiked })
    fetch('/likes?username=' + this.state.username), {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify({ isLiked: this.state.isLiked })//still need to send my username and the clicked username
    }
  }

  toggleEditable = () => {
    let isEditable = !this.state.profileData.isEditable;
    if (isEditable) this.backup = this.state;
    else this.backup = null;
    this.setProfileData({ isEditable });
  }

  uploadProfileImage = () => {
    let imgFile = this.state.profileData.profileImgFile;
    var fileExtension = imgFile.name.split('.').pop();
    fetch('/uploadProfileImg?extension=' + fileExtension, { method: "POST", body: imgFile })
      .then(res => res.json())
      .then((res) => this.setInfo({ profileImg: res.profileImg }))
  }

  handleProfileImage = (e) => {
    let file = e.target.files[0];
    this.setProfileData({ profileImgFile: file });
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      this.setInfo({ profileImg: e.target.result })
    }
  }

  uploadBackgroundImage = () => {
    let imgFile = this.state.profileData.backgroundImgFile;
    var fileExtension = imgFile.name.split('.').pop();
    fetch('/uploadBackgroundImg?extension=' + fileExtension, { method: "POST", body: imgFile })
      .then(res => res.json())
      .then((res) => this.setInfo({ backgroundImage: res.profileImg }))
  }

  handleBackgroundImage = (e) => {
    let file = e.target.files[0];
    this.setProfileData({ backgroundImgFile: file });
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = (e) => {
      this.setInfo({ backgroundImage: e.target.result })
    }
  }

  handleExtraImages = (x) => {
    var filename = x.name;
    var fileExtension = filename.split('.').pop();
    fetch('/uploadExtraImages?extension=' + fileExtension, { method: "POST", body: x })
      .then(res => res.json())
      .then((res) => this.setState({ extraImages: this.state.extraImages.concat(res.backgroundImg) }))
  }
  submitEdits = () => {
    // fetch('/editProfile', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state)
    // })
    if (this.state.profileData.backgroundImgFile) this.uploadBackgroundImage();
    if (this.state.profileData.profileImgFile) this.uploadProfileImage();
    this.toggleEditable()
  }

  cancelEdits = () => {
    console.log(this.backup, this.state)
    this.setState(this.backup);
    this.toggleEditable();
  }

  handleInfoChange = (e, key) => {
    this.setInfo({ [key]: e.target.value })
  }

  renderInfo = (key, str) => {
    return (
      <div className="capitalize">{str ? str : key}:
      {this.state.profileData.isEditable ?
          <input value={this.state.info[key]} onChange={(e) => this.handleInfoChange(e, key)} /> :
          this.state.info[key]
        }
      </div>
    );
  }
  renderGender = () => {
    return (
      <div className="capitalize">Gender:
      {this.state.profileData.isEditable ?
          <select value={this.state.info.gender} onChange={(e) => this.handleInfoChange(e, 'gender')}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select> :
          this.state.info.gender
        }
      </div>
    );
  }
  viewProfile = () => {
    return (
      <div>
        <div>{this.state.profileData.username}</div>
        <div>BackgroundImage:
      <img src={this.state.info.backgroundImage ? this.state.info.backgroundImage : "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"} />
          {this.state.profileData.isEditable && <input type="file" onChange={this.handleBackgroundImage} />}
        </div>
        {/* <div>backgroundImage:{this.state.info.backgroundImage ? <img src={'/' + this.state.info.backgroundImage} /> : null}</div> */}
        <div>ProfileImage:
      <img src={this.state.info.profileImg ? this.state.info.profileImg : "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"} />
          {this.state.profileData.isEditable && <input type="file" onChange={this.handleProfileImage} />}
        </div>
        {this.props.ownProfile ?
          <div>Like<input type="checkbox" name="Like" title="Select All" onClick={this.likeSwitch}></input></div> :
          (this.state.profileData.isEditable ? (
            <div>
              <button onClick={this.submitEdits}>Save</button>
              <button onClick={this.cancelEdits}>Cancel</button>
            </div>
          ) : <button onClick={this.toggleEditable}>Edit</button>)
        }
        {this.renderInfo("city")}
        {this.renderGender()}
        {this.renderInfo("birthday")}
        {this.renderInfo("education")}
        <div>languages:{this.renderLanguages()}</div>
        {this.renderInfo("smoking")}
        {this.renderInfo("drinking")}
        {this.renderInfo("aboutMe", "About Me")}
        {this.renderInfo("lookingFor", "Looking For")}
        <div>add images{this.renderImages()}</div>
      </div>)
  }


  render() {
    console.log("fdasa", this.state)
    return (
      this.viewProfile()
    )
  }
}

export default Profile 