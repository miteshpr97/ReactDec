class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }

    }

    incrementParent = () => {
        this.setState({ count: this.state.count + 1 })

    };

    render() {
        return (
            <div>
                hello i am -- (this.state.count)
                <div>
                    <button onClick={this.incrementParent}>increment</button>
                </div>
                <Counter changeParent={this.incrementParent} />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

