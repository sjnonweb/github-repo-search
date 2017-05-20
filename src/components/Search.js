import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResult from './SearchResult'
import Loader from './Loader';
import SearchBar from './SearchBar';



class Search extends Component {
	constructor() {
		super();
		this.decider = this.decider.bind(this)
	}
	
	decider() {
		if(this.props.isFetching && this.props.searchActive) {
			return (<Loader />)
		}
		else if(!this.props.isFetching && this.props.searchActive ) {
			return (
				<SearchResult
					searchTerm={this.props.searchTerm}
					items={this.props.items}
					total_count={this.props.total_count}
				/>
			)
		}
	}

	render() {
		return (
			<div>
				<SearchBar />
				{this.decider()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const { uiState, repoResultState } = state;
	return {
		searchActive: uiState.searchActive,
		isFetching: uiState.isFetching,
		searchTerm: uiState.searchTerm,
		items: repoResultState.items,
		total_count: repoResultState.total_count
	}
}

Search = connect(mapStateToProps)(Search);
export default Search;
