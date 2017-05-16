import React, { Component } from 'react';

export default class SearchResult extends Component {
	render() {
		let searchActive = false;
		if(searchActive) {
			return (<h1>active</h1>);
		}
		else
			return null;
	}
}