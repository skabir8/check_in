import React, { Component } from 'react';
import './CreateEvent.css';

class CreateEvent extends Component {
	constructor(){
		super();
		this.state = {
			name: "Barbeque",
			invites: ["Jim", "Dwight", "Andy", "Angela"],
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
		let new_invites = invites;
		for (var i = 0; i < invites.length; i++){
			new_invites[i] = invites[i].trim();
		}
		this.setState({
			invites: new_invites
		})
	}

	handleSubmit(event){
		var obj = {
			name: this.state.name,
			invites: this.state.invites,
			createdEventId: -1
		}
		var new_id = Math.round(Math.random()*100000);
		obj.createdEventId = new_id;
		var post_req = "/add?id=" + new_id + "&name=" + obj.name + "&invites=" + obj.invites;
		fetch(post_req);
		this.setState({name: "ddddddd"});
		console.log(this.state.name);
		this.props.appCallback(obj);
	}

	render(){
		const hey = this.state.name;
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
