import React, { Component } from 'react'

class Form extends Component() {


    constructor() {
        super();
        this.state = {
            value: ''
        }

    }



    handleChange = (e) => {

        console.log(e);

    }

    render() {
        return (
            <form>

                <input type="text" onChange={this.handleChange} name="name" />
                <button>Submit</button>

                mitesh

            </form>

        );
    }
}

export default Form;
