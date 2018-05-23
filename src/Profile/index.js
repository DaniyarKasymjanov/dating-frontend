import React from 'react'
import { Modal } from 'reactstrap'
import { Link } from 'react-router-dom';
import ProfileImages from './ProfileImages.js'
import AnswerQuestions from './AnswerQuestions'
import EvaluationQuestions from '../EvaluationQuestions.js';
import Footer from '../Footer'
import {MiniPicGrid, StyledModal, MessageButton, SCButton} from '../Styled'

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
        extraImages: [
          "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
          "https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
        ],
        viewImages: false,
        answered: false,
        whoLikes: []
      },
      profileData: {
        username: '',
        password: '',
        age: "",
        isLiked: false,
        isEditable: false,
        profileImg: "",
        backgroundImage: "",
        extraImages: [],
        showQuestions: false,
        editQuestions: false
      }
    }
  }

  setAnsweredCorrectly = (result) => {
    console.log('setansweredorrectly')
    this.setInfo({ answeredCorrectly: result, answered: true, viewImages: result })
  }

  componentDidMount() {
    fetch('/getProfile?username=' + this.props.username, {
      credentials: 'same-origin'
    })
      .then(res => res.json())

      .then(res => {
        console.log(res)
        console.log(res, "abcsdfkjdhsf")
        let infoData = res.result;
        this.setInfo({
          city: infoData.city,
          birthday: infoData.birthday,
          gender: infoData.gender,
          education: infoData.education,
          aboutMe: infoData.aboutMe,
          smoking: infoData.smoking,
          drinking: infoData.drinking,
          languages: [],
          lookingFor: infoData.lookingFor,
          questions: infoData.questions,
          profileImg: infoData.profileImg,
          backgroundImage: infoData.backgroundImage,
          extraImages: infoData.extraImages ? infoData.extraImages : [],
          whoLikes: infoData.likes
        })
        this.setProfileData({
          username: infoData.username,
          isLiked: res.liked
        })
      })
      .then((res) => {
        console.log(this.state.profileData.username, "MYUSER")
        this.checkViewImages();

      })


  }

  checkViewImages = () => {
    if (this.state.profileData.isLiked) {
      this.state.info.whoLikes.map((person) => {
        if (person === this.props.ownUsername) {
          this.setInfo({ viewImages: true })
        }
      })
    }
  }

  setNestedState = (key, obj) => {
    let stateCopy = { ...this.state[key] };
    Object.keys(obj).forEach(key => {
      stateCopy[key] = obj[key];
    })
    console.log(obj)
    console.log("@@@")
    console.log(key)
    console.log(stateCopy)
    this.setState({ [key]: stateCopy })
  }

  setInfo = (obj) => {
    this.setNestedState('info', obj);
  }

  setProfileData = (obj) => {
    console.log("@!@!@!", obj)
    this.setNestedState('profileData', obj);
  }

  deleteExtraImage = (idx) => {
    const extraImagesCopy = [...this.state.info.extraImages];
    extraImagesCopy.splice(idx, 1);
    this.setInfo({ extraImages: extraImagesCopy });
  }

  calculateAge = () => {
    var str = this.state.info.birthday;
    var dob = str.replace(/-/g, "")
    var year = Number(dob.substr(0, 4));
    var month = Number(dob.substr(4, 2)) - 1;
    var day = Number(dob.substr(6, 2));
    var today = new Date();
    var age = today.getFullYear() - year;
    if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--;
    }
    return <div>Age: {age} Years old </div>
    this.setProfileData({ age: age })
  }

  renderLanguages = () => {
    if (this.state.info.languages.length >= 1) {
      return (this.state.info.languages.map(x => <div>{x}</div>))
    }
    return null
  }

  likeSwitch = () => {
    //if(this.state.isLiked === "checked") {
    //this.setState({ isLiked: !this.state.isLiked })
    console.log("ASSD")
    fetch(this.state.profileData.isLiked ? '/unlike' : '/like', {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify({ username: this.state.profileData.username })//still need to send my username and the clicked username
    })
      .then(e => e.text())
      //  .then(e=>console.log(e))
      .then(e => JSON.parse(e))
      .then(res => {
        console.log("$$$", res)
        if(res.success) {
          this.setProfileData({ isLiked: !this.state.profileData.isLiked })
          this.checkViewImages();
        }
      })
  }

  toggleEditable = () => {
    let isEditable = !this.state.profileData.isEditable;
    if (isEditable) this.backup = this.state;
    else this.backup = null;
    this.setProfileData({ isEditable });
  }

  uploadExtraImages = () => {
    let imgFiles = this.state.profileData.extraImages
    return Promise.all(this.state.profileData.extraImages.map(imgFile => {
      let fileExtension = imgFile.name.split('.').pop();
      return fetch('/uploadExtraImages?extension=' + fileExtension, { method: "POST", body: imgFile })
        .then(res => res.json())
        .then((res) => {
          console.log(res)
          return '/' + res.imageName;
        })
    }))
      .then(res => this.setInfo({ extraImages: this.state.info.extraImages.concat(res).filter(img => !img.includes('data')) }));
  }

  uploadImage = (img, endPoint) => {
    console.log('uploadImage', endPoint)
    let imgFile = this.state.profileData[img];
    var fileExtension = imgFile.name.split('.').pop();
    return fetch('/' + endPoint + '?extension=' + fileExtension, { method: "POST", body: imgFile })
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        this.setInfo({ [img]: '/' + res.imageName });
      })
  }

  handleImageChange = (e, img) => {
    let file = e.target.files[0];
    this.setProfileData({ [img]: file });
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      this.setInfo({ [img]: e.target.result })
    }
  }

  handleExtraImageChange = (e) => {
    let file = e.target.files[0];
    this.setProfileData({ extraImages: this.state.profileData.extraImages.concat(file) });
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      this.setInfo({ extraImages: this.state.info.extraImages.concat(e.target.result) })
    }
  }
  submitEdits = () => {
    const editPromises = [];
    if (this.state.profileData.extraImages.length > 0) editPromises.push(this.uploadExtraImages());
    if (this.state.profileData.backgroundImage) editPromises.push(this.uploadImage("backgroundImage", "uploadBackgroundImage"));
    if (this.state.profileData.profileImg) editPromises.push(this.uploadImage("profileImg", "uploadProfileImg"));
    Promise.all(editPromises)
      .then(() => {
        fetch('/editProfile', {
          method: 'POST',
          credentials: 'same-origin',
          body: JSON.stringify(this.state.info)//this needs to be changed so that I send all data organized
        })
        this.setProfileData({ extraImages: [] });
        this.toggleEditable()
      })
  }

  cancelEdits = () => {
    this.setState(this.backup);
    this.toggleEditable();
  }

  handleInfoChange = (e, key) => {
    this.setInfo({ [key]: e.target.value })
  }

  renderInfo = (key, str) => {
    return (
      <div className="capitalize">{str ? str : key}{(key !== 'aboutMe' && key !== 'lookingFor') && ':'} {this.state.profileData.isEditable ?
        <input value={this.state.info[key]} onChange={(e) => this.handleInfoChange(e, key)} /> : this.state.info[key]
      }
      </div>
    );
  }
  renderUserInfo = (key, str) => {
    return (
      <div className="capitalize">{str ? str : key}{(key !== 'aboutMe' && key !== 'lookingFor') && ':'} {this.state.profileData.isEditable ?
        <textarea rows="5" cols="100" value={this.state.info[key]} onChange={(e) => this.handleInfoChange(e, key)} /> : this.state.info[key]
      }
      </div>
    );
  }
  renderGender = () => {
    return (
      <div className="capitalize">Gender: {this.state.profileData.isEditable ?
        <select value={this.state.info.gender} onChange={(e) => this.handleInfoChange(e, 'gender')}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select> :
        this.state.info.gender
      }
      </div>
    );
  }

  toggleQuestions = () => {
    this.setProfileData({ showQuestions: !this.state.profileData.showQuestions });
  }

  toggleEditQuestions = () => {
    this.setProfileData({ editQuestions: !this.state.profileData.editQuestions });
  }

  updateQuestions = (questions) => {
    fetch('/updateQuestions', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({ questions })
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
  }

  viewProfile = () => {
    return (
      <div className="MainProfileGrid">
        <Modal isOpen={this.state.profileData.showQuestions} toggle={this.toggleQuestions}>
          <AnswerQuestions setAnsweredCorrectly={this.setAnsweredCorrectly} questions={this.state.info.questions} isEditable={this.isEditable} username={this.state.profileData.username} showQuestions={this.state.profileData.showQuestions} />
        </Modal>
        <Modal isOpen={this.state.profileData.editQuestions} toggle={this.toggleEditQuestions}>
          <EvaluationQuestions questions={this.state.info.questions} submitEvaluation={this.updateQuestions} history={this.props.history} />
        </Modal>
        <div className="TopContent">
        <div className="ProfileBackground">
          <img style={{width:"100%", borderBottom:"4px solid #ddd"}}src={this.state.info.backgroundImage ? this.state.info.backgroundImage : "https://linkedinbackground.com/download/Lets-Go-On-A-Swing.jpg"} />
          {this.state.profileData.isEditable && <input type="file" onChange={(e) => this.handleImageChange(e, "backgroundImage")} />}
          <div className="MainProfileImg">
            <img src={this.state.info.profileImg ? this.state.info.profileImg : "http://swaleswillis.co.uk/wp-content/uploads/2017/04/face-placeholder.gif"} />
            {this.state.profileData.isEditable && <input type="file" onChange={(e) => this.handleImageChange(e, "profileImg")} />}
          </div>
        </div>
        {/* <div>backgroundImage:{this.state.info.backgroundImage ? <img src={'/' + this.state.info.backgroundImage} /> : null}</div> */}
        
        <div className="ProfileQuick">
          <div style={{display:"flex"}}>{!this.props.ownProfile && <MessageButton><Link style={{color:"white", textDecoration:"none"}} to={"/messages/" + this.state.profileData.username}>Message</Link></MessageButton>}

          {this.props.ownProfile ? <MessageButton onClick={this.toggleEditQuestions}>Edit Questions</MessageButton> : (!this.state.info.answered && <MessageButton onClick={this.toggleQuestions}>View Questions</MessageButton>)}
          
          {!this.props.ownProfile ?
          <div>
            {this.state.profileData.isLiked ? <MessageButton type="checkbox" name="Like" title="Select All" checked onClick={this.likeSwitch}><span style={{color:"red"}}><i className="fas fa-heart"></i></span></MessageButton> : <MessageButton type="checkbox" name="Like" title="Select All" onClick={this.likeSwitch}><span><i className="fas fa-heart"></i></span></MessageButton>}</div> :
            (this.state.profileData.isEditable ? (
            <div>
              <SCButton onClick={this.submitEdits}>Save</SCButton>
              <SCButton onClick={this.cancelEdits}>Cancel</SCButton>
            </div>
            ) : <MessageButton onClick={this.toggleEditable}>Edit</MessageButton>)
          }
          
          </div>
          <h3 style={{textAlign: "left"}}>{this.state.profileData.username}</h3>
          <div className="ProfileInfo">
          <table >
          
            <tbody>
              <tr>
                <td> {this.calculateAge()}</td>
                <td> {this.renderInfo("education")}</td>
                <td> {this.renderInfo("smoking")}</td>
              </tr>
              <tr>
                <td> {this.renderGender()}</td>
                <td> {this.renderInfo("city")}</td>
                <td> {this.renderInfo("drinking")}</td>
              </tr>
              
                
              
            </tbody>
            
          </table>
          <div> Languages: {this.renderLanguages()}</div>
          </div>
          </div>
        </div>
        <div className="BottomContent">
          <div className="AboutMe">
            <div className="">{this.renderUserInfo("aboutMe", <h3>About Me</h3>)}</div>
          </div>
          <div className="AboutMe">
            {this.renderUserInfo("lookingFor", <h1>Looking For</h1>)} 
          </div>
        </div>
        <div className="ProfileImgWrapper">
          {this.state.profileData.isEditable && <input type="file" onChange={(e)=> this.handleExtraImageChange(e)} />}
          <ProfileImages isEditable={this.state.profileData.isEditable} ownProfile={this.props.ownProfile} viewImages={this.state.info.viewImages} deleteExtraImage={this.deleteExtraImage} extraImages={this.state.info.extraImages} />
        </div>
        <Footer className="Footer" />
      </div>)
  }


  render() {
    console.log(this.state)
    return (
      this.viewProfile()
    )
  }
}



export default Profile 