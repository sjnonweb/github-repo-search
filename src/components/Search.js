import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult'

import { fetchSearchResult } from '../actions'

class Search extends Component {
	render() {
		const marginTop = {
			marginTop: "20px",
		}
		let searchTerm
		return (
			<div className="container" style={marginTop}>
				<div className="row">
					<div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								if(!searchTerm.value.trim()) {
									return
								}
								console.log(searchTerm.value);
								this.props.dispatch(fetchSearchResult(searchTerm.value));
							}}
						>
							<div className="col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-2">
								<div className="form-group">
									<input ref={node => { searchTerm=node}} type="text" className="form-control" id="term" />
								</div>
							</div>
							<div className="col-md-2 col-sm-2">
								<button type="submit" className="form-control btn btn-default" id="search">Search</button>
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<SearchResult />
				</div>
			</div>
		)
	}
}

Search = connect()(Search);
export default Search;