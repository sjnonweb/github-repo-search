import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom'

export default class SearchList extends Component {
	render() {
		return (
			<div className="list-group-item">
				<div className="row">
					<div className="col-md-8 col-sm-8 col-xs-8">
						<a href={this.props.item.html_url} target="_blank" className="list-group-item-heading">{this.props.item.full_name}</a>
						<p className="list-group-item-text">{this.props.item.description}</p>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-4 text-right">
						<p className="badge"><span className="glyphicon glyphicon-star" aria-hidden="true">{" "}</span>{this.props.item.stargazers_count}</p>
						<h5 className="list-group-item-text">{this.props.item.language}</h5>
					</div>
				</div>
			</div>
		)
	}
}