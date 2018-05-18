import React, { Component } from 'react'
import {ChatGrid,ChatHistoryGrid, MainContentGrid} from './Styled.js'
import ChatHistory from './ChatHistory.js'

class Messages extends Component{
  render(){
    return(
      <ChatGrid>
        <ChatHistory/>
        <MainContentGrid>
          <h1>Title</h1>
          <h1>Messages</h1>
        </MainContentGrid>
      </ChatGrid>
    )
  }
}

export default Messages