class App extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            names: [
                "mitesh",
                "abhishek",
                "geetika",

            ]
        }


    }

    increaseCounter = () => {
        // this.setState({ counter:(this.state.counter + 1)});  // it's possibale some time its run or not 

        this.setState((previousCounter) => {
            return {
                counter: previousCounter.counter + 1,       // right approch to counter any no..   its better to rightthis code 
            }

        });
    }


    decreaseCounter = () => {
        // this.setState({ counter:(this.state.counter + 1)});  // it's possibale some time its run or not 

        this.setState((prev) => {
            return {
                counter: prev.counter - 1,      // right approch to counter any no..   its better to rightthis code 
                names: prev.names,


            }
        });
    }

    render() {

        console.log(this.state.names);
        return (
            <div>
                {/* <button onClick={this.increaseCounter}>increment</button> */}

                <h1> Like / Dislike </h1>
                <LikeDislikeButton func={this.decreaseCounter} purpose="dislike" />
                <ShowCounter counterValue={this.state.counter} />
                <LikeDislikeButton func={this.increaseCounter} purpose="like" />


                {this.state.names.map((single_name) => {
                    return (
                        <GreetPerson names={single_name} />
                    )
                })}

            </div>


        )

    }
}
