import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        
    }


  render() {
    return (
      <div>
          counter component
          <button onCllick={this.props.changeParent()}>  Chnge from chlid</button>
        
      </div>
    )
  }
}

export default Counter;
