import React, { Component } from 'react';
import './App.css';
import Input from './Input';

class App extends Component {
  constructor () {
    super();
    this.state = {
      inputvalue: ""

    };

  }

  handleChange = (new_value) => {
    this.setState({
      inputvalue:new_value
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>Hii geeks</h1>
         <Input onvaluechange={this.handleChange} />
         <p> {this.state.inputvalue}</p>
        </header>
      </div>
    );
  }
}

export default App;
