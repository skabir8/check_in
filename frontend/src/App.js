import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEvents from "./CreateEvent.js";
import Event from "./Event.js";

class App extends Component {
  constructor(){
    super();
    this.state = {
      list_of_events:[]
    }
  }

  getAddedEvent = (addedEvent) => {
    let updated_list_of_events = this.state.list_of_events;
    updated_list_of_events.push(addedEvent);

    this.setState({
      list_of_events: updated_list_of_events
    });
  }


  render() {
    const createdEvents = this.state.list_of_events.map((createdEvent, i) => {
      console.log(createdEvent);
      createdEvent.createdEventId = i;
      if(createdEvent !== undefined)
        return <Event key={i} eventInfoFromApp={createdEvent} />
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
          {createdEvents}
        </div>

      </div>
    );
  }
}

export default App;
