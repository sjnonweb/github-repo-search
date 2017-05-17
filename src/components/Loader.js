import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './Loader.css'

export default class Loader extends Component {
	render() {
		if (!this.props.isFetching) {
			return null
		}
		else {
			return (
				<div className=".loader-container">
					<img src={logo} className="loader-logo" alt="loader" />
				</div>
			)
		}
	}
}