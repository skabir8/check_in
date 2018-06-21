import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEvents from "./CreateEvent.js";
import Event from "./Event.js";

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: "",
      listOfNames: [],
      users: [],
      list_of_events: []
    }
  }


  getAddedEvent = (addedEvent) => {
    let updated_list_of_events = this.state.list_of_events;
    updated_list_of_events.push(addedEvent);

    this.setState({
      list_of_events: updated_list_of_events
    });
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
    const myEvents = this.state.users;
    let doRender = false;
    if (myEvents.length > 0 && typeof(myEvents[0].locations) != "string") {
      const myEvents = this.state.users;
      doRender = true;
      //console.log(doRender);
    }

    let createdEvents = myEvents.map((createdEvent, index) => {
      //console.log(createdEvent);
      createdEvent.createdEventId = index;
      if(createdEvent !== undefined)
        return <Event key={index} eventInfoFromApp={createdEvent} />
    });



    return (
      <div className="App">
        <header className="App-header">
          <img src="Check_icon.png" id="check-logo" alt="logo" />
        </header>

        <div id="create-events">
          <CreateEvents appCallback={this.getAddedEvent}/>
        </div>

        <div id="current-events">
          { (doRender) ? createdEvents : null }
        </div>
      </div>
    );
  }
}

export default App;
