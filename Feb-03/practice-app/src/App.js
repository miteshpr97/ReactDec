import React, { Component } from 'react';
import './App.css';
// import Card from './Card';
import Counter from './Counter';

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = { name: "jagannath pradhan" };  // its componnet it's self
  
    // this.changeState = this.changeState.bind(this);    // if you used this line 
  }

  // changeState() {
  //   console.log("this is a consle")

  //   console.log(this.state.name)
  

  // }

  render() {
    return (
      <div className="App">

        {/* <h1>App Component</h1>
        <button onClick={this.changeState}> click me</button>
        <div className="carditem">
          <Card
            name = {this.state.name}
            geek="mitesh"
            second="pradhan"
            display={false}
          />
          <Card geek="geetika" />
          <Card geek="mitika" />
        </div> */}


        <Counter />

      </div>
    );
  }
}

export default App;
