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
			fullDetails: this.props.eventInfoFromApp
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
					<Details eventInfoFromApp={this.state.fullDetails} />
				</div>
			</div>
		);
	}
}

export default Event;
