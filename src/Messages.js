import React, { Component } from 'react';
import io from 'socket.io-client';
import {ChatGrid,ChatHistoryGrid, MainContentGrid} from './Styled.js';
import ChatHistory from './ChatHistory.js';

const socket = io();
  
class Messages extends Component{
  constructor() {
    super();
    this.state = {
      msgInput: '',
      messages: [],
    }
  }
  componentDidMount() {
    if(this.props.receiverName) this.getChat();
    else this.loadLatest();
  }
  loadLatest = () => {
    fetch('/getChats', {
      credentials: 'same-origin',
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) this.props.history.push(`/messages/${res.chats[0]}`);
    });
  }
  getChat = () => {
    fetch('/getChat', {
      method: 'POST',
      body: JSON.stringify({
        senderName: this.props.username,
        receiverName: this.props.receiverName
      })
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) this.handleChat(res.chat);
    });
  }
  handleChat = (chat) => {
    console.log(chat)
    this.setState({ messages: chat.messages });
    socket.emit('join', { chatID: chat._id })
    socket.on('receive_msg', (res) => {
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
    return(
      <ChatGrid>
        <ChatHistory/>
        <MainContentGrid>
          <h1>Chat</h1>
          {this.state.messages.map(messageObj => (
            <div>
              {messageObj.username}: {messageObj.message}
            </div>
          ))}
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.msgInput} onChange={this.handleMsgInput} />
            <button type="submit">Send</button>
          </form>
        </MainContentGrid>
      </ChatGrid>
    )
  }
}

export default Messages