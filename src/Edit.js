import React from 'react'

class Edit extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Enter text here.">Username:</input>
        </form>
      </div>
    )
  }
}

export default Edit