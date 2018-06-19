import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      listOfNames: [],
      users: []
    }
  }

  componentDidMount() {
    var new_list = []
    fetch('/users')
    .then(res => res.json())
    .then(new_users => this.setState({ users: new_users["lists"]}))
    .then(this.setState({ users: new_list }));
  }

  handleChange(event){
    const name = event.target.value;
    this.setState({
      name
    })
  }

  handleSubmit(event){
    const name = this.state.name;
    var new_list = []
    var post_req = "/add?todo=" + name;
    fetch(post_req)
    .then(res => res.json())
    .then(new_users => this.setState({ users: new_users["lists"]}))
    .then(this.setState({ users: new_list }));
  }
  handleDelete(index) {
    var new_list = [];
    var post_req = "/delete?index=" + index;
    fetch(post_req)
    .then(res => res.json())
    .then(new_users => this.setState({ users: new_users["lists"]}))
    .then(this.setState({ users: new_list }));

  }


  render() {
    const listOfUsers = this.state.users;
    console.log(this.state.users);
    const name = listOfUsers.map((name, index) => (<li key={index} onClick={this.handleDelete.bind(this,index)}>{name}</li>));
    return (
      <div className="App">
      <h1>To-Do List</h1>


      <form onSubmit={this.handleSubmit.bind(this)}>
      <label>
      Name: <br />
      <input onChange={this.handleChange.bind(this)} type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      </form>


      <ul>
      { (name) ? name : null }
      </ul>
      </div>
    );
  }
}

export default App;
