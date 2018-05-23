import React, { Component } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ChatGrid,ChatHistoryGrid} from './Styled.js';
import ChatHistory from './ChatHistory.js';

const ChatWrapper = styled.div`
  max-height: calc(100vh - 100px);
  overflow: auto;
  max-width: 800px;
`;

const ChatHeader = styled.h2`
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const MessageWrapper = styled.div`
  text-align: ${(props) => props.ownMessage ? 'right' : 'left'};
  margin-right: 40px;
  margin-top: 15px;
  & > div {
    background: ${(props) => props.ownMessage ? '#2196F3' : 'grey'};
  }
`;

const MessageContent = styled.div`
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  word-break: break-all;
  max-width: 50%;
`;

const Form = styled.form`
  width: 95%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  & > input {
    flex: 1;
  }
`;

const socket = io();
  
class Messages extends Component{
  constructor() {
    super();
    this.state = {
      msgInput: '',
      messages: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.props.username)
    if(this.props.receiverName) this.getChat();
    else this.loadLatest();
  }
  loadLatest = () => {
    fetch('/getChats', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) return this.props.history.push(`/messages/${res.chats[0]}`);
      this.setState({ isLoaded: true });
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
    });
  }
  handleChat = (chat) => {
    console.log(chat)
    this.setState({ messages: chat.messages });
    socket.emit('join', { chatID: chat._id })
    socket.on('receive_msg', (res) => {
      console.log(res)
      this.setState({ messages: this.state.messages.concat(res) });
    });
  }

  handleMsgInput = (e) => {
    this.setState({ msgInput: e.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('send_msg', {username: this.props.username, message: this.state.msgInput });
    this.setState({ msgInput: '' });
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
      <ChatGrid>
        <ChatHistory/>
        <ChatWrapper>
          <ChatHeader>Chat with {this.props.receiverName}</ChatHeader>
          {this.state.messages.map(messageObj => (
            <MessageWrapper ownMessage={messageObj.username === this.props.username}>
              <MessageContent>{messageObj.message}</MessageContent>
            </MessageWrapper>
          ))}
          <Form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.msgInput} onChange={this.handleMsgInput} />
            <button type="submit">Send</button>
          </Form>
        </ChatWrapper>
      </ChatGrid>
    )
  }
}

export default Messages