import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <>
     <Routes>
       <Routes path = '/about' element={<About />} />
       <Routes path = '/contact' element={Contact />} />
       <Routes path = '/home' element={<About />} />
     </Routes>
     </>
    );
  }
}

export default App;
