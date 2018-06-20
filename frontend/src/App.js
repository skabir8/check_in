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
    .then(new_users => {this.setState({ users: new_users.data})
    if (new_users.data.length > 0) {
      const newUserList = this.state.users;
      for (var i = 0; i < new_users.data.length ; i++){
        let current_event = new_users.data[i];
        let new_name = current_event.name;
        let new_id = current_event.id;
        let new_locations = current_event.locations.substring(1,current_event.locations.length-1).split(',');
        let new_members = current_event.members.substring(1,current_event.members.length-1).split(',');
        let new_time = current_event.time.substring(1,current_event.time.length-1).split(',');
        let new_date = current_event.date.substring(1,current_event.date.length-1).split(',');
        let new_checkedin = current_event.checkedin.substring(1,current_event.checkedin.length-1).split(',');
        let new_map_locations = current_event.map_locations.substring(1,current_event.map_locations.length-1).split(',');
        let new_todo = current_event.todo.substring(1,current_event.todo.length-1).split(',');
        let new_dict = {
          id: new_id,
          name: new_name,
          locations: new_locations,
          date: new_date,
          time: new_time,
          members: new_members,
          todo: new_todo,
          checkedin: new_checkedin,
          map_locations: new_map_locations};

      //console.log(new_dict);
      newUserList[i] = new_dict;

      }
      this.setState({users: newUserList});

    //console.log(this.state.users);
    }
    });
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
    if (this.state.users.length > 0) {
      const myEvents = this.state.users;
      console.log(myEvents[0].name);
    }



    //console.log(Object.getOwnPropertyNames(listOfUsers));
    //console.log((listOfUsers.keys))
    //const hey = current_event.id;
    //console.log(this.state.users);
    //console.log(Object.prototype.toString.call(hey));
    //console.log(hey);
    //console.log(Object.prototype.toString.call(this.state.users));
    //const name = listOfUsers.map((name, index) => (<li key={index} onClick={this.handleDelete.bind(this,index)}>{name}</li>));
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



      </div>
    );
  }
}

export default App;
