import React, {Component} from 'react'
import {MainContentGrid} from './Styled'

class ChatHistory extends Component{
  constructor(){
    super();
    this.state = {
      chatmembers:[]
    }
  }
  render(){
    return(
      <MainContentGrid>
        <h1>Chat Title</h1>
        chat members {this.state.chatmembers.map(()=>console.log('chat members'))}
      </MainContentGrid>
    )
  }
}

export default ChatHistory