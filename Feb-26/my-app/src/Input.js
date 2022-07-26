import React, { Component } from 'react'

 class Input extends Component {
  

    onInputchange = (e) => {
        const new_value = e.target.value;
        this.props.onvaluechange(new_value);

    }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputchange} />
      </div>
    )
  }
}



export default Input;

