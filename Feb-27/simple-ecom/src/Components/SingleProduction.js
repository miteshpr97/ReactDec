import { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/action.js";

class SingleProduction extends Component {
    render() {
        console.log(this.props.product);
        console.log(this.props);
        return (
            <>

                <div className='single-product'>
                    <img src={this.props.product?.image} />
                    <p>{this.props.product?.title}</p>
                    <p>₹ {this.props.product?.price}</p>
                    <button>add to card</button>
                </div>

            </>



        )
    }
}



export default SingleProduction;

