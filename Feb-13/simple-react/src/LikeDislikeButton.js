class LikeDislikeButton extends React.Component {

    render() {
        console.log(this.props.purpose)
        // condition () ? true : flase  /// ternary operater 
        return (
            this.props.purpose == "dislike"
                ?
                <button onClick={this.props.func}>👎</button>
                :
                <button onClick={this.props.func}>👍</button>



        )
    }


}