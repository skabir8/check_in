import React, { Component } from 'react';
import './CreateEvent.css';

class CreateEvent extends Component {
	constructor(){
		super();
		this.state = {
			name: "Barbeque",
			invites: ["Jim", "Dwight", "Andy", "Angela"]
		};
	}

	handleName(event){
		const name = event.target.value;
		this.setState({
			name: name
		})
	}

	handleInvites(event){
		const Invites = event.target.value;
		const invites = Invites.split(' ');
		this.setState({
			invites: invites
		})
	}

	handleSubmit(event){
		event.preventDefault();

		var obj = {
			name: this.state.name,
			invites: this.state.invites
		}

		this.props.appCallback(obj);

		// let updatedEvents = this.state.invites;

		// updatedEvents.push(obj);

		// this.setState({
		// 	events: updatedEvents
		// })

		// console.log(obj);
	}

	render(){
		return (
			<div className="AddEvent">

		        <button type="button" data-toggle="modal" data-target={"#" + this.state.id +"myModal2"} class="btn btn-light btn-lg" id="createEventButton">Create Event</button>

		        
		        <div id={this.state.id+"myModal2"} className="modal fade" role="dialog">
		          <div className="modal-dialog">
		            <div className="modal-content">
		              <div className="modal-body">
		                <form>
		                  <label>
		                  	<h4>Create Event</h4>
		                    Name: <input onChange={this.handleName.bind(this)} type="text" /> <br />
		                    Invite: <input onChange={this.handleInvites.bind(this)} type="text" />
		                  </label>
		                    <br/>
		                    <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} data-dismiss="modal"/>
		                </form>
		              </div>
		            </div>
		          </div>
		        </div>

		        {/* <br />
		        <br />
		        <br />

		        <ul>
		        	{this.}
		        </ul>

		        <div id="all-events">
		          <p> <strong>{this.state.events[this.state.events.length-1].name}</strong> </p>
		          <p> {this.state.events[this.state.events.length-1].invites} </p>

		          <p> <strong>{this.state.events[this.state.events.length-2].name}</strong> </p> 
		          <p> {this.state.events[this.state.events.length-2].invites} </p>

		          <p> <strong>{this.state.events[this.state.events.length-3].name}</strong> </p> 
		          <p> {this.state.events[this.state.events.length-3].invites} </p>
		        </div>*/}
		     
		    </div>
		);
	}
}

export default CreateEvent;