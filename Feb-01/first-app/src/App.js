import React, { Component } from 'react';
import './App.css';

import Info from './Info.js';

import Card from './Card.js';


class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          {/* <Info /> */}
          <Card  name="mitesh" age={24} year={1997} />
          <Card name="geetika" age={23} year={1999} />
        </div>

      </>
    );
  }
}

export default App;
