import React, { Component } from 'react';

export default class Error extends Component {
	render() {
		return (
			<div className="row text-center">
				<h2><span className="glyphicon glyphicon-globe"></span></h2>
				<h3 className="text-danger">Please check your network connection!</h3>
			</div>
		)
	}
}
