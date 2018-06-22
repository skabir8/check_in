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
		var obj = {
			query:""
		}
		var deleteId = this.props.eventInfoFromApp.id;
		var post_req = "/delete?id=" + deleteId;
		obj.query = post_req;
		//this.props.appCallback(obj);
		fetch(post_req);
	}

	handleSubmit(event){
		var obj = {
			name: this.state.name,
			invites: this.state.invites,
			createdEventId: -1,
			query:""
		}
		var new_id = Math.round(Math.random()*100000);
		obj.createdEventId = new_id;
		var post_req = "/add?id=" + new_id + "&name=" + obj.name + "&invites=" + obj.invites;
		obj.query = post_req;

		//this.setState({name: "ddddddd"});
		//console.log(this.state.name);
		this.props.appCallback(obj);
	}


		render(){
			//console.log(this.state.fullDetails);
			//console.log(this.state);
			return (
				<div id="Event">
					<div id="Event-Header">
						<p id="Event-Name">{this.state.name} </p>
						<i id="delete" class="fas fa-minus-circle" onClick={this.handleRemove.bind(this)} my_id = {this.state.createdEventId}></i>
					</div>

					<div>
						<p id="invited">Friends</p>
					</div>

					<div id="Event-Body">

						<div id="list-of-people">
							<ul>
								{this.state.invites.map((invite) => <li>{invite}</li>)}
							</ul>
							<button class="btn btn-secondary" data-toggle="modal" data-target={"#" + this.state.createdEventId +"myModal4"} id="see-details-button">See Details</button>
							<div id={this.state.createdEventId+"myModal4"} className="modal fade" role="dialog">
			          <div className="modal-dialog">
			            <div className="modal-content">
			              <div className="modal-body">
			                <Details eventInfoFromApp={this.state.fullDetails} detailsInfoFromEvent={this.state.createdEventId}/>
			              </div>
			            </div>
			          </div>
		        	</div>
						</div>
					</div>
				</div>
			);
		}
	}

	export default Event;
