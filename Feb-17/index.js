
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Job: "",
      Email: "",
    }
  }


  postdata = (someUser) => {
    // const newUser= {
    //   name:"mitesh",
    //   jobs:"geekster student",
    // };

    axios.post("https://reqres.in/api/users", (someUser)).then(res => {
      console.log(res);
    })
  };

  submitfrom = (e) => {
    e.preventDefault();
    const user = {
      name: this.state.Name,
      Job: this.state.Job,
      Email: this.state.Email,
    }

    this.postdata(user);

    console.log("submitr form", this.state.Name, this.state.Job, this.state.Email);

  }

  changeName = (event) => {
    this.setState((prev) => {
      return {
        Name: event.target.value,
      };
    });
    // console.log(event.target.value);
  };


  // changeJob = (event) => {
  //   this.setState((prev) => {
  //     return {
  //       Job: event.target.value,
  //     };
  //   });
  //   // console.log(event.target.value);
  // };


  changeEmail = (event) => {
    this.setState((prev) => {
      return {
        Email: event.target.value,
      };
    });
    // console.log(event.target.value);
  };


  render() {
    return (
      <div className="App-container">
        <form className="formCtn" onSubmit={this.submitfrom}>
          <div className="mb-1" >
            <label className="form-label">Name</label>
            <input className="form-control" placeholder="Name"
              value={this.state.Name}     // control componnet  
              onChange={this.changeName}
            />
          </div>
          <div className="mb-1">
            <label className="form-label">Job</label>
            <input className="form-control" placeholder="Job"
              value={this.state.Job}     // control componnet  
              onChange={this.changeJob}
            />
          </div>

          <div className="mb-1">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" placeholder="Email"
              value={this.state.Email}     // control componnet  
              onChange={this.changeEmail}
            />
          </div>
          <button class="btn btn-primary" type="submit"> Submit</button>

          {/* <button  onClick={this.postdata}> post data</button> */}

        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
