import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Loader.css'

export default class Loader extends Component {
	render() {
		return (
			<div className="row text-center">
				<div className="loader-container">
					<img src={logo} className="loader-logo" alt="loader" />
				</div>
			</div>
		)
	}
}
