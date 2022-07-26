import React, { Component } from 'react';
import './App.css';

class Card extends Component {

    constructor (props) {
        super(props);
        // this.state = {myName: "mitesh"};
    }

     
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h1>This is a React Apps {this.props.name}   </h1>
                <p>Vist my apps and lots of laren {this.props.age} </p>
                <p>Vist my apps and lots of laren {this.props.year} </p>
            </div>
        );
          
    }
} 


export default Card;
