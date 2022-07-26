class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "somthing",
            text1: "Something Else",
            text2: "Other thing",
        }
        // this.text= "somthing"
    }
    textChange = (e) => {
        const newValue = e.target.value;

        // this.text= newValue;

        // console.log(this.text)
        // this.forceUpdate();


        this.setState({
            text: newValue,
        });

    }

    alertabcd = () => {
        alert("what")
    }


    alert123 = () => {
        alert("what are doing")
    }


    render() {
        // console.log(this.state.names);
        return (
            <div>
                <h2>Simple React App</h2>
                <input type="text" placeholder="write somthing"
                    onChange={this.textChange}
                />
                <h2> {this.state.text} </h2>
                <h2>{this.state.text1}</h2>
                <h2>{this.state.text2}</h2>
                <button onClick={() => {
                    alert("what")
                }}>click 1</button>
                <button onClick={this.alert123}>click 2</button>
            </div>
        )
    }
}



// ReactDOM.render(<App />, document.getElementById("root"));