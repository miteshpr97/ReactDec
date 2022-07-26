import React, { Component } from 'react';
import './App.css';



class Counter extends Component {

    constructor(props) {
        super(props);
       this.state = {count : 0};
       this.Increase = this.Increase.bind(this);
       this.Decrease = this.Decrease.bind(this);

    }

    Increase () {
        // console.log("increasing", this.state.count);
        const newCount = this.state.count + 1;
        this.setState({count: newCount});
    }

    Decrease () {
       
    
        const newCount = this.state.count - 1;
        this.setState({count: newCount});
    }


    



  render() {
    return (
        <div className="counter">
         <h3>  Counter = {this.state.count}   </h3>  
         <button onClick={this.Increase}>Increase</button>
         <button onClick={this.  Decrease}>Decrease</button>
        </div>
        

    );
  }
}

export default Counter;