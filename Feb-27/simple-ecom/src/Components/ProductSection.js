import React, { Component } from 'react'
import SingleProduction from './SingleProduction.js';

class ProductSection extends Component {
  render() {
    // console.log(this.props.product);
    return (
      <>
        <div className="product-container">
          {this.props.products.map((single_product, idx) => {
            return (
              <SingleProduction product={single_product} key={idx} />
            );
          })}
        </div>

      </>
    )
  }
}



export default ProductSection;

