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


	render(){
		//console.log(this.state.fullDetails);
		return (
			<div id="Event">
				<div id="Event-Header">
					<p id="Event-Name">{this.state.name}</p>
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
