import React, { Component } from 'react';
import './Event.css';
import Details from './details.js';

class Event extends Component {
	constructor(props){
		super(props);
		//console.log(this.props.eventInfoFromApp.members[0]);
		this.state = {
			name: this.props.eventInfoFromApp.name,
			invites: this.props.eventInfoFromApp.members,
			fullDetails: this.props.eventInfoFromApp,
			createdEventId: this.props.eventInfoFromApp.createdEventId
		}
	}

	handleRemove(event){
			var deleteId = this.props.eventInfoFromApp.id;
			var post_req = "/delete?id=" + deleteId;
			fetch(post_req);
	}



		render(){
			//console.log(this.state.fullDetails);
			console.log(this.state);
			return (
				<div id="Event">
				<div id="Event-Header">
								<p id="Event-Name">{this.state.name} </p>
								<i id="delete" class="fas fa-minus-circle" onClick={this.handleRemove.bind(this)} my_id = {this.state.createdEventId}></i>
				</div>

					<div>
						<p id="invited">Invited</p>
					</div>

					<div id="Event-Body">
						<ul>
							{this.state.invites.map((invite) => <li>{invite}</li>)}
						</ul>
						<br />
						<Details eventInfoFromApp={this.state.fullDetails} detailsInfoFromEvent={this.state.createdEventId}/>
					</div>
				</div>
			);
		}
	}

	export default Event;
