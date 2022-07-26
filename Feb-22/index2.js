class App extends React.Component {
    constructor() {
        super()
        this.state = {
            list: Array(9).fill(null),
            flag: true // when flag is true- xwill paly elae 0 will be play
        };

    }


    handleClick = (i) => {
        console.log("this is handle", i);
        const squareList = this.state.list
        if (squareList[i] == null) {
            if (this.state.flag == true) {
                squareList[i] = "x";
            } else {
                squareList[i] = "O";

            }
            const newflag = !this.state.flag;
            this.setState({ list: squareList, flag: newflag });
        }else {
            alert("this is not allowed")
        }
    };


    renderSquare = (x) => {
        return (
            <Square
                value={this.state.list[x]}
                changeAppState={() => this.handleClick(x)}
            />
        );
    };

    checkWinner = () => {
        let winnerName = "";
        const lines = [
            [0, 1, 2], // indexes of this.state.list array
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        // const x = [1,2,3,4]
        // // const a = x[0]
        // // const b = x[1]
        // const [a,b,c,d] = x

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            //   console.log(a, b, c);
            const s = this.state.list;
            if (s[a] !== null && s[a] === s[b] && s[a] === s[c]) {
                if (this.state.flag === true) {
                    winnerName = "O";
                } else {
                    winnerName = "X";
                }
            }
        }
        return `winner is  ${winnerName}`;
    };



    // checkWinner = () => {

    //     const lines = [
    //         [0, 1, 2], // indexes of this.state.list array
    //         [3, 4, 5],
    //         [6, 7, 8],
    //         [0, 3, 6],
    //         [1, 4, 7],
    //         [2, 5, 8],
    //         [0, 4, 8],
    //         [2, 4, 6],
    //       ];

    //       for(let i = 0; i<lines.length; i++){
    //           const indexArray = lines[i]
    //           for(let j = 0; j<lines.length; j++)
    //       }
    //       return "no winner now"
    // };





    render() {
        console.log(this.state.list);
        return (
            <div className="container">
                <div className="row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {/* <Square value = "0" />
                    <Square value = "0" />
                    <Square value = "0" /> */}
                </div>
                <div className="row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}

                    {/* <Square value = "0" />
                    <Square value = "0" />
                    <Square value = "0" /> */}
                </div>
                <div className="row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}

                    {/* <Square value = "0" />
                    <Square value = "0" />
                    <Square value = "0" /> */}
                </div>
                <div>{this.checkWinner()}</div>


            </div>

        )

    }

}




ReactDOM.render(<App />, document.getElementById("root"));