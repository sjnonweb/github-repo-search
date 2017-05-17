import React, { Component } from 'react';
//import { NavLink } from 'react-router-dom'

export default class SearchList extends Component {
	render() {
		return (
			<div className="list-group-item">
				<span className="badge">{this.props.item.stargazers_count}</span>
				<a href={this.props.item.html_url} target="_blank" className="list-group-item-heading">{this.props.item.name}</a>
				<p className="list-group-item-text">{this.props.item.full_name}</p>
				<p className="list-group-item-text">{this.props.item.description}</p>
			</div>
		)
	}
}