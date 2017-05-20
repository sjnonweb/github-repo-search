import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../actions'

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.searchTerm = '';
	}


	handleSubmit(e) {
		e.preventDefault();
		if (!this.searchTerm.value.trim()) {
			return
		}
		this.props.dispatch(fetchSearchResult(this.searchTerm.value));
	}

	render() {
		return (
			<div className="row">
				<div>
					<form onSubmit={this.handleSubmit}>
						<div className="col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-2 col-xs-8">
							<div className="form-group">
								<input ref={node => {this.searchTerm = node}} type="text" pattern="[a-zA-Z\-_]*" title="Only single or connected terms allowed. Used hyphen or underscore to separete terms" required className="form-control" id="term" />
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
