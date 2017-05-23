import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { NavLink } from 'react-router-dom'

export default class SearchList extends Component {
	
	calcElapsedTime(time) {
		const currTime = Date.now();
		const updatedTime = new Date(time).getTime();
		const inMil = currTime - updatedTime;
		const inSec = inMil / 1000;
		const inMin = inSec / 60;
		const inHour = inMin / 60;
		if(inHour >= 24) {
			let days = inHour/24;
			return Math.round(days) + " days ago"
		}
		else if (inHour >= 0.5)
			return Math.round(inHour) + " hours ago"
		else
			return Math.round(inMin) + " minutes ago"
	}

	render() {
		return (
			<div className="list-group-item">
				<div className="row">
					<div className="col-md-8 col-sm-8 col-xs-8">
						<Link to={`/${this.props.id}`} className="list-group-item-heading">{this.props.item.full_name}</Link>
						<p className="list-group-item-text">{this.props.item.description}</p>
						<h5 className="list-group-item-text">Last updated: {this.calcElapsedTime(this.props.item.updated_at)}.</h5>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-4 text-right">
						<p className="badge"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>&nbsp;{this.props.item.stargazers_count}</p>
						<br />
						<p className="badge"><span className="glyphicon glyphicon-scissors" aria-hidden="true"></span>&nbsp;{this.props.item.forks_count}</p>
						<br />
						<p className="badge"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;{this.props.item.language}</p>
					</div>
				</div>
			</div>
		)
	}
}