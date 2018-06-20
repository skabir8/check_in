import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: this.props.eventInfoFromApp.name,
			invites: this.props.eventInfoFromApp.invites
		}
	}


	render(){
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
				</div>
			</div>
		);
	}
}

export default Event;