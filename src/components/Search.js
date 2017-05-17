import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult'
import Loader from './Loader';

import { fetchSearchResult } from '../actions'

class Search extends Component {
	render() {
		const marginTop = {
			marginTop: "20px",
		}
		let searchTerm = '';
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
							<div className="col-md-6 col-md-offset-2 col-sm-6 col-sm-offset-2 col-xs-8">
								<div className="form-group">
									<input ref={node => { searchTerm=node}} type="text" className="form-control" id="term" />
								</div>
							</div>
							<div className="col-md-2 col-sm-2 col-xs-4">
								<button type="submit" className="form-control btn btn-default" id="search">Search</button>
							</div>
						</form>
					</div>
				</div>
				<div className="row text-center">
					<Loader isFetching={this.props.isFetching} />
				</div>
				<div className="row">
					<SearchResult
						searchActive={this.props.searchActive}
						searchTerm={this.props.searchTerm}
						items={this.props.items}
						total_count={this.props.total_count}
					/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { uiState, repoState } = state;
	return {
		searchActive: uiState.searchActive,
		isFetching: uiState.isFetching,
		searchTerm: uiState.searchTerm,
		items: repoState.items,
		total_count: repoState.total_count
	}
}

Search = connect(mapStateToProps)(Search);
export default Search;