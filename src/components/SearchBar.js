import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../actions'

class SearchBar extends Component {
	
	/*handleClick(e) {
		e.preventDefault();

	}*/

	render() {
		let searchTerm = 'someti';
		return (
			<div className="row">
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (!searchTerm.value.trim()) {
								return
							}
							console.log(searchTerm.value);
							this.props.dispatch(fetchSearchResult(searchTerm.value));
						}}
					>
						<div className="col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-2 col-xs-8">
							<div className="form-group">
								<input ref={node => { searchTerm = node }} type="text" className="form-control" id="term" />
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
