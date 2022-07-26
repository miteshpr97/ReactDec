import React, { Component } from 'react';
import Header from './Components/Header';
import ProductSection from './Components/ProductSection';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };


  }


  componentDidMount() {
    this.getProducts();
  }


  getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const json = await res.json();
    console.log("json", json);
    this.setState({
      productList: json
    })
  }





  render() {
    return (
      <div className="App">
        <Header />
        <ProductSection products={this.state.productList} />
      </div>
    );
  }
}

export default App;
