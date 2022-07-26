import React, { Component } from 'react';
import './App.css';



class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {cardheading : "this is a heading "}  // its componnet it's self
    }

    // somefunc(){
    //     console.log("iam mitesh", this.props.geek)     
    // }


  render() {
    return (
        <div className='card'>
            <h1> card componnet --- {this.state.cardheading}</h1>
            
            {this.props.display === false ? this.props.second: this.props.geek}

            {/* {this.somefunc()} */}

        </div>

    );
  }
}

export default Card;