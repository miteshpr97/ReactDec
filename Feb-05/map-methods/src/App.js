import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';


// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       mycards: [
//         {
//           id: 1,
//           title: "this is a first title1",
//           decription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ",
//           buttonText: "submit"
//         },

//         {
//           id: 2,
//           title: "this is a first title2",
//           decription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ",
//           buttonText: "submit"

//         },

//         {
//           id: 3,
//           title: "this is a first title",
//           decription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ",
//           buttonText: "submit"

//         }

//       ]
//     };
//   }

//   render() {
//     //map methods
//     console.log("cards--", this.state.mycards)
//     const Item = this.state.mycards.map((item, index) => {
//       console.log("cards--", item)
//       console.log("index", index)

//       return (
//         <div className="card">
//           <div className="cardHeader">{item.title}</div>
//           <div className="cardbody">{item.decription}</div>
//           <div className="cardfooter"><button>{item.buttonText}</button></div>

//         </div>
//       )
//     })


//     return (
//       <div className="App">
//         {Item}

//       </div>
//     )
//   }
// }



class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {}

  // }


  render() {
    return (

    <Form />



    );
  }
}



export default App;
