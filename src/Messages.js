import React, { Component } from 'react'
import {ChatGrid,ChatHistoryGrid, MainContentGrid} from './Styled.js'
import ChatHistory from './ChatHistory.js'

class Messages extends Component{
  render(){
    return(
      <ChatGrid>
        <ChatHistory/>
        <MainContentGrid>
          <h1>Messages Box</h1>
          <h1>Input box</h1>
        </MainContentGrid>
      </ChatGrid>
    )
  }
}

export default Messages