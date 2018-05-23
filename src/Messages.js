import React, { Component } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ChatGrid,ChatHistoryGrid} from './Styled.js';
import ChatHistory from './ChatHistory.js';
import bgImg from './images/chat-bg.png';
import Spotlight from './Spotlight';
import {MainContentGrid} from './Styled'


const ChatWrapper = styled.div`
  max-height: calc(100vh - 100px);
  overflow: auto;
  max-width: 800px;
  display: grid;
  grid-template-rows: auto 1fr;
`;
// background: url(${bgImg});
const ChatMessages = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  border-radius: 4px;
`;

const ChatHeader = styled.h2`
  padding-bottom: 10px;
  & > img{
    max-width: 70px;
    border-radius: 50%;
  }
`;

const MessageWrapper = styled.div`
  text-align: ${(props) => props.ownMessage ? 'right' : 'left'};
  margin : 5px;
  margin-left: 40px;
  margin-right: 40px;
  & > div {
    color: ${(props) => props.ownMessage ? '#FFFFFF' : '#2196F3'};
    background: ${(props) => props.ownMessage ? '#2196F3' : '#EEEEEE'};
  }
`;

const MessageContent = styled.div`
  display: inline-block;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  max-width: 75%;
  word-break: break-all;
`;

const Form = styled.form`
  margin: 0 40px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  & > input {
    flex: 1;
    height: 40px;
    border: none;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  & > button {
    background: #2e93fb;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const ChatMessagesGrid = styled.div`
 display: grid;
 grid-template-rows: 1fr auto;
`;

const socket = io();
  
class Messages extends Component{
  constructor() {
    super();
    this.state = {
      msgInput: '',
      messages: [],
      isLoaded: false,
      profileImageReceiver: ""
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.props.username)
    if(this.props.receiverName) {
      this.getChat();
      this.getProfileImg();
    }
    else {
      this.loadLatest();
    }
  }
  getProfileImg = () => {
    fetch('/chatProfileImage?username=' + this.props.receiverName)
    .then(res => res.json())
    .then(res => {console.log(res); this.setState({profileImageReceiver: res.result})})
  }
  loadLatest = () => {
    fetch('/getChats', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) return this.props.history.push(`/messages/${res.chats[res.chats.length-1]}`);
      this.setState({ isLoaded: true });
      var objDiv = document.getElementById("startedFromTheUp");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  }
  getChat = () => {
    console.log('getChat', this.props)
    fetch('/getChat', {
      method: 'POST',
      body: JSON.stringify({
        senderName: this.props.username,
        receiverName: this.props.receiverName
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if(res.success) this.handleChat(res.chat);
      var objDiv = document.getElementById("startedFromTheUp");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  }
  handleChat = (chat) => {
    console.log(chat)
    this.setState({ messages: chat.messages });
    socket.emit('join', { chatID: chat._id })
    socket.on('receive_msg', (res) => {
      console.log(res)
      this.setState({ messages: this.state.messages.concat(res) });
      var objDiv = document.getElementById("startedFromTheUp");
      objDiv.scrollTop = objDiv.scrollHeight;
    });
  }

  handleMsgInput = (e) => {
    this.setState({ msgInput: e.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('send_msg', {username: this.props.username, message: this.state.msgInput });
    this.setState({ msgInput: '' });
    var objDiv = document.getElementById("startedFromTheUp");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  render(){

    if(this.state.isLoaded && this.state.messages.length === 0) {
      return (
        <div>
            <h1>No chats available. Select a user you want to message <Link to="/favorites">here</Link></h1>
        </div>
      );
    }
    return(
      <ChatGrid  name="SWAGGY2">
      <MainContentGrid  style={{marginTop : "42px"}}>      
        <Spotlight regusername={"regusername"} username={this.props.username} gender={this.props.gender} city={this.props.city} birthday={this.props.birthday} profileImage={this.props.profileImage}/>
      </MainContentGrid>
        <ChatWrapper name="SWAGGY">
          <ChatHeader style={{color: "#005D8C"}}>{this.props.receiverName} <img src={this.state.profileImageReceiver}/></ChatHeader>
          <ChatMessages id="startedFromTheUp" style={{backgroundColor: "white",border:"3px solid #005D8C",height:"72vh",overflow:"scroll"}} >
          <ChatMessagesGrid>
            <div></div>
            {this.state.messages.map(messageObj => (
              <MessageWrapper ownMessage={messageObj.username === this.props.username}>
                <MessageContent>{messageObj.message}</MessageContent>
              </MessageWrapper>
            ))}
          </ChatMessagesGrid>
          <Form onSubmit={this.handleSubmit}>
            <input type="text" style={{borderRadius:"5px",paddingLeft:"10px",paddingRight:"10px",marginRight:"10px",border : "1px solid #00334C"}} value={this.state.msgInput} onChange={this.handleMsgInput} />
            <button style={{borderRadius:"5px",paddingLeft:"50px",paddingRight:"50px",backgroundColor : "#00334C"}} type="submit">Send</button>
          </Form>
        </ChatMessages>
        </ChatWrapper>
      </ChatGrid>
    )
  }
}

export default Messages