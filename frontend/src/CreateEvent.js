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
			invites: this.state.invites,
			createdEventId: -1
		}

		this.props.appCallback(obj);
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
		    </div>
		);
	}
}

export default CreateEvent;