import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../actions'

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			searchTerm: event.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.searchTerm.trim()) {
			return
		}
		this.props.dispatch(fetchSearchResult(this.state.searchTerm));
	}

	render() {
		return (
			<div className="row">
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className="col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-2 col-xs-8">
							<div className="form-group">
								<input value={this.state.searchTerm} onChange={this.handleChange} type="text" pattern="[a-zA-Z0-9\-_]*" title="Only single or connected terms allowed. Used hyphen or underscore to connect terms" required className="form-control" id="term" />
							</div>
						</div>
						<div className="col-md-2 col-sm-2 col-xs-4">
							<button type="submit" className="form-control btn btn-default" id="search">Search</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

SearchBar = connect()(SearchBar);
export default SearchBar;
